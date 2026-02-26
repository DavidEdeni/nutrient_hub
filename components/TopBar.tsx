import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Search */}
      <div className="flex-1 max-w-xl relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search recipes, ingredients, or dietary goals..."
          className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6 ml-8">
        <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-tight">
              Sarah Miller
            </p>
            <p className="text-xs text-primary font-medium">Premium Member</p>
          </div>
          <img
            src="https://i.pravatar.cc/150?u=sarah"
            alt="Sarah Miller"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
          />
        </div>
      </div>
    </header>
  );
}
