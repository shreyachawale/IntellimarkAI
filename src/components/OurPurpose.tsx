import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import { Target, Award, Globe } from 'lucide-react';

const OurPurpose: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.3}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-purple-900 tracking-tight">
            Our Purpose
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <AnimatedSection threshold={0.4}>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe that AI should be universally beneficial, ethically developed, and accessible across borders. 
              Our purpose is to create AI solutions that bridge cultural and technological divides while addressing 
              the unique challenges of both established and emerging markets.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedSection delay={100} threshold={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-700/5 rounded-2xl transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-white rounded-2xl p-10 shadow-lg transform transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-purple-100 text-purple-700 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize advanced AI capabilities by creating solutions that work across different cultural contexts 
                  and technological landscapes, making artificial intelligence a force for positive transformation in both 
                  Nordic and Indian societies and beyond.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} threshold={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-700/5 rounded-2xl transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-white rounded-2xl p-10 shadow-lg transform transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-purple-100 text-purple-700 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our work is guided by transparency, inclusivity, ethical responsibility, and cross-cultural collaboration. 
                  We believe in combining Nordic principles of privacy and user rights with Indian values of accessibility 
                  and scale to create truly universal solutions.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} threshold={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-700/5 rounded-2xl transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-white rounded-2xl p-10 shadow-lg transform transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-purple-100 text-purple-700 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  We measure our success not just by technical achievements or commercial growth, but by the tangible 
                  positive impact our AI solutions have on businesses, governments, communities, and individuals across 
                  continents and socioeconomic spectrums.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;