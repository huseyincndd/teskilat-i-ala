import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TESKILAT-I ALA | Elite CS 1.6 Server",
  description: "Elite CS 1.6 Server - Professional Gaming Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
        <div className="scanlines"></div>
      </body>
    </html>
  );
}
