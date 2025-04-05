import { motion } from 'framer-motion';
import { Brain, Cpu, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Transform your business with custom AI solutions. We analyze your needs and create a roadmap for AI integration that drives real results.",
    features: [
      "Comprehensive AI readiness assessment",
      "Custom AI strategy development",
      "ROI-focused implementation planning"
    ],
    buttonText: "Explore AI Strategy"
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Build powerful ML models that solve complex business problems. From concept to deployment, we handle the entire development lifecycle.",
    features: [
      "Custom model development",
      "Data pipeline optimization",
      "Scalable ML infrastructure"
    ],
    buttonText: "Discover ML Solutions"
  },
  {
    icon: Briefcase,
    title: "AI Integration Services",
    description: "Seamlessly integrate AI into your existing systems. Our experts ensure smooth implementation with minimal disruption to your operations.",
    features: [
      "Enterprise system integration",
      "API development & optimization",
      "Performance monitoring & scaling"
    ],
    buttonText: "Learn About Integration"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0)] bg-[length:16px_16px] opacity-[0.3]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
              Our Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Transformative AI Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with next-generation AI solutions that drive innovation and growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-[0.15] transition-opacity duration-300" />
              <div className="relative flex-1">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl transform -rotate-6" />
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-auto py-3.5 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-[0_2px_8px_rgb(59,130,246,0.25)] hover:shadow-[0_4px_12px_rgb(59,130,246,0.35)]"
              >
                {service.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;