import React, { useRef, useEffect } from 'react';
import { Users, Globe, Zap, ArrowRight } from 'lucide-react'; // icons

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
};

// Button Component
const Button = ({ children, secondary = false }: { children: React.ReactNode, secondary?: boolean }) => {
  return (
    <button 
      className={`px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
        secondary 
          ? 'bg-white text-purple-700 hover:bg-gray-100' 
          : 'bg-purple-700 text-white hover:bg-purple-800'
      }`}
    >
      {children}
    </button>
  );
};

// Animated Card Component (clean)
const AnimatedCard = ({
  Icon,
  title,
  description,
  delay = 0,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) => {
  const cardRef = useIntersectionObserver();

  return (
    <div
      ref={cardRef}
      className="relative group"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="p-4 text-center animate-item group-hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Section Wrapper Component
const Section = ({ 
  id,
  title, 
  subtitle, 
  children, 
  dark = false,
  className = ""
}: { 
  id?: string,
  title: string, 
  subtitle?: string, 
  children: React.ReactNode,
  dark?: boolean,
  className?: string
}) => {
  const titleRef = useIntersectionObserver();
  
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-purple-900 text-white' : 'bg-white text-gray-800'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 animate-item"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

// Main Component
const JoinSection = () => {
  return (
    <Section
      id="join"
      title="Join Us On The Journey"
      subtitle="Be part of the next wave of AI innovation that bridges continents and transforms industries."
      dark={true}
      className="bg-gradient-to-br from-purple-900 to-purple-700"
    >
      {/* Top Call-to-Action */}
      <div ref={useIntersectionObserver()} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center max-w-2xl mx-auto animate-item">
        <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Vision?</h3>
        <p className="mb-6 opacity-90 leading-relaxed">
          Whether you're a potential client, partner, or team member, we're excited to explore how our 
          Nordic-Indian approach to AI can help you achieve your goals. Let's start a conversation about 
          the future we can build together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button>
            Contact Us <ArrowRight size={16} />
          </Button>
          <Button secondary>
            Join Our Team
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <AnimatedCard
          Icon={Users}
          title="Become a Partner"
          description="Join our ecosystem of technology partners and industry collaborators."
        />
        <AnimatedCard
          Icon={Globe}
          title="Global Opportunities"
          description="Work with us across our Nordic and Indian innovation hubs."
        />
        <AnimatedCard
          Icon={Zap}
          title="Innovation First"
          description="Experience our commitment to pushing the boundaries of what's possible."
        />
      </div>
    </Section>
  );
};

export default JoinSection;
