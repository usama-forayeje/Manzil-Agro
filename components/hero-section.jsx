"use client";
import { ArrowRight, Play, Sparkles, Leaf, Star } from 'lucide-react'
import { useLanguageStore } from "@/store/useLanguageStore";
import React, { useEffect, useState } from "react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Header from "./header";

export function HeroSection() {
  const { t } = useLanguageStore();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%2334d399\' fillOpacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <ParticleBackground />
      <Header />

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="inline-block animate-fadeInUp">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold shadow-lg backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t("hero.tagline")}
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-fadeInUp animation-delay-200">
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                  {t("hero.title").split(" ").slice(0, 2).join(" ")}
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">
                  {t("hero.title").split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fadeInUp animation-delay-400">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
                <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    {t("hero.cta.primary")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button className="group flex items-center px-8 py-4 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  {t("hero.cta.secondary")}
                </button>
              </div>

              <StatsSection />
            </div>

            {/* Right Carousel */}
            <div className="relative flex items-center justify-center animate-fadeInUp animation-delay-800">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl transform scale-150"></div>
              <EnhancedCarousel />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

// Particle Animation Component
function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/30 dark:bg-emerald-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float-${particle.id} ${particle.speed + 3}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Floating leaves */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Leaf className="w-8 h-8 text-emerald-300/40" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Sparkles className="w-6 h-6 text-green-400/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
        <Star className="w-5 h-5 text-emerald-400/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-500">
        <Leaf className="w-7 h-7 text-green-300/40" />
      </div>
    </div>
  );
}

// Enhanced Carousel Component
function EnhancedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/dragon.jpg?updatedAt=1758202649336", alt: "Modern hydroponic greenhouse with lush spinach" },
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/dragon-pic.jpg?updatedAt=1758202734453", alt: "Innovative vertical hydroponic garden indoors" },
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/bagan.jpg?updatedAt=1758202811288", alt: "Plants and greenhouses on fields aerial view" },
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/agro-sakhawat.jpg?updatedAt=1758203038867", alt: "Hydroponic system showcasing green plants" },
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/manzil-agro-mango.jpg?updatedAt=1758203121783", alt: "Greenhouse overhead irrigation" },
    { src: "https://ik.imagekit.io/lgd2hue3i/Manzil-Agro/faruk-agro.jpg?updatedAt=1758202911139", alt: "Sustainable agriculture field at sunrise" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-[500px] w-[350px] mx-auto">
        {images.map((image, index) => {
          const offset = (index - currentIndex + images.length) % images.length;
          const isCenter = offset === 0;
          const isLeft = offset === images.length - 1;
          const isRight = offset === 1;
          const isVisible = isCenter || isLeft || isRight;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out rounded-3xl overflow-hidden shadow-2xl ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${isCenter
                  ? 'z-30 scale-100 translate-x-0 rotate-0'
                  : isLeft
                    ? 'z-20 scale-75 -translate-x-16 -rotate-6 translate-y-8'
                    : 'z-20 scale-75 translate-x-16 rotate-6 translate-y-8'
                }`}
              style={{
                width: '300px',
                height: '450px',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) ${isCenter
                  ? 'scale(1) translateX(0) rotate(0deg)'
                  : isLeft
                    ? 'scale(0.75) translateX(-80px) rotate(-6deg) translateY(30px)'
                    : 'scale(0.75) translateX(80px) rotate(6deg) translateY(30px)'
                  }`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              {isCenter && (
                <div className="absolute inset-0 ring-2 ring-emerald-400/50 rounded-3xl animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-emerald-400 w-8'
              : 'bg-white/40 hover:bg-white/60'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// Stats Component
/* Stats Section */
function StatsSection() {
  const { t } = useLanguageStore();
  const stats = [
    { number: "50+", label: t("hero.stats.farms"), icon: "🌱" },
    { number: "200+", label: t("hero.stats.farmers"), icon: "👨‍👩‍👧‍👦" },
    { number: "150%", label: t("hero.stats.yield"), icon: "📈" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group"
        >
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}