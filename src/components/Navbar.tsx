import React, { useState, useEffect } from "react";
import { Brain } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-lg backdrop-blur-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <Brain className="w-8 h-8 text-violet-600 transition-transform duration-300 group-hover:rotate-180" />
            <span className="text-2xl font-extrabold tracking-wide text-black">
              IntelliMark
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Services", "Solutions", "Clients", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-violet-600 transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 text-sm uppercase tracking-wide font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
