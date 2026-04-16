"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const show = () => {
    const rect = badgeRef.current?.getBoundingClientRect();
    if (!rect) return;
    const tooltipWidth = Math.min(256, window.innerWidth - 24);
    let left = rect.left + rect.width / 2;
    const minLeft = tooltipWidth / 2 + 12;
    const maxLeft = window.innerWidth - tooltipWidth / 2 - 12;
    if (left < minLeft) left = minLeft;
    if (left > maxLeft) left = maxLeft;
    setPos({ left, top: rect.top + window.scrollY });
  };

  const hide = () => setPos(null);

  const tooltip = (
    <span
      className="pointer-events-none fixed z-[100] w-56 sm:w-64"
      style={{
        left: pos?.left ?? 0,
        top: pos?.top ?? 0,
        transform: "translate(-50%, -100%) translateY(-8px)",
      }}
    >
      <span className="block rounded-lg border border-white/10 bg-[#0b0b12]/95 px-3 py-2 text-xs text-white/80 shadow-xl backdrop-blur-md">
        <span className="mb-1 block font-medium text-white">{label}</span>
        <span className="block leading-relaxed text-white/70">{description}</span>
      </span>
      <span className="absolute left-1/2 top-full -mt-0.5 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#0b0b12]/95" />
    </span>
  );

  return (
    <>
      <span
        ref={badgeRef}
        className={className}
        style={style}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {label}
      </span>
      {mounted && pos && createPortal(tooltip, document.body)}
    </>
  );
}
