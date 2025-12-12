import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Content Side - Text appears first on mobile for better UX */}
          <div>
            <AnimatedSection>
              <h2 className="text-sm font-bold text-brand-gray tracking-widest uppercase mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 md:mb-8">Compassionate catering for life's most significant moments.</h3>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Founded by Betty, <strong className="text-white">Kaginolo</strong> is built on a foundation of empathy and culinary excellence. We understand that food is more than just sustenance—it is a comfort, a celebration, and a way to bring people together. With extensive experience in the industry, we have made it our mission to go beyond traditional service.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We specialize in lending a helping hand during times of bereavement. The passing of a loved one is an emotional and challenging journey, and the last thing you should worry about is the logistics of feeding your guests. We approach every memorial and funeral service with the utmost respect, discretion, and professionalism.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's a corporate gala, a dream wedding, or a private family gathering, our goal remains the same: to place delicious, fresh meals on your plate—and take the stress off of it.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <div className="h-1 w-20 bg-brand-gray rounded"></div>
                <span className="text-sm text-gray-500 font-serif italic">Managed by Betty</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Side - Appears second on mobile */}
          <div className="relative mt-2 md:mt-0">
            <AnimatedSection delay={300}>
              <div className="relative rounded-sm overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-darkbrown/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2668&auto=format&fit=crop" 
                  alt="Chef preparing food with care" 
                  className="w-full h-72 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Element - Hidden on mobile to save space */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-gray/30 z-0 hidden md:block"></div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;