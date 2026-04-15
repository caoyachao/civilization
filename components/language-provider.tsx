"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";

type Lang = "zh" | "en";

export const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("bg-lang") : null;
    if (stored === "en" || stored === "zh") {
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("bg-lang", next);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
