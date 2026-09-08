import React from 'react';
import { School, GitFork, Brain, FileCode, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const modules = [
    {
      title: 'Data Structures',
      icon: GitFork,
      iconBg: 'bg-[#F7D6E0]/60',
      iconColor: 'text-[#745B64]',
      desc: 'Linear & non-linear memory constructs, pointer manipulations, and complexity.',
    },
    {
      title: 'AI Foundations',
      icon: Brain,
      iconBg: 'bg-[#E2DAEB]/60',
      iconColor: 'text-[#645E6D]',
      desc: 'Search strategies, knowledge representation, agent architectures, and ethics.',
    },
    {
      title: 'Discrete Math',
      customIcon: '∑',
      iconBg: 'bg-[#E9D7FB]/60',
      iconColor: 'text-[#6A5C7A]',
      desc: 'Set theory, graph theory, propositional logic, and recurrence relations.',
    },
    {
      title: 'Python for DS',
      icon: FileCode,
      iconBg: 'bg-[#F7D6E0]/60',
      iconColor: 'text-[#705860]',
      desc: 'NumPy, tabular parsing, exploratory scripts, and mathematical computing.',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="mb-8">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // ACADEMIC TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            Education
          </h2>
        </div>

        {/* Main Education Container Card */}
        <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-8 shadow-2xs">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#F0E5EC]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F7D6E0] text-[#745B64] flex items-center justify-center shrink-0 shadow-2xs">
                <School className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#5C5B66] font-medium">
                  3rd Semester • Currently Pursuing (Expected 2027)
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1E1E24] mt-0.5">
                  B.Tech in Artificial Intelligence and Data Science (AIDS)
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#5C5B66] mt-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#745B64]" />
                  <span>REVA University, Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="self-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E2DAEB]/70 border border-[#C9B8DB] text-xs font-medium text-[#4E415E]">
                Undergraduate Degree
              </span>
            </div>
          </div>

          {/* 4 Core Course Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {modules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF8F9] border border-[#F0E5EC] hover:border-[#C9B8DB] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-8 h-8 rounded-lg ${mod.iconBg} ${mod.iconColor} flex items-center justify-center mb-3 font-mono font-bold text-sm`}
                    >
                      {IconComp ? <IconComp className="w-4 h-4" /> : mod.customIcon}
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#1E1E24]">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-[#5C5B66] leading-relaxed mt-1.5">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
