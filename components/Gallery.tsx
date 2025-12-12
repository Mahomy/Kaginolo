import React from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop", // Catering setup
  "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2600&auto=format&fit=crop", // Wedding table
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2600&auto=format&fit=crop", // Cake
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2669&auto=format&fit=crop", // Drinks
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop", // Fine dining
  "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2670&auto=format&fit=crop", // Buffet Line
  "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2670&auto=format&fit=crop", // Appetizers
  "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=2670&auto=format&fit=crop", // Outdoor
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop", // Curry/Food
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-gray tracking-widest uppercase mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">Culinary Excellence</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <AnimatedSection key={index} delay={(index % 3) * 100}>
              <div className="group relative overflow-hidden aspect-square cursor-pointer bg-[#111]">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-4 py-2 text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;