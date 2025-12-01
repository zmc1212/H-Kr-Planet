import React from 'react';
import { Layers, Cpu, Globe, Smartphone, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "工业元宇宙平台",
    icon: <Layers className="w-8 h-8" />,
    desc: "基于 WebGPU 的海量场景渲染。实时 IoT 数据注入。全生命周期管理系统。",
    features: ["支持千万级面数", "亚秒级延迟", "多终端同步"]
  },
  {
    title: "城市数字底座 CIM",
    icon: <Globe className="w-8 h-8" />,
    desc: "CIM (City Information Modeling) 数据中心。GIS + BIM 深度融合。智慧城市治理。",
    features: ["空间感知", "交通流仿真", "应急指挥大屏"]
  },
  {
    title: "XR 营销交互",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "AR 试穿试戴，VR 虚拟展厅。提升用户参与度和转化率的沉浸式体验。",
    features: ["WebAR (无需安装)", "跨平台支持", "PBR 材质还原"]
  },
  {
    title: "AIGC 内容生成",
    icon: <Cpu className="w-8 h-8" />,
    desc: "利用生成式 AI 自动化生成 3D 模型、纹理和场景布局。",
    features: ["文字生成 3D", "智能纹理映射", "NPC 行为树"]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-bg animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        
        <div className="mb-16 border-b-4 border-retro-orange pb-8">
          <div className="flex items-center space-x-2 text-retro-orange mb-2">
             <span className="w-3 h-3 bg-retro-orange animate-pulse"></span>
             <span className="font-mono text-xs">TECHNICAL_MANUAL_V4.0 // 技术手册</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black uppercase text-white tracking-tighter">
            系统 <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-orange to-yellow-500">解决方案</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {solutions.map((sol, idx) => (
            <div 
              key={idx}
              className="bg-[#0f0f0f] border-2 border-retro-gray p-8 hover:border-retro-white transition-all duration-300 relative group"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-2">
                 <div className="w-8 h-8 border-t-2 border-r-2 border-retro-gray group-hover:border-retro-orange transition-colors"></div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-retro-surface border border-retro-gray text-retro-orange group-hover:bg-retro-orange group-hover:text-black transition-colors">
                  {sol.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-retro-orange transition-colors tracking-wide">{sol.title}</h3>
                  <p className="text-retro-gray mb-6 leading-relaxed font-mono text-sm border-l border-retro-gray pl-4">{sol.desc}</p>
                  
                  <ul className="space-y-3">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs text-retro-white font-mono uppercase">
                        <ArrowRight className="w-3 h-3 text-retro-orange mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flowchart Style */}
        <div className="border-t-2 border-dashed border-retro-gray pt-20 pb-20">
             <h2 className="font-display text-3xl font-bold mb-12 text-center uppercase">部署协议流程</h2>
             <div className="flex flex-col md:flex-row justify-between relative px-4">
                 
                 {/* Line */}
                 <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-retro-gray z-0"></div>

                 {['需求分析', '原型设计', '开发构建', '测试部署', '长期维护'].map((step, idx) => (
                     <div key={idx} className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0 group">
                         <div className="w-12 h-12 bg-retro-bg border-2 border-retro-gray group-hover:border-retro-orange group-hover:bg-retro-orange group-hover:text-black transition-all flex items-center justify-center font-bold text-retro-white mb-4 cursor-default">
                             0{idx + 1}
                         </div>
                         <h4 className="font-bold text-white font-mono text-sm tracking-wider">{step}</h4>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Solutions;