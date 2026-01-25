"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "95%" },
  { label: "Design Experts", value: "25+" },
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function Stats() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-wide text-accent">
            A Look at Our Numbers
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Measurable results that reflect our experience, consistency, and
            commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-white px-6 py-8 text-center transition-all duration-300 hover:border-primary hover:shadow-xl"
            >
              {/* Value */}
              <p className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
                {s.value}
              </p>

              {/* Label */}
              <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                {s.label}
              </p>

              {/* Accent underline */}
              <div className="mx-auto mt-4 h-0.5 w-10 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
