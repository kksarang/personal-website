import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuGroups = [
    {
      label: 'CORE',
      items: [
        { title: 'Dashboard', icon: '📊', path: '/hexenity/erp/dashboard' },
        { title: 'Analytics', icon: '📈', path: '/hexenity/erp/analytics' },
      ]
    },
    {
      label: 'MANAGEMENT',
      items: [
        { title: 'Customers', icon: '👥', path: '/hexenity/erp/customers' },
        { title: 'Clients', icon: '🧑‍💼', path: '/hexenity/erp/clients' },
        { title: 'Projects', icon: '📂', path: '/hexenity/erp/projects' },
        { title: 'Sites', icon: '🌐', path: '/hexenity/erp/sites' },
        { title: 'Inventory', icon: '📦', path: '/hexenity/erp/inventory' },
        { title: 'Employees', icon: '👤', path: '/hexenity/erp/employees' },
      ]
    }
  ];

  return (
    <div className="w-64 bg-[#0B0F19] h-full flex flex-col border-r border-white/5 transition-all duration-300">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">H</div>
        <span className="text-lg font-bold tracking-tight text-white/90">Hexenity <span className="text-indigo-400">OS</span></span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 mt-4 scrollbar-hide">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-3">
            <p className="px-4 text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">{group.label}</p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    location.pathname === item.path
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5'
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                  {location.pathname === item.path && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-white/30 hover:text-white transition-colors group">
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-medium text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-500/60 hover:text-rose-400 transition-colors group">
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
