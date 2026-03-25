import React from 'react';
import ERPLayout from './ERPLayout';
import { Plus, Search, Filter, MoreVertical, Mail, User, ShieldCheck } from 'lucide-react';

const customers = [
  { id: 1, name: 'John Doe', email: 'john@email.com', status: 'Active', spent: '$1,200', type: 'Enterprise' },
  { id: 2, name: 'Jane Smith', email: 'jane@smith.io', status: 'Pending', spent: '$450', type: 'Startup' },
  { id: 3, name: 'Mike Ross', email: 'mike@pearson.com', status: 'Active', spent: '$8,900', type: 'Enterprise' },
  { id: 4, name: 'Harvey Specter', email: 'harvey@legal.com', status: 'Inactive', spent: '$12,000', type: 'Partner' },
  { id: 5, name: 'Rachel Zane', email: 'rachel@zane.com', status: 'Active', spent: '$3,200', type: 'Enterprise' },
];

const Customers = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <h1 className="text-3xl font-bold tracking-tight text-white">Customers</h1>
          </div>
          <p className="text-white/30 text-sm">Manage your global customer base and relationship lifecycle.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" /> Add Customer
        </button>
      </div>

      <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
            <input 
              type="text" 
              placeholder="Filter customers..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white/80 placeholder:text-white/10"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-white/40 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-[10px] uppercase font-black tracking-widest text-white/20">
                <th className="px-6 py-5">Customer</th>
                <th className="px-6 py-5">Email Address</th>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Total Spent</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        {customer.name.charAt(0)}
                      </div>
                      <span className="font-bold text-white/90 group-hover:text-white transition-colors">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-white/40 font-medium group-hover:text-white/60 transition-colors uppercase text-[10px] tracking-wider">{customer.email}</td>
                  <td className="px-6 py-5">
                    <span className="flex items-center gap-1.5 text-white/50 text-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400/50" />
                      {customer.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-black text-white/80 tracking-tight">{customer.spent}</td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      customer.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      customer.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {customer.status}
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

export default Customers;
