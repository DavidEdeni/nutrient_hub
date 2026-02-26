import { Clock, Users, Star, Bookmark, ShoppingBag, ChevronRight } from "lucide-react";
import Link from "next/link";
import IngredientList from "@/components/IngredientList";
import PreparationSteps from "@/components/PreparationSteps";

export default function RecipeDetail() {
  const ingredients = [
    { id: "1", amount: "2 cups", name: "Quinoa, cooked", subtext: "About 1 cup uncooked" },
    { id: "2", amount: "1 large", name: "Sweet Potato", subtext: "Cubed and roasted" },
    { id: "3", amount: "1 can", name: "Chickpeas, drained", subtext: "15oz (400g) organic" },
    { id: "4", amount: "2 handfuls", name: "Baby Spinach", subtext: "Fresh and washed" },
    { id: "5", amount: "1/2", name: "Avocado", subtext: "Sliced" },
    { id: "6", amount: "Tahini Lemon Dressing", name: "", subtext: "3 tbsp Tahini, 1 tbsp Lemon, Salt & Pepper" },
  ];

  const steps = [
    {
      number: 1,
      title: "Preheat and Roast",
      description: "Preheat your oven to 400°F (200°C). Toss cubed sweet potatoes and chickpeas with olive oil, salt, and paprika. Roast for 25-30 minutes until golden and tender."
    },
    {
      number: 2,
      title: "Cook the Base",
      description: "While roasting, cook the quinoa according to package instructions. Fluff with a fork and let it cool slightly for best texture."
    },
    {
      number: 3,
      title: "Prepare Dressing",
      description: "In a small bowl, whisk together tahini, lemon juice, a splash of warm water, and seasonings until creamy and smooth."
    },
    {
      number: 4,
      title: "Assemble Bowls",
      description: "Divide spinach into two bowls. Add cooked quinoa, roasted sweet potatoes, and chickpeas. Top with avocado slices and drizzle generously with tahini dressing."
    }
  ];

  const tip = "Massage the spinach with a tiny bit of lemon juice and olive oil before plating to make it even more tender and flavorful.";

  return (
    <div className="p-8 pb-32 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
        <Link href="/" className="hover:text-primary transition-colors">Recipes</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="#" className="hover:text-primary transition-colors">Lunch & Bowls</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">Harvest Buddha Bowl</span>
      </nav>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="flex gap-2 mb-4">
            <span className="bg-green-50 text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Vegan</span>
            <span className="bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Gluten-Free</span>
            <span className="bg-green-50 text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">High Fiber</span>
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight max-w-2xl">
            Harvest Buddha Bowl with Tahini Drizzle
          </h1>
          <div className="flex items-center gap-6 text-sm font-bold text-gray-600">
            <div className="flex items-center gap-1.5 text-gray-900">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              4.9 <span className="text-gray-400 font-medium">(124 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              35 mins
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              2 Servings
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/20 text-primary font-bold hover:bg-green-50 transition-colors shadow-sm bg-white">
            <Bookmark className="w-5 h-5" />
            Save to Favorites
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-md">
            <ShoppingBag className="w-5 h-5" />
            Add to Shopping List
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
        
        {/* Left Column: Image & Nutrition */}
        <div className="lg:col-span-1 space-y-8">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-md relative group">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" 
              alt="Harvest Buddha Bowl" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Nutrition Breakdown</h3>
                <p className="text-xs text-gray-500">Estimated values per serving (420g)</p>
              </div>
              <span className="bg-green-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                450 kcal
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Protein</p>
                <p className="text-2xl font-serif font-bold text-gray-900 mb-2">18g</p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[45%]" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Carbs</p>
                <p className="text-2xl font-serif font-bold text-gray-900 mb-2">52g</p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[75%]" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Fats</p>
                <p className="text-2xl font-serif font-bold text-gray-900 mb-2">22g</p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[35%]" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Fiber</p>
                <p className="text-2xl font-serif font-bold text-gray-900 mb-2">12g</p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[90%]" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Vitamins & Minerals
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Vitamin A</span>
                  <span className="font-bold text-gray-900">120% DV</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Vitamin C</span>
                  <span className="font-bold text-gray-900">45% DV</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                  <span className="text-gray-600 font-medium">Iron</span>
                  <span className="font-bold text-gray-900">25% DV</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Magnesium</span>
                  <span className="font-bold text-gray-900">18% DV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ingredients & Steps */}
        <div className="lg:col-span-2 space-y-8">
          <IngredientList ingredients={ingredients} />
          <PreparationSteps steps={steps} tip={tip} />
        </div>
      </div>
    </div>
  );
}
