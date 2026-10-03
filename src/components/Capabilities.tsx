import { Globe, Smartphone, Database, Layout } from 'lucide-react';
import { Card3D } from './3d/Card3D';

export function Capabilities() {
  const capabilities = [
    {
      num: '01',
      title: 'Web Development',
      description:
        'Building responsive, accessible, and high-performance web applications using modern React ecosystems, TypeScript, and clean modular component architectures.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'ASP.NET MVC', 'Vite', 'HTML5/CSS3'],
      icon: Globe,
    },
    {
      num: '02',
      title: 'Mobile Development',
      description:
        'Developing production-ready mobile apps across native Android and cross-platform stacks with offline SQLite/Room persistence, clean MVVM, and device hardware APIs.',
      tags: ['Kotlin', 'Flutter', 'Android SDK', 'Room DB', 'MVVM', 'Dart'],
      icon: Smartphone,
    },
    {
      num: '03',
      title: 'Backend & API Engineering',
      description:
        'Engineering structured RESTful APIs, relational schema modeling, query optimization, and containerized delivery workflows tested in production environments.',
      tags: ['Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'RESTful APIs', 'SQL Server'],
      icon: Database,
    },
    {
      num: '04',
      title: 'UI/UX Implementation',
      description:
        'Translating complex user journeys and design systems from Figma into pixel-perfect, interactive code with micro-interactions, responsive states, and accessibility.',
      tags: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Wireframing', 'User Flows'],
      icon: Layout,
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              02 // Services &amp; Capabilities
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mt-1">
              What I Build
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Core engineering capabilities developed through academic training, government internship, and real project builds.
          </p>
        </div>

        {/* 4 Bento Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <Card3D key={cap.num} className="h-full rounded-2xl">
                <div className="h-full p-8 rounded-2xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0F14] text-[#38BDF8] border border-white/[0.06]">
                        {cap.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#0A0F14] text-slate-400 group-hover:text-[#38BDF8] group-hover:border-[#0EA5E9]/30 border border-white/[0.06] transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-[#0A0F14] text-slate-300 border border-white/[0.06] group-hover:border-[#0EA5E9]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
