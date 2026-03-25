import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="h-16 flex items-center justify-between px-4 md:px-6 bg-[#0B0F19] border-b border-white/10 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative group hidden sm:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#4F46E5] transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics..." 
            className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#4F46E5] transition-all w-64 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button className="p-2 text-white/50 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4F46E5] rounded-full border border-[#0B0F19]"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white group-hover:text-[#a5b4fc] transition-colors">Admin User</p>
            <p className="text-xs text-white/40 leading-none">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#9333EA]/20 flex items-center justify-center border border-[#4F46E5]/30">
            <User className="w-5 h-5 text-[#a5b4fc]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
