"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteTitle, siteTagline } from "@/lib/data";
import { t, useLang } from "@/lib/i18n";
import { TierCards } from "@/components/tier-card";

function Hero() {
  const lang = useLang();

  const scrollToTiers = () => {
    document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl font-extralight tracking-tight text-white sm:text-7xl md:text-8xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        {t(siteTitle, lang)}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-md text-lg text-white/60 sm:text-xl md:max-w-xl"
      >
        {t(siteTagline, lang)}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={scrollToTiers}
        className="mt-10 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
      >
        {lang === "zh" ? "开始跃迁" : "Start Ascent"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div id="tiers" className="relative z-10">
        <TierCards />
      </div>
    </>
  );
}
