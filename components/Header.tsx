import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center cursor-pointer"
        >
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1pojMDXKsbatCtGVZn5nQFWF_2iD1qtMUHGmfPoQ_cqM_MdpHYNQqJLU_ZeomidYGrgkr2uUR-cetkJd_xswzxV2XycI2Fe2fnrT1ztW7vLk9z2LC4wWAIf5WhJYPthI0EylsqE30Ye5QFpIJSuA1mCL_19WmS0tDhtUEVogl4oUTRKIg1aNeiuxDnM0/s200/Kaginolo%20logo.png" 
            alt="Kaginolo" 
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 border border-white text-white hover:bg-white hover:text-brand-black transition-colors duration-300 uppercase text-xs tracking-widest font-bold cursor-pointer"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif text-white hover:text-brand-gray transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-4 px-8 py-3 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;