import React from 'react';
import { Layers, Box, Cpu, Glasses, Zap, Globe2, Disc } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    title: "工业数字孪生",
    description: "高保真工厂复刻。IoT 数据流实时接入。物理引擎实时仿真。",
    icon: <Layers className="h-6 w-6" />,
    tags: ["IoT", "物理仿真", "SIM"]
  },
  {
    title: "AI 空间计算",
    description: "神经网络驱动的空间计算。SLAM 算法优化。3D 语义理解。",
    icon: <Cpu className="h-6 w-6" />,
    tags: ["AI", "SLAM", "CV"]
  },
  {
    title: "XR 沉浸体验",
    description: "次世代 AR/VR 应用框架。兼容 VisionOS。零延迟云渲染。",
    icon: <Glasses className="h-6 w-6" />,
    tags: ["VR", "AR", "MR"]
  },
  {
    title: "元宇宙基建",
    description: "去中心化虚拟基础设施。支持万人同屏交互的大型虚拟空间。",
    icon: <Globe2 className="h-6 w-6" />,
    tags: ["WEB3", "MMO", "CLOUD"]
  },
  {
    title: "全息展示终端",
    description: "裸眼 3D 投影技术。商业级全息展示柜。虚实结合的视觉奇观。",
    icon: <Box className="h-6 w-6" />,
    tags: ["HOLO", "3D", "零售"]
  },
  {
    title: "云端 GPU 渲染",
    description: "专有云 GPU 加速集群。浏览器端的 AAA 级画质可视化体验。",
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
                    <h3 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">核心能力</h3>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-xs text-retro-gray font-mono">上次更新: 2024.12.31</div>
                    <div className="text-xs text-retro-gray font-mono">状态: 运行良好</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className="group relative bg-retro-bg border-2 border-retro-gray hover:border-retro-orange transition-all duration-200 p-0 overflow-hidden hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#111]"
                    >
                        {/* Cartridge Label Header */}
                        <div className="bg-retro-gray/20 border-b-2 border-retro-gray p-3 flex justify-between items-center group-hover:bg-retro-orange group-hover:text-black transition-colors">
                            <div className="flex items-center space-x-2">
                                {feature.icon}
                                <span className="font-bold text-sm tracking-wider font-display">{feature.title}</span>
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
                                    <span key={tag} className="text-[10px] font-bold py-1 px-2 bg-retro-surface text-retro-orange border border-retro-gray font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decor: Barcode / Screws */}
                        <div className="absolute bottom-2 right-2 flex space-x-1">
                             <div className="w-1.5 h-1.5 bg-retro-gray rounded-full shadow-inner"></div>
                             <div className="w-1.5 h-1.5 bg-retro-gray rounded-full shadow-inner"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;