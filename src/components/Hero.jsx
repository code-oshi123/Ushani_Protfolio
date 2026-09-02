import React from 'react';
import { motion } from 'framer-motion';
import heroScene from '../assets/hero_scene_blended.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Geometric floating particles behind name & headline
  const particles = [
    { x: -20, y: -10, size: "w-3 h-3", color: "bg-[#8B5CF6]/30", delay: 0, duration: 4 },
    { x: 180, y: -25, size: "w-4 h-4", color: "bg-[#C4B5FD]/40", delay: 0.8, duration: 5 },
    { x: 90, y: 40, size: "w-2.5 h-2.5", color: "bg-[#A78BFA]/35", delay: 1.4, duration: 4.5 },
    { x: 260, y: 15, size: "w-3 h-3", color: "bg-[#8B5CF6]/25", delay: 0.5, duration: 6 },
    { x: 40, y: -45, size: "w-2 h-2", color: "bg-[#C4B5FD]/50", delay: 1.8, duration: 3.8 },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-10 sm:pt-28 sm:pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F6F0FE] via-[#FAF7FF] to-[#FCFAFE]"
    >
      {/* Background Ambient Ornaments & Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Gradients */}
        <div className="absolute top-1/12 left-1/10 w-96 h-96 rounded-full bg-themeLavender/25 blur-3xl animate-pulse-glow" style={{ animationDuration: '9s' }}></div>
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-[#E8DDFD]/35 blur-3xl animate-pulse-glow" style={{ animationDuration: '14s' }}></div>
        
        {/* Scattered 4-point Sparkles */}
        <div className="absolute top-[18%] left-[22%] text-themeAccent/35 text-2xl animate-sparkle-slow animate-spin-slow">✦</div>
        <div className="absolute top-[32%] right-[42%] text-themeAccent/25 text-lg animate-sparkle-fast" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute top-[52%] left-[45%] text-[#D5C6FF]/60 text-base animate-float-fast">✦</div>
        <div className="absolute top-[15%] right-[10%] text-[#D5C6FF]/55 text-2xl animate-float-slow animate-spin-slow" style={{ animationDelay: '2s' }}>✦</div>
        <div className="absolute bottom-[28%] left-[8%] text-themeLavender/40 text-xl animate-float-medium">✧</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
        
        {/* Left Column: Heading, Bio, Buttons, Feature Bar */}
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Geometric Floating Particle Aura behind Name */}
          <div className="absolute top-0 left-0 w-full h-48 pointer-events-none z-0 overflow-visible">
            {particles.map((p, idx) => (
              <motion.div
                key={idx}
                className={`absolute rounded-full ${p.size} ${p.color} blur-[0.5px]`}
                style={{ left: `${p.x}px`, top: `${p.y}px` }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center relative z-10">
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-[#8B6EED] uppercase inline-flex items-center gap-1.5">
              <span>HELLO, I'M USHANI</span>
              <motion.span 
                animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.3, 1] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-[#8B5CF6]"
              >
                ✦
              </motion.span>
            </span>
          </motion.div>

          {/* Headline with custom script accent & purple underline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#2D1B4E] leading-[1.15] tracking-tight font-medium relative z-10"
          >
            I build, test & <br />
            <span className="font-serif italic font-normal text-[#8B5CF6] mr-2">improve</span>
            digital <br />
            <span className="relative inline-block">
              experiences.
              {/* Purple brush underline */}
              <svg className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 text-[#A78BFA]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M3 6.5C45 2.5 130 2.5 195 5.5C160 7.5 90 8.5 25 9.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[#8B5CF6] text-2xl sm:text-3xl ml-2 inline-block animate-pulse">✦</span>
          </motion.h1>

          {/* Role subtitle */}
          <motion.div variants={itemVariants} className="relative z-10">
            <p className="text-xs sm:text-[13.5px] font-semibold tracking-wider text-themePlum/85 uppercase flex items-center flex-wrap gap-1.5">
              <span>Computer Science Undergraduate</span>
              <span className="text-[#8B5CF6]">•</span>
              <span>QA Engineer</span>
              <span className="text-[#8B5CF6]">•</span>
              <span>Developer</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[14px] sm:text-[15.5px] text-themeCharcoal/80 leading-relaxed max-w-lg relative z-10"
          >
            I enjoy turning ideas into reliable digital experiences — from building applications to exploring them through a quality-focused mindset.
          </motion.p>

          {/* Action CTAs: View My Work & Explore Me */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1 relative z-10">
            <motion.a 
              href="#work" 
              className="relative overflow-hidden px-6 sm:px-7 py-3 rounded-full bg-[#5D3EA8] hover:bg-[#4D3090] text-white text-[14px] font-semibold shadow-[0_4px_14px_rgba(93,62,168,0.3)] hover:shadow-[0_8px_25px_rgba(93,62,168,0.5)] transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />
              <span>View My Work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
            
            <motion.a 
              href="#about" 
              className="relative overflow-hidden px-6 py-3 rounded-full bg-[#FAF8FE] border border-[#DDD3F5] text-[#5D3EA8] hover:border-[#8B5CF6] hover:bg-white text-[14px] font-semibold shadow-2xs hover:shadow-[0_4px_15px_rgba(139,92,246,0.2)] transition-all duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Me</span>
              <span className="text-[#8B5CF6] text-xs group-hover:rotate-45 transition-transform">✦</span>
            </motion.a>
          </motion.div>

          {/* 4-Pill Feature Bar (Matching Mockup 1) */}
          <motion.div 
            variants={itemVariants}
            className="pt-2 relative z-10"
          >
            <div className="bg-white/75 backdrop-blur-md border border-themeLavender/35 rounded-2xl p-3 sm:p-3.5 shadow-sm max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2">
              {/* 1. Build */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] text-[#5D3EA8] flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-2xs group-hover:bg-[#5D3EA8] group-hover:text-white transition-colors">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum">Build</div>
                  <div className="text-[10px] text-themeCharcoal/65 leading-tight">with purpose</div>
                </div>
              </motion.div>

              {/* 2. Test */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] text-[#5D3EA8] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:scale-115 transition-transform">
                  🔍
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum">Test</div>
                  <div className="text-[10px] text-themeCharcoal/65 leading-tight">with curiosity</div>
                </div>
              </motion.div>

              {/* 3. Solve */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] text-[#5D3EA8] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:scale-115 transition-transform">
                  💡
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum">Solve</div>
                  <div className="text-[10px] text-themeCharcoal/65 leading-tight">with logic</div>
                </div>
              </motion.div>

              {/* 4. Improve */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] text-[#5D3EA8] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:rotate-45 transition-transform">
                  ✦
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum">Improve</div>
                  <div className="text-[10px] text-themeCharcoal/65 leading-tight">with care</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Complete Seated Ushani Desk Scene (Matching Mockup 1) */}
        <motion.div 
          className="lg:col-span-6 flex justify-center lg:justify-end items-end relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-full max-w-[560px] flex items-end justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Floating Sparkle Above Desk */}
            <motion.div 
              className="absolute -top-3 left-[15%] text-themeAccent text-2xl select-none pointer-events-none"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.div>

            {/* Floating Star Right */}
            <motion.div 
              className="absolute top-1/3 -right-2 text-[#C4B2FF] text-xl select-none pointer-events-none"
              animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✧
            </motion.div>

            <img 
              src={heroScene} 
              alt="Ushani QA Engineer & Developer Workspace" 
              className="w-full h-auto object-contain select-none drop-shadow-md"
            />
          </motion.div>
        </motion.div>
        
      </div>

      {/* Smooth bottom wave divider transitioning to About Section */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-20">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0,32 C360,64 720,8 1080,48 C1260,60 1380,30 1440,40 L1440,64 L0,64 Z" fill="#FCFAFE" />
        </svg>
      </div>
      
    </section>
  );
}
