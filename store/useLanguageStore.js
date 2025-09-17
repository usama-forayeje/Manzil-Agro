import { create } from "zustand";

const translations = {
  en: {
    "nav.about": "About",
    "nav.vision": "Vision",
    "nav.lifestyle": "Lifestyle",
    "nav.resort": "Resort",
    "nav.contact": "Contact",
    "nav.join": "Join Project",
    "hero.badge": "Sustainable Agro Lifestyle Project",
    "hero.title.line1": "Manzil",
    "hero.title.line2": "Agro Park",
    "hero.subtitle":
      "Modern Agriculture, Family Lifestyle Village & Private Halal Resort",
    "hero.quote": "Agriculture is our future, agriculture is our strength",
    "hero.invest": "Investment Opportunity",
    "hero.learn": "Learn More",
    "hero.stats.shares": "Share Opportunities",
    "hero.stats.trees": "Fruit Trees",
    "hero.stats.resorts": "Resorts & Cottages",
    "hero.dividend": "Dividends from 2027",
    "hero.ownership": "Lifetime ownership & lifetime profit",
    "shape.agriculture": "Modern Agriculture",
    "shape.resort": "Halal Resort",
    "shape.orchard": "Fruit Orchard",
    "shape.community": "Community",
    "shape.lifestyle": "Lifestyle Village",
  },
  bn: {
    "nav.about": "সম্পর্কে",
    "nav.vision": "দৃষ্টিভঙ্গি",
    "nav.lifestyle": "লাইফস্টাইল",
    "nav.resort": "রিসোর্ট",
    "nav.contact": "যোগাযোগ",
    "nav.join": "প্রকল্পে যোগ দিন",
    "hero.badge": "টেকসই কৃষি জীবনধারা প্রকল্প",
    "hero.title.line1": "মানযিল",
    "hero.title.line2": "এগ্রো পার্ক",
    "hero.subtitle":
      "আধুনিক কৃষি, পরিবারিক লাইফস্টাইল ভিলেজ ও প্রাইভেট হালাল রিসোর্ট",
    "hero.quote": "কৃষিই আমাদের ভবিষ্যৎ, কৃষিই আমাদের শক্তি",
    "hero.invest": "বিনিয়োগের সুযোগ",
    "hero.learn": "আরও জানুন",
    "hero.stats.shares": "শেয়ার সুযোগ",
    "hero.stats.trees": "ফল গাছ",
    "hero.stats.resorts": "রিসোর্ট ও কটেজ",
    "hero.dividend": "২০২৭ সাল থেকে লভ্যাংশ",
    "hero.ownership": "আজীবন মালিকানা ও আজীবন মুনাফা",
    "shape.agriculture": "আধুনিক কৃষি",
    "shape.resort": "হালাল রিসোর্ট",
    "shape.orchard": "ফল বাগান",
    "shape.community": "সম্প্রদায়",
    "shape.lifestyle": "লাইফস্টাইল ভিলেজ",
  },
};

export const useLanguageStore = create((set) => ({
  language: "bn",
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "bn" : "en",
    })),
  t: (key) => translations[useLanguageStore.getState().language][key] ?? key,
}));
