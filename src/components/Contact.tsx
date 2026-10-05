import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Phone, CheckCircle2, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';

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

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Please enter a message (at least 5 characters).');
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
    }, 1000);
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
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header with Dashed Divider */}
        <div className="contact-dashed-divider max-w-4xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight px-6 text-center whitespace-nowrap">
            Contact Us
          </h2>
        </div>

        {/* 2-Column Reference Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Panel: Contact Form */}
          <div className="contact-reference-panel flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-3.5 flex flex-col h-full justify-between" noValidate>
              <div className="space-y-3.5">
                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-[#0369A1]/20 border border-[#0EA5E9]/40 flex items-center gap-2.5 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span className="text-xs text-slate-200 font-mono">
                      Message sent successfully! I will reply shortly.
                    </span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 animate-in fade-in duration-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-xs text-red-300 font-mono">{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div className="contact-input-row">
                  <span className="contact-input-label">Name</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="contact-input-field"
                  />
                </div>

                {/* E-mail */}
                <div className="contact-input-row">
                  <span className="contact-input-label">E-mail</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="contact-input-field"
                  />
                </div>

                {/* Website URL / Subject */}
                <div className="contact-input-row">
                  <span className="contact-input-label">Website URL</span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com or Subject"
                    className="contact-input-field"
                  />
                </div>

                {/* Your Message */}
                <div className="contact-input-row items-start">
                  <span className="contact-input-label pt-2.5">Your Message</span>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="contact-input-field resize-none min-h-[95px]"
                  />
                </div>
              </div>

              {/* Submit Button aligned right */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="contact-send-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                      <span>SENDING</span>
                    </>
                  ) : (
                    <span>SEND</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Panel: Contact Info & Socials */}
          <div className="contact-reference-panel flex flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Sub-column: Vertical Stack of Circular Social Icons */}
            <div className="flex flex-col gap-4 pr-6 sm:pr-8 border-r border-dashed border-white/15 justify-center items-center shrink-0">
              <a
                href="https://linkedin.com/in/ridho-rizqullah-9677b53ab"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-circle"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Ridhorizqullah"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-circle"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/6281249934103"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-circle"
                aria-label="WhatsApp"
                title="WhatsApp / Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Right Sub-column: Direct Contact Details */}
            <div className="flex flex-col justify-center space-y-4 pl-1 sm:pl-2 min-w-0 flex-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Muhammad Ridho Rizqullah
                </h3>
                <div className="text-xs font-mono text-[#38BDF8] mt-1">
                  Creative Developer &bull; Software Engineer
                </div>
              </div>

              <div className="space-y-2 text-sm sm:text-base font-mono">
                <div>
                  <a
                    href="tel:+6281249934103"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    +62 812.4993.4103
                  </a>
                </div>

                <div>
                  <a
                    href="mailto:ridhorizqullah3@gmail.com"
                    className="text-white hover:text-[#38BDF8] font-medium transition-colors break-all"
                  >
                    ridhorizqullah3@gmail.com
                  </a>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed pt-1">
                <div>Yogyakarta, DIY</div>
                <div>Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}