import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'QA', href: '#qa' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-themeBg/75 backdrop-blur-md border-b border-themeLavender/20 shadow-sm' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-script text-3xl sm:text-4xl font-bold text-themePlum tracking-normal group transition duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent rounded-md"
        >
          Ushani.
          <span className="text-themeAccent text-xl group-hover:scale-125 group-hover:rotate-12 inline-block transition-transform duration-300">✦</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isHome = link.name === 'Home';
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`relative text-[14px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent rounded-sm px-1 py-1 group ${
                      isHome ? 'font-semibold text-themePlum' : 'font-medium text-themeCharcoal/80 hover:text-themePlum'
                    }`}
                  >
                    {link.name}
                    {isHome ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B5CF6] rounded-full"></span>
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6]/70 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a 
            href="https://www.linkedin.com/in/ushani-perera-36a95433a/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold bg-white/85 hover:bg-white text-themePlum hover:text-themeAccent border border-themeLavender/60 hover:border-themeAccent shadow-xs hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-105 active:scale-98 px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent"
          >
            <span className="text-themeAccent text-xs animate-pulse">✦</span>
            <span>Let's Connect</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-themePlum hover:bg-themeLavender/20 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-[73px] bg-themeBg/95 backdrop-blur-lg border-b border-themeLavender/20 transition-all duration-500 overflow-hidden md:hidden ${
        isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
      }`}>
        <ul className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-medium text-themeCharcoal hover:text-themePlum hover:bg-themeLavender/10 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="w-full text-center mt-2">
            <a 
              href="https://www.linkedin.com/in/ushani-perera-36a95433a/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full max-w-xs py-3 px-6 text-base font-semibold bg-gradient-to-r from-themeAccent to-[#5D3EA8] text-white hover:from-[#9D76FA] hover:to-[#4C3090] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_22px_rgba(139,92,246,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent"
            >
              Let's Connect ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
