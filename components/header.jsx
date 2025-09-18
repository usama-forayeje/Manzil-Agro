'use client';

import { useLanguageStore } from "@/store/useLanguageStore";
import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { language, toggleLanguage, t } = useLanguageStore();

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

  // Theme Toggle with View Transition Animation
  const toggleTheme = (e) => {
    if (!document.startViewTransition) {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    document.startViewTransition(() => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark");
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-4 inset-x-4 z-[60] max-w-screen-xl mx-auto rounded-2xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8
     transition-all duration-500 backdrop-blur-xl
    ${isScrolled
          ? "bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30 shadow-2xl shadow-emerald-500/10"
          : "bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 shadow-lg"
        }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3 group">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              src="/Agro.jpg"
              alt="Manzil Agro Park Logo"
              className="w-full h-full object-cover rounded-full"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
        </div>
        <span className="font-serif font-bold text-xl text-gray-800 dark:text-white tracking-wide group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          Manzil Agro Park
        </span>
      </div>

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
            className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 group"
          >
            <span className="relative z-10">{t(item.key)}</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </nav>

      {/* Desktop Controls */}
      <div className="hidden lg:flex items-center space-x-3">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 font-medium border border-white/30 dark:border-gray-700/30"
        >
          {language === "en" ? "বাংলা" : "English"}
        </button>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 border border-white/30 dark:border-gray-700/30 flex items-center justify-center"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          {t("nav.join")}
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 border border-white/30 dark:border-gray-700/30 flex items-center justify-center"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button
          onClick={toggleMobileMenu}
          className="w-9 h-9 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 border border-white/30 dark:border-gray-700/30 flex items-center justify-center"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-4 mt-2">
          <div className="py-6 space-y-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl">
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
                className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-all duration-300"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="px-6 pt-2">
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                {t("nav.join")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
