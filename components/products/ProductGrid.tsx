"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContentItem } from "@/lib/getContent";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Wrench,
  Home,
  Factory,
  Zap,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  structural: Factory,
  reinforcement: Building2,
  piping: Wrench,
  roofing: Home,
  section: Zap,
  sheets: ShieldCheck,
};

type Props = {
  products: ContentItem[];
};

const ITEMS_PER_PAGE = 6;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
};

export default function ProductGrid({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getIcon = (category?: string) => {
    if (!category) return Factory;
    const key = category.toLowerCase();
    return (
      (iconMap as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[
        key
      ] || Factory
    );
  };

  const categories = Array.from(
    new Set(
      products
        .map((p) => (typeof p.category === "string" ? p.category : undefined))
        .filter((cat): cat is string => typeof cat === "string"),
    ),
  );

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) =>
            typeof p.category === "string" && p.category === selectedCategory,
        );

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => {
            setSelectedCategory("all");
            setCurrentPage(1);
          }}
          className={`px-4 py-1.5 rounded-md text-sm ${
            selectedCategory === "all"
              ? "bg-yellow-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-1.5 rounded-md text-sm capitalize ${
              selectedCategory === category
                ? "bg-yellow-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 min-h-[60dvh] items-stretch z-50">
        <AnimatePresence>
          {paginated.map((product) => {
            const category =
              typeof product.category === "string"
                ? product.category
                : undefined;
            const Icon = getIcon(category);

            return (
              <motion.div
                key={product.slug}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <Card className="flex flex-col h-full group border border-zinc-300 overflow-hidden p-0 rounded-lg">
                  {/* Image */}
                  <div className="relative h-60 bg-amber-100 overflow-hidden">
                    {Array.isArray(product?.images) &&
                    product.images.length > 0 ? (
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                        <Icon className="h-16 w-16 text-primary" />
                      </div>
                    )}

                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-yellow-400 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {typeof product.category === "string"
                          ? product.category
                          : "Uncategorized"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow px-4 pt-4 pb-6">
                    <CardHeader className="p-0">
                      <CardTitle className="flex items-center space-x-3">
                        <Icon className="h-6 w-6 text-primary" />
                        <span>{product.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {typeof product.description === "string"
                          ? product.description
                          : "No description available"}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 pt-4 flex-grow">
                      <ul className="space-y-2 mb-6">
                        {Array.isArray(product.features) &&
                          product.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </CardContent>

                    <div className="flex space-x-3 mt-auto">
                      <Link href={"/#Quote"} className="w-full">
                        <Button className="w-full hover:bg-yellow-400 hover:text-zinc-950">
                          Get Quote
                        </Button>
                      </Link>
                      <Link href={`/products/${product.slug}`}>
                        <Button variant="outline" size="icon">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-zinc-950"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
