import { useEffect, useRef } from "react";

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
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

const Section = ({ id, title, subtitle, children }: { id: string, title: string, subtitle: string, children: React.ReactNode }) => {
  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

const FounderVision = () => {
  const founderImageRef = useIntersectionObserver();
  const founderQuoteRef = useIntersectionObserver();

  return (
    <Section
      id="vision"
      title="Our Founder's Vision"
      subtitle="A bold perspective on the future of AI and global collaboration."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Founder Image Section */}
        <div>
          <div
            ref={founderImageRef}
            className="rounded-xl overflow-hidden shadow-lg animate-item"
          >
            <img
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Founder"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Founder Quote and Description Section */}
        <div>
          <div ref={founderQuoteRef} className="animate-item">
            <blockquote className="border-l-4 border-purple-700 pl-6 mb-6">
              <p className="text-xl italic text-gray-700 mb-4">
                "I envisioned a company that would break down the barriers between continents,
                cultures, and technological approaches. In our increasingly connected world, 
                the most powerful innovations will come from bringing together diverse perspectives."
              </p>
              <footer className="text-gray-600">
                <span className="font-semibold text-purple-800">Dr. Annika Johansson</span>, Founder & CEO
              </footer>
            </blockquote>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dr. Johansson's vision continues to guide our company as we expand our global 
              footprint and develop AI solutions that address humanity's most pressing challenges.
              By maintaining our dual focus on Nordic quality and Indian scale, we're building a 
              new model for technological innovation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FounderVision;
