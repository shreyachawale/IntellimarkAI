import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Clock, Award, HeartHandshake } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="relative group"
    >
      <motion.div 
        className="flex flex-col items-center relative"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div 
          className="text-purple-600 mb-4 relative"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -inset-2 bg-purple-600/5 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {icon}
        </motion.div>
        <motion.div 
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-600/90 to-purple-600/70 mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {count}
          <motion.span 
            className="text-3xl ml-1 inline-block"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 1 }}
          >
            {label.includes('years') || label.includes('Rate') ? '%' : ''}
            {label.includes('Support') ? '/7' : ''}
            {!label.includes('Rate') && !label.includes('Support') ? '+' : ''}
          </motion.span>
        </motion.div>
        <motion.div 
          className="text-gray-600 font-medium text-lg group-hover:text-purple-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function StatsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex items-center" ref={containerRef}>
      {/* Background Image with Enhanced Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      >
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
          alt="Team working"
          className="object-cover w-full h-full scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-sm" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center mb-16 px-4"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-600/90 to-purple-600/80"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Backed by World-Class <br />
            <span className="text-purple-600">AI Talent</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team of AI experts brings together decades of experience in machine learning,
            deep learning, and artificial intelligence implementation across industries.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          <StatItem
            icon={<Users size={42} strokeWidth={1.5} />}
            value={150}
            label="AI Experts"
            delay={0}
          />
          <StatItem
            icon={<Clock size={42} strokeWidth={1.5} />}
            value={8}
            label="Years Experience"
            delay={0.1}
          />
          <StatItem
            icon={<Award size={42} strokeWidth={1.5} />}
            value={95}
            label="Retention Rate"
            delay={0.2}
          />
          <StatItem
            icon={<HeartHandshake size={42} strokeWidth={1.5} />}
            value={24}
            label="Client Support"
            delay={0.3}
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -right-32 -top-32 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}