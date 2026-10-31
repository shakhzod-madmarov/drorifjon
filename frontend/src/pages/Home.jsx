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
   1. EDITORIAL HERO — DR. MANSUROV O.A.
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badge: "Vrach-Stomatolog · 20+ Yillik Tajriba",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Terapiya · Ortopediya · Implantatsiya · Xirurgiya · Ortodontiya",
      headline: "Tabiiy va Sog'lom Tabassum Uchun 100% Og'riqsiz Zamonaviy Stomatologiya",
      subtitle:
        "Andijon Tibbiyot kolleji (2001–2004) hamda O'sh Davlat Universiteti (2017–2022) bitiruvchisi. Terapiya (davolash va restavratsiya), ortopediya (tish qo'yish, protezlash), Germaniya va Koreya implantatsiyasi, xirurgiya va ortodontiya yo'nalishlarida 100% og'riqsiz davolash.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Barcha Xizmatlar",
      stat1Num: "20+ Yil",
      stat1Label: "Tibbiyot Tajribasi",
      stat2Num: "1,500+",
      stat2Label: "Mamnun Bemorlar",
      stat3Num: "100%",
      stat3Label: "Steril va Og'riqsiz",
      stat4Num: "O'shDU",
      stat4Label: "Stomatologiya Diplomi",
    },
    ru: {
      badge: "Врач-Стоматолог · 20+ Лет в Медицине",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Терапия · Ортопедия · Имплантация · Хирургия · Ортодонтия",
      headline: "Современная Стоматология Без Боли для Вашей Безупречной Улыбки",
      subtitle:
        "Выпускник Андижанского медицинского колледжа (2001–2004) и Ошского Государственного Университета (2017–2022). Терапия (лечение и реставрация), ортопедия (протезирование), немецкая и корейская имплантация, хирургия и ортодонтия без боли.",
      ctaBook: "Записаться на Приём",
      ctaServices: "Все Услуги",
      stat1Num: "20+ Лет",
      stat1Label: "Опыта в Медицине",
      stat2Num: "1,500+",
      stat2Label: "Довольных Пациентов",
      stat3Num: "100%",
      stat3Label: "Без Боли и Чисто",
      stat4Num: "ОшГУ",
      stat4Label: "Диплом Стоматолога",
    },
    en: {
      badge: "Dental Surgeon · 20+ Years Practice",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Therapy · Orthopedics · Implantation · Surgery · Orthodontics",
      headline: "Gentle & 100% Painless Modern Dental Care for Your Natural Smile",
      subtitle:
        "Graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Comprehensive therapy, orthopedics, German & Korean dental implants, gentle surgery, and braces orthodontics.",
      ctaBook: "Book Appointment",
      ctaServices: "Explore Services",
      stat1Num: "20+ Yrs",
      stat1Label: "Healthcare Practice",
      stat2Num: "1,500+",
      stat2Label: "Treated Patients",
      stat3Num: "100%",
      stat3Label: "Painless & Sterile",
      stat4Num: "Osh State",
      stat4Label: "Dental Graduate",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF8] via-[#FFF9D8]/50 to-[#E3FBFC]/30 border-2 border-amber-300/80 shadow-2xl mt-2 p-5 sm:p-10 lg:p-12 [transform-style:preserve-3d]">
      {/* Ambient Floating 3D Shapes & Lighting */}
      <Floating3DShapes />

      {/* Top Metallic Brand Sheen Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-brandCyan to-brandGreen animate-holo-shine" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status & Bespoke 3D Stickers Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 border border-amber-300 text-slate-800 text-xs font-bold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{t.badge}</span>
            </span>

            <HoloGoldStamp
              text="20+ Yillik Tajriba"
              subtext={
                lang === "ru"
                  ? "Андижанский мед. колледж & ОшГУ"
                  : lang === "en"
                  ? "Andijan Med. & Osh State"
                  : "Andijon Tib. Kolleji & O'shDU"
              }
            />

            <ZeroPainShield
              label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Pain-Free" : "100% Og'riqsiz"}
              sublabel="Orablok & Supercain"
            />
          </div>

          {/* Dynamic Headline with Multi-Color 3D Gradient */}
          <div className="space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary flex items-center gap-1.5">
              <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
              <span>{t.specialtyTitle}</span>
            </p>
            <h1 className="font-serif-classic text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.14] break-words">
              {lang === "uz" ? "Tabiiy va Sog'lom Tabassum Uchun " : lang === "ru" ? "Для Вашей Безупречной Улыбки " : "For Your Naturally Radiant Smile "}
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                {lang === "uz" ? "100% Og'riqsiz Zamonaviy Stomatologiya" : lang === "ru" ? "Стоматология 100% Без Боли" : "100% Gentle Modern Dentistry"}
              </span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
            {t.subtitle}
          </p>

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
              <span className="relative z-10">{t.ctaBook}</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <Link
              to={to("/services")}
              className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-white/95 hover:bg-white border-2 border-amber-300/80 hover:border-primary text-slate-800 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span>{t.ctaServices}</span>
              <span>→</span>
            </Link>

            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex justify-center items-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 text-emerald-900 font-bold text-xs sm:text-sm transition-all hover:scale-105 duration-200 shadow-2xs"
            >
              <IconPhone className="w-4 h-4 text-emerald-600 animate-bounce" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
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
          <Doctor3DCard lang={lang} />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   2. 9 CORE SPECIALITIES SHOWCASE
   ═══════════════════════════════════════════════════════════════════ */
const SpecialitiesSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const specialtyBadges = {
    terapiya: {
      sticker: "🌿 100% OG'RIQSIZ RESTAVRATSIYA",
      materials: "🇩🇪 Charisma & 🇰🇷 DenFil",
    },
    ortopediya: {
      sticker: "👑 YUQORI SIFATLI TISH QO'YISH",
      materials: "💎 CAD/CAM Sirkon & IPS E.max",
    },
    implantatsiya: {
      sticker: "🔩 GERMANIYA & KOREYA BIOTITAN",
      materials: "🇰🇷 Mega'Gen · 🇩🇪 AnyRidge · 🇩🇪 DXL",
    },
    xirurgiya: {
      sticker: "🛡️ ATRAVMATIK XIRURGIYA",
      materials: "💉 Steril Orablok & Supercain",
    },
    ortodontiya: {
      sticker: "✨ MUKAMMAL TABASSUM & TISHLASH",
      materials: "💎 Metall, Keramika & Elaynerlar",
    },
  };

  return (
    <section className="py-8 sm:py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-amber-300 text-slate-800 shadow-2xs">
          <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
          <span>{lang === "uz" ? "5 Ta Asosiy Stomatologik Yo'nalish" : lang === "ru" ? "5 Основных Клинических Направлений" : "5 Core Clinical Specialties"}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif-classic tracking-tight">
          {lang === "uz"
            ? "Dr. Mansurov O.A. Stomatologik Xizmatlari"
            : lang === "ru"
            ? "Клинические Услуги Д-ра Мансурова О.А."
            : "Clinical Specialties & Treatment Directions"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {lang === "uz"
            ? "20+ yillik tibbiyot tajribasi, Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bilimlari hamda sertifikatlangan Germaniya va Koreya materiallari."
            : lang === "ru"
            ? "Более 20 лет врачебной практики, классическое медицинское образование и сертифицированные материалы из Германии и Кореи."
            : "Over 20+ years of healthcare practice combining university dental degrees with genuine certified materials from Germany and Korea."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
        {SERVICES_CATALOG.map((s) => {
          const badgeMeta = specialtyBadges[s.id] || {
            sticker: s.badge?.[lang] || "100% KAFOLAT",
            materials: s.techTag?.[lang] || "Sertifikatlangan",
          };

          return (
            <article
              key={s.id}
              className={`group bg-white rounded-3xl border-2 border-amber-200/90 shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/70 overflow-hidden flex flex-col justify-between [transform-style:preserve-3d] ${s.badgeTheme?.accentGlow || ""}`}
            >
              <div>
                {/* Photo Banner with Zoom Depth & Bespoke Clinical Stickers */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 [transform-style:preserve-3d]">
                  <img
                    src={s.image}
                    alt={s.title[lang]}
                    width={600}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Visual Depth Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/30 pointer-events-none" />

                  {/* Top Bespoke Holographic Stickers */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-[10.5px] font-black tracking-wide text-amber-200 border border-amber-300/40 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{badgeMeta.sticker}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-[10px] font-bold tracking-wide text-emerald-300 border border-emerald-400/30 shadow-md">
                      <IconShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{s.warranty[lang]}</span>
                    </span>
                  </div>

                  {/* In-Photo Bottom Materials Ribbon */}
                  <div className="absolute bottom-3 inset-x-3 z-10 pointer-events-none">
                    <span className="inline-block px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                      {badgeMeta.materials}
                    </span>
                  </div>
                </div>

                {/* Floating Medical Icon Disc on Image Border & Refined Clinical Pill */}
                <div className="px-5 -mt-6 relative z-20 flex justify-between items-end">
                  <span className="w-13 h-13 rounded-2xl bg-white shadow-xl border-2 border-amber-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {s.icon}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-amber-50 border border-amber-300/80 px-3 py-1 rounded-full shadow-2xs mb-1">
                    {s.featurePill?.[lang] || (lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Gentle")}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 pt-3 space-y-3.5">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      {s.category[lang]}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                      {s.title[lang]}
                    </h3>
                    {/* Clean treatment meta row: duration & origin */}
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500 font-medium pt-1.5">
                      <span className="inline-flex items-center gap-1 text-slate-700">
                        <IconClock className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{s.duration[lang]}</span>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-700 truncate">
                        <IconSparkleStar className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{s.techTag?.[lang] || s.category[lang]}</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {s.shortDesc[lang]}
                    </p>
                  </div>

                  {/* 2 Key Clinical Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-amber-100 text-xs">
                    {s.highlights[lang].slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span className="text-[11.5px] leading-snug line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons with Shimmer & 3D Hover */}
              <div className="p-5 pt-0 border-t border-amber-100/80 flex items-center justify-between gap-3 mt-3">
                <Link
                  to={to(`/services/${s.id}`)}
                  className="text-xs font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
                >
                  <span>{lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Details"}</span>
                  <span className="group-hover/btn:translate-x-1.5 transition-transform duration-200">→</span>
                </Link>
                <button
                  onClick={() => onOpenBooking(s.id)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-orange hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-200"
                >
                  {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book"}
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
