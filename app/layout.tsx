import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/starfield";
import { Nav } from "@/components/nav";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "引力彼端 | Beyond Gravity",
  description:
    "从行星束缚到存在超越的10级科技文明体系。From planetary bound to existence transcended: a 10-tier civilization scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-white/90">
        <LanguageProvider>
          <Starfield />
          <Nav />
          <main className="relative z-10 flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
