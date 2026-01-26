"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { IProjects } from "@/interfaces/projects";

interface PageProps {
  params: Promise<{
    title: string;
  }>;
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { title } = use(params);

  const data: IProjects | undefined = projects.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, "-") === title,
  );

  if (!data) return notFound();

  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      {/* Back Button */}
      <motion.div
        whileHover={{ x: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button variant="ghost" asChild>
          <Link href="/projects">← Back to Projects</Link>
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
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {data.subtitle}
          </span>

          <h1 className="text-4xl font-semibold tracking-tight">
            {data.title}
          </h1>

          <p className="text-muted-foreground max-w-xl">{data.description}</p>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="grid gap-8 md:grid-cols-2">
        <Detail label="Category" value={data.category} />
        <Detail label="Style" value={data.style} />
        <Detail label="Theme" value={data.theme} />
        <Detail label="Location" value={data.location} />
        <Detail label="Year" value={data.year} />
        <Detail label="Area" value={data.area} />

        <Detail label="Client" value={data.client.name} />
        <Detail label="Client Type" value={data.client.type} />

        <Detail label="Package" value={data.package.name} />
        <Detail label="Duration" value={data.package.duration} />
        <Detail label="Budget Range" value={data.package.budgetRange} />
      </div>

      {/* Review */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border p-6 bg-muted/30"
      >
        <p className="text-sm text-muted-foreground mb-2">
          Client Review ({data.review.rating}★)
        </p>
        <p className="text-base italic">“{data.review.comment}”</p>
      </motion.div>
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
