import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, TrendingUp, Users, Bug } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

// ── Count-up hook ─────────────────────────────────────────────────
const useCountUp = (end: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

// ── Stat card with count-up ───────────────────────────────────────
interface StatProps {
  end: number;
  format: (n: number) => string;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({ end, format, label, icon }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center text-blue-400 mb-2">{icon}</div>
      <div className="text-3xl font-black text-white leading-none tabular-nums">{format(count)}</div>
      <div className="text-gray-500 text-xs mt-1.5 leading-tight max-w-[80px] mx-auto">{label}</div>
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────────
const impactStats: StatProps[] = [
  {
    end: 3000,
    format: (n) => n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k+` : `${n}+`,
    label: 'Active Users',
    icon: <Users className="w-5 h-5" />,
  },
  {
    end: 20,
    format: (n) => `~${n}%`,
    label: 'Query Speed Gain',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    end: 10,
    format: (n) => `${n}+`,
    label: 'Issues Resolved',
    icon: <Bug className="w-5 h-5" />,
  },
];

const techStack = [
  { label: 'Java + Spring Boot', detail: 'Backend features & business logic' },
  { label: 'PostgreSQL + SQL', detail: 'Data access & query optimization' },
  { label: 'Hibernate', detail: 'ORM & data access layer' },
  { label: 'Liquibase', detail: 'Production database migrations' },
  { label: 'REST APIs + Git', detail: 'Service interfaces & collaboration' },
];

const bulletPoints = [
  'Developed and enhanced scalable backend features supporting 3,000+ active users.',
  'Implemented data processing and validation logic for bulk user operations and feature configurations.',
  'Built configurable features supporting complex business rules — scheduling, time calculations and policy-driven workflows.',
  'Optimized SQL queries and database interactions, reducing query execution time by ~20% on tables with 10,000+ rows.',
  'Wrote Liquibase migration scripts to safely modify and maintain production database tables.',
  'Improved application filtering and search functionality.',
  'Investigated, debugged and resolved 10+ production issues.',
  'Collaborated with senior engineers through code reviews and production releases.',
];

const previousRoles = [
  {
    title: 'SDE Intern',
    company: 'WittyHat',
    period: 'May 2025 – Jun 2025',
    description:
      'Built LangGraph-based AI workflows for automated slide deck generation. Integrated Azure OpenAI, ElevenLabs TTS and MoviePy for end-to-end content generation.',
  },
  {
    title: 'R&D Intern',
    company: 'Encrypta',
    period: 'Jan 2025 – Apr 2025',
    description:
      'Improved a JavaScript browser extension — bug fixes, performance optimizations and feature enhancements for a new stable build.',
  },
  {
    title: 'Springboard Intern',
    company: 'Infosys',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Developed a real-time AI sales call assistant using NLP and speech recognition for sentiment analysis and live suggestions.',
  },
];

// ── Component ─────────────────────────────────────────────────────
const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950" id="experience">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" />

        {/* ── LumbreFi ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-gray-900 shadow-2xl shadow-blue-500/5">
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-800">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                      Current · Jul 2025 – Present
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight">LumbreFi Inc.</h3>
                    <p className="text-blue-400 font-semibold text-lg mt-1">Software Engineer</p>
                    <div className="flex flex-col gap-1 mt-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm">Full-Time · Jul 2026 – Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                        <span className="text-gray-500 text-sm">Intern · Jul 2025 – Jul 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated stats */}
                  <div className="flex gap-8 md:gap-10 shrink-0">
                    {impactStats.map((stat, i) => (
                      <StatCard key={i} {...stat} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-8 grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">What I Worked On</p>
                  <ul className="space-y-3">
                    {bulletPoints.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Technologies</p>
                  <div className="space-y-2.5">
                    {techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-gray-800/60 border border-gray-700/60 rounded-xl px-4 py-3 hover:border-blue-500/30 transition-colors"
                      >
                        <span className="w-1 min-h-[28px] bg-blue-500/40 rounded-full shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-sm font-semibold leading-tight">{tech.label}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Previous Roles ────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={50}>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-6">
              Previous Experience
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {previousRoles.map((role, i) => (
              <ScrollReveal key={i} delay={150 + i * 80}>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 hover:bg-gray-800/40 transition-all duration-200 group">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-500 transition-colors" />
                    <span className="text-xs text-gray-600">{role.period}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">{role.title}</h4>
                  <p className="text-blue-400/80 text-sm mb-3">{role.company}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{role.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
