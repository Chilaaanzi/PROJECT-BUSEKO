import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { LoginButton } from "@/components/common/loginButton";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(+260) 977-800-320",
      link: "tel:+260977800320",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Busekosteel1@gmail.com",
      link: "mailto:Busekosteel1@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address 1",
      value: "matero next to buseko market, Plot 165 Lumumba Rd",
      link: "https://maps.app.goo.gl/Bp9B4g5wbxhC8gh2A",
    },
    {
      icon: MapPin,
      label: "Address 2",
      value: "shop no A19 westgate, Lumumba Rd, Lusaka",
      link: "https://maps.app.goo.gl/SzqMgptaWwxyw7ScA",
    },

    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/busekosteel?mibextid=ZbWKwL",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/buseko_steel/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contacts" },
    { name: "FAQs", url: "/faq" },
    { name: "Blog", url: "/blogs" },
  ];

  const stock = [
    { name: "Steel Rebars", url: "/products/steel-rebars" },
    { name: "I-Beams & H-Beams", url: "/products/i-beams-h-beams" },
    { name: "Roofing Sheets", url: "/products/roofing-sheets" },
    { name: "Steel Pipes", url: "/products/steel-pipes" },
    { name: "U-Channels", url: "/products/u-channels-angles" },
    { name: "Steel Plates", url: "/products/steel-sheets-plates" },
    { name: "Cornforce Wire", url: "/products/Cornforce-wire" },
  ];

  const developer = [
    {
      name: "BridgedWorks",
      url: "#",
    },
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
                    target="_blank"
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
              {stock.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.url}
                    className="text-white/70 hover:text-yellow-400 transition-colors"
                  >
                    {product.name}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Link
                  href={item.link}
                  key={item.label}
                  className="flex items-start justify-center lg:justify-start space-x-3  "
                >
                  <item.icon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0 hidden lg:flex" />
                  <div>
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="text-white/90 hover:text-yellow-400">
                      {item.value}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-start  space-y-4 md:space-y-0">
            <div className="text-white/50 text-sm lg:max-w-md">
              © 2020 - {today} Buseko Steel. All rights reserved. Built with
              care by{" "}
              <Link
                href={developer[0].url}
                className="hover:text-yellow-400 transition-colors hover:underline"
              >
                {developer[0].name}
              </Link>{" "}
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-white/50 hover:text-yellow-400 transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-yellow-400 transition-colors hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-yellow-400 transition-colors hover:underline"
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
