import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "MemeCoinX",
  description: "Launch a playful single-page website showcasing meme coin concept, how to buy, tokenomics, and brand story."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${poppins.variable} antialiased`}
        style={{background: 'linear-gradient(135deg, #fff 0%, #f5faff 60%, #fff 100%)'}}
      >
        {children}
      </body>
    </html>
  );
}
