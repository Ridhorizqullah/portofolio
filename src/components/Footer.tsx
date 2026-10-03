import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800/80 no-print">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-base font-bold mb-2 text-white">
              Muhammad Ridho Rizqullah
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AI Engineer Intern Candidate specializing in Multimodal AI, RAG & Computer Vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-slate-400 hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex gap-2">
              <a
                href="https://github.com/Ridhorizqullah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ridho-rizqullah-9677b53ab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:ridhorizqullah3@gmail.com"
                className="w-9 h-9 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-slate-500 text-xs">
            © {currentYear} Muhammad Ridho Rizqullah. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-mono">
            React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}