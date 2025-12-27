import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
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
    <section id="certificates" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            Certificates & <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and certifications from competitions, workshops, and organizational activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm p-2 rounded-lg border border-cyan-400/50">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-green-400 text-sm mb-2">{cert.organization}</p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <ImageWithFallback
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-2">{selectedCert.title}</h3>
                    <p className="text-green-400 mb-1">{selectedCert.organization}</p>
                    <p className="text-gray-400 text-sm">{selectedCert.date}</p>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}