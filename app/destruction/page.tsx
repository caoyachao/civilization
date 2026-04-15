"use client";

import { tiers, destructionMilestones } from "@/lib/data";
import { t, useLang } from "@/lib/i18n";
import { WarpReveal } from "@/components/warp-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeaponBadge } from "@/components/weapon-badge";

export default function DestructionPage() {
  const lang = useLang();

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-24 sm:px-6">
      <WarpReveal>
        <div className="text-center">
          <h1 className="text-3xl font-extralight text-white sm:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            {lang === "zh" ? "毁灭行星与恒星" : "Destroying Planets and Stars"}
          </h1>
          <p className="mt-3 text-white/50">
            {lang === "zh" ? "从地表炮击到概念抹除的毁灭能力演变" : "From surface bombardment to conceptual erasure"}
          </p>
        </div>
      </WarpReveal>

      <WarpReveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {destructionMilestones.map((m) => (
            <div
              key={m.level}
              className="flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200"
            >
              <span className="font-medium">{lang === "zh" ? `${m.level}级` : `Tier ${m.level}`}</span>
              <span className="text-amber-200/80">{t(m.label, lang)}</span>
            </div>
          ))}
        </div>
      </WarpReveal>

      <WarpReveal delay={0.15}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "等级" : "Tier"}</th>
                <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "文明名称" : "Civilization"}</th>
                <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "毁灭行星" : "Planet Destruction"}</th>
                <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "毁灭恒星" : "Star Destruction"}</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => {
                const canPlanet = tier.destruction.planet;
                const canStar = tier.destruction.star;
                return (
                  <tr key={tier.id} className="border-t border-white/10">
                    <td className="px-4 py-3 align-middle text-white/90">{String(tier.id).padStart(2, "0")}</td>
                    <td className="px-4 py-3 align-middle text-white/90">{t(tier.name, lang)}</td>
                    <td className="px-4 py-3 align-middle">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs ${
                          canPlanet ? "bg-emerald-500/15 text-emerald-300" : "bg-white/5 text-white/40"
                        }`}
                      >
                        {canPlanet ? (lang === "zh" ? "可以" : "Yes") : lang === "zh" ? "不能" : "No"}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs ${
                          canStar ? "bg-emerald-500/15 text-emerald-300" : "bg-white/5 text-white/40"
                        }`}
                      >
                        {canStar ? (lang === "zh" ? "可以" : "Yes") : lang === "zh" ? "不能" : "No"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </WarpReveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {tiers
          .filter((t) => t.destruction.weapons.length > 0)
          .map((tier, i) => (
            <WarpReveal key={tier.id} delay={i * 0.08}>
              <Card
                className="border-white/10 bg-white/[0.02]"
                style={{ borderColor: `${tier.color}20` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extralight text-white/70">{String(tier.id).padStart(2, "0")}</span>
                    <CardTitle className="text-base text-white">{t(tier.name, lang)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tier.destruction.weapons.map((w, idx) => (
                      <WeaponBadge
                        key={idx}
                        name={w.name}
                        desc={w.desc}
                        className="cursor-default rounded-full border border-transparent px-2.5 py-0.5 text-xs text-white/90"
                        style={{ backgroundColor: `${tier.color}25` }}
                      />
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
