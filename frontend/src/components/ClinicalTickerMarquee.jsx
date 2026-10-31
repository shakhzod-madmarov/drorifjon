import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ClinicalTickerMarquee:
 * High-tech infinite 3D ticker displaying certified materials,
 * credentials, and clinic guarantees.
 */
export default function ClinicalTickerMarquee() {
  const { lang } = useLanguage();

  const items = {
    uz: [
      { text: "Charisma (Germaniya)", sub: "Mikro-shisha Nano-kompozit", flag: "🇩🇪", color: "text-amber-900 bg-amber-50 border-amber-200" },
      { text: "DenFil (Janubiy Koreya)", sub: "300+ MPa Mustahkam Plomba", flag: "🇰🇷", color: "text-sky-900 bg-sky-50 border-sky-200" },
      { text: "Orablok & Supercain", sub: "100% Og'riqsiz Anesteziya", flag: "💉", color: "text-emerald-900 bg-emerald-50 border-emerald-200" },
      { text: "Mega'Gen (Koreya)", sub: "Xpeed & KnifeThread Tizimi", flag: "🇰🇷", color: "text-indigo-900 bg-indigo-50 border-indigo-200" },
      { text: "AnyRidge (AnyRidch Germaniya)", sub: "Suyakni Saqlovchi Biotitan", flag: "🇩🇪", color: "text-orange-900 bg-orange-50 border-orange-200" },
      { text: "DXL (Germaniya)", sub: "Nemis Sof Biotitani · Umrbod", flag: "🇩🇪", color: "text-slate-900 bg-slate-100 border-slate-300" },
      { text: "20+ Yillik Tajriba", sub: "Andijon Tib. Kolleji & O'shDU", flag: "🎓", color: "text-amber-900 bg-amber-100/80 border-amber-300" },
      { text: "100% Steril Muhit", sub: "Anti-SPID & Anti-Gepatit", flag: "🛡️", color: "text-teal-900 bg-teal-50 border-teal-200" },
    ],
    ru: [
      { text: "Charisma (Германия)", sub: "Микростекольный композит Kulzer", flag: "🇩🇪", color: "text-amber-900 bg-amber-50 border-amber-200" },
      { text: "DenFil (Южная Корея)", sub: "Сверхпрочный наногибрид 300+ МПа", flag: "🇰🇷", color: "text-sky-900 bg-sky-50 border-sky-200" },
      { text: "Ораблок & Суперкаин", sub: "100% Безболезненная анестезия", flag: "💉", color: "text-emerald-900 bg-emerald-50 border-emerald-200" },
      { text: "Mega'Gen (Корея)", sub: "Технология Xpeed & KnifeThread", flag: "🇰🇷", color: "text-indigo-900 bg-indigo-50 border-indigo-200" },
      { text: "AnyRidge (AnyRidch Германия)", sub: "Костесохраняющий биотитан", flag: "🇩🇪", color: "text-orange-900 bg-orange-50 border-orange-200" },
      { text: "DXL (Германия)", sub: "Немецкий биотитан · Пожизненно", flag: "🇩🇪", color: "text-slate-900 bg-slate-100 border-slate-300" },
      { text: "20+ Лет в Медицине", sub: "Андижанский мед. колледж & ОшГУ", flag: "🎓", color: "text-amber-900 bg-amber-100/80 border-amber-300" },
      { text: "100% Стерильность", sub: "Протокол Анти-СПИД / Гепатит", flag: "🛡️", color: "text-teal-900 bg-teal-50 border-teal-200" },
    ],
    en: [
      { text: "Charisma (Germany)", sub: "Microglass Submicron Composite", flag: "🇩🇪", color: "text-amber-900 bg-amber-50 border-amber-200" },
      { text: "DenFil (South Korea)", sub: "300+ MPa High-Strength Resin", flag: "🇰🇷", color: "text-sky-900 bg-sky-50 border-sky-200" },
      { text: "Orabloc & Supercain", sub: "100% Painless Micro-Anesthesia", flag: "💉", color: "text-emerald-900 bg-emerald-50 border-emerald-200" },
      { text: "Mega'Gen (Korea)", sub: "Xpeed & KnifeThread Technology", flag: "🇰🇷", color: "text-indigo-900 bg-indigo-50 border-indigo-200" },
      { text: "AnyRidge (AnyRidch Germany)", sub: "Bone-Preserving Architecture", flag: "🇩🇪", color: "text-orange-900 bg-orange-50 border-orange-200" },
      { text: "DXL (Germany)", sub: "German Pure Bio-Titanium · Lifetime", flag: "🇩🇪", color: "text-slate-900 bg-slate-100 border-slate-300" },
      { text: "20+ Years Practice", sub: "Andijan Med. College & Osh State", flag: "🎓", color: "text-amber-900 bg-amber-100/80 border-amber-300" },
      { text: "100% Sterile Environment", sub: "European Safety Standards", flag: "🛡️", color: "text-teal-900 bg-teal-50 border-teal-200" },
    ],
  };

  const list = items[lang] || items.uz;
  // Double the list for seamless continuous infinite scroll
  const fullList = [...list, ...list];

  return (
    <div className="relative w-full overflow-hidden py-3 bg-gradient-to-r from-amber-50/70 via-white to-sky-50/70 border-y border-amber-200/80 select-none shadow-2xs">
      {/* Left/Right Gradient Fades */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#FFFDF8] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#FFFDF8] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
        {fullList.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl border shadow-2xs shrink-0 cursor-default hover:scale-105 transition-transform duration-200 ${item.color}`}
          >
            <span className="text-base sm:text-lg">{item.flag}</span>
            <div className="flex flex-col leading-none text-left">
              <span className="text-xs sm:text-sm font-black tracking-tight">{item.text}</span>
              <span className="text-[9px] sm:text-[10px] font-semibold opacity-80 mt-0.5">{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
