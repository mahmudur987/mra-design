const testimonials = [
  {
    name: "Ahmed Rahman",
    text: "Professional, creative, and reliable. Our home looks stunning.",
  },
  {
    name: "Farzana Islam",
    text: "They understood our vision perfectly and delivered beyond expectations.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-bgSoft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-semibold mb-12">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-8">
              <p className="italic text-muted-foreground">“{t.text}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
