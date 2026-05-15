import { Link } from 'react-router-dom';

const styles = {
  primary:
    'bg-teal text-white hover:bg-charcoal focus-visible:ring-teal shadow-sm',
  secondary:
    'border border-white/45 bg-white/10 text-white hover:bg-white hover:text-charcoal focus-visible:ring-white',
  light:
    'border border-line bg-white text-charcoal hover:border-teal hover:text-teal focus-visible:ring-teal',
  dark:
    'bg-charcoal text-white hover:bg-teal focus-visible:ring-charcoal',
};

export default function ButtonLink({ to, children, variant = 'primary', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
