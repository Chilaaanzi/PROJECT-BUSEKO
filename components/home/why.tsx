"use client";

import {
  ThumbsUp,
  Clock,
  Handshake,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Trusted Steel Supplier",
    description:
      "Serving thousands across Lusaka and beyond with quality steel and hardware.",
    icon: <ThumbsUp className="w-6 h-6 text-zinc-600" />,
  },
  {
    title: "Wide Product Range",
    description:
      "From rebars and I‑beams to roofing sheets and U‑channels — we stock it all.",
    icon: <ShoppingCart className="w-6 h-6 text-zinc-600" />,
  },
  {
    title: "Prompt Delivery",
    description:
      "Fresh stock, on-site anytime — keeping your construction on schedule.",
    icon: <Clock className="w-6 h-6 text-zinc-600" />,
  },
  {
    title: "Custom Orders Welcome",
    description:
      "Need specific sizes or shapes? Our flexible service handles custom requests.",
    icon: <Handshake className="w-6 h-6 text-zinc-600" />,
  },
  {
    title: "Secure Payments",
    description:
      "Pay confidently via mobile money or bank — safe, efficient, Zambia-ready.",
    icon: <ShieldCheck className="w-6 h-6 text-zinc-600" />,
  },
  {
    title: "Construction Partner",
    description:
      "More than a supplier — we’re your go-to construction ally on every site.",
    icon: <ThumbsUp className="w-6 h-6 text-zinc-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-10">
          Why <span className="text-yellow-400">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-sm transition ${
                index % 2 === 0 ? "bg-white" : "bg-zinc-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                {reason.icon}
                <h3 className="text-lg font-semibold text-zinc-800">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
