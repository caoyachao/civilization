"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/language-provider";
import type { Bilingual } from "./data";

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx.lang;
}

export function useSetLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useSetLang must be used within LanguageProvider");
  return ctx.setLang;
}

export function t(b: Bilingual, lang: "zh" | "en"): string {
  return b[lang];
}
