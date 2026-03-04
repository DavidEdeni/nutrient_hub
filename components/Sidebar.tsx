import Link from "next/link";
import { Compass, Heart, BookOpen, Calendar, Leaf } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-50/50 border-r border-gray-100 flex flex-col h-full overflow-y-auto">
      {/* Logo & Profile */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-gray-900">
            NutrientHub
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 flex flex-col">
        {/* Main Menu */}
        <nav className="space-y-1 mb-8">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-2xl font-bold"
          >
            <Compass className="w-5 h-5" strokeWidth={2.5} />
            Discover
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-white rounded-2xl font-medium transition-all"
          >
            <Calendar className="w-5 h-5" />
            Meal Plan
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-white rounded-2xl font-medium transition-all"
          >
            <Heart className="w-5 h-5" />
            Favorites
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-white rounded-2xl font-medium transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Cookbooks
          </Link>
        </nav>
      </div>
    </aside>
  );
}
