"use client";

import { SingleContent } from "@/lib/getSingleContent";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProductDetails({
  product,
}: {
  product: SingleContent;
}) {
  const images = product.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const price = typeof product.price === "number" ? product.price : undefined;
  const stock = typeof product.stock === "number" ? product.stock : undefined;
  const category =
    typeof product.category === "string" ? product.category : undefined;
  const description =
    typeof product.description === "string" ? product.description : undefined;

  return (
    <div className="max-w-6xl mx-auto mt-40 mb-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side: images + description */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden border border-zinc-700 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[currentIndex] || "placeholder"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex] || "/placeholder.jpg"}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-zinc-900 text-yellow-400 rounded-full p-3 shadow-lg transition"
                >
                  ◀
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-zinc-900 text-yellow-400 rounded-full p-3 shadow-lg transition"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {/* Description below images */}
          {description && (
            <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Right side: other product info + markdown content */}
        <div className="lg:w-1/2 flex flex-col justify-start space-y-6">
          <h1 className="text-4xl font-extrabold text-yellow-400">
            {product.title}
          </h1>

          <div className="flex flex-wrap gap-4 items-center mt-2">
            {price !== undefined && (
              <div className="px-4 py-2 bg-zinc-700 text-yellow-400 font-semibold rounded-lg shadow-sm">
                Price: <span className="text-yellow-300">K {price}</span>
              </div>
            )}

            {stock !== undefined && (
              <div
                className={`px-4 py-2 rounded-lg shadow-sm font-semibold ${
                  stock > 0
                    ? "bg-green-800 text-green-300"
                    : "bg-red-800 text-red-400"
                }`}
              >
                {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
              </div>
            )}

            {category && (
              <div className="px-4 py-2 bg-zinc-700 text-yellow-400 font-medium rounded-lg shadow-sm capitalize">
                Category: {category}
              </div>
            )}
          </div>

          {typeof product.contentHtml === "string" && (
            <div
              className="markdown-body prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: product.contentHtml }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
