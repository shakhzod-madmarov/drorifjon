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
    <section className="relative overflow-hidden rounded-3xl bg-white border border-amber-200/90 shadow-luxury mt-3">
      {/* Brand Accent Top Strip */}
      <div className="h-2 w-full bg-gradient-to-r from-primary via-brandCyan to-brandGreen" />

      <div className="p-5 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-primary border border-orange-200/60 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {t.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/80 text-amber-900 border border-amber-200/60 text-[11px] font-semibold">
              <IconGraduationCap className="w-3.5 h-3.5 text-brandOrange shrink-0" />
              <span>
                {lang === "ru"
                  ? "Андижанский мед. колледж (2001-2004) & ОшГУ (2017-2022)"
                  : lang === "en"
                  ? "Andijan Medical College (2001-2004) & Osh State Univ (2017-2022)"
                  : "Andijon Tibbiyot kolleji (2001-2004) & O'shDU (2017-2022)"}
              </span>
            </span>
          </div>

          {/* Title & Headline */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandOrange">
              {t.specialtyTitle}
            </p>
            <h1 className="font-serif-classic text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A202C] leading-[1.14] break-words">
              {t.headline}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={() => onOpenBooking()}
              className="relative overflow-hidden inline-flex justify-center items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
              <IconClock className="w-4 h-4 text-white relative z-10" />
              <span className="relative z-10">{t.ctaBook}</span>
            </button>

            <Link
              to={to("/services")}
              className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl bg-amber-50/80 hover:bg-amber-100/70 border border-amber-200/70 text-slate-800 font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs"
            >
              <span>{t.ctaServices}</span>
              <span>→</span>
            </Link>

            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex justify-center items-center gap-2 px-3.5 py-3 rounded-xl text-primary hover:bg-primary/5 font-semibold text-xs sm:text-sm transition-colors hover:scale-105 duration-200"
            >
              <IconPhone className="w-4 h-4 text-primary" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* 4 Stats Grid with Interactive 3D Depth Motion */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-amber-100 [perspective:800px]">
            <div className="p-3 rounded-2xl bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/50 shadow-2xs hover:-translate-y-1.5 hover:scale-[1.03] hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-primary">{t.stat1Num}</p>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5">{t.stat1Label}</p>
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/50 shadow-2xs hover:-translate-y-1.5 hover:scale-[1.03] hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-brandOrange">{t.stat2Num}</p>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5">{t.stat2Label}</p>
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/50 shadow-2xs hover:-translate-y-1.5 hover:scale-[1.03] hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-emerald-600">{t.stat3Num}</p>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5">{t.stat3Label}</p>
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/50 shadow-2xs hover:-translate-y-1.5 hover:scale-[1.03] hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-default">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-brandCyan">{t.stat4Num}</p>
              <p className="text-[11px] font-medium text-slate-600 mt-0.5">{t.stat4Label}</p>
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

  return (
    <section className="py-12 sm:py-16 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-primary/5 text-primary border border-primary/20 shadow-2xs">
          <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span>{lang === "uz" ? "5 Ta Asosiy Stomatologik Yo'nalish" : lang === "ru" ? "5 Основных Направлений" : "5 Core Dental Specialties"}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-classic">
          {lang === "uz"
            ? "Dr. Mansurov O.A. Stomatologik Yo'nalishlari"
            : lang === "ru"
            ? "Клинические Направления Д-ра Мансурова О.А."
            : "Clinical Specialties & Care Directions"}
        </h2>
        <p className="text-sm text-slate-600">
          {lang === "uz"
            ? "20+ yillik tibbiyot tajribasi, Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bilimlari hamda yuqori sifatli zamonaviy materiallar."
            : lang === "ru"
            ? "Более 20 лет практического опыта, фундаментальные медицинские знания и передовые стоматологические материалы."
            : "Over 20+ years of healthcare background combining university dentistry training with genuine high-grade materials."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
        {SERVICES_CATALOG.map((s) => (
          <article
            key={s.id}
            className={`group bg-white rounded-3xl border border-amber-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2.5 hover:border-primary/50 overflow-hidden flex flex-col justify-between [transform-style:preserve-3d] ${s.badgeTheme?.accentGlow || ""}`}
          >
            <div>
              {/* Photo Banner with Zoom Depth & Authentic Clinical Stickers */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 [transform-style:preserve-3d]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 pointer-events-none" />

                {/* Clean, Refined Top Stickers: Hallmark & Warranty */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] font-semibold tracking-wide text-white/95 border border-white/20 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{s.badge?.[lang] || s.category[lang]}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] font-semibold tracking-wide text-emerald-300 border border-emerald-400/30 shadow-xs">
                    <IconShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{s.warranty[lang]}</span>
                  </span>
                </div>
              </div>

              {/* Floating Medical Icon Disc on Image Border & Refined Clinical Pill */}
              <div className="px-5 -mt-6 relative z-20 flex justify-between items-end">
                <span className="w-12 h-12 rounded-2xl bg-white shadow-xl border-2 border-amber-200/90 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {s.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 border border-primary/20 px-2.5 py-1 rounded-full shadow-2xs mb-1">
                  {s.featurePill?.[lang] || (lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Gentle")}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-5 pt-3 space-y-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {s.category[lang]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                    {s.title[lang]}
                  </h3>
                  {/* Clean treatment meta row: duration & origin */}
                  <div className="flex items-center gap-2.5 text-[11px] text-slate-500 font-medium pt-1.5">
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <IconClock className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{s.duration[lang]}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1 text-slate-600 truncate">
                      <IconSparkleStar className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{s.techTag?.[lang] || s.category[lang]}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {s.shortDesc[lang]}
                  </p>
                </div>

                {/* 2 Key Clinical Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-amber-100 text-xs">
                  {s.highlights[lang].slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-[11px] leading-snug line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-5 pt-0 border-t border-amber-100/60 flex items-center justify-between gap-3 mt-2">
              <Link
                to={to(`/services/${s.id}`)}
                className="text-xs font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
              >
                <span>{lang === "uz" ? "Batafsil" : lang === "ru" ? "Подробнее" : "Details"}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
              <button
                onClick={() => onOpenBooking(s.id)}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {lang === "uz" ? "Yozilish" : lang === "ru" ? "Запись" : "Book"}
              </button>
            </div>
          </article>
        ))}
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

      {/* 2. 9 Specialties */}
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
