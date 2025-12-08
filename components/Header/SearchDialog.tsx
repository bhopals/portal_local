"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Sparkles, Command } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-2xl border-0 bg-transparent shadow-2xl overflow-hidden [&>button]:hidden">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20" />
          
          <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative px-8 pt-8 pb-6 bg-gradient-to-br from-blue-50 via-white to-gray-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Smart Search</span>
                </div>
                <DialogTitle className="text-gray-900 text-2xl font-semibold mb-1">
                  What are you looking for?
                </DialogTitle>
                <p className="text-gray-500 text-sm">
                  Search across your infrastructure, resources, and documentation
                </p>
              </div>
            </div>

            <div className="px-8 py-4 border-b border-gray-100">
              <div className={`relative rounded-xl transition-all duration-300 ${
                isFocused 
                  ? "ring-2 ring-blue-500/30 bg-white shadow-sm" 
                  : "bg-gray-50"
              }`}>
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  isFocused ? "text-blue-600" : "text-gray-400"
                }`} />
                <Input 
                  type="text" 
                  placeholder="Type to search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="h-12 text-base pl-12 pr-20 bg-transparent text-gray-900 placeholder:text-gray-400 
                  border-0 shadow-none focus-visible:ring-0" 
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md border border-gray-200">
                  <Command className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500 font-medium">K</span>
                </div>
              </div>
            </div>

            <div className="px-8 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 shadow-sm">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 shadow-sm">↑↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 shadow-sm">esc</kbd>
                  to close
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

