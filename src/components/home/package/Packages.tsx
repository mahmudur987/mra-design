"use client";

import { motion } from "framer-motion";

export const packages = [
  {
    name: "Basic Interior",
    price: "Starting from $3,500",
    duration: "3–4 Weeks",
    features: [
      "Space planning",
      "Basic material selection",
      "2D layout",
      "Standard finishes",
    ],
  },
  {
    name: "Premium Interior",
    price: "Starting from $6,500",
    duration: "5–6 Weeks",
    features: [
      "Custom design concept",
      "3D visualization",
      "Premium materials",
      "Lighting design",
    ],
    popular: true,
  },
  {
    name: "Luxury Interior",
    price: "Starting from $10,000",
    duration: "8–10 Weeks",
    features: [
      "End-to-end design & execution",
      "High-end materials",
      "Custom furniture",
      "Dedicated project manager",
    ],
  },
];

export type IPackage = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
};

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function Packages() {
  return (
    <section className="py-24 bg-bgSoft">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            Packages & Pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Thoughtfully crafted interior solutions for every stage of your
            design journey.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative rounded-2xl border bg-white p-8 transition-all duration-300
                ${
                  pkg.popular
                    ? "border-primary shadow-xl shadow-primary/20"
                    : "border-border hover:shadow-lg"
                }
              `}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-md">
                  Most Popular
                </span>
              )}

              {/* Card Content */}
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {pkg.name}
                  </h3>

                  <p className="mt-3 text-2xl font-semibold text-primary">
                    {pkg.price}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {pkg.duration}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all
                    ${
                      pkg.popular
                        ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
                        : "border border-border hover:border-primary hover:text-primary"
                    }
                  `}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
