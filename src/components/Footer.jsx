import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { images } from '../data/assets';
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={images.logoAlt} alt="Dintu Construction and Trading CC logo" className="h-14 w-auto rounded bg-white p-1" />
          <p className="mt-5 text-sm leading-7 text-white/75">
            Civil construction, mining support, fabrication, testing, inspection, and industrial services from Rustenburg, North West.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">B-BBEE Level 1 | 100% black female-owned</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/70">Navigation</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {['Home', 'About', 'Services', 'Projects', 'Certificates', 'Contact'].map((label) => (
              <Link key={label} to={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className="text-white/75 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/70">Services</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {services.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`} className="text-white/75 hover:text-white">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white/70">Contact</h2>
          <div className="mt-4 grid gap-4 text-sm text-white/75">
            <a href="tel:+27145921123" className="flex gap-3 hover:text-white">
              <Phone size={18} className="mt-0.5 shrink-0" /> +27 14 592 1123
            </a>
            <a href="mailto:dimak@dintu.co.za" className="flex gap-3 hover:text-white">
              <Mail size={18} className="mt-0.5 shrink-0" /> dimak@dintu.co.za
            </a>
            <p className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0" /> No. 266A Beyers Naude Drive, Rustenburg North, North West, 0299
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/65 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright © {new Date().getFullYear()} Dintu Construction and Trading CC. All rights reserved.</p>
          <p>Website by Embark Digitals</p>
        </div>
      </div>
    </footer>
  );
}
