"use client";
import Accordion from "@/components/common/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What products does Buseko Steel offer?",
    answer:
      "Buseko Steel supplies a wide range of construction and hardware products including steel bars, H-beams, I-beams, roofing sheets, pipes, plumbing fittings, electrical tools, and solar panels.",
  },
  {
    question: "Where is Buseko Steel located?",
    answer:
      "We are based in Buseko Market, Lusaka, Zambia. You can view our exact location on the map embedded on our website or visit our Facebook page for directions.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we deliver within Lusaka and nearby areas. Delivery fees depend on distance and order size. You can request a delivery quote via our website’s quotation form.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can fill in the quotation form on our website by selecting the items and quantities you need. We’ll get back to you quickly with pricing and availability.",
  },
  {
    question: "Can I request a custom steel cut or special order?",
    answer:
      "Yes. We offer custom cutting services for steel beams and other materials. If you have unique requirements, just specify them in the quote form or call us directly.",
  },
  {
    question: "Do you offer bulk pricing?",
    answer:
      "We provide discounted rates for bulk purchases, especially for contractors and businesses. Use the quote form or contact us for a tailored price.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, mobile money (Airtel & MTN), and bank transfers. You can also get a payment breakdown when you request a quote.",
  },
  {
    question: "What makes Buseko Steel different?",
    answer:
      "We combine quality materials, fair pricing, and fast service. Whether you’re building, renovating, or resupplying your shop — we ensure you get value every step of the way.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FaqPage() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 mt-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Common <span className="text-yellow-400">FAQs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Frequently Asked Questions
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="py-10 px-4 md:px-12 max-w-7xl mx-auto max-h-max mb-20 -mt-10 bg-gray-50 rounded-sm"
        variants={itemVariants}
      >
        <Accordion items={faqItems} />
      </motion.section>
    </motion.div>
  );
}
