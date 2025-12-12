import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Corporate Catering",
    description: "Elevate your business events with our professional catering solutions. Ideal for board meetings, large conferences, office lunches, and training workshops.",
    features: ["Reliable Timing", "Platters & Lunch Boxes", "Professional Presentation"],
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=75&w=600&auto=format&fit=crop",
    isPopular: false
  },
  {
    title: "Wedding Catering",
    description: "Create unforgettable memories with our specialized wedding services. From full-course meals and elegant buffets to bespoke dessert tables and bar services.",
    features: ["Full Event Management", "Custom Cake Tables", "Elegant Bar Service"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=75&w=600&auto=format&fit=crop",
    isPopular: true
  },
  {
    title: "Social & Private Events",
    description: "Celebrate life's milestones with ease. Perfect for birthday parties, baby showers, anniversaries, and graduations. We offer flexible menus to suit any theme.",
    features: ["Flexible Menus", "Intimate Settings", "Dietary Accommodations"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=75&w=600&auto=format&fit=crop",
    isPopular: false
  }
];

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-darkbrown/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-gray tracking-widest uppercase mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">Our Core Services</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150} className="h-full">
              <div 
                className={`relative h-full flex flex-col transition-all duration-300 hover:-translate-y-2 border overflow-hidden group ${
                  service.isPopular 
                    ? 'bg-brand-darkbrown border-brand-gray shadow-2xl scale-105 z-10' 
                    : 'bg-[#1e1e1e] border-transparent hover:border-brand-gray/50'
                }`}
              >
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                    />
                </div>

                {service.isPopular && (
                  <div className="absolute top-4 right-4 z-20 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-4">{service.title}</h4>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="block text-center py-3 border border-gray-600 text-white hover:bg-white hover:text-black hover:border-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;