import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const staggerDelay = 0.1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const starVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * staggerDelay,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-purple-100 p-3 rounded-2xl mb-6"
          >
            <Users className="w-6 h-6 text-purple-600" />
          </motion.div>

          <motion.div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={starVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-purple-600 mb-4"
          >
            Over 250 satisfied customers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 text-lg max-w-2xl"
          >
            Join the community of successful businesses that have transformed their operations with our solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent rounded-2xl" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6 text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-sm">
                  Case Study
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold"
              >
                <span className="text-purple-600">Mathem</span> - successful teamwork from the start
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Entrepreneur Tomas Kull needed AI expertise to develop the first version of Cognivista. 
                The first choice was NeuralEdge, but ultimately, the partnership with Intellimark proved 
                to be the key to driving Cognivista's innovation and success in the AI industry.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
              >
                More about Intellimark
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-medium border-2 border-purple-200 hover:border-purple-300 transition-colors"
              >
                View all case studies
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;