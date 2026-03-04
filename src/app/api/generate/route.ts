import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { recipeSchema } from "../../../lib/ai/recipeSchema";

// Allow responses up to 60 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
    }
    const { prompt } = body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return Response.json(
        { error: "Invalid prompt provided." },
        { status: 400 },
      );
    }

    if (prompt.length > 500) {
      return Response.json(
        { error: "Prompt is too long. Please keep it under 500 characters." },
        { status: 400 },
      );
    }

    const systemPrompt = `You are a world-class culinary AI assistant for highly aesthetically pleasing, modern, and healthy website called 'NutrientHub'.
    You possess expert knowledge in nutrition, diverse cuisines, and crafting incredibly appealing recipes.
    
    Given the user's request, formulate a unique, delicious, and nutritionally balanced recipe.
    Your response MUST exactly match the requested JSON schema.
    Ensure ingredient amounts are precise, instructions are clear, and nutritional estimates are realistic.
    Ensure descriptions sound appetizing and read smoothly.`;

    const { object } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: recipeSchema,
      system: systemPrompt,
      prompt: prompt,
      temperature: 0.4, // Add some creativity but keep it structured
      abortSignal: req.signal, // Forward the signal to cancel long running requests
    });

    return Response.json(object);
  } catch (error: any) {
    if (error?.name === "AbortError") {
      console.log("Recipe generation request was aborted by client.");
      return new Response(null, { status: 499 }); // Next extensions use 499 Client Closed Request informally
    }
    if (error?.name === "TypeValidationError") {
      console.error("Type validation failed:", error);
      return Response.json(
        { error: "AI generated invalid recipe format. Please try again." },
        { status: 500 },
      );
    }
    if (error?.name === "JSONParseError") {
      console.error("JSON parsing failed:", error);
      return Response.json(
        { error: "AI generated invalid JSON. Please try again." },
        { status: 500 },
      );
    }
    if (error?.name === "APICallError") {
      console.error("API call failed:", error);
      return Response.json(
        {
          error: "AI service is currently unavailable. Please try again later.",
        },
        { status: 502 },
      );
    }
    console.error("Error generating recipe:", error);
    return Response.json(
      { error: "Failed to generate recipe. Please try again." },
      { status: 500 },
    );
  }
}
