import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ushani-perera-36a95433a/",
      label: "LinkedIn Profile",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/code-oshi123",
      label: "GitHub Repositories",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer 
      id="contact" 
      className="relative overflow-hidden bg-gradient-to-br from-[#27103C] via-[#3C1E5E] to-[#1B0A2B] text-white pt-14 sm:pt-16 pb-8 px-6 sm:px-10 md:px-14 shadow-2xl border-t border-[#8B5CF6]/20"
    >
      {/* Dreamy Stardust & Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-1/4 w-[450px] h-[450px] rounded-full bg-[#8B5CF6]/20 blur-[110px] animate-pulse-glow" style={{ animationDuration: '9s' }}></div>
        <div className="absolute -bottom-24 right-1/4 w-[450px] h-[450px] rounded-full bg-[#C4B5FD]/15 blur-[110px] animate-pulse-glow" style={{ animationDuration: '12s' }}></div>

        {/* Floating Twinkling Stars */}
        <motion.div 
          className="absolute top-10 left-[12%] text-[#DDD3F5] text-xl select-none"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8], rotate: [0, 90, 180] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-[15%] text-white text-2xl select-none"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-16 left-[20%] text-[#C4B2FF] text-lg select-none"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✧
        </motion.div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10 space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-semibold text-[#DDD3F5] uppercase tracking-widest">
          <span>GET IN TOUCH</span>
          <span className="text-[#C4B2FF]">✦</span>
        </motion.div>

        {/* Recruiter Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-medium leading-[1.25] max-w-2xl mx-auto"
        >
          Looking for someone curious, detail-oriented and quality-focused?
        </motion.h2>

        {/* Supporting text */}
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed"
        >
          Let's connect and talk about building reliable, user-friendly digital experiences.
        </motion.p>

        {/* 3 Prominent Recruiter Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-3 pt-2"
        >
          {/* Button 1: View My Projects */}
          <motion.a
            href="#work"
            className="relative overflow-hidden px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#9D74FF] hover:to-[#5B21B6] text-white text-xs sm:text-[13px] font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.65)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shimmer gradient sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 pointer-events-none" />
            <span>View My Projects</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.a>

          {/* Button 2: Instant 1-Click Download CV */}
          <motion.a
            href="/Ushani_Perera_CV.pdf"
            download="Ushani_Perera_CV.pdf"
            className="relative overflow-hidden px-6 sm:px-7 py-3 rounded-full bg-white/12 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white text-xs sm:text-[13px] font-semibold backdrop-blur-md shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            title="Download Official CV (PDF)"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 pointer-events-none" />
            <svg className="w-4 h-4 text-[#C4B2FF] group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            <span>Download CV</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>

          {/* Button 3: LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ushani-perera-36a95433a/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-3 rounded-full bg-white/12 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white text-xs sm:text-[13px] font-semibold backdrop-blur-md shadow-sm hover:shadow-[0_4px_20px_rgba(96,165,250,0.25)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 pointer-events-none" />
            <svg className="w-4 h-4 text-[#60A5FA]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </motion.a>
        </motion.div>

        {/* Social Icons Row (LinkedIn & GitHub only) */}
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-3 pt-2">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white/50 text-white/90 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label={social.label}
              whileHover={{ scale: 1.18, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Copyright & Signature */}
        <motion.div variants={itemVariants} className="pt-8 mt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/60">
          <p className="font-semibold tracking-wider flex items-center gap-1.5">
            Designed &amp; built by Ushani
            <span className="text-[#8B5CF6]">✦</span>
          </p>
          <p className="font-medium text-white/50">
            © {new Date().getFullYear()} Ushani Perera • All rights reserved
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
}
