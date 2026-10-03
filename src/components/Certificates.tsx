import React, { useState } from 'react';
import { Award, X, FileText, Download, ExternalLink } from 'lucide-react';
import { Card3D } from './3d/Card3D';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
  certificateNo?: string;
  pdfUrl?: string;
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'Deployment Perangkat Lunak (Docker & Cloud Deployment)',
      organization: 'Universitas Muhammadiyah Yogyakarta & TLab',
      date: 'Period June 2026',
      certificateNo: '56/HRGA-TLab/STF/VII/2026',
      image: certDeploymentDocker,
      pdfUrl: '/sertifikat-deployment-docker.pdf',
      description: 'Official Certification for Software Deployment (Deployment Perangkat Lunak) covering Docker containerization, cloud deployment workflows, and modern DevOps architecture issued to Muhammad Ridho Rizqullah by UMY in collaboration with TLab.',
    },
    {
      title: 'Samsung Innovation Campus - AI in Everyday Life',
      organization: 'Samsung Innovation Campus Batch 6 - Hacktiv8 Indonesia',
      date: 'January 2025',
      image: certSamsung,
      description: 'Certificate of Participation for completing Stage 1 Samsung Innovation Campus Batch 6 2024/2025, focusing on AI applications in everyday life, hosted by Hacktiv8 Indonesia',
    },
    {
      title: 'UI/UX Design Competition Participant',
      organization: 'UINIC 7.0 2025 - HMPS Informatika UIN Sunan Kalijaga',
      date: '9 December 2024',
      image: certUINIC,
      description: 'Participated as Participant (Peserta) in national-level UI/UX Design Competition UINIC 7.0 2025 with theme "Designing Intuitive Experiences for a Sustainable Digital Future"',
    },
    {
      title: 'KMTI MEDPRO Division Member',
      organization: 'Keluarga Mahasiswa Teknologi Informasi UMY',
      date: '2024 - 2025',
      image: certKMTI,
      description: 'Certificate of Membership as Anggota Pengurus Divisi MEDPRO (Media & Promotion) in Keluarga Mahasiswa Teknologi Informasi (KMTI) Period 2024-2025',
    },
    {
      title: 'Kineidoscope Screening Committee',
      organization: 'MM Kine Klub UMY',
      date: 'November 18-20, 2024',
      image: certKineidoscope,
      description: 'Certificate of Appreciation for participation and contribution as Anggota Screening (Screening Committee Member) in Kineidoscope campus film festival organized by MM Kine Klub UMY',
    },
    {
      title: 'AI Workshop - How is AI Changing The World',
      organization: 'MSI x Tirto.id - AI Cloud Class',
      date: 'November 19, 2024',
      image: certMSI,
      description: 'Certificate of Appreciation for successfully participating in MSI AI Cloud Class workshop exploring AI and cloud computing applications and their impact on the modern world',
    },
    {
      title: 'National Seminar of Entrepreneurship (NSE)#2',
      organization: 'Kemenkes Poltekkes Yogyakarta',
      date: 'October 5, 2024',
      image: certNSE,
      description: 'Participated as attendee in National Seminar of Entrepreneurship (NSE)#2 organized by Mahasiswa Jurusan Kebidanan Program Studi Diploma III Rekam Medis dan Informasi Kesehatan, held via Zoom Meeting Room',
    },
    {
      title: 'MATAF Equipment Division',
      organization: 'Prodi Teknologi Informasi UMY',
      date: '2024',
      image: certMATAF,
      description: 'Certificate as Anggota Divisi Perlengkapan (Equipment Division Member) for MATAF PRODI TEKNOLOGI INFORMASI 2024 with theme "Unlocking Knowledge for Building Progress to Inspiring Future". Certificate No: 367/A.4-VIII/KMTI/VIII/2025',
    },
    {
      title: 'IT SPECTA Event Division',
      organization: 'IT SPECTA 2024 - "Big Dreamer Great Achiever"',
      date: 'April 27 - June 15, 2024',
      image: certITSpecta,
      description: 'Certificate as Anggota Divisi Acara (Event Division Member) for IT SPECTA 2024 "Big Dreamer Great Achiever" organized from April 27 to June 15, 2024. Certificate No: 112/A.4-VIII/KMTI/V/2025',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Official verified certifications, training programs, and competition records
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <Card3D key={idx} className="h-full rounded-xl">
              <div
                onClick={() => setSelectedCert(cert)}
                className="group bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-48 bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {cert.pdfUrl && (
                      <div className="absolute top-3 left-3 bg-slate-900/90 px-2.5 py-0.5 rounded text-cyan-400 text-xs font-mono border border-slate-700">
                        PDF Document
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white mb-1.5 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-slate-300 text-xs mb-2">{cert.organization}</p>
                    <p className="text-slate-500 text-xs font-mono">{cert.date}</p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b border-slate-800 bg-slate-950 p-2">
                <ImageWithFallback
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-80 object-contain mx-auto"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 bg-slate-800/90 text-slate-300 hover:text-white p-1.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
                  <p className="text-slate-300 text-sm">{selectedCert.organization}</p>
                  <p className="text-slate-400 text-xs font-mono mt-0.5">{selectedCert.date}</p>
                  {selectedCert.certificateNo && (
                    <p className="text-cyan-400 text-xs font-mono mt-2">
                      Credential ID: {selectedCert.certificateNo}
                    </p>
                  )}
                </div>

                <div className="border-t border-slate-800 pt-4 mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedCert.description}</p>
                </div>

                {selectedCert.pdfUrl && (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={selectedCert.pdfUrl}
                      download="Sertifikat-UMY-2026-deployment-docker.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}