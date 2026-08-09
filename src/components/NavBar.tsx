import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = navRef.current?.offsetHeight ?? 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-semibold text-lg tracking-tight hover:text-blue-400 transition-colors"
        >
          Tannisa Sinha
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/TannisaS/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tannisa-sinha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1zx9KrGD8GCiv21FOvqSv2aFR08p2vBFC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="block w-full text-left text-gray-300 hover:text-white py-2.5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 flex items-center gap-4 border-t border-gray-700/50 mt-3">
            <a
              href="https://github.com/TannisaS/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tannisa-sinha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1zx9KrGD8GCiv21FOvqSv2aFR08p2vBFC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
