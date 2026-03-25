import React from 'react';
import ERPLayout from './ERPLayout';
import { Plus, Search, Globe, Server, Shield, MoreVertical, MapPin, ExternalLink, Activity } from 'lucide-react';

const sites = [
  { id: 1, name: 'Dubai HQ', location: 'Dubai, UAE', status: 'Online', uptime: '99.98%', traffic: '12.4TB', type: 'Primary' },
  { id: 2, name: 'London Data Center', location: 'London, UK', status: 'Online', uptime: '99.99%', traffic: '45.1TB', type: 'Edge' },
  { id: 3, name: 'Singapore Hub', location: 'Singapore', status: 'Maintenance', uptime: '98.50%', traffic: '8.2TB', type: 'Secondary' },
  { id: 4, name: 'New York Node', location: 'New York, USA', status: 'Online', uptime: '99.95%', traffic: '22.8TB', type: 'Edge' },
  { id: 5, name: 'Mumbai Server', location: 'Mumbai, India', status: 'Online', uptime: '99.90%', traffic: '5.6TB', type: 'Edge' },
];

const Sites = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-3xl font-bold tracking-tight text-white">Global Sites</h1>
          </div>
          <p className="text-white/30 text-sm">Manage physical locations, regional hubs, and cloud deployment nodes globally.</p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add New Site
        </button>
      </div>

      <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
            <input 
              type="text" 
              placeholder="Filter sites..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-emerald-500/50 transition-all text-white/80 placeholder:text-white/10"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-lg">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">All Nodes Stable</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-[10px] uppercase font-black tracking-widest text-white/20">
                <th className="px-6 py-5">Site / Node Name</th>
                <th className="px-6 py-5">Geography</th>
                <th className="px-6 py-5">Node Type</th>
                <th className="px-6 py-5">Avg Uptime</th>
                <th className="px-6 py-5">Monthly traffic</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {sites.map((site) => (
                <tr key={site.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight">{site.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-white/60 transition-colors uppercase text-[10px] tracking-wider">
                      <MapPin className="w-3 h-3 text-emerald-400/50" />
                      {site.location}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-0.5 rounded-md border border-white/5 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
                      {site.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-black text-emerald-400/80 tracking-tight">{site.uptime}</td>
                  <td className="px-6 py-5 text-white/60 font-medium">{site.traffic}</td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      site.status === 'Online' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {site.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-white/10 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-white/10 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
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

export default Sites;
