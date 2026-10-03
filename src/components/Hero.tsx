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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Avatar/Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-green-400 p-1 animate-float">
            <img
              src={profilePhoto}
              alt="Muhammad Ridho Rizqullah"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Availability Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Available for 12-Month WFH Internship</span>
        </div>

        {/* Name */}
        <h1 className="mb-4 text-white text-3xl sm:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Muhammad Ridho Rizqullah
          </span>
        </h1>

        {/* Title */}
        <div className="mb-4 text-lg md:text-2xl text-gray-200 font-semibold flex flex-wrap items-center justify-center gap-2">
          <span className="text-cyan-400">AI Engineer Intern Candidate</span>
          <span className="text-gray-500 hidden sm:inline">—</span>
          <span className="text-gray-300 text-base md:text-xl">Multimodal AI, RAG & Computer Vision</span>
        </div>

        {/* Location & Quick Contact */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400">📍</span> Yogyakarta, Indonesia
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a href="tel:+6281249934103" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-green-400">📞</span> +62 812-4993-4103
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a href="mailto:ridhorizqullah3@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-400">✉️</span> ridhorizqullah3@gmail.com
          </a>
        </div>

        {/* Tagline / Professional Summary */}
        <p className="mb-10 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Final-year Informatics student at Universitas Muhammadiyah Yogyakarta (<span className="text-green-400 font-medium">GPA 3.51/4.00</span>) specializing in Data Analytics and Computer Vision. Built and tested end-to-end RAG assistants (SentenceTransformers, ChromaDB, FastAPI, WhatsApp integration) and backed by Ministry of Industry internship experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handlePrint}
            className="group px-8 py-4 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg transition-all duration-300 flex items-center gap-2 border border-green-400/30 hover:border-green-400/60 hover:scale-105 no-print"
          >
            Download CV
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 border border-slate-600 hover:border-cyan-400/50 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}