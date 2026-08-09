import React from 'react';
import { Server, Database, GitBranch, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const cards = [
  {
    icon: <Server className="w-4 h-4" />,
    color: 'blue',
    title: 'Backend Development',
    sub: 'Java, Spring Boot, REST APIs',
    delay: 200,
  },
  {
    icon: <Database className="w-4 h-4" />,
    color: 'indigo',
    title: 'Database Engineering',
    sub: 'PostgreSQL, SQL, Migrations',
    delay: 300,
  },
  {
    icon: <GitBranch className="w-4 h-4" />,
    color: 'blue',
    title: 'Production Experience',
    sub: 'Real systems, real users, real issues',
    delay: 400,
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    color: 'amber',
    title: 'Hackathon Wins',
    sub: 'Hacknovate 6.0 · IIT Indore Fluxus',
    delay: 500,
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/15 text-blue-400',
  indigo: 'bg-indigo-500/15 text-indigo-400',
  amber: 'bg-amber-500/15 text-amber-400',
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <SectionTitle title="About" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Main text */}
            <div className="md:col-span-2 space-y-5">
              <ScrollReveal delay={150}>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  I'm a backend-focused software engineer working primarily with Java, Spring Boot and PostgreSQL.
                  My experience includes building production features, implementing complex business logic,
                  optimizing SQL queries, managing database migrations and debugging real-world production issues.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  I'm particularly interested in understanding what happens beneath the API layer — how databases
                  behave under load, how concurrent requests are handled, how systems remain reliable, and how
                  backend services scale.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  I'm currently expanding into system design and distributed systems by building and studying
                  backend systems beyond simple CRUD applications.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <div className="mt-4 inline-flex items-start gap-4 p-4 bg-gray-800/60 border border-gray-700/60 rounded-xl">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-bold">B</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">B.Tech Computer Science & Engineering</p>
                    <p className="text-gray-500 text-sm mt-0.5">KIIT University · CGPA 8.8 · Graduating 2026</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-3">
              {cards.map((card, i) => (
                <ScrollReveal key={i} delay={card.delay}>
                  <div className="flex items-start gap-3 p-4 bg-gray-800/40 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${colorMap[card.color]}`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">{card.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{card.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
