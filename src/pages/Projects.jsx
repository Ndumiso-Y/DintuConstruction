import Seo from '../components/Seo';
import CTASection from '../components/CTASection';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects & Capabilities | Dintu Construction"
        description="View Dintu Construction project capability areas for civil works, mining site support, pipeline fabrication, structural steel, industrial cleaning, and technical testing."
      />

      <section className="bg-charcoal py-20 text-white">
        <div className="container-pad max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">Projects & Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Project capability and relevant work areas</h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Exact client project names have not been added, so this portfolio uses careful capability-led wording that avoids unsupported claims while still showing the type of work Dintu can support.
          </p>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Work Areas"
            title="Clear examples for quote-driven conversations"
            text="Each card describes a service example, relevant work area, or project capability suitable for mining, municipal, water, industrial, and construction clients."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a similar scope that needs pricing?"
        text="Share the service category, location, site requirements, and project details so Dintu can respond with the correct next step."
      />
    </>
  );
}
