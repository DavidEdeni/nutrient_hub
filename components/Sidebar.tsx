import Link from "next/link";
import {
  Compass,
  Heart,
  BookOpen,
  ShoppingCart,
  CheckCircle2,
  Circle,
  Leaf,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="font-serif font-bold text-2xl tracking-tight text-gray-900">
          NutrientHub
        </span>
      </div>

      <div className="flex-1 px-4 space-y-8">
        {/* Main Menu */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Main Menu
          </p>
          <nav className="space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-xl font-medium"
            >
              <Compass className="w-5 h-5" />
              Discover
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors"
            >
              <Heart className="w-5 h-5" />
              Favorites
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              My Cookbooks
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Grocery List
            </Link>
          </nav>
        </div>

        {/* Meal Type */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Meal Type
          </p>
          <div className="space-y-2 px-1">
            <label className="flex items-center gap-3 cursor-pointer group">
              <Circle className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              <span className="text-gray-600 font-medium">Breakfast</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-gray-900 font-medium">Lunch</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-gray-900 font-medium">Dinner</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <Circle className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              <span className="text-gray-600 font-medium">Snacks & Sides</span>
            </label>
          </div>
        </div>

        {/* Dietary Goals */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Dietary Goals
          </p>
          <div className="flex flex-wrap gap-2 px-1">
            <span className="px-3 py-1 bg-green-50 text-primary border border-green-200 rounded-full text-xs font-semibold cursor-pointer">
              Vegan
            </span>
            <span className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100 transition-colors">
              Keto
            </span>
            <span className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100 transition-colors">
              Paleo
            </span>
            <span className="px-3 py-1 bg-green-50 text-primary border border-green-200 rounded-full text-xs font-semibold cursor-pointer">
              Gluten-Free
            </span>
            <span className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100 transition-colors">
              Low Carb
            </span>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="bg-green-50 rounded-2xl p-4 border border-green-100 mb-6">
          <p className="font-bold text-gray-900 text-sm mb-1">Weekly Goal</p>
          <p className="text-xs text-gray-600 mb-3">
            You&apos;ve cooked 4/7 plant-based meals this week!
          </p>
          <div className="h-2 w-full bg-green-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
              style={{ width: "57%" }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
