"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Notification from "@/public/sidebar/notification.svg";
import Image from "next/image";
import SearchBar from "./SearchBar";
import SearchDialog from "./SearchDialog";

interface HeaderSectionProps {
  pageTitle?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function HeaderSection({ pageTitle = "Home", isCollapsed, onToggle }: HeaderSectionProps) {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);

  const openSearchDialog = () => {
    setIsSearchDialogOpen(true);
  };

  return (
    <header className={`fixed top-0 right-0 z-30 h-16 bg-card border-b border-border flex items-center justify-between px-6 transition-all duration-300 ${isCollapsed ? 'left-[72px]' : 'left-64'}`}>
        {/* Left side - Sidebar Toggle and Page Title */}
          <h1 className="tracking-tight text-gray-900 text-xl font-semibold mb-0">
            {pageTitle}
          </h1>

        {/* Right side - SearchBar, Notification, User Profile */}
        <div className="flex items-center gap-5">
          {/* SearchBar */}
            <SearchBar isCollapsed={false} onSearchClick={openSearchDialog} />
          {/* Notification with Badge */}
          <button className="relative group cursor-pointer" title="Notification">
            <Image src={Notification} alt="Notification" width={20} height={20} />
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-violet-100 text-violet-600 absolute -top-4 -right-2 min-w-[20px] h-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Profile */}
        <div className={`relative group flex items-center gap-3 ${isCollapsed ? "justify-center" : ""} cursor-pointer transition-all duration-200`}>
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-medium text-sm shadow-md">
              U
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="text-sm font-medium text-slate-700 truncate">User Name</span>
              <span className="text-xs text-slate-400 truncate">user@example.com</span>
            </div>
        </div>
        </div>
      <SearchDialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen} />
    </header>
  );
}
