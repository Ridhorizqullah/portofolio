import React from 'react';
import { Code, Layers, Database, Shield, Smartphone, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code className="w-8 h-8" />,
      color: 'cyan',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'Kotlin', level: 80 },
        { name: 'Dart', level: 75 },
        { name: 'Python', level: 70 },
      ],
    },
    {
      title: 'Frameworks',
      icon: <Layers className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: '.NET Framework', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'cyan',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Blockchain & Web3',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'Web3.js', level: 75 },
        { name: 'Ganache', level: 70 },
        { name: 'MetaMask', level: 75 },
        { name: 'Smart Contracts', level: 65 },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'cyan',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Mobile Design', level: 80 },
        { name: 'Wireframing', level: 80 },
      ],
    },
    {
      title: 'Tools & APIs',
      icon: <Shield className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'REST API', level: 85 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'XAMPP', level: 75 },
        { name: 'Geolocation API', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through education, practice, and real-world projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    category.color === 'cyan'
                      ? 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30'
                      : 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30'
                  } transition-colors`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          category.color === 'cyan'
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-400'
                            : 'bg-gradient-to-r from-green-500 to-green-400'
                        }`}
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