"use client";

import { useState } from "react";
import { Lightbulb, Loader2 } from "lucide-react";
import type { GeneratedRecipe } from "../src/lib/ai/recipeSchema";
import RecipeCard from "./RecipeCard";

export default function GenerateRecipeForm() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<GeneratedRecipe | null>(null);
  const [error, setError] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError("");
    setGeneratedRecipe(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate recipe.");
      }

      const data = await response.json();
      setGeneratedRecipe(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
          if (err.name === "AbortError") {
              console.log("Fetch aborted");
              return;
          }
          setError(err.message || "An error occurred.");
      } else {
          setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Input Form */}
      <form onSubmit={handleGenerate} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        
        <h2 className="font-serif font-bold text-2xl text-gray-900 mb-2 flex items-center gap-2 relative z-10">
          <Lightbulb className="w-6 h-6 text-primary" />
          AI Chef 
        </h2>
        <p className="text-gray-500 mb-6 relative z-10">Describe what you&apos;re craving, what ingredients you have, or your dietary goals.</p>
        
        <div className="flex flex-col md:flex-row gap-4 relative z-10">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. A high-protein vegan dinner using sweet potatoes and chickpeas..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Cooking...
              </>
            ) : (
              "Generate Recipe"
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-4 relative z-10">{error}</p>
        )}
      </form>

      {/* Results Display */}
      {generatedRecipe && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <h3 className="font-serif font-bold text-2xl text-gray-900 mb-6">Your Culinary Creation</h3>
           <RecipeCard
              id="generated"
              title={generatedRecipe.title}
              image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop" // Placeholder until image gen is added
              time={generatedRecipe.time}
              calories={generatedRecipe.calories}
              type={generatedRecipe.type}
              dietaryTag={generatedRecipe.dietaryTags[0] || "Custom"}
              isLarge={true}
            />
        </div>
      )}
    </div>
  );
}
