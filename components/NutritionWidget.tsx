import { TrendingUp, Plus } from "lucide-react";

export default function NutritionWidget() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900">Nutritional Progress</h3>
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>

        <div className="space-y-5">
          {/* Calories */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Daily Calories</span>
              <span className="text-gray-900 font-bold text-xs">
                1,420 <span className="text-gray-400 font-normal">/ 2,000 kcal</span>
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "71%" }} />
            </div>
          </div>

          {/* Proteins */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Proteins</span>
              <span className="text-gray-900 font-bold text-xs">
                45g <span className="text-gray-400 font-normal">/ 60g</span>
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }} />
            </div>
          </div>

          {/* Carbs */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Carbs</span>
              <span className="text-gray-900 font-bold text-xs">
                120g <span className="text-gray-400 font-normal">/ 150g</span>
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: "80%" }} />
            </div>
          </div>
        </div>

        <button className="w-full mt-6 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
          Detailed Analytics
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Suggested Experts</h3>
          <span className="text-xs font-bold tracking-widest text-primary uppercase cursor-pointer hover:underline">
            See All
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?u=ex1" className="w-10 h-10 rounded-full bg-gray-100" />
              <div>
                <p className="text-sm font-bold text-gray-900">Dr. James Chen</p>
                <p className="text-xs text-gray-500">Plant-Based Specialist</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?u=ex2" className="w-10 h-10 rounded-full bg-gray-100" />
              <div>
                <p className="text-sm font-bold text-gray-900">Elena Rodriguez</p>
                <p className="text-xs text-gray-500">Keto Diet Coach</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 text-white text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
        <h3 className="font-serif font-bold text-xl mb-2 relative z-10">Upgrade to Pro</h3>
        <p className="text-sm text-gray-400 mb-6 relative z-10 leading-relaxed">
          Unlock meal planner, shopping lists, and advanced stats.
        </p>
        <button className="w-full bg-primary hover:bg-primary-dark transition-colors py-3 rounded-xl font-bold relative z-10 flex items-center justify-center gap-2">
          Get NutrientHub Pro
        </button>
      </div>
    </div>
  );
}
