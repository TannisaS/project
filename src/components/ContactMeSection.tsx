import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/TannisaS',
    href: 'https://github.com/TannisaS/',
    color: 'hover:border-gray-500 hover:bg-gray-800',
    iconColor: 'text-gray-400 group-hover:text-white',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tannisa-sinha',
    href: 'https://www.linkedin.com/in/tannisa-sinha',
    color: 'hover:border-blue-500/50 hover:bg-blue-500/5',
    iconColor: 'text-gray-400 group-hover:text-blue-400',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'tannisasinha@gmail.com',
    href: 'mailto:tannisasinha@gmail.com',
    color: 'hover:border-gray-500 hover:bg-gray-800',
    iconColor: 'text-gray-400 group-hover:text-white',
  },
];

const ContactMeSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="Open to backend engineering roles, internships and technical conversations."
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <ScrollReveal delay={100}>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                If you're working on interesting backend problems, have a role that fits, or just want to
                connect — feel free to reach out through any of these.
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <ScrollReveal key={i} delay={150 + i * 80}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={`group flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl transition-all duration-200 ${link.color}`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-gray-700 flex items-center justify-center shrink-0 transition-all ${link.iconColor}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">{link.label}</p>
                      <p className="text-gray-300 text-sm font-medium">{link.value}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={200}>
            <form
              action="https://formspree.io/f/xkgroqzb"
              method="POST"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/25 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
