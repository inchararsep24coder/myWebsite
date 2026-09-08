import React from 'react';
import { Terminal, Cpu, Wrench, Lightbulb, Info } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getStageBadgeStyle = (stage: string) => {
    switch (stage) {
      case 'Active Daily':
        return 'bg-[#E2DAEB] text-[#4E415E] border-[#C9B8DB]';
      case 'Building':
        return 'bg-[#F7D6E0] text-[#745B64] border-[#E26D8C]/30';
      case 'Learning':
        return 'bg-[#E9D7FB] text-[#6A5C7A] border-[#C9B8DB]';
      case 'Exploring':
        return 'bg-[#EDE7F6] text-[#5E35B1] border-[#D1C4E9]';
      default:
        return 'bg-[#FAF8F9] text-[#5C5B66] border-[#F0E5EC]';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Subtitle and Disclaimer Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
              // COMPETENCIES & TOOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
              Technical Skills
            </h2>
            <p className="text-sm text-[#5C5B66] mt-1">
              Categorized by genuine development stage. No arbitrary percentages.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2DAEB]/50 border border-[#C9B8DB]/60 text-xs font-medium text-[#4E415E]">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Stage labels reflect actual student coursework and exploration</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Programming */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7D6E0] text-[#745B64] flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E1E24]">
                Programming
              </h3>
              <p className="text-xs text-[#5C5B66] mt-1 mb-4">
                Core procedural & analytical languages.
              </p>

              <div className="space-y-2">
                {[
                  { name: 'Python 3', stage: 'Building' },
                  { name: 'C Language', stage: 'Learning' },
                  { name: 'Python Fundamentals', stage: 'Building' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC]/80"
                  >
                    <span className="text-xs font-semibold text-[#1E1E24]">
                      {item.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${getStageBadgeStyle(
                        item.stage
                      )}`}
                    >
                      {item.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E5EC] text-[11px] text-[#807477] font-mono">
              Foundations: Arrays, Memory, OOP
            </div>
          </div>

          {/* Card 2: Data Science & AI */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E2DAEB] text-[#645E6D] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E1E24]">
                Data Science & AI
              </h3>
              <p className="text-xs text-[#5C5B66] mt-1 mb-4">
                Modeling, workflows & problem frames.
              </p>

              <div className="space-y-2">
                {[
                  { name: 'Data Science', stage: 'Exploring' },
                  { name: 'Machine Learning', stage: 'Exploring' },
                  { name: 'AI Solution Design', stage: 'Building' },
                  { name: 'App Integration', stage: 'Exploring' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC]/80"
                  >
                    <span className="text-xs font-semibold text-[#1E1E24]">
                      {item.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${getStageBadgeStyle(
                        item.stage
                      )}`}
                    >
                      {item.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E5EC] text-[11px] text-[#807477] font-mono">
              Healthcare & Utility ML
            </div>
          </div>

          {/* Card 3: Development Tools */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E9D7FB] text-[#6A5C7A] flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E1E24]">
                Development Tools
              </h3>
              <p className="text-xs text-[#5C5B66] mt-1 mb-4">
                Everyday environments & versioning.
              </p>

              <div className="space-y-2">
                {[
                  { name: 'GitHub', stage: 'Active Daily' },
                  { name: 'Visual Studio Code', stage: 'Active Daily' },
                  { name: 'Git Terminal', stage: 'Building' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC]/80"
                  >
                    <span className="text-xs font-semibold text-[#1E1E24]">
                      {item.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${getStageBadgeStyle(
                        item.stage
                      )}`}
                    >
                      {item.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E5EC] text-[11px] text-[#807477] font-mono">
              Version control & clean workflows
            </div>
          </div>

          {/* Card 4: Other Strengths */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-5 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F7D6E0]/80 text-[#705860] flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1E1E24]">
                Other Strengths
              </h3>
              <p className="text-xs text-[#5C5B66] mt-1 mb-4">
                Cognitive and academic approaches.
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'Problem Solving',
                    detail: 'Algorithmic approach & step debugging',
                  },
                  {
                    title: 'Debugging & Logic',
                    detail: 'Isolating memory & loop boundary errors',
                  },
                  {
                    title: 'Technical Docs',
                    detail: 'Structured reports & clean READMEs',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC]/80"
                  >
                    <div className="text-xs font-semibold text-[#1E1E24]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#5C5B66] mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E5EC] text-[11px] text-[#807477] font-mono">
              Analytical & collaborative spirit
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
