"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems, siteTitle } from "@/lib/data";
import { useLang, useSetLang, t } from "@/lib/i18n";

export function Nav() {
  const pathname = usePathname();
  const lang = useLang();
  const setLang = useSetLang();

  return (
    <>
      {/* Top-right language switcher */}
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
        <button
          onClick={() => setLang("zh")}
          className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
            lang === "zh"
              ? "bg-white/10 text-white"
              : "text-white/50 hover:text-white"
          }`}
          aria-label="Switch to Chinese"
        >
          中
        </button>
        <span className="text-white/20">/</span>
        <button
          onClick={() => setLang("en")}
          className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
            lang === "en"
              ? "bg-white/10 text-white"
              : "text-white/50 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          En
        </button>
      </div>

      {/* Bottom navigation */}
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-2 backdrop-blur-md">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  active
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-white/10" />
                )}
                <span className="relative">{t(item.label, lang)}</span>
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-amber-400" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
