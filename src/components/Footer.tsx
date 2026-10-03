import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0A0F14] border-t border-white/[0.08] text-slate-400 no-print">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Positioning */}
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]"></span>
              <span className="text-base font-bold text-white tracking-tight">MRR.DEV</span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Creative Developer &bull; Software Developer
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ridhorizqullah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0E1620] hover:bg-[#131E2B] text-slate-300 hover:text-white border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0E1620] hover:bg-[#131E2B] text-slate-300 hover:text-white border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ridhorizqullah3@gmail.com"
              className="p-2.5 rounded-lg bg-[#0E1620] hover:bg-[#131E2B] text-slate-300 hover:text-white border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0E1620] hover:bg-[#131E2B] text-slate-300 hover:text-[#38BDF8] border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Muhammad Ridho Rizqullah. All rights reserved.</span>
          <span>Engineered with React, TypeScript &amp; Three.js &bull; Yogyakarta, ID</span>
        </div>
      </div>
    </footer>
  );
}