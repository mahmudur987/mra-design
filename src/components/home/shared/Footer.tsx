import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-semibold">MRA Design</h3>
          <p className="mt-4 text-sm opacity-70">
            Crafting timeless interiors with creativity and precision.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/gallery">Design Gallery</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-80">
            Dhaka, Bangladesh
            <br />
            info@mradesign.com
          </p>
        </div>
      </div>

      <p className="mt-12 text-center text-xs opacity-50">
        © {new Date().getFullYear()} MRA Design. All rights reserved.
      </p>
    </footer>
  );
}
