import { ExternalLink, Github } from 'lucide-react';
import alorentImage from '../assets/c8f6ad01f6c64c2126ec04bb258c62afde448f49.png';
import umyMessageBoardImage from '../assets/8fecb7a802bc85e4a76345b66e736e338a5c61cb.png';
import freelanceHubImage from '../assets/cea542adc64d3b948d370106fd1ffb702976f517.png';
import getkomUIImage from '../assets/b61ac32ecaa1cb9a264f5db79586c05f13d5cdad.png';
import mahasiswaAppImage from '../assets/4dc9655d10547328c4c766f7721159c560ce1d2a.png';
import geminiChatImage from '../assets/f41fc61057c42ef5ca992435141255b79efd6025.png';
import presensiAppImage from '../assets/3cba048768d1a0458c63f067141013098314100f.png';
import kotlinStudentImage from '../assets/a1c04aee8c9f72ed3222c7315404934a9d556ed4.png';
import nftSmartContractImage from '../assets/fcc51c954a2f6ee1df072d0b930005c83258c157.png';
import n8nTelegramBotImage from '../assets/141a9b6ef764dd05fbb012d7404335fcc3d4adfd.png';

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
      title: 'GetKom UI/UX Design',
      description: 'Complete UI/UX design system for a mobile communication application. Features comprehensive design components, onboarding flow, interactive keyboard interface, and settings management with modern green-themed aesthetics.',
      techStack: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      image: getkomUIImage,
      link: 'https://www.figma.com/community/file/1574343962403501803',
      linkType: 'figma',
    },
    {
      title: 'n8n AI Telegram Bot',
      description: 'An intelligent automation workflow built with n8n integrating Telegram Bot API with Google Gemini AI. Features automated message handling, AI-powered responses with chat memory, and seamless integration between Telegram triggers and AI agents for smart conversational experiences.',
      techStack: ['n8n', 'Telegram Bot API', 'Google Gemini AI', 'Workflow Automation', 'AI Agent'],
      image: n8nTelegramBotImage,
    },
    {
      title: 'NFT – Smart Contract',
      description: 'A decentralized NFT marketplace smart contract implementation on Ethereum blockchain. Features ERC-721 token standard, minting functionality, ownership transfer, and secure transaction handling with Web3 integration.',
      techStack: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'ERC-721'],
      image: nftSmartContractImage,
      githubLink: 'https://github.com/Ridhorizqullah/NFT-Blockhain.git',
    },
    {
      title: 'Gemini AI Chat',
      description: 'An intelligent web-based chat application powered by Google\'s Gemini AI API. Features real-time conversation, natural language processing, and a clean, modern purple-themed interface for seamless AI interactions.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      image: geminiChatImage,
      githubLink: 'https://github.com/Ridhorizqullah/Web-ai.git',
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive desktop application for managing student data with full CRUD operations. Features include student registration, data import/export, financial charts, organizational data management, and real-time data analysis.',
      techStack: ['C#', 'SQL Server', 'Windows Forms', '.NET'],
      image: mahasiswaAppImage,
      githubLink: 'https://github.com/Ridhorizqullah/aplikasi-form-mahasiswa.git',
    },
    {
      title: 'Alorent Camera',
      description: 'A modern mobile application for camera rental management built with Flutter. Features authentication, inventory tracking, booking system, and real-time notifications for seamless rental operations.',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      image: alorentImage,
      githubLink: 'https://github.com/Ridhorizqullah/alorent-camera.git',
    },
    {
      title: 'UMY Message Board DApp',
      description: 'A decentralized message board application utilizing blockchain technology. Built with Ganache for local blockchain development and MetaMask integration for secure wallet connections and transactions.',
      techStack: ['Blockchain', 'Ganache', 'MetaMask', 'Web3.js'],
      image: umyMessageBoardImage,
      githubLink: 'https://github.com/Ridhorizqullah/dapp_pesanmhs.git',
    },
    {
      title: 'FreelanceHub',
      description: 'A comprehensive freelance platform designed for Indonesian students. Connects talented freelancers with clients, featuring service listings, project management, and secure payment processing.',
      techStack: ['React', 'Node.js', 'Express', 'MySQL'],
      image: freelanceHubImage,
      githubLink: 'https://github.com/Ridhorizqullah/FreelanceHub.git',
    },
    {
      title: 'PresensiApp',
      description: 'An advanced attendance system with geolocation tracking and camera-based verification. Features real-time check-in/check-out with longitude coordinates, photo capture for attendance proof, admin dashboard with daily reports, and comprehensive user management.',
      techStack: ['React', 'Node.js', 'Express', 'Geolocation API', 'Camera API'],
      image: presensiAppImage,
      githubLink: 'https://github.com/C-PPAW-TI503P-2025/PRKPAW-20230140131',
    },
    {
      title: 'Kotlin Student Management System',
      description: 'A native Android application for student management built with Kotlin. Features RESTful API integration with XAMPP backend, complete CRUD operations for student data including name, address, and phone number, with form validation and real-time synchronization.',
      techStack: ['Kotlin', 'XAMPP', 'REST API', 'Android', 'MySQL'],
      image: kotlinStudentImage,
      githubLink: 'https://github.com/Ridhorizqullah/QuestAPI_131.git',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.linkType === 'figma' ? 'View in Figma' : 'View Details'}
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 rounded-lg transition-all duration-300 border border-slate-600 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}