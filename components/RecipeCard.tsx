import { Heart, Clock, Flame, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  calories: string;
  type: string;
  dietaryTag: string;
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
  isLarge = false,
}: RecipeCardProps) {
  if (isLarge) {
    return (
      <Link href={`/recipe/${id}`} className="group block h-full">
        <div className="relative rounded-2xl overflow-hidden h-[400px] w-full isolate flex flex-col justify-end p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="absolute inset-0 object-cover -z-20 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent -z-10" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Recipe of the Day
            </span>
          </div>
          
          <h2 className="text-white font-bold text-4xl mb-4 max-w-2xl leading-tight tracking-tight">
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
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-primary hover:bg-primary-dark transition-colors px-6 py-3 rounded-full text-white font-bold flex items-center gap-2 transform group-hover:scale-105 duration-200 shadow-sm">
              View Full Recipe
              <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/recipe/${id}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full relative group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:-translate-y-1 transition-all duration-300">
        <button className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-md p-2 rounded-full text-white hover:text-red-500 hover:bg-white shadow-sm transition-colors">
          <Heart className="w-4 h-4" />
        </button>

        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Floating tags */}
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            <span className="bg-gray-900/80 backdrop-blur-md text-white font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-sm">
              {dietaryTag}
            </span>
          </div>
          {/* Subtle gradient at bottom of image for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug line-clamp-2">
            {title}
          </h3>
          
          {/* Flat metadata line */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-gray-400 mb-4 tracking-wider uppercase">
            <span className="text-[#00E676]">{calories}</span>
            <span className="text-gray-300">•</span>
            <span>C: 45g</span>
            <span className="text-gray-300">•</span>
            <span>P: 32g</span>
            <span className="text-gray-300">•</span>
            <span>F: 18g</span>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-4">
            <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold py-2.5 rounded-xl transition-colors text-sm shadow-sm border border-gray-100">
              View Recipe
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white rounded-xl w-10 h-10 flex items-center justify-center transition-colors shadow-sm shrink-0">
               <Plus className="w-5 h-5" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
