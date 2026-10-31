import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import {
  DOCTOR_INFO,
  getYearsOfExperience,
  getHeroTag,
} from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import ClinicLocationMap from "../components/ClinicLocationMap";
import FaqAccordion from "../components/FaqAccordion";
import { FAQ_ITEMS } from "../constants/faq";
import { buildHomeSchema } from "../utils/structuredData";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import CertificatesShowcase from "../components/CertificatesShowcase";
import ClinicEquipmentShowcase from "../components/ClinicEquipmentShowcase";
import ClinicalMaterialsShowcase from "../components/ClinicalMaterialsShowcase";
import ClinicalTickerMarquee from "../components/ClinicalTickerMarquee";
import Floating3DShapes from "../components/Floating3DShapes";
import {
  HoloGoldStamp,
  DigitalCyanTag,
  ZeroPainShield,
  BioTitaniumBadge,
  OriginPill,
} from "../components/Bespoke3DStickers";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import PatientCareGuides from "../components/PatientCareGuides";
import {
  IconShieldCheck,
  IconSparkleStar,
  IconAward,
  IconClock,
  IconPhone,
  IconCheckCircle,
  IconGraduationCap,
  IconTelegram,
} from "../components/MedicalIcons";
import Doctor3DCard from "../components/Doctor3DCard";

