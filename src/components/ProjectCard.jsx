import ButtonLink from './ButtonLink';

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      <img src={project.image} alt={project.alt} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-teal">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold text-charcoal">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-ink/70">
          <span className="rounded bg-mist px-3 py-1">{project.sector}</span>
          <span className="rounded bg-mist px-3 py-1">{project.location}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-ink/75">{project.description}</p>
        <ButtonLink to="/contact" variant="light" className="mt-6 w-full">
          Request Similar Service
        </ButtonLink>
      </div>
    </article>
  );
}
