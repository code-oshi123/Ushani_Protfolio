import React from 'react';
import { motion } from 'framer-motion';
import notebookPhoto from '../assets/qa_philosophy_notebook.jpg';

export default function QaPhilosophy() {
  return (
    <section 
      id="philosophy" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Ambient Sparkles & Soft Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-12 left-10 text-themeAccent/20 dark:text-[#A78BFA]/25 text-3xl select-none"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-16 right-12 text-[#C4B2FF]/25 dark:text-[#C4B5FD]/20 text-2xl select-none"
          animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-themeLavender/10 dark:bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* MAIN TWO-COLUMN CONTAINER (Matching Screenshot 1) */}
      <motion.div 
        className="bg-[#FAF8FE] dark:bg-[#1D1629] border border-[#ECE4FA] dark:border-[#2D2140] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden z-10 transition-colors duration-300"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Philosophy Heading & Large Refined Quote */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-[12px] sm:text-[13px] tracking-[0.28em] font-semibold text-[#8B6EED] dark:text-[#C4B5FD] uppercase block">
                QA PHILOSOPHY ✦
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] dark:text-[#F5EFFB] font-medium tracking-tight leading-tight">
                Quality is more than finding bugs.
              </h2>
            </div>

            {/* Decorative Quote Block */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C4B2FF]/60 dark:border-[#A78BFA]/40 space-y-4">
              {/* Subtle Decorative Quotation Mark */}
              <span 
                className="absolute -top-7 -left-3 font-serif text-5xl sm:text-6xl text-[#8B5CF6]/20 dark:text-[#C4B5FD]/25 select-none pointer-events-none" 
                aria-hidden="true"
              >
                “
              </span>

              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#3B1C54]/90 dark:text-[#C5B9D3] leading-relaxed font-normal">
                “I believe good QA is about looking beyond whether something works — it’s about understanding how it feels, noticing what others might miss, and helping create a better experience for the people who use it.”
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#8B6EED] dark:text-[#C4B5FD] font-semibold tracking-wider uppercase">
                <span className="text-sm">✦</span>
                <span>Ushani Perera • Quality Assurance Mindset</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Real High-Resolution Notebook Photo (Screenshot 2) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div 
              className="relative w-full max-w-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(59,28,84,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-[#ECE4FA] dark:border-[#2D2140] group select-none"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img 
                src={notebookPhoto} 
                alt="QA Philosophy Journal - I Write My Own Story" 
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-103" 
              />
            </motion.div>
          </div>

        </div>

        {/* SECTION ENDING: Subtle Underneath Line */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#ECE4FA] dark:border-[#2D2140] text-center">
          <p className="text-xs sm:text-[13px] font-medium text-[#8B6EED] dark:text-[#C4B5FD] tracking-wide">
            Keep learning. Keep questioning. Keep improving. <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-bold">✦</span>
          </p>
        </div>

      </motion.div>
    </section>
  );
}
