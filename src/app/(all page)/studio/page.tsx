"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { projects } from "@/data/projects";
import { useDebounce } from "@/hook/use-debounce";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 300);

  const categories = useMemo(
    () => ["all", ...new Set(projects.map((p) => p.category))],
    [],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(debouncedSearch.toLowerCase()),
        );

      const matchesCategory =
        category === "all" || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearch, category]);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Our Projects</h1>
        <p className="text-muted-foreground max-w-xl">
          A curated selection of residential and commercial interior projects,
          designed and executed with precision.
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => {
          const slug = project.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <motion.div key={slug} variants={item}>
              <Link href={`/studio/${slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group overflow-hidden border-muted hover:border-foreground/20 transition">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 space-y-2">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {project.subtitle}
                      </span>

                      <h3 className="font-medium text-lg leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>

                      <div className="text-xs text-muted-foreground">
                        {project.location} • {project.year}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
