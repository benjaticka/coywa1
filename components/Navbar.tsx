
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Components', href: '#components' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 md:gap-4 group transition-opacity hover:opacity-90">
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <img 
                  src="https://www.eac.int/images/25_Anniversary_web_Banner_2.PNG" 
                  alt="EAC Logo" 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
                <div className="h-8 w-px bg-slate-200"></div>
                <img 
                  src="https://www.eac.int/images/Adverts/EASTECO_Logo.png" 
                  alt="EASTECO Logo" 
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#ai-advisor" 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Ask Advisor
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-bold text-slate-700 hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#ai-advisor" 
              className="block text-center w-full px-6 py-4 bg-blue-600 text-white rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Ask Innovation Advisor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
