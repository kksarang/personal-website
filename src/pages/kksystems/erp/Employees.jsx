import React from 'react';
import ERPLayout from './ERPLayout';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Plus,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const employees = [
  { id: 1, name: 'Sarang K', role: 'Solutions Architect', email: 'sarang@hexenity.com', status: 'Active', joined: '2023-01-15' },
  { id: 2, name: 'Sarah Miller', role: 'Fullstack Dev', email: 'sarah.m@hexenity.com', status: 'On Leave', joined: '2023-03-20' },
  { id: 3, name: 'Michael Chen', role: 'AI Engineer', email: 'm.chen@hexenity.com', status: 'Active', joined: '2023-06-10' },
  { id: 4, name: 'Emma Watson', role: 'Product Designer', email: 'emma.w@hexenity.com', status: 'Active', joined: '2023-07-02' },
  { id: 5, name: 'John Doe', role: 'DevOps', email: 'j.doe@hexenity.com', status: 'Inactive', joined: '2022-11-28' },
];

const Employees = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Employees</h1>
          <p className="text-white/40">Manage your team members and their roles within the organization.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] rounded-xl text-sm font-semibold text-white hover:bg-[#4F46E5]/90 transition-all shadow-lg shadow-[#4F46E5]/20">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input 
              type="text" 
              placeholder="Filter by name, role or email..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-[#4F46E5]/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-white/5 transition-all">
              <Filter className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 text-xs font-medium text-white/60 hover:text-white transition-all">
              Show: All Members
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-xs uppercase tracking-wider text-white/30">
                <th className="px-6 py-4 font-semibold">Employee</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Joined Date</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4 font-medium text-white">
                    <div className="flex flex-col">
                      <span className="font-semibold text-white/90 group-hover:text-[#a5b4fc] transition-colors">{emp.name}</span>
                      <span className="text-xs text-white/30 font-normal">{emp.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/60">{emp.role}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                      emp.status === 'Active' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' : 
                      emp.status === 'On Leave' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 
                      'bg-rose-400/10 text-rose-400 border-rose-400/20'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/50">{emp.joined}</td>
                  <td className="px-6 py-4">
                    <button className="p-1.5 text-white/30 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-medium">
          <p>Showing 5 of 24 employees</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-white/5 rounded-lg hover:text-white transition-all disabled:opacity-30" disabled>Previous</button>
            <button className="px-3 py-1.5 border border-white/5 rounded-lg hover:text-white transition-all">Next</button>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
};

export default Employees;
