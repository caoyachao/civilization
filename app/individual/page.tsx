"use client";

import { individualPhases, tiers } from "@/lib/data";
import { t, useLang } from "@/lib/i18n";
import { WarpReveal } from "@/components/warp-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function IndividualPage() {
  const lang = useLang();

  const weakening = tiers.filter((t) => t.id >= 1 && t.id <= 4).map((t) => t.individual).filter(Boolean);
  const transformation = tiers.filter((t) => t.id >= 5 && t.id <= 6).map((t) => t.individual).filter(Boolean);
  const dissolution = tiers.filter((t) => t.id >= 7 && t.id <= 10).map((t) => t.individual).filter(Boolean);

  const phaseDetails = [weakening, transformation, dissolution];

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-24 sm:px-6">
      <WarpReveal>
        <div className="text-center">
          <h1 className="text-3xl font-extralight text-white sm:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            {lang === "zh" ? "个体在战争中的演变" : "The Evolution of the Individual in War"}
          </h1>
          <p className="mt-3 text-white/50">
            {lang === "zh" ? "从血肉之躯到数学公理的U型曲线" : "The U-curve from flesh to mathematical axiom"}
          </p>
        </div>
      </WarpReveal>

      <WarpReveal delay={0.1}>
        <div className="mt-10 flex items-center justify-center">
          <div className="relative h-40 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4">
            <svg viewBox="0 0 400 120" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M 10 30 Q 90 110 200 60 T 390 20"
                fill="none"
                stroke="url(#curveGrad)"
                strokeWidth="2"
              />
              <circle cx="10" cy="30" r="3" fill="#7c2d12" />
              <circle cx="105" cy="95" r="3" fill="#06b6d4" />
              <circle cx="200" cy="60" r="4" fill="#14b8a6" />
              <circle cx="295" cy="40" r="3" fill="#94a3b8" />
              <circle cx="390" cy="20" r="4" fill="#fbbf24" />
            </svg>
            <div className="absolute left-4 top-2 text-xs text-white/40">{lang === "zh" ? "个体价值" : "Individual Value"}</div>
            <div className="absolute bottom-2 right-4 text-xs text-white/40">{lang === "zh" ? "文明等级 →" : "Civilization Tier →"}</div>
          </div>
        </div>
      </WarpReveal>

      <div className="mt-10 flex flex-col gap-6">
        {individualPhases.map((phase, i) => (
          <WarpReveal key={phase.key} delay={0.15 + i * 0.1}>
            <Card className="border-white/10 bg-white/[0.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-white">{t(phase.title, lang)}</CardTitle>
                    <CardDescription>{phase.levels}</CardDescription>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {phase.levels}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-white/80">
                <p>{t(phase.desc, lang)}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {phaseDetails[i]?.map((ind, idx) => (
                    <div key={idx} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-xs text-white/40">{ind!.status[lang]}</div>
                      <div className="mt-1 text-sm text-white/80">{ind!.desc[lang]}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </WarpReveal>
        ))}
      </div>
    </div>
  );
}
