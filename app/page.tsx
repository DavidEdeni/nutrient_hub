import RecipeCard from "../components/RecipeCard";
import NutritionWidget from "../components/NutritionWidget";
import GenerateRecipeForm from "../components/GenerateRecipeForm";
import { Lightbulb, Settings2 } from "lucide-react";

export default function Home() {
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
    <div className="p-8 pb-32">
      <div className="flex flex-col xl:flex-row gap-10">
        
        {/* Main Feed Content */}
        <div className="flex-1 max-w-5xl space-y-12">
          
          {/* AI Generation Form */}
          <section>
            <GenerateRecipeForm />
          </section>

          {/* Category Filters */}
          <section className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, i) => (
              <button
                key={category}
                className={`px-5 py-2 whitespace-nowrap rounded-full text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
            <button className="px-5 py-2 whitespace-nowrap rounded-full text-sm font-bold bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center gap-2">
              <Settings2 className="w-4 h-4" />
              More Filters
            </button>
          </section>

          {/* Hero Recipe */}
          <section>
            <RecipeCard
              id="hero"
              title="Zesty Avocado Power Bowl with Roasted Chickpeas"
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
              time="15 Mins Prep"
              calories="420 kcal"
              type="Easy Difficulty"
              dietaryTag="Recipe of the Day"
              isLarge={true}
            />
          </section>

          {/* Recommended Feed */}
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-bold text-3xl text-gray-900 mb-2 tracking-tight">
                  Recommended for You
                </h2>
                <p className="text-gray-500 text-sm">
                  Based on your dietary preferences and recent activity
                </p>
              </div>
            </div>

            {/* Strict 2 Column Layout Matching Reference */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
              
              {/* Call to action card */}
              <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden group shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 min-h-[400px]">
                <div className="absolute -top-10 -right-10 text-white/10 group-hover:text-white/20 transition-colors">
                  <Lightbulb className="w-40 h-40" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-3xl mb-4 leading-tight tracking-tight">
                  Want more personalized suggestions?
                </h3>
                <p className="text-white/90 text-sm mb-8 leading-relaxed max-w-sm">
                  Tell us more about your health goals and favorite cuisines for a custom-tailored weekly meal plan.
                </p>
                <button className="bg-white text-primary font-bold py-3.5 px-6 rounded-full mt-auto hover:bg-gray-50 transition-colors w-full shadow-sm text-center">
                  Update Diet Profile
                </button>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm w-full md:w-auto">
                Load More Recipes
              </button>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Widgets */}
        <div className="w-full xl:w-80 flex-shrink-0">
          <div className="sticky top-28 space-y-6">
            <NutritionWidget />
          </div>
        </div>
        
      </div>
    </div>
  );
}
