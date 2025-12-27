import { ArrowRight, Download } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

export function Hero() {
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

        {/* Name */}
        <h1 className="mb-4 text-white">
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Muhammad Ridho Rizqullah
          </span>
        </h1>

        {/* Title */}
        <div className="mb-6 text-xl md:text-2xl text-gray-300 flex flex-wrap items-center justify-center gap-2">
          <span>Web Developer</span>
          <span className="text-cyan-400">|</span>
          <span>Mobile Developer</span>
          <span className="text-cyan-400">|</span>
          <span>UI/UX</span>
        </div>

        {/* Tagline */}
        <p className="mb-10 text-lg text-gray-400 max-w-2xl mx-auto">
          5th semester Informatics Engineering student at University Muhammadiyah Yogyakarta with 3.48 GPA.
          Building innovative digital solutions across multiple platforms - web, mobile, and blockchain.
          Passionate about creating secure, modern, and user-friendly digital experiences.
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
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 border border-green-400/30 hover:border-green-400/60 hover:scale-105"
          >
            Contact Me
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
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