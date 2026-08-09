import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'AgroPredict',
    description:
      'Data-driven agricultural prediction system providing crop recommendations, fertilizer suggestions, price forecasts and plant disease detection.',
    tech: ['React', 'Node.js', 'ML'],
    url: 'https://agropredict-frontend.pages.dev/',
    isLive: true,
  },
  {
    title: 'Note Ninja',
    description:
      'Smart note-taking tool for meeting proceedings — captures, categorizes and retrieves key discussions and action points.',
    tech: ['React', 'Flask', 'Transformer'],
    url: 'https://github.com/TannisaS/Note-Ninja-',
    isLive: false,
  },
  {
    title: 'ArticleInsight',
    description:
      'News research tool that extracts, analyzes and summarizes articles, giving users quick insights from multiple sources.',
    tech: ['NLP', 'Streamlit'],
    url: 'https://github.com/TannisaS/Article-Insight',
    isLive: false,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={100 + i * 80}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-gray-800/50 border border-gray-700/60 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 h-full cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-blue-400 transition-colors shrink-0 ml-2">
                      {project.isLive ? (
                        <>
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </>
                      ) : (
                        <>
                          <Github className="w-3 h-3" />
                          <span>GitHub</span>
                        </>
                      )}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <a
                href="https://github.com/TannisaS?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-600 text-gray-500 hover:text-gray-300 bg-gray-800/30 hover:bg-gray-800/60 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                All repositories on GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
