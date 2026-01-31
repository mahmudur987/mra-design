"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Your Name" />
      <Input placeholder="Email Address" />
      <Input placeholder="Phone Number" />
      <Textarea placeholder="Tell us about your project..." rows={4} />
      <Button className="bg-primary text-white w-full">Send Message</Button>
    </form>
  );
}
