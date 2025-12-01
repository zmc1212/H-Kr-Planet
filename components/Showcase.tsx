import React from 'react';
import { ProjectItem } from '../types';
import { ArrowRight, Maximize2 } from 'lucide-react';

const projects: ProjectItem[] = [
  { id: 1, title: "智慧城市大脑 V1", category: "DIGITAL_TWIN", imageUrl: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "博物馆 XR 导览", category: "XR_EXP", imageUrl: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "黑灯工厂仿真 04", category: "IND_AI", imageUrl: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "全息展示终端", category: "HARDWARE", imageUrl: "https://picsum.photos/800/600?random=4" },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-[#0a0a0a] border-t-2 border-retro-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-dashed border-retro-gray pb-4">
           <div>
              <h2 className="text-retro-green font-mono text-xs tracking-widest mb-2">// VISUAL_DATABASE</h2>
              <h3 className="font-display text-3xl md:text-4xl font-black text-white uppercase">项目档案</h3>
           </div>
           <button className="hidden md:flex items-center text-retro-orange hover:bg-retro-orange hover:text-black px-4 py-2 border border-retro-orange transition-colors font-bold text-sm font-mono group">
              查看全部档案 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div 
                    key={project.id} 
                    className="group relative border-2 border-retro-gray bg-retro-surface p-2 hover:border-retro-orange transition-colors cursor-pointer"
                >
                    {/* Viewfinder Overlay */}
                    <div className="relative aspect-video overflow-hidden bg-black">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0 contrast-125 duration-500"
                        />
                        
                        {/* HUD Elements */}
                        <div className="absolute top-2 left-2 flex items-center space-x-2">
                             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                             <span className="text-[10px] text-red-500 font-mono">REC</span>
                        </div>
                        <div className="absolute top-2 right-2 text-white/50 group-hover:text-retro-orange transition-colors"><Maximize2 className="w-4 h-4"/></div>
                        
                        {/* Crosshairs */}
                        <div className="absolute top-1/2 left-1/2 w-8 h-8 border-l border-t border-white/50 -translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
                    </div>
                    
                    {/* File Info */}
                    <div className="mt-4 flex justify-between items-end px-2 pb-2">
                        <div>
                            <span className="text-xs bg-retro-gray text-white px-1 py-0.5 font-mono mb-2 inline-block">
                                DIR: {project.category}
                            </span>
                            <h4 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-retro-orange transition-colors">{project.title}</h4>
                        </div>
                        <div className="text-retro-orange text-xs font-mono">
                           SIZE: 4.2GB
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
             <button className="text-retro-orange border-b border-retro-orange pb-1 font-bold text-sm font-mono">
              加载更多数据...
           </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;