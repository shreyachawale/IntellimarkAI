import { ArrowRight } from "lucide-react"; // Assuming you're using Lucide icons

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

const AboutHero = () => {
  return (
    <header className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 opacity-30" // Increased opacity slightly for better visibility of the background image
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ animation: 'fadeUp 1s ease-out' }}
          >
            Bridging AI Innovation Across Continents
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 opacity-100 leading-relaxed" // Set opacity to 100 to make sure text is visible immediately
            style={{ animation: 'fadeUp 1s ease-out 0.2s forwards', opacity: 1 }}
          >
            Connecting Nordic excellence with Indian ingenuity to create AI solutions that transform the future.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center"
            style={{ animation: 'fadeUp 1s ease-out 0.4s forwards', opacity: 1 }} // Ensure buttons are visible after animation
          >
            <Button>
              Learn More <ArrowRight size={16} />
            </Button>
            <Button secondary>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </header>
  );
};

export default AboutHero;
