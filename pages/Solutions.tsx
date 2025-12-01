import React from 'react';
import { Layers, Cpu, Globe, Smartphone, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "IND_METAVERSE_PLATFORM",
    icon: <Layers className="w-8 h-8" />,
    desc: "WebGPU-based massive scene rendering. Real-time IoT data injection. Full lifecycle management.",
    features: ["10M+ POLYGON SUPPORT", "SUB-SECOND LATENCY", "MULTI-TERMINAL SYNC"]
  },
  {
    title: "CITY_DIGITAL_BASE",
    icon: <Globe className="w-8 h-8" />,
    desc: "CIM (City Information Modeling) data center. GIS + BIM fusion. Smart city governance.",
    features: ["SPATIAL AWARENESS", "TRAFFIC SIMULATION", "EMERGENCY COMMAND"]
  },
  {
    title: "XR_MARKETING_INTERACT",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "AR Try-on, VR Showrooms. Boosting user engagement and conversion rates.",
    features: ["WEBAR (NO INSTALL)", "CROSS-PLATFORM", "PBR MATERIALS"]
  },
  {
    title: "AIGC_CONTENT_GEN",
    icon: <Cpu className="w-8 h-8" />,
    desc: "Automated 3D model, texture, and scene generation using Generative AI.",
    features: ["TEXT-TO-3D", "SMART TEXTURING", "NPC BEHAVIOR TREES"]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-bg animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        
        <div className="mb-16 border-b-4 border-retro-orange pb-8">
          <div className="flex items-center space-x-2 text-retro-orange mb-2">
             <span className="w-3 h-3 bg-retro-orange"></span>
             <span className="font-mono text-xs">TECHNICAL_MANUAL_V4.0</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black uppercase text-white tracking-tighter">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-orange to-yellow-500">Solutions</span>
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
                <div className="p-4 bg-retro-surface border border-retro-gray text-retro-orange">
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
             <h2 className="font-display text-3xl font-bold mb-12 text-center uppercase">Deployment Protocol</h2>
             <div className="flex flex-col md:flex-row justify-between relative px-4">
                 
                 {/* Line */}
                 <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-retro-gray z-0"></div>

                 {['ANALYSIS', 'PROTOTYPE', 'DEVELOP', 'TEST_DEPLOY', 'MAINTAIN'].map((step, idx) => (
                     <div key={idx} className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0 group">
                         <div className="w-12 h-12 bg-retro-bg border-2 border-retro-gray group-hover:border-retro-orange group-hover:bg-retro-orange group-hover:text-black transition-all flex items-center justify-center font-bold text-retro-white mb-4">
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