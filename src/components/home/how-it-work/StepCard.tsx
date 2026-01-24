"use client";

import { ProcessIcon } from "@/utils/ProcessIcons";
import { motion } from "framer-motion";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border bg-secondary p-8 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <ProcessIcon type={icon} />
        <span className="text-4xl font-serif font-semibold text-primary">
          {step}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-primary ">{title}</h3>
      <p className="mt-3 text-accent">{description}</p>
    </motion.div>
  );
}
