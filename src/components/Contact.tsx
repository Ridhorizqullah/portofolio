import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a subject.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }

    // Set loading state
    setStatus('loading');
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status === 'error') setStatus('idle');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28 border-b border-white/[0.08] bg-[#0A0F14] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              07 // Connect &amp; Collaborate
            </span>
            <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-tight mt-1">
              Let&apos;s Build <br className="hidden sm:inline" />
              <span className="gradient-text-ocean">
                Something.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Have an idea, project, or opportunity? Let&apos;s talk and build reliable systems together.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0E1620] border border-white/[0.08] space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I am available for software engineering roles, full-stack web/mobile development, backend architecture, and AI integrations.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href="mailto:ridhorizqullah3@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0A0F14] hover:bg-[#131E2B] border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#0E1620] text-[#38BDF8] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">EMAIL</div>
                    <div className="text-sm text-slate-200 group-hover:text-white truncate font-mono">
                      ridhorizqullah3@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href="https://wa.me/6281249934103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0A0F14] hover:bg-[#131E2B] border border-white/[0.06] hover:border-[#0EA5E9]/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#0E1620] text-[#38BDF8] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">PHONE / WHATSAPP</div>
                    <div className="text-sm text-slate-200 group-hover:text-white truncate font-mono">
                      +62 812-4993-4103
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0A0F14] border border-white/[0.06]">
                  <div className="p-2.5 rounded-lg bg-[#0E1620] text-[#38BDF8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">LOCATION</div>
                    <div className="text-sm text-slate-300 font-mono">
                      Yogyakarta, Indonesia
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">PROFILES:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Ridhorizqullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F14] hover:bg-[#131E2B] text-slate-300 hover:text-white border border-white/[0.06] hover:border-[#0EA5E9]/30 text-xs font-mono transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0F14] hover:bg-[#131E2B] text-slate-300 hover:text-white border border-white/[0.06] hover:border-[#0EA5E9]/30 text-xs font-mono transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0E1620] border border-white/[0.08] shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                <p className="text-sm text-slate-400">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-[#0369A1]/20 border border-[#0EA5E9]/40 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Message dispatched successfully!</div>
                    <div className="text-xs text-slate-300">
                      Thank you for reaching out. I will respond to your email promptly.
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-red-300 font-mono">{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                      Your Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F14] border border-white/[0.08] focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] text-sm text-white placeholder-slate-600 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                      Email Address <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F14] border border-white/[0.08] focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] text-sm text-white placeholder-slate-600 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                    Subject <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Web Project"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F14] border border-white/[0.08] focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] text-sm text-white placeholder-slate-600 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                    Message <span className="text-[#38BDF8]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F14] border border-white/[0.08] focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] text-sm text-white placeholder-slate-600 transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0369A1] hover:bg-[#0EA5E9] disabled:opacity-60 text-white rounded-xl text-sm font-mono font-medium transition-all shadow-[0_0_20px_rgba(3,105,161,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}