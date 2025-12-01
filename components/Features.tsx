import React from 'react';
import { Layers, Box, Cpu, Glasses, Zap, Globe2, Disc } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    title: "IND_TWIN_01",
    description: "High-fidelity factory replication. IoT data stream integration. Real-time physics engine.",
    icon: <Layers className="h-6 w-6" />,
    tags: ["IoT", "PHYSICS", "SIM"]
  },
  {
    title: "SPATIAL_AI",
    description: "Neural network driven spatial computing. SLAM algorithm optimization. 3D semantic understanding.",
    icon: <Cpu className="h-6 w-6" />,
    tags: ["AI", "SLAM", "CV"]
  },
  {
    title: "XR_IMMERSION",
    description: "Next-gen AR/VR application framework. VisionOS compatible. Zero-latency rendering.",
    icon: <Glasses className="h-6 w-6" />,
    tags: ["VR", "AR", "MR"]
  },
  {
    title: "META_ARCH",
    description: "Decentralized virtual infrastructure. Massively multiplayer interaction support.",
    icon: <Globe2 className="h-6 w-6" />,
    tags: ["WEB3", "MMO", "CLOUD"]
  },
  {
    title: "HOLO_DISP",
    description: "Naked-eye 3D projection technology. Commercial grade holographic showcase.",
    icon: <Box className="h-6 w-6" />,
    tags: ["HOLO", "3D", "RETAIL"]
  },
  {
    title: "CLOUD_RENDER",
    description: "Proprietary cloud GPU acceleration. Browser-based AAA quality visualization.",
    icon: <Zap className="h-6 w-6" />,
    tags: ["WEBGL", "GPU", "SAAS"]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-retro-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-16 border-b-2 border-retro-gray pb-4">
                <div>
                    <h2 className="text-retro-orange font-mono text-xs tracking-widest mb-2">// CORE_MODULES</h2>
                    <h3 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Capabilities</h3>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-xs text-retro-gray">LAST UPDATE: 2024.12.31</div>
                    <div className="text-xs text-retro-gray">STATUS: OPTIMAL</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className="group relative bg-retro-bg border-2 border-retro-gray hover:border-retro-orange transition-all duration-200 p-0 overflow-hidden"
                    >
                        {/* Cartridge Label Header */}
                        <div className="bg-retro-gray/20 border-b-2 border-retro-gray p-3 flex justify-between items-center group-hover:bg-retro-orange group-hover:text-black transition-colors">
                            <div className="flex items-center space-x-2">
                                {feature.icon}
                                <span className="font-bold text-sm tracking-wider">{feature.title}</span>
                            </div>
                            <Disc className="w-4 h-4 animate-spin-slow opacity-50" />
                        </div>

                        {/* Cartridge Body */}
                        <div className="p-6">
                            <div className="mb-4 font-mono text-xs text-retro-gray flex justify-between">
                                <span>ID: 00{idx + 1}</span>
                                <span>CAP: 128TB</span>
                            </div>
                            <p className="text-retro-white/80 mb-6 text-sm leading-relaxed font-mono">
                                {feature.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {feature.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold py-1 px-2 bg-retro-surface text-retro-orange border border-retro-gray">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decor: Barcode / Screws */}
                        <div className="absolute bottom-2 right-2 flex space-x-1">
                             <div className="w-1 h-1 bg-retro-gray rounded-full"></div>
                             <div className="w-1 h-1 bg-retro-gray rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;