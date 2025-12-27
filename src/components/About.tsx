import { Code2, Brain, Laptop } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl blur-xl opacity-30"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBkYXJrfGVufDF8fHx8MTc2NjI5Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Developer"
                className="relative rounded-2xl shadow-2xl w-full max-w-md border border-slate-700"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-2xl mb-4 text-white">
                Passionate About <span className="text-cyan-400">Technology</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a 5th semester Informatics Engineering student at Universitas Muhammadiyah Yogyakarta (UMY)
                with a 3.48 GPA, specializing in Full-Stack Development, UI/UX Design, and Web3 Development.
                I have successfully built 8+ production-ready applications across various platforms including web, mobile, and blockchain.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                As an active member of KMTI (IT Student Family) serving in the Media & Production Division,
                I combine technical expertise with creativity in content creation. My experience includes
                organizing major tech events such as IT SPECTA and MATAF, while continuously expanding my knowledge
                through various workshops and competitions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Recently completed Samsung Innovation Campus (AI in Everyday Life) and participated in
                a national-level UI/UX competition. I'm passionate about creating innovative digital solutions that
                combine cutting-edge technology with user-centered design principles.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center hover:border-cyan-400/50 transition-colors group">
                <Code2 className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-300">Full-Stack Dev</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center hover:border-green-400/50 transition-colors group">
                <Brain className="w-8 h-8 mx-auto mb-2 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-300">AI & Web3</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center hover:border-cyan-400/50 transition-colors group">
                <Laptop className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-300">UI/UX Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}