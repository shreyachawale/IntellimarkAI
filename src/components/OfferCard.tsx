import React from 'react';
import { Users } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  teamSize: number;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, teamSize }) => {
  return (
    <div className="relative corner-circle bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
      <div className="relative z-10">
        <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Users className="w-8 h-8 text-purple-600" />
        </div>
        <h3 className="text-2xl font-semibold text-purple-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-1">
          {Array.from({ length: teamSize }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-purple-600 opacity-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;