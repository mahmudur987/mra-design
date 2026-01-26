"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import testimonials from "@/data/testimonial";

/* ---------------------------------- */
/* Motion Variants */
/* ---------------------------------- */

const slideVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
  exit: { opacity: 0, x: -40 },
};

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-accent">
            What Clients Say
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Real stories from clients who trusted us with their spaces.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.article
              key={index}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden rounded-2xl border border-secondary bg-secondary shadow-lg"
            >
              {/* Project Image */}
              <div className="h-60 w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={current.projectImage}
                  alt={`${current.name} project`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground italic leading-relaxed">
                  “{current.text}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Image
                    width={48}
                    height={48}
                    src={current.avatar}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
                  />
                  <div>
                    <p className="font-semibold text-secondary-foreground">
                      {current.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {current.designation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accent Bar */}
              <div className="h-1 w-full bg-primary" />
            </motion.article>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all
                  ${
                    i === index
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/60"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
