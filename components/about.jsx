"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import { motion } from "framer-motion";
import { Leaf, Users, Landmark, Building2 } from "lucide-react";

export function AboutSection() {
    const { t, language, toggleLanguage } = useLanguageStore();

    const goals = [
        {
            icon: <Leaf className="w-8 h-8 text-emerald-500" />,
            title: language === "bn" ? "খাদ্য নিরাপত্তা" : "Food Security",
            desc:
                language === "bn"
                    ? "বিশুদ্ধ ও স্বাস্থ্যকর খাবার উৎপাদন।"
                    : "Producing pure and healthy food.",
        },
        {
            icon: <Users className="w-8 h-8 text-emerald-500" />,
            title: language === "bn" ? "পরিবারিক লাইফস্টাইল" : "Family Lifestyle",
            desc:
                language === "bn"
                    ? "শান্তিপূর্ণ গ্রামীণ পরিবেশ ও আধুনিক সুবিধা।"
                    : "Peaceful rural environment with modern facilities.",
        },
        {
            icon: <Building2 className="w-8 h-8 text-emerald-500" />,
            title: language === "bn" ? "হালাল রিসোর্ট" : "Halal Resort",
            desc:
                language === "bn"
                    ? "পরিবারের জন্য নিরাপদ বিনোদন কেন্দ্র।"
                    : "Safe resort and entertainment for families.",
        },
        {
            icon: <Landmark className="w-8 h-8 text-emerald-500" />,
            title: language === "bn" ? "সামাজিক অবদান" : "Social Contribution",
            desc:
                language === "bn"
                    ? "মসজিদ, মাদরাসা ও আধ্যাত্মিক উন্নয়ন।"
                    : "Mosque, Madrasa and spiritual contribution.",
        },
    ];

    return (
        <section className="relative py-28 bg-background overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/40 to-transparent dark:from-emerald-900/20" />

            <div className="container mx-auto px-6 lg:px-12">
             

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent"
                    >
                        {language === "bn"
                            ? "🌱 মানযিল এগ্রো পার্ক প্রজেক্ট 🌱"
                            : "🌱 Manzil Agro Park Project 🌱"}
                    </motion.h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {language === "bn"
                            ? "একটি আধুনিক কৃষি, পরিবারিক লাইফস্টাইল ও প্রাইভেট হালাল রিসোর্ট মডেল"
                            : "A modern agriculture, family lifestyle & private halal resort model"}
                    </p>
                </motion.div>

                {/* Intro / Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                            {language === "bn" ? "ভূমিকা" : "Introduction"}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {language === "bn"
                                ? "আলহামদুলিল্লাহ, আল্লাহর অপার রহমতে বাংলাদেশ একটি কৃষিনির্ভর দেশ। সময়ের সাথে সাথে কৃষি জমি কমছে, বাজারের খাবার ভেজাল ও রাসায়নিক মিশ্রণে ভরে যাচ্ছে। মানুষ হারাচ্ছে প্রকৃতির সাথে সম্পর্ক।"
                                : "Alhamdulillah, Bangladesh is an agriculture-based country. But farmlands are decreasing, food is filled with adulteration and chemicals, and people are losing connection with nature."}
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            {language === "bn"
                                ? "এই বাস্তবতায় আমরা বিশ্বাস করি—কৃষিই আমাদের ভবিষ্যৎ, কৃষিই আমাদের শক্তি। বিশুদ্ধ খাবার না পেলে প্রজন্ম ধ্বংস হয়ে যাবে।"
                                : "In this reality, we believe—agriculture is our future, agriculture is our strength. Without pure food, generations will collapse."}
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border"
                    >
                        <img
                            src="https://images.pexels.com/photos/32146752/pexels-photo-32146752.jpeg"
                            alt="Agro Vision"
                            className="w-full h-[350px] object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Goals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {goals.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-card shadow-md hover:shadow-xl transition-all group"
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-xl text-foreground mb-2">
                                {item.title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                        {language === "bn" ? "উপসংহার" : "Conclusion"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {language === "bn"
                            ? "মানযিল এগ্রো পার্ক শুধু কৃষি নয়, এটি একটি আদর্শ জীবনধারা, একটি হালাল বিনোদন কেন্দ্র এবং প্রজন্মের জন্য স্থায়ী উত্তরাধিকার।"
                            : "Manzil Agro Park is not just about farming, it’s a lifestyle, a halal entertainment hub, and a legacy for future generations."}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        {language === "bn" ? "আরও জানুন" : "Learn More"}
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
