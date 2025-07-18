import { Button } from "@/components/ui/button";
import { Truck, Shield, Calculator, BookImage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const trustIndicators = [
    { icon: Shield, text: "Quality Assured" },
    { icon: Truck, text: "Local Delivery" },
    { icon: Calculator, text: "Bulk Pricing" },
  ];

  return (
    <section id="home" className="relative min-h-[85dvh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={"/hero.jpg"}
          alt="Steel construction materials"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center lg:text-start">
            {"Zambia's Premier"}
            <span className="block text-yellow-400">Steel Supplier</span>
          </h1>

          <p className="text-sm md:text-xl text-white/90 mb-8 leading-relaxed text-center lg:text-start">
            Quality steel and building materials for construction professionals.
            From rebars to roofing, we deliver excellence to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 ">
            <Button className="text-zinc-950 bg-yellow-400  hover:bg-yellow-200 hover:scale-105">
              <Link href={"/#Quote"} className="flex gap-2 items-center">
                <Calculator className="h-5 w-5" />
                Get Instant Quote
              </Link>
            </Button>
            <Button className="text-zinc-950 bg-white  hover:bg-yellow-200 hover:scale-105">
              <Link href={"/products"} className="flex gap-2 items-center">
                <BookImage className="h-5 w-5" />
                View Products
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 ">
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
          </div>
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
