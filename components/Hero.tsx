import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Digital Twin Planet Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Parameters
    const GLOBE_RADIUS = Math.min(width, height) * 0.25;
    const DOT_COUNT = 800;
    const DOT_SIZE = 1.5;
    
    // Points array
    const points: { x: number; y: number; z: number; theta: number; phi: number }[] = [];

    // Initialize Fibonacci Sphere points
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // Radius at y
      
      const theta = phi * i; // Golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      points.push({ x: x * GLOBE_RADIUS, y: y * GLOBE_RADIUS, z: z * GLOBE_RADIUS, theta, phi });
    }

    let rotationX = 0;
    let rotationY = 0;
    let frameId: number;

    const render = () => {
      ctx.fillStyle = '#030712'; // Clear with background color
      ctx.fillRect(0, 0, width, height);

      rotationY += 0.003;
      rotationX += 0.001;

      const cx = width / 2 + width * 0.15; // Shift globe slightly right on desktop
      const cy = height / 2;

      // Draw connections (lines between close points) - strictly limited for performance
      ctx.lineWidth = 0.5;
      
      points.forEach((point, i) => {
        // Rotate
        let x = point.x;
        let y = point.y;
        let z = point.z;

        // Rotation around Y
        let tempX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
        let tempZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
        x = tempX;
        z = tempZ;

        // Rotation around X
        let tempY = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        tempZ = y * Math.sin(rotationX) + z * Math.cos(rotationX);
        y = tempY;
        z = tempZ;

        // Project 3D to 2D
        const scale = 300 / (300 + z); // Perspective projection
        const screenX = cx + x * scale;
        const screenY = cy + y * scale;
        const alpha = Math.max(0.1, (scale - 0.5)); // Fade back points

        // Draw Point
        ctx.beginPath();
        ctx.arc(screenX, screenY, DOT_SIZE * scale, 0, Math.PI * 2);
        
        // Color gradient based on position
        if (i % 5 === 0) {
            ctx.fillStyle = `rgba(112, 0, 223, ${alpha})`; // Purple accent
        } else {
            ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`; // Cyan primary
        }
        
        ctx.fill();

        // Draw "Data Streams" (Orbit rings)
        if (i % 100 === 0) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, GLOBE_RADIUS * 1.5 * scale, GLOBE_RADIUS * 0.4 * scale, rotationY + i, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * alpha})`;
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
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-brand-dark">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-pulse-slow">
            <span className="px-3 py-1 rounded-full border border-brand-glow/50 bg-brand-glow/10 text-brand-glow text-xs font-mono tracking-widest uppercase">
              System Online v4.0
            </span>
            <span className="h-px w-20 bg-gradient-to-r from-brand-glow to-transparent"></span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            构建未来的 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-accent">
              数字镜像 (Digital Twin)
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            氢氪星球致力于将物理世界与数字世界无缝融合。利用 AI 驱动的数字孪生、高保真 XR 渲染引擎，为您打造沉浸式的工业、商业与娱乐元宇宙体验。
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/solutions" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all hover:scale-105 inline-block cursor-pointer">
              <div className="absolute inset-0 w-full h-full bg-brand-glow/20 border border-brand-glow group-hover:bg-brand-glow/30 transition-all"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-glow"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-brand-glow"></div>
              <span className="relative flex items-center font-display font-bold tracking-wider text-white">
                EXPLORE NOW <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/about" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
               <div className="p-2 rounded-full bg-white/5 border border-white/10">
                 <Cpu className="h-5 w-5 text-brand-accent" />
               </div>
               <span className="font-sans text-sm">AI Core Active</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
      <div className="absolute bottom-10 right-10 hidden md:flex space-x-8 text-xs text-gray-500 font-mono">
        <div className="flex items-center"><Network className="w-4 h-4 mr-2 text-brand-glow"/> LATENCY: 12ms</div>
        <div className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"/> SERVER: STABLE</div>
      </div>
    </section>
  );
};

export default Hero;