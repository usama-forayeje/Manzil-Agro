"use client";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import RenderResults from "./render-result";
import useThemeSwitching from "./use-theme-switching";

const services = [
  {
    id: "manzil-agro-park",
    name: "Manzil Agro Park",
    subtitle: "Sustainable Agriculture & Farming Solutions",
    url: "https://manzilagropark.com",
    shortcut: ["a", "g"],
    keywords: "agriculture farming organic sustainable",
    section: "Business Divisions",
  },
  {
    id: "manzil-ecommerce",
    name: "Manzil E-commerce",
    subtitle: "Online Marketplace & Digital Commerce",
    url: "https://manzilecommerce.com",
    shortcut: ["e", "c"],
    keywords: "ecommerce online shopping marketplace",
    section: "Business Divisions",
  },
  {
    id: "manzil-shop",
    name: "Manzil Shop",
    subtitle: "Premium Retail Experience",
    url: "https://manzilshop.com",
    shortcut: ["s", "h"],
    keywords: "shop retail store products",
    section: "Business Divisions",
  },
  {
    id: "manzil-housing",
    name: "Manzil Housing",
    subtitle: "Luxury Real Estate Development",
    url: "https://manzilhousing.com",
    shortcut: ["h", "o"],
    keywords: "housing real estate property development",
    section: "Business Divisions",
  },
  {
    id: "manzil-professions",
    name: "Manzil Professions",
    subtitle: "Professional Services & Consulting",
    url: "https://manzilprofessions.com",
    shortcut: ["p", "r"],
    keywords: "professional consulting services business",
    section: "Business Divisions",
  },
  {
    id: "manzil-institute",
    name: "Manzil Institute",
    subtitle: "Educational Excellence & Skill Development",
    url: "https://manzilinstitute.com",
    shortcut: ["i", "n"],
    keywords: "education institute learning skills",
    section: "Business Divisions",
  },
  {
    id: "manzil-city",
    name: "Manzil City",
    subtitle: "Smart Urban Development",
    url: "https://manzilcity.com",
    shortcut: ["c", "i"],
    keywords: "city urban development smart infrastructure",
    section: "Business Divisions",
  },
  {
    id: "manzil-hospital",
    name: "Manzil Hospital",
    subtitle: "Advanced Healthcare Services",
    url: "https://manzilhospital.com",
    shortcut: ["h", "e"],
    keywords: "hospital healthcare medical services",
    section: "Business Divisions",
  },
  {
    id: "manzil-foundation",
    name: "Manzil Foundation",
    subtitle: "Social Impact & Community Development",
    url: "https://manzilfoundation.org",
    shortcut: ["f", "o"],
    keywords: "foundation social welfare community",
    section: "Business Divisions",
  },
];

export default function KBar({ children }) {
  const router = useRouter();

  const actions = useMemo(() => {
    const navigateToExternal = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };

    const navigateToInternal = (path) => {
      router.push(path);
    };

    // Service actions
    const serviceActions = services.map((service) => ({
      id: service.id,
      name: service.name,
      shortcut: service.shortcut,
      keywords: service.keywords,
      section: service.section,
      subtitle: service.subtitle,
      perform: () => navigateToExternal(service.url),
    }));

    // Navigation actions
    const navigationActions = [
      {
        id: "home",
        name: "Home",
        shortcut: ["h"],
        keywords: "home homepage",
        section: "Navigation",
        subtitle: "Go to homepage",
        perform: () => navigateToInternal("/"),
      },
      {
        id: "about",
        name: "About Us",
        shortcut: ["a"],
        keywords: "about company information",
        section: "Navigation",
        subtitle: "Learn about Manzil Group",
        perform: () => navigateToInternal("#about"),
      },
      {
        id: "services-section",
        name: "Our Services",
        shortcut: ["s"],
        keywords: "services business divisions",
        section: "Navigation",
        subtitle: "Explore our business divisions",
        perform: () => navigateToInternal("#services"),
      },
      {
        id: "ceo",
        name: "Chairman Message",
        shortcut: ["c"],
        keywords: "chairman leadership message",
        section: "Navigation",
        subtitle: "Meet our visionary chairman",
        perform: () => navigateToInternal("#chairman"),
      },
      {
        id: "contact",
        name: "Contact Us",
        shortcut: ["c", "o"],
        keywords: "contact get in touch",
        section: "Navigation",
        subtitle: "Get in touch with us",
        perform: () => navigateToInternal("#contact"),
      },
    ];

    return [...serviceActions, ...navigationActions];
  }, [router]);

  return (
    <KBarProvider actions={actions}>
      <KBarComponent>{children}</KBarComponent>
    </KBarProvider>
  );
}

const KBarComponent = ({ children }) => {
  useThemeSwitching();

  return (
    <>
      <KBarPortal>
        <KBarPositioner className="bg-background/80 fixed inset-0 z-[99999] backdrop-blur-md transition-colors duration-500">
          <KBarAnimator className="bg-card dark:bg-gray-900 relative mt-64 w-full max-w-[600px] -translate-y-12 overflow-hidden rounded-2xl border-2 border-orange-400/20 dark:border-orange-600/40 shadow-2xl glass transition-all duration-500">
            {/* Search Input */}
            <div className="sticky top-0 z-10 border-b border-orange-400/20 dark:border-orange-600/40 bg-card dark:bg-gray-900 transition-colors duration-500">
              <KBarSearch
                className="bg-transparent w-full border-none px-6 py-4 text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-300"
                placeholder="Search services or navigate..."
              />
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              <RenderResults
                itemClassName="relative group px-6 py-4 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-orange-200/30 via-red-200/20 to-orange-100/20 dark:hover:from-orange-600/20 dark:hover:via-red-700/10 dark:hover:to-orange-700/20 rounded-xl"
                titleClassName="text-gray-900 dark:text-gray-100 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 group-hover:animate-text-glow font-semibold text-lg sm:text-xl transition-all duration-500"
                subtitleClassName="text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base"
              />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}

      {/* Optional global animation for gradient text glow */}
      <style jsx>{`
        @keyframes text-glow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-text-glow {
          background-size: 200% 200%;
          animation: text-glow 3s ease infinite;
        }
      `}</style>
    </>
  );
};
