const reasons = [
  "Experienced Designers",
  "Transparent Pricing",
  "Premium Materials",
  "On-time Delivery",
  "End-to-End Service",
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif font-semibold">Why Choose Us</h2>
          <p className="mt-4 text-muted-foreground">
            We combine creativity, craftsmanship, and clear communication to
            deliver interiors that truly reflect your lifestyle.
          </p>
        </div>

        <ul className="space-y-4">
          {reasons.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
