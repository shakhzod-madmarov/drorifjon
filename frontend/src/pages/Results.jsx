import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { CLINICAL_CASES } from "../constants/clinicalCases";
import { ClinicalCaseCard } from "../components/ClinicalCaseCard";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import { buildResultsPageSchema } from "../utils/structuredData";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import {
  IconShieldCheck,
  IconAward,
  IconCheckCircle,
  IconPhone,
  IconTelegram,
} from "../components/MedicalIcons";
import Floating3DShapes from "../components/Floating3DShapes";

const Results = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const years = getYearsOfExperience();

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", title: "" });
  const [openFaq, setOpenFaq] = useState(null);

  const seo = PAGE_SEO.results[lang] || PAGE_SEO.results.uz;

  const breadcrumbs = [
    { name: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" }[lang], path: "/" },
    { name: { uz: "Klinik Natijalar", ru: "Результаты Лечения", en: "Clinical Results" }[lang], path: "/results" },
  ];

  const schemaJson = buildResultsPageSchema(lang, breadcrumbs, CLINICAL_CASES);

  // Content translations
  const t = {
    eyebrow: {
      uz: "Real Klinik Arxiv · Bemorlar Tabassumi",
      ru: "Реальный архив · Улыбки пациентов",
      en: "Authentic Clinical Archive · Patient Smiles",
    }[lang],
    titleMain: {
      uz: "Bemorlarimiz Natijalari: Oldin va Keyin",
      ru: "Результаты Лечения: До и После",
      en: "Patient Transformations: Before & After",
    }[lang],
    subtitle: {
      uz: `Har bir fotosurat — Stomatolog Orifjon (Mansurov Orifjon) tomonidan Andijonda amalga oshirilgan real klinik muolaja natijasi. Interaktiv slayder orqali tishlarning boshlang'ich va davolangandan keyingi holatini solishtiring.`,
      ru: `Каждая фотография — реальный результат лечения у Стоматолога Орифжона (Мансуров Орифжон) в Андижане. С помощью интерактивного слайдера сравните исходную ситуацию и финальную улыбку.`,
      en: `Every case is an authentic clinical procedure performed by Dentist Orifjon (Mansurov Orifjon) in Andijan. Compare initial dental conditions and final results using our interactive comparison slider.`,
    }[lang],
    filters: [
      { id: "all", label: { uz: "Barchasi (4 ta holat)", ru: "Все случаи (4)", en: "All Cases (4)" }[lang] },
      { id: "ortodontiya", label: { uz: "Ortodontiya (Breketlar)", ru: "Ортодонтия (Брекеты)", en: "Orthodontics (Braces)" }[lang] },
      { id: "terapiya", label: { uz: "Terapiya (Restavratsiya)", ru: "Терапия (Реставрация)", en: "Therapy (Restoration)" }[lang] },
      { id: "ortopediya", label: { uz: "Ortopediya (Sirkoniy)", ru: "Ортопедия (Цирконий)", en: "Orthopedics (Zirconia)" }[lang] },
    ],
    verifiedBadge: {
      uz: "100% Real Klinik Fotosuratlar (Stok emas)",
      ru: "100% реальные клинические фото (без стоков)",
      en: "100% Authentic Clinical Photos (No Stock)",
    }[lang],
    casesCountBadge: {
      uz: `${CLINICAL_CASES.length} ta Hujjatlashtirilgan Holat`,
      ru: `${CLINICAL_CASES.length} задокументированных случая`,
      en: `${CLINICAL_CASES.length} Documented Clinical Cases`,
    }[lang],
    ctaTitle: {
      uz: "Siz ham sog'lom va qor-oq tabassum xohlaysizmi?",
      ru: "Хотите такую же здоровую и красивую улыбку?",
      en: "Ready for your own smile transformation?",
    }[lang],
    ctaSubtitle: {
      uz: "Stomatolog Orifjon qabuliga yoziling. 1-qabuldayoq individual davolash rejasi, muddat va aniq narx hisoblab beriladi.",
      ru: "Запишитесь на консультацию к Стоматологу Орифжону. На первом же приёме составим точный план лечения, сроки и стоимость.",
      en: "Book a consultation with Dentist Orifjon. Receive an individualized treatment plan, clear timeline, and transparent pricing on your first visit.",
    }[lang],
    bookBtn: {
      uz: "Konsultatsiyaga Yozilish",
      ru: "Записаться на Приём",
      en: "Book Consultation",
    }[lang],
    callDoctor: {
      uz: "Shifokorga Qo'ng'iroq",
      ru: "Позвонить врачу",
      en: "Call Doctor",
    }[lang],
  };

  const filteredCases = activeFilter === "all"
    ? CLINICAL_CASES
    : CLINICAL_CASES.filter((c) => c.category === activeFilter);

  // Results FAQ items
  const resultFaqs = [
    {
      q: {
        uz: "Breketlar bilan tishlarni tekislash qancha vaqt davom etadi?",
        ru: "Сколько времени занимает исправление зубов брекетами?",
        en: "How long does teeth alignment with braces take?",
      }[lang],
      a: {
        uz: "Bizning klinik holatlarimizda ko'rsatilganidek, dastlabki sezilarli natijalar 6–7 oy ichida to'liq shakllanadi. Qiyinlik darajasiga qarab umumiy muddat 6 oydan 18 oygacha bo'lishi mumkin. Birorta ham sog'lom tish sug'urilmasdan, tish qatori tabiiy kengaytiriladi.",
        ru: "Как видно по нашим клиническим случаям, заметный результат достигается уже за 6–7 месяцев. В зависимости от сложности прикуса курс занимает от 6 до 18 месяцев. Мы стремимся сохранить все здоровые зубы без удаления.",
        en: "As shown in our clinical cases, visible alignment occurs within 6–7 months. Depending on complexity, total therapy lasts between 6 to 18 months, prioritizing non-extraction arch alignment.",
      }[lang],
    },
    {
      q: {
        uz: "Chuqur karies va singan tishlarni restavratsiya qilish og'riqlimi?",
        ru: "Болезненно ли реставрировать зубы при глубоком кариесе?",
        en: "Is direct restoration of deep cavities painful?",
      }[lang],
      a: {
        uz: "Mutlaqo og'riqsiz! Biz 2 bosqichli og'riqsizlantirishdan foydalanamiz: avval igna joyiga xushbo'y mevali muzlatuvchi gel suriladi, so'ngra mikro-igna bilan Orablok kiritiladi. Charisma va DenFil kompozitlari bilan tish nervi saqlangan holda atigi 1 ta qabulda tish asl holiga qaytariladi.",
        ru: "Абсолютно безболезненно! Мы применяем двухэтапную анестезию: аппликационный обезболивающий гель, затем микроинъекция препаратом Ораблок. Зубы восстанавливаются за 1 визит с сохранением нерва.",
        en: "Completely painless! We use two-stage anesthesia: topical numbing gel followed by gentle Orabloc micro-injection. High-tech composites restore tooth shape and natural translucency in just one visit.",
      }[lang],
    },
    {
      q: {
        uz: "Eski tilla yoki metall qoplamalarni sirkoniyga almashtirish qiyinmi?",
        ru: "Сложно ли заменить старые золотые или металлические коронки на цирконий?",
        en: "Is it difficult to replace old gold crowns with modern zirconia?",
      }[lang],
      a: {
        uz: "Jarayon mutlaqo xavfsiz va og'riqsiz. Eski qoplamalar maxsus asboblar bilan milkka tegmasdan yechiladi. Milk cheti yallig'lanishdan tozalanib, raqamli 3D optik o'lcham olinadi. 3-4 kunda monolit Sirkoniy (Zirconia) karonkalar doimiy o'rnatiladi va 15 yillik kafolat beriladi.",
        ru: "Процедура быстрая и безопасная. Старые коронки атравматично распиливаются и снимаются без повреждения десны. Десна восстанавливается, снимается цифровой слепок, и за 3–4 дня фиксируются эстетичные коронки из диоксида циркония с гарантией 15 лет.",
        en: "The procedure is gentle and routine. Outdated metal crowns are atraumatically sectioned without harming gingiva. Following digital impressions, custom monolithic Zirconia crowns are bonded within 3–4 days with a 15-year warranty.",
      }[lang],
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS.results}
        schemaJson={schemaJson}
      />

      {/* ── 1. Hero Header Section ── */}
      <section className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-[#F8FAFB] via-white to-teal-50/20 border border-teal-100/70 p-6 sm:p-10 lg:p-14 shadow-[0_16px_50px_-12px_rgba(12,110,90,0.08)]">
        <Floating3DShapes />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-black uppercase tracking-wider text-primary shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>{t.eyebrow}</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            <span>{t.titleMain}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Key Trust Stats */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-bold text-slate-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <IconShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.verifiedBadge}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <IconAward className="w-4 h-4 text-amber-500" />
              <span>{t.casesCountBadge}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <IconCheckCircle className="w-4 h-4 text-primary" />
              <span>{years}+ yillik tajriba</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. Category Filter Pills ── */}
      <section className="max-w-4xl mx-auto px-2">
        <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 rounded-2xl sm:rounded-3xl bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm font-bold shadow-2xs">
          {t.filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all cursor-pointer select-none ${
                activeFilter === f.id
                  ? "bg-white text-primary shadow-sm font-black scale-102"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── 3. Clinical Cases Grid ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {filteredCases.map((caseItem) => (
          <ClinicalCaseCard
            key={caseItem.id}
            caseItem={caseItem}
            onOpenBooking={onOpenBooking}
            onOpenLightbox={(src, title) => setLightbox({ isOpen: true, src, title })}
          />
        ))}
      </section>

      {/* ── 4. Clinical Results FAQ ── */}
      <section className="max-w-4xl mx-auto space-y-4 pt-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {lang === "uz"
              ? "Bemorlar eng ko'p beradigan savollar"
              : lang === "ru"
              ? "Частые вопросы пациентов о результатах"
              : "Frequently Asked Questions About Results"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {lang === "uz"
              ? "Davolash muddatlari, anesteziya va rasmiy kafolatlar haqida ma'lumot"
              : lang === "ru"
              ? "Сроки лечения, безопасность анестезии и клинические гарантии"
              : "Treatment timelines, anesthesia protocols, and formal warranties"}
          </p>
        </div>

        <div className="space-y-3">
          {resultFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer text-xs sm:text-sm"
              >
                <span>{faq.q}</span>
                <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Bottom Consultation Booking Banner ── */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C6E5A] via-[#095446] to-[#0A1628] text-white p-7 sm:p-10 lg:p-12 shadow-xl">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-teal-200 border border-white/20">
            <span>✨ {t.ctaTitle}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {t.ctaTitle}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-teal-100/90 leading-relaxed max-w-xl mx-auto">
            {t.ctaSubtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white text-primary hover:bg-teal-50 text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-98"
            >
              {t.bookBtn} →
            </button>
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <IconPhone className="w-4 h-4 text-emerald-300" />
              <span>{DOCTOR_INFO.phoneFormatted}</span>
            </a>
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#229ED9]/80 hover:bg-[#229ED9] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <IconTelegram className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Fullscreen Lightbox Modal ── */}
      {lightbox.isOpen && (
        <div
          onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] w-full bg-slate-950 rounded-3xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 px-5 border-b border-white/10 flex items-center justify-between gap-3 bg-slate-900/80">
              <p className="text-xs sm:text-sm font-bold text-white truncate">
                {lightbox.title}
              </p>
              <button
                onClick={() => setLightbox({ isOpen: false, src: "", title: "" })}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                aria-label="Yopish"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-2 sm:p-4 flex-1 flex items-center justify-center overflow-auto max-h-[80vh]">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[76vh] max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
