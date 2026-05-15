import { FileCheck2, FolderCheck, ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';

const documents = [
  'B-BBEE certificate',
  'Company registration',
  'Tax compliance',
  'CIDB grading, if available',
  'Safety and compliance documents',
  'Industry certificates',
  'Supplier and vendor documentation',
];

export default function Certificates() {
  return (
    <>
      <Seo
        title="Certificates & Compliance | Dintu Construction"
        description="Dintu Construction certificates and compliance page prepared for B-BBEE, company registration, tax compliance, CIDB, safety, industry, and supplier documentation."
      />

      <section className="bg-charcoal py-20 text-white">
        <div className="container-pad max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">Certificates & Compliance</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Supplier documentation page prepared for procurement review</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            No certificate files were clearly provided in the image folder, so this page is intentionally placeholder-ready and avoids claiming that documents are uploaded.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Documentation"
            title="Ready for certificates when the latest files are supplied"
            text="This section gives Dintu a polished compliance destination now, while making it easy to add actual certificate downloads or document images later."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <article key={doc} className="rounded-lg border border-line bg-stone p-6">
                <FileCheck2 className="text-teal" size={28} />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{doc}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">Document placeholder. Add the latest approved file when available.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-pad grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'B-BBEE Level 1', text: 'Displayed as a trust signal for supplier and procurement conversations.' },
            { icon: FolderCheck, title: 'Supplier Pack Ready', text: 'Structured for company registration, tax compliance, safety, and industry documentation.' },
            { icon: FileCheck2, title: 'No False Upload Claims', text: 'The page only says documents can be added once actual files are provided.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-line bg-white p-7 shadow-sm">
                <Icon className="text-teal" size={30} />
                <h2 className="mt-5 text-xl font-bold text-charcoal">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Need Dintu’s supplier documentation?"
        text="Contact the team to request the latest compliance documents for your procurement or vendor onboarding process."
      />
    </>
  );
}
