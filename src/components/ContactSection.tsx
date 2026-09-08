import React, { useState } from 'react';
import { Mail, MapPin, GraduationCap, Lock, Send, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hackathon Project / Mentorship / Internship Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('inchararsep24@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Create mailto fallback link for realistic action
    const mailto = `mailto:inchararsep24@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#F0E5EC]/60">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-wider font-semibold text-[#807477] uppercase">
            // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E1E24] tracking-tight mt-1">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Affiliation */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#4E4447] leading-relaxed mb-6">
              I'm always interested in learning, collaborating, and connecting with people who share an interest in technology, artificial intelligence, and software innovation.
            </p>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-white border border-[#F0E5EC] shadow-2xs hover:border-[#C9B8DB] transition flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F7D6E0] text-[#745B64] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider">
                    EMAIL ADDRESS
                  </div>
                  <a
                    href="mailto:inchararsep24@gmail.com"
                    className="text-sm font-semibold text-[#1E1E24] hover:underline"
                  >
                    inchararsep24@gmail.com
                  </a>
                </div>
              </div>

              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#5C5B66] hover:bg-[#FAF8F9] hover:text-[#1E1E24] transition"
                title="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#2E7D32]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-white border border-[#F0E5EC] shadow-2xs hover:border-[#C9B8DB] transition flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#E2DAEB] text-[#645E6D] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider">
                  LOCATION
                </div>
                <div className="text-sm font-semibold text-[#1E1E24]">
                  Bangalore, Karnataka, India
                </div>
              </div>
            </div>

            {/* Affiliation Card */}
            <div className="p-4 rounded-xl bg-white border border-[#F0E5EC] shadow-2xs hover:border-[#C9B8DB] transition flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#E9D7FB] text-[#6A5C7A] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-semibold text-[#807477] uppercase tracking-wider">
                  AFFILIATION
                </div>
                <div className="text-sm font-semibold text-[#1E1E24]">
                  REVA University (AIDS Dept.)
                </div>
              </div>
            </div>

            {/* Privacy Note Box */}
            <div className="p-3.5 rounded-xl bg-[#F7D6E0]/40 border border-[#F0E5EC] flex items-start gap-2.5 mt-4">
              <Lock className="w-4 h-4 text-[#745B64] shrink-0 mt-0.5" />
              <p className="text-xs text-[#574049] leading-relaxed">
                <span className="font-semibold">Privacy Note:</span> Direct email contact preferred for academic inquiries, hackathon invitations, and mentorship opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#F0E5EC] p-6 sm:p-8 shadow-2xs">
              <h3 className="font-display font-bold text-xl text-[#1E1E24]">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5B66] mt-1 mb-6">
                Fill in the fields below and I will get back to you promptly.
              </p>

              {isSubmitted && (
                <div className="mb-4 p-3 rounded-lg bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Opening your email client to dispatch the message to Inchara.R.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2-Column Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#5C5B66] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC] text-sm text-[#1E1E24] focus:outline-none focus:border-[#C9B8DB] focus:ring-2 focus:ring-[#F7D6E0] transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#5C5B66] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC] text-sm text-[#1E1E24] focus:outline-none focus:border-[#C9B8DB] focus:ring-2 focus:ring-[#F7D6E0] transition"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[#5C5B66] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC] text-sm text-[#1E1E24] focus:outline-none focus:border-[#C9B8DB] focus:ring-2 focus:ring-[#F7D6E0] transition"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#5C5B66] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Write your thoughts, project ideas, or collaborative opportunity here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F9] border border-[#F0E5EC] text-sm text-[#1E1E24] focus:outline-none focus:border-[#C9B8DB] focus:ring-2 focus:ring-[#F7D6E0] transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#1E1E24] hover:bg-[#2F2E38] text-white text-xs font-semibold tracking-wide transition shadow-xs"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
