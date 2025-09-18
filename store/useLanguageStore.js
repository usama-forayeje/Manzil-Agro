import { create } from "zustand";

const translations = {
  en: {
    "hero.tagline": "Cultivating Tomorrow",
    "hero.title": "Welcome to Manzil Agro Park",
    "hero.description":
      "Leading Bangladesh towards sustainable agriculture with innovative farming solutions and eco-friendly practices that nurture both land and community.",
    "hero.cta.primary": "Explore Our Vision",
    "hero.cta.secondary": "Learn More",
    "hero.stats.farms": "Active Farms",
    "hero.stats.farmers": "Happy Farmers",
    "hero.stats.yield": "Yield Increase",
    "nav.about": "About",
    "nav.vision": "Vision",
    "nav.lifestyle": "Lifestyle",
    "nav.resort": "Resort",
    "nav.contact": "Contact",
    "nav.join": "Join Project",
    "roadmap.title": "Project Roadmap",
    "roadmap.subtitle": "Step by step transformation for a sustainable future.",
    "roadmap.step1": "Business transformation",
    "roadmap.desc1": "Building agro-based economy.",
    "roadmap.step2": "More scalable processes",
    "roadmap.desc2": "Ensuring growth with sustainability.",
    "roadmap.step3": "Increased efficiency",
    "roadmap.desc3": "Saving resources with smart farming.",
    "roadmap.step4": "Less dependency",
    "roadmap.desc4": "Empowering local farmers and communities.",
  },
  bn: {
    "hero.tagline": "আগামীর চাষাবাদ",
    "hero.title": "মানজিল এগ্রো পার্কে স্বাগতম",
    "hero.description":
      "উদ্ভাবনী কৃষি সমাধান এবং পরিবেশ বান্ধব অনুশীলনের মাধ্যমে বাংলাদেশকে টেকসই কৃষির দিকে এগিয়ে নিয়ে যাচ্ছি যা ভূমি ও সম্প্রদায় উভয়কেই লালন করে।",
    "hero.cta.primary": "আমাদের দৃষ্টিভঙ্গি দেখুন",
    "hero.cta.secondary": "আরো জানুন",
    "hero.stats.farms": "সক্রিয় খামার",
    "hero.stats.farmers": "সন্তুষ্ট কৃষক",
    "hero.stats.yield": "ফলন বৃদ্ধি",
    "nav.about": "সম্পর্কে",
    "nav.vision": "দৃষ্টিভঙ্গি",
    "nav.lifestyle": "জীবনযাত্রা",
    "nav.resort": "রিসোর্ট",
    "nav.contact": "যোগাযোগ",
    "nav.join": "প্রকল্পে যোগ দিন",
    
    // "roadmap.title": "প্রজেক্ট রোডম্যাপ",
    "roadmap.title": "প্রজেক্ট রোডম্যাপ",
    "roadmap.subtitle": "টেকসই ভবিষ্যতের জন্য ধাপে ধাপে অগ্রগতি।",
    "roadmap.step1": "ব্যবসায়িক পরিবর্তন",
    "roadmap.desc1": "কৃষি নির্ভর অর্থনীতি গড়ে তোলা।",
    "roadmap.step2": "আরও প্রসারযোগ্য প্রক্রিয়া",
    "roadmap.desc2": "টেকসই উন্নয়ন নিশ্চিত করা।",
    "roadmap.step3": "দক্ষতা বৃদ্ধি",
    "roadmap.desc3": "স্মার্ট কৃষির মাধ্যমে সম্পদ সাশ্রয়।",
    "roadmap.step4": "নির্ভরতা হ্রাস",
    "roadmap.desc4": "স্থানীয় কৃষক ও কমিউনিটিকে শক্তিশালী করা।",
  },
};

export const useLanguageStore = create((set, get) => ({
  language: "bn",
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "bn" : "en",
    })),
  t: (key) => translations[get().language][key] ?? key,
}));
