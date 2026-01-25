"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Residential Design",
    description:
      "Elegant interior solutions for homes that balance comfort and style.",
    icon: "🏠",
  },
  {
    name: "Commercial Spaces",
    description:
      "Modern and functional designs for offices, stores, and hospitality.",
    icon: "🏢",
  },
  {
    name: "Custom Furniture",
    description: "Bespoke furniture designs to perfectly fit your interiors.",
    icon: "🛋️",
  },
  {
    name: "Lighting Design",
    description: "Atmospheric lighting solutions to enhance every space.",
    icon: "💡",
  },
  {
    name: "Space Planning",
    description: "Optimize layouts for flow, functionality, and aesthetics.",
    icon: "📐",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-secondary ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold  uppercase text-center mb-12 ">
          Our Services
        </h2>
        <div className="flex flex-wrap  justify-around gap-2 gap-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-7xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
                <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
