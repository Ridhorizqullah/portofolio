import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { HeroScene3D } from './3d/HeroScene3D';
import heroMountainBg from '../assets/hero-mountain-bg.jpg';

export function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center border-b border-white/[0.08] overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* 1. Dramatic Mountain Landscape with Cinematic Vignette Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroMountainBg}
          alt="Atmospheric Mountain Horizon"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Strong left-to-right gradient to give text solid dark contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14] via-[#0A0F14]/85 to-[#0A0F14]/40" />
        {/* Top & bottom smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-transparent to-[#0A0F14]/80" />
      </div>

      {/* 2. Main Content Grid (Typography + Interactive 3D Model) */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-12 lg:py-16 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Clean Left-Aligned Typography (~58%) */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex justify-start">
          <div className="hero-content-box">
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E1620]/90 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-slate-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] animate-pulse flex-shrink-0" />
              <span>Available for Opportunities</span>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <span className="text-slate-400 hidden sm:inline">Yogyakarta, ID</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="hero-main-title">
                Hi, I am{' '}
                <span className="hero-highlight-name">
                  Muhammad Ridho Rizqullah
                </span>
              </h1>
              <div className="hero-sub-title">
                Software &amp; Creative Developer
              </div>
            </div>

            {/* Bio text */}
            <p className="hero-description-text">
              Final-year Informatics student at Universitas Muhammadiyah Yogyakarta (
              <span className="text-[#38BDF8] font-mono font-medium">GPA 3.51/4.00</span>) with proven
              experience in backend API engineering (Kemenperin RI), native Android, Flutter, and applied AI systems.
            </p>

            {/* Technical credentials / pill tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="tech-tag">
                Laravel &bull; PostgreSQL Intern
              </span>
              <span className="tech-tag">
                Flutter &bull; Kotlin Android
              </span>
              <span className="tech-tag">
                React &bull; Web3 &bull; AI
              </span>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(3,105,161,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 bg-[#0E1620]/90 hover:bg-[#131E2B] text-slate-200 hover:text-white font-medium rounded-xl transition-all duration-200 border border-white/[0.1] hover:border-[#0EA5E9]/40 text-sm backdrop-blur-sm cursor-pointer shadow-md"
              >
                Contact Me
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-3.5 bg-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200 rounded-xl transition-colors flex items-center gap-2 text-xs font-mono border border-transparent hover:border-white/[0.08] no-print cursor-pointer"
                title="Download or Print CV"
              >
                <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Ridhorizqullah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0E1620]/90 hover:bg-[#131E2B] text-slate-400 hover:text-white border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-colors shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0E1620]/90 hover:bg-[#131E2B] text-slate-400 hover:text-white border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:ridhorizqullah3@gmail.com"
                className="p-2.5 rounded-lg bg-[#0E1620]/90 hover:bg-[#131E2B] text-slate-400 hover:text-white border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-colors shadow-sm"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281249934103"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0E1620]/90 hover:bg-[#131E2B] text-slate-400 hover:text-white border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-colors shadow-sm"
                aria-label="WhatsApp"
                title="WhatsApp / Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D WebGL Canvas (~42%) */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-[420px] aspect-square relative rounded-3xl border border-white/[0.1] bg-[#0E1620]/40 backdrop-blur-xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.7)] flex items-center justify-center group hover:border-[#0EA5E9]/40 transition-colors duration-500">
            {/* Ambient inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 40%, rgba(14,165,233,0.12) 0%, transparent 70%)',
              }}
            />

            {/* Interactive 3D WebGL Scene */}
            <HeroScene3D />

            {/* Frame Bottom Technical Label */}
            <div className="pointer-events-none absolute bottom-4 text-center w-full z-20 px-4">
              <div className="inline-flex items-center gap-2 bg-[#0A0F14]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.08] text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}