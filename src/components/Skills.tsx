import {
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Palette,
  Terminal,
} from 'lucide-react';

interface SkillGroup {
  category: string;
  subtitle: string;
  icon: any;
  color: string;
  items: { name: string; tag?: string }[];
}

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      subtitle: 'Core programming & scripting',
      icon: Code2,
      color: '#38BDF8',
      items: [
        { name: 'JavaScript', tag: 'ES6+' },
        { name: 'TypeScript', tag: 'Typed' },
        { name: 'Python', tag: 'AI/Data' },
        { name: 'C#', tag: '.NET' },
        { name: 'Kotlin', tag: 'Android' },
        { name: 'Dart', tag: 'Flutter' },
        { name: 'HTML5 & CSS3', tag: 'Semantic' },
        { name: 'SQL', tag: 'Relational' },
      ],
    },
    {
      category: 'Frameworks',
      subtitle: 'Frontend, backend & mobile runtimes',
      icon: Layers,
      color: '#0EA5E9',
      items: [
        { name: 'React', tag: 'SPA' },
        { name: 'Flutter', tag: 'Mobile' },
        { name: 'Laravel', tag: 'PHP/MVC' },
        { name: 'Node.js & Express', tag: 'Backend' },
        { name: 'Tailwind CSS', tag: 'Styling' },
        { name: '.NET Framework', tag: 'C#' },
        { name: 'Vite', tag: 'Tooling' },
      ],
    },
    {
      category: 'Databases',
      subtitle: 'Relational & document storage',
      icon: Database,
      color: '#38BDF8',
      items: [
        { name: 'PostgreSQL', tag: 'Internship' },
        { name: 'MySQL', tag: 'Production' },
        { name: 'SQL Server', tag: 'Academic' },
        { name: 'Room Database', tag: 'Android' },
        { name: 'Firebase Firestore', tag: 'Cloud' },
      ],
    },
    {
      category: 'AI & Data',
      subtitle: 'ML workflows & API integrations',
      icon: Sparkles,
      color: '#0EA5E9',
      items: [
        { name: 'Google Gemini API', tag: 'LLM' },
        { name: 'RAG Pipelines', tag: 'Embeddings' },
        { name: 'OpenCV', tag: 'Vision' },
        { name: 'ChromaDB', tag: 'Vector DB' },
        { name: 'n8n Automation', tag: 'Workflows' },
      ],
    },
    {
      category: 'Web3',
      subtitle: 'Decentralized contracts & crypto',
      icon: Cpu,
      color: '#38BDF8',
      items: [
        { name: 'Solidity', tag: 'ERC-721' },
        { name: 'Web3.js', tag: 'DApps' },
        { name: 'MetaMask', tag: 'Signatures' },
        { name: 'Ganache', tag: 'Local Testnet' },
      ],
    },
    {
      category: 'UI/UX Design',
      subtitle: 'Interface architecture & prototyping',
      icon: Palette,
      color: '#0EA5E9',
      items: [
        { name: 'Figma', tag: 'Design Systems' },
        { name: 'Prototyping', tag: 'Hifi' },
        { name: 'Mobile Design', tag: 'iOS/Android' },
        { name: 'Wireframing', tag: 'User Flows' },
      ],
    },
    {
      category: 'Tools & DevOps',
      subtitle: 'Engineering toolchains & containers',
      icon: Terminal,
      color: '#38BDF8',
      items: [
        { name: 'Docker', tag: 'Certified 2026' },
        { name: 'Git & GitHub', tag: 'VCS' },
        { name: 'RESTful APIs', tag: 'Architecture' },
        { name: 'Postman', tag: 'Testing' },
        { name: 'Android Studio', tag: 'IDE' },
        { name: 'XAMPP', tag: 'Environment' },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-28 border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
              Technology Stack
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-xs">
            Verified technologies applied across production and academic systems.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillGroups.map((group) => {
            const IconComp = group.icon;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 hover:bg-[#111C28] transition-all duration-300 flex flex-col justify-between gap-4 group shadow-sm hover:shadow-[0_4px_20px_rgba(3,105,161,0.12)]"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/[0.06] text-[#38BDF8] group-hover:border-[#0EA5E9]/30 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                          {group.category}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-mono leading-tight mt-0.5">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-[#0A0F14] px-1.5 py-0.5 rounded border border-white/[0.06] flex-shrink-0">
                      {group.items.length}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.05]" />

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="tech-tag"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#0EA5E9]/50 flex-shrink-0" />
                        <span>{item.name}</span>
                        {item.tag && (
                          <span className="text-[10px] text-slate-500">({item.tag})</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}