"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  icon: string;
  label: string;
  isCollapsed: boolean;
  badge?: string;
  link?: string;
}

export default function SidebarItem({ icon, label, isCollapsed, badge, link = "/" }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link || (link !== "/" && pathname.startsWith(link));
  
  return (
    <div className="relative group">
      <Link 
        href={link}
        className={`relative flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded-sm cursor-pointer
         transition-all duration-200  ${isActive
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25"
            : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }
      `}
      >
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

          {badge && isCollapsed && (
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </Link>
        
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