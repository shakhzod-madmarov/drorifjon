import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { CLINICAL_CASES } from "../constants/clinicalCases";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { IconShieldCheck, IconAward } from "./MedicalIcons";

export const HomeResultsTeaser = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const t = {
    eyebrow: {
      uz: "Real Klinik Arxiv · Oldin va Keyin",
      ru: "Клинический Архив · До и После",
      en: "Clinical Archive · Before & After",
    }[lang],
    title: {
      uz: "Bemorlarimizning Real Klinik Natijalari",
      ru: "Реальные Результаты Лечения Пациентов",
      en: "Authentic Patient Treatment Results",
    }[lang],
    subtitle: {
      uz: "Slayderni o'ngga va chapga surib, davolashdan oldingi va keyingi holatni bevosita taqqoslang.",
      ru: "Двигайте слайдер влево и вправо, чтобы сравнить состояние зубов до и после лечения.",
      en: "Drag the slider left and right to interactively compare teeth before and after treatment.",
    }[lang],
    viewAllBtn: {
      uz: "Barcha 4 ta Klinik Natijani Ko'rish →",
      ru: "Смотреть все 4 клинических случая →",
      en: "Explore All 4 Clinical Cases →",
    }[lang],
    bookCta: {
      uz: "Qabulga Yozilish",
      ru: "Записаться на Приём",
      en: "Book Visit",
    }[lang],
    before: { uz: "Oldin", ru: "До", en: "Before" }[lang],
    after: { uz: "Keyin", ru: "После", en: "After" }[lang],
  };

  const currentCase = CLINICAL_CASES[selectedCaseIdx] || CLINICAL_CASES[0];

  return (
    <section className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-white via-teal-50/25 to-[#F8FAFB] border border-teal-100/80 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_-12px_rgba(12,110,90,0.08)]">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-black uppercase tracking-wider text-primary shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>{t.eyebrow}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-serif-classic">
          {t.title}
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="relative z-10 max-w-3xl mx-auto mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 text-xs font-bold">
          {CLINICAL_CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseIdx(idx)}
              className={`py-2 px-2.5 rounded-xl text-center transition-all cursor-pointer ${
                selectedCaseIdx === idx
                  ? "bg-white text-primary shadow-xs font-black scale-102"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
              }`}
            >
              <span className="block truncate">{c.categoryBadge[lang]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Showcase (Split: Slider on Left, Case Brief on Right) */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-md">
        {/* Left: Before/After Slider (7 cols) */}
        <div className="lg:col-span-7">
          <BeforeAfterSlider
            beforeSrc={currentCase.images.before}
            afterSrc={currentCase.images.after}
            beforeLabel={t.before}
            afterLabel={t.after}
            className="w-full"
          />
        </div>

        {/* Right: Clinical Story (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              {currentCase.categoryBadge[lang]}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
              ⏱ {currentCase.durationBadge[lang]}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {currentCase.title[lang]}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentCase.summary[lang]}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            <div className="p-2.5 rounded-xl bg-teal-50/60 border border-teal-200/60">
              <span className="font-bold text-teal-800 block mb-0.5">
                ✓ {lang === "uz" ? "Natija:" : lang === "ru" ? "Результат:" : "Result:"}
              </span>
              <span className="text-slate-700">{currentCase.resultText[lang]}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              onClick={() => onOpenBooking(currentCase.serviceId)}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-primary hover:bg-[#095446] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              {t.bookCta}
            </button>
            <Link
              to={to("/results")}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold text-center transition-colors"
            >
              {lang === "uz" ? "Batafsil" : lang === "ru" ? "Подробнее" : "Details"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Link to Full Results Page */}
      <div className="relative z-10 text-center mt-8">
        <Link
          to={to("/results")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group cursor-pointer"
        >
          <span>{t.viewAllBtn}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
};
