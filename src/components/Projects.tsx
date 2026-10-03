import { ExternalLink, Github, Calendar } from 'lucide-react';
import smartAgricultureImage from '../assets/project-smart-agriculture.jpg';
import iotAttendanceImage from '../assets/project-iot-attendance.jpg';
import smartLightImage from '../assets/project-smart-light.jpg';
import presensiAppImage from '../assets/3cba048768d1a0458c63f067141013098314100f.png';
import n8nTelegramBotImage from '../assets/141a9b6ef764dd05fbb012d7404335fcc3d4adfd.png';
import geminiChatImage from '../assets/f41fc61057c42ef5ca992435141255b79efd6025.png';
import getkomUIImage from '../assets/b61ac32ecaa1cb9a264f5db79586c05f13d5cdad.png';
import freelanceHubImage from '../assets/cea542adc64d3b948d370106fd1ffb702976f517.png';
import nftSmartContractImage from '../assets/fcc51c954a2f6ee1df072d0b930005c83258c157.png';
import alorentImage from '../assets/c8f6ad01f6c64c2126ec04bb258c62afde448f49.png';
import mahasiswaAppImage from '../assets/4dc9655d10547328c4c766f7721159c560ce1d2a.png';
import umyMessageBoardImage from '../assets/8fecb7a802bc85e4a76345b66e736e338a5c61cb.png';
import kotlinStudentImage from '../assets/a1c04aee8c9f72ed3222c7315404934a9d556ed4.png';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  period?: string;
  featured?: boolean;
  link?: string;
  githubLink?: string;
  linkType?: 'figma' | 'github' | 'live';
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Smart Agriculture AI Assistant (Capstone Project)',
      description: 'Developing a RAG-based assistant that answers local farmers\' crop-problem questions by retrieving from a domain knowledge base. Built the retrieval pipeline (document preparation, embedding generation, ChromaDB vector indexing) and FastAPI service connected to WhatsApp Cloud API. Conducted black-box testing for accuracy & latency; documented with UML and ERD.',
      techStack: ['Python', 'FastAPI', 'ChromaDB', 'SentenceTransformers', 'WhatsApp Cloud API', 'PostgreSQL'],
      image: smartAgricultureImage,
      period: 'Mar 2026 – Present',
      featured: true,
      githubLink: 'https://github.com/Ridhorizqullah',
    },
    {
      title: 'IoT Campus Attendance System (Smart RFID & Cloud Database)',
      description: 'Built a real-time attendance prototype connecting RFID reader, microcontroller hardware, REST API, and Supabase cloud PostgreSQL. Implemented duplicate-scan validation and reliable backend synchronization for automated student logging.',
      techStack: ['PHP Laravel', 'Supabase (PostgreSQL)', 'Microcontroller', 'RFID', 'REST API'],
      image: iotAttendanceImage,
      period: '2025 – 2026',
      featured: true,
      githubLink: 'https://github.com/Ridhorizqullah',
    },
    {
      title: 'PresensiApp — Attendance Verification with Geolocation & Camera',
      description: 'A web attendance application with real-time GPS geolocation verification and live camera capture for fraud prevention. Includes an admin dashboard that automatically flags location anomalies and exports daily logs.',
      techStack: ['React.js', 'Node.js', 'Express', 'Geolocation API', 'Camera API'],
      image: presensiAppImage,
      period: '2025',
      featured: true,
      githubLink: 'https://github.com/C-PPAW-TI503P-2025/PRKPAW-20230140131',
    },
    {
      title: 'Smart Light Home Automation System',
      description: 'Built a web-monitored smart-lighting prototype with ESP32 microcontroller and multi-channel relay modules. Tested load switching from schematics with real-time web dashboard controls and status feedback.',
      techStack: ['React.js', 'Node.js', 'Express', 'MySQL', 'ESP32', 'Relay'],
      image: smartLightImage,
      period: '2025',
      featured: true,
      githubLink: 'https://github.com/Ridhorizqullah',
    },
    {
      title: 'GetKom UI/UX Design',
      description: 'Complete UI/UX design system for a mobile communication application in Figma. Features comprehensive design components, onboarding flow, interactive keyboard interface, and settings management with modern green-themed aesthetics.',
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
      period: '2025',
      githubLink: 'https://github.com/Ridhorizqullah',
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
      period: '2024',
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
            A showcase of my engineering work in AI, RAG systems, IoT architectures, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl border ${
                project.featured ? 'border-cyan-500/40 shadow-cyan-500/10' : 'border-slate-700'
              } overflow-hidden hover:border-cyan-400/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  {project.period && (
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-400/30 text-cyan-300 text-xs flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{project.period}</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 left-3 bg-cyan-500/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-400/50 text-cyan-300 text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
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