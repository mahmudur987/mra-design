"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Navbar } from "../navbar/Navbar";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="../../../assets/video/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center ">
        <div className="absolute top-0 flex justify-center  w-full">
          <Navbar />
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight">
              Designing Spaces <br /> That Inspire Living
            </h1>

            <p className="mt-6 text-white/80 text-lg">
              We create timeless interiors that balance elegance, comfort, and
              functionality.
            </p>

            <div className="mt-8 flex gap-4">
              <Button className="border border-white bg-primary text-primary-foreground hover:bg-accent/90">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-white  bg-accent text-white hover:bg-white hover:text-primary"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
