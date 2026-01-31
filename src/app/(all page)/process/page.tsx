import { processSteps } from "@/data/process";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProcessCard } from "@/components/process/ProcessCard";

export function OurProcess() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Our Process</h2>
          <p className="text-muted-foreground">
            A structured and transparent approach to bring your interior vision
            to life — from concept to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link href="/book-consultation">
            <Button size="lg" className="bg-primary text-white">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default OurProcess;
