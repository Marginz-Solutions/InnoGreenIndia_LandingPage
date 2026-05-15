import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReadProgress } from "@/components/ReadProgress";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGIM — Innogreen India Marketing",
  description:
    "Trusted Agro-Input Distribution for Dealers & Farmers. Water-Soluble Fertilizers, Bio-Inputs, Micronutrients and Crop Protection — with reliable supply and practical technical support across Tamil Nadu & Kerala.",
  icons: {
    icon: "/assets/IGIM_Logo.PNG",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f6b1e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReadProgress />
        <ScrollToTop />
        <WhatsAppFab />
        <Header />
        <MobileDrawer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
