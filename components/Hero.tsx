import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Retro Wireframe Planet Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Parameters
    const GLOBE_RADIUS = Math.min(width, height) * 0.22;
    const DOT_COUNT = 700;
    
    // Points array
    const points: { x: number; y: number; z: number }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      points.push({ x: x * GLOBE_RADIUS, y: y * GLOBE_RADIUS, z: z * GLOBE_RADIUS });
    }

    let rotationY = 0;
    let rotationX = 0;
    let frameId: number;

    const render = () => {
      ctx.fillStyle = '#121212';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Background
      ctx.strokeStyle = '#1e1e1e';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 50) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
      for (let y = 0; y <= height; y += 50) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
      ctx.stroke();

      rotationY += 0.002;
      rotationX += 0.0005;

      const cx = width * 0.7; // Right aligned on desktop
      const cy = height / 2;

      // Draw Globe
      points.forEach((point) => {
        let x = point.x;
        let y = point.y;
        let z = point.z;

        // Rotate
        let tempX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
        let tempZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
        x = tempX; z = tempZ;

        let tempY = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        tempZ = y * Math.sin(rotationX) + z * Math.cos(rotationX);
        y = tempY; z = tempZ;

        const scale = 300 / (300 + z);
        const screenX = cx + x * scale;
        const screenY = cy + y * scale;
        const size = Math.max(0.6, 1.8 * scale);

        ctx.fillStyle = '#FF9F1C'; // Retro Orange
        ctx.fillRect(screenX, screenY, size, size); // Pixels instead of circles
        
        // Connections
        if (Math.random() > 0.985) {
           ctx.beginPath();
           ctx.moveTo(cx, cy);
           ctx.lineTo(screenX, screenY);
           ctx.strokeStyle = 'rgba(255, 159, 28, 0.15)';
           ctx.stroke();
        }
      });

      frameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-retro-bg border-b-2 border-retro-orange">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-100" />
      
      {/* Decorative Overlay UI */}
      <div className="absolute top-4 right-4 text-xs font-mono text-retro-orange z-10 border border-retro-orange p-2 bg-black/50 backdrop-blur">
        <div>COORDS: 34.55.12</div>
        <div>TARGET: 氢氪星球 HQ</div>
        <div className="animate-pulse">SIGNAL: 信号强</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl bg-black/70 p-6 md:p-12 border-l-4 border-retro-orange backdrop-blur-sm shadow-[10px_10px_0px_0px_rgba(30,30,30,1)]">
          
          <div className="flex items-center space-x-2 mb-4">
             <Terminal className="w-4 h-4 text-retro-green" />
             <p className="text-retro-green font-mono text-sm tracking-widest typing-effect">
               &gt; 初始化启动序列... 系统准备就绪
             </p>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            数字 <br/>
            <span className="text-retro-orange text-stroke-white">孪生世界_</span>
          </h1>

          <p className="text-retro-gray text-lg md:text-xl mb-10 max-w-xl font-mono leading-relaxed border-l border-retro-gray pl-4">
            // H-Kr Planet System v4.0<br/>
            连接物理现实与高保真数字模拟。XR 渲染 / AI 空间计算 / 元宇宙基建。我们构建未来的数字骨架。
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/solutions" className="retro-btn-shadow bg-retro-orange text-black px-8 py-4 font-bold tracking-widest uppercase flex items-center border-2 border-retro-orange hover:bg-white hover:border-white transition-all font-mono group">
              <span className="mr-2">开启探索</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/about" className="px-8 py-4 border-2 border-retro-gray text-retro-white font-bold tracking-widest uppercase hover:border-retro-white hover:text-white transition-colors flex items-center font-mono hover:bg-retro-surface">
               <Cpu className="w-5 h-5 mr-2" /> 读取日志
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Tape Strip */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-stripes-gray border-t border-retro-gray flex items-center justify-end px-4">
          <span className="text-[10px] text-black bg-retro-orange px-1 font-mono font-bold">CAUTION: HIGH VOLTAGE</span>
      </div>
    </section>
  );
};

export default Hero;