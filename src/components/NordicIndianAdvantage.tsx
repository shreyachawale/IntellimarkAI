import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import { Check } from 'lucide-react';

const NordicIndianAdvantage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-900">
            The Nordic-Indian Advantage
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedSection>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our unique cross-continental approach combines the strengths of two distinct AI traditions, 
              creating solutions that are both methodically sound and practically scalable.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative overflow-hidden rounded-xl shadow-xl h-[500px] group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-700/70 to-purple-900/70 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nordic Precision" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Nordic Precision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Methodical approach to AI development with strong focus on validation</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Pioneering work in ethical AI frameworks and privacy-preserving technologies</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>User-centered design approach that prioritizes transparency and control</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Strong institutional partnerships with research universities and government</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={100}>
            <div className="relative overflow-hidden rounded-xl shadow-xl h-[500px] group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-700/70 to-purple-900/70 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Indian Innovation" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Indian Innovation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Agile development culture that excels at rapid prototyping and iteration</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Expertise in developing solutions for diverse user populations at scale</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Strong talent pool of AI engineers with practical implementation skills</span>
                  </li>
                  <li className="flex items-start text-white">
                    <Check className="h-6 w-6 text-purple-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Deep understanding of emerging market challenges and opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* <AnimatedSection delay={200}>
          <div className="mt-20 bg-white rounded-xl shadow-lg p-10">
            <h3 className="text-2xl font-bold text-purple-800 mb-8 text-center">The Combined Effect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-purple-50 transition-all duration-300 hover:bg-purple-100 hover:shadow">
                <div className="text-purple-700 font-bold text-5xl mb-4">1+1=3</div>
                <p className="text-gray-700">
                  Our cross-continental approach creates synergies that amplify the strengths of each tradition
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-purple-50 transition-all duration-300 hover:bg-purple-100 hover:shadow">
                <div className="text-purple-700 font-bold text-5xl mb-4">24/7</div>
                <p className="text-gray-700">
                  Development across time zones enables continuous progress and faster time-to-market
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-purple-50 transition-all duration-300 hover:bg-purple-100 hover:shadow">
                <div className="text-purple-700 font-bold text-5xl mb-4">360°</div>
                <p className="text-gray-700">
                  Cultural diversity provides comprehensive perspective on global AI challenges
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};

export default NordicIndianAdvantage;