"use client";

import { useState, useRef, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { Lightbulb, Search, Loader2 } from "lucide-react";
import type { GeneratedRecipe } from "../src/lib/ai/recipeSchema";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] =
    useState<GeneratedRecipe | null>(null);
  const [error, setError] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError("");
    setGeneratedRecipe(null);

    // Cancel any ongoing request before starting a new one
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        signal: abortControllerRef.current.signal,
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
      setPrompt(""); // Clear search bar on success/completion
    }
  };
  const recipes = [
    {
      id: "1",
      title: "Seared Salmon with Asparagus and Poached Egg",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
      time: "25 min",
      calories: "450 kcal",
      type: "Main Course",
      dietaryTag: "Keto",
      rating: "4.8",
      ratingCount: "2.1k",
    },
    {
      id: "2",
      title: "Hand-pulled Pasta with Burst Cherry Tomatoes",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop",
      time: "20 min",
      calories: "380 kcal",
      type: "Pasta",
      dietaryTag: "Vegan",
      rating: "4.9",
      ratingCount: "2.4k",
    },
    {
      id: "3",
      title: "Spicy Sesame Tofu with Sautéed Greens",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
      time: "15 min",
      calories: "320 kcal",
      type: "Dinner",
      dietaryTag: "Low Carb",
      rating: "4.7",
      ratingCount: "1.2k",
    },
    {
      id: "4",
      title: "Mixed Berry Smoothie Bowl with Homemade Granola",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop",
      time: "10 min",
      calories: "280 kcal",
      type: "Smoothie Bowl",
      dietaryTag: "Vegan",
      authorIcon: <Lightbulb className="w-4 h-4 text-yellow-500" />,
    },
    {
      id: "5",
      title: "Mediterranean Falafel Bowl with Tahini Drizzle",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
      time: "30 min",
      calories: "520 kcal",
      type: "Lunch",
      dietaryTag: "High Fiber",
      rating: "4.7",
      ratingCount: "1.8k",
    },
  ];

  const categories = [
    "All Recipes",
    "High Protein",
    "Under 30 Mins",
    "Keto",
    "Vegan",
    "Meal Prep",
    "Desserts",
  ];

  return (
    <>
      <header className="h-20 bg-transparent flex items-center justify-between px-8 sticky top-0 z-30 w-full lg:mt-4">
        {/* Spacer for Flex Alignment */}
        <div className="flex-1 hidden md:block"></div>

        {/* Centered Pill Search Form for AI Generation */}
        <div className="flex-[2] md:flex-1 max-w-4xl relative flex justify-center w-full">
          <form
            onSubmit={handleGenerate}
            className="relative w-full shadow-sm rounded-full bg-white border border-gray-100 flex items-center px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-[#00E676]/30"
          >
            <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
              placeholder="Type ingredients you have (e.g. chicken, avocado)..."
              className="w-full bg-transparent border-none text-sm font-medium outline-none text-gray-800 placeholder:text-gray-400 disabled:opacity-50"
            />
            {isLoading && (
              <Loader2 className="w-5 h-5 animate-spin text-[#00E676] absolute right-4" />
            )}
          </form>
        </div>

        {/* User Actions Right Aligned */}
        <div className="flex-1 flex justify-end items-center gap-4"></div>
      </header>

      <div className="p-8 pb-32 max-w-7xl mx-auto relative">
        <div className="space-y-8">
          {/* Validation Errors */}
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          {/* AI Generation Result Block */}
          {generatedRecipe && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 mb-12">
              <h2 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-[#00E676]" />
                Your AI Chef Creation
              </h2>
              <RecipeCard
                id="generated"
                title={generatedRecipe.title}
                image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop" // Temporary placeholder
                time={generatedRecipe.time}
                calories={generatedRecipe.calories}
                type={generatedRecipe.type}
                dietaryTag={generatedRecipe.dietaryTags[0] || "Custom Blend"}
                isLarge={true}
              />
            </div>
          )}

          {/* Main Feed Content */}
          {/* Recommended Feed Header */}
          <div>
            <h2 className="font-bold text-3xl text-gray-900 mb-2 tracking-tight">
              Recommended for You
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Based on your maintain weight goal and keto preferences.
            </p>

            {/* Category Filters */}
            <section className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category, i) => (
                <button
                  key={category}
                  className={`px-5 py-2 whitespace-nowrap rounded-full text-sm font-bold transition-all ${
                    i === 0
                      ? "bg-[#00E676] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </section>
          </div>

          {/* Strict 2 Column Layout Matching Reference */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
