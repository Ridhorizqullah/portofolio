import { ArrowRight, Download } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import { HeroScene3D } from './3d/HeroScene3D';

export function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-4 pt-28 pb-16 border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Text & Profile */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-slate-700/80 ring-offset-4 ring-offset-slate-950 overflow-hidden shadow-2xl">
              <img
                src={profilePhoto}
                alt="Muhammad Ridho Rizqullah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-tight mb-2">
              Muhammad Ridho Rizqullah
            </h1>
            <div className="text-base sm:text-xl text-slate-300 font-medium">
              <span className="text-cyan-400">AI Engineer Intern Candidate</span>
              <span className="text-slate-600 mx-2 hidden sm:inline">—</span>
              <span className="text-slate-400 block sm:inline mt-1 sm:mt-0">
                Multimodal AI, RAG & Computer Vision
              </span>
            </div>
          </div>

          {/* Location & Contact Meta */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-slate-400">
            <span>Yogyakarta, Indonesia</span>
            <span className="text-slate-700">•</span>
            <a href="tel:+6281249934103" className="hover:text-slate-200 transition-colors">
              +62 812-4993-4103
            </a>
            <span className="text-slate-700">•</span>
            <a href="mailto:ridhorizqullah3@gmail.com" className="hover:text-cyan-400 transition-colors">
              ridhorizqullah3@gmail.com
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://github.com/Ridhorizqullah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Tagline / Professional Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Final-year Informatics student at Universitas Muhammadiyah Yogyakarta (<span className="text-emerald-400 font-medium">GPA 3.51/4.00</span>) specializing in Data Analytics and Computer Vision. Experienced in building end-to-end RAG pipelines and supported by backend engineering experience at the Ministry of Industry of Indonesia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm shadow-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium rounded-lg transition-colors flex items-center gap-2 border border-slate-800 text-sm no-print"
            >
              Download CV
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white font-medium rounded-lg transition-colors border border-slate-800 text-sm"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D WebGL Canvas */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-md aspect-square relative rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-sm overflow-hidden shadow-2xl flex items-center justify-center">
            <HeroScene3D />
            <div className="pointer-events-none absolute bottom-3 text-center w-full">
              <span className="text-[11px] font-mono text-slate-500 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800/60">
                Interactive 3D WebGL • Drag to spin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}