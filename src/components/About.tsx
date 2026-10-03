import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-4 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm mt-1">Background and technical focus</p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Profile / Coding Photo */}
          <div className="md:col-span-4">
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBkYXJrfGVufDF8fHx8MTc2NjI5Mzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-8 space-y-6">
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-xl border border-slate-800 text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                I am a final-year Informatics student at Universitas Muhammadiyah Yogyakarta (<span className="text-emerald-400 font-semibold">GPA 3.51/4.00</span>) concentrating in Data Analytics and Computer Vision. My work revolves around building practical AI implementations, including Retrieval-Augmented Generation (RAG) pipelines, text embeddings, and vector indexing integrated with production APIs.
              </p>
              <p>
                During my backend development internship at the <span className="text-white font-medium">Ministry of Industry of Indonesia</span>, I engineered RESTful API endpoints using Laravel and PostgreSQL, optimized query performance, and practiced collaborative software lifecycle patterns within agile sprints.
              </p>
              <p className="text-slate-400 text-sm">
                Comfortable bridging the gap between machine learning models and robust backend architectures to build reliable, well-documented software solutions.
              </p>
            </div>

            {/* Core Competency Pillars (Clean minimal text cards without gaudy icons) */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                <div className="text-white font-medium text-sm mb-1">Multimodal AI & RAG</div>
                <div className="text-xs text-slate-400">Embeddings, ChromaDB, vector search & retrieval pipelines</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                <div className="text-white font-medium text-sm mb-1">Data & Analytics</div>
                <div className="text-xs text-slate-400">Python (Pandas, NumPy), SQL query optimization & OpenCV</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                <div className="text-white font-medium text-sm mb-1">Backend Engineering</div>
                <div className="text-xs text-slate-400">FastAPI, Laravel, PostgreSQL, Docker containerization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}