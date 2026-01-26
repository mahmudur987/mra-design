import { Navbar } from "@/components/home/navbar/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MRA Design",
  description: "A transparent interior design firm",
  icons: {
    icon: "/favicon.jpg", // this line works too
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link
          rel="icon"
          href="/favicon.jpg"
          type="image/<generated>"
          sizes="<generated>"
        />

        <div className="bg-black">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
