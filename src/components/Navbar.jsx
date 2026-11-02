import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // Hire Me email
  const hireMeMailto =
    'mailto:progya.biswas@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Progya,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,';

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isOpen
          ? 'bg-blue-900 py-3 sm:py-4 shadow-xl'
          : isScrolled
          ? 'bg-black/80 backdrop-blur-md py-3 sm:py-4 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">

        {/* =========================
            LEFT SIDE - YOUR NAME
        ========================== */}
        <div className="flex items-center">
          <a
            href="#home"
            className="whitespace-nowrap text-xl sm:text-2xl font-black tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
          >
            Progya Paromita Biswas<span className="text-black">.</span>
          </a>
        </div>

        {/* =========================
            CENTER - DESKTOP MENU
        ========================== */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative font-medium text-white/90 transition-colors duration-300 hover:text-white"
            >
              {link}

              {/* Hover underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* =========================
            RIGHT SIDE - HIRE ME
        ========================== */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="rounded-full border border-white/50 bg-transparent px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            Hire Me
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE SLIDE-DOWN MENU
      ========================== */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-96 bg-blue-900 py-4 opacity-100 shadow-2xl'
            : 'max-h-0 bg-transparent opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/20 pb-2 text-lg font-bold text-white transition-colors hover:text-black"
            >
              {link}
            </a>
          ))}

          {/* Mobile Hire Me */}
          <div className="pb-2 pt-4">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="inline-block w-full rounded-full bg-white px-6 py-3 text-center font-black text-blue-500 shadow-lg transition-colors hover:bg-black hover:text-white"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;