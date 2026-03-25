import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { X } from 'lucide-react';

const ERPLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden font-inter">
      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar drawer */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar />
        
        {/* Mobile close button inside sidebar */}
        <button 
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 text-white/40 hover:text-white md:hidden"
        >
          <X className="w-6 h-6" />
        </button>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0B0F19] p-4 md:p-8">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}

            <footer className="mt-20 pb-8 border-t border-white/5 pt-8 text-center">
              <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
                Hexenity OS v2.4.0 • Built with ⚡ by <span className="text-white/40 font-black">Hexenity</span>
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ERPLayout;
