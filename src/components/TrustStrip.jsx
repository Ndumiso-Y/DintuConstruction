const items = ['B-BBEE Level 1', '100% Black Female-Owned', 'Founded in 2008', 'Rustenburg-Based', 'Mining, Civil & Industrial Experience'];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 md:grid-cols-5 lg:px-8">
        {items.map((item) => (
          <div key={item} className="rounded-md bg-mist px-4 py-3 text-center text-sm font-bold text-charcoal">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
