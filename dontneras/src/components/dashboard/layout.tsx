import { ReactNode, useState } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${isOpen ? 'md:ml-56' : 'md:ml-0'} transition-all duration-300`}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
