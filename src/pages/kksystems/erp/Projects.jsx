import React from 'react';
import ERPLayout from './ERPLayout';
import { Plus, Search, Folder, Calendar, Users, MoreVertical, Layout, ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, name: 'AI ERP Upgrade', client: 'TechNova', status: 'In Progress', progress: 65, deadline: '2024-12-10', team: 4 },
  { id: 2, name: 'Mobile Banking App', client: 'FinStream', status: 'In Progress', progress: 42, deadline: '2024-11-20', team: 6 },
  { id: 3, name: 'Cloud Infrastructure', client: 'CloudScale', status: 'Completed', progress: 100, deadline: '2024-09-15', team: 3 },
  { id: 4, name: 'E-commerce Platform', client: 'SwiftPay', status: 'Planning', progress: 12, deadline: '2025-02-10', team: 5 },
  { id: 5, name: 'Biotech Dashboard', client: 'BioCore', status: 'Completed', progress: 100, deadline: '2024-08-30', team: 4 },
];

const Projects = () => {
  return (
    <ERPLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h1 className="text-3xl font-bold tracking-tight text-white">Project Workspaces</h1>
          </div>
          <p className="text-white/30 text-sm">Monitor software development lifecycles and team utilization across all active projects.</p>
        </div>
        <button className="px-6 py-3 bg-[#1E293B] border border-white/5 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center gap-2 text-sm shadow-xl">
          <Plus className="w-4 h-4 text-cyan-400" /> New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 uppercase tracking-widest font-black text-[10px]">
        {[
          { label: 'Active', value: '14', color: 'text-cyan-400' },
          { label: 'Completed', value: '42', color: 'text-emerald-400' },
          { label: 'At Risk', value: '2', color: 'text-rose-400' },
          { label: 'Utilization', value: '88%', color: 'text-indigo-400' },
          { label: 'Deadlines', value: '3 Today', color: 'text-amber-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
            <p className="text-white/10 mb-1">{stat.label}</p>
            <h3 className={`text-lg font-bold ${stat.color}`}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 group hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 p-4">
              <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                project.status === 'In Progress' ? 'bg-cyan-500/10 text-cyan-400' :
                'bg-white/5 text-white/30'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                <p className="text-white/20 text-xs font-bold uppercase tracking-tight">{project.client}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Delivery progress</p>
                <p className="text-xs font-bold text-white/60">{project.progress}%</p>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${project.status === 'Completed' ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex -space-x-2">
                  {[...Array(project.team)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-[#1e293b] border-2 border-[#0b0f19] flex items-center justify-center text-[10px] font-bold text-white/40">
                      U
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest">
                  <Calendar className="w-3 h-3" />
                  {project.deadline}
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all font-bold text-xs flex items-center justify-center gap-2 group/btn">
              View Workspace <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}

        {/* Add New Project Card */}
        <div className="border-2 border-dashed border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-all">
            <Plus className="w-6 h-6 text-white/20 group-hover:text-cyan-400" />
          </div>
          <p className="text-white/20 font-bold uppercase text-[10px] tracking-widest group-hover:text-white/40">Create New Project</p>
        </div>
      </div>
    </ERPLayout>
  );
};

export default Projects;