/* ═══════════════════════════════════════════════════════════════════
   1. EDITORIAL HERO — STOMATOLOG ORIFJON
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badgeLive: "Qabul Ochiq · Andijon sh.",
      badgeEducation: "Andijon Tibbiyot Kolleji (2001–2004) & O'shDU (2017–2022)",
      kicker: "✦ PRESIZIYA STOMATOLOGIYASI · GERMANIYA & KOREYA MATERIAL STANDARTLARI",
      headlinePart1: "Tabiiy Tabassum va ",
      headlineHighlight: "100% Og'riqsiz",
      headlinePart2: " Zamonaviy Stomatologiya",
      subtitle:
        "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — 20 yildan ortiq tibbiyot tajribasi, Germaniya (Charisma, AnyRidge, DXL) hamda Koreya (Mega'Gen, DenFil) original materiallari va Yevropa anesteziyasi (Orablok, Supercain) bilan tabassumingizni mutlaq og'riqsiz va yuqori estetikada davolaydi.",
      ctaBook: "Qabulga Yozilish",
      ctaSlot: "Bugun 2 ta joy qoldi",
      ctaServices: "Xizmatlar Katalogi",
      specialties: [
        { label: "Terapiya", desc: "Charisma & DenFil", icon: "🦷", path: "/services/terapiya" },
        { label: "Ortopediya", desc: "Sirkon & Vinirlar", icon: "👑", path: "/services/ortopediya" },
        { label: "Implantatsiya", desc: "Mega'Gen & AnyRidge", icon: "🔩", path: "/services/implantatsiya" },
        { label: "Xirurgiya", desc: "Og'riqsiz tish olish", icon: "🛡️", path: "/services/xirurgiya" },
        { label: "Ortodontiya", desc: "Breketlar", icon: "✨", path: "/services/ortodontiya" },
      ],
      stat1Num: "20+ Yil",
      stat1Label: "Tibbiyot Tajribasi",
      stat2Num: "5,000+",
      stat2Label: "Mamnun Bemorlar",
      stat3Num: "100%",
      stat3Label: "Steril va Og'riqsiz",
      stat4Num: "🇩🇪 & 🇰🇷",
      stat4Label: "Original Materiallar",
    },
    ru: {
      badgeLive: "Приём Открыт · Андижан",
      badgeEducation: "Андижанский мед. колледж (2001–2004) & ОшГУ (2017–2022)",
      kicker: "✦ ПРЕЦИЗИОННАЯ СТОМАТОЛОГИЯ · СТАНДАРТЫ ГЕРМАНИИ И КОРЕИ",
      headlinePart1: "Безупречная Улыбка и ",
      headlineHighlight: "100% Без Боли",
      headlinePart2: " Современная Стоматология",
      subtitle:
        "Стоматолог Орифжон (Мансуров Орифжон Алимбекович) — более 20 лет практики в медицине, оригинальные немецкие (Charisma, AnyRidge, DXL) и корейские (Mega'Gen, DenFil) материалы, а также европейская анестезия (Orablok, Supercain) для лечения зубов без боли и страха.",
      ctaBook: "Записаться на Приём",
      ctaSlot: "Сегодня свободно 2 места",
      ctaServices: "Каталог Услуг",
      specialties: [
        { label: "Терапия", desc: "Charisma & DenFil", icon: "🦷", path: "/services/terapiya" },
        { label: "Ортопедия", desc: "Цирконий и виниры", icon: "👑", path: "/services/ortopediya" },
        { label: "Имплантация", desc: "Mega'Gen & AnyRidge", icon: "🔩", path: "/services/implantatsiya" },
        { label: "Хирургия", desc: "Удаление без боли", icon: "🛡️", path: "/services/xirurgiya" },
        { label: "Ортодонтия", desc: "Брекеты", icon: "✨", path: "/services/ortodontiya" },
      ],
      stat1Num: "20+ Лет",
      stat1Label: "Опыта в Медицине",
      stat2Num: "5,000+",
      stat2Label: "Довольных Пациентов",
      stat3Num: "100%",
      stat3Label: "Без Боли и Чисто",
      stat4Num: "🇩🇪 & 🇰🇷",
      stat4Label: "Стандарты Качества",
    },
    en: {
      badgeLive: "Accepting Patients · Andijan",
      badgeEducation: "Andijan Medical College (2001–2004) & Osh State (2017–2022)",
      kicker: "✦ PRECISION DENTISTRY · GERMAN & SOUTH KOREAN STANDARDS",
      headlinePart1: "Natural Radiance & ",
      headlineHighlight: "100% Pain-Free",
      headlinePart2: " Modern Dentistry",
      subtitle:
        "Dentist Orifjon (Mansurov Orifjon Alimbekovich) — Over 20+ years of healthcare practice, using genuine German (Charisma, AnyRidge, DXL) & South Korean (Mega'Gen, DenFil) certified materials and European anesthesia (Orablok, Supercain) for gentle, 100% painless dental care.",
      ctaBook: "Book Appointment",
      ctaSlot: "2 slots available today",
      ctaServices: "Explore Services",
      specialties: [
        { label: "Therapy", desc: "Charisma & DenFil", icon: "🦷", path: "/services/terapiya" },
        { label: "Orthopedics", desc: "Crowns & Veneers", icon: "👑", path: "/services/ortopediya" },
        { label: "Implantation", desc: "Mega'Gen & AnyRidge", icon: "🔩", path: "/services/implantatsiya" },
        { label: "Surgery", desc: "Painless extractions", icon: "🛡️", path: "/services/xirurgiya" },
        { label: "Orthodontics", desc: "Braces systems", icon: "✨", path: "/services/ortodontiya" },
      ],
      stat1Num: "20+ Yrs",
      stat1Label: "Healthcare Practice",
      stat2Num: "5,000+",
      stat2Label: "Treated Patients",
      stat3Num: "100%",
      stat3Label: "Painless & Sterile",
      stat4Num: "🇩🇪 & 🇰🇷",
      stat4Label: "Certified Materials",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white via-[#FFFDF8] to-[#FFF9D8]/40 border border-amber-200/80 shadow-[0_20px_70px_-15px_rgba(255,157,80,0.14)] mt-3 sm:mt-5 p-5 sm:p-10 lg:p-12 [transform-style:preserve-3d]">
      {/* Ambient Floating 3D Shapes & Lighting */}
      <Floating3DShapes />

      {/* Top Metallic Brand Sheen Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-brandCyan to-brandGreen animate-holo-shine" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Refined Elite Credentials Banner */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{t.badgeLive}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-300/80 text-slate-800 text-xs font-semibold shadow-2xs">
              <span>🎓</span>
              <span>{t.badgeEducation}</span>
            </span>
          </div>

          {/* Dynamic Editorial Headline */}
          <div className="space-y-2.5">
            <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-primary flex items-center gap-1.5">
              <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
              <span>{t.kicker}</span>
            </p>
            <h1 className="font-serif-classic text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] break-words">
              {t.headlinePart1}
              <span className="bg-gradient-to-r from-primary via-[#1DCED8] to-[#55E07E] bg-clip-text text-transparent font-serif italic">
                {t.headlineHighlight}
              </span>
              <br className="hidden sm:inline" />
              {t.headlinePart2}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
            {t.subtitle}
          </p>

          {/* 5 Core Specialties Horizontal Interactive Ribbon */}
          <div className="pt-1">
            <p className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">
              {lang === "uz" ? "Asosiy 5 Yo'nalish:" : lang === "ru" ? "5 Основных Направлений:" : "5 Core Specialties:"}
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              {t.specialties.map((spec, i) => (
                <Link
                  key={i}
                  to={to(spec.path)}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white border border-amber-200/80 hover:border-primary text-slate-800 hover:text-primary transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 text-xs font-bold"
                >
                  <span className="text-sm">{spec.icon}</span>
                  <span>{spec.label}</span>
                  <span className="text-[10px] font-medium text-slate-400 group-hover:text-primary">
                    ({spec.desc})
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Certified Clinical Materials Badges Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <OriginPill flag="🇩🇪" material="Charisma" country="Germaniya" />
            <OriginPill flag="🇰🇷" material="DenFil" country="Janubiy Koreya" />
            <OriginPill flag="💉" material="Orablok" country="Yevropa Blister" />
            <OriginPill flag="🔩" material="Mega'Gen & AnyRidge & DXL" country="Germaniya/Koreya" />
          </div>

          {/* High-Tech CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="relative overflow-hidden inline-flex justify-center items-center gap-2.5 px-6 sm:px-7 py-4 rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary hover:brightness-110 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer group select-none"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
              <IconClock className="w-4 h-4 text-white relative z-10" />
              <div className="flex flex-col items-start text-left relative z-10 leading-tight">
                <span>{t.ctaBook}</span>
                <span className="text-[9px] text-white/80 lowercase font-medium">({t.ctaSlot})</span>
              </div>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <Link
              to={to("/services")}
              className="inline-flex justify-center items-center gap-2 px-5 py-4 rounded-2xl bg-white/95 hover:bg-white border border-amber-300/80 hover:border-primary text-slate-800 font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs hover:-translate-y-1 transition-all duration-300"
            >
              <span>{t.ctaServices}</span>
              <span>→</span>
            </Link>

            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex justify-center items-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs sm:text-sm transition-all hover:scale-105 duration-200 shadow-2xs"
            >
              <IconPhone className="w-4 h-4 text-emerald-600 animate-bounce" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
            </a>

            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-1.5 px-3.5 py-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-950 font-bold text-xs transition-all hover:scale-105 duration-200 shadow-2xs"
            >
              <span className="text-sky-500 font-black">✈</span>
              <span>Telegram: {DOCTOR_INFO.telegramHandle}</span>
            </a>
          </div>

          {/* 4 Interactive 3D Stats Glass Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-200/80 [perspective:800px]">
            <div className="p-3.5 rounded-2xl bg-white/90 border border-amber-300/80 shadow-luxury hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-black text-primary">{t.stat1Num}</p>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{t.stat1Label}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-amber-300/80 shadow-luxury hover:-translate-y-1.5 hover:scale-[1.03] hover:border-brandOrange transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-black text-brandOrange">{t.stat2Num}</p>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{t.stat2Label}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-emerald-300/80 shadow-green hover:-translate-y-1.5 hover:scale-[1.03] hover:border-emerald-500 transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-black text-emerald-600">{t.stat3Num}</p>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{t.stat3Label}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-cyan-300/80 shadow-cyan hover:-translate-y-1.5 hover:scale-[1.03] hover:border-brandCyan transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-black text-brandCyan">{t.stat4Num}</p>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{t.stat4Label}</p>
            </div>
          </div>
        </div>

        {/* Right Visual (5 cols): Interactive 3D Perspective Doctor Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <Doctor3DCard lang={lang} onOpenBooking={onOpenBooking} />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   2. 5 CORE SPECIALITIES SHOWCASE
   ═══════════════════════════════════════════════════════════════════ */
const SpecialitiesSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const specialtyMeta = {
    terapiya: {
      kicker: { uz: "✦ ESTETIK RESTAVRATSIYA", ru: "✦ ЭСТЕТИЧЕСКАЯ РЕСТАВРАЦИЯ", en: "✦ AESTHETIC RESTORATION" },
      materialBadge: "🇩🇪 Charisma & 🇰🇷 DenFil",
      guaranteePill: { uz: "100% Og'riqsiz", ru: "100% Без Боли", en: "100% Pain-Free" },
      durationText: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
      techSummary: { uz: "Nemis nano-kompoziti", ru: "Немецкий нанокомпозит", en: "German nanocomposite" },
    },
    ortopediya: {
      kicker: { uz: "✦ CAD/CAM SIRKONIY", ru: "✦ CAD/CAM ЦИРКОНИЙ", en: "✦ CAD/CAM ZIRCONIA" },
      materialBadge: "💎 Monolit Sirkon & Vinirlar",
      guaranteePill: { uz: "10–15 Yil Kafolat", ru: "Гарантия 10–15 Лет", en: "10–15 Yrs Warranty" },
      durationText: { uz: "3–5 kun (2 qabul)", ru: "3–5 дней (2 визита)", en: "3–5 days (2 visits)" },
      techSummary: { uz: "Monolit sirkoniy & E.max", ru: "Монолитный цирконий & E.max", en: "Monolithic Zirconia & E.max" },
    },
    implantatsiya: {
      kicker: { uz: "✦ PREMIUM BIOTITAN", ru: "✦ ПРЕМИУМ БИОТИТАН", en: "✦ PREMIUM BIO-TITANIUM" },
      materialBadge: "🔩 Mega'Gen & AnyRidge",
      guaranteePill: { uz: "Umrbod Kafolat", ru: "Пожизненная Гарантия", en: "Lifetime Warranty" },
      durationText: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
      techSummary: { uz: "Germaniya & Koreya tizimi", ru: "Системы Германии и Кореи", en: "German & Korean systems" },
    },
    xirurgiya: {
      kicker: { uz: "✦ ATRAVMATIK JARROHLIK", ru: "✦ АТРАВМАТИЧНАЯ ХИРУРГИЯ", en: "✦ ATRAUMATIC SURGERY" },
      materialBadge: "🛡️ Steril Orablok & Supercain",
      guaranteePill: { uz: "Asoratsiz Tiklanish", ru: "Без Осложнений", en: "Zero Complications" },
      durationText: { uz: "10–25 daqiqa", ru: "10–25 минут", en: "10–25 mins" },
      techSummary: { uz: "Yevropa steril anesteziyasi", ru: "Европейская анестезия", en: "European sterile anesthesia" },
    },
    ortodontiya: {
      kicker: { uz: "✦ MUKAMMAL TISHLASH", ru: "✦ ИДЕАЛЬНЫЙ ПРИКУС", en: "✦ BITE CORRECTION" },
      materialBadge: "✨ Metall, Keramika & Sapfir",
      guaranteePill: { uz: "Barqaror Natija", ru: "Стабильный Результат", en: "Lifelong Retention" },
      durationText: { uz: "12–18 oy", ru: "12–18 месяцев", en: "12–18 months" },
      techSummary: { uz: "Zamonaviy breket tizimlari", ru: "Брекеты и элайнеры", en: "Modern braces & aligners" },
    },
  };

  return (
    <section className="py-8 sm:py-14 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-50/90 border border-amber-300/80 text-primary shadow-xs">
          <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
          <span>{lang === "uz" ? "5 Ta Asosiy Klinik Yo'nalish" : lang === "ru" ? "5 Основных Клинических Направлений" : "5 Core Clinical Specialties"}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif-classic tracking-tight">
          {lang === "uz"
            ? "Stomatolog Orifjon Xizmatlari"
            : lang === "ru"
            ? "Услуги Стоматолога Орифжона"
            : "Dental Specialties by Dentist Orifjon"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {lang === "uz"
            ? "20+ yillik tibbiyot tajribasi, Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bilimlari hamda sertifikatlangan Germaniya va Koreya materiallari."
            : lang === "ru"
            ? "Более 20 лет врачебной практики, фундаментальное образование и оригинальные сертифицированные материалы из Германии и Южной Кореи."
            : "Over 20+ years of healthcare practice combining university dental degrees with genuine certified materials from Germany and South Korea."}
        </p>
      </div>

      {/* Grid of 5 Specialties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 [perspective:1200px]">
        {SERVICES_CATALOG.map((s) => {
          const meta = specialtyMeta[s.id] || {
            kicker: { uz: "✦ MAXSUS XIZMAT", ru: "✦ СПЕЦИАЛЬНАЯ УСЛУГА", en: "✦ SPECIALTY SERVICE" },
            materialBadge: s.techTag?.[lang] || "Sertifikatlangan",
            guaranteePill: { uz: s.warranty?.[lang] || "Rasmiy Kafolat", ru: "Гарантия", en: "Warranty" },
            durationText: { uz: s.duration?.[lang] || "Qisqa muddat", ru: "Короткий срок", en: "Short visit" },
            techSummary: { uz: "Sifatli muolaja", ru: "Качественное лечение", en: "Quality treatment" },
          };

          return (
            <article
              key={s.id}
              className="group bg-white/95 rounded-[2rem] border border-amber-200/80 shadow-[0_10px_35px_-8px_rgba(20,30,40,0.06)] hover:shadow-[0_22px_55px_-10px_rgba(255,157,80,0.22)] hover:border-primary/60 transition-all duration-500 hover:-translate-y-2.5 overflow-hidden flex flex-col justify-between [transform-style:preserve-3d]"
            >
              <div>
                {/* Visual Banner with Crisp Studio Photography & Frosted Glass Badges */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100 [transform-style:preserve-3d]">
                  <picture>
                    <source srcSet={s.image} type="image/webp" />
                    <img
                      src={s.image.replace(/\.webp$/, ".jpg")}
                      alt={s.title[lang]}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </picture>

                  {/* Soft Luxury Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Frosted Glass Badges (NO HEAVY BLACK BOXES) */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    {/* Material Spec Glass Pill */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.12)] text-[11px] font-black text-slate-900">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>{meta.materialBadge}</span>
                    </span>

                    {/* Emerald / Gold Foil Guarantee Pill */}
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] text-[10.5px] font-black tracking-wide border border-emerald-300/40">
                      <IconShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{meta.guaranteePill[lang]}</span>
                    </span>
                  </div>

                  {/* Bottom Duration & Pain-Free Indicator over Photo */}
                  <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[10.5px] font-bold border border-white/90 shadow-md">
                      <IconClock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{meta.durationText[lang]}</span>
                    </span>
                  </div>
                </div>

                {/* Floating 3D Medical Icon Disc on Photo Boundary */}
                <div className="px-5 -mt-7 relative z-20 flex justify-between items-end">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_25px_rgba(255,157,80,0.22)] border-2 border-amber-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-amber-50/90 border border-amber-200 px-3 py-1 rounded-full shadow-2xs mb-1">
                    {meta.techSummary[lang]}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 pt-3.5 space-y-3.5 text-left">
                  <div>
                    <div className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.16em] text-primary mb-1">
                      {meta.kicker[lang]}
                    </div>
                    <h3 className="text-lg sm:text-[19px] font-black text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                      {s.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {s.shortDesc[lang]}
                    </p>
                  </div>

                  {/* 2 Key Clinical Highlights with Emerald Check */}
                  <div className="space-y-1.5 pt-2.5 border-t border-amber-100 text-xs">
                    {s.highlights[lang].slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-[11.5px] leading-snug line-clamp-1 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons with Shimmer & 3D Hover */}
              <div className="p-5 pt-0 border-t border-amber-100/70 flex items-center justify-between gap-3 mt-3">
                <Link
                  to={to(`/services/${s.id}`)}
                  className="text-xs font-extrabold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
                >
                  <span>{lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Details"}</span>
                  <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200">→</span>
                </Link>
                <button
                  onClick={() => onOpenBooking(s.id)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-sm hover:shadow-[0_6px_20px_rgba(255,157,80,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-200"
                >
                  {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book Visit"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   3. BEFORE & AFTER GALLERY SHOWCASE
   ═══════════════════════════════════════════════════════════════════ */
const BeforeAfterSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-12 sm:py-16 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs">
          <IconSparkleStar className="w-3.5 h-3.5 text-amber-600" />
          <span>{lang === "uz" ? "NATIJALAR VA TAQQOSLASH" : lang === "ru" ? "РЕЗУЛЬТАТЫ ДО И ПОСЛЕ" : "BEFORE & AFTER GALLERY"}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-classic">
          {lang === "uz"
            ? "Muvaffaqiyatli Tabassum Restavratsiyalari"
            : lang === "ru"
            ? "Примеры Преображения Улыбки"
            : "Smile Transformation Results"}
        </h2>
        <p className="text-sm text-slate-600">
          {lang === "uz"
            ? "Slayderni o'ngga va chapga surib, davolashdan oldingi va keyingi natijalarni taqqoslang."
            : lang === "ru"
            ? "Перемещайте ползунок, чтобы сравнить состояние зубов до и после лечения."
            : "Drag the slider handle to inspect authentic clinical smile improvements."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BeforeAfterSlider
          beforeImg={assets.treatment_implant}
          afterImg={assets.hero_smile}
          title={
            lang === "uz"
              ? "Dental Implantatsiya & Tsirkoniy"
              : lang === "ru"
              ? "Имплантация и Цирконий"
              : "Dental Implants & Zirconia"
          }
          subtitle={
            lang === "uz"
              ? "MegaGen implant va CAD/CAM karonka"
              : lang === "ru"
              ? "MegaGen и коронка CAD/CAM"
              : "MegaGen implant & CAD/CAM crown"
          }
        />
        <BeforeAfterSlider
          beforeImg={assets.treatment_crowns}
          afterImg={assets.treatment_veneers}
          title={
            lang === "uz"
              ? "E-max Estetik Vinirlar"
              : lang === "ru"
              ? "Виниры E-max"
              : "E-max Aesthetic Veneers"
          }
          subtitle={
            lang === "uz"
              ? "Gollivud tabassumi dizayni"
              : lang === "ru"
              ? "Дизайн Голливудской улыбки"
              : "Hollywood smile makeover"
          }
        />
        <BeforeAfterSlider
          beforeImg={assets.treatment_therapy}
          afterImg={assets.treatment_whitening}
          title={
            lang === "uz"
              ? "Tish Oqartirish & Restavratsiya"
              : lang === "ru"
              ? "Отбеливание и Реставрация"
              : "Teeth Whitening & Restoration"
          }
          subtitle={
            lang === "uz"
              ? "AirFlow va fotopolimer restavratsiya"
              : lang === "ru"
              ? "AirFlow и нано-композиты"
              : "AirFlow & composite restoration"
          }
        />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════════ */
const Home = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const seo = PAGE_SEO.home[lang] || PAGE_SEO.home.uz;
  const homeSchema = buildHomeSchema(lang, FAQ_ITEMS);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={homeSchema}
      />

      {/* 1. Hero */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 3D Clinical Ticker Marquee */}
      <ClinicalTickerMarquee />

      {/* 2. 5 Specialties */}
      <SpecialitiesSection onOpenBooking={onOpenBooking} />

      {/* 3. Interactive Treatment & Cost Calculator */}
      <Interactive3DCostCalculator />

      {/* 4. Verified Diplomas & MegaGen Certificates */}
      <CertificatesShowcase />

      {/* 5. Authentic Equipment & Clinical Operatory Tour */}
      <ClinicEquipmentShowcase />

      {/* 6. Certified Clinical Materials: Germany & South Korea */}
      <ClinicalMaterialsShowcase onOpenBooking={onOpenBooking} />

      {/* Before & After (Hidden by user request) */}
      {/* <BeforeAfterSection /> */}

      {/* 6. Online Smile Assessment Wizard */}
      <SmileAssessmentWizard />

      {/* 7. Patient Aftercare Guides */}
      <PatientCareGuides />

      {/* 8. Inline Booking Section */}
      <InlineBookingSection />

      {/* 9. FAQ Accordion */}
      <FaqAccordion />

      {/* 10. Clinic Contact & Location */}
      <ClinicLocationMap />
    </div>
  );
};

export default Home;
