import { Check } from "lucide-react";

export default function RightSidebar() {
  const days = [
    { name: "M", done: true },
    { name: "T", done: true },
    { name: "W", done: true },
    { name: "T", done: true },
    { name: "F", done: true },
    { name: "S", done: false },
    { name: "S", done: false },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[340px] bg-[#F8FAFC] h-screen py-10 px-8 overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-8 font-sans">Daily Stats</h2>
      
      {/* Circular Calorie Chart */}
      <div className="flex justify-center mb-10 relative">
        <svg viewBox="0 0 100 100" className="w-56 h-56 transform -rotate-90">
          <circle 
            cx="50" cy="50" r="45" 
            fill="transparent" 
            stroke="#E2E8F0" 
            strokeWidth="8" 
          />
          <circle 
            cx="50" cy="50" r="45" 
            fill="transparent" 
            stroke="#00E676" 
            strokeWidth="8" 
            strokeDasharray="282.7" 
            strokeDashoffset="75" 
            className="transition-all duration-1000 ease-out" 
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span className="text-4xl font-black text-gray-900 tracking-tight">1,420</span>
          <span className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Kcal Left</span>
        </div>
      </div>

      {/* Linear Macros */}
      <div className="space-y-6 mb-12">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-gray-900 uppercase">Protein</span>
            <span className="text-xs font-bold text-gray-500">85g / 150g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#00E676] rounded-full" style={{ width: "56%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-gray-900 uppercase">Carbs</span>
            <span className="text-xs font-bold text-gray-500">32g / 50g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: "64%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-gray-900 uppercase">Fats</span>
            <span className="text-xs font-bold text-gray-500">68g / 110g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 rounded-full" style={{ width: "61%" }} />
          </div>
        </div>
      </div>

      {/* 5 Day Streak Component */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary">🔥</span>
          <h3 className="font-bold text-sm text-gray-900">5 Day Streak</h3>
        </div>
        <div className="flex justify-between items-center gap-1">
          {days.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">{day.name}</span>
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  day.done ? 'bg-[#00E676] text-white shadow-sm' : 'bg-gray-200 text-transparent'
                }`}
              >
                {day.done && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </aside>
  );
}
