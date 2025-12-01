import React from 'react';
import { Target, Users, Award, Zap, Code2, BrainCircuit } from 'lucide-react';

const stats = [
  { label: 'PROJECTS', value: '120+', icon: <Target className="text-retro-orange" /> },
  { label: 'PATENTS', value: '45+', icon: <Award className="text-retro-white" /> },
  { label: 'AGENTS', value: '80+', icon: <Users className="text-retro-green" /> },
  { label: 'PFLOPS', value: '12.5', icon: <Zap className="text-yellow-400" /> },
];

const team = [
    { name: 'DR. ALEX CHEN', role: 'CHIEF ARCHITECT', desc: 'NASA Sim Lab Alumni. Metaverse Foundation Engineer.', icon: <BrainCircuit className="w-10 h-10 mb-4 text-retro-orange"/> },
    { name: 'SARAH WU', role: 'XR DIRECTOR', desc: 'Red Dot Winner. Immersive UX Specialist.', icon: <Users className="w-10 h-10 mb-4 text-retro-white"/> },
    { name: 'DAVID ZHANG', role: 'ALGORITHM LEAD', desc: 'Deep Learning Expert. SLAM & 3D Reconstruction.', icon: <Code2 className="w-10 h-10 mb-4 text-retro-green"/> },
]

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-bg animate-slide-up pb-20">
      
      {/* Header Banner */}
      <div className="bg-retro-surface py-20 border-b-2 border-retro-gray relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">
              About <span className="text-retro-orange text-stroke-white">US</span>
            </h1>
            <p className="text-retro-gray font-mono max-w-2xl mx-auto border-t border-retro-gray pt-4 mt-4">
               // DECODING REALITY // ENCODING THE FUTURE
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="border-2 border-retro-gray p-1 bg-retro-surface">
                 <img 
                    src="https://images.unsplash.com/photo-1614726365723-49cfae92782f?auto=format&fit=crop&q=80&w=800" 
                    alt="HQ" 
                    className="grayscale contrast-125 w-full"
                 />
            </div>
            <div>
                 <h2 className="font-display text-3xl font-bold mb-6 text-white uppercase">Bridging Atoms & Bits</h2>
                 <div className="space-y-6 text-retro-white/80 font-mono text-sm leading-relaxed">
                     <p>
                        Established in 2024, H-Kr Planet is a collective of engineers and designers obsessed with the boundary between virtual and physical. 
                     </p>
                     <p>
                        We don't just write code; we fabricate reality. Using high-precision physics engines, we give the digital world weight, friction, and light.
                     </p>
                     
                     <div className="bg-black p-4 border border-retro-green/50 text-retro-green text-xs mt-6">
                        > MISSION_STATUS: ACTIVE<br/>
                        > PROGRESS: 75%<br/>
                        > TARGET: SECOND_SURVIVAL_SPACE
                     </div>
                 </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-retro-surface p-6 border-2 border-retro-gray hover:border-retro-orange transition-all duration-300 group"
            >
              <div className="flex justify-between mb-4">
                  {stat.icon}
                  <span className="text-xs text-retro-gray font-mono">0{idx+1}</span>
              </div>
              <div className="font-display text-3xl font-bold text-white mb-1 group-hover:text-retro-orange">{stat.value}</div>
              <div className="text-xs font-mono text-retro-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
             <div className="flex items-center space-x-4 mb-12">
                <div className="h-px bg-retro-gray flex-grow"></div>
                <h2 className="font-display text-3xl font-bold text-center uppercase">Core Operators</h2>
                <div className="h-px bg-retro-gray flex-grow"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {team.map((member, idx) => (
                     <div 
                        key={idx}
                        className="p-8 bg-black border border-retro-gray hover:border-retro-white transition-all text-center relative overflow-hidden group"
                     >
                         <div className="absolute top-0 left-0 w-full h-1 bg-retro-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                         
                         <div className="flex justify-center">{member.icon}</div>
                         <h3 className="text-xl font-bold text-white mb-1 font-display uppercase">{member.name}</h3>
                         <div className="text-retro-orange font-mono text-xs mb-4 tracking-widest">{member.role}</div>
                         <p className="text-gray-500 text-xs font-mono">{member.desc}</p>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;