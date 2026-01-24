import { packages } from "@/data/packages";

export function Packages() {
  return (
    <section className="py-24 bg-bgSoft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-semibold mb-12">
          Packages & Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-8 bg-white ${
                pkg.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-2 text-primary font-medium">{pkg.price}</p>
              <p className="text-sm text-muted-foreground">{pkg.duration}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {pkg.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
