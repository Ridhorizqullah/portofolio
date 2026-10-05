import { Code2, Server, BrainCircuit } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

export function About() {
  const capabilities = [
    {
      num: '01',
      title: 'Web & Mobile Engineering',
      desc: 'Developing responsive full-stack web applications and native/cross-platform mobile apps with clean architectural patterns.',
      skills: ['React', 'TypeScript', 'Flutter', 'Kotlin', 'Tailwind CSS', 'Android SDK'],
      icon: Code2,
    },
    {
      num: '02',
      title: 'Backend & API Engineering',
      desc: 'High-reliability RESTful API endpoints, relational database schemas, query optimization, and containerized deployment workflows.',
      skills: ['Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'RESTful APIs', 'ASP.NET MVC'],
      icon: Server,
    },
    {
      num: '03',
      title: 'AI, Data & Creative Tech',
      desc: 'Computer vision models, retrieval-augmented generation (RAG), conversational LLM APIs, and Web3 smart contract experimentation.',
      skills: ['Python', 'OpenCV', 'Google Gemini', 'ChromaDB', 'Web3.js', 'Solidity'],
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="about" className="pt-20 sm:pt-28 pb-28 sm:pb-36 border-b border-white/[0.08] bg-[#0A0F14] relative">
      {/* Subtle Ambient Ocean Lighting */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* =================================================== */}
        {/* 01. EDITORIAL PROFILE & STORY                       */}
        {/* =================================================== */}

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6 mb-12 lg:mb-16">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
              About Me
            </h1>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm sm:text-right leading-relaxed">
            Bridging software engineering, robust backend systems, and modern creative technology.
          </p>
        </div>

        {/* Editorial 2-Column Profile Grid */}
        <div className="about-editorial-grid items-start">
          {/* Left Column: Portrait & Meta (~35%) */}
          <div className="w-full max-w-[380px] mx-auto lg:mx-0 space-y-4">
            {/* Portrait Image */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0E1620] relative group shadow-2xl">
              <img
                src={profilePhoto}
                alt="Muhammad Ridho Rizqullah"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '4/5', maxHeight: '380px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/90 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E1620]/90 backdrop-blur-md border border-white/[0.08]">
                <div className="text-white font-semibold text-sm">Muhammad Ridho Rizqullah</div>
                <div className="text-xs text-[#38BDF8] font-mono mt-0.5">
                  Creative Developer &bull; Yogyakarta
                </div>
              </div>
            </div>

            {/* Compact Clean Metadata Block (Section 08) */}
            <div className="p-4 rounded-xl bg-[#0E1620] border border-white/[0.08] space-y-3">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">
                  Education
                </span>
                <div className="text-xs font-semibold text-white">Informatics — UMY</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  GPA <span className="text-[#38BDF8] font-semibold">3.51</span> / 4.00
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">
                  Experience
                </span>
                <div className="text-xs font-semibold text-white">Junior Backend Developer Intern</div>
                <div className="text-xs text-slate-400 mt-0.5">Balai Diklat Industri Yogyakarta</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Kementerian Perindustrian RI
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story (~65%) */}
          <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1620]/60 border border-white/[0.08] space-y-5">
              <p>
                I am a final-year Informatics student at{' '}
                <strong className="text-white font-medium">Universitas Muhammadiyah Yogyakarta</strong>{' '}
                specializing in{' '}
                <strong className="text-white font-medium">Data Analytics and Computer Vision</strong>,
                holding a cumulative GPA of{' '}
                <span className="font-mono text-white bg-white/[0.08] px-2 py-0.5 rounded border border-white/[0.06]">
                  3.51 / 4.00
                </span>
                .
              </p>

              <p>
                During my professional internship at the{' '}
                <strong className="text-white font-medium">
                  Balai Diklat Industri Yogyakarta (Kementerian Perindustrian RI)
                </strong>
                , I served as a Junior Backend Developer — architecting and evaluating RESTful API endpoints
                for inter-module data synchronization using{' '}
                <span className="text-white font-medium">Laravel</span> and{' '}
                <span className="text-white font-medium">PostgreSQL</span>, optimizing complex database
                queries, and collaborating within structured agile sprints.
              </p>

              <p>
                My engineering approach is grounded in problem solving and full-lifecycle development:
                from user-centric wireframes and design systems in Figma, down to clean MVC/MVVM
                software implementations across Web, native Android (Kotlin), cross-platform Flutter,
                and applied AI automation workflows.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-[#0A0F14] border border-white/[0.06]">
                  Yogyakarta, Indonesia
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0A0F14] border border-white/[0.06]">
                  Available for Internship
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0A0F14] border border-white/[0.06]">
                  Data Analytics &amp; Computer Vision
                </span>
              </div>
            </div>
          </div>
        </div>

      
        <div id="capabilities" className="scroll-mt-24 mt-20 sm:mt-24 pt-16 sm:pt-20 border-t border-white/[0.08]">
          {/* Capabilities Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-4">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                Engineering Disciplines
              </h2>
            </div>
            <p className="text-slate-400 text-sm font-mono max-w-sm sm:text-right leading-relaxed">
              Core technical disciplines applied across production, internship, and capstone software builds.
            </p>
          </div>

          {/* 3 Balanced Full-Width Cards */}
          <div className="capabilities-grid">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.num}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 hover:bg-[#111C28] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#38BDF8] bg-[#0A0F14] px-2.5 py-1 rounded border border-white/[0.06]">
                        {cap.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#0A0F14] text-slate-400 group-hover:text-[#38BDF8] group-hover:border-[#0EA5E9]/30 border border-white/[0.06] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {cap.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Compact Technology Tags (Section 10) */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {cap.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="tech-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}