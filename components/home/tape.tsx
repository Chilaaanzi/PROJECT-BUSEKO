"use client";
import { motion } from "framer-motion";
import {
  Factory,
  Hammer,
  ShieldCheck,
  Truck,
  Globe,
  BadgeCheck,
} from "lucide-react";

const items = [
  { icon: <Factory className="w-5 h-5" />, text: "Made in Zambia" },
  {
    icon: <Hammer className="w-5 h-5" />,
    text: "We Manufacture Brickforce & Conforce Wires",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    text: "Strong. Local. Reliable.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    text: "Built for African Construction",
  },
  { icon: <Globe className="w-5 h-5" />, text: "Supporting Local Industry" },
  { icon: <Truck className="w-5 h-5" />, text: "Fast Delivery Across Zambia" },
];

const ConstructionTapeMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden  mb-8">
      {/* Tape container */}
      <div
        className="relative shadow-2xl py-6"
        style={{
          background: `
            linear-gradient(180deg,
              #FFD700 0%,
              #FFC700 15%,
              #FFB000 30%,
              #FFC700 45%,
              #FFD700 60%,
              #FFC700 75%,
              #FFB000 90%,
              #FFA000 100%
            )
          `,
        }}
      >
        {/* Top & Bottom Edge Shadows */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Diagonal Stripes */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #000 0px,
                #000 2px,
                transparent 2px,
                transparent 8px
              )
            `,
          }}
        />

        {/* Warning Borders */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-black opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black opacity-80" />

        {/* Dashed Borders */}
        <div
          className="absolute top-2 left-0 right-0 h-0.5"
          style={{
            background:
              "repeating-linear-gradient(90deg, #000 0, #000 10px, transparent 10px, transparent 20px)",
          }}
        />
        <div
          className="absolute bottom-2 left-0 right-0 h-0.5"
          style={{
            background:
              "repeating-linear-gradient(90deg, #000 0, #000 10px, transparent 10px, transparent 20px)",
          }}
        />

        {/* Main scrolling content */}
        <div className="relative py-3 px-4 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap text-black font-black uppercase tracking-widest"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop" as const,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...items, ...items, ...items].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-1"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
              >
                <div className="bg-black/20 rounded-full p-1.5">
                  {item.icon}
                </div>
                <span className="text-base md:text-lg font-extrabold">
                  {item.text}
                </span>
                <div className="w-0 h-6 border-l-2 border-black/40 mx-4" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tape Texture Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 80% 40%, rgba(255,255,255,0.6) 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.4) 1px, transparent 1px),
              radial-gradient(circle at 60% 30%, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px, 45px 45px, 25px 25px, 35px 35px",
          }}
        />

        {/* Worn edges */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/10 to-transparent" />
      </div>

      {/* Ground Shadow */}
      <div
        className="absolute top-full left-4 right-4 h-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
};

export default ConstructionTapeMarquee;
