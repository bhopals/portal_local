"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SidebarItem from "./SidebarItem";
import SearchDialog from "../Header/SearchDialog";

import Image from "next/image";
import Home from "@/public/sidebar/home.svg";
import Cloud from "@/public/sidebar/cloud.svg";
import LandingZone from "@/public/sidebar/landingZone.svg";
import Group from "@/public/sidebar/group.svg";
import Guardian from "@/public/sidebar/guardian.svg";
import Create from "@/public/sidebar/create.svg";
import Deployments from "@/public/sidebar/deployment-1.svg";
import Insights from "@/public/sidebar/insights.svg";
import Support from "@/public/sidebar/support.svg";
import Settings from "@/public/sidebar/settings.svg";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);

  return (
    <aside className={`${isCollapsed ? "w-[72px] overflow-visible" : "w-64"} fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 w-64 flex flex-col`}>

      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-transparent pointer-events-none" />

      <div className={`relative ${isCollapsed ? "px-3 py-5" : "px-5 py-5"} flex items-center transition-all duration-300`}>
        <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-full opacity-100"}`}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25 flex-shrink-0">
            <span className="text-white font-bold text-sm">IF</span>
          </div>
          <Image src="/logo.svg" alt="Logo" width={150} height={36} className="h-8 w-auto" />
        </div>

        {isCollapsed && (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25 mx-auto">
            <span className="text-white font-bold text-sm">IF</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-7 w-6 h-6 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-slate-50 hover:scale-110 transition-all duration-200 z-10"
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
          )}
        </button>
      </div>

      <SearchDialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen} />

      <div className={`flex-1 ${isCollapsed ? "px-2 overflow-visible" : "px-3 overflow-y-auto"} transition-all duration-300 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent`}>
        <div className={`mb-4 mx-3 border-t`} />
        <div className={`space-y-1 ${isCollapsed ? "overflow-visible" : ""}`}>
          {!isCollapsed && (
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">Main Menu</p>
          )}
          <SidebarItem icon={Home} label="Home" link="/" isCollapsed={isCollapsed} />
          <SidebarItem icon={Cloud} label="Cloud Onboarding" link="/cloud-onboarding" isCollapsed={isCollapsed} />
          <SidebarItem icon={LandingZone} label="My Landing Zone" link="/landing-zone" isCollapsed={isCollapsed} />
          <SidebarItem icon={Group} label="My Group" link="/group" isCollapsed={isCollapsed} />
        </div>

        <div className={`my-4 mx-3 border-t`} />

        <div className={`space-y-1 ${isCollapsed ? "overflow-visible" : ""}`}>
          {!isCollapsed && (
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">Management</p>
          )}
          <SidebarItem icon={Guardian} label="Guardian" link="/guardian" isCollapsed={isCollapsed} badge="New" />
          <SidebarItem icon={Create} label="Create" link="/create" isCollapsed={isCollapsed} />
          <SidebarItem icon={Deployments} label="Deployments" link="/deployments" isCollapsed={isCollapsed} badge="3" />
          <SidebarItem icon={Insights} label="Cost Insights" link="/insights" isCollapsed={isCollapsed} />
        </div>
      </div>

      <div className={`mt-auto ${isCollapsed ? "px-2 py-3" : "px-3 py-3"} bg-gradient-to-t from-slate-50/80 to-transparent transition-all duration-300`}>
      <div className={`my-4 mx-3 border-t`} />
        {!isCollapsed && (
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">Support</p>
        )}
        <div className={`space-y-1 ${isCollapsed ? "overflow-visible" : ""}`}>
          <SidebarItem icon={Support} label="Support + Feedback" link="/support" isCollapsed={isCollapsed} />
          <SidebarItem icon={Settings} label="Settings" link="/settings" isCollapsed={isCollapsed} />
        </div>
      </div>


    </aside>
  );
}



