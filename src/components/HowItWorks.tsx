import { motion } from 'framer-motion';
import { Search, Code2, Zap, LineChart, Heart } from 'lucide-react';

const TransformSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Needs Analysis',
      description: 'We start with a workshop to understand your challenges and goals. Together, we’ll design a customized AI solution that directly addresses your needs.',
    },
    {
      icon: Code2,
      title: 'Solution Suggestions',
      description: 'After the workshop, we provide a detailed proposal with the structure, processes, scope, and technology. We refine this together to ensure it aligns with your vision.',
    },
    {
      icon: Zap,
      title: 'Ready to Begin',
      description: 'Once the project scope is defined, we set up the necessary tools and workflows. We then assemble a skilled AI team to ensure a seamless project launch and execution.',
    },
    {
      icon: LineChart,
      title: 'Agile and Collaborative',
      description: 'Our agile, collaborative process includes development, testing, reviews, and demos. We remain flexible, adapting to your specific business needs throughout the project.',
    },
    {
      icon: Heart,
      title: 'Continuous Improvement',
      description: 'After each iteration, we evaluate what’s working and where improvements can be made, refining our approach to ensure ongoing growth and optimization throughout the project.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How We <motion.span
              initial={{ color: "#000" }}
              animate={{ color: "#9333EA" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-purple-600"
            >Transform</motion.span> Your Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Our proven methodology for implementing cutting-edge AI solutions that drive real business value
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 mb-6 group-hover:shadow-purple-200 transition-shadow duration-300"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <step.icon className="w-10 h-10 text-purple-600" />
                  </motion.div>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.span 
                        className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-semibold"
                        whileHover={{ scale: 1.1, backgroundColor: "#9333EA", color: "#ffffff" }}
                        transition={{ duration: 0.2 }}
                      >
                        {index + 1}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </motion.div>
                    <p className="text-gray-600 leading-relaxed px-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
