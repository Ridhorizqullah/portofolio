import { GraduationCap, Briefcase, Calendar, Building2, Users } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: 'work',
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
      type: 'education',
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
      type: 'certification',
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
      type: 'experience',
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
      type: 'certification',
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
      type: 'organization',
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
      type: 'organization',
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
      type: 'organization',
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
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through education and professional development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-green-400 to-cyan-400"></div>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-20">
                {/* Timeline Icon */}
                <div
                  className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.type === 'work'
                      ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/20'
                      : item.type === 'education'
                      ? 'bg-green-500/20 border-2 border-green-400 shadow-lg shadow-green-500/20'
                      : item.type === 'organization'
                      ? 'bg-indigo-500/20 border-2 border-indigo-400'
                      : 'bg-emerald-500/20 border-2 border-emerald-400'
                  }`}
                >
                  {item.type === 'work' ? (
                    <Briefcase className="w-8 h-8 text-cyan-400" />
                  ) : item.type === 'education' ? (
                    <GraduationCap className="w-8 h-8 text-green-400" />
                  ) : item.type === 'organization' ? (
                    <Users className="w-8 h-8 text-indigo-400" />
                  ) : (
                    <Building2 className="w-8 h-8 text-emerald-400" />
                  )}
                </div>

                {/* Content Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-xl">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <h3 className="text-xl text-white">{item.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <div className="text-green-400 mb-3">{item.organization}</div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.achievements && (
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-cyan-400 mt-1">▹</span>
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
      </div>
    </section>
  );
}