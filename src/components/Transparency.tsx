import { useRef, useEffect } from "react";

const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);

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

// --- Section Component ---
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

// --- Testimonial Component ---
const Testimonial = ({ quote, author, role }: { quote: string, author: string, role: string }) => {
  const testimonialRef = useIntersectionObserver();

  return (
    <div
      ref={testimonialRef}
      className="bg-white rounded-xl p-6 shadow-sm animate-item"
    >
      <div className="mb-4 text-purple-700">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.668 18.6667C12.134 18.6667 13.3327 19.8654 13.3327 21.3307C13.3327 22.796 12.134 23.9947 10.668 23.9947C9.20268 23.9947 8.00268 22.796 8.00268 21.3307C8.00268 16.0947 12.2693 11.8267 17.5053 11.8267V14.4934C16.0644 14.4934 14.6772 14.9427 13.5129 15.7787C12.3485 16.6147 11.4619 17.7902 10.9693 19.1534C10.8693 19.0014 10.7733 18.8374 10.668 18.6667ZM21.3347 18.6667C22.8 18.6667 23.9987 19.8654 23.9987 21.3307C23.9987 22.796 22.8 23.9947 21.3347 23.9947C19.8693 23.9947 18.6693 22.796 18.6693 21.3307C18.6693 16.0947 22.936 11.8267 28.172 11.8267V14.4934C26.7311 14.4934 25.3439 14.9427 24.1795 15.7787C23.0152 16.6147 22.1286 17.7902 21.636 19.1534C21.536 19.0014 21.44 18.8374 21.3347 18.6667Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{quote}</p>
      <div>
        <h4 className="font-semibold text-gray-800">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

// --- TeamMember Component ---
const TeamMember = ({ image, name, role }: { image: string, name: string, role: string }) => {
  const memberRef = useIntersectionObserver();

  return (
    <div
      ref={memberRef}
      className="animate-item"
    >
      <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-purple-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-purple-600">{role}</p>
    </div>
  );
};

// --- Main Section You Asked ---
const TransparencySection = () => {
  return (
    <Section
      id="transparency"
      title="Addressing Uncertainty with Transparency"
      subtitle="Our commitment to ethical AI development and open communication."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div ref={useIntersectionObserver()} className="animate-item">
            <h3 className="text-2xl font-semibold mb-4 text-purple-800">Our Transparency Pledge</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              In an era where AI technologies evolve rapidly and often outpace regulatory frameworks,
              we believe transparency is non-negotiable. We commit to clear communication about how our
              systems work, what data they use, and the limitations of our technology.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Our transparency extends to our business practices as well. We provide clear documentation,
              regular updates, and honest assessments of project timelines and challenges. By addressing
              uncertainty head-on, we build trust and create more effective partnerships.
            </p>
          </div>
        </div>
        <div>
          <div
            ref={useIntersectionObserver()}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-item"
          >
            <Testimonial
              quote="Their commitment to transparency gave us confidence to move forward with an ambitious AI implementation that transformed our business."
              author="Maria Eriksson"
              role="CTO, TechNordic"
            />
            <Testimonial
              quote="What stands out is how they communicate challenges alongside successes, creating a true partnership rather than just a vendor relationship."
              author="Raj Patel"
              role="VP of Innovation, GlobalTech"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TransparencySection;
