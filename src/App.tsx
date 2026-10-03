import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/ui/CursorGlow';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F14] text-[#F8FAFC] selection:bg-[#0369A1]/40 selection:text-[#38BDF8] antialiased relative">
      {/* Desktop Subtle Cursor Ambiance */}
      <CursorGlow />

      {/* Main Structural Layout */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}