
import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SDGS } from '../constants';

const Objectives: React.FC = () => {
  const objectiveList = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Regional Ecosystem",
      desc: "Establishing a regional entrepreneurial ecosystem that promotes innovation and removes systemic barriers."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Capacity Enhancement",
      desc: "Enhancing capacity through training, mentorship, and infrastructure development in Rwanda and Uganda."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Scalable Ventures",
      desc: "Supporting women and youth-led businesses via incubation, seed funding, and innovation challenges."
    }
  ];

  const regionalPriorities = [
    {
      name: "African Union",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IiyFYB5szWTyJqiwYA0aEZZJIeNExx4kSQ&s"
    },
    {
      name: "Agenda 2063",
      image: "https://au.int/sites/default/files/blocks/35703-img-agenda_2063.png"
    }
  ];

  return (
    <section id="objectives" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Our Mission" 
          title="Clear Objectives for Regional Growth"
          subtitle="Our focus is on creating a sustainable pipeline of innovation-driven businesses led by the most dynamic segments of the EAC population."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {objectiveList.map((obj, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm border border-slate-100">
                {obj.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{obj.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{obj.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-blue-800 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Aligned with Regional Priorities</h3>
            <p className="text-blue-100 opacity-90 leading-relaxed">
              This project is a critical building block for the EAC Vision 2050 and the AU Agenda 2063, 
              aiming to integrate science, technology, and innovation into the core of African economies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
             {regionalPriorities.map((item, idx) => (
               <div key={idx} className="relative group">
                 <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg border-2 border-white/20 overflow-hidden hover:scale-110 transition-transform duration-300 flex items-center justify-center p-1">
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className="max-w-full max-h-full object-contain" 
                    />
                 </div>
                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-blue-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none uppercase tracking-tighter z-10">
                   {item.name}
                 </div>
               </div>
             ))}

             <div className="h-12 w-px bg-white/20 mx-2 hidden md:block"></div>

             {SDGS.map((sdg) => (
               <div key={sdg.id} className="relative group">
                 <img 
                    src={sdg.image} 
                    alt={sdg.name} 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-lg border-2 border-white/20 hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-blue-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none uppercase tracking-tighter z-10">
                    {sdg.name}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
