const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "95%" },
  { label: "Design Experts", value: "25+" },
];

export function Stats() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold text-primary">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
