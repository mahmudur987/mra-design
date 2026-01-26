import { galleryData } from "@/data/gallery";
import { GalleryCard } from "./GalleryCard";
import Link from "next/link";

export function DesignGallery() {
  const gallery = galleryData;
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl text-center mx-auto w-full">
          <h2 className="text-4xl font-serif font-semibold">
            Design Inspiration
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our curated collection of interior design concepts and
            inspirations crafted to reflect our creative vision and expertise.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.slice(0, 3).map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              style={item.style}
              theme={item.theme}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/inspirations"
            className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
