"use client";

import { motion } from "framer-motion";

const reasons = [
  "Experienced Designers",
  "Transparent Pricing",
  "Premium Materials",
  "On-time Delivery",
  "End-to-End Service",
];

/* ---------------------------------- */
/* Motion Variants */
/* ---------------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-16 md:grid-cols-2 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-accent">
              Why Choose Us
            </h2>

            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              We combine creativity, craftsmanship, and transparent
              communication to deliver interiors that feel intentional, refined,
              and deeply personal.
            </p>
          </motion.div>

          {/* Reasons List */}
          <motion.ul variants={containerVariants} className="space-y-5">
            {reasons.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 rounded-2xl border border-secondary bg-secondary px-5 py-4 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                {/* Accent Dot */}
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                  <span className="absolute h-6 w-6 rounded-full bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>

                {/* Text */}
                <span className="text-sm md:text-base font-medium text-secondary-foreground group-hover:text-accent transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
