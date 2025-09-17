"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Star,
  Heart,
  Shield,
} from "lucide-react";

export default function PremiumHeroSection() {
  const [currentShape, setCurrentShape] = useState(0);

  const shapes = [
    {
      id: 1,
      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "আধুনিক কৃষি",
      gradient: "from-emerald-500 via-green-600 to-emerald-700",
    },
    {
      id: 2,
      clipPath:
        "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
      image:
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "হালাল রিসোর্ট",
      gradient: "from-amber-500 via-orange-500 to-red-500",
    },
    {
      id: 3,
      clipPath:
        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
      image:
        "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "ফল বাগান",
      gradient: "from-yellow-400 via-amber-500 to-orange-600",
    },
    {
      id: 4,
      clipPath: "circle(50% at 50% 50%)",
      image:
        "https://images.pexels.com/photos/7457011/pexels-photo-7457011.jpeg",
      title: "সম্প্রদায়",
      gradient: "from-teal-400 via-emerald-500 to-green-600",
    },
    {
      id: 5,
      clipPath:
        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      image:
        "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "লাইফস্টাইল ভিলেজ",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [shapes.length]);

  const nextShape = () => {
    setCurrentShape((prev) => (prev + 1) % shapes.length);
  };

  const prevShape = () => {
    setCurrentShape((prev) => (prev - 1 + shapes.length) % shapes.length);
  };

  const floatingElements = [
    { icon: Leaf, color: "text-emerald-400", delay: 0, x: "10%", y: "20%" },
    { icon: Star, color: "text-yellow-400", delay: 1, x: "85%", y: "15%" },
    { icon: Heart, color: "text-rose-400", delay: 2, x: "15%", y: "70%" },
    { icon: Shield, color: "text-blue-400", delay: 3, x: "80%", y: "75%" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-800 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-gradient-to-br from-emerald-500/20 to-transparent"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Floating Icons */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${element.color} opacity-20`}
              style={{ left: element.x, top: element.y }}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + element.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay,
              }}
            >
              <IconComponent size={32} />
            </motion.div>
          );
        })}

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/30 to-green-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-amber-400/30 to-orange-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl space-y-8 lg:mr-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-600/20 border border-emerald-400/30 backdrop-blur-sm"
          >
            <motion.div
              className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 mr-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-emerald-200 font-medium tracking-wide">
              Sustainable Agro Lifestyle Project
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <motion.span
                className="bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                মানযিল
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["100%", "0%", "100%"] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                এগ্রো পার্ক
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light"
          >
            আধুনিক কৃষি, পরিবারিক লাইফস্টাইল ভিলেজ ও প্রাইভেট হালাল রিসোর্ট
          </motion.p>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-r from-emerald-900/50 to-green-800/50 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/20 shadow-2xl"
          >
            <motion.p
              className="text-2xl text-emerald-100 mb-6 font-medium"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "কৃষিই আমাদের ভবিষ্যৎ, কৃষিই আমাদের শক্তি"
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 text-white font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                বিনিয়োগের সুযোগ
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 font-semibold"
              >
                আরও জানুন
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { value: "৫০০+", label: "শেয়ার সুযোগ" },
              { value: "৫০০০+", label: "ফল গাছ" },
              { value: "৩", label: "রিসোর্ট ও কটেজ" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-emerald-800/40 to-green-900/40 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 text-center shadow-xl"
              >
                <motion.p
                  className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-emerald-200 mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Shape Carousel */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-0 w-full max-w-xl relative"
          >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full flex justify-between px-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevShape}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center backdrop-blur-sm border border-emerald-400/30"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextShape}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center backdrop-blur-sm border border-emerald-400/30"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Shape Container */}
            <div className="relative h-96 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentShape}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    rotateY: { duration: 0.6 },
                  }}
                  className="absolute inset-0"
                  style={{ perspective: "1000px" }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${shapes[currentShape].gradient} opacity-20 blur-3xl rounded-3xl`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Main Shape */}
                  <motion.div
                    className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl"
                    style={{
                      clipPath: shapes[currentShape].clipPath,
                      background: `linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.2))`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${shapes[currentShape].image})`,
                      }}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${shapes[currentShape].gradient} opacity-70`}
                    />

                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl lg:text-3xl font-bold text-white text-center px-4 drop-shadow-lg"
                      >
                        {shapes[currentShape].title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Shape Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {shapes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentShape(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentShape
                      ? "bg-emerald-400 shadow-lg shadow-emerald-400/50"
                      : "bg-emerald-800 hover:bg-emerald-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Dividend Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 bg-gradient-to-r from-emerald-900/60 to-green-800/60 backdrop-blur-xl p-6 rounded-3xl border border-emerald-500/30 shadow-2xl"
            >
              <div className="flex items-center">
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-emerald-100 mb-1">
                    ২০২৭ সাল থেকে লভ্যাংশ
                  </h4>
                  <p className="text-emerald-300 font-medium">
                    আজীবন মালিকানা ও আজীবন মুনাফা
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
