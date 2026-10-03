import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, FileDown } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'capabilities', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F14]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand */}
        <a
          href="#"
          className="flex-shrink-0 text-sm font-mono tracking-wider text-slate-100 hover:text-[#38BDF8] transition-colors flex items-center gap-2.5 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_#0EA5E9] group-hover:scale-125 transition-transform" />
          <span className="font-bold tracking-tight">MRR.DEV</span>
        </a>

        {/* Center: Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0E1620]/70 px-2 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-[#0369A1]/40 border border-[#0EA5E9]/40 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Social Icons + Resume Button */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="https://github.com/Ridhorizqullah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-[#38BDF8] hover:bg-white/[0.05] rounded-lg transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-[#38BDF8] hover:bg-white/[0.05] rounded-lg transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={handlePrintResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-200 bg-[#0E1620] hover:bg-[#131E2B] border border-white/[0.1] hover:border-[#0EA5E9]/40 rounded-lg transition-all shadow-sm cursor-pointer ml-1"
          >
            <FileDown className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile: Compact right area */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handlePrintResume}
            className="p-1.5 text-slate-300 bg-[#0E1620] border border-white/[0.08] rounded-md transition-colors hover:text-[#38BDF8] cursor-pointer"
            aria-label="Resume"
          >
            <FileDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg border border-white/[0.08] bg-[#0E1620] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F14]/98 backdrop-blur-2xl border-b border-white/[0.08] px-5 py-5 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-colors ${
                  activeSection === link.id
                    ? 'text-[#38BDF8] bg-[#0369A1]/20 border border-[#0EA5E9]/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">CONNECT:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Ridhorizqullah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
