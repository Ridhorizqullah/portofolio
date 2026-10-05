

interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  category: 'Work' | 'Education' | 'Certification' | 'Organization';
  period: string;
  description: string;
  highlights: string[];
}

export function Experience() {
  const experiences: TimelineItem[] = [
    {
      year: '2026',
      role: 'Junior Backend Developer Intern',
      organization: 'Balai Diklat Industri Yogyakarta — Kementerian Perindustrian RI',
      category: 'Work',
      period: 'Apr 2026 – Jun 2026',
      description:
        'Engineered and evaluated RESTful API endpoints for internal government module data exchanges, optimized relational queries, and implemented clean MVC patterns.',
      highlights: [
        'Developed and tested RESTful API endpoints using Laravel and PostgreSQL for government training services',
        'Designed relational database schemas and optimized indexing to reduce query response latency',
        'Practiced collaborative code reviews, debugging, and agile sprint documentation',
      ],
    },
    {
      year: '2023 – Present',
      role: 'S1 Informatika (Bachelor of Computer Science)',
      organization: 'Universitas Muhammadiyah Yogyakarta',
      category: 'Education',
      period: '2023 – Present',
      description:
        'Final-year computer science student with strong academic standing focusing on Data Analytics, Computer Vision, and full-stack software development.',
      highlights: [
        'Cumulative Grade Point Average (GPA): 3.51 / 4.00',
        'Concentration: Data Analytics & Computer Vision',
        'Coursework: Advanced Algorithms, Database Systems, Web & Mobile Engineering, AI & Computer Vision',
      ],
    },
    {
      year: '2025',
      role: 'Samsung Innovation Campus Batch 6: AI in Everyday Life',
      organization: 'Samsung Electronics & Hacktiv8 Indonesia',
      category: 'Certification',
      period: 'Jan 2025',
      description:
        'Completed rigorous Stage 1 technical curriculum on machine learning foundations, computer vision architectures, and practical AI workflow implementations.',
      highlights: [
        'Trained and evaluated supervised/unsupervised machine learning models on real-world datasets',
        'Gained hands-on competency in neural networks, computer vision, and ethical AI deployment',
      ],
    },
    {
      year: '2024',
      role: 'National UI/UX Design Competitor',
      organization: 'UINIC 7.0 National Competition — UIN Sunan Kalijaga',
      category: 'Organization',
      period: 'Dec 2024',
      description:
        'Competed in national UI/UX design competition with project "Designing Intuitive Experiences for a Sustainable Digital Future".',
      highlights: [
        'Built full interactive Figma prototype with comprehensive design system and component variants',
        'Conducted user persona research and presented usability flow to the jury panel',
      ],
    },
    {
      year: '2024',
      role: 'AI Cloud Class: How is AI Changing The World',
      organization: 'MSI Gaming x Tirto.id',
      category: 'Certification',
      period: 'Nov 2024',
      description:
        'Explored scalable cloud computing infrastructure supporting generative AI models, deep learning pipelines, and cloud GPU architectures.',
      highlights: [
        'Deep-dived into distributed GPU clusters and high-throughput LLM hosting architectures',
        'Awarded official Certificate of Appreciation by MSI and Tirto.id',
      ],
    },
    {
      year: '2024 – 2025',
      role: 'Media & Promotion Division (MEDPRO)',
      organization: 'Keluarga Mahasiswa Teknologi Informasi (KMTI) UMY',
      category: 'Organization',
      period: '2024 – 2025',
      description:
        'Managed social communications, visual branding campaigns, and student workshops for the university informatics organization.',
      highlights: [
        'Designed technical event posters, workshop guides, and multimedia announcements',
        'Collaborated across engineering divisions to broadcast tech competitions and seminars',
      ],
    },
    {
      year: '2024',
      role: 'Event Division Member',
      organization: 'IT SPECTA 2024',
      category: 'Organization',
      period: 'Apr 2024 – Jun 2024',
      description:
        'Coordinated event logistics and staging for annual regional IT conference hosting 500+ student attendees and guest industry speakers.',
      highlights: [
        'Managed technical runtime schedules and speaker presentation equipment',
        'Ensured uninterrupted operational flow during day-long technical seminars',
      ],
    },
    {
      year: '2024',
      role: 'Equipment Division Member',
      organization: 'MATAF TI UMY 2024',
      category: 'Organization',
      period: '2024',
      description:
        'Handled hardware setups, audiovisual consoles, and equipment logistics for departmental informatics orientation ceremonies.',
      highlights: [
        'Setup and maintained reliable audio/visual hardware routing throughout sessions',
      ],
    },
  ];

  return (
    <section id="experience" className="portfolio-section-spacing border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-header-title">
              Experience &amp; Journey
            </h2>
          </div>
          <p className="section-header-caption">
            Professional backend internship, formal computer science education, and organizational leadership.
          </p>
        </div>

        {/* Editorial Timeline - Centered */}
        <div className="max-w-3xl mx-auto">
          <div className="relative timeline-track ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {experiences.map((item, idx) => {
              const isWork = item.category === 'Work';
              const isEdu = item.category === 'Education';

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Bullet Marker - Aligned with Card Header */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[43px] top-7 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      isWork
                        ? 'bg-[#0EA5E9] border-[#38BDF8] shadow-[0_0_12px_#0EA5E9]'
                        : isEdu
                        ? 'bg-[#38BDF8] border-[#0284c7]'
                        : 'bg-[#0E1620] border-slate-600 group-hover:border-[#0EA5E9]'
                    }`}
                  />

                  {/* Timeline Card */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 space-y-4 shadow-sm group-hover:shadow-[0_4px_25px_rgba(3,105,161,0.15)]">
                    {/* Card Header Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#0A0F14] text-[#38BDF8] border border-white/[0.08]">
                        {item.period}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        {item.category}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-300 font-medium mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    {item.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-[#0EA5E9] font-mono select-none">&rsaquo;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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