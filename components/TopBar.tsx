import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-20 bg-transparent flex items-center justify-between px-8 sticky top-0 z-30 w-full mt-4">
      {/* Spacer for Flex Alignment */}
      <div className="flex-1"></div>

      {/* Centered Pill Search */}
      <div className="flex-1 max-w-2xl relative flex justify-center">
        <div className="relative w-full shadow-sm rounded-full bg-white border border-gray-100 flex items-center px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-primary/20">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search recipes, ingredients, or dietary goals..."
            className="w-full bg-transparent border-none text-sm font-medium outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* User Actions Right Aligned */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <button className="relative p-2.5 bg-white rounded-full text-gray-500 hover:text-gray-900 shadow-sm border border-gray-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
