"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useKBar } from "kbar";
import { BorderBeam } from "./magicui/border-beam";
import { useLanguageStore } from "@/store/useLanguageStore";

export function Header() {
  const { query } = useKBar();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguageStore();

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMobileMenuOpen && window.scrollY > 10) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Theme toggle with animation
  const toggleTheme = (e) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(nextTheme));
    } else {
      setTheme(nextTheme);
    }
  };

  const handleGetStarted = () => {
    query.toggle();
  };

  return (
    <header
      className={`fixed top-4 inset-x-4 z-[60] max-w-screen-xl mx-auto rounded-2xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8
     transition-shadow transition-backdrop-blur duration-300
    ${
      isScrolled
        ? "bg-emerald-50/90 dark:bg-gray-900/90 backdrop-blur-md border border-green-200 dark:border-green-900 shadow-lg"
        : "bg-transparent border border-transparent shadow-none"
    }`}
    >
      {/* Logo Section */}
      <a href="/" className="flex items-center space-x-2 animate-fade-in-up">
        <Image
          src="/Agro.jpg"
          alt="Manzil Agro Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-serif font-bold text-lg text-green-800 dark:text-green-200 tracking-wide">
          Manzil Agro Park
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {[
          { key: "nav.about", href: "#about" },
          { key: "nav.vision", href: "#vision" },
          { key: "nav.lifestyle", href: "#lifestyle" },
          { key: "nav.resort", href: "#resort" },
          { key: "nav.contact", href: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative font-sans text-foreground font-medium text-base sm:text-lg transition-all duration-300 group"
          >
            <span className="relative z-10">{t(item.key)}</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </nav>

      {/* Desktop Controls */}
      <div className="hidden lg:flex items-center space-x-3">
        {/* Language toggle */}
        <Button
          variant="ghost"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="rounded-full h-9 px-4 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 font-bengali font-medium"
        >
          {language === "en" ? "বাংলা" : "English"}
        </Button>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full h-9 w-9 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* Join Project */}
        <Button
          onClick={handleGetStarted}
          className="rounded-full bg-primary text-primary-foreground font-medium px-6 py-2 shadow-md hover:scale-105 transition-transform"
        >
          {t("nav.join")}
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full h-9 w-9 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-green-800" />
          )}
        </Button>
        <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-4 sm:px-6 animate-fade-in-down">
          <div className="py-4 space-y-4 bg-emerald-50 dark:bg-gray-900 border border-green-200 dark:border-green-900 rounded-xl shadow-xl">
            {[
              { key: "nav.about", href: "#about" },
              { key: "nav.vision", href: "#vision" },
              { key: "nav.lifestyle", href: "#lifestyle" },
              { key: "nav.resort", href: "#resort" },
              { key: "nav.contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMobileMenu}
                className="relative block px-4 py-2 text-green-800 dark:text-green-200 text-base font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{t(item.key)}</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}

            <div className="px-4 pt-2">
              <Button
                className="w-full rounded-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  handleGetStarted();
                  toggleMobileMenu();
                }}
              >
                {t("nav.join")}
              </Button>
            </div>
          </div>
        </div>
      )}
      <BorderBeam duration={10} size={120} />
    </header>
  );
}
