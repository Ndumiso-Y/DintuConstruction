export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-ink/75">{text}</p>}
    </div>
  );
}
