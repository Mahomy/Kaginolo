import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Ken Burns Effect - Optimized Image Size */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI6BfoAI7t8Kh0hQCbMQZTrFqkQEZMnRMuOPC_6K68FVkz9DbMdrwVoLIAs1ANNyNqFSwMLNN1fW5wuvJewvYpvQwmmkK15Gk5rP_OfMpLpLRJsmm6isFb2EXS-jHd3dW9w-X2GEkU3fOxR8mDG2-n63EODxX9ODBlaKCwDsGUHURQitsbg4syKFbrmfU/s1280/Example%202.png")' }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Exceptional Catering for <br/> <span className="text-gray-300">Life's Meaningful Moments</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            We offer professional, seamless catering experiences with the utmost respect and dedication, especially when you need it most.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="inline-block px-8 py-4 bg-brand-white text-brand-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
        </AnimatedSection>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;