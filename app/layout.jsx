import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import KBar from "@/components/kbar/kbar";
import { Suspense } from "react";
import { Poppins, Lora, Hind_Siliguri } from "next/font/google";

// English Sans Font
export const agroSans = Poppins({
  variable: "--font-agro-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// English Serif Font
export const agroSerif = Lora({
  variable: "--font-agro-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Bengali Font
export const banglaFont = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Manzil Agro Park",
  description:
    "Manzil Agro Park - Sustainable Agriculture & Farming Solutions in Bangladesh",
};

export const agroTheme = {
  colors: {
    primary: "#16a34a", // emerald-600
    secondary: "#a3e635", // lime-400
    accent: "#22c55e", // green-500
    backgroundLight: "#ecfdf5", // green-50
    backgroundDark: "#064e3b", // emerald-900
    textLight: "#065f46",
    textDark: "#d9f99d",
  },
  fonts: {
    sans: "var(--font-agro-sans)",
    serif: "var(--font-agro-serif)",
    bangla: "var(--font-bangla)",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${agroSans.variable} ${agroSerif.variable} ${banglaFont.variable}`}
    >
      <body
        className={`antialiased bg-[var(--backgroundLight)] dark:bg-[var(--backgroundDark)] text-[var(--textLight)] dark:text-[var(--textDark)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <KBar>
            <Suspense fallback={null}>{children}</Suspense>
          </KBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
