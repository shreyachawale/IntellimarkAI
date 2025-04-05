import React, { useEffect, useRef } from 'react';
import { Building2, CircuitBoard, Cloud, Code2, Database, Globe2, Layout, Server } from 'lucide-react';

interface Logo {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const logos: Logo[] = [
  { name: "IBM", icon: <Server className="w-8 h-8" />, description: "Enterprise Solutions" },
  { name: "Google", icon: <Globe2 className="w-8 h-8" />, description: "Cloud Infrastructure" },
  { name: "AWS", icon: <Cloud className="w-8 h-8" />, description: "Cloud Computing" },
  { name: "Microsoft", icon: <Layout className="w-8 h-8" />, description: "Software Solutions" },
  { name: "Oracle", icon: <Database className="w-8 h-8" />, description: "Database Systems" },
  { name: "Salesforce", icon: <Building2 className="w-8 h-8" />, description: "CRM Platform" },
  { name: "Adobe", icon: <Code2 className="w-8 h-8" />, description: "Creative Tools" },
  { name: "Intel", icon: <CircuitBoard className="w-8 h-8" />, description: "Processors" },
];

const ClientLogos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    const scroll = scrollRef.current;
    const container = containerRef.current;
    
    if (!scroll || !container) return;

    const totalWidth = scroll.scrollWidth / 2;
    const duration = 30000; // 30 seconds for one complete cycle
    let isPaused = false;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      if (!isPaused) {
        const elapsed = timestamp - startTimeRef.current;
        const progress = (elapsed % duration) / duration;
        const translateX = -progress * totalWidth;

        scroll.style.transform = `translateX(${translateX}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pauseAnimation = () => {
      isPaused = true;
    };

    const resumeAnimation = () => {
      isPaused = false;
      startTimeRef.current = performance.now() - 
        (parseFloat(scroll.style.transform.replace('translateX(', '').replace('px)', '')) / totalWidth) * duration;
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <div 
      className="w-full py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 relative"
      ref={containerRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Our Technology Partners
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-900 to-transparent z-10" />

          <div 
            ref={scrollRef} 
            className="flex space-x-8 will-change-transform"
            style={{ width: '200%' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-64 h-32 bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center p-6 hover:from-purple-700/50 hover:to-purple-800/50 transition-all duration-300 group transform hover:scale-105 border border-purple-700/20"
              >
                <div className="text-purple-300 group-hover:text-white transition-colors duration-300 mb-2">
                  {logo.icon}
                </div>
                <span className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                  {logo.name}
                </span>
                <span className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors duration-300 mt-1">
                  {logo.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;