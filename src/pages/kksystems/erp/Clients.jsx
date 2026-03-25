import React from 'react';
import ERPLayout from './ERPLayout';
import { Plus, Search, Briefcase, Globe, Activity, MoreVertical, Building2 } from 'lucide-react';

const clients = [
  { id: 1, name: 'TechNova Solutions', company: 'TechNova Group', projects: 12, value: '$120,000', status: 'Active', manager: 'Sarang R' },
  { id: 2, name: 'CloudScale Inc', company: 'CloudScale Systems', projects: 4, value: '$35,000', status: 'Active', manager: 'Emma W' },
  { id: 3, name: 'FinStream', company: 'FinStream Global', projects: 8, value: '$82,000', status: 'On Hold', manager: 'John D' },
  { id: 4, name: 'BioCore', company: 'BioCore Labs', projects: 2, value: '$18,000', status: 'Active', manager: 'Sarah M' },
  { id: 5, name: 'SwiftPay', company: 'SwiftPay Technologies', projects: 15, value: '$210,000', status: 'Active', manager: 'Mike C' },
];

const Clients = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <h1 className="text-3xl font-bold tracking-tight text-white">Clients</h1>
          </div>
          <p className="text-white/30 text-sm">Corporate client management and high-value partnership tracking.</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 uppercase tracking-widest font-black text-[10px]">
        {[
          { label: 'Total Value', value: '$465,000', icon: Briefcase, color: 'text-purple-400' },
          { label: 'Client Growth', value: '+12.5%', icon: Activity, color: 'text-emerald-400' },
          { label: 'Active Reach', value: '14 Countries', icon: Globe, color: 'text-cyan-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-white/20 mb-1">{stat.label}</p>
              <h3 className="text-xl text-white tracking-normal font-bold">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="p-4 border-b border-white/5">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white/80 placeholder:text-white/10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-[10px] uppercase font-black tracking-widest text-white/20">
                <th className="px-6 py-5">Corporate entity</th>
                <th className="px-6 py-5">Active projects</th>
                <th className="px-6 py-5">Contract value</th>
                <th className="px-6 py-5">Account manager</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white/90 group-hover:text-white block">{client.name}</span>
                        <span className="text-[10px] text-white/20 font-bold uppercase tracking-tighter">{client.company}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-white/50">
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden max-w-[60px]">
                        <div className="h-full bg-purple-500" style={{ width: `${(client.projects / 20) * 100}%` }} />
                      </div>
                      <span className="text-xs font-bold">{client.projects}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-black text-white/80 tracking-tight">{client.value}</td>
                  <td className="px-6 py-5 text-white/40 group-hover:text-white/60 transition-colors uppercase text-[10px] font-bold tracking-widest">{client.manager}</td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      client.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      client.status === 'On Hold' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-white/10 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ERPLayout>
  );
};

export default Clients;
