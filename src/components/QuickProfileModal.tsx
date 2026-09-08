import React from 'react';
import { X, GraduationCap, MapPin, Mail, Sparkles, ExternalLink } from 'lucide-react';

interface QuickProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const QuickProfileModal: React.FC<QuickProfileModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E24]/30 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-md rounded-2xl border border-[#F0E5EC] shadow-[0_20px_48px_-6px_rgba(30,30,36,0.12)] p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#5C5B66] hover:bg-[#FAF8F9] hover:text-[#1E1E24] transition"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#F7D6E0] text-[#1E1E24] font-display font-bold text-xl flex items-center justify-center shadow-xs">
            R
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-[#1E1E24]">
              Inchara.R
            </h3>
            <p className="text-xs text-[#5C5B66] flex items-center gap-1.5">
              <span>B.Tech in AIDS (3rd Sem)</span> • <span>Class of 2027</span>
            </p>
          </div>
        </div>

        {/* Details list */}
        <div className="space-y-2.5 text-xs text-[#4E4447] bg-[#FAF8F9] p-4 rounded-xl border border-[#F0E5EC]">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-4 h-4 text-[#745B64]" />
            <span>REVA University, Bangalore, Karnataka</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#645E6D]" />
            <span>Specialization: Machine Learning, Data Science & Systems</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#705860]" />
            <span>inchararsep24@gmail.com</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2.5">
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex-1 py-2.5 px-4 rounded-lg bg-[#1E1E24] hover:bg-[#2F2E38] text-white text-xs font-semibold text-center transition"
          >
            Get In Touch
          </button>
          <a
            href="https://github.com/inchararsep24coder"
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-4 rounded-lg bg-white border border-[#F0E5EC] hover:bg-[#FAF8F9] text-[#1E1E24] text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5C5B66]" />
          </a>
        </div>
      </div>
    </div>
  );
};
