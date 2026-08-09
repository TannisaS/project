import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const plannedTopics = [
  'Optimistic vs. pessimistic locking — when to use which',
  'Designing a flight booking system: concurrency challenges',
  'How database indexes actually improve query performance',
  'Handling concurrent booking requests safely',
  'What I learned debugging production issues',
  'Safe database migrations with Liquibase',
  'SQL query optimization: what actually helps',
  'Understanding transaction isolation levels',
];

const WritingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800" id="writing">
      <div className="container mx-auto px-4">
        <SectionTitle title="Engineering Notes" />
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/15 rounded-xl mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Coming Soon</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                I write about things I'm learning and building. Articles about backend engineering,
                database internals and system design—in progress.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h4 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
                Planned Topics
              </h4>
              <ul className="space-y-3">
                {plannedTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
