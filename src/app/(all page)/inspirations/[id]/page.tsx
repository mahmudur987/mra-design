"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/gallery";
import { use } from "react";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DetailsPage({ params }: PageProps) {
  const { id } = use(params);

  const data = galleryData.find((item) => item.id === id);

  if (!data) return notFound();

  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      {/* Back Button */}
      <motion.div
        whileHover={{ x: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button variant="ghost" asChild>
          <Link href="/">← Back to Gallery</Link>
        </Button>
      </motion.div>

      {/* Hero */}
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            {data.title}
          </h1>
          <p className="text-muted-foreground max-w-xl">{data.description}</p>
        </motion.div>
      </div>

      {/* Details */}
      <div className="grid gap-8 md:grid-cols-2">
        <Detail label="Category" value={data.category} />
        <Detail label="Style" value={data.style} />
        <Detail label="Theme" value={data.theme} />
        <Detail label="Color Palette" value={data.colorPalette.join(", ")} />
        <Detail label="Materials" value={data.materials.join(", ")} />
        <Detail label="Lighting Concept" value={data.lightingConcept} />
        <Detail label="Furniture Style" value={data.furnitureStyle} />
        <Detail label="Space Feel" value={data.spaceFeel} />
        <Detail label="Ideal For" value={data.idealFor.join(", ")} />
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed">{value}</dd>
    </div>
  );
}
