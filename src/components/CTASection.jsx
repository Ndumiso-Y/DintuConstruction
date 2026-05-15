import ButtonLink from './ButtonLink';

export default function CTASection({
  eyebrow = 'Request a Quote',
  title = 'Need a reliable construction or industrial support partner?',
  text = 'Send the project details and Dintu Construction will respond with the right next step for your site, scope, and timeline.',
}) {
  return (
    <section className="bg-teal py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{text}</p>
        </div>
        <ButtonLink to="/contact" variant="secondary" className="w-full sm:w-auto">
          Request a Quote
        </ButtonLink>
      </div>
    </section>
  );
}
