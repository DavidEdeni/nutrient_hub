import { Bookmark, Clock, Flame, Star, Zap } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  calories: string;
  type: string;
  dietaryTag: string;
  rating?: string;
  ratingCount?: string;
  authorIcon?: React.ReactNode;
  isLarge?: boolean;
}

export default function RecipeCard({
  id,
  title,
  image,
  time,
  calories,
  type,
  dietaryTag,
  rating,
  ratingCount,
  authorIcon,
  isLarge = false,
}: RecipeCardProps) {
  if (isLarge) {
    return (
      <Link href={`/recipe/${id}`} className="group block h-full">
        <div className="relative rounded-3xl overflow-hidden h-[400px] w-full isolate flex flex-col justify-end p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover -z-20 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent -z-10" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Recipe of the Day
            </span>
          </div>
          
          <h2 className="text-white font-serif font-bold text-4xl mb-4 max-w-2xl leading-tight">
            {title}
          </h2>
          
          <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {time}
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              {calories}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">•</span>
              Easy Difficulty
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex items-center gap-3">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="bg-primary hover:bg-primary-dark transition-colors px-6 py-3 rounded-full text-white font-bold flex items-center gap-2 transform group-hover:scale-105 duration-200">
              View Full Recipe
              <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/recipe/${id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full relative">
        <button className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>

        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 text-xs left-3 flex gap-2">
            <span className="bg-primary text-white font-bold px-2 py-1 rounded tracking-wide uppercase shadow-sm">
              {dietaryTag}
            </span>
            <span className="bg-white text-gray-900 font-bold px-2 py-1 rounded shadow-sm">
              {type}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            <span className="text-primary">{type}</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              {time}
            </span>
          </div>

          <h3 className="font-serif font-bold text-lg text-gray-900 mb-3 leading-snug line-clamp-2">
            {title}
          </h3>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
            {rating ? (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-gray-900">{rating}</span>
                <span className="text-xs text-gray-400">({ratingCount})</span>
              </div>
            ) : authorIcon ? (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Zap className="w-4 h-4 text-yellow-500" />
                Energy Booster
              </div>
            ) : null}
            <span className="text-primary text-sm font-bold group-hover:underline">
              View Recipe
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
