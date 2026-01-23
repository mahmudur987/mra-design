import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <div className=" min-h-screen max-w-500 w-full mx-auto">
      <Hero />
      <Services />
    </div>
  );
}
