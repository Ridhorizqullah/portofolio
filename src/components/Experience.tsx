export function Experience() {
  const timeline = [
    {
      type: 'Work Experience',
      title: 'Junior Backend Developer Intern',
      organization: 'Ministry of Industry, Republic of Indonesia',
      period: 'Apr 2026 – Jun 2026',
      description: 'Developed and tested RESTful API endpoints for internal government module data exchange, optimized queries, and implemented MVC architecture.',
      achievements: [
        'Developed and tested RESTful API endpoints for data exchange between internal modules (Laravel, PostgreSQL)',
        'Helped design relational database schemas and optimize PostgreSQL queries for higher performance',
        'Applied clean MVC structure and debugged regularly with the development team',
      ],
    },
    {
      type: 'Education',
      title: 'S1 Informatics (Bachelor of Computer Science)',
      organization: 'Universitas Muhammadiyah Yogyakarta',
      period: '2023 – Present',
      description: 'Final-year Informatics student with high academic standing specializing in Data Analytics, Computer Vision, and Artificial Intelligence.',
      achievements: [
        'GPA: 3.51 / 4.00',
        'Concentration: Data Analytics & Computer Vision',
        'Capstone Project: Smart Agriculture AI Assistant (RAG Pipeline, ChromaDB & WhatsApp Cloud API)',
      ],
    },
    {
      type: 'Certification',
      title: 'Samsung Innovation Campus Batch 6: AI in Everyday Life',
      organization: 'Samsung & Hacktiv8 Indonesia',
      period: 'Jan 2025',
      description: 'Completed Stage 1 of Samsung Innovation Campus Batch 6 focusing on practical AI engineering principles and machine learning integration.',
      achievements: [
        'Studied AI fundamentals, text & vision models, and real-world system applications',
        'Completed applied machine learning assignments and earned formal certification',
      ],
    },
    {
      type: 'Competition',
      title: 'Participant, UINIC 7.0 National UI/UX Design Competition',
      organization: 'UIN Sunan Kalijaga',
      period: 'Dec 2024',
      description: 'Competed at national level with "Designing Intuitive Experiences for a Sustainable Digital Future" solving real user pain-points.',
      achievements: [
        'Created interactive Figma prototypes with design systems and user journey flows',
        'Presented user-centric digital architecture to the national evaluation panel',
      ],
    },
    {
      type: 'Workshop',
      title: 'AI Cloud Class: How is AI Changing The World',
      organization: 'MSI x Tirto.id',
      period: 'Nov 2024',
      description: 'Explored scalable cloud architectures powering large language models and modern artificial intelligence systems.',
      achievements: [
        'Gained in-depth knowledge on cloud GPU infrastructure and AI service orchestration',
        'Received Certificate of Appreciation from MSI and Tirto.id',
      ],
    },
    {
      type: 'Organization',
      title: 'Media & Promotion Division (MEDPRO)',
      organization: 'Keluarga Mahasiswa Teknologi Informasi (KMTI) UMY',
      period: '2024 – 2025',
      description: 'Active division member producing tech content, managing social media campaigns, and promoting student development workshops.',
      achievements: [
        'Managed social communications and multimedia branding for informatics community',
        'Collaborated across divisions to publish developer workshops and event materials',
      ],
    },
    {
      type: 'Organization',
      title: 'Event Division Member',
      organization: 'IT SPECTA 2024',
      period: 'Apr 2024 – Jun 2024',
      description: 'Coordinated operational flow and participant engagement for major annual IT gathering with 500+ participants.',
      achievements: [
        'Coordinated event execution and technical staging for 500+ attendees',
        'Ensured seamless scheduling and speaker coordination across multiple IT sessions',
      ],
    },
    {
      type: 'Organization',
      title: 'MATAF Equipment Division',
      organization: 'Prodi Teknologi Informasi UMY',
      period: '2024',
      description: 'Handled technical logistics, device infrastructure, and stage hardware setups.',
      achievements: [
        'Managed equipment workflows and technical sound/display setups',
        'Ensured zero technical downtime during multi-session ceremonies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Work experience, academic background, and organizational activities
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 space-y-10 pl-6 sm:pl-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Minimal dot node instead of big flashy icon circle */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600"></div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700/60">
                    {item.period}
                  </span>
                </div>

                <div className="text-slate-300 text-sm font-medium mb-3">
                  {item.organization}
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {item.achievements && (
                  <ul className="space-y-1.5">
                    {item.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-slate-600 mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}