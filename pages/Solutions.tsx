import React from 'react';
import { Box, Layers, Cpu, Database, Globe, Smartphone } from 'lucide-react';

const solutions = [
  {
    title: "工业元宇宙平台",
    icon: <Layers className="w-10 h-10" />,
    desc: "基于 WebGPU 的大规模工业场景渲染，支持 IoT 数据实时接入，实现工厂全生命周期管理。",
    features: ["千万级面数渲染", "亚秒级数据延迟", "多终端协同"]
  },
  {
    title: "城市数字底座",
    icon: <Globe className="w-10 h-10" />,
    desc: "CIM (City Information Modeling) 城市级数据中台，融合 GIS 与 BIM 数据，服务智慧城市治理。",
    features: ["全域空间感知", "交通流量模拟", "应急指挥调度"]
  },
  {
    title: "XR 营销互动",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "为品牌打造 AR 试穿、VR 看车等沉浸式体验，提升用户参与度与转化率。",
    features: ["WebAR 无需下载", "跨平台兼容", "高保真材质"]
  },
  {
    title: "AI 生成式内容",
    icon: <Cpu className="w-10 h-10" />,
    desc: "利用 AIGC 技术自动生成 3D 模型、纹理与场景，大幅降低元宇宙内容生产成本。",
    features: ["Text-to-3D", "智能材质生成", "NPC 行为树"]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-dark animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">核心解决方案</h1>
          <p className="text-gray-400">赋能全行业的数字化转型工具箱</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {solutions.map((sol, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#0a0f1e] border border-white/10 rounded-2xl p-8 hover:border-brand-glow/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-glow/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-brand-glow/10"></div>
              
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-xl text-brand-glow group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {sol.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-glow transition-colors">{sol.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{sol.desc}</p>
                  
                  <ul className="space-y-2">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-gray-500 font-mono">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-glow to-brand-accent group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="border-t border-white/10 pt-20 pb-20">
             <h2 className="font-display text-3xl font-bold mb-12 text-center">交付流程</h2>
             <div className="flex flex-col md:flex-row justify-between relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

                 {['需求分析', '原型设计', '开发实施', '测试部署', '运维迭代'].map((step, idx) => (
                     <div key={idx} className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0">
                         <div className="w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-glow flex items-center justify-center font-bold text-brand-glow mb-4 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                             {idx + 1}
                         </div>
                         <h4 className="font-bold text-white">{step}</h4>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Solutions;