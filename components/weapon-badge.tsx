"use client";

import { Bilingual } from "@/lib/data";
import { useLang } from "@/lib/i18n";

interface WeaponBadgeProps {
  name: Bilingual;
  desc: Bilingual;
  className?: string;
  style?: React.CSSProperties;
}

export function WeaponBadge({ name, desc, className, style }: WeaponBadgeProps) {
  const lang = useLang();
  const label = lang === "zh" ? name.zh : name.en;
  const description = lang === "zh" ? desc.zh : desc.en;

  return (
    <span className="group relative inline-flex">
      <span
        className={className}
        style={style}
      >
        {label}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:w-64">
        <span className="block rounded-lg border border-white/10 bg-[#0b0b12]/95 px-3 py-2 text-xs text-white/80 shadow-lg backdrop-blur-md">
          <span className="mb-1 block font-medium text-white">{label}</span>
          <span className="block leading-relaxed text-white/70">{description}</span>
        </span>
        <span className="absolute left-1/2 top-full -mt-0.5 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#0b0b12]/95" />
      </span>
    </span>
  );
}
