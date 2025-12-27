import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: 'education',
      title: 'Bachelor of Informatics Engineering',
      organization: 'University Muhammadiyah Yogyakarta',
      period: '2023 - 2025',
      description: 'Currently pursuing Bachelor\'s degree in Informatics Engineering with focus on Software Engineering, Web Development, Mobile Development, and Cybersecurity.',
      achievements: [
        'Current GPA: 3.48 / 4.00',
        'Specialized in Full-Stack Development and UI/UX Design',
        'Active in IT Student Organization (KMTI) and multiple tech committees',
      ],
    },
    {
      type: 'experience',
      title: 'Samsung Innovation Campus - AI in Everyday Life',
      organization: 'Samsung Innovation Campus Batch 6 - Hacktiv8 Indonesia',
      period: 'January 2025',
      description: 'Completed Stage 1 of Samsung Innovation Campus Batch 6 2024/2025 program focusing on practical AI applications in everyday life.',
      achievements: [
        'Studied AI fundamentals and real-world applications',
        'Explored AI integration in daily technology usage',
        'Received Certificate of Participation from Samsung & Hacktiv8',
      ],
    },
    {
      type: 'experience',
      title: 'UI/UX Design Competition Participant',
      organization: 'UINIC 7.0 2025 - HMPS Informatika UIN Sunan Kalijaga',
      period: '9 December 2024',
      description: 'Participated in national-level UI/UX Design Competition with theme "Designing Intuitive Experiences for a Sustainable Digital Future".',
      achievements: [
        'Competed in national UI/UX design competition',
        'Designed sustainable and intuitive user experiences',
        'Applied design thinking methodology to real-world problems',
      ],
    },
    {
      type: 'experience',
      title: 'KMTI MEDPRO Division',
      organization: 'Keluarga Mahasiswa Teknologi Informasi UMY',
      period: '2024 - 2025',
      description: 'Serving as active member in MEDPRO (Media & Promotion) Division, responsible for managing social media content and promotional materials.',
      achievements: [
        'Creating engaging content for IT student community',
        'Managing social media platforms and digital campaigns',
        'Collaborating with team to promote tech events and workshops',
      ],
    },
    {
      type: 'experience',
      title: 'MATAF Equipment Division',
      organization: 'Prodi Teknologi Informasi UMY',
      period: '2024',
      description: 'Event Committee member for MATAF with theme "Unlocking Knowledge for Building Progress to Inspiring Future".',
      achievements: [
        'Managed event equipment and technical logistics',
        'Coordinated with team members for smooth event execution',
        'Ensured proper setup and maintenance of event facilities',
      ],
    },
    {
      type: 'experience',
      title: 'Kineidoscope Screening Committee',
      organization: 'MM Kine Klub UMY',
      period: 'November 2024',
      description: 'Served as screening committee member for Kineidoscope campus film festival event.',
      achievements: [
        'Reviewed and evaluated film submissions',
        'Participated in selection process for film festival',
        'Contributed to organizing campus creative event',
      ],
    },
    {
      type: 'experience',
      title: 'AI Workshop Participant',
      organization: 'MSI x Tirto.id - AI Cloud Class',
      period: 'November 2024',
      description: 'Completed "How is AI Changing The World" workshop exploring AI applications and cloud technology impact on modern society.',
      achievements: [
        'Learned about AI and cloud computing integration',
        'Explored real-world AI use cases and industry applications',
        'Received Certificate of Appreciation from MSI and Tirto.id',
      ],
    },
    {
      type: 'experience',
      title: 'Entrepreneurship Seminar Participant',
      organization: 'National Seminar of Entrepreneurship (NSE)#2 - Kemenkes Poltekkes Yogyakarta',
      period: 'October 2024',
      description: 'Participated in National Seminar of Entrepreneurship organized by Health Polytechnic of Yogyakarta, Ministry of Health.',
      achievements: [
        'Attended national-level entrepreneurship seminar',
        'Gained insights on business development and startup ecosystem',
        'Explored entrepreneurship opportunities in technology sector',
      ],
    },
    {
      type: 'experience',
      title: 'IT SPECTA Event Division',
      organization: 'IT SPECTA 2024 - "Big Dreamer Great Achiever"',
      period: 'April - June 2024',
      description: 'Participated as Event Division member for IT SPECTA 2024, coordinating event operations and participant engagement.',
      achievements: [
        'Coordinated with multiple divisions for event execution',
        'Managed participant registration and engagement activities',
        'Contributed to successful IT event with 500+ participants',
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
                  className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${item.type === 'education'
                      ? 'bg-cyan-500/20 border-2 border-cyan-400'
                      : 'bg-green-500/20 border-2 border-green-400'
                    }`}
                >
                  {item.type === 'education' ? (
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  ) : (
                    <Briefcase className="w-8 h-8 text-green-400" />
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