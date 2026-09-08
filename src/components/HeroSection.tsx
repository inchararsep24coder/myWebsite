import React, { useState } from 'react';
import { ArrowDown, Mail, Cpu, Layers, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const tags = [
    '3rd Sem, REVA University',
    'AI Enthusiast',
    'Python Learner',
    'Problem Solver',
    'Aspiring Developer',
  ];

  return (
    <section id="home" className="pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7D6E0]/70 border border-[#F0E5EC] text-[#745B64] text-xs font-mono font-medium tracking-wide w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E26D8C] animate-pulse"></span>
              AVAILABLE FOR INTERNSHIPS & HACKATHONS 2026
            </div>

            {/* Main Greeting and Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-[#1E1E24] tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-[#1E1E24]">Inchara.R</span>
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-[#5C5B66] flex items-center gap-2">
                Artificial Intelligence & Data Science Student <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5C5B66]"></span>
              </p>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-medium px-3 py-1 rounded-full transition-all border ${
                    idx === 0
                      ? 'bg-[#E2DAEB]/70 border-[#C9B8DB] text-[#4E415E]'
                      : 'bg-white border-[#F0E5EC] text-[#5C5B66] hover:border-[#C9B8DB]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Biography */}
            <p className="text-[#4E4447] text-base sm:text-[16.5px] leading-relaxed max-w-xl font-normal">
              I am a 3rd-semester Artificial Intelligence and Data Science student passionate about learning new technologies, solving problems, and building meaningful projects. I am currently exploring Machine Learning, data workflows, algorithms, and application development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-view-projects-btn"
                onClick={() => onScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#1E1E24] hover:bg-[#2F2E38] text-white font-medium text-sm transition-all shadow-xs group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-connect-btn"
                onClick={() => onScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#FAF8F9] border border-[#F0E5EC] hover:border-[#C9B8DB] text-[#1E1E24] font-medium text-sm transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#5C5B66]" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Key Metrics Row */}
            <div className="pt-6 border-t border-[#F0E5EC]/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="space-y-1">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1E1E24] tracking-tight">
                  03<span className="text-sm font-sans font-normal text-[#5C5B66]">rd</span>
                </div>
                <div className="text-xs text-[#5C5B66] font-medium">Semester B.E.</div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1E1E24] tracking-tight">
                  03<span className="text-sm font-sans font-normal text-[#5C5B66]">+</span>
                </div>
                <div className="text-xs text-[#5C5B66] font-medium">Core Projects</div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1E1E24] tracking-tight">
                  AIDS
                </div>
                <div className="text-xs text-[#5C5B66] font-medium">REVA Univ</div>
              </div>
            </div>
          </div>

          {/* Right Hero Column - Interactive Code & Neural Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#F0E5EC] shadow-[0_4px_24px_-4px_rgba(247,214,224,0.35),0_2px_8px_-2px_rgba(30,30,36,0.04)] overflow-hidden transition-all hover:shadow-[0_8px_32px_-4px_rgba(226,218,235,0.45)]">
              {/* Terminal Window Header */}
              <div className="bg-[#FAF8F9] px-4 py-3 border-b border-[#F0E5EC] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F7D6E0] border border-[#E26D8C]/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E2DAEB]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FAF8F9] border border-[#D1C3C6]"></div>
                  <span className="ml-2 font-mono text-xs text-[#5C5B66] font-medium">
                    inchara_env.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-ping"></span>
                  Active learning
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 sm:p-5 font-mono text-[13px] leading-relaxed text-[#1E1E24] bg-[#FCFBFC] border-b border-[#F0E5EC] overflow-x-auto">
                <div className="text-[#8E44AD] font-semibold">import <span className="text-[#1E1E24]">torch</span></div>
                <div className="text-[#8E44AD] font-semibold">import <span className="text-[#1E1E24]">numpy</span> as <span className="text-[#1E1E24]">np</span></div>
                <div className="text-[#807477] italic mt-1">// Student Pipeline Initialization</div>
                <div>
                  <span className="text-[#2C3E50] font-semibold">student</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#705860]">"name"</span>: <span className="text-[#27AE60] bg-[#F7D6E0]/30 px-1 rounded">"Inchara.R"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#705860]">"program"</span>: <span className="text-[#27AE60] bg-[#1E1E24] text-white px-1.5 py-0.5 rounded text-[12px]">"B.E. in AIDS"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#705860]">"stage"</span>: <span className="text-[#27AE60]">"3rd Semester"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#705860]">"focus"</span>: [<span className="text-[#27AE60]">"ML"</span>, <span className="text-[#27AE60]">"Data Science"</span>, <span className="text-[#27AE60]">"C"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[#705860]">"status"</span>: <span className="text-[#27AE60]">"building_solutions"</span>
                </div>
                <div>&#125;</div>
                <div className="mt-2">
                  <span className="text-[#8E44AD] font-semibold">def</span> <span className="text-[#2980B9] font-semibold">iterate_learning</span>():
                </div>
                <div className="pl-4 text-[#5C5B66]">
                  <span className="text-[#8E44AD] font-semibold">return</span> student.explore_tech()
                </div>
              </div>

              {/* Data Processing & Neural Explorations Visualizer */}
              <div className="p-4 sm:p-5 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono tracking-wider font-semibold text-[#807477] uppercase">
                      Data Processing
                    </div>
                    <div className="font-display font-bold text-base text-[#1E1E24] mt-0.5">
                      Neural Explorations
                    </div>
                    <div className="text-xs text-[#5C5B66] mt-0.5">
                      Training concepts & algorithms
                    </div>
                  </div>

                  {/* Interactive Mini Neural Network Graph */}
                  <div className="relative w-28 h-16 bg-[#FAF8F9] rounded-xl border border-[#F0E5EC] p-1.5 flex items-center justify-between">
                    {/* Layer 1 (Input) */}
                    <div className="flex flex-col justify-around h-full">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={`l1-${idx}`}
                          onClick={() => setActiveNode(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            activeNode === idx ? 'bg-[#E26D8C] ring-2 ring-[#F7D6E0]' : 'bg-[#705860]'
                          }`}
                          title={`Input Neuron ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Connecting lines illustration */}
                    <div className="flex-1 px-1 flex items-center justify-center">
                      <svg className="w-full h-8 stroke-[#D1C3C6]" viewBox="0 0 40 24">
                        <line x1="0" y1="4" x2="20" y2="12" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="0" y1="12" x2="20" y2="12" strokeWidth="1" />
                        <line x1="0" y1="20" x2="20" y2="12" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="20" y1="12" x2="40" y2="8" strokeWidth="1" />
                        <line x1="20" y1="12" x2="40" y2="16" strokeWidth="1" />
                      </svg>
                    </div>

                    {/* Hidden Layer */}
                    <div className="flex flex-col justify-around h-full">
                      {[3, 4].map((idx) => (
                        <button
                          key={`l2-${idx}`}
                          onClick={() => setActiveNode(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            activeNode === idx ? 'bg-[#8E44AD] ring-2 ring-[#E2DAEB]' : 'bg-[#C9B8DB]'
                          }`}
                          title={`Hidden Neuron ${idx - 2}`}
                        />
                      ))}
                    </div>

                    {/* Output Layer */}
                    <div className="flex flex-col justify-around h-full pl-2">
                      {[5].map((idx) => (
                        <button
                          key={`l3-${idx}`}
                          onClick={() => setActiveNode(idx)}
                          className="w-3.5 h-3.5 rounded-full bg-[#1E1E24] hover:bg-[#E26D8C] transition-colors"
                          title="Output Activation"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Micro Tags */}
                <div className="mt-4 pt-3 border-t border-[#F0E5EC] flex items-center justify-between text-xs text-[#5C5B66] font-mono">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#705860]" />
                    Python 3.x Engine
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#665977]" />
                    ML Architectures
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
