import { ExternalLink, Github } from 'lucide-react';
import presensiAppImage from '../assets/3cba048768d1a0458c63f067141013098314100f.png';
import getkomUIImage from '../assets/b61ac32ecaa1cb9a264f5db79586c05f13d5cdad.png';
import n8nTelegramBotImage from '../assets/141a9b6ef764dd05fbb012d7404335fcc3d4adfd.png';
import nftSmartContractImage from '../assets/fcc51c954a2f6ee1df072d0b930005c83258c157.png';
import geminiChatImage from '../assets/f41fc61057c42ef5ca992435141255b79efd6025.png';
import mahasiswaAppImage from '../assets/4dc9655d10547328c4c766f7721159c560ce1d2a.png';
import alorentImage from '../assets/c8f6ad01f6c64c2126ec04bb258c62afde448f49.png';
import umyMessageBoardImage from '../assets/8fecb7a802bc85e4a76345b66e736e338a5c61cb.png';
import freelanceHubImage from '../assets/cea542adc64d3b948d370106fd1ffb702976f517.png';
import kotlinStudentImage from '../assets/a1c04aee8c9f72ed3222c7315404934a9d556ed4.png';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  githubLink?: string;
  linkType?: 'figma' | 'github' | 'live';
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'PresensiApp — Geolocation & Camera Verification',
      description: 'Web-based student attendance application with real-time GPS geolocation verification and camera photo capture for attendance validation. Features an administrative dashboard that detects location anomalies.',
      techStack: ['React.js', 'Node.js', 'Express', 'Geolocation API', 'Camera API'],
      image: presensiAppImage,
      githubLink: 'https://github.com/C-PPAW-TI503P-2025/PRKPAW-20230140131',
    },
    {
      title: 'GetKom UI/UX Design System',
      description: 'Comprehensive UI/UX mobile application design system created in Figma. Features design components, user onboarding flow, custom keyboard interface, and settings screens with clean aesthetic styling.',
      techStack: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
      image: getkomUIImage,
      link: 'https://www.figma.com/community/file/1574343962403501803',
      linkType: 'figma',
    },
    {
      title: 'n8n AI Telegram Bot',
      description: 'Automated workflow pipeline engineered with n8n integrating Telegram Bot API and Google Gemini AI. Features automated message routing, context memory, and intelligent response handling.',
      techStack: ['n8n', 'Telegram Bot API', 'Google Gemini AI', 'Workflow Automation'],
      image: n8nTelegramBotImage,
      githubLink: 'https://github.com/Ridhorizqullah',
    },
    {
      title: 'NFT – Smart Contract',
      description: 'Decentralized NFT marketplace and token smart contract implementation on Ethereum. Supports ERC-721 token standards, minting methods, ownership transfer, and Web3 connection.',
      techStack: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'ERC-721'],
      image: nftSmartContractImage,
      githubLink: 'https://github.com/Ridhorizqullah/NFT-Blockhain.git',
    },
    {
      title: 'Gemini AI Chat Application',
      description: 'Web-based conversational interface integrated with Google Gemini API. Offers fast prompt execution, natural language processing, and clean conversational UI.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      image: geminiChatImage,
      githubLink: 'https://github.com/Ridhorizqullah/Web-ai.git',
    },
    {
      title: 'Student Management System',
      description: 'Desktop management system for academic student records. Implements complete CRUD operations, data import/export, student enrollment verification, and financial analysis dashboards.',
      techStack: ['C#', 'SQL Server', 'Windows Forms', '.NET'],
      image: mahasiswaAppImage,
      githubLink: 'https://github.com/Ridhorizqullah/aplikasi-form-mahasiswa.git',
    },
    {
      title: 'Alorent Camera Rental App',
      description: 'Cross-platform mobile application for photographic camera rentals. Features user authentication, equipment catalog, real-time availability tracking, and booking management.',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      image: alorentImage,
      githubLink: 'https://github.com/Ridhorizqullah/alorent-camera.git',
    },
    {
      title: 'UMY Message Board DApp',
      description: 'Decentralized campus message board application built on blockchain technology. Built using Ganache local network and MetaMask for cryptographic wallet signatures.',
      techStack: ['Blockchain', 'Ganache', 'MetaMask', 'Web3.js'],
      image: umyMessageBoardImage,
      githubLink: 'https://github.com/Ridhorizqullah/dapp_pesanmhs.git',
    },
    {
      title: 'FreelanceHub Platform',
      description: 'Online services marketplace linking student freelancers with potential clients. Features service posting, project tracking, order handling, and relational database storage.',
      techStack: ['React', 'Node.js', 'Express', 'MySQL'],
      image: freelanceHubImage,
      githubLink: 'https://github.com/Ridhorizqullah/FreelanceHub.git',
    },
    {
      title: 'Kotlin Student Management System',
      description: 'Native Android application for student records administration. Integrates with RESTful backend endpoints, input validation routines, and local database synchronization.',
      techStack: ['Kotlin', 'Android', 'REST API', 'MySQL'],
      image: kotlinStudentImage,
      githubLink: 'https://github.com/Ridhorizqullah/QuestAPI_131.git',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Featured software engineering and product design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-xs font-medium transition-colors"
                  >
                    <span>{project.linkType === 'figma' ? 'View in Figma' : 'View Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md text-xs font-medium transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}