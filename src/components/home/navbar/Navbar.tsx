"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Inspirations", href: "/inspirations" },
  { name: "Studio", href: "/studio" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Our Process", href: "/process" },
  { name: "Get in Touch", href: "/contact" },
];

const pageLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Join Our Team", href: "/careers" },
  { name: "Pricing & Payments", href: "/pricing" },
  { name: "Policies", href: "/policies" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Contact Support", href: "/support" },
];

export function Navbar() {
  const menuItem = navLinks.map((link) => (
    <NavigationMenuItem key={link.name}>
      <Link
        href={link.href}
        className="tracking-wide text-white hover:text-red-700"
      >
        {link.name}
      </Link>
    </NavigationMenuItem>
  ));

  return (
    <div className="navbar h-20 border-b">
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-bgSoft rounded-box z-10 mt-3 w-56 p-2"
          >
            {menuItem}

            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 bg-bgSoft w-48">
                  {pageLinks.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <Link
          href="/"
          className="btn btn-ghost text-left leading-tight bg-gray-200"
        >
          <span className="block font-playfair text-xl tracking-widest">
            MRA
          </span>
          <span className="block text-xs uppercase tracking-[0.3em] text-gray-500">
            Interiors
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-1">
          {menuItem}

          <li>
            <details>
              <summary className="text-white hover:text-red-700">More</summary>
              <ul className="p-2 bg-bgSoft w-48 z-10">
                {pageLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end">
        <Button className="bg-primary text-primary-foreground ">
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
