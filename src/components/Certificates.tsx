import { useState } from 'react';
import { X, Download, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card3D } from './3d/Card3D';

import certDeploymentDocker from '../assets/cert-deployment-docker.png';
import certNSE from 'figma:asset/43050c05b7e4e58d5111ef08efa9a5d413b215d3.png';
import certMSI from 'figma:asset/12ada9ef404e3e643847ffbe1e67fea7b22c7b9c.png';
import certSamsung from 'figma:asset/c2aacce0b55c216cc4e956e179589840bd97c287.png';
import certUINIC from 'figma:asset/f5dc8cf8489e71635d5ccefef75b5125235fa599.png';
import certKineidoscope from 'figma:asset/92e1fb882057e71176f70296f6d81df67cc55b8d.png';
import certKMTI from 'figma:asset/c89362b555f36ee69cb12c9ec30b6871eb509ca2.png';
import certITSpecta from 'figma:asset/5a66c82d72e478d8ba00724a723db97b8830878b.png';
import certMATAF from 'figma:asset/7587b432ce930571bf6fb1271b39832c7d1443dd.png';

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
  certificateNo?: string;
  pdfUrl?: string;
  featured?: boolean;
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 'docker-umy-2026',
      title: 'Sertifikasi Deployment Perangkat Lunak',
      organization: 'PT. Teknologi Kode Indonesia',
      date: 'Januari 2026',
      image: certDeploymentDocker,
      description:
        'Sertifikasi resmi praktikum deployment aplikasi menggunakan teknologi containerization Docker, pengelolaan image, Dockerfile, multi-container orchestration, dan konfigurasi environment.',
      certificateNo: '028/A.4-VIII/TI/I/2026',
      pdfUrl: '/sertifikat-deployment-docker.pdf',
      featured: true,
    },
    {
      id: 'fortinet-nse1',
      title: 'NSE 1 Network Security Associate',
      organization: 'Fortinet Training Institute',
      date: 'Agu 2024',
      image: certNSE,
      description: 'Foundational certification covering threat landscape, cybersecurity fundamentals, and enterprise defense.',
      certificateNo: 'n2rZq4n7Xp',
    },
    {
      id: 'samsung-sic',
      title: 'Samsung Innovation Campus Batch 6: AI in Everyday Life',
      organization: 'Samsung Electronics & Hacktiv8 Indonesia',
      date: 'Jan 2025',
      image: certSamsung,
      description: 'Completion certificate for Stage 1 applied machine learning algorithms, deep neural concepts, and AI architectures.',
    },
    {
      id: 'uinic-uiux',
      title: 'UINIC 7.0 National UI/UX Design Competition',
      organization: 'UIN Sunan Kalijaga Yogyakarta',
      date: 'Des 2024',
      image: certUINIC,
      description: 'National competitor certificate for high-fidelity mobile prototype and sustainable design systems.',
    },
    {
      id: 'msi-ai-cloud',
      title: 'Certificate of Appreciation: AI Cloud Class',
      organization: 'MSI Gaming x Tirto.id',
      date: 'Nov 2024',
      image: certMSI,
      description: 'Certificate for active participation in scalable GPU cloud infrastructures powering large language models.',
    },
    {
      id: 'kineidoscope',
      title: 'Kineidoscope 2024 Short Film Competition',
      organization: 'Komunikasi Penyiaran Islam UMY',
      date: '2024',
      image: certKineidoscope,
      description: 'National film competition participation in visual storytelling and multimedia production.',
    },
    {
      id: 'kmti-medpro',
      title: 'KMTI UMY — Media & Promotion Division',
      organization: 'Keluarga Mahasiswa Teknologi Informasi UMY',
      date: '2024 – 2025',
      image: certKMTI,
      description: 'Official committee certificate acknowledging active contribution to media branding and technical workshops.',
    },
    {
      id: 'it-specta',
      title: 'IT SPECTA 2024 Committee',
      organization: 'Universitas Muhammadiyah Yogyakarta',
      date: 'Jun 2024',
      image: certITSpecta,
      description: 'Event management certificate for technical coordination across a 500+ participant tech summit.',
    },
    {
      id: 'mataf-ti',
      title: 'MATAF TI 2024 Technical Committee',
      organization: 'Prodi Teknologi Informasi UMY',
      date: '2024',
      image: certMATAF,
      description: 'Hardware equipment and technical operations management certificate for student orientation.',
    },
  ];

  const featuredCert = certificates.find((c) => c.featured);
  const secondaryCerts = certificates.filter((c) => !c.featured);

  return (
    <section id="certificates" className="portfolio-section-spacing border-b border-white/[0.08] bg-[#0A0F14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-header-title">
              Certifications
            </h2>
          </div>
          <p className="section-header-caption">
            Formal technical assessments, specialized workshops, and institutional achievements.
          </p>
        </div>

        {/* 1. Featured Main Certificate: Docker UMY 2026 */}
        {featuredCert && (
          <div className="rounded-3xl bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 p-6 sm:p-10 shadow-xl group">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Preview image */}
              <div
                onClick={() => setSelectedCert(featuredCert)}
                className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#0A0F14] border border-white/[0.08] cursor-pointer group/img aspect-[4/3] flex items-center justify-center"
              >
                <img
                  src={featuredCert.image}
                  alt={featuredCert.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-102"
                />
                <div className="absolute inset-0 bg-[#0369A1]/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-xl bg-[#0A0F14]/90 text-white text-xs font-mono flex items-center gap-2 border border-white/[0.1] shadow-lg">
                    <Eye className="w-4 h-4 text-[#38BDF8]" />
                    Click to Preview Fullscreen
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#0A0F14]/90 px-3 py-1 rounded-full text-xs font-mono text-[#38BDF8] border border-[#0EA5E9]/30">
                  Featured Certification
                </div>
              </div>

              {/* Details & Actions */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>VERIFIED CERTIFICATE &bull; {featuredCert.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {featuredCert.title}
                </h3>

                <p className="text-sm font-medium text-slate-300">
                  {featuredCert.organization}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {featuredCert.description}
                </p>

                {featuredCert.certificateNo && (
                  <div className="inline-block px-3 py-1.5 rounded-lg bg-[#0A0F14] border border-white/[0.06] text-xs font-mono text-slate-300">
                    No: <span className="text-white">{featuredCert.certificateNo}</span>
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    onClick={() => setSelectedCert(featuredCert)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-xl text-xs font-mono font-medium transition-all shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>

                  {featuredCert.pdfUrl && (
                    <a
                      href={featuredCert.pdfUrl}
                      download="Sertifikat-UMY-2026-deployment-docker.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0F14] hover:bg-[#131E2B] text-slate-200 hover:text-white rounded-xl text-xs font-mono font-medium border border-white/[0.1] hover:border-[#0EA5E9]/40 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#38BDF8]" />
                      <span>Download PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Secondary Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryCerts.map((cert) => (
            <Card3D key={cert.id} className="h-full rounded-2xl">
              <div
                onClick={() => setSelectedCert(cert)}
                className="h-full bg-[#0E1620] border border-white/[0.08] hover:border-[#0EA5E9]/40 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="relative h-48 bg-[#0A0F14] overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-3">
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-mono text-[#38BDF8]">
                      {cert.date}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#38BDF8] transition-colors" />
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Modal for Fullscreen Certificate Inspection */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-[#0E1620] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.1] shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b border-white/[0.08] bg-[#0A0F14] p-4 flex items-center justify-center">
                <ImageWithFallback
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-80 object-contain mx-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 bg-[#0E1620] text-slate-400 hover:text-white p-2 rounded-lg border border-white/[0.1] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-xs font-mono text-[#38BDF8]">
                    {selectedCert.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium mt-1">
                    {selectedCert.organization}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {selectedCert.description}
                </p>

                {selectedCert.certificateNo && (
                  <div className="text-xs font-mono text-slate-400 bg-[#0A0F14] p-3 rounded-lg border border-white/[0.06]">
                    Certificate Identifier: <span className="text-white font-bold">{selectedCert.certificateNo}</span>
                  </div>
                )}

                {/* PDF Actions if available */}
                <div className="flex flex-wrap gap-3 pt-3 border-t border-white/[0.08]">
                  {selectedCert.pdfUrl ? (
                    <>
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0369A1] hover:bg-[#0EA5E9] text-white rounded-xl text-xs font-mono font-medium transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open PDF in Tab</span>
                      </a>
                      <a
                        href={selectedCert.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0F14] hover:bg-[#131E2B] text-slate-200 rounded-xl text-xs font-mono font-medium border border-white/[0.1] transition-all cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-[#38BDF8]" />
                        <span>Download PDF</span>
                      </a>
                    </>
                  ) : (
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-2.5 bg-[#0A0F14] text-slate-300 hover:text-white rounded-xl text-xs font-mono border border-white/[0.1] transition-colors cursor-pointer"
                    >
                      Close Preview
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}