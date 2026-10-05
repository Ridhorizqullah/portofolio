import { ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#080C10] border-t border-white/[0.06] text-slate-400 no-print relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-6">
        {/* Brand with Dashed Divider matching reference */}
        <div className="contact-dashed-divider max-w-4xl mx-auto">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight px-6 text-center whitespace-nowrap">
          </span>
        </div>

        {/* Copyright & Location */}
        <div className="text-center space-y-1 text-xs font-mono text-slate-500">
          <div>&copy; {new Date().getFullYear()} Muhammad Ridho Rizqullah. All Rights Reserved.</div>
          <div className="text-[11px] text-slate-600">Engineered with React, TypeScript &bull; Yogyakarta, Indonesia</div>
        </div>
      </div>

      {/* Floating / Corner TOP Button matching reference */}
      <div className="absolute right-5 sm:right-8 bottom-8">
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center justify-center w-11 h-11 rounded-lg bg-[#0E1620] hover:bg-[#131E2B] border border-white/15 hover:border-[#0EA5E9] text-slate-300 hover:text-white transition-all shadow-lg group cursor-pointer"
          aria-label="Scroll to Top"
          title="Back to Top"
        >
          <ChevronUp className="w-4 h-4 text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-slate-400 group-hover:text-white">
            TOP
          </span>
        </button>
      </div>
    </footer>
  );
}