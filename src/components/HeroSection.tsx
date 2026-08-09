import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const techPills = ['Java', 'Spring Boot', 'PostgreSQL'];

const terminalLines = [
  { text: 'SELECT * FROM engineers', color: 'text-blue-300' },
  { text: "WHERE role = 'backend'", color: 'text-blue-300' },
  { text: 'AND in_production = true;', color: 'text-blue-300' },
  { text: '', color: '' },
  { text: '── 1 row returned ──', color: 'text-gray-600' },
  { text: '', color: '' },
  { text: ' name          → Tannisa Sinha', color: 'text-emerald-400' },
  { text: ' role          → Backend SWE', color: 'text-emerald-400' },
  { text: ' experience    → Production ✓', color: 'text-emerald-400' },
];

const TerminalCard: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const delays = [400, 700, 1000, 1250, 1500, 1650, 1900, 2100, 2300, 2500];
    const timers = delays.map((delay, i) =>
      setTimeout(() => setVisibleCount(i + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto font-mono text-xs bg-gray-900/80 border border-gray-700/60 rounded-xl overflow-hidden shadow-xl shadow-black/20 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-800/60 border-b border-gray-700/50">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-amber-500/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-gray-500 text-[11px]">portfolio.sql</span>
      </div>
      {/* Content */}
      <div className="px-5 py-4 min-h-[160px]">
        <div className="text-gray-500 mb-2">$ psql portfolio</div>
        <div className="space-y-0.5">
          {terminalLines.slice(0, visibleCount).map((line, i) => (
            <div key={i} className={line.color || 'text-transparent'}>
              {line.text || ' '}
            </div>
          ))}
          {visibleCount < terminalLines.length && (
            <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse align-middle" />
          )}
          {visibleCount >= terminalLines.length && (
            <div className="text-gray-600 mt-1">
              <span className="text-blue-400">$</span>{' '}
              <span className="inline-block w-1.5 h-3.5 bg-blue-400/70 animate-pulse align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;
  const nav = document.querySelector('nav');
  const offset = nav?.offsetHeight ?? 72;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 8, behavior: 'smooth' });
};

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current || !glowRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(59,130,246,0.07), transparent 40%)`;
  };

  return (
    <header
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Static backgrounds */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Cursor glow — updates on mousemove */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-all duration-100" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout on large screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

            {/* Left: main content */}
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal delay={100}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-5 text-white tracking-tight leading-none">
                  Tannisa<br />Sinha
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl md:text-2xl font-semibold mb-5 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Backend Software Engineer
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex justify-center lg:justify-start gap-2 mb-8 flex-wrap">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-gray-400 text-base max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                  Production experience building backend features, optimizing SQL,
                  managing database migrations and debugging real-world systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-8">
                  <button
                    onClick={() => scrollToId('experience')}
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:scale-[1.02]"
                  >
                    View Experience
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToId('projects')}
                    className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 px-8 py-3.5 rounded-xl font-medium transition-all duration-200"
                  >
                    View Projects
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1zx9KrGD8GCiv21FOvqSv2aFR08p2vBFC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 px-8 py-3.5 rounded-xl font-medium transition-all duration-200"
                  >
                    Resume
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex justify-center lg:justify-start gap-6">
                  <a
                    href="https://github.com/TannisaS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tannisa-sinha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: terminal card */}
            <div className="hidden lg:block flex-shrink-0 w-72 xl:w-80">
              <ScrollReveal delay={700}>
                <TerminalCard />
              </ScrollReveal>
            </div>
          </div>

          {/* Terminal card on mobile — below the text */}
          <div className="mt-12 lg:hidden">
            <ScrollReveal delay={700}>
              <TerminalCard />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToId('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-700 hover:text-gray-500 transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </header>
  );
};

export default HeroSection;
