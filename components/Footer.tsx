import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1pojMDXKsbatCtGVZn5nQFWF_2iD1qtMUHGmfPoQ_cqM_MdpHYNQqJLU_ZeomidYGrgkr2uUR-cetkJd_xswzxV2XycI2Fe2fnrT1ztW7vLk9z2LC4wWAIf5WhJYPthI0EylsqE30Ye5QFpIJSuA1mCL_19WmS0tDhtUEVogl4oUTRKIg1aNeiuxDnM0/s200/Kaginolo%20logo.png" 
              alt="Kaginolo Logo" 
              className="h-12 w-auto mb-4 mx-auto md:mx-0 opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Professional catering services dedicated to supporting you during life's most meaningful moments.
            </p>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-white transition-colors">About</a>
            <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2025 Kaginolo. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;