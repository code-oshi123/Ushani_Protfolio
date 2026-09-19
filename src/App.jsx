import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import QaCaseStudy from './components/QaCaseStudy';
import QaSection from './components/QaSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen text-themeCharcoal bg-themeBg selection:bg-themeLavender selection:text-themePlum">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <QaCaseStudy />
      <QaSection />
      <Skills />
      <Experience />
      <Strengths />
      <Contact />
    </div>
  );
}

export default App;
