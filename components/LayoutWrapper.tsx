"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import HeaderSection from "./Header/HeaderSection";
import Sidebar from "./SidebarLeft/Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

// Map routes to page titles
const routeTitles: Record<string, string> = {
  "/": "Home",
  "/cloud-onboarding": "Cloud Onboarding",
  "/landing-zone": "My Landing Zone",
  "/group": "My Group",
  "/guardian": "Guardian",
  "/create": "Create",
  "/deployments": "Deployments",
  "/insights": "Cost Insights",
  "/support": "Support + Feedback",
  "/settings": "Settings",
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const pageTitle = routeTitles[pathname] || "Home";

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <HeaderSection pageTitle={pageTitle} isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div className={`transition-all duration-300 ${isCollapsed ? 'ml-[72px]' : 'ml-64'}`}>
        {children}
      </div>
    </div>
  );
}

