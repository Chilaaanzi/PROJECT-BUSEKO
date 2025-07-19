"use client";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { number: "10+", label: "Years in Business" },
  { number: "100+", label: "Projects Supported" },
  { number: "50+", label: "Product Varieties" },
  { number: "100%", label: "Customer Care" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-yellow-300/30">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-5">
            About <span className="text-zinc-950">Buseko Steel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Based on Lumumba Road in Lusaka, Buseko Steel supplies quality
            steel, building materials, and safety gear to contractors and
            developers across Zambia
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full lg:max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Building the Future, One Project at a Time
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded to address Zambia’s growing infrastructure needs, Buseko
              Steel has become Lusaka’s premier destination for high-strength
              steel and construction essentials. They understand local
              challenges—from sourcing certified materials to transport
              logistics—and have built a reputation on consistency and care.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Beyond supplying materials, Buseko Steel collaborates with
              contractors and engineers to ensure every project—from homes to
              commercial complexes—has the integrity it deserves.
            </p>
            <Link href={"/about"}>
              {" "}
              <Button
                size="lg"
                className=" hover:bg-yellow-400 hover:text-zinc-950"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-background h-40 flex flex-col justify-center items-center rounded-xl p-6 shadow-lg border border-border">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
