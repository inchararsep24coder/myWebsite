import React from 'react';
import { Code2, Linkedin, ArrowRight } from 'lucide-react';

export const OnlineProfilesSection: React.FC = () => {
  return (
    <section id="online" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // PROFILES & CODEBASES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            Find Me Online
          </h2>
          <p className="text-sm text-[#5C5B66] mt-2">
            Explore my public commits, repositories, and professional network profile.
          </p>
        </div>

        {/* 2 Profiles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: GitHub */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-7 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E2DAEB] text-[#4E415E] flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAF8F9] border border-[#F0E5EC] text-[#5C5B66]">
                  @inchararsep24coder
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1E1E24]">
                GitHub Profile
              </h3>

              <p className="text-sm text-[#4E4447] leading-relaxed mt-2.5">
                Explore my code repositories, experiments in Python data science, C graphics editor implementations, and student coursework.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E5EC]">
              <a
                href="https://github.com/inchararsep24coder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E1E24] group-hover:text-[#705860] transition-colors"
              >
                <span>Visit GitHub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-7 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7D6E0] text-[#745B64] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAF8F9] border border-[#F0E5EC] text-[#5C5B66]">
                  in/inchara-r-1b57b342b
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1E1E24]">
                LinkedIn Network
              </h3>

              <p className="text-sm text-[#4E4447] leading-relaxed mt-2.5">
                Connect for student opportunities, academic collaborations, hackathon teams, and discussions around emerging Artificial Intelligence.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E5EC]">
              <a
                href="https://linkedin.com/in/inchara-r-1b57b342b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E1E24] group-hover:text-[#705860] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
