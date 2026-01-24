"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  style: string;
  theme: string;
}

export function GalleryCard({
  title,
  description,
  image,
  category,
  style,
  theme,
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-primary"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-105 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-accent-foreground translate-y-8 group-hover:translate-y-0 transition-all duration-300">
        <span className="text-xs uppercase tracking-widest opacity-80">
          {category}
        </span>

        <h3 className="text-lg font-semibold mt-1">{title}</h3>

        <p className="text-sm opacity-80 line-clamp-2 mt-1">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-90">
          <span className="rounded-full border px-3 py-1">{style}</span>
          <span className="rounded-full border px-3 py-1">{theme}</span>
        </div>
      </div>
    </motion.div>
  );
}
