import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { LoginButton } from "@/components/common/loginButton";

const Footer = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+260 977 123 456" },
    { icon: Mail, label: "Email", value: "info@busekosteel.com" },
    {
      icon: MapPin,
      label: "Address",
      value: "Industrial Area, Lusaka, Zambia",
    },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contacts" },
    { name: "FAQs", url: "/faq" },
    { name: "Blog", url: "/blogs" },
  ];

  const today = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white text-center lg:text-start">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold mb-4">
                BUSEKO<span className="text-yellow-400">STEEL</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Zambias premier steel and building materials supplier. Quality
                products, competitive prices.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 p-2 rounded-full hover:bg-yellow-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
              <LoginButton onDarkBackground={true} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-white/70 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3 text-white/70">
              <li>Steel Rebars</li>
              <li>I-Beams & H-Beams</li>
              <li>Roofing Sheets</li>
              <li>Steel Pipes</li>
              <li>U-Channels</li>
              <li>Steel Plates</li>
              <li>Many more</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-center lg:justify-start space-x-3"
                >
                  <item.icon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="text-white/90">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center  space-y-4 md:space-y-0">
            <div className="text-white/50 text-sm">
              © 2022 - {today} Buseko Steel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-white/50 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-yellow-400 transition-colors"
              >
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
