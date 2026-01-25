"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export function Footer() {
  return (
    <footer className="bg-accent text-primary-foreground">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-semibold tracking-tight">
              MRA Design
            </h3>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70 leading-relaxed">
              Crafting timeless interiors through thoughtful design, premium
              materials, and precise execution.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Projects", href: "/projects" },
                { label: "Design Gallery", href: "/gallery" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-primary-foreground/75 transition-colors hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Contact
            </h4>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              Dhaka, Bangladesh
              <br />
              <a
                href="mailto:info@mradesign.com"
                className="mt-2 inline-block text-primary-foreground hover:underline"
              >
                info@mradesign.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-primary-foreground/10" />

        {/* Bottom */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs text-primary-foreground/50"
        >
          © {new Date().getFullYear()} MRA Design. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
