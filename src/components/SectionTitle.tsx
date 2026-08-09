import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <ScrollReveal>
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">{title}</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gray-700" />
          <div className="h-1 w-12 bg-blue-500 rounded-full" />
          <div className="h-px w-8 bg-gray-700" />
        </div>
        {subtitle && (
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionTitle;
