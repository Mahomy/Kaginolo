import React, { FormEvent } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden scroll-mt-24">
       {/* Subtle decorative background */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-darkbrown/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <AnimatedSection>
            <h2 className="text-sm font-bold text-brand-gray tracking-widest uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Start Planning Your Event</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-brand-gray transition-colors rounded-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                   <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-brand-gray transition-colors rounded-sm"
                    placeholder="082 123 4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-brand-gray transition-colors rounded-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2">Event Type</label>
                <select 
                  id="type"
                  className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-brand-gray transition-colors rounded-sm"
                >
                  <option>Bereavement / Funeral</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-brand-gray transition-colors rounded-sm"
                  placeholder="Tell us about your event date, number of guests, and any specific requirements..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors rounded-sm"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Info Side with Image Background */}
          <AnimatedSection delay={200} className="flex flex-col justify-center h-full">
            <div className="relative overflow-hidden rounded-sm shadow-2xl h-full min-h-[500px]">
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2669&auto=format&fit=crop" 
                alt="Contact us background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-darkbrown/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full">
                <h4 className="text-2xl font-serif text-white mb-8 border-b border-white/20 pb-4">Contact Information</h4>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mr-4 mt-1 bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-300 uppercase tracking-wider mb-1">Email</span>
                      <a href="mailto:Luendabpoo@gmail.com" className="text-white text-lg font-medium hover:text-gray-200 transition-colors">Luendabpoo@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mr-4 mt-1 bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-300 uppercase tracking-wider mb-1">Phone</span>
                      <a href="tel:0614758676" className="text-white text-lg font-medium hover:text-gray-200 transition-colors">061 475 8676</a>
                      <span className="block text-sm text-gray-300 mt-1">Betty (Business Owner)</span>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mr-4 mt-1 bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-300 uppercase tracking-wider mb-1">Location</span>
                      <p className="text-white text-lg font-medium">7886 ext 3<br />Soshanguve</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;