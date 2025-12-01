import React from 'react';
import { Globe, Github, Twitter, Linkedin, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t-4 border-retro-orange font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                    <Globe className="h-5 w-5 text-retro-orange animate-pulse" />
                    <span className="font-display font-bold text-xl text-white tracking-tighter">
                    氢氪 <span className="text-retro-orange">星球</span>
                    </span>
                </div>
                <p className="text-retro-gray max-w-sm">
                    先进数字孪生系统研发商<br/>
                    OPERATING SINCE 2024<br/>
                    系统状态: 正常
                </p>
            </div>
            
            <div>
                <h4 className="text-retro-white font-bold mb-4 uppercase border-b border-retro-gray inline-block">导航</h4>
                <ul className="space-y-2 text-retro-gray">
                    <li><a href="#" className="hover:text-retro-orange hover:before:content-['>_'] transition-colors">首页</a></li>
                    <li><a href="#" className="hover:text-retro-orange hover:before:content-['>_'] transition-colors">解决方案</a></li>
                    <li><a href="#" className="hover:text-retro-orange hover:before:content-['>_'] transition-colors">关于我们</a></li>
                </ul>
            </div>

            <div>
                 <h4 className="text-retro-white font-bold mb-4 uppercase border-b border-retro-gray inline-block">社交链接</h4>
                 <div className="flex space-x-4">
                    <a href="#" className="text-retro-gray hover:text-white p-2 border border-retro-gray hover:border-white transition-colors"><Github className="w-4 h-4"/></a>
                    <a href="#" className="text-retro-gray hover:text-white p-2 border border-retro-gray hover:border-white transition-colors"><Twitter className="w-4 h-4"/></a>
                    <a href="#" className="text-retro-gray hover:text-white p-2 border border-retro-gray hover:border-white transition-colors"><Linkedin className="w-4 h-4"/></a>
                 </div>
            </div>
        </div>

        <div className="border-t border-retro-gray pt-6 flex flex-col md:flex-row justify-between items-center text-retro-gray/60">
          <p>&copy; 2024 氢氪星球科技有限公司 HYDROGEN KRYPTON PLANET INC.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 font-mono">
            <div className="flex items-center space-x-2">
                <Cpu className="w-3 h-3"/>
                <span>CPU: 12%</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-retro-green rounded-full animate-pulse"></div>
                <span>SERVER: OK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;