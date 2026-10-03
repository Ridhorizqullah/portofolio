import { ArrowRight, Download } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

export function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-24 border-b border-slate-800/80">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar/Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-2 ring-slate-700/80 ring-offset-4 ring-offset-slate-900 overflow-hidden shadow-xl">
            <img
              src={profilePhoto}
              alt="Muhammad Ridho Rizqullah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mb-3 text-white text-3xl sm:text-5xl font-bold tracking-tight">
          Muhammad Ridho Rizqullah
        </h1>

        {/* Title */}
        <div className="mb-6 text-base sm:text-xl text-slate-300 font-medium">
          <span className="text-cyan-400">AI Engineer Intern Candidate</span>
          <span className="text-slate-600 mx-2">—</span>
          <span className="text-slate-400">Multimodal AI, RAG & Computer Vision</span>
        </div>

        {/* Location & Contact Meta */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-400">
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
        <p className="mb-10 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Final-year Informatics student at Universitas Muhammadiyah Yogyakarta (<span className="text-emerald-400 font-medium">GPA 3.51/4.00</span>) specializing in Data Analytics and Computer Vision. Experienced in building end-to-end RAG pipelines and supported by backend engineering experience at the Ministry of Industry of Indonesia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm shadow-sm"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors flex items-center gap-2 border border-slate-700 text-sm no-print"
          >
            Download CV
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-lg transition-colors border border-slate-800 text-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}