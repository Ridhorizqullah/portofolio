import { useState } from 'react';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Eye, X } from 'lucide-react';
import { Card3D } from './3d/Card3D';

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

export type ProjectCategory = 'ALL' | 'WEB' | 'MOBILE' | 'AI' | 'WEB3' | 'UI/UX';

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  categories: ('WEB' | 'MOBILE' | 'AI' | 'WEB3' | 'UI/UX')[];
  link?: string;
  githubLink?: string;
  linkType?: 'figma' | 'github' | 'live';
  featured?: boolean;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'presensi-app',
      number: '01',
      title: 'PresensiApp — Geolocation & Camera Verification',
      description:
        'Mobile and web attendance management system built with real-time GPS geolocation verification and camera photo capture for attendance validation. Features an administrative portal detecting proximity anomalies.',
      techStack: ['Flutter', 'Node.js', 'Express', 'Geolocation API', 'Camera API'],
      image: presensiAppImage,
      categories: ['MOBILE', 'WEB'],
      githubLink: 'https://github.com/C-PPAW-TI503P-2025/PRKPAW-20230140131',
      featured: true,
    },
    {
      id: 'getkom-ui',
      number: '02',
      title: 'GetKom UI/UX Design System',
      description:
        'Comprehensive mobile E-Commerce UI/UX design created in Figma with 30+ screens, reusable component tokens, user onboarding flows, custom keyboard, and structured design hierarchy.',
      techStack: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
      image: getkomUIImage,
      categories: ['UI/UX'],
      link: 'https://www.figma.com/community/file/1574343962403501803',
      linkType: 'figma',
    },
    {
      id: 'n8n-bot',
      number: '03',
      title: 'n8n AI Telegram Bot Workflow',
      description:
        'Automated multi-agent AI pipeline engineered with n8n, connecting Telegram Bot API with Google Gemini LLM for conversational context retention and automated workflow triggering.',
      techStack: ['n8n', 'Google Gemini API', 'Telegram API', 'Workflow Automation'],
      image: n8nTelegramBotImage,
      categories: ['AI'],
      githubLink: 'https://github.com/Ridhorizqullah',
    },
    {
      id: 'nft-contract',
      number: '04',
      title: 'NFT Marketplace Smart Contract',
      description:
        'Decentralized ERC-721 token smart contract on Ethereum testnet with Ganache local deployment and MetaMask Web3 wallet signature integration.',
      techStack: ['Solidity', 'Ethereum', 'Web3.js', 'Ganache', 'MetaMask'],
      image: nftSmartContractImage,
      categories: ['WEB3'],
      githubLink: 'https://github.com/Ridhorizqullah/NFT-Blockhain.git',
    },
    {
      id: 'gemini-chat',
      number: '05',
      title: 'Gemini AI Conversational Assistant',
      description:
        'Responsive web application utilizing Google Gemini API for fast natural language processing, prompt engineering, and clean markdown stream rendering.',
      techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Google Gemini API'],
      image: geminiChatImage,
      categories: ['AI', 'WEB'],
      githubLink: 'https://github.com/Ridhorizqullah/Web-ai.git',
    },
    {
      id: 'sms-csharp',
      number: '06',
      title: 'Student Management System Web',
      description:
        'Academic administration system built on ASP.NET MVC architecture with C# and Microsoft SQL Server, featuring full transactional CRUD operations and report exports.',
      techStack: ['ASP.NET MVC', 'C#', 'SQL Server', '.NET Framework'],
      image: mahasiswaAppImage,
      categories: ['WEB'],
      githubLink: 'https://github.com/Ridhorizqullah/aplikasi-form-mahasiswa.git',
    },
    {
      id: 'alorent-camera',
      number: '07',
      title: 'Alorent Camera Equipment Rental',
      description:
        'Mobile application for camera and audiovisual gear rental, equipped with real-time inventory tracking, booking validation, and Firebase state management.',
      techStack: ['Kotlin', 'Flutter', 'Dart', 'Firebase'],
      image: alorentImage,
      categories: ['MOBILE'],
      githubLink: 'https://github.com/Ridhorizqullah/alorent-camera.git',
    },
    {
      id: 'umy-dapp',
      number: '08',
      title: 'UMY Message Board DApp',
      description:
        'Decentralized campus guestbook and message ledger deployed on Ethereum blockchain, allowing students to publish cryptographically signed immutable messages.',
      techStack: ['Solidity', 'Web3.js', 'MetaMask', 'Ganache'],
      image: umyMessageBoardImage,
      categories: ['WEB3'],
      githubLink: 'https://github.com/Ridhorizqullah/dapp_pesanmhs.git',
    },
    {
      id: 'freelance-hub',
      number: '09',
      title: 'FreelanceHub Platform UI',
      description:
        'Complete digital marketplace platform UI system for student freelancers and clients, featuring service catalogs, order management, and responsive dashboard views.',
      techStack: ['Figma', 'React', 'Node.js', 'Express', 'MySQL'],
      image: freelanceHubImage,
      categories: ['UI/UX', 'WEB'],
      githubLink: 'https://github.com/Ridhorizqullah/FreelanceHub.git',
    },
    {
      id: 'kotlin-sms',
      number: '10',
      title: 'Kotlin Student Management System',
      description:
        'Native Android mobile application built with Kotlin, Coroutines, Android SDK, and Room Database following clean MVVM architecture principles.',
      techStack: ['Kotlin', 'Android SDK', 'MVVM', 'Coroutines', 'Room DB'],
      image: kotlinStudentImage,
      categories: ['MOBILE'],
      githubLink: 'https://github.com/Ridhorizqullah/QuestAPI_131.git',
    },
  ];

  const filterTabs: ProjectCategory[] = ['ALL', 'WEB', 'MOBILE', 'AI', 'WEB3', 'UI/UX'];

  const filteredProjects =
    activeCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="portfolio-section-spacing border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-header-title">
              Selected Work
            </h2>
          </div>
          <p className="section-header-caption">
            A curated collection of verified software, mobile, AI, Web3, and interface design systems.
          </p>
        </div>

        {/* Dynamic Category Filter Pills - Centered Capsule Bar */}
        <div className="flex flex-col items-center justify-center gap-3.5">
          <div className="portfolio-filter-container">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab;
              const count =
                tab === 'ALL'
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(tab)).length;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`portfolio-filter-tab ${isActive ? 'active' : ''}`}
                >
                  <span>{tab}</span>
                  <span className={`portfolio-filter-count ${isActive ? 'active' : ''}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1620] border border-white/[0.06] text-xs font-mono text-slate-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>
              Showing <strong className="text-white font-semibold">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'} in <span className="text-[#38BDF8] font-semibold">{activeCategory}</span>
            </span>
          </div>
        </div>

        {/* Project Cards Grid - Compact, Balanced, Centered */}
        <div key={activeCategory} className="portfolio-cards-grid animate-in fade-in duration-300">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card-item">
              <Card3D className="w-full h-full rounded-2xl flex flex-col">
                <div className="w-full h-full bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
                  <div>
                    {/* Image container - Compact 150px height with smooth hover zoom */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="portfolio-card-img-wrapper cursor-pointer group/img"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-card-img group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1620] via-transparent to-transparent opacity-60" />

                      {/* Top badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A0F14]/90 backdrop-blur-md text-slate-300 border border-white/[0.08]">
                            {project.number}
                          </span>
                          {project.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#0369A1]/90 backdrop-blur-md text-white border border-[#0EA5E9]/50 shadow-sm">
                              <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]" />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {project.categories.map((cat) => (
                            <span
                              key={cat}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A0F14]/90 backdrop-blur-md text-[#38BDF8] border border-[#0EA5E9]/30"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover quick preview button overlay */}
                      <div className="absolute inset-0 bg-[#0369A1]/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <span className="px-3 py-1.5 rounded-lg bg-[#0A0F14]/90 text-white text-xs font-mono flex items-center gap-1.5 border border-white/[0.1] shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>Quick Preview</span>
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-2.5">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug cursor-pointer line-clamp-1"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 min-h-[2.5rem]">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A0F14] text-slate-300 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#0A0F14] text-slate-500 border border-white/[0.06]">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2 border-t border-white/[0.04] mt-2 pt-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                      >
                        <span>{project.linkType === 'figma' ? 'Figma' : 'Live Demo'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0A0F14] hover:bg-white/[0.06] text-slate-200 border border-white/[0.08] hover:border-white/[0.15] rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-400" />
                        <span>Source</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 bg-[#0A0F14] hover:bg-white/[0.06] text-slate-400 hover:text-[#38BDF8] border border-white/[0.08] rounded-lg transition-colors cursor-pointer"
                      title="View Details"
                      aria-label="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* Fullscreen Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#0E1620] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.1] shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b border-white/[0.08] bg-[#0A0F14] p-2 sm:p-4 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-80 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-[#0E1620]/90 text-slate-400 hover:text-white p-2 rounded-lg border border-white/[0.1] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#38BDF8]">
                    PROJECT {selectedProject.number}
                  </span>
                  <div className="flex gap-1.5">
                    {selectedProject.categories.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0A0F14] text-[#38BDF8] border border-[#0EA5E9]/30"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Technologies &amp; Architecture
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0A0F14] text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-xl text-xs font-mono font-medium transition-all shadow-md cursor-pointer"
                    >
                      <span>{selectedProject.linkType === 'figma' ? 'Open in Figma' : 'Live Preview'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0F14] hover:bg-white/[0.06] text-white border border-white/[0.1] rounded-xl text-xs font-mono font-medium transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4 text-[#38BDF8]" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="ml-auto px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}