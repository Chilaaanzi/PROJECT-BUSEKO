"use client";
import Accordion from "@/components/common/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What products does Gelo’s Treat offer?",
    answer:
      "We sell a wide variety of baking tools such as mixers, pans, cutters, and decorating kits. We also offer fresh pastries and treats made in-house.",
  },
  {
    question: "Where is Gelo’s Treat located?",
    answer:
      "Gelo’s Treat is based in Zambia. Our exact location and pickup points are shared upon order confirmation or can be found on our contact page.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery within selected areas in Zambia. Delivery fees may vary based on your location.",
  },
  {
    question: "Can I order custom cakes or pastries?",
    answer:
      "Absolutely! We take custom orders for cakes, cupcakes, and other baked goods. Just send us your idea or request through WhatsApp or our order form.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can place an order directly on our website or by messaging us on WhatsApp. For tools, just add to cart and checkout. For pastries or custom items, reach out to confirm details.",
  },
  {
    question: "Do you offer wholesale for baking tools?",
    answer:
      "Yes, we do provide bulk pricing for bakeries or resellers. Contact us to get a quote based on the items and quantity you need.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept mobile money (Airtel, MTN), bank transfers, and cash on delivery (for some areas).",
  },
  {
    question: "Do you teach baking or offer tutorials?",
    answer:
      "While we don’t offer formal classes yet, we do share tips, recipes, and baking guides on our blog and social media.",
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
