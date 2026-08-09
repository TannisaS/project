import React, { useState } from 'react';
import { Github, Server, Database, Zap, Shield, CheckCircle2, Clock, BookOpen, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

type StatusType = 'implemented' | 'in-progress' | 'exploring';

interface Feature {
  text: string;
  status: StatusType;
}

const StatusBadge: React.FC<{ status: StatusType }> = ({ status }) => {
  const config = {
    implemented: { label: 'Implemented', className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
    'in-progress': { label: 'In Progress', className: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
    exploring: { label: 'Exploring', className: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  };
  const { label, className } = config[status];
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${className}`}>
      {label}
    </span>
  );
};

const engineeringChallenges = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Concurrency',
    description: 'What happens when two users attempt to book the last available seat simultaneously? Preventing double-booking requires careful coordination at the database level.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Transactions & Consistency',
    description: 'Seat reservation, booking record creation and payment processing must either all succeed or all roll back—atomically—to prevent inconsistent state.',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Locking Strategy',
    description: 'Optimistic locking suits low-contention reads; pessimistic locking suits high-contention seat selection. The tradeoff is throughput vs. safety.',
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Idempotency',
    description: 'Network failures may cause clients to retry booking requests. The same request submitted twice must not create two bookings.',
  },
];

const features: Feature[] = [
  { text: 'Flight management: schedules, routes, aircraft, seat inventory', status: 'implemented' },
  { text: 'Search by origin, destination, date and availability', status: 'implemented' },
  { text: 'Seat selection, booking and cancellation', status: 'implemented' },
  { text: 'Booking history per user', status: 'implemented' },
  { text: 'Concurrent booking with pessimistic locking', status: 'in-progress' },
  { text: 'Idempotent booking endpoint', status: 'in-progress' },
  { text: 'Payment simulation and failure handling', status: 'in-progress' },
  { text: 'Redis caching for flight search', status: 'exploring' },
  { text: 'Async notifications via message queue', status: 'exploring' },
];

const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'engineering'>('overview');

  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Project" />

        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
                      Backend Engineering Project
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Flight Booking System
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Java · Spring Boot · PostgreSQL · REST APIs
                    </p>
                  </div>
                  <a
                    href="https://github.com/TannisaS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg transition-colors shrink-0"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {/* Tab switcher */}
                <div className="flex gap-1 mt-6 bg-gray-800 rounded-lg p-1 w-fit">
                  {(['overview', 'engineering'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                        activeTab === tab
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab === 'overview' ? 'Overview' : 'Engineering Challenges'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              {activeTab === 'overview' && (
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Description + Features */}
                    <div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        A backend-focused flight booking system designed to go beyond simple CRUD.
                        The goal is to apply real engineering concepts—concurrency control, transaction
                        management, idempotency and caching—to a realistic domain.
                      </p>

                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                        Features
                      </h4>
                      <ul className="space-y-2.5">
                        {features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="mt-0.5 shrink-0">
                              {f.status === 'implemented' ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : f.status === 'in-progress' ? (
                                <Clock className="w-4 h-4 text-amber-400" />
                              ) : (
                                <BookOpen className="w-4 h-4 text-purple-400" />
                              )}
                            </span>
                            <span className="text-gray-300">{f.text}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Legend */}
                      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-700">
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Implemented
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Clock className="w-3.5 h-3.5 text-amber-400" /> In Progress
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Exploring
                        </span>
                      </div>
                    </div>

                    {/* Right: Architecture */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                        Architecture
                      </h4>

                      {/* Implemented Architecture */}
                      <div className="mb-4">
                        <span className="text-xs text-emerald-400 font-medium">Current — Implemented</span>
                        <div className="mt-2 space-y-1">
                          {[
                            { label: 'Client', sub: 'REST API consumer' },
                            { label: 'Spring Boot API Layer', sub: 'Controllers · Services · DTOs' },
                            { label: 'Flight Service', sub: 'Schedules · Routes · Inventory' },
                            { label: 'Booking Service', sub: 'Reservations · Cancellations · History' },
                            { label: 'PostgreSQL', sub: 'Primary data store · Transactions · Constraints' },
                          ].map((node, i, arr) => (
                            <div key={i} className="flex flex-col items-center">
                              <div className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-center">
                                <p className="text-white text-sm font-medium">{node.label}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{node.sub}</p>
                              </div>
                              {i < arr.length - 1 && (
                                <div className="text-gray-600 text-sm my-0.5">↓</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Planned */}
                      <div>
                        <span className="text-xs text-purple-400 font-medium">Planned — Not Yet Implemented</span>
                        <div className="mt-2 flex gap-2 flex-wrap">
                          {['Redis Cache', 'Payment Service (Simulated)', 'Message Queue'].map(item => (
                            <span
                              key={item}
                              className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-lg"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'engineering' && (
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-8">
                    The engineering value of this project isn't in the domain—it's in the problems the
                    domain forces you to think through. These are the challenges I'm working on and studying.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {engineeringChallenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-blue-400">{challenge.icon}</div>
                          <h4 className="text-white font-semibold">{challenge.title}</h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional challenges */}
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Database Design', desc: 'Indexes, constraints, normalization and query optimization for the booking domain.' },
                      { title: 'Caching Strategy', desc: 'Which data is safe to cache? Flight search results vs. seat availability require different TTLs and invalidation.' },
                      { title: 'Scalability', desc: 'Flight search is read-heavy. How does the system handle traffic spikes around popular routes?' },
                      { title: 'Failure Handling', desc: 'What is the correct behavior when the payment step fails after a seat is reserved but before the booking is confirmed?' },
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                        <h5 className="text-white text-sm font-semibold mb-1">{item.title}</h5>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
