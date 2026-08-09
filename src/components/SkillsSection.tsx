import React from 'react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const skillGroups = [
  {
    heading: 'Languages',
    skills: ['Java', 'SQL'],
    pill: 'bg-gray-800 border-gray-700 text-gray-200',
  },
  {
    heading: 'Backend',
    skills: ['Spring Boot', 'REST APIs', 'Hibernate'],
    pill: 'bg-gray-800 border-gray-700 text-gray-200',
  },
  {
    heading: 'Databases',
    skills: ['PostgreSQL', 'SQL Optimization', 'Transactions', 'Indexing'],
    pill: 'bg-gray-800 border-gray-700 text-gray-200',
  },
  {
    heading: 'Tools',
    skills: ['Liquibase', 'Git'],
    pill: 'bg-gray-800 border-gray-700 text-gray-200',
  },
  {
    heading: 'Learning',
    skills: ['System Design', 'Concurrency', 'Caching', 'Distributed Systems', 'Scalability'],
    pill: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    muted: true,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle title="Technical Skills" />
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden divide-y divide-gray-800">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={i} delay={80 + i * 70}>
                <div className="flex items-start gap-6 px-6 py-5">
                  <div className="w-28 shrink-0 pt-0.5">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${group.muted ? 'text-purple-500' : 'text-gray-600'}`}>
                      {group.heading}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span
                        key={j}
                        className={`text-sm font-medium px-3 py-1.5 rounded-lg border ${group.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={450}>
            <p className="text-xs text-gray-700 text-center mt-4">
              <span className="inline-block w-2 h-2 rounded bg-purple-500/30 border border-purple-500/40 mr-2 align-middle" />
              Learning — actively studying, not yet production experience
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
