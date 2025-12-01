import React from 'react';
import { Target, Users, Award, Zap, Code2, BrainCircuit } from 'lucide-react';

const stats = [
  { label: '交付项目', value: '120+', icon: <Target className="text-retro-orange" /> },
  { label: '核心专利', value: '45+', icon: <Award className="text-retro-white" /> },
  { label: '研发人员', value: '80+', icon: <Users className="text-retro-green" /> },
  { label: '算力 (PFLOPS)', value: '12.5', icon: <Zap className="text-yellow-400" /> },
];

const team = [
  { name: 'Dr. Alex Chen', role: '首席架构师', desc: '前 NASA 仿真实验室研究员。元宇宙基础设施奠基人。', icon: <BrainCircuit className="w-10 h-10 mb-4 text-retro-orange" /> },
  { name: 'Sarah Wu', role: 'XR 设计总监', desc: '红点奖得主。沉浸式交互体验专家。', icon: <Users className="w-10 h-10 mb-4 text-retro-white" /> },
  { name: 'David Zhang', role: '算法负责人', desc: '深度学习专家。SLAM 与三维重建领域领军人物。', icon: <Code2 className="w-10 h-10 mb-4 text-retro-green" /> },
]

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-bg animate-slide-up pb-20">

      {/* Header Banner */}
      <div className="bg-retro-surface py-20 border-b-2 border-retro-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">
            关于 <span className="text-retro-orange text-stroke-white">我们</span>
          </h1>
          <p className="text-retro-gray font-mono max-w-2xl mx-auto border-t border-retro-gray pt-4 mt-4">
               // DECODING REALITY // ENCODING THE FUTURE // 解码现实，编码未来
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
              className="grayscale contrast-125 w-full hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-6 text-white uppercase">连接原子与比特</h2>
            <div className="space-y-6 text-retro-white/80 font-mono text-sm leading-relaxed">
              <p>
                氢氪星球成立于 2024 年，是由一群对“虚实界限”充满执念的工程师和设计师组成的先锋团队。
              </p>
              <p>
                我们不只是编写代码，我们是在编织现实。利用高精度的物理引擎，我们赋予数字世界重量、摩擦力和光影。我们的目标是构建人类的第二生存空间。
              </p>

              <div className="bg-black p-4 border border-retro-green/50 text-retro-green text-xs mt-6 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                &gt; 任务状态: 进行中<br />
                &gt; 完成进度: 75%<br />
                &gt; 目标: 构建第二生存空间
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-retro-surface p-6 border-2 border-retro-gray hover:border-retro-orange transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex justify-between mb-4">
                {stat.icon}
                <span className="text-xs text-retro-gray font-mono">0{idx + 1}</span>
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
            <h2 className="font-display text-3xl font-bold text-center uppercase">核心操作员</h2>
            <div className="h-px bg-retro-gray flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-8 bg-black border border-retro-gray hover:border-retro-white transition-all text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-retro-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">{member.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1 font-display uppercase mt-4">{member.name}</h3>
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