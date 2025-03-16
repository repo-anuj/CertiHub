import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64"> {/* Added ml-64 to account for sidebar width */}
        <Navbar />
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
