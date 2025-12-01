import React from 'react';
import { Globe, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Globe className="h-6 w-6 text-brand-accent" />
            <span className="font-display font-bold text-xl text-white">
              H-Kr <span className="text-brand-glow">PLANET</span>
            </span>
          </div>
          
          <div className="flex space-x-6 text-gray-400">
             <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
             <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Hydrogen Krypton Planet Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-glow">Privacy Policy</a>
            <a href="#" className="hover:text-brand-glow">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;