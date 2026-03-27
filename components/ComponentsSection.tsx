
import React, { useState } from 'react';
import { COMPONENTS } from '../constants';
import { ChevronRight, Globe, Users, Rocket, BarChart3, CheckCircle2, Layout } from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, any> = {
  Globe,
  Users,
  Rocket,
  BarChart3
};

const ComponentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="components" className="py-24 bg-white/40 backdrop-blur-md border-y border-white/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="The Roadmap" 
          title="Project Components" 
          subtitle="Four strategic pillars designed to ensure a comprehensive impact across the East African ecosystem."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            {COMPONENTS.map((comp, idx) => {
              const Icon = iconMap[comp.icon];
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 border ${
                    activeTab === idx 
                    ? 'bg-white/90 backdrop-blur-sm border-blue-600 shadow-lg text-blue-600' 
                    : 'bg-white/40 backdrop-blur-sm border-white/50 text-slate-600 hover:bg-white/70'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold leading-tight text-sm md:text-base">Component {comp.id}</p>
                    <p className="text-xs md:text-sm opacity-80 line-clamp-1">{comp.title}</p>
                  </div>
                  <ChevronRight size={20} className={activeTab === idx ? 'opacity-100 translate-x-1 transition-all' : 'opacity-0'} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-white/80 backdrop-blur-md overflow-hidden rounded-[2rem] shadow-xl border border-white/50 flex flex-col">
            {COMPONENTS[activeTab].imageUrl && (
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img 
                  src={COMPONENTS[activeTab].imageUrl} 
                  alt={COMPONENTS[activeTab].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                   <h3 className="text-2xl md:text-3xl font-extrabold text-white">{COMPONENTS[activeTab].title}</h3>
                </div>
              </div>
            )}
            
            <div className="p-8 md:p-12 relative z-10 flex-1">
              {!COMPONENTS[activeTab].imageUrl && (
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                    <Layout size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-800">{COMPONENTS[activeTab].title}</h3>
                  </div>
                </div>
              )}
              
              <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-blue-700 font-bold italic text-sm md:text-base">
                  <span className="uppercase text-xs not-italic font-black mr-2 bg-blue-600 text-white px-2 py-0.5 rounded">Objective</span>
                  {COMPONENTS[activeTab].objective}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    Key Activities
                  </h4>
                  <ul className="space-y-4">
                    {COMPONENTS[activeTab].activities.map((act, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 leading-relaxed text-sm">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-100">
                          {i + 1}
                        </div>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <h4 className="text-lg font-bold text-emerald-800 mb-6 flex items-center gap-2">
                    Expected Results
                  </h4>
                  <ul className="space-y-4">
                    {COMPONENTS[activeTab].results.map((res, i) => (
                      <li key={i} className="flex gap-3 text-emerald-900 leading-relaxed text-xs md:text-sm font-semibold">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
