import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { recipeSchema } from '../../../lib/ai/recipeSchema';

// Allow responses up to 60 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const systemPrompt = `You are a world-class culinary AI assistant for highly aesthetically pleasing, modern, and healthy website called 'NutrientHub'.
    You possess expert knowledge in nutrition, diverse cuisines, and crafting incredibly appealing recipes.
    
    Given the user's request, formulate a unique, delicious, and nutritionally balanced recipe.
    Your response MUST exactly match the requested JSON schema.
    Ensure ingredient amounts are precise, instructions are clear, and nutritional estimates are realistic.
    Ensure descriptions sound appetizing and read smoothly.`;

    const userPrompt = prompt || "Create a random healthy, vibrant, and delicious recipe suitable for a modern wellness app.";

    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: recipeSchema,
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7, // Add some creativity but keep it structured
    });

    return Response.json(object);
  } catch (error) {
    console.error("Error generating recipe:", error);
    return Response.json({ error: "Failed to generate recipe. Please try again." }, { status: 500 });
  }
}
