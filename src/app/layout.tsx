import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aporto",
  description: "Aporto gives AI agents trusted access to the API economy.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col font-sans relative">
          {/* Edge Glow Overlay */}
          <div className="fixed inset-0 pointer-events-none z-50 edge-glow animate-breathing"></div>

          <Header />
          <main className="flex-1 flex flex-col relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
