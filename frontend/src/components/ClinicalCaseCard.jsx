import React, { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "../context/LanguageContext";

export const ClinicalCaseCard = ({ caseItem, onOpenBooking, onOpenLightbox }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [viewMode, setViewMode] = useState("slider"); // "slider" | "before" | "after" | "full"

  const l = {
    before: { uz: "Oldin", ru: "До", en: "Before" }[lang],
    after: { uz: "Keyin", ru: "После", en: "After" }[lang],
    slider: { uz: "Taqqoslash", ru: "Слайдер", en: "Slider" }[lang],
    full: { uz: "Hujjat", ru: "Коллаж", en: "Collage" }[lang],
    diagnosis: { uz: "Boshlang'ich Holat", ru: "Исходная ситуация", en: "Initial Condition" }[lang],
    treatment: { uz: "Bajarilgan Muolaja", ru: "Проведенное лечение", en: "Clinical Procedure" }[lang],
    result: { uz: "Erishilgan Natija", ru: "Итоговый результат", en: "Clinical Result" }[lang],
    bookCta: { uz: "Shunday natija xohlaysizmi? Qabulga yozilish →", ru: "Хотите такой же результат? Записаться →", en: "Want similar results? Book appointment →" }[lang],
    viewService: { uz: "Xizmat haqida", ru: "Об услуге", en: "Service info" }[lang],
  };

  return (
    <article className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(20,30,40,0.06)] hover:shadow-[0_20px_50px_rgba(12,110,90,0.12)] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top Header inside card */}
      <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2.5 bg-gradient-to-r from-teal-50/50 via-slate-50/40 to-white">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            {caseItem.categoryBadge[lang]}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/70 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {caseItem.durationBadge[lang]}
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {caseItem.timeline[lang]}
        </span>
      </div>

      {/* Visual Showcase: Slider or Switcher */}
      <div className="p-3.5 sm:p-5">
        {/* View Mode Toggle Buttons */}
        <div className="flex items-center justify-between gap-1 mb-3 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 text-xs font-bold">
          {[
            { id: "slider", label: `↔ ${l.slider}` },
            { id: "before", label: l.before },
            { id: "after", label: l.after },
            { id: "full", label: l.full },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all cursor-pointer ${
                viewMode === mode.id
                  ? "bg-white text-primary shadow-xs font-black"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Display Area based on View Mode */}
        {viewMode === "slider" && (
          <BeforeAfterSlider
            beforeSrc={caseItem.images.before}
            afterSrc={caseItem.images.after}
            beforeLabel={l.before}
            afterLabel={l.after}
            onZoom={() => onOpenLightbox(caseItem.images.full, caseItem.title[lang])}
          />
        )}

        {viewMode === "before" && (
          <div
            onClick={() => onOpenLightbox(caseItem.images.before, `${caseItem.title[lang]} — ${l.before}`)}
            className="relative select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11] cursor-pointer group shadow-lg"
          >
            <img
              src={caseItem.images.before}
              alt={`${caseItem.title[lang]} — ${l.before}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-amber-500/90 text-slate-950 shadow-md">
                {l.before}
              </span>
            </div>
          </div>
        )}

        {viewMode === "after" && (
          <div
            onClick={() => onOpenLightbox(caseItem.images.after, `${caseItem.title[lang]} — ${l.after}`)}
            className="relative select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11] cursor-pointer group shadow-lg"
          >
            <img
              src={caseItem.images.after}
              alt={`${caseItem.title[lang]} — ${l.after}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                {l.after}
              </span>
            </div>
          </div>
        )}

        {viewMode === "full" && (
          <div
            onClick={() => onOpenLightbox(caseItem.images.full, caseItem.title[lang])}
            className="relative select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 aspect-[3/4] max-h-[460px] cursor-pointer group shadow-lg mx-auto"
          >
            <img
              src={caseItem.images.full}
              alt={caseItem.title[lang]}
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute bottom-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/80 text-white backdrop-blur-md shadow-md">
                Kattalashtirish 🔍
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Case Details & Medical Story */}
      <div className="p-4 sm:p-6 pt-1 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-2">
            {caseItem.title[lang]}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {caseItem.summary[lang]}
          </p>
        </div>

        {/* 3 Clinical Steps: Diagnosis -> Treatment -> Result */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-[13px]">
          <div className="rounded-2xl p-3 bg-slate-50 border border-slate-200/70">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {l.diagnosis}
            </p>
            <p className="text-slate-700 leading-relaxed">{caseItem.diagnosis[lang]}</p>
          </div>

          <div className="rounded-2xl p-3 bg-teal-50/60 border border-teal-200/60">
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              {l.treatment}
            </p>
            <p className="text-slate-700 leading-relaxed">{caseItem.treatment[lang]}</p>
          </div>

          <div className="rounded-2xl p-3 bg-emerald-50/60 border border-emerald-200/60">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              {l.result}
            </p>
            <p className="text-slate-800 font-semibold leading-relaxed">{caseItem.resultText[lang]}</p>
          </div>
        </div>

        {/* Footer Card Actions */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={() => onOpenBooking(caseItem.serviceId)}
            className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-primary to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{l.bookCta}</span>
          </button>
          <Link
            to={to(`/services/${caseItem.serviceId}`)}
            className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold transition-colors text-center shrink-0"
          >
            {l.viewService}
          </Link>
        </div>
      </div>
    </article>
  );
};
