
import React from 'react';
import { STATS } from '../constants';
import SectionHeading from './SectionHeading';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Women Entrepreneurs', value: 800 },
  { name: 'Youth Entrepreneurs', value: 800 },
];
const COLORS = ['#2563eb', '#10b981'];

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Direct Impact" 
          title="Numbers that Drive Change" 
          subtitle="Our ambitious goals ensure significant reach and long-term sustainability for regional development."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-2 group hover:bg-blue-600 transition-all duration-300">
                <span className="text-4xl font-extrabold text-blue-600 group-hover:text-white transition-colors">{stat.value}</span>
                <span className="font-bold text-slate-800 group-hover:text-white transition-colors">{stat.label}</span>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors leading-tight">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center">
            <h4 className="text-xl font-bold text-slate-800 mb-8">Primary Target Distribution</h4>
            {/* Added min-h and min-w to resolve ResponsiveContainer dimension calculation issues */}
            <div className="h-64 w-full min-h-[256px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-600"></div>
                <span className="text-sm font-semibold text-slate-600">Women</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-emerald-500"></div>
                <span className="text-sm font-semibold text-slate-600">Youth</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-slate-500 text-center max-w-sm">
              We aim for a balanced distribution to ensure inclusivity across all partner states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
