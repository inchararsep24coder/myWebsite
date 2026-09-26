import React from 'react';
import { Award, Code2, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            Certifications
          </h2>
        </div>

        {/* 2 Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Python in Data Science */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-7 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F7D6E0] text-[#745B64] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F9] border border-[#F0E5EC] text-xs font-mono font-medium text-[#745B64]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                  Credential Verified
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-[#1E1E24]">
                Python in Data Science
              </h3>

              <p className="text-sm text-[#4E4447] leading-relaxed mt-2.5">
                A certification representing my learning journey and foundational knowledge in Python programming, data analytics, and computational data structures.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E5EC] text-xs text-[#5C5B66] font-mono">
              Recipient: <span className="text-[#1E1E24] font-medium">Inchara.R</span> • Domain: Data Science Foundation
            </div>
          </div>

          {/* Card 2: Systems & Algorithm Foundations in C */}
          <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-7 shadow-2xs hover:border-[#C9B8DB] hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E2DAEB] text-[#645E6D] flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F9] border border-[#F0E5EC] text-xs font-mono font-medium text-[#645E6D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                  Academic Milestone
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-[#1E1E24]">
                Systems & Algorithm Foundations in C
              </h3>

              <p className="text-sm text-[#4E4447] leading-relaxed mt-2.5">
                Demonstrated proficiency in low-level memory allocation, 2D array rasterization, and modular C architecture through faculty-supervised coursework.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E5EC] text-xs text-[#5C5B66] font-mono">
              Institution: <span className="text-[#1E1E24] font-medium">REVA University</span> • 3rd Sem AIDS
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
