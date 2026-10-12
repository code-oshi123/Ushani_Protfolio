import React from 'react';
import { motion } from 'framer-motion';

export default function Articles() {
  const articles = [
    {
      id: "01",
      title: "A Beginner's Guide to QA — Part 1: Before You Start Testing",
      description: "An introductory guide to the things to understand before starting software testing.",
      url: "https://medium.com/@ushaniprarthana593/a-beginners-guide-to-qa-part-1-before-you-start-testing-ba3ee0443931?sharedUserId=ushaniprarthana593",
      tag: "QA Fundamentals",
      series: "Foundations • Part 1",
      readTime: "4 min read",
      illustration: "qa-blueprint"
    },
    {
      id: "02",
      title: "My QA Journey So Far: From a Beginner to a QA Intern",
      description: "A personal reflection on learning quality assurance and taking the first steps into the industry.",
      url: "https://medium.com/@ushaniprarthana593/my-qa-journey-so-far-from-a-beginner-to-a-qa-intern-224eb838cfc6",
      tag: "Career & Growth",
      series: "Reflection • QA Intern",
      readTime: "5 min read",
      illustration: "journey-milestone"
    }
  ];

  return (
    <section 
      id="articles" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
      aria-label="My Articles on Medium"
    >
      {/* Ambient Sparkles & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-10 left-8 text-themeAccent/20 dark:text-[#A78BFA]/20 text-3xl select-none"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-12 right-10 text-[#C4B2FF]/25 dark:text-[#C4B5FD]/20 text-2xl select-none"
          animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          ✧
        </motion.div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-themeLavender/10 dark:bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 space-y-12 sm:space-y-14">
        {/* SECTION INTRODUCTION */}
        <motion.div 
          className="text-center space-y-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[12px] sm:text-[13px] tracking-[0.28em] font-semibold text-[#8B6EED] dark:text-[#C4B5FD] uppercase block">
            THOUGHTS, LESSONS &amp; QA ✦
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] dark:text-[#F5EFFB] font-medium tracking-tight leading-tight">
            Words from My QA Journey <span className="text-[#8B5CF6] dark:text-[#A78BFA]">✦</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2633]/70 dark:text-[#C5B9D3] max-w-lg mx-auto leading-relaxed">
            Sharing what I learn, one article at a time — from my first steps in quality assurance to lessons from real-world experience.
          </p>
        </motion.div>

        {/* TWO EDITORIAL ARTICLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 max-w-5xl mx-auto">
          {articles.map((article, idx) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF8FE] dark:bg-[#1D1629] border border-[#ECE4FA] dark:border-[#2D2140] hover:border-[#8B5CF6]/50 dark:hover:border-[#A78BFA]/50 rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-[0_16px_36px_rgba(139,92,246,0.14)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* EDITORIAL COVER GRAPHIC */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-br from-[#EDE4FB] via-[#F4EDFE] to-[#E8DCFC] dark:from-[#231538] dark:via-[#190D28] dark:to-[#12071F] p-6 flex flex-col justify-between overflow-hidden border-b border-[#ECE4FA] dark:border-[#2D2140]">
                {/* Background Pattern Grid & Ambient Radial Glow */}
                <div className="absolute inset-0 opacity-20 dark:opacity-25 pointer-events-none bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#8B5CF6]/15 dark:bg-[#A78BFA]/10 blur-2xl pointer-events-none" />
                <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full bg-[#C4B5FD]/20 dark:bg-[#7C3AED]/15 blur-2xl pointer-events-none" />

                {/* Top Badges Row */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Medium Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-[#261D35]/80 backdrop-blur-md border border-[#DDD3F5] dark:border-[#3D2C54] text-[11px] font-semibold text-[#3B1C54] dark:text-[#F5EFFB] shadow-2xs">
                    <svg className="w-3.5 h-3.5 fill-current text-[#12100E] dark:text-white" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Medium Article
                  </span>

                  {/* Category Tag */}
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B5FD] bg-[#8B5CF6]/10 dark:bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#8B5CF6]/20 dark:border-[#A78BFA]/20">
                    {article.tag}
                  </span>
                </div>

                {/* Center Themed Illustration / Composition */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  {article.illustration === 'qa-blueprint' ? (
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-[#1D1629]/70 backdrop-blur-md border border-white/60 dark:border-[#3D2C54] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white shadow-2xs">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#8B5CF6] dark:text-[#A78BFA] uppercase block">
                          QA FOUNDATIONS ✦
                        </span>
                        <span className="text-xs font-serif font-bold text-[#3B1C54] dark:text-[#F5EFFB]">
                          Test Strategy &amp; Mindset
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-[#1D1629]/70 backdrop-blur-md border border-white/60 dark:border-[#3D2C54] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center text-white shadow-2xs">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#8B5CF6] dark:text-[#A78BFA] uppercase block">
                          CAREER PATH ✦
                        </span>
                        <span className="text-xs font-serif font-bold text-[#3B1C54] dark:text-[#F5EFFB]">
                          Student to QA Intern
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Series Marker */}
                <div className="relative z-10 flex justify-between items-center text-[11px] text-[#5D3EA8] dark:text-[#C4B5FD] font-mono">
                  <span>{article.series}</span>
                  <span className="font-sans font-medium">{article.readTime}</span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-[#8B6EED] dark:text-[#C4B5FD] font-semibold tracking-wide">
                    <span>Published on Medium</span>
                    <span>•</span>
                    <span>By Ushani Perera</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B1C54] dark:text-[#F5EFFB] group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors duration-200 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#2D2633]/75 dark:text-[#C5B9D3] leading-relaxed">
                    {article.description}
                  </p>
                </div>

                {/* CARD FOOTER CTA */}
                <div className="pt-4 border-t border-[#ECE4FA] dark:border-[#2D2140] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8B5CF6] dark:text-[#A78BFA] group-hover:text-[#6D28D9] dark:group-hover:text-white flex items-center gap-1.5 transition-colors">
                    Read on Medium
                    <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>

                  <span className="text-[11px] text-[#8B6EED]/70 dark:text-[#A78BFA]/70 font-mono">
                    Article #{article.id}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* SECTION BOTTOM LINK: EXPLORE MORE ON MEDIUM */}
        <motion.div 
          className="text-center pt-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://medium.com/@ushaniprarthana593"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-white dark:bg-[#1D1629] hover:bg-[#F5EFFE] dark:hover:bg-[#261D35] border border-[#DDD3F5] dark:border-[#2D2140] hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] text-xs sm:text-sm font-semibold text-[#3B1C54] dark:text-[#F5EFFB] shadow-2xs hover:shadow-md transition-all duration-200 group cursor-pointer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Explore more of Ushani's writing on Medium (opens in new tab)"
          >
            <svg className="w-4 h-4 fill-current text-[#12100E] dark:text-white group-hover:text-[#8B5CF6] transition-colors" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Explore more of my writing on Medium</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
