import { ConsultationModal } from "@/components/modal/ConsultationModal";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <h2 className="text-4xl font-serif font-semibold">
        Let’s Design Your Dream Space
      </h2>
      <p className="mt-4 opacity-90">
        Book a free consultation with our design experts today.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <ConsultationModal className="rounded-full bg-white px-10 py-7 text-primary font-medium hover:bg-accent hover:text-white" />
        <Link
          href="/projects"
          className="rounded-full border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-primary"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
