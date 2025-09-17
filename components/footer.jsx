"use client";

import {
  Youtube,
  Instagram,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Leaf,
  Code2Icon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useKBar } from "kbar";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export function Footer() {
  const { query } = useKBar();
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const textRef = useRef(null);
  const { theme } = useTheme();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isHovering && textRef.current) {
      textRef.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        textRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isHovering]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleGetStarted = () => query.toggle();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/40 to-lime-50/30 dark:from-gray-900 dark:via-green-950/10 dark:to-emerald-950/10">
      {/* Agro Text Background */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        ref={textRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h1
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] 2xl:text-[28rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-300/20 via-green-400/10 to-lime-200/10 dark:from-emerald-800/30 dark:via-green-700/15 dark:to-lime-700/20 select-none font-heading"
          style={{
            textShadow: isHovering
              ? `${mousePosition.x * 0.01}px ${
                  mousePosition.y * 0.01
                }px 20px rgba(34,197,94,0.1)`
              : "0px 0px 40px rgba(34,197,94,0.05)",
            transform: isHovering
              ? `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              : "translate(0px, 0px)",
            transition: "all 0.3s ease-out",
          }}
        >
          MANZIL
        </h1>
      </div> */}

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-500/10 via-green-400/8 to-transparent dark:from-emerald-800/20 dark:via-green-700/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-600/15 via-emerald-500/10 to-transparent blur-sm dark:from-green-600/25 dark:via-emerald-500/20"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-100/20 via-transparent to-transparent dark:from-green-900/10"></div>

      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent dark:via-emerald-400/60"></div>
        <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-green-600/50 to-transparent blur-sm dark:via-green-500/70"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-gray-900 dark:text-white mb-4">
            Grow with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500">
              Agro
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Join Manzil Agro Park and be part of the sustainable growth
            revolution.
          </p>
          {/* <Button
            size="lg"
            onClick={handleGetStarted}
            className="group bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 hover:from-emerald-700 hover:via-green-600 hover:to-lime-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl transition-all duration-500 hover:scale-105 border-none"
          >
            <Leaf className="w-5 h-5 mr-2 animate-bounce" />
            Join Project
          </Button> */}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          {/* Logo & Contact */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center justify-center sm:justify-start">
              <a
                href="/"
                className="flex items-center space-x-2 animate-fade-in-up"
              >
                <Image
                  src={theme === "dark" ? "/Agro.jpg" : "/Agro.jpg"}
                  alt="Manzil Agro Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-lg text-green-800 dark:text-green-200 tracking-wide">
                  Manzil Agro Park
                </span>
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 max-w-md text-center sm:text-left mx-auto sm:mx-0">
              Bangladesh's premier agro park driving sustainable agriculture and
              innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500 dark:text-green-400" />
                info@manzilagropark.com
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500 dark:text-green-400" />
                +880 1234-567890
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 dark:text-green-400" />
                Dhaka, Bangladesh
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              {[Youtube, Instagram, Github, Twitter, Linkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-emerald-200/50 dark:border-green-700/50 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Vision", "Lifestyle", "Resort", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-green-400 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Business Divisions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Business Divisions
            </h3>
            <ul className="space-y-2">
              {[
                "Manzil Agro Park",
                "Manzil E-commerce",
                "Manzil Shop",
                "Manzil Housing",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-green-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200/40 dark:border-green-700/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            © 2025 Manzil Agro Park. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-emerald-200 dark:border-green-700 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-green-900/30 text-gray-700 dark:text-gray-300 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-emerald-600 dark:text-green-400 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </motion.div>
    </footer>
  );
}
