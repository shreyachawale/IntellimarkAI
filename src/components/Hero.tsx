import { ArrowRight, Brain, LineChart, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/bg1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SECTION */}
          <div className="flex-1 text-center lg:text-left">
            

            {/* Heading - Text in Black */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-title text-black">
              <span className="block">Smart AI</span>
              <span className="block">solutions for</span>
              <span className="block">your moment</span>
            </h1>

            {/* Subtext in Black */}
            <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
              15+ years of AI done right—talent, tech, and timing that deliver.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group shadow-lg">
                Register
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-gray-200 text-black rounded-full font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-400">
                Watch Video
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 animate-float">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                alt="Conference Speaker"
                className="w-full h-64 object-cover rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80"
                alt="Conference Audience"
                className="w-full h-64 object-cover rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>

            {/* Stats Card with Dark Text */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-md animate-float border border-gray-300">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '147%', label: 'Marketing ROI Uplift', icon: TrendingUp, color: 'text-green-600' },
                  { value: '98.7%', label: 'Model Accuracy', icon: Target, color: 'text-blue-600' },
                  { value: '43%', label: 'Margin Growth', icon: LineChart, color: 'text-purple-600' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-2">
                      <stat.icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} tracking-tight`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-800 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
