"use client";

import { tiers, type CivilizationTier } from "@/lib/data";
import { t, useLang } from "@/lib/i18n";
import { WarpReveal } from "./warp-reveal";

function SingleTierCard({ tier, index }: { tier: CivilizationTier; index: number }) {
  const lang = useLang();
  const isTopTier = tier.id === 10;
  const isLowTier = tier.id <= 3;
  const isMidHighTier = tier.id >= 7 && tier.id <= 9;

  return (
    <WarpReveal delay={index * 0.1}>
      <div
        className={`group relative overflow-hidden border bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] sm:p-8 ${
          isTopTier
            ? "rounded-3xl border-amber-400/20"
            : isLowTier
            ? "rounded-xl border-white/10 hover:border-white/20"
            : "rounded-2xl border-white/10 hover:border-white/20"
        }`}
        style={{
          boxShadow: isTopTier ? `0 0 60px ${tier.glow}` : undefined,
        }}
      >
        {/* Glow orb */}
        <div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70 sm:h-64 sm:w-64"
          style={{ background: tier.glow }}
        />

        <div className={`relative z-10 ${isMidHighTier ? "flex flex-col gap-6 sm:flex-row sm:items-start" : ""}`}>
          {/* Number block */}
          <div className={isMidHighTier ? "shrink-0" : ""}>
            <div
              className={`font-extralight tabular-nums leading-none tracking-tighter text-white/90 ${
                isMidHighTier ? "text-8xl sm:text-9xl" : "text-7xl sm:text-8xl"
              }`}
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {String(tier.id).padStart(2, "0")}
            </div>
          </div>

          {/* Content */}
          <div className={isMidHighTier ? "flex-1 pt-0 sm:pt-4" : "mt-4"}>
            <h2
              className={`font-light tracking-tight text-white ${
                isTopTier ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
              }`}
              style={{ letterSpacing: "-0.015em" }}
            >
              {t(tier.name, lang)}
            </h2>
            <p className="mt-1 text-sm text-white/50">{t(tier.subtitle, lang)}</p>

            <div className="mt-5 grid gap-3 text-sm text-white/80">
              <div>
                <span className="text-white/40">{lang === "zh" ? "核心能源" : "Core Energy"}: </span>
                {t(tier.energy, lang)}
              </div>
              <div>
                <span className="text-white/40">{lang === "zh" ? "空间尺度" : "Spatial Scale"}: </span>
                {t(tier.scale, lang)}
              </div>
              <div>
                <span className="text-white/40">{lang === "zh" ? "文明特征" : "Characteristics"}: </span>
                {t(tier.features, lang)}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {t(tier.symbols, lang)
                .split("·")
                .map((s) => s.trim())
                .map((s, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </WarpReveal>
  );
}

export function TierCards() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 pb-32 pt-8 sm:gap-8 sm:px-6">
      {tiers.map((tier, index) => (
        <SingleTierCard key={tier.id} tier={tier} index={index} />
      ))}
    </div>
  );
}
