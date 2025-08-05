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
    <div className="relative bg-yellow-400 overflow-hidden border-t-4 border-b-4 border-black rotate-[-2deg] shadow-lg">
      <motion.div
        className="flex whitespace-nowrap text-black text-sm md:text-base font-bold uppercase tracking-wider py-4 px-6"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 border-l-2 border-black pl-4 pr-6"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ConstructionTapeMarquee;
