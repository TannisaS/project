import React from 'react';
import { Layers, Database, GitMerge, Network } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const interests = [
  {
    icon: <Layers className="w-5 h-5" />,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/12',
    accentColor: 'group-hover:border-blue-500/40',
    title: 'System Design',
    description:
      'Understanding how large-scale systems are structured — trade-offs between availability, consistency, and partition tolerance; how to design services that are reliable and maintainable.',
    topics: ['Scalability', 'Availability', 'Latency', 'Reliability', 'Throughput'],
  },
  {
    icon: <Database className="w-5 h-5" />,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/12',
    accentColor: 'group-hover:border-indigo-500/40',
    title: 'Databases',
    description:
      'Going beyond basic CRUD — how transactions maintain consistency, how indexes speed up queries, how isolation levels prevent anomalies, and how to optimize queries on large tables.',
    topics: ['Transactions', 'Indexing', 'Isolation', 'Query Optimization', 'Locking'],
  },
  {
    icon: <GitMerge className="w-5 h-5" />,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/12',
    accentColor: 'group-hover:border-violet-500/40',
    title: 'Concurrency',
    description:
      'What can go wrong when multiple requests touch the same data simultaneously — race conditions, deadlocks, and the strategies that prevent them.',
    topics: ['Race Conditions', 'Optimistic Locking', 'Pessimistic Locking', 'Idempotency'],
  },
  {
    icon: <Network className="w-5 h-5" />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/12',
    accentColor: 'group-hover:border-cyan-500/40',
    title: 'Distributed Systems',
    description:
      'How services communicate reliably, how caches reduce database pressure, how queues decouple producers and consumers, and how systems degrade gracefully under failure.',
    topics: ['Caching', 'Replication', 'Message Queues', 'Service Communication', 'Failure Handling'],
  },
];

const EngineeringInterests: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900" id="interests">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Engineering Interests"
          subtitle="Areas I'm actively learning — through books, courses and hands-on projects."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {interests.map((item, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className={`group bg-gray-800/50 border border-gray-700/60 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-200 ${item.accentColor} h-full`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.topics.map((topic, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40 px-2.5 py-1 rounded-lg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringInterests;
