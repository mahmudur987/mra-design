"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
import { galleryData } from "@/data/gallery";
import { useDebounce } from "@/hook/use-debounce";
import Image from "next/image";

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

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 300);

  const filteredData = useMemo(() => {
    return galleryData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(debouncedSearch.toLowerCase()),
        );

      const matchesCategory = category === "all" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearch, category]);

  const categories = useMemo(
    () => ["all", ...new Set(galleryData.map((i) => i.category))],
    [],
  );

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Interior Design Concepts
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Explore curated interior concepts designed with purpose, style, and
          clarity.
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <Input
            placeholder="Search by title or tag..."
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
        {filteredData.map((itemData) => (
          <motion.div key={itemData.id} variants={item}>
            <Link href={`inspirations/${itemData.id}`}>
              <motion.div
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group overflow-hidden border-muted hover:border-foreground/20 transition">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={itemData.image}
                      alt={itemData.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={false}
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-medium text-lg leading-snug">
                      {itemData.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {itemData.description}
                    </p>

                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {itemData.category}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
