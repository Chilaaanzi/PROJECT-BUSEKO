"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Calculator, BookImage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const bgImages = [
  "/hero.jpg",
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images to avoid flicker on change
  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === bgImages.length - 1 ? 0 : prev + 1,
      );
    }, 7000); // change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const trustIndicators = [
    { icon: Shield, text: "Quality Assured" },
    { icon: Truck, text: "Local Delivery" },
    { icon: Calculator, text: "Bulk Pricing" },
  ];

  return (
    <section
      id="home"
      className="relative bg-zinc-900 min-h-screen lg:min-h-[80vh] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
            exit={{ opacity: 0, scale: 1.3, filter: "blur(4px)" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 will-change-auto"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={bgImages[currentImageIndex]}
              alt="Steel construction materials"
              layout="fill"
              objectFit="cover"
              priority={currentImageIndex === 0} // prioritize first image only
              unoptimized={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center lg:text-start"
          >
            {"Zambia's Premier"}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-yellow-400"
            >
              Steel & Hardware Supplier
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-xl text-white/90 mb-8 leading-relaxed text-center lg:text-start"
          >
            Supplying top-quality steel and construction-grade hardware tools to
            professionals and builders across Zambia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 lg:max-w-2xl"
          >
            <Link href={"/#Quote"} className="w-full">
              <Button className="w-full text-zinc-950 bg-yellow-400 hover:bg-zinc-950 hover:animate-pulse hover:text-white transition-all ">
                <Calculator className="h-5 w-5" />
                Get Instant Quote
              </Button>
            </Link>

            <Link href={"/products"} className="w-full">
              <Button className="w-full text-zinc-950 bg-white hover:bg-zinc-950 hover:animate-pulse hover:text-white transition-all">
                <BookImage className="h-5 w-5" />
                View Products
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            {trustIndicators.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-white"
              >
                <div className="bg-yellow-400/20 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <span className="font-semibold text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
