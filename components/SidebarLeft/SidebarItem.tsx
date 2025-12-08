"use client";

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface SubmenuItem {
  label: string;
  link: string;
}

interface SidebarItemProps {
  icon: string;
  label: string;
  isCollapsed: boolean;
  badge?: string;
  link?: string;
  submenu?: SubmenuItem[];
}

export default function SidebarItem({ icon, label, isCollapsed, badge, link = "/", submenu }: SidebarItemProps) {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const isActive = pathname === link || (link !== "/" && pathname.startsWith(link));
  const hasSubmenu = submenu && submenu.length > 0;
  
  const handleClick = (e: React.MouseEvent) => {
    if (hasSubmenu && !isCollapsed) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };
  
  const content = (
    <>
      {isActive && !isCollapsed && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white/40 rounded-full" />
      )}
      <div className={`flex-shrink-0 ${isActive ? "brightness-0 invert" : ""} transition-all duration-200`}>
        <Image src={icon} alt={label} width={20} height={20} />
      </div>
      
      <span 
        className={`overflow-hidden transition-all duration-300 whitespace-nowrap text-[13px] font-medium ${
          isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        }`}
      >
        {label}
      </span>

      {badge && !isCollapsed && (
        <span className={`ml-auto px-2 py-0.5 text-[10px] font-semibold rounded-full ${
          isActive 
            ? "bg-white/20 text-white" 
            : badge === "New" 
              ? "bg-violet-100 text-violet-600" 
              : "bg-blue-100 text-blue-600"
        }`}>
          {badge}
        </span>
      )}

      {hasSubmenu && !isCollapsed && (
        <ChevronDown 
          className={`ml-auto w-4 h-4 transition-transform duration-200 ${
            isSubmenuOpen ? "rotate-180" : ""
          } ${isActive ? "text-white" : "text-slate-500"}`}
        />
      )}

      {badge && isCollapsed && (
        <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
      )}
    </>
  );

  return (
    <div className="relative group">
      {hasSubmenu ? (
        <div
          onClick={handleClick}
          className={`relative flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded-sm cursor-pointer
           transition-all duration-200  ${isActive
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            }
        `}
        >
          {content}
        </div>
      ) : (
        <Link 
          href={link}
          className={`relative flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded-sm cursor-pointer
           transition-all duration-200  ${isActive
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            }
        `}
        >
          {content}
        </Link>
      )}
        
        {hasSubmenu && isSubmenuOpen && !isCollapsed && (
          <div className="ml-6 mt-2 space-y-0.5 overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <div className="relative pl-2 border-l-2 border-slate-200/60">
              {submenu.map((item, index) => {
                const isSubmenuActive = pathname === item.link || pathname.startsWith(item.link);
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`group/submenu relative flex items-center px-3 py-2 rounded-md text-[12px] font-medium transition-all duration-200 ${
                      isSubmenuActive
                        ? "bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 font-semibold shadow-sm shadow-blue-100/50"
                        : "text-slate-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100/50 hover:text-slate-900"
                    }`}
                  >
                    {isSubmenuActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[9px] w-1.5 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-sm shadow-blue-500/30" />
                    )}
                    <span className={`relative flex items-center gap-2 ${isSubmenuActive ? "text-blue-700" : "text-slate-600 group-hover/submenu:text-slate-900"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        isSubmenuActive 
                          ? "bg-blue-500 shadow-sm shadow-blue-500/50" 
                          : "bg-slate-300 group-hover/submenu:bg-slate-400"
                      }`} />
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        {isCollapsed && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 origin-left z-[9999] shadow-xl border border-slate-700">
            {label}
            {badge && <span className="ml-2 text-blue-300">({badge})</span>}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900" />
          </div>
        )}
      </div>
    );
  }