import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <img src={service.image} alt={service.alt} className="h-52 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/75">{service.summary}</p>
        <ul className="mt-5 grid gap-2 text-sm text-ink/80">
          {service.services.slice(0, 4).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
        <Link to={`/services#${service.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-charcoal">
          View service <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
