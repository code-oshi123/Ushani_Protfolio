import React from 'react';
import { motion } from 'framer-motion';
import aboutIllustration from '../assets/about_desk_illustration.png';

export default function About() {
  const traits = [
    { name: "Problem Solver", icon: "🧠", hint: "Root cause analysis & debugging" },
    { name: "Detail Oriented", icon: "👁️", hint: "Catching pixel & edge discrepancies" },
    { name: "Quick Learner", icon: "⚡", hint: "Rapid adaptation to frameworks & tools" },
    { name: "Quality Focused", icon: "🎯", hint: "Dedicated to zero-defect standards" },
    { name: "Team Player", icon: "🤝", hint: "Agile & cross-functional collaboration" },
    { name: "Always Curious", icon: "🔍", hint: "Exploring deep system behaviors" }
  ];

  const [hoveredTrait, setHoveredTrait] = React.useState(null);

  return (
    <section 
      id="about" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Outer Rounded Container matching Mockup */}
      <motion.div 
        className="bg-[#FAF8FE] border border-[#ECE4FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Subtle Ambient Background Blob */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-themeLavender/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Text, Traits, CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[12px] tracking-[0.25em] font-semibold text-[#8B6EED] uppercase">
                ABOUT ME ✦
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3B1C54] font-medium leading-tight">
              A little about me <span className="text-[#8B5CF6]">✦</span>
            </h2>

            {/* Description */}
            <p className="text-[#2D2633]/80 text-[14px] sm:text-[15px] leading-relaxed">
              I'm a Computer Science undergraduate with a passion for building, testing and improving digital products. I love solving problems, exploring details and working with others to create meaningful solutions.
            </p>

            {/* 6 Trait Badges (2-column Grid) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              {traits.map((trait) => (
                <motion.div 
                  key={trait.name} 
                  onMouseEnter={() => setHoveredTrait(trait)}
                  onMouseLeave={() => setHoveredTrait(null)}
                  onClick={() => setHoveredTrait(hoveredTrait?.name === trait.name ? null : trait)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                    hoveredTrait?.name === trait.name
                      ? 'bg-white border-[#8B5CF6] shadow-sm scale-102 ring-1 ring-[#8B5CF6]/30'
                      : 'bg-white/80 border-[#ECE4FA] shadow-2xs hover:bg-white hover:border-[#8B5CF6]/45'
                  }`}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm select-none shrink-0">{trait.icon}</span>
                  <span className="text-xs font-semibold text-[#3B1C54] whitespace-nowrap">{trait.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Micro hint box */}
            <div className="h-6 flex items-center">
              {hoveredTrait ? (
                <motion.p 
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-medium text-[#8B6EED] flex items-center gap-1.5"
                >
                  <span>{hoveredTrait.icon}</span>
                  <span>{hoveredTrait.name}:</span>
                  <span className="text-[#2D2633]/80">{hoveredTrait.hint}</span>
                </motion.p>
              ) : (
                <p className="text-[11px] text-[#2D2633]/50 italic">
                  Hover or tap any strength to view QA focus
                </p>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <motion.a 
                href="#qa" 
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#5D3EA8] hover:bg-[#4C3090] text-white text-xs sm:text-[13px] font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-themeAccent"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>More About Me</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: 3D Desktop Scene Illustration with Gentle Floating */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-full max-w-[560px] rounded-3xl overflow-hidden shadow-sm border border-white/60 bg-white/40"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Floating Sparkle on top right */}
              <motion.div 
                className="absolute top-3 right-4 text-[#C4B2FF] text-xl select-none pointer-events-none z-10"
                animate={{ opacity: [0.3, 1, 0.3], rotate: [0, 90, 180] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.div>

              <img 
                src={aboutIllustration} 
                alt="About Ushani - Desk Flat-lay Workspace Scene" 
                className="w-full h-auto object-cover select-none"
              />
            </motion.div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
