import { Stats } from "@/components/home/Achievements/Achievements";
import { CTA } from "@/components/home/CTA/CTA";
import { DesignGallery } from "@/components/home/designGallary/DesignGallery";
import Hero from "@/components/home/hero/Hero";
import { HowItWorks } from "@/components/home/how-it-work/HowItWorks";
import { Packages } from "@/components/home/package/Packages";
import Projects from "@/components/home/projects/Projects";
import Services from "@/components/home/services/Services";
import { Footer } from "@/components/shared/Footer";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className=" min-h-screen max-w-500 w-full mx-auto space-y-20">
      <Hero />
      <Services />
      <Projects />
      <DesignGallery />
      <HowItWorks />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
