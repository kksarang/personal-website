import React from 'react';
import ERPLayout from './ERPLayout';
import { 
  Package, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Plus,
  Search
} from 'lucide-react';

const inventoryItems = [
  { id: 1, name: 'Cloud Server Instance', category: 'Infrastructure', stock: 42, minStock: 10, price: '$120.00', status: 'In Stock' },
  { id: 2, name: 'Premium UI Kit', category: 'Software Assets', stock: 156, minStock: 20, price: '$49.00', status: 'In Stock' },
  { id: 3, name: 'Workstation Laptop', category: 'Hardware', stock: 3, minStock: 5, price: '$2,499.00', status: 'Low Stock' },
  { id: 4, name: 'SSL Certificates', category: 'Security', stock: 89, minStock: 15, price: '$25.00', status: 'In Stock' },
  { id: 5, name: 'Development Tablet', category: 'Hardware', stock: 0, minStock: 5, price: '$799.00', status: 'Out of Stock' },
];

const Inventory = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Inventory Management</h1>
          <p className="text-white/40">Monitor and manage your digital and physical assets.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] rounded-xl text-sm font-semibold text-white hover:bg-[#4F46E5]/90 transition-all shadow-lg shadow-[#4F46E5]/20">
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-[#4F46E5]" />
            <h3 className="text-sm font-medium text-white/60">Total Items</h3>
          </div>
          <p className="text-2xl font-bold text-white">290</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-medium text-white/60">Low Stock Alerts</h3>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-medium text-white/60">Active Categories</h3>
          </div>
          <p className="text-2xl font-bold text-white">8</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm focus:outline-none focus:border-[#4F46E5]/50 transition-all font-inter"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/60 focus:outline-none focus:border-[#4F46E5]/50 outline-none cursor-pointer">
              <option className="bg-[#111827]">All Categories</option>
              <option className="bg-[#111827]">Infrastructure</option>
              <option className="bg-[#111827]">Hardware</option>
              <option className="bg-[#111827]">Software</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-xs uppercase tracking-wider text-white/30">
                <th className="px-6 py-4 font-semibold">Asset Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Stock Level</th>
                <th className="px-6 py-4 font-semibold">Unit Price</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {inventoryItems.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-white/90 group-hover:text-[#a5b4fc] transition-colors">{item.name}</span>
                  </td>
                  <td className="px-6 py-4 text-white/60">{item.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.stock === 0 ? 'bg-rose-500' :
                            item.stock <= item.minStock ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min((item.stock/100)*100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-white/40">{item.stock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/50">{item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      item.status === 'In Stock' ? 'bg-emerald-400/10 text-emerald-400' :
                      item.status === 'Low Stock' ? 'bg-amber-400/10 text-amber-400' :
                      'bg-rose-400/10 text-rose-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-white/30 hover:text-white hover:bg-white/10 rounded-lg transition-all">
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

export default Inventory;
