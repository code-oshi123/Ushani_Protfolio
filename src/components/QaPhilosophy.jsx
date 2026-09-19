import React from 'react';
import { motion } from 'framer-motion';

export default function QaPhilosophy() {
  return (
    <section 
      id="philosophy" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Ambient Sparkles & Soft Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-12 left-10 text-themeAccent/20 text-3xl select-none"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-16 right-12 text-[#C4B2FF]/25 text-2xl select-none"
          animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-themeLavender/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* MAIN TWO-COLUMN CONTAINER */}
      <motion.div 
        className="bg-gradient-to-br from-[#FAF8FE] via-white to-[#F7F2FD] border border-[#ECE4FA] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden z-10"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Philosophy Heading & Large Refined Quote */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
                QA PHILOSOPHY ✦
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight leading-tight">
                Quality is more than finding bugs.
              </h2>
            </div>

            {/* Decorative Quote Block */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C4B2FF]/60 space-y-4">
              {/* Subtle Decorative Quotation Mark */}
              <span 
                className="absolute -top-7 -left-3 font-serif text-5xl sm:text-6xl text-[#8B5CF6]/15 select-none pointer-events-none" 
                aria-hidden="true"
              >
                “
              </span>

              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#3B1C54]/90 leading-relaxed font-normal">
                “I believe good QA is about looking beyond whether something works — it’s about understanding how it feels, noticing what others might miss, and helping create a better experience for the people who use it.”
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#8B6EED] font-medium tracking-wider uppercase">
                <span className="text-sm">✦</span>
                <span>Ushani Perera • Quality Assurance Mindset</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Notebook & Pen Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div 
              className="relative w-full max-w-[380px] group select-none"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Soft Ambient Shadow Underneath */}
              <div className="absolute -bottom-4 left-6 right-6 h-8 bg-[#3B1C54]/10 rounded-full blur-xl pointer-events-none" />

              {/* Notebook Object */}
              <div className="relative bg-[#FFFDF9] border border-[#EAE2F6] rounded-2xl shadow-[0_18px_45px_rgba(59,28,84,0.08)] overflow-hidden transition-all duration-300">
                
                {/* Notebook Top Edge / Ribbon Bookmark Accent */}
                <div className="absolute top-0 right-10 w-4 h-12 bg-gradient-to-b from-[#C4B2FF] to-[#A78BFA] shadow-xs rounded-b-sm z-20 flex items-end justify-center pb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                </div>

                {/* Notebook Spine Binding Line (Left edge highlight) */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-[#EDE4FA] to-transparent z-10 border-r border-[#E2D6F5]" />

                {/* Notebook Paper Content */}
                <div className="p-7 sm:p-9 pl-9 sm:pl-11 space-y-6 relative z-10 min-h-[290px] flex flex-col justify-between">
                  
                  {/* Notebook Header Mark */}
                  <div className="flex items-center justify-between border-b border-[#F0EAF9] pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#8B5CF6]">✦</span>
                      <span className="text-[10px] tracking-[0.25em] font-mono text-[#8B6EED]/80 uppercase">
                        JOURNAL ENTRY
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#3B1C54]/40">
                      p. 01
                    </span>
                  </div>

                  {/* Delicate Subtle Ruled Lines in Background */}
                  <div className="space-y-5 my-auto py-2">
                    {/* The Inscribed Words */}
                    <div className="space-y-0.5 text-left">
                      <p className="font-script text-3xl sm:text-4xl text-[#3B1C54] font-bold tracking-wide leading-tight">
                        I Write
                      </p>
                      <p className="font-script text-3xl sm:text-4xl text-[#5D3EA8] font-bold tracking-wide leading-tight pl-2">
                        My Own
                      </p>
                      <p className="font-script text-3xl sm:text-4xl text-[#8B5CF6] font-bold tracking-wide leading-tight pl-4">
                        Story.
                      </p>
                    </div>
                  </div>

                  {/* Notebook Bottom Subtle Signature */}
                  <div className="border-t border-[#F0EAF9] pt-3 flex items-center justify-between text-[10px] text-[#3B1C54]/50">
                    <span className="italic font-serif">Curiosity &amp; Quality</span>
                    <span className="font-script text-base text-[#8B5CF6]">ushani.</span>
                  </div>

                </div>
              </div>

              {/* Minimalist Editorial Pen (Resting Angled Beside the Notebook) */}
              <div 
                className="hidden sm:block absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 rotate-[16deg] z-30 pointer-events-none drop-shadow-md"
                aria-hidden="true"
              >
                <div className="flex flex-col items-center">
                  {/* Pen Clicker / Top */}
                  <div className="w-1.5 h-3 bg-gradient-to-b from-[#C4B2FF] to-[#8B5CF6] rounded-t-sm" />
                  {/* Pen Clip */}
                  <div className="w-2.5 h-1 bg-[#8B5CF6] rounded-xs" />
                  {/* Pen Barrel */}
                  <div className="w-2 h-36 bg-gradient-to-b from-[#FAF8FE] via-[#DDD3F5] to-[#C4B2FF] rounded-xs shadow-inner flex flex-col justify-between py-1">
                    <div className="w-full h-0.5 bg-[#8B5CF6]/30" />
                    <div className="w-full h-0.5 bg-[#8B5CF6]/30" />
                  </div>
                  {/* Pen Tip Grip */}
                  <div className="w-2 h-4 bg-[#5D3EA8] rounded-b-xs" />
                  {/* Pen Nib */}
                  <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[7px] border-t-[#3B1C54]" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* SECTION ENDING: Subtle Underneath Line */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#ECE4FA] text-center">
          <p className="text-xs sm:text-[13px] font-medium text-[#8B6EED] tracking-wide">
            Keep learning. Keep questioning. Keep improving. <span className="text-[#8B5CF6] font-bold">✦</span>
          </p>
        </div>

      </motion.div>
    </section>
  );
}
