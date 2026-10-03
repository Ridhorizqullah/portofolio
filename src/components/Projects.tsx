import { useState } from 'react';
import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';
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

  // Determine if featured project should be shown as flagship
  const featuredProject = projects.find((p) => p.featured);
  const showFeaturedAsFlagship =
    activeCategory === 'ALL' || (featuredProject && featuredProject.categories.includes(activeCategory));
  const gridProjects = showFeaturedAsFlagship
    ? filteredProjects.filter((p) => !p.featured)
    : filteredProjects;

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-28 border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              03 // Portfolio Showcase
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mt-1.5">
              Selected Work
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-lg">
              A curated collection of verified software, mobile, AI, Web3, and interface design systems.
            </p>
          </div>

          {/* Functional Category Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0E1620] border border-white/[0.08] self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0369A1] text-white font-semibold shadow-[0_0_12px_rgba(3,105,161,0.5)] border border-[#0EA5E9]/50'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Large Featured Flagship Project Card */}
        {showFeaturedAsFlagship && featuredProject && (
          <div className="mb-12">
            <Card3D className="rounded-3xl">
              <div className="rounded-3xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-500 overflow-hidden shadow-2xl group">
                <div className="grid lg:grid-cols-12 gap-0 items-center">
                  {/* Flagship Image */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-[#0A0F14] overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1620] via-transparent to-transparent opacity-60 lg:hidden" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0F14]/90 backdrop-blur-md text-[11px] font-mono text-[#38BDF8] border border-[#0EA5E9]/30 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                        <span>FEATURED FLAGSHIP</span>
                      </span>
                    </div>
                  </div>

                  {/* Flagship Content */}
                  <div className="lg:col-span-5 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>PROJECT {featuredProject.number}</span>
                        <div className="flex items-center gap-2">
                          {featuredProject.categories.map((c) => (
                            <span key={c} className="text-[#38BDF8] bg-[#0A0F14] border border-white/[0.08] px-2.5 py-0.5 rounded text-[11px]">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                        {featuredProject.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {featuredProject.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {featuredProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="tech-tag"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                      {featuredProject.githubLink && (
                        <a
                          href={featuredProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-xl text-xs font-mono font-medium transition-all shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        )}

        {/* 2. Responsive 2-Column / Editorial Grid for Remaining Projects */}
        <div className="grid md:grid-cols-2 gap-7">
          {gridProjects.map((project) => (
            <Card3D key={project.id} className="h-full rounded-2xl">
              <div className="h-full bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
                <div>
                  {/* Image container */}
                  <div className="relative h-52 bg-[#0A0F14] overflow-hidden border-b border-white/[0.06]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0A0F14]/90 backdrop-blur-md text-slate-300 border border-white/[0.08]">
                        {project.number}
                      </span>
                      <div className="flex gap-1">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A0F14] text-[#38BDF8] border border-white/[0.06]"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A0F14] hover:bg-white/[0.06] text-slate-200 border border-white/[0.08] hover:border-white/[0.15] rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}