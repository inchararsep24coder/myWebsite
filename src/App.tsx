/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { OnlineProfilesSection } from './components/OnlineProfilesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickProfileModal } from './components/QuickProfileModal';

export default function App() {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F9] text-[#1E1E24] font-sans antialiased selection:bg-[#F7D6E0] selection:text-[#1E1E24]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenProfile={() => setProfileModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onScrollTo={handleScrollTo} />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <OnlineProfilesSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Profile Summary Modal */}
      <QuickProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onContactClick={() => handleScrollTo('contact')}
      />
    </div>
  );
}

