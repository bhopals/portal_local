"use client";

import { Search, Command } from "lucide-react";

interface SearchBarProps {
  isCollapsed: boolean;
  onSearchClick: () => void;
}

export default function SearchBar({ isCollapsed, onSearchClick }: SearchBarProps) {
  if (isCollapsed) {
    return (
      <div className="px-2 py-3 flex justify-center">
        <button
          onClick={onSearchClick}
          className="w-10 h-10 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Search className="w-[18px] h-[18px] text-slate-500" />
        </button>
      </div>
    );
  }

  return (
      <button
        onClick={onSearchClick}
        className="w-80 h-10 px-3 flex items-center gap-3 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/60 rounded-md cursor-pointer transition-all duration-200 group"
      >
        <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-500 transition-colors" />
        <span className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">Search...</span>
        <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 bg-white/80 rounded-md border border-slate-200/80 shadow-sm">
          <Command className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] font-medium text-slate-400">K</span>
        </div>
      </button>
  );
}

