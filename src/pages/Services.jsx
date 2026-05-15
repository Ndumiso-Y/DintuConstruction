import { ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import ButtonLink from '../components/ButtonLink';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';
import { industries, services } from '../data/services';

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Civil Construction, Fabrication, NDT & Industrial Cleaning"
        description="Explore Dintu Construction services including civil construction, structural steel, pipeline fabrication, plastic welding, NDT, destructive testing, industrial cleaning, hydro blasting, and consulting."
      />

      <section className="bg-charcoal py-20 text-white">
        <div className="container-pad max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">Services</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Construction, mining and industrial services grouped for fast scoping</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Dintu Construction supports procurement teams, engineers, site managers, municipalities, and industrial clients with clear service categories and quote-ready scopes.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-pad flex gap-3 overflow-x-auto py-5">
          {services.map((service) => (
            <a key={service.id} href={`#${service.id}`} className="shrink-0 rounded-md border border-line bg-stone px-4 py-2 text-sm font-bold text-charcoal hover:border-teal hover:text-teal">
              {service.shortTitle}
            </a>
          ))}
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Overview"
            title="Five focused service groups"
            text="The services are structured so buyers can quickly understand what Dintu offers and move directly into a quote enquiry."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <h2 className="text-lg font-bold text-charcoal">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{service.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        {services.map((service, index) => (
          <div id={service.id} key={service.id} className={`scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-mist'}`}>
            <div className="container-pad grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <img src={service.image} alt={service.alt} className="h-[440px] w-full rounded-lg object-cover shadow-soft" loading="lazy" />
              </div>
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <p className="text-sm font-bold uppercase tracking-wide text-teal">Service Category</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-ink/75">{service.summary}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.services.map((item) => (
                    <div key={item} className="flex gap-3 rounded-md border border-line bg-white p-4">
                      <ShieldCheck className="mt-0.5 shrink-0 text-teal" size={19} />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </div>
                  ))}
                </div>
                <ButtonLink to="/contact" variant="dark" className="mt-8">Request This Service</ButtonLink>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Industries"
            title="Service support for operational environments"
            text="Dintu’s work is presented around the sectors most likely to need civil construction, mining support services, pipeline fabrication, plastic welding, NDT, and industrial cleaning in Rustenburg and the North West."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry} className="rounded-lg border border-line bg-white p-5 text-sm font-bold text-charcoal shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="rounded-lg border border-line bg-charcoal p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-white/65">Safety & Compliance</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Built for serious enquiries and responsible site work</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/78">
              Dintu’s service presentation supports the information buyers commonly need before engagement: scope clarity, company credentials, compliance readiness, direct contact routes, and documentation placeholders for supplier onboarding.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
