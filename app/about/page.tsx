"use client";
import {
  Shield,
  Truck,
  Users,
  Building2,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product is carefully selected and tested to meet international standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our customers' success is our success. We provide personalized service and expert guidance for every project.",
    },
    {
      icon: Truck,
      title: "Reliable Service",
      description:
        "Dependable delivery, consistent supply, and responsive support - that's our commitment to you.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "We're proud to contribute to Lusaka's growth and development through quality construction materials.",
    },
  ];

  const team = [
    {
      name: "Mehmood Asmal",
      role: "Founder & CEO",
      experience: "20+ years in construction industry",
    },
    {
      name: "Saad Asmal",
      role: "Sales Manager",
      experience: "15+ years in Sales and Customer Relations",
    },
    {
      name: "Aadil Ahmed",
      role: "Marketing Manager",
      experience: "10+ years in marketing industry",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 mt-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            About <span className="text-yellow-400">Buseko Steel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted partner in building excellence across Lusaka and
            beyond. Discover our story, values, and commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Buseko Steel was founded in 2020 with a simple vision: to provide
              {"Lusaka's"} construction industry with the highest quality steel
              and building materials.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From humble beginnings, we have grown into a trusted name, known
              for reliability and dedication to our clients success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We now offer over 50 products and have supported more than 100
              projects across Zambia.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6 bg-yellowtext-yellow-400/5 rounded-lg p-8"
          >
            {[
              { label: "Founded", value: "2020" },
              { label: "Projects", value: "100+" },
              { label: "Products", value: "50+" },
              { label: "Years", value: "10+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {item.value}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To be Zambia's premier steel and hardware supplier—recognized for our quality, reliability, and commitment to empowering builders, contractors, and communities with the materials they need to create lasting infrastructure and growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the most trusted name in construction—delivering dependable materials, expert service, and long-term value that supports the growth of Zambia’s infrastructure and the success of every project we’re part of.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-lg p-8 shadow-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="bg-yellowtext-yellow-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-6 hover:bg-muted transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-yellowtext-yellow-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Leadership Team
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="w-64 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-20 h-20 bg-yellowtext-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-yellow-400 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build with Us?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience the Buseko Steel difference. Get in touch today for a
            quote or to discuss your project requirements.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/quote"}>
              <Button size="lg" className="text-lg hover:bg-yellow-400">
                Get a Quote
              </Button>
            </Link>

            <Link href={"/contacts"}>
              {" "}
              <Button variant="outline" size="lg" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
