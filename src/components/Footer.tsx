import React from 'react';
import { Code2, Share2, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Inchara.R - AI & Data Science Portfolio',
        text: 'Check out the AI & Data Science portfolio of Inchara.R',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Portfolio link copied to clipboard!');
    }
  };

  return (
    <footer className="border-t border-[#F0E5EC] bg-[#FAF8F9] py-8 text-xs text-[#5C5B66]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright & Tagline */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-[#1E1E24] font-medium">
            © 2026 Inchara.R. All Rights Reserved.
          </div>
          <div className="text-[11px] text-[#807477]">
            Learning, building, and growing through technology.
          </div>
        </div>

        {/* Footer Quick Action Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/inchararsep24coder"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-[#5C5B66] hover:text-[#1E1E24] hover:bg-[#F0E5EC] transition"
            title="GitHub Repository"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg text-[#5C5B66] hover:text-[#1E1E24] hover:bg-[#F0E5EC] transition"
            title="Share Portfolio"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <a
            href="mailto:inchararsep24gmail.com"
            className="p-2 rounded-lg text-[#5C5B66] hover:text-[#1E1E24] hover:bg-[#F0E5EC] transition"
            title="Email Inchara.R"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
