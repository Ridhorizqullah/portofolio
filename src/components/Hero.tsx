import { ArrowRight, Download } from 'lucide-react';
import { HeroScene3D } from './3d/HeroScene3D';

export function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-[#0A0F14] border-b border-white/[0.08] overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background Subtle Ocean Ambiance */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-gradient-to-br from-[#0369A1]/20 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[200px] bg-gradient-to-tl from-[#0EA5E9]/08 to-transparent blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left Column: Typography & Positioning */}
        <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
          {/* Status Indicator Badge */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E1620] border border-white/[0.08] text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse flex-shrink-0" />
              <span>Software &amp; Creative Developer</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-[#38BDF8] hidden sm:inline">Yogyakarta, ID</span>
            </div>
          </div>

          {/* Large Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12]">
              Engineering robust software with{' '}
              <span className="gradient-text-ocean">
                creative technology.
              </span>
            </h1>
            <p className="text-sm font-mono uppercase tracking-widest text-slate-500 pt-1">
              Muhammad Ridho Rizqullah
            </p>
          </div>

          {/* Short Personal Introduction */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Software &amp; Creative Developer based in Yogyakarta with a strong engineering foundation
            across Web, Mobile, Backend APIs, and applied AI. Final-year Informatics student at
            Universitas Muhammadiyah Yogyakarta (
            <span className="text-[#38BDF8] font-mono font-medium">GPA 3.51/4.00</span>).
          </p>

          {/* Quick Technical Credential Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="tech-tag">
              Laravel &bull; PostgreSQL Intern (Kemenperin)
            </span>
            <span className="tech-tag">
              Flutter &bull; Kotlin Native
            </span>
            <span className="tech-tag">
              React &bull; Web3 &bull; AI
            </span>
          </div>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-6 py-3 bg-[#0369A1] hover:bg-[#0EA5E9] text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(3,105,161,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-[#0E1620] hover:bg-[#131E2B] text-slate-200 hover:text-white font-medium rounded-xl transition-all duration-200 border border-white/[0.08] hover:border-[#0EA5E9]/40 text-sm cursor-pointer"
            >
              Get In Touch
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-3 bg-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200 rounded-xl transition-colors flex items-center gap-2 text-xs font-mono border border-transparent hover:border-white/[0.08] no-print cursor-pointer"
              title="Download or Print CV"
            >
              <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Visualization */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-[440px] aspect-square relative rounded-3xl border border-white/[0.08] bg-[#0E1620]/60 backdrop-blur-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex items-center justify-center group hover:border-[#0EA5E9]/30 transition-colors duration-500">
            {/* Ambient inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 40%, rgba(14,165,233,0.1) 0%, transparent 65%)',
              }}
            />

            {/* Interactive 3D WebGL Canvas */}
            <HeroScene3D />

            {/* Frame Bottom Technical Label */}
            <div className="pointer-events-none absolute bottom-4 text-center w-full z-20 px-4">
              <div className="inline-flex items-center gap-2 bg-[#0A0F14]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.08] text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>INTERACTIVE 3D WEBGL &bull; DRAG TO ROTATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}