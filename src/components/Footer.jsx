import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-[#EAE2FB] border-t border-themeLavender/25 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold tracking-wider text-themePlum/80 uppercase">
        <p className="flex items-center gap-1">
          Designed & built by Ushani
          <span className="text-themeAccent text-sm">✦</span>
        </p>
        <p className="text-themePlum/60 font-sans font-medium">
          © {new Date().getFullYear()} Ushani
        </p>
      </div>
    </footer>
  );
}
