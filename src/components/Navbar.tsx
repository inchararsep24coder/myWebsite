import React, { useState, useEffect } from 'react';
import { User, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F9]/90 backdrop-blur-md border-b border-[#F0E5EC]/80 transition-all">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 text-left group transition"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F7D6E0] flex items-center justify-center text-[#1E1E24] font-display font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
            R
          </div>
          <span className="font-display font-bold text-lg text-[#1E1E24] tracking-tight">
            Inchara.R
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#F7D6E0] text-[#1E1E24] shadow-xs'
                    : 'text-[#5C5B66] hover:text-[#1E1E24] hover:bg-[#F0E5EC]/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and Avatar */}
        <div className="flex items-center gap-2.5">
          <button
            id="nav-connect-btn"
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-[#1E1E24] hover:bg-[#2F2E38] text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-98"
          >
            Let's Connect
          </button>

          <button
            id="nav-profile-btn"
            onClick={onOpenProfile}
            aria-label="View Profile Quick Details"
            className="w-8 h-8 rounded-full bg-[#1E1E24] hover:bg-[#2F2E38] text-white flex items-center justify-center transition-transform hover:scale-105"
            title="Profile summary"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#1E1E24] hover:bg-[#F0E5EC] rounded-lg transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F9] border-b border-[#F0E5EC] px-4 pt-2 pb-4 space-y-1 shadow-md animate-in fade-in duration-150">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                activeSection === link.id
                  ? 'bg-[#F7D6E0] text-[#1E1E24]'
                  : 'text-[#5C5B66] hover:bg-[#F0E5EC]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="w-full mt-2 flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-[#1E1E24] text-white text-xs font-semibold"
          >
            Let's Connect <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
