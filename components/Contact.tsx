import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-retro-bg border-t-2 border-retro-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-block bg-retro-orange text-black font-bold px-2 py-1 text-xs mb-4 font-mono">
               COMMUNICATION_UPLINK
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase">
              建立 <br />
              <span className="text-retro-orange">连接通道</span>
            </h2>
            <p className="text-retro-gray mb-12 text-lg font-mono border-l-2 border-retro-gray pl-4">
              我们的操作员正在待命。请传输您的需求，我们将立即处理数据包。
            </p>

            <div className="space-y-6 font-mono">
              <div className="flex items-center space-x-4 border border-retro-gray p-4 bg-retro-surface hover:border-retro-orange transition-colors">
                <MapPin className="h-5 w-5 text-retro-orange" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase">扇区坐标</h4>
                  <p className="text-retro-gray text-sm">中国，上海，张江高科园区 88 号</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 border border-retro-gray p-4 bg-retro-surface hover:border-retro-orange transition-colors">
                <Mail className="h-5 w-5 text-retro-orange" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase">电子信道</h4>
                  <p className="text-retro-gray text-sm">BUSINESS@H-KR.PLANET</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 border border-retro-gray p-4 bg-retro-surface hover:border-retro-orange transition-colors">
                <Phone className="h-5 w-5 text-retro-orange" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase">语音线路</h4>
                  <p className="text-retro-gray text-sm">+86 21 8888 6666</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black border-2 border-retro-green p-6 font-mono relative shadow-[0_0_20px_rgba(0,255,65,0.1)]">
            <div className="absolute top-0 left-0 bg-retro-green text-black text-xs px-2 font-bold">TERMINAL_INPUT</div>
            
            <form className="space-y-6 mt-6">
              <div className="space-y-1">
                <label className="text-retro-green text-xs">&gt; 输入身份_ID (姓名)</label>
                <input type="text" className="w-full bg-retro-bg border-b border-retro-green text-white px-2 py-2 focus:outline-none focus:bg-retro-surface placeholder-retro-gray/50 transition-colors" placeholder="NAME" />
              </div>
              
              <div className="space-y-1">
                <label className="text-retro-green text-xs">&gt; 所属组织 (公司)</label>
                <input type="text" className="w-full bg-retro-bg border-b border-retro-green text-white px-2 py-2 focus:outline-none focus:bg-retro-surface placeholder-retro-gray/50 transition-colors" placeholder="COMPANY" />
              </div>
              
              <div className="space-y-1">
                <label className="text-retro-green text-xs">&gt; 通讯地址 (邮箱)</label>
                <input type="email" className="w-full bg-retro-bg border-b border-retro-green text-white px-2 py-2 focus:outline-none focus:bg-retro-surface placeholder-retro-gray/50 transition-colors" placeholder="EMAIL" />
              </div>

              <div className="space-y-1">
                <label className="text-retro-green text-xs">&gt; 数据包内容 (需求描述)</label>
                <textarea rows={4} className="w-full bg-retro-bg border-b border-retro-green text-white px-2 py-2 focus:outline-none focus:bg-retro-surface placeholder-retro-gray/50 transition-colors" placeholder="MESSAGE CONTENT..."></textarea>
              </div>

              <button type="submit" className="w-full bg-retro-green text-black font-bold py-3 mt-4 hover:bg-white transition-colors flex justify-center items-center uppercase tracking-widest group">
                <Send className="w-4 h-4 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> 发送传输
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;