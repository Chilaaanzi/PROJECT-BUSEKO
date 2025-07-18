"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/common/loginButton";
import { Mail, Phone } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: LinkItem[];
  logoSrc: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, logoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Fixed Contact Bar on desktop only, visible only when not scrolled */}
      {!isScrolled && isDesktop && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-muted text-zinc-500 flex py-3 px-8 lg:px-40 justify-between">
          <section className="text-sm flex flex-row gap-6 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>example@email.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+260 771 923 958</span>
            </div>
          </section>

          <section className={`text-sm`}>
            Lusaka, Plot 165 Lumumba Rd, Matero next to Buseko Market
          </section>
        </div>
      )}

      {/* Main Navbar — shifted down if contact bar exists */}
      <div
        className={`fixed ${
          !isScrolled && isDesktop ? "top-[42px]" : "top-0"
        } left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-white"
        }`}
      >
        <div className="relative flex items-center justify-between py-4 px-8 lg:px-40">
          {/* Desktop Navbar Container */}
          <div className="hidden lg:flex items-center w-full">
            {/* Left: Logo + Name */}
            <div className="flex items-center flex-1">
              <Link href={links[0]?.href || "/"}>
                <div className="flex items-center cursor-pointer">
                  <Image src={logoSrc} alt="Logo" width={40} height={40} />
                  <h2
                    className={`ml-2 text-2xl font-extrabold uppercase ${
                      isScrolled ? "text-zinc-950" : "text-zinc-950"
                    }`}
                  >
                    Buseko<span className="text-yellow-400">Steel</span>
                  </h2>
                </div>
              </Link>
            </div>

            {/* Middle: Navigation Links */}
            <nav className="flex justify-center flex-1 space-x-4">
              {links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Button
                    variant="link"
                    className={`${
                      isScrolled ? "text-zinc-950" : "text-zinc-950"
                    } hover:text-zinc-400 active:text-gray-500 text-xs`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Right: Login Button */}
            <div className="flex justify-end flex-1">
              <LoginButton />
            </div>
          </div>

          {/* Mobile Phone Number */}
          {!isDesktop && (
            <div className="text-sm text-zinc-950 font-semibold uppercase">
              Buseko<span className="text-yellow-400">Steel</span>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 z-50"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-zinc-200 hover:text-zinc-500" />
              ) : (
                <FiMenu className="w-6 h-6 text-zinc-200 hover:text-zinc-500" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {!isDesktop && isOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-white z-40 flex flex-col text-zinc-600 items-start p-8 space-y-2 shadow-lg"
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-lg w-full text-start py-2 hover:bg-zinc-100 active:bg-zinc-200 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <LoginButton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavLinks;
