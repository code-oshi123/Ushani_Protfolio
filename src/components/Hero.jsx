import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ShieldCheck, Code2, Zap, Play, Check } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('test');

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
      className="relative min-h-screen pt-24 pb-10 sm:pt-28 sm:pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F6F0FE] via-[#FAF7FF] to-[#FCFAFE] dark:from-[#100B18] dark:via-[#17111F] dark:to-[#100B18]"
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
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-[#8B6EED] dark:text-[#C4B5FD] uppercase inline-flex items-center gap-1.5">
              <span>HELLO, I'M USHANI</span>
              <motion.span 
                animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.3, 1] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-[#8B5CF6] dark:text-[#A78BFA]"
              >
                ✦
              </motion.span>
            </span>
          </motion.div>

          {/* Headline with custom script accent & purple underline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#2D1B4E] dark:text-[#F5EFFB] leading-[1.15] tracking-tight font-medium relative z-10"
          >
            I build, test & <br />
            <span className="font-serif italic font-normal text-[#8B5CF6] dark:text-[#C4B5FD] mr-2">improve</span>
            digital <br />
            <span className="relative inline-block">
              experiences.
              {/* Purple brush underline */}
              <svg className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 text-[#A78BFA]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M3 6.5C45 2.5 130 2.5 195 5.5C160 7.5 90 8.5 25 9.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[#8B5CF6] dark:text-[#A78BFA] text-2xl sm:text-3xl ml-2 inline-block animate-pulse">✦</span>
          </motion.h1>

          {/* Role subtitle */}
          <motion.div variants={itemVariants} className="relative z-10">
            <p className="text-xs sm:text-[13.5px] font-semibold tracking-wider text-themePlum/85 dark:text-[#F5EFFB]/90 uppercase flex items-center flex-wrap gap-1.5">
              <span>Computer Science Undergraduate</span>
              <span className="text-[#8B5CF6] dark:text-[#A78BFA]">•</span>
              <span>QA Engineer</span>
              <span className="text-[#8B5CF6] dark:text-[#A78BFA]">•</span>
              <span>Developer</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[14px] sm:text-[15.5px] text-themeCharcoal/80 dark:text-[#C5B9D3] leading-relaxed max-w-lg relative z-10"
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

          {/* 4-Pill Feature Bar (Build, Test, Solve, Improve) */}
          <motion.div 
            variants={itemVariants}
            className="pt-2 relative z-10"
          >
            <div className="bg-white/80 dark:bg-[#1D1629] backdrop-blur-md border border-themeLavender/35 dark:border-[#2D2140] rounded-2xl p-3 sm:p-3.5 shadow-sm max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2">
              {/* 1. Build */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] dark:hover:bg-[#261D35] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] dark:bg-[#261D35] text-[#5D3EA8] dark:text-[#C4B5FD] flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-2xs group-hover:bg-[#5D3EA8] group-hover:text-white dark:group-hover:bg-[#8B5CF6] transition-colors">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum dark:text-[#F5EFFB]">Build</div>
                  <div className="text-[10px] text-themeCharcoal/65 dark:text-[#C5B9D3] leading-tight">with purpose</div>
                </div>
              </motion.div>

              {/* 2. Test */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] dark:hover:bg-[#261D35] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] dark:bg-[#261D35] text-[#5D3EA8] dark:text-[#C4B5FD] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:scale-115 transition-transform">
                  🔍
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum dark:text-[#F5EFFB]">Test</div>
                  <div className="text-[10px] text-themeCharcoal/65 dark:text-[#C5B9D3] leading-tight">with curiosity</div>
                </div>
              </motion.div>

              {/* 3. Solve */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] dark:hover:bg-[#261D35] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] dark:bg-[#261D35] text-[#5D3EA8] dark:text-[#C4B5FD] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:scale-115 transition-transform">
                  💡
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum dark:text-[#F5EFFB]">Solve</div>
                  <div className="text-[10px] text-themeCharcoal/65 dark:text-[#C5B9D3] leading-tight">with logic</div>
                </div>
              </motion.div>

              {/* 4. Improve */}
              <motion.div 
                className="flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-2.5 sm:gap-1 p-1 rounded-xl hover:bg-[#F3EEFE] dark:hover:bg-[#261D35] transition-colors cursor-default group"
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EAE2FD] dark:bg-[#261D35] text-[#5D3EA8] dark:text-[#C4B5FD] flex items-center justify-center text-xs shrink-0 shadow-2xs group-hover:rotate-45 transition-transform">
                  ✦
                </div>
                <div>
                  <div className="text-xs font-bold text-themePlum dark:text-[#F5EFFB]">Improve</div>
                  <div className="text-[10px] text-themeCharcoal/65 dark:text-[#C5B9D3] leading-tight">with care</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Interactive QA Engineering Terminal & Live Quality Dashboard */}
        <motion.div 
          className="lg:col-span-6 flex justify-center lg:justify-end items-center relative w-full pt-4 lg:pt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[520px]">
            {/* Ambient Nebula Glow Behind Tech Console */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[44px] bg-gradient-to-br from-[#8B5CF6]/25 via-[#C4B5FD]/15 to-[#DDD3F5]/10 dark:from-[#8B5CF6]/20 dark:via-[#A78BFA]/10 dark:to-transparent blur-3xl pointer-events-none" />

            {/* Sparkles around Console */}
            <motion.div 
              className="absolute -top-6 -left-4 text-themeAccent dark:text-[#A78BFA] text-2xl select-none pointer-events-none z-30"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [0.85, 1.25, 0.85] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 right-8 text-[#C4B2FF] dark:text-[#C4B5FD] text-xl select-none pointer-events-none z-30"
              animate={{ y: [0, -8, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✧
            </motion.div>

            {/* SATELLITE BADGE 1: Top Right - Quality Gate Passed */}
            <motion.div 
              className="absolute -top-5 sm:-top-6 -right-2 sm:-right-4 z-30 bg-white/95 dark:bg-[#1D1629]/95 backdrop-blur-xl border border-[#EDE4FA] dark:border-[#34244D] shadow-[0_12px_28px_rgba(139,92,246,0.18)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.6)] rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 select-none"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#059669]/50 flex items-center justify-center text-[#059669] dark:text-[#34D399] shrink-0">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-[#8B5CF6] dark:text-[#A78BFA]">
                    QUALITY GATE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#2D1B4E] dark:text-[#F5EFFB]">
                  99.4% Test Coverage
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-[#2D2633]/65 dark:text-[#C5B9D3]">
                  0 Critical Regressions
                </div>
              </div>
            </motion.div>

            {/* MAIN TECH WINDOW: Interactive IDE & Test Execution Runner */}
            <motion.div 
              className="relative rounded-3xl bg-white/90 dark:bg-[#160F23]/95 backdrop-blur-xl border border-[#DDD3F5] dark:border-[#2D2140] shadow-[0_22px_50px_rgba(59,28,84,0.12)] dark:shadow-[0_22px_50px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 z-10"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              {/* Window Header / Window Controls & Tabs */}
              <div className="bg-[#FAF8FE] dark:bg-[#1D1629] border-b border-[#ECE4FA] dark:border-[#2D2140] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
                {/* Window Traffic Light Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]/85 border border-[#E0443E]/30" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]/85 border border-[#DEA123]/30" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]/85 border border-[#1AAB29]/30" />
                </div>

                {/* Interactive File Tabs */}
                <div className="flex items-center gap-1 bg-white/70 dark:bg-[#140D1E]/70 p-1 rounded-xl border border-[#EDE4FA] dark:border-[#2D2140]">
                  <button
                    onClick={() => setActiveTab('test')}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer ${
                      activeTab === 'test'
                        ? 'bg-[#8B5CF6] text-white shadow-xs font-semibold'
                        : 'text-[#2D2633]/70 dark:text-[#C5B9D3] hover:text-[#5D3EA8] dark:hover:text-[#F5EFFB]'
                    }`}
                  >
                    <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>quality-spec.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer ${
                      activeTab === 'api'
                        ? 'bg-[#8B5CF6] text-white shadow-xs font-semibold'
                        : 'text-[#2D2633]/70 dark:text-[#C5B9D3] hover:text-[#5D3EA8] dark:hover:text-[#F5EFFB]'
                    }`}
                  >
                    <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>api-contract.json</span>
                  </button>
                </div>

                {/* Right Status Badge */}
                <div className="hidden sm:flex items-center gap-1 text-[10.5px] font-mono text-[#059669] dark:text-[#34D399] bg-[#ECFDF5] dark:bg-[#064E3B]/30 px-2 py-0.5 rounded-full border border-[#A7F3D0] dark:border-[#059669]/40 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>PASSING</span>
                </div>
              </div>

              {/* Window Code Editor Body */}
              <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-[12px] leading-relaxed bg-[#FAF9FF]/60 dark:bg-[#130C1E]/60 overflow-x-auto">
                {activeTab === 'test' ? (
                  <div className="space-y-1 text-[#3B1C54] dark:text-[#F5EFFB] min-w-[280px]">
                    <div className="text-[#8B6EED] dark:text-[#C4B5FD] text-[10.5px] pb-1 select-none flex items-center gap-1.5">
                      <span>// ✦ Automated End-to-End QA Suite</span>
                      <span className="text-[#10B981]">● Live</span>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">01</span>
                      <p>
                        <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-bold">describe</span>
                        (<span className="text-[#059669] dark:text-[#34D399]">'User Experience &amp; Performance'</span>, () =&gt; &#123;
                      </p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">02</span>
                      <p className="pl-3 sm:pl-4">
                        <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-bold">test</span>
                        (<span className="text-[#059669] dark:text-[#34D399]">'verify zero critical defects'</span>, <span className="text-[#D97706] dark:text-[#FBBF24]">async</span> () =&gt; &#123;
                      </p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">03</span>
                      <p className="pl-6 sm:pl-8">
                        <span className="text-[#D97706] dark:text-[#FBBF24]">const</span> build = <span className="text-[#D97706] dark:text-[#FBBF24]">await</span> runValidation(&#123; env: <span className="text-[#059669] dark:text-[#34D399]">'prod'</span> &#125;);
                      </p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">04</span>
                      <p className="pl-6 sm:pl-8">
                        <span className="text-[#8B5CF6] dark:text-[#A78BFA]">expect</span>(build.criticalDefects).<span className="text-[#2563EB] dark:text-[#60A5FA]">toBe</span>(<span className="text-[#D97706] dark:text-[#FBBF24]">0</span>);
                      </p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">05</span>
                      <p className="pl-6 sm:pl-8">
                        <span className="text-[#8B5CF6] dark:text-[#A78BFA]">expect</span>(build.uiReliability).<span className="text-[#2563EB] dark:text-[#60A5FA]">toBeGreaterThanOrEqual</span>(<span className="text-[#D97706] dark:text-[#FBBF24]">99.8</span>);
                      </p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">06</span>
                      <p className="pl-3 sm:pl-4">&#125;);</p>
                    </div>

                    <div className="flex">
                      <span className="w-5 sm:w-6 text-[#9CA3AF] dark:text-[#6B5B82] select-none text-right pr-2.5 text-[10.5px]">07</span>
                      <p>&#125;);</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-[#3B1C54] dark:text-[#F5EFFB] min-w-[280px]">
                    <div className="text-[#8B6EED] dark:text-[#C4B5FD] text-[10.5px] pb-1 select-none flex items-center gap-1.5">
                      <span>// ✦ REST API Contract &amp; Schema Validation</span>
                      <span className="text-[#10B981]">● 200 OK</span>
                    </div>
                    <div className="text-[#6B7280] dark:text-[#A78BFA]">&#123;</div>
                    <div className="pl-3 sm:pl-4">
                      <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">"service"</span>: <span className="text-[#059669] dark:text-[#34D399]">"quality-core-api"</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">"status"</span>: <span className="text-[#D97706] dark:text-[#FBBF24]">200</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">"responseTime"</span>: <span className="text-[#059669] dark:text-[#34D399]">"18ms"</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">"automatedTestsPassed"</span>: <span className="text-[#D97706] dark:text-[#FBBF24]">32</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">"readyToDeploy"</span>: <span className="text-[#2563EB] dark:text-[#60A5FA]">true</span>
                    </div>
                    <div className="text-[#6B7280] dark:text-[#A78BFA]">&#125;</div>
                  </div>
                )}
              </div>

              {/* Inset Test Execution Runner Box */}
              <div className="p-3 sm:p-4 bg-white/95 dark:bg-[#1D1629] border-t border-[#ECE4FA] dark:border-[#2D2140] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#059669]/50 text-[10px] font-mono font-bold text-[#059669] dark:text-[#34D399]">
                      <Check className="w-3 h-3 stroke-[3]" />
                      PASS
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-mono font-medium text-[#2D2633]/80 dark:text-[#C5B9D3]">
                      tests/e2e-quality.spec.ts
                    </span>
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-mono text-[#8B6EED] dark:text-[#A78BFA] font-semibold">
                    142ms
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-1.5 w-full bg-[#EAE2FD] dark:bg-[#261D35] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#10B981] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>

                {/* Summary Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-[10.5px] sm:text-[11px] font-mono text-[#2D2633]/70 dark:text-[#C5B9D3]">
                  <span><strong className="text-[#059669] dark:text-[#34D399]">✓ 32 passed</strong> (100%)</span>
                  <span>Duration: <strong className="text-[#8B5CF6] dark:text-[#A78BFA]">1.18s</strong></span>
                  <span className="text-[#059669] dark:text-[#34D399] font-semibold">Ready to Ship 🚀</span>
                </div>
              </div>

              {/* Bottom Tech Pills Row Inside Console */}
              <div className="px-3.5 sm:px-4 py-2 bg-[#FAF8FE] dark:bg-[#160E22] border-t border-[#ECE4FA] dark:border-[#2D2140] flex items-center justify-between overflow-x-auto gap-2">
                <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#8B6EED] dark:text-[#C4B5FD] font-semibold shrink-0">
                  TOOLCHAIN:
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[10.5px] font-medium shrink-0">
                  <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#3D2C54] text-[#3B1C54] dark:text-[#F5EFFB] flex items-center gap-1 shadow-2xs">
                    <span className="text-[#8B5CF6]">⚡</span> Playwright
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#3D2C54] text-[#3B1C54] dark:text-[#F5EFFB] flex items-center gap-1 shadow-2xs">
                    <span className="text-[#8B5CF6]">📬</span> Postman
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#3D2C54] text-[#3B1C54] dark:text-[#F5EFFB] flex items-center gap-1 shadow-2xs">
                    <span className="text-[#8B5CF6]">🧪</span> Selenium
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#3D2C54] text-[#3B1C54] dark:text-[#F5EFFB] flex items-center gap-1 shadow-2xs">
                    <span className="text-[#8B5CF6]">⚛</span> React
                  </span>
                </div>
              </div>
            </motion.div>

            {/* SATELLITE BADGE 2: Bottom Left - API & Response Latency */}
            <motion.div 
              className="absolute -bottom-5 sm:-bottom-6 -left-2 sm:-left-4 z-30 bg-white/95 dark:bg-[#1D1629]/95 backdrop-blur-xl border border-[#EDE4FA] dark:border-[#34244D] shadow-[0_12px_28px_rgba(139,92,246,0.18)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.6)] rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 select-none"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-[#F5EFFE] dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#3D2C54] flex items-center justify-center text-[#8B5CF6] dark:text-[#A78BFA] shrink-0">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 fill-current text-[#8B5CF6] dark:text-[#A78BFA]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-[#8B5CF6] dark:text-[#A78BFA]">
                    REST API HEALTH
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#2D1B4E] dark:text-[#F5EFFB]">
                  200 OK • 18ms Latency
                </div>
                <div className="text-[9.5px] sm:text-[10px] text-[#2D2633]/65 dark:text-[#C5B9D3]">
                  Automated Schema Verified
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>

      {/* Smooth bottom wave divider transitioning to About Section */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-20">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0,32 C360,64 720,8 1080,48 C1260,60 1380,30 1440,40 L1440,64 L0,64 Z" className="fill-[#FCFAFE] dark:fill-[#100B18] transition-colors duration-300" />
        </svg>
      </div>
      
    </section>
  );
}
