import React from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
  // Client provided images - optimized paths if possible, otherwise kept as is
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH7je7hPMBgeAn9_6FY0i8BWtWSTe38C3PGOUjuIqQ7tLKJosluOHrs-jnR_Rt-eMf97jgWJTw9gsQFr135wUBp9Dwnrd80B3l-YWfug5IDDFLn_eL4U4Tnh_twSMaRbnIUlx3a3h4mb9RGg9xfkLDtsb2fUnI77AzM4mcPSV0f7hAO-ulmp3R-Z_0ltk/s640/1.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrWeXTYxr0Zbp4WiCHxy0-dV6PMDyI6eTEr5LAXlGzFStPMecPeSFIMjrd7ZnZ3eXQMbdNJAnie7nVEXc6gU5T64Qo6yJgZs6ceVkexlaFHaTD30C6_vaqiE2zgfdh9kSgKSpgGRMhjn6F6DZnBAqaQnjfbVdKWwLKq8vWW-vvQ6ZX42MPR8BDs9gMYjY/s320/2.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdaU5GSbfhp5xTo3c7ITLmsMESy95o9seSJJwgsjRB2-KOYZulJwtPLUSfULo9haab5XYBtiJMl1NVlv1hnu658AWvnfWOSCpVTEspDR-AqYwdXlESL_M_xrbFvLdeQDjjpCWJrlcyeBRz1nopAazrrm7PdGScUls3xGRtOKJY4ixpwNpvNNYf-j6i6QM/s640/3.jpg",
  
  // Reliable Unsplash images (Optimized size)
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=60&w=500", // Catering Kitchen
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=60&w=500", // Food Spread
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=60&w=500", // Cake/Dessert
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=60&w=500", // Drinks
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=60&w=500", // Fine Dining
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=60&w=500", // Healthy Food
  "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&q=60&w=500", // Buffet
  "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=60&w=500", // Plating (Replaced)
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=60&w=500", // Event Hall
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