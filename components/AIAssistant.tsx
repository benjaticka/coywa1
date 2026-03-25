
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, Sparkles, MessageCircle, X } from 'lucide-react';
import { getInnovationAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const ADVISOR_ICON_URL = "https://www.eac.int/images/Adverts/EASTECO_Logo.png";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your EAC Innovation Advisor. How can I help you with your entrepreneurship journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getInnovationAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-blue-600 text-white animate-bounce-slow'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
      </button>

      <div
        id="ai-advisor"
        className={`fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[450px] max-h-[70vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-white rounded-xl overflow-hidden shadow-inner">
              <img src={ADVISOR_ICON_URL} alt="EASTECO" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="font-bold">EAC Innovation Advisor</h3>
              <p className="text-xs text-blue-100 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Online & Ready to Help
              </p>
            </div>
          </div>
          <Sparkles size={20} className="text-blue-100 opacity-50" />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white overflow-hidden ${
                  msg.role === 'user' ? 'bg-slate-700' : 'bg-white border border-gray-100 shadow-sm'
                }`}>
                  {msg.role === 'user' ? (
                    <User size={16} />
                  ) : (
                    <img src={ADVISOR_ICON_URL} alt="EASTECO" className="w-6 h-6 object-contain" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[85%] gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                  <img src={ADVISOR_ICON_URL} alt="EASTECO" className="w-6 h-6 object-contain" />
                </div>
                <div className="p-4 rounded-2xl bg-slate-100 rounded-tl-none flex items-center gap-2 text-slate-400 text-sm">
                  <Loader2 size={16} className="animate-spin" />
                  Advisor is thinking...
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for advice or project details..."
              className="w-full py-4 pl-4 pr-14 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 text-center mt-3">
            Powered by Gemini AI • EAC Strengthening Innovation Project
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-400 font-bold tracking-widest uppercase mb-4 block">AI Resource Hub</span>
              <h2 className="text-4xl font-extrabold text-white mb-8">Get Expert Advice with the EAC Innovation Advisor</h2>
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed">
                Whether you're curious about the seed funding challenge or need guidance on scaling your startup within the EAC Partner States, 
                our AI advisor is here to help you 24/7.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-blue-100/80">
                  <Sparkles size={20} className="text-emerald-400" />
                  Startup strategy for East African markets
                </li>
                <li className="flex items-center gap-3 text-blue-100/80">
                  <Sparkles size={20} className="text-emerald-400" />
                  Information about Kigali & Kampala incubation hubs
                </li>
                <li className="flex items-center gap-3 text-blue-100/80">
                  <Sparkles size={20} className="text-emerald-400" />
                  Policy and compliance advice in the EAC region
                </li>
              </ul>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105"
              >
                Launch Advisor Now
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800 p-8 md:p-12 rounded-[3rem] border border-slate-700 max-w-md">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden p-2">
                       <img src={ADVISOR_ICON_URL} alt="EASTECO Advisor" className="w-full h-full object-contain" />
                     </div>
                     <div>
                       <div className="h-4 w-32 bg-slate-700 rounded-full mb-2"></div>
                       <div className="h-3 w-20 bg-slate-700 rounded-full"></div>
                     </div>
                   </div>
                   <div className="space-y-4">
                     <div className="p-4 bg-slate-700/50 rounded-2xl rounded-tl-none text-slate-300 text-sm">
                       "What are the target beneficiaries for the EAC women and youth project?"
                     </div>
                     <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none text-blue-100 text-sm">
                       "The project aims to directly benefit 1,600 entrepreneurs and 16 high-impact start-ups..."
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAssistant;
