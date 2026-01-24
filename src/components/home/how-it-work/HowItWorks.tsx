import { howItWorks } from "@/data/howItWorks";
import { StepCard } from "./StepCard";

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-2xl mx-auto w-full text-center">
          <h2 className="text-4xl font-serif font-semibold">How It Works</h2>
          <p className="mt-4 text-muted-foreground">
            Our proven process ensures a smooth, transparent, and stress-free
            interior design experience from concept to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
