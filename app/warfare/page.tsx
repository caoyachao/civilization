"use client";

import { motion } from "framer-motion";
import { tiers, warfareSummary } from "@/lib/data";
import { t, useLang } from "@/lib/i18n";
import { WarpReveal } from "@/components/warp-reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WeaponBadge } from "@/components/weapon-badge";

const groups = [
  { key: "1-3", label: { zh: "1-3 级", en: "Tiers 1-3" }, tiers: tiers.filter((t) => t.id >= 1 && t.id <= 3) },
  { key: "4-6", label: { zh: "4-6 级", en: "Tiers 4-6" }, tiers: tiers.filter((t) => t.id >= 4 && t.id <= 6) },
  { key: "7-9", label: { zh: "7-9 级", en: "Tiers 7-9" }, tiers: tiers.filter((t) => t.id >= 7 && t.id <= 9) },
  { key: "10", label: { zh: "10 级", en: "Tier 10" }, tiers: tiers.filter((t) => t.id === 10) },
];

export default function WarfarePage() {
  const lang = useLang();

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-24 sm:px-6">
      <WarpReveal>
        <div className="text-center">
          <h1 className="text-3xl font-extralight text-white sm:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            {lang === "zh" ? "战争形态的终极演变" : "The Ultimate Evolution of Warfare"}
          </h1>
          <p className="mt-3 text-white/50">
            {lang === "zh" ? "从冷兵器厮杀到逻辑存在争夺" : "From cold-weapon slaughter to logic-level contention"}
          </p>
        </div>
      </WarpReveal>

      <div className="mt-10">
        <Tabs defaultValue="1-3">
          <TabsList className="mx-auto flex w-full justify-center bg-white/[0.03]">
            {groups.map((g) => (
              <TabsTrigger key={g.key} value={g.key} className="data-active:bg-white/10 data-active:text-white">
                {t(g.label, lang)}
              </TabsTrigger>
            ))}
          </TabsList>

          {groups.map((g, gi) => (
            <TabsContent key={g.key} value={g.key} className="mt-6">
              <div className="flex flex-col gap-6">
                {g.tiers.map((tier, ti) => (
                  <WarpReveal key={tier.id} delay={ti * 0.1}>
                    <Card className="border-white/10 bg-white/[0.02]">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-extralight text-white/80">{String(tier.id).padStart(2, "0")}</span>
                          <div>
                            <CardTitle className="text-white">{t(tier.name, lang)}</CardTitle>
                            <CardDescription>{t(tier.subtitle, lang)}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-5 text-white/80">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                            <div className="text-xs text-white/40">{lang === "zh" ? "战争逻辑" : "War Logic"}</div>
                            <div className="mt-1 text-sm">{t(tier.warfare.logic, lang)}</div>
                          </div>
                          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                            <div className="text-xs text-white/40">{lang === "zh" ? "主要手段" : "Primary Means"}</div>
                            <div className="mt-1 text-sm">{t(tier.warfare.means, lang)}</div>
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 text-xs text-white/40">{lang === "zh" ? "典型战术" : "Typical Tactics"}</div>
                          <div className="flex flex-wrap gap-2">
                            {tier.warfare.tactics.map((item, i) => (
                              <WeaponBadge
                                key={i}
                                name={item.name}
                                desc={item.desc}
                                className="cursor-default rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/70 transition-colors hover:border-white/20 hover:bg-white/5"
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 text-xs text-white/40">{lang === "zh" ? "代表武器" : "Representative Weapons"}</div>
                          <div className="flex flex-wrap gap-2">
                            {tier.warfare.weapons.map((item, i) => (
                              <WeaponBadge
                                key={i}
                                name={item.name}
                                desc={item.desc}
                                className="cursor-default rounded-full border border-transparent bg-white/10 px-2.5 py-0.5 text-xs text-white/90 transition-colors hover:bg-white/15"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="rounded-lg border border-amber-400/10 bg-amber-400/[0.05] p-4">
                          <div className="text-xs text-amber-300/70">{lang === "zh" ? "同级博弈点" : "Peer Gambit"}</div>
                          <div className="mt-1 text-sm text-white/80">{t(tier.warfare.gambit, lang)}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </WarpReveal>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <WarpReveal delay={0.2}>
        <div className="mt-12">
          <h2 className="text-center text-xl font-light text-white sm:text-2xl">
            {lang === "zh" ? "战争形态终极演变" : "Ultimate Evolution of Warfare"}
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.03]">
                <tr>
                  <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "等级" : "Level"}</th>
                  <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "战争本质" : "Essence of War"}</th>
                  <th className="px-4 py-3 font-medium text-white/60">{lang === "zh" ? "防御核心" : "Core Defense"}</th>
                </tr>
              </thead>
              <tbody>
                {warfareSummary.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-4 py-3 text-white/90">{row.level}</td>
                    <td className="px-4 py-3 text-white/80">{t(row.essence, lang)}</td>
                    <td className="px-4 py-3 text-white/80">{t(row.defense, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </WarpReveal>
    </div>
  );
}
