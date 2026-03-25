
import React from 'react';

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ badge, title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100 mb-4 uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
