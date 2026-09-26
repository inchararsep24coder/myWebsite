import React from 'react';
import { GraduationCap, Sparkles, Code2, Wrench, Rocket } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const personaCards = [
    {
      title: 'AIDS Student',
      subtitle: 'B.Tech in Artificial Intelligence & Data Science (Class of 2027)',
      icon: GraduationCap,
      iconBg: 'bg-[#F7D6E0]',
      iconColor: 'text-[#745B64]',
    },
    {
      title: 'AI & Data Enthusiast',
      subtitle: 'B.Tech in Artificial Intelligence & Data Science (Class of 2027)',
      icon: Sparkles,
      iconBg: 'bg-[#E2DAEB]',
      iconColor: 'text-[#645E6D]',
    },
    {
      title: 'Python & C Learner',
      subtitle: 'B.Tech in Artificial Intelligence & Data Science (Class of 2027)',
      icon: Code2,
      iconBg: 'bg-[#E9D7FB]',
      iconColor: 'text-[#6A5C7A]',
    },
    {
      title: 'Problem Solver',
      subtitle: 'B.Tech in Artificial Intelligence & Data Science (Class of 2027)',
      icon: Wrench,
      iconBg: 'bg-[#F7D6E0]/80',
      iconColor: 'text-[#705860]',
    },
    {
      title: 'Continuous Learner',
      subtitle: 'B.Tech in Artificial Intelligence & Data Science (Class of 2027)',
      icon: Rocket,
      iconBg: 'bg-[#E2DAEB]/80',
      iconColor: 'text-[#615C6A]',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="mb-8">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // PROFILE OVERVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#1E1E24] leading-snug">
              Passionate about building AI solutions for real-world impact.
            </h3>

            <p className="text-[#4E4447] text-base leading-relaxed">
              I am currently pursuing a B.Tech in{' '}
              <span className="font-semibold text-[#1E1E24]">REVA University, Bangalore</span>. I am passionate about technology and enjoy exploring programming, Artificial Intelligence, Data Science, and Machine Learning.
            </p>

            <p className="text-[#4E4447] text-base leading-relaxed">
              I enjoy learning new technologies, solving programming problems, and working on projects that focus on real-world challenges. As a student in my 3rd semester, I am continuously improving my technical knowledge, analyzing logic structures, and exploring different modern engineering horizons.
            </p>

            {/* University Highlight Pill Card */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-[#F0E5EC] shadow-2xs hover:border-[#C9B8DB] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#F7D6E0] flex items-center justify-center text-[#745B64]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-display font-semibold text-base text-[#1E1E24]">
                  REVA University, Bangalore
                </div>
              </div>
            </div>
          </div>

          {/* Right Persona Stack Column */}
          <div className="lg:col-span-6 space-y-3">
            {personaCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#F0E5EC] hover:border-[#C9B8DB] shadow-2xs hover:shadow-xs transition-all flex items-center gap-4 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-bold text-sm sm:text-[15px] text-[#1E1E24]">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#5C5B66] truncate mt-0.5">
                      {card.subtitle}
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
