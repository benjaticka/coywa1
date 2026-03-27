
import React from 'react';
import { Mail, MapPin, Globe, Twitter, Facebook, Linkedin, Phone } from 'lucide-react';
import { PARTNERS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-white/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-6">
              <img 
                src="https://www.eac.int/images/Adverts/EASTECO_Logo.png" 
                alt="EASTECO Official Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[9px] font-serif font-bold leading-tight text-slate-800 uppercase tracking-tighter">
                  East African Science & <br /> Tech Commission
                </span>
                <span className="text-blue-700 font-black text-xl leading-none">EASTECO</span>
              </div>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              Strengthening the innovation ecosystem for women and youth across the East African Community through technology and entrepreneurship.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://x.com/easteco1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://tz.linkedin.com/company/east-african-community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/easteco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-700 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About the Project', 'Partner States', 'Incubation Hubs', 'Innovation Challenge', 'Success Stories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-700 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Partner Organizations</h4>
            <ul className="space-y-4">
              {PARTNERS.map((partner) => (
                <li key={partner.name}>
                  <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-blue-700 text-sm transition-colors group">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&size=24&background=f1f5f9&color=334155&bold=true`;
                      }}
                    />
                    <span>{partner.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-500 leading-relaxed text-sm font-medium">
                  EASTECO Secretariat<br />
                  5th Floor, Queens Land Building<br />
                  Kigali – Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-700 flex-shrink-0" size={20} />
                <span className="text-slate-500 text-sm font-medium">
                  +250-788310402 / +250-788165200
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-700 flex-shrink-0" size={20} />
                <span className="text-slate-500 text-sm font-medium">easteco@eachq.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-blue-700 flex-shrink-0" size={20} />
                <span className="text-slate-500 text-sm font-medium">www.easteco.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} EASTECO. Official Project Portal.
          </p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Jumuiya Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
