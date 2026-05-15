import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ButtonLink from '../components/ButtonLink';
import CTASection from '../components/CTASection';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TrustStrip from '../components/TrustStrip';
import { clientLogos, images } from '../data/assets';
import { industries, services } from '../data/services';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <Seo
        title="Dintu Construction | Construction Company in Rustenburg"
        description="Dintu Construction provides civil construction, mining support, pipeline fabrication, structural steel, specialised testing, and industrial cleaning services in Rustenburg and the North West."
      />

      <section className="relative isolate min-h-[640px] overflow-hidden bg-charcoal text-white">
        <img src={images.hero} alt="Civil construction and infrastructure site work" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-charcoal/78" />
        <div className="container-pad flex min-h-[640px] items-center py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wide text-white/75">Rustenburg construction, mining and industrial support</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Construction, Mining & Industrial Support Services in Rustenburg
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Dintu Construction provides civil construction, structural steel, pipeline fabrication, specialised testing, industrial cleaning, and project support for mining, municipal, and industrial clients.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" className="sm:w-auto">Request a Quote</ButtonLink>
              <ButtonLink to="/services" variant="secondary" className="sm:w-auto">View Services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section-pad bg-stone">
        <div className="container-pad">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Core Services"
              title="Practical capability for demanding site environments"
              text="Dintu keeps the service offering clear, useful, and aligned to the needs of mining houses, municipalities, industrial facilities, and construction teams."
            />
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-charcoal">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Industries Served"
              title="Built for procurement, operations, and project teams"
              text="The website now presents Dintu as a serious B2B partner for clients who need dependable support, clear scopes, and responsive communication."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center gap-3 rounded-md border border-line bg-white p-4 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-teal" size={20} />
                  <span className="text-sm font-semibold text-ink">{industry}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={images.structural} alt="Structural steel and engineering services" className="h-[440px] w-full rounded-lg object-cover shadow-soft" loading="lazy" />
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src={images.about} alt="Dintu Construction company representative" className="h-[520px] w-full rounded-lg object-cover object-top shadow-soft" loading="lazy" />
          <div>
            <SectionHeader
              eyebrow="About Dintu"
              title="A Rustenburg-based construction company founded in 2008"
              text="Dintu Construction and Trading CC is a 100% black female-owned business with B-BBEE Level 1 positioning and experience across civil, mining, municipal, and industrial service environments."
            />
            <div className="mt-8 grid gap-4">
              {['Established operational presence in Rustenburg and the North West', 'Services aligned to mining, industrial, and public sector procurement', 'Clear route from enquiry to quote request'].map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-white p-4">
                  <ShieldCheck className="mt-0.5 shrink-0 text-teal" size={20} />
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
            <ButtonLink to="/about" variant="dark" className="mt-8">Learn More About Dintu</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Projects & Work Areas"
            title="Relevant project capability without unsupported claims"
            text="Where exact client project names are not provided, the portfolio uses capability-led examples that explain the type of work Dintu can support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Compliance"
                title="Supplier-ready positioning for formal enquiries"
                text="The certificates page is prepared for B-BBEE, company registration, tax compliance, CIDB, safety documentation, supplier packs, and industry certificates as soon as the latest documents are available."
              />
              <ButtonLink to="/certificates" variant="light" className="mt-8">View Certificates</ButtonLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['B-BBEE Level 1', '100% black female-owned', 'Founded in 2008', 'Rustenburg-based supplier'].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <p className="text-lg font-bold text-charcoal">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">Presented as a key trust signal for procurement and corporate decision-makers.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Trusted Environments"
            title="Built to speak to mining, municipal, water, and industrial buyers"
            text="Available logo assets are shown as credibility signals without overstating project details."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex h-28 items-center justify-center rounded-lg border border-line bg-white p-5 shadow-sm">
                <img src={logo.image} alt={`${logo.name} logo`} className="max-h-16 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
