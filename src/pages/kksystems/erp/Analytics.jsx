import React from 'react';
import ERPLayout from './ERPLayout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Download, 
  Filter, 
  Calendar,
  ChevronDown
} from 'lucide-react';

const data = [
  { name: 'Jan', revenue: 4500, users: 2400, orders: 400 },
  { name: 'Feb', revenue: 5200, users: 1398, orders: 300 },
  { name: 'Mar', revenue: 4800, users: 9800, orders: 2000 },
  { name: 'Apr', revenue: 6100, users: 3908, orders: 2780 },
  { name: 'May', revenue: 5900, users: 4800, orders: 1890 },
  { name: 'Jun', revenue: 7300, users: 3800, orders: 2390 },
  { name: 'Jul', revenue: 8400, users: 4300, orders: 3490 },
];

const pieData = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Search', value: 200 },
];

const COLORS = ['#4F46E5', '#9333EA', '#22D3EE', '#f59e0b'];

const Analytics = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-white/40">Track performance metrics and insights across your project ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:border-white/20 transition-all">
            <Calendar className="w-4 h-4" />
            Last 30 Days
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] rounded-xl text-sm font-medium text-white hover:bg-[#4F46E5]/90 transition-all shadow-lg shadow-[#4F46E5]/20">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-white">Revenue vs Growth</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Revenue</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#9333EA]"></span> Users</div>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#4F46E5" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                <Area type="monotone" dataKey="users" stroke="#9333EA" fill="transparent" strokeWidth={3} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-8">Order Distribution</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="orders" fill="#22D3EE" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-4 w-full text-left">Traffic Sources</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-xs text-white/50">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl overflow-x-auto">
          <h3 className="text-lg font-semibold text-white mb-6">Regional Metrics</h3>
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-white/30 border-b border-white/5">
                <th className="pb-4 font-semibold">Region</th>
                <th className="pb-4 font-semibold">Sessions</th>
                <th className="pb-4 font-semibold">Bounce Rate</th>
                <th className="pb-4 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody className="text-sm text-white/70">
              {[
                { r: 'North America', s: '12,430', b: '24.2%', t: 'up' },
                { r: 'Europe', s: '8,210', b: '31.5%', t: 'up' },
                { r: 'Asia Pacific', s: '15,690', b: '19.8%', t: 'down' },
                { r: 'Middle East', s: '4,105', b: '28.4%', t: 'up' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-4 font-medium text-white">{row.r}</td>
                  <td className="py-4">{row.s}</td>
                  <td className="py-4">{row.b}</td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${row.t === 'up' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400'}`}>
                      {row.t === 'up' ? '+14%' : '-4%'}
                    </span>
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

export default Analytics;
