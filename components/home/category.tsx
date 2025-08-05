"use client";

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
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  const products = [
    {
      title: "Steel Rebars",
      slug: "steel-rebars",
      description:
        "High-tensile reinforcement bars for concrete structures. Available in various grades and diameters.",
      image: "/images/products/Reinforcement/rebar03.webp",
      icon: Building2,
      features: [
        "Grade low , medium and high",
        "all sizes available",
        "ASTM certified",
      ],
      category: "Reinforcement",
    },
    {
      title: "I-Beams & H-Beams",
      slug: "i-beams-h-beams",
      description:
        "Structural steel beams for heavy-duty construction. Perfect for industrial and commercial projects.",
      image: "/images/products/Structural/I-beam.webp",
      icon: Factory,
      features: [
        "Standard & custom sizes",
        "Hot-rolled steel",
        "Load certificates",
      ],
      category: "Structural",
    },
    {
      title: "Roofing Sheets",
      slug: "roofing-sheets",
      description:
        "Durable corrugated and flat roofing sheets with superior weather resistance.",
      image: "/images/products/Roofing/roofing.jpg",
      icon: Home,
      features: [
        "all sizes and thickness",
        "Pre-painted options",
        "25-year warranty",
      ],
      category: "Roofing",
    },
    {
      title: "Steel Pipes & Tubes",
      slug: "steel-pipes",
      description:
        "Steel pipes for plumbing, structural, and industrial applications.",
      image: "/images/products/Piping/piping.jpg",
      icon: Wrench,
      features: [
        "15mm - 150mm diameter",
        "Threaded & plain end",
        "light, medium and heavy duty quality",
      ],
      category: "Piping",
    },
    {
      title: "U-Channels & Angles",
      slug: "u-channels-angles",
      description:
        "Versatile steel sections for framework, supports, and general construction needs.",
      image: "/images/products/Sections/uchannel03.jpg",
      icon: Zap,
      features: ["Multiple sizes", "Hot-dipped galvanized", "Custom cutting"],
      category: "Sections",
    },
    {
      title: "Steel Sheets & Plates",
      slug: "steel-sheets-plates",
      description:
        "Flat steel products for fabrication, welding, and general metalworking applications.",
      image: "/images/products/Sheets/sheets.jpg",
      icon: ShieldCheck,
      features: ["0.4mm to 100mm thickness", "Various grades", "Cut to size"],
      category: "Sheets",
    },
  ];

  return (
    <section id="products" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-5">
            Our <span className="text-yellow-400">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive steel and building materials for every construction
            need. Quality guaranteed, competitively priced, delivered on time.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {products.map((product, index) => {
            const firstImage = Array.isArray(product.image)
              ? product.image[0]
              : typeof product.image === "string"
                ? product.image
                : null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group transition-all duration-300 border border-zinc-300 overflow-hidden p-0">
                  {/* Product Image */}
                  <div className="relative w-full h-60">
                    {firstImage ? (
                      <Image
                        src={firstImage}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                        <product.icon className="h-16 w-16 text-primary" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <CardHeader className="p-0">
                      <CardTitle className="flex items-center space-x-3">
                        <product.icon className="h-6 w-6 text-primary" />
                        <span>{product.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 pt-4">
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex space-x-3">
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
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href={"/products"}
            className="flex w-full h-full justify-center items-center gap-2"
          >
            <Button className="bg-yellow-400 hover:bg-zinc-950 hover:text-white text-zinc-950">
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
