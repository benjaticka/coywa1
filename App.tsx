
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objectives from './components/Objectives';
import ComponentsSection from './components/ComponentsSection';
import ImpactStats from './components/ImpactStats';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { PARTNERS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="overview" className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors duration-700"></div>
              
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-6 block">Project Overview 2026</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">Driving Sustainable <span className="text-blue-600 italic">Regional Growth</span></h2>
                
                <div className="space-y-8 text-slate-600 leading-relaxed text-lg md:text-xl">
                  <p>
                    The East African Community (EAC), through the East African Science and Technology Commission (EASTECO), 
                    is proudly implementing the <strong className="text-slate-900">Strengthening Women and Youth Innovation and Entrepreneurship</strong> project 
                    under the flagship <strong className="text-blue-600">COYWA 2026 Programme</strong>.
                  </p>
                  <p>
                    This comprehensive initiative is engineered to catalyze innovation ecosystems across all 8 EAC Partner States. By 2026, we aim to have successfully equipped 1,600 pioneers with the specialized skills, regional infrastructure, and critical seed funding required to spearhead Africa's economic transformation.
                  </p>
                  
                  <div className="pt-10 flex flex-wrap justify-center gap-6">
                    <div className="px-8 py-3 bg-white text-slate-700 rounded-2xl font-bold border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      8 Partner States
                    </div>
                    <div className="px-8 py-3 bg-white text-slate-700 rounded-2xl font-bold border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      1,600+ Entrepreneurs
                    </div>
                    <div className="px-8 py-3 bg-white text-slate-700 rounded-2xl font-bold border border-slate-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Kigali & Kampala Hubs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Objectives />
        
        <ComponentsSection />
        
        <ImpactStats />

        <AIAssistant />
        
        <section id="sustainability" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Future-Proofing Innovation</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Our 2026 Sustainability Strategy</h2>
                <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                  Our project goes beyond temporary aid. We are building a permanent regional infrastructure that integrates financial, institutional, and environmental measures to ensure the innovation flame burns for decades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Revenue via incubation hubs',
                    'Regional policy adoption',
                    'Resource mobilization',
                    'Green business focus',
                    'EAC Youth Alliance',
                    'Alumni mentorship'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-40"></div>
                <img 
                  src="https://easteco.org/wp-content/uploads/2024/08/EASTECO-EAYIF-26-1.jpg" 
                  alt="African entrepreneur with confident smile" 
                  className="rounded-[4rem] shadow-2xl relative z-10 w-full h-[550px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 p-10 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-xs z-20">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <p className="font-bold text-slate-900 mb-3 italic text-lg leading-snug">"We are building a legacy for the next generation of African entrepreneurs."</p>
                  <p className="text-xs font-black text-blue-600 tracking-widest uppercase">— Project Secretariat 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Network</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Stakeholders & Partners</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Collaborating with regional institutions to scale innovation and support entrepreneurship across East Africa.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
               {PARTNERS.map((partner) => (
                 <div key={partner.name} className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                    <div className="h-20 w-full flex items-center justify-center mb-6">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&background=f1f5f9&color=334155&bold=true&size=128`;
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-[0.15em] text-center">{partner.name}</span>
                 </div>
               ))}
            </div>

            <div className="pt-16 border-t border-slate-200">
              <h3 className="text-xs font-black text-slate-400 mb-14 text-center uppercase tracking-[0.3em]">Participating EAC Partner States</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  { name: 'Burundi', flag: 'BI' },
                  { name: 'DR Congo', flag: 'CD' },
                  { name: 'Kenya', flag: 'KE' },
                  { name: 'Rwanda', flag: 'RW' },
                  { name: 'South Sudan', flag: 'SS' },
                  { name: 'Somalia', flag: 'SO' },
                  { name: 'Uganda', flag: 'UG' },
                  { name: 'Tanzania', flag: 'TZ' }
                ].map((state) => (
                  <div key={state.name} className="flex flex-col items-center gap-4 group cursor-help">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-600 group-hover:scale-110 transition-all duration-500">
                        <img 
                          src={`https://flagcdn.com/w160/${state.flag.toLowerCase()}.png`} 
                          alt={state.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{state.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
