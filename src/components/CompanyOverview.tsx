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

const AboutCompany = () => {
  const contentRef = useIntersectionObserver();
  const imageRef = useIntersectionObserver();

  return (
    <Section
      id="about"
      title="Our Company"
      subtitle="Founded on the principle of global collaboration, we're reimagining how AI can solve complex problems."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content Section */}
        <div className="order-2 md:order-1">
          <div ref={contentRef} className="animate-item">
            <h3 className="text-2xl font-semibold mb-4 text-purple-800">
              A New Paradigm in AI Development
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our company was established in 2023 with a bold vision: to create an AI development powerhouse that combines
              the methodical innovation approach of Nordic countries with the scalable engineering expertise of India.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              By bridging these two worlds, we've created a unique development ecosystem that pushes the boundaries
              of what's possible in artificial intelligence, delivering solutions that are both technically excellent
              and commercially viable.
            </p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 flex items-center">
              Our Story <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M12 8L4 8M8 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2">
          <div ref={imageRef} className="rounded-xl overflow-hidden shadow-lg animate-item">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Company"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutCompany;
