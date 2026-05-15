import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import Seo from '../components/Seo';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';
import { images } from '../data/assets';
import { services } from '../data/services';

const contactEmail = 'dimak@dintu.co.za';
const whatsappNumber = '27145921123';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    details: '',
    method: 'Phone',
  });
  const [message, setMessage] = useState('');

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!form.fullName || !form.phone || !form.email || !form.service || !form.details) {
      setMessage('Please complete your name, phone, email, service needed, and project details.');
      return;
    }

    const subject = encodeURIComponent(`Quote request from ${form.fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}
Company / Organisation: ${form.company}
Phone Number: ${form.phone}
Email Address: ${form.email}
Service Needed: ${form.service}
Project Location: ${form.location}
Preferred Contact Method: ${form.method}

Project Details:
${form.details}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setMessage('Your email app should open with the quote request prepared.');
  };

  return (
    <>
      <Seo
        title="Contact Dintu Construction | Request a Quote in Rustenburg"
        description="Contact Dintu Construction and Trading CC in Rustenburg for civil construction, mining support, pipeline fabrication, NDT, industrial cleaning, and project support quotes."
      />

      <section className="bg-charcoal py-20 text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white/70">Contact Dintu Construction</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Request a quote for construction, mining or industrial support</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Send your project details, service need, and location. The form is prepared for static GitHub Pages hosting and uses a mailto fallback until a dedicated form service is connected.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/8 p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-white/65">Direct Enquiries</p>
            <div className="mt-5 grid gap-4">
              <a href="tel:+27145921123" className="flex items-center gap-3 rounded-md bg-white p-4 font-bold text-charcoal">
                <Phone className="text-teal" size={20} /> +27 14 592 1123
              </a>
              <a href="tel:+27141120807" className="flex items-center gap-3 rounded-md bg-white p-4 font-bold text-charcoal">
                <Phone className="text-teal" size={20} /> +27 14 112 0807
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} className="flex items-center gap-3 rounded-md bg-white p-4 font-bold text-charcoal">
                <MessageCircle className="text-teal" size={20} /> WhatsApp Dintu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
            <SectionHeader
              eyebrow="Quote Request"
              title="Tell us what you need"
              text="Complete the details below and your email app will open with the request ready to send."
            />

            <form className="mt-8 grid gap-5" onSubmit={submitForm}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Full Name
                  <input name="fullName" value={form.fullName} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal" autoComplete="name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Company / Organisation
                  <input name="company" value={form.company} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal" autoComplete="organization" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Phone Number
                  <input name="phone" value={form.phone} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal" autoComplete="tel" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Email Address
                  <input name="email" type="email" value={form.email} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal" autoComplete="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Service Needed
                  <select name="service" value={form.service} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal">
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Project Location
                  <input name="location" value={form.location} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal" placeholder="Rustenburg, North West, or site area" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Project Details
                <textarea name="details" value={form.details} onChange={updateField} rows="6" className="rounded-md border border-line px-4 py-3 outline-none focus:border-teal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Preferred Contact Method
                <select name="method" value={form.method} onChange={updateField} className="min-h-12 rounded-md border border-line px-4 outline-none focus:border-teal">
                  <option>Phone</option>
                  <option>Email</option>
                  <option>WhatsApp</option>
                </select>
              </label>
              {message && <p className="rounded-md bg-mist px-4 py-3 text-sm font-semibold text-charcoal">{message}</p>}
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-bold text-white transition hover:bg-charcoal">
                <Send size={18} /> Prepare Quote Request
              </button>
              <p className="text-sm leading-6 text-ink/65">
                Static site note: this form does not store submissions. Connect a form service later for direct website submissions.
              </p>
            </form>
          </div>

          <aside className="grid gap-5">
            <ContactCard icon={Phone} title="Office" lines={[<a href="tel:+27145921123">+27 14 592 1123</a>, <a href="tel:+27141120807">+27 14 112 0807</a>]} />
            <ContactCard icon={Mail} title="Email" lines={[<a href="mailto:dimak@dintu.co.za">dimak@dintu.co.za</a>, <a href="mailto:admin@dintu.co.za">admin@dintu.co.za</a>]} />
            <ContactCard icon={MapPin} title="Address" lines={['Dintu Construction and Trading CC', 'No. 266A Beyers Naude Drive', 'Rustenburg North, North West, 0299', 'South Africa']} />
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Location"
              title="Rustenburg-based, serving the North West and broader project areas"
              text="The map area is ready for a live Google Maps embed or verified pin. For now, it uses the available map image asset without adding fake office locations."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-stone p-5">
                <h2 className="font-bold text-charcoal">Business Hours</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">Business hours to be confirmed.</p>
              </div>
              <div className="rounded-lg border border-line bg-stone p-5">
                <h2 className="font-bold text-charcoal">Service Areas</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">Rustenburg, North West, and project-dependent South African locations.</p>
              </div>
            </div>
          </div>
          <img src={images.map} alt="Map image for Dintu Construction Rustenburg location" className="h-[360px] w-full rounded-lg border border-line object-cover shadow-soft" loading="lazy" />
        </div>
      </section>

      <CTASection
        title="Prefer to speak directly?"
        text="Call the office, send an email, or prepare the quote request with the form. Dintu’s contact routes are now visible throughout the site."
      />
    </>
  );
}

function ContactCard({ icon: Icon, title, lines }) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <Icon className="text-teal" size={28} />
      <h2 className="mt-4 text-xl font-bold text-charcoal">{title}</h2>
      <div className="mt-3 grid gap-2 text-sm leading-6 text-ink/75">
        {lines.map((line, index) => (
          <p key={`${title}-${index}`} className="[&_a]:font-semibold [&_a]:text-teal [&_a:hover]:text-charcoal">{line}</p>
        ))}
      </div>
    </article>
  );
}
