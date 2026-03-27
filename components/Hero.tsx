
import React from 'react';
import { ArrowRight, Sparkles, Lightbulb, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white/30 backdrop-blur-sm skew-x-[-12deg] translate-x-1/4 -z-0 hidden lg:block opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
              <Sparkles size={16} />
              <span>EASTECO Empowerment Project 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Empowering <br />
              <span className="text-blue-600">East African</span> <br />
              Women & Youth
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Strengthening the innovation and entrepreneurship ecosystem across 8 Partner States. 
              Join a movement of 1,600+ pioneers building the future of the EAC region.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <a href="#objectives" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Our Objectives
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#overview" className="w-full sm:w-auto px-10 py-5 bg-white/80 backdrop-blur-sm border border-white/50 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Project Overview
              </a>
            </div>
            
            <div className="flex items-center gap-8 p-6 bg-slate-50/80 backdrop-blur-sm rounded-3xl border border-slate-100 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base shadow-sm overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=eac${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-extrabold text-slate-900">1,600+ Entrepreneurs</p>
                <p className="text-slate-500">Targeting 50% Women & 50% Youth</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-end">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100/50 to-emerald-50/50 rounded-[4rem] blur-3xl opacity-60"></div>
            
            <div className="relative z-10 w-full max-w-[600px]">
              <div className="overflow-hidden rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-[12px] border-white bg-slate-100 aspect-[4/5] lg:aspect-auto lg:h-[650px]">
                <img 
                  src="https://easteco.org/wp-content/uploads/2024/08/EASTECO-EAYIF-18-1.jpg" 
                  alt="Young creative professionals in Sub-Saharan Africa collaborating" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 flex flex-col items-center gap-2 animate-bounce-slow">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                  <Lightbulb size={28} />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Innovation</span>
              </div>

              <div className="absolute -bottom-8 right-12 bg-white/90 backdrop-blur-md px-8 py-6 rounded-[2rem] shadow-2xl border border-white/50 flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">Innovation Focused</p>
                  <p className="text-xs text-slate-500 font-medium">EAC Regional Ecosystem</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 -right-16 grid grid-cols-6 gap-3 opacity-20 hidden xl:grid">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
