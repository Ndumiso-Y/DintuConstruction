import { Award, Building2, Compass, Target } from 'lucide-react';
import Seo from '../components/Seo';
import ButtonLink from '../components/ButtonLink';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';
import { images } from '../data/assets';

const timeline = [
  { label: 'History', title: 'Our History in the Making', text: 'Dintu Construction and Trading CC was founded in 2008 and has grown around practical site support, construction capability, and industrial service delivery.' },
  { label: 'Present', title: 'Procurement-Ready Service Partner', text: 'Today, Dintu positions its civil, fabrication, testing, cleaning, and consulting services for mining, municipal, industrial, and construction clients.' },
  { label: 'Future', title: 'Growth Through Reliable Delivery', text: 'The business is ready to build stronger client relationships through clear communication, safe execution, and responsive project support.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Dintu Construction | Rustenburg, North West"
        description="Learn about Dintu Construction and Trading CC, a 100% black female-owned B-BBEE Level 1 construction company founded in 2008 and based in Rustenburg."
      />

      <section className="bg-charcoal py-20 text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white/70">About Dintu Construction</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Established construction and industrial support from Rustenburg</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Dintu Construction and Trading CC is a Rustenburg-based company serving clients across civil construction, mining support, fabrication, testing, inspection, industrial cleaning, and project consulting.
            </p>
          </div>
          <img src={images.about} alt="Dintu Construction business profile image" className="h-[460px] w-full rounded-lg object-cover object-top shadow-soft" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Company Overview"
              title="100% black female-owned and B-BBEE Level 1 positioned"
              text="Dintu combines construction capability with supplier-readiness for formal clients who need clear service categories, credible communication, and a direct route to enquiry."
            />
            <ButtonLink to="/contact" variant="dark" className="mt-8">Request a Quote</ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Founded', '2008'],
              ['Ownership', '100% black female-owned'],
              ['B-BBEE', 'Level 1'],
              ['Base', 'Rustenburg, North West'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-line bg-stone p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-teal">{label}</p>
                <p className="mt-2 text-2xl font-bold text-charcoal">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-pad">
          <SectionHeader align="center" eyebrow="Company Journey" title="Our History in the Making" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.label} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-teal">{item.label}</p>
                <h2 className="mt-3 text-xl font-bold text-charcoal">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-3">
          {[
            { icon: Target, title: 'Mission', text: 'To provide dependable construction, industrial, and technical support services that help clients complete work safely, clearly, and professionally.' },
            { icon: Compass, title: 'Vision', text: 'To become a trusted North West service partner for mining, municipal, industrial, and construction clients.' },
            { icon: Award, title: 'Values', text: 'Reliability, accountability, safety awareness, practical communication, and respect for client operations.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-line bg-white p-7 shadow-sm">
                <Icon className="text-teal" size={30} />
                <h2 className="mt-5 text-2xl font-bold text-charcoal">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src={images.rail} alt="Industrial cutting and welding support" className="h-[440px] w-full rounded-lg object-cover shadow-soft" loading="lazy" />
          <div>
            <SectionHeader
              eyebrow="Why Clients Choose Dintu"
              title="Clear services, practical execution, and local responsiveness"
              text="The rebuilt site focuses on the factors procurement officers and site teams look for first: location, ownership, compliance readiness, service clarity, and contactability."
            />
            <div className="mt-8 grid gap-4">
              {['Rustenburg-based access to North West industrial and mining environments', 'Service categories written for fast procurement understanding', 'Quote journey designed around phone, email, WhatsApp, and form enquiries', 'Compliance page prepared for supplier documentation'].map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-white p-4">
                  <Building2 className="mt-0.5 shrink-0 text-teal" size={20} />
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
