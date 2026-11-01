import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ClinicalTrustBar (formerly ClinicalTickerMarquee):
 * Calm, classic, elegant luxury brand trust bar.
 * Replaces chaotic infinite moving marquees with dignified, static clinical standards.
 */
export default function ClinicalTickerMarquee() {
  const { lang } = useLanguage();

  const title = {
    uz: "Sertifikatlangan Xalqaro Materiallar va Standartlar",
    ru: "Сертифицированные Международные Материалы и Стандарты",
    en: "Certified International Clinical Standards & Materials",
  };

  const partners = [
    {
      flag: "🇩🇪",
      name: "Charisma Kulzer",
      desc: { uz: "Germaniya nano-kompoziti", ru: "Немецкий нанокомпозит", en: "German nanocomposite" },
    },
    {
      flag: "🇰🇷",
      name: "Mega'Gen AnyRidge",
      desc: { uz: "Koreya & Germaniya biotitani", ru: "Биотитан Кореи и Германии", en: "Bio-titanium systems" },
    },
    {
      flag: "🇩🇪",
      name: "DXL Titanium",
      desc: { uz: "Nemis premium implantlari", ru: "Немецкие премиум-импланты", en: "German premium implants" },
    },
    {
      flag: "🇰🇷",
      name: "DenFil Vericom",
      desc: { uz: "Yuqori mustahkam plomba", ru: "Высокопрочные пломбы", en: "High-strength micro-hybrid" },
    },
    {
      flag: "🛡️",
      name: "Orablok & Supercain",
      desc: { uz: "100% og'riqsiz anesteziya", ru: "100% анестезия без боли", en: "100% painless anesthesia" },
    },
  ];

  return (
    <div className="w-full py-5 bg-white/80 rounded-2xl border border-stone-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[10.5px] font-extrabold uppercase tracking-widest text-slate-500 mb-3.5">
          {title[lang] || title.uz}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-stone-50/70 border border-stone-200/70 text-left transition-colors hover:bg-amber-50/50 hover:border-amber-200/80"
            >
              <span className="text-lg shrink-0">{p.flag}</span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate tracking-tight">{p.name}</p>
                <p className="text-[10px] text-slate-600 truncate">{p.desc[lang] || p.desc.uz}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
