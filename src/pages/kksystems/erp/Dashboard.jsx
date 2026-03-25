import React from 'react';
import ERPLayout from './ERPLayout';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Tooltip 
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const miniData = [
  { v: 400 }, { v: 300 }, { v: 600 }, { v: 800 }, { v: 500 }, { v: 900 }, { v: 700 }
];

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all group">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl bg-${color}/10 text-${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {change}
      </div>
    </div>
    <div>
      <p className="text-white/40 text-sm mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-white">{value}</h3>
    </div>
    <div className="h-16 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={miniData}>
          <defs>
            <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isPositive ? '#10b981' : '#f43f5e'} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={isPositive ? '#10b981' : '#f43f5e'} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="v" 
            stroke={isPositive ? '#10b981' : '#f43f5e'} 
            fillOpacity={1} 
            fill={`url(#gradient-${title})`} 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$128,430', change: '+12.5%', isPositive: true, icon: CreditCard, color: '[#4F46E5]' },
    { title: 'Active Users', value: '43,201', change: '+18.2%', isPositive: true, icon: Users, color: '[#9333EA]' },
    { title: 'Conversion Rate', value: '3.24%', change: '-2.1%', isPositive: false, icon: Activity, color: '[#22D3EE]' },
  ];

  return (
    <ERPLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-white/40">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (stat.color = stat.color.replace(/[\[\]]/g, ''), <StatCard key={i} {...stat} />))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Project Momentum</h3>
            <button className="text-xs text-[#a5b4fc] hover:text-white transition-colors bg-[#4F46E5]/10 px-3 py-1.5 rounded-lg border border-[#4F46E5]/20">
              View Report
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={miniData}>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="v" 
                  stroke="#4F46E5" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#4F46E5' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#22D3EE]" />
                </div>
                <div>
                  <p className="text-sm text-white/80 font-medium">New project milestone</p>
                  <p className="text-xs text-white/40">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 mt-6 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 border border-white/10 rounded-xl transition-all">
            View All Activity
          </button>
        </div>
      </div>
    </ERPLayout>
  );
};

export default Dashboard;
