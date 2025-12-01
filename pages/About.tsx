import React from 'react';
import { Target, Users, Award, Zap, Code2, BrainCircuit } from 'lucide-react';

const stats = [
  { label: '数字孪生项目', value: '120+', icon: <Target className="text-brand-glow" /> },
  { label: '核心专利', value: '45+', icon: <Award className="text-brand-accent" /> },
  { label: '团队成员', value: '80+', icon: <Users className="text-blue-400" /> },
  { label: '渲染算力 (PFLOPS)', value: '12.5', icon: <Zap className="text-yellow-400" /> },
];

const team = [
    { name: 'Dr. Alex Chen', role: '首席架构师', desc: '前 NASA 仿真实验室研究员，元宇宙架构奠基人。', icon: <BrainCircuit className="w-12 h-12 mb-4 text-brand-glow"/> },
    { name: 'Sarah Wu', role: 'XR 创意总监', desc: '曾获红点设计大奖，专注于沉浸式人机交互体验。', icon: <Users className="w-12 h-12 mb-4 text-brand-accent"/> },
    { name: 'David Zhang', role: 'AI 算法专家', desc: '深度学习领域专家，主攻 SLAM 与三维重建算法。', icon: <Code2 className="w-12 h-12 mb-4 text-blue-400"/> },
]

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-dark animate-slide-up">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-glow/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-20 mt-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-accent">
              关于氢氪星球
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            我们是一群探索虚拟与现实边界的极客。H-Kr Planet 诞生于 2024 年，旨在通过最前沿的图形技术与人工智能，为人类构建第二生存空间。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-xl text-center border border-white/10 hover:border-brand-glow/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="font-display text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-glow to-brand-accent opacity-20 blur-xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1614726365723-49cfae92782f?auto=format&fit=crop&q=80&w=800" 
                alt="Office" 
                className="relative rounded-2xl border border-white/10 shadow-2xl z-10"
              />
           </div>
           <div>
              <h2 className="font-display text-3xl font-bold mb-6">连接原子与比特</h2>
              <div className="space-y-6 text-gray-400">
                  <p>
                    在氢氪星球，我们不只是编写代码，我们是在编织现实。通过高精度的物理仿真引擎，我们让数字世界拥有了重量、摩擦力和光影。
                  </p>
                  <p>
                    我们的愿景是让每一个人都能拥有自己的"数字分身"和"虚拟家园"，打破物理空间的限制，实现信息的瞬时传递与情感的无损交互。
                  </p>
                  <div className="pt-4">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-glow to-brand-accent w-3/4 animate-pulse"></div>
                      </div>
                      <div className="flex justify-between text-xs font-mono text-brand-glow mt-2">
                          <span>MISSION PROGRESS</span>
                          <span>75%</span>
                      </div>
                  </div>
              </div>
           </div>
        </div>

        {/* Team */}
        <div className="mb-24">
             <h2 className="font-display text-3xl font-bold mb-12 text-center">核心创世团队</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {team.map((member, idx) => (
                     <div 
                        key={idx}
                        className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 text-center"
                     >
                         <div className="flex justify-center">{member.icon}</div>
                         <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                         <div className="text-brand-glow font-mono text-sm mb-4">{member.role}</div>
                         <p className="text-gray-400 text-sm">{member.desc}</p>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;