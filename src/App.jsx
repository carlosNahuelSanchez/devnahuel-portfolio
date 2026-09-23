import React, { useState, useEffect } from 'react';
import { CONTENT } from './data/content';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('user_portfolio_lang') || 'es';
  });

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('user_portfolio_lang', newLang);
    document.documentElement.setAttribute('lang', newLang);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const currentContent = CONTENT[lang] || CONTENT.es;

  return (
    <div className="min-h-screen bg-void text-zinc-300 font-body relative overflow-x-clip">
      {/* 3D WebGL Particle System & Atmospheric Depth */}
      <ParticleBackground />

      <div className="relative z-10">
        <Header lang={lang} setLang={handleSetLang} content={currentContent} />
        
        <main id="main-content">
          <Hero content={currentContent} />
          <StatsSection highlight={currentContent.experienceHighlight} />
          <ProjectsSection projects={currentContent.projects} />
          <ExperienceSection experience={currentContent.experience} />
          <SkillsSection skills={currentContent.skills} education={currentContent.education} />
          <ContactSection contact={currentContent.contact} />
        </main>

        <Footer footer={currentContent.footer} />
      </div>
    </div>
  );
}
