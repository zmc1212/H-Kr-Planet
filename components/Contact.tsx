import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              准备好进入<br />
              <span className="text-brand-glow">数字新纪元了吗？</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              无论您是想咨询数字孪生解决方案，还是探讨元宇宙合作，氢氪星球的专家团队随时待命。
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg text-brand-glow">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">总部地址</h4>
                  <p className="text-gray-400 text-sm">上海市浦东新区张江高科数字岛 88 号 H-Kr 大厦</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg text-brand-glow">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">商务合作</h4>
                  <p className="text-gray-400 text-sm">business@h-kr.planet</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg text-brand-glow">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">联系电话</h4>
                  <p className="text-gray-400 text-sm">+86 21 8888 6666</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">姓名</label>
                  <input type="text" id="name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all" placeholder="您的姓名" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">公司</label>
                  <input type="text" id="company" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all" placeholder="公司名称" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">邮箱</label>
                <input type="email" id="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all" placeholder="your@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">留言需求</label>
                <textarea id="message" rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all" placeholder="请简述您的项目需求..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-brand-accent to-brand-glow text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow">
                发送消息
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;