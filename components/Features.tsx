import React from 'react';
import { Layers, Box, Cpu, Glasses, Zap, Globe2 } from 'lucide-react';
import { ServiceItem } from '../types';

const features: ServiceItem[] = [
  {
    title: "工业数字孪生",
    description: "高精度 1:1 还原物理工厂，实时监控 IoT 数据，利用 AI 预测维护，提升生产效率。",
    icon: <Layers className="h-8 w-8" />,
    tags: ["IoT", "Real-time", "Simulation"]
  },
  {
    title: "AI 空间计算",
    description: "结合深度学习与 SLAM 技术，实现物理空间的精准三维重建与语义理解。",
    icon: <Cpu className="h-8 w-8" />,
    tags: ["Neural Networks", "SLAM", "CV"]
  },
  {
    title: "XR 沉浸式体验",
    description: "为 Apple Vision Pro、Oculus 等设备开发下一代 AR/VR 应用，打破虚实边界。",
    icon: <Glasses className="h-8 w-8" />,
    tags: ["VisionOS", "Unity", "Unreal"]
  },
  {
    title: "元宇宙架构",
    description: "构建去中心化的虚拟世界基础设施，支持大规模并发互动的 3D 社交场景。",
    icon: <Globe2 className="h-8 w-8" />,
    tags: ["Web3", "Multiplayer", "Cloud"]
  },
  {
    title: "全息 3D 展示",
    description: "无需穿戴设备，通过裸眼 3D 技术展示精密产品细节，重塑商业展示形态。",
    icon: <Box className="h-8 w-8" />,
    tags: ["Hologram", "Display", "Retail"]
  },
  {
    title: "实时渲染引擎",
    description: "自研云端渲染加速技术，在网页端实现 3A 级画质的流畅交互体验。",
    icon: <Zap className="h-8 w-8" />,
    tags: ["WebGL", "WebGPU", "Cloud Rendering"]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-brand-glow font-mono text-sm tracking-widest uppercase mb-4">Core Technology</h2>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-white">定义下一代交互方式</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className="group relative p-8 bg-white/5 border border-white/5 hover:border-brand-glow/50 transition-all duration-300 hover:-translate-y-2 rounded-xl backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full group-hover:bg-brand-accent/40 transition-all"></div>
                        
                        <div className="mb-6 p-3 w-fit rounded-lg bg-gradient-to-br from-brand-glow/20 to-brand-accent/20 text-brand-glow group-hover:text-white transition-colors border border-white/5">
                            {feature.icon}
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h4>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            {feature.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {feature.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono py-1 px-2 rounded bg-white/5 text-gray-400 border border-white/5">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;