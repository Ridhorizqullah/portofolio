interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C#', level: 80 },
        { name: 'Kotlin', level: 80 },
        { name: 'Dart', level: 75 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js & Express', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: '.NET Framework', level: 75 },
      ],
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'SQL Server', level: 80 },
        { name: 'Firebase', level: 75 },
      ],
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Web3.js', level: 75 },
        { name: 'MetaMask Integration', level: 75 },
        { name: 'Ganache', level: 70 },
        { name: 'Smart Contracts (Solidity)', level: 65 },
      ],
    },
    {
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Mobile Design', level: 80 },
        { name: 'Wireframing', level: 80 },
      ],
    },
    {
      title: 'Tools & APIs',
      skills: [
        { name: 'RESTful API', level: 85 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'XAMPP', level: 75 },
        { name: 'Geolocation API', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Languages, frameworks, and tools used across development workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4"
            >
              <h3 className="text-base font-semibold text-white border-b border-slate-800 pb-3">
                {category.title}
              </h3>

              <div className="space-y-3.5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 font-sans text-sm">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}