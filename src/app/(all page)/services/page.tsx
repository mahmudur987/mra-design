import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceCard } from "@/components/services/serviceCard";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Interior Design Services
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From concept to completion, we provide tailored interior solutions
            that reflect your personality and elevate your space.
          </p>

          <Link href="/book-consultation">
            <Button size="lg" className="bg-primary text-white">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-20">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Let’s Design Your Dream Space
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Share your vision with us and we’ll help bring it to life with
            thoughtful design and expert execution.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
