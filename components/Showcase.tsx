import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  { id: 1, title: "智慧城市大脑", category: "Digital Twin", imageUrl: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "虚拟博物馆 XR 导览", category: "XR Experience", imageUrl: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "自动化产线模拟", category: "Industrial AI", imageUrl: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "未来零售全息展柜", category: "Holographic", imageUrl: "https://picsum.photos/800/600?random=4" },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-[#050a18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2">Portfolio</h2>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white">未来视界展示</h3>
           </div>
           <button className="hidden md:block text-brand-glow hover:text-white font-mono text-sm border-b border-brand-glow pb-1 transition-colors">
              VIEW ALL PROJECTS &rarr;
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div 
                    key={project.id} 
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
                >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2 py-1 mb-2 text-xs font-mono bg-brand-glow/20 text-brand-glow rounded border border-brand-glow/30">
                            {project.category}
                        </span>
                        <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                        <div className="h-0.5 w-0 group-hover:w-full bg-brand-glow transition-all duration-500 ease-out"></div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 md:hidden text-center">
             <button className="text-brand-glow hover:text-white font-mono text-sm border-b border-brand-glow pb-1 transition-colors">
              VIEW ALL PROJECTS &rarr;
           </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;