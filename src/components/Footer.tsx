import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>© 2026 Tannisa Sinha. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/TannisaS/" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/tannisa-sinha" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors">LinkedIn</a>
          <a href="mailto:tannisasinha@gmail.com"
            className="hover:text-gray-300 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
