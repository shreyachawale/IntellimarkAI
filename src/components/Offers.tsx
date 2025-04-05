import React from 'react';
import OfferCard from './OfferCard';

const Offers = () => {
  const offers = [
    {
      title: 'Small',
      description: 'Start with a small team. For example, if you are going to do a "Proof-of-concept" or have a smaller budget initially for your project, then a small team is a great place to start.',
      teamSize: 3
    },
    {
      title: 'Medium',
      description: 'When the needs grow, and there is a proven value internally, you may want to scale up the small team. This may be about achieving a higher development speed, or broadening the skills.',
      teamSize: 5
    },
    {
      title: 'Large',
      description: 'A large team is a good fit when you want to fully scale up the speed and need a team for multiple development initiatives and who takes greater overall responsibility.',
      teamSize: 8
    }
  ];

  return (
    <div className="relative py-16 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
            Our Team Offerings
          </span>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">Our offers</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our customers often talk about our commitment. We don't work with IT, we work with people.
            Our teams of developers work agilely towards customers according to proven SCRUM methodology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
