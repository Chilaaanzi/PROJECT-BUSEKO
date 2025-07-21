import type { Metadata } from "next";
import Footer from "@/components/common/footer";
import NavLinks from "@/components/common/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { ScrollMeter } from "@/components/common/scroll";
import ScrollToTop from "@/components/common/btt";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-poppins", // custom CSS variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buseko Steel — Hardware, Steel, and Building Materials in Zambia",
  description:
    "Buseko Steel is your reliable source in Zambia for hardware, steel products, and building materials. Trusted by builders, contractors, and home renovators nationwide.",
  keywords: [
    "hardware Zambia",
    "steel suppliers Lusaka",
    "building materials Zambia",
    "construction tools Zambia",
    "angle bars Zambia",
    "steel pipes Lusaka",
    "roofing supplies Zambia",
    "Buseko Steel",
    "power tools Zambia",
    "home renovation tools",
    "Zambia construction shop",
  ],
  authors: [{ name: "Buseko Steel Team", url: "https://busekosteel.com" }],
  generator: "Next.js",
  applicationName: "Buseko Steel",
  metadataBase: new URL("https://busekosteel.com"),
  openGraph: {
    title: "Buseko Steel — Hardware, Steel, and Building Materials in Zambia",
    description:
      "From steel bars to power tools, Buseko Steel offers everything you need for construction, plumbing, and electrical projects across Zambia.",
    url: "https://busekosteel.com",
    siteName: "Buseko Steel",
    images: [
      {
        url: "https://busekosteel.com/og-image.png", // Replace with actual OG image if available
        width: 1200,
        height: 630,
        alt: "Buseko Steel store and product preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@busekosteel", // Replace if they have an actual Twitter
    title: "Buseko Steel — Hardware, Steel, and Building Materials in Zambia",
    description:
      "Shop construction supplies, steel bars, power tools, and more at Buseko Steel – Zambia's trusted building materials supplier.",
    images: ["https://busekosteel.com/og-image.png"], // Replace if image exists
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const linksData = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contacts" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavLinks links={linksData} logoSrc="/logo.svg" />
      <ScrollMeter />
      <body
        className={`${poppins.variable} antialiased bg-white overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>

      <div className="w-full justify-center bg-zinc-950">
        {" "}
        <ScrollToTop />
        <Footer />
      </div>
    </html>
  );
}
