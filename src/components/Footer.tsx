import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-12 h-12 text-white" />
              <span className="text-xl font-semibold">Intellimark AI</span>
            </div>
            <div className="space-y-1">
              <p>Re-Engineering</p>
              <p>Revenue Management</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-2">
              <p>rahul@intellimark.ai</p>
              <p>+91 9140929770</p>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Products</h3>
            <div className="space-y-2">
              <p>Explainable Forecasting Engine</p>
              <p>Marketing Investment Planner</p>
              <p>Retail Growth Engine</p>
              <p>Performance Marketing Optimization</p>
            </div>
          </div>

          {/* Company and Get In Touch */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Company</h3>
              <div className="space-y-2">
                <p>Home</p>
                <p>About Us</p>
                <p>Products</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-500">Get In Touch</h3>
              <div>
                <img src="/assets/link.png" alt="LinkedIn" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-sm text-gray-400">
          © 2024 Intellimark Analytics private limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;