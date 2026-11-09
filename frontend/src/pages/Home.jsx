import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
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
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import PatientCareGuides from "../components/PatientCareGuides";
import { IconClock, IconPhone, IconTelegram, IconShieldCheck } from "../components/MedicalIcons";
import { DOCTOR_INFO } from "../constants/doctor";

/* ═══════════════════════════════════════════════════════════════════
   1. CLINICAL ELEGANCE HERO — STOMATOLOG ORIFJON
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [counted, setCounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setCounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const T = {
    uz: {
      eyebrow: "STOMATOLOG ORIFJON · ANDIJON · 100% OG'RIQSIZ",
      h1a: "Tabassumingiz —",
      h1b: "bizning g'ururimiz",
      subtitle:
        "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi. 20 yildan ortiq tajriba, MegaGen sertifikatlangan implantatsiya va to'liq og'riqsiz muolajalar.",
      cta1: "Qabulga Yozilish",
      cta2: "Xizmatlar",
      s1n: "20+",
      s1l: "Yillik tajriba",
      s2n: "5000+",
      s2l: "Baxtli bemor",
      s3n: "100%",
      s3l: "Og'riqsiz kafolat",
      open: "Dushanba – Shanba · 08:30–16:30",
    },
    ru: {
      eyebrow: "СТОМАТОЛОГ ОРИФЖОН · АНДИЖАН · 100% БЕЗ БОЛИ",
      h1a: "Ваша улыбка —",
      h1b: "наша гордость",
      subtitle:
        "Стоматолог Орифжон (Мансуров Орифбек Алимбекович) — выпускник Андижанского мед. колледжа и Ошского государственного университета. Более 20 лет опыта и сертифицированная имплантация MegaGen.",
      cta1: "Записаться",
      cta2: "Услуги",
      s1n: "20+",
      s1l: "Лет практики",
      s2n: "5000+",
      s2l: "Довольных пациентов",
      s3n: "100%",
      s3l: "Без боли",
      open: "Пн–Сб · 08:30–16:30",
    },
    en: {
      eyebrow: "DENTIST ORIFJON · ANDIJAN · 100% PAINLESS",
      h1a: "Your smile is",
      h1b: "our pride",
      subtitle:
        "Dentist Orifjon (Mansurov Orifjon Alimbekovich) — Graduate of Andijan Medical College and Osh State University. 20+ years of experience with MegaGen certified implantation and 100% painless procedures.",
      cta1: "Book Appointment",
      cta2: "Our Services",
      s1n: "20+",
      s1l: "Years of Practice",
      s2n: "5,000+",
      s2l: "Happy Patients",
      s3n: "100%",
      s3l: "Pain-Free Guarantee",
      open: "Mon–Sat · 08:30–16:30",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center overflow-hidden py-6 sm:py-10 lg:py-14"
    >
      {/* ── Ambient Medical Background Glows ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-teal-200/25 blur-3xl animate-blob" />
        <div className="absolute top-16 right-0 w-[420px] h-[420px] rounded-full bg-emerald-100/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-4 left-1/3 w-[380px] h-[380px] rounded-full bg-teal-100/20 blur-3xl animate-blob animation-delay-4000" />

        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, #0C6E5A18 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* ── LEFT: Editorial Text (7 cols) ── */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left">
            {/* Eyebrow badge with pulsing indicator */}
            <div className="animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/90 text-[10px] 2xs:text-[11px] font-black uppercase tracking-wider text-primary shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block shrink-0" />
                <span>{t.eyebrow}</span>
              </span>
            </div>

            {/* H1 Headline */}
            <div className="animate-fadeInUp animation-delay-100">
              <h1
                id="hero-heading"
                className="text-3xl 2xs:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.1] tracking-tight text-slate-900 font-serif-classic"
              >
                <span className="block">{t.h1a}</span>
                <span className="block text-gradient-teal mt-1">{t.h1b}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl animate-fadeInUp animation-delay-200">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fadeInUp animation-delay-300">
              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                }}
                className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-primary text-white font-extrabold text-sm shadow-[0_8px_30px_-6px_rgba(12,110,90,0.5)] hover:shadow-[0_12px_40px_-6px_rgba(12,110,90,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group select-none"
              >
                <span className="relative z-10">{t.cta1}</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>

              <Link
                to={to("/services")}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-200 hover:border-primary bg-white hover:bg-teal-50/50 text-slate-800 hover:text-primary font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 group shadow-2xs"
              >
                <span>{t.cta2}</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 2xs:gap-4 sm:gap-8 pt-4 border-t border-slate-200/70 animate-fadeInUp animation-delay-400">
              {[
                { n: t.s1n, l: t.s1l, color: "text-primary" },
                { n: t.s2n, l: t.s2l, color: "text-indigo-600" },
                { n: t.s3n, l: t.s3l, color: "text-emerald-600" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col group cursor-default">
                  <span
                    className={`text-2xl sm:text-3xl font-black font-serif-classic ${s.color} leading-none transition-transform duration-300 group-hover:scale-105 ${
                      counted ? "animate-fadeInScale" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold mt-1 tracking-tight">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            {/* Open hours pill */}
            <div className="flex items-center gap-2 pt-1 animate-fadeInUp animation-delay-500">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-500 font-semibold">{t.open}</span>
            </div>
          </div>

          {/* ── RIGHT: Doctor Presentation Showcase Card (5 cols) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center animate-fadeInScale animation-delay-200">
            {/* Ambient luxury glow aura */}
            <div className="absolute inset-2 sm:inset-4 rounded-3xl bg-gradient-to-tr from-teal-200/40 via-emerald-100/30 to-sky-100/40 blur-2xl -z-10" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Doctor Card Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,110,90,0.18)] border border-teal-100 bg-white group">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <picture>
                    <source srcSet="/dr_orifjon_portrait_pro.webp" type="image/webp" />
                    <img
                      src="/dr_orifjon_portrait_pro.jpg"
                      alt="Stomatolog Mansurov Orifjon Alimbekovich — Andijon"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      width={680}
                      height={800}
                      loading="eager"
                    />
                  </picture>

                  {/* Floating Top-Left Badge: 20+ Yillik Tajriba */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-teal-200/80 text-[11px] font-bold text-slate-800 shadow-sm">
                      <span className="text-amber-500">⭐</span>
                      <span>20+ Yillik Tajriba</span>
                    </span>
                  </div>

                  {/* Floating Top-Right Badge: Oliy Toifa */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-900/90 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-sm">
                      <span>🛡️ Oliy Toifa</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Profile Bar */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h2 className="text-base sm:text-lg font-black text-slate-900 font-serif-classic leading-tight">
                        Dr. Mansurov Orifjon
                      </h2>
                      <p className="text-primary text-xs font-bold mt-0.5">
                        Vrach Stomatolog · Implantolog · Andijon
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200/80 text-[10.5px] font-extrabold text-teal-800">
                      OshDU & ATK
                    </span>
                  </div>

                  {/* Quick Contact Buttons on Card */}
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                    <a
                      href={DOCTOR_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-primary border border-teal-200/80 text-xs font-bold transition-colors whitespace-nowrap"
                      title={DOCTOR_INFO.phoneDisplay}
                    >
                      <IconPhone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{DOCTOR_INFO.phoneDisplay}</span>
                    </a>
                    <a
                      href={DOCTOR_INFO.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200/80 text-xs font-bold transition-colors"
                      title="Telegram: @dr_orifjon_1"
                    >
                      <IconTelegram className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SVG Wave Divider at Bottom of Hero ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14"
        >
          <path
            d="M0,25 C320,60 640,0 960,35 C1200,60 1360,15 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   2. 5 CORE SPECIALITIES SHOWCASE — CLINICAL ELEGANCE CARDS
   ═══════════════════════════════════════════════════════════════════ */
const SpecialitiesSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const specialtyMeta = {
    terapiya: {
      kicker: {
        uz: "Terapevtik Stomatologiya",
        ru: "Терапевтическая Стоматология",
        en: "Therapeutic Dentistry",
      },
      materialBadge: "Charisma & DenFil",
      durationText: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
      accentGradient: "from-teal-500 to-emerald-500",
    },
    ortopediya: {
      kicker: {
        uz: "Ortopedik Stomatologiya",
        ru: "Ортопедическая Стоматология",
        en: "Prosthodontics",
      },
      materialBadge: "Sirkoniy & Vinirlar",
      durationText: { uz: "3–5 kun (2 qabul)", ru: "3–5 дней (2 визита)", en: "3–5 days (2 visits)" },
      accentGradient: "from-blue-500 to-indigo-500",
    },
    implantatsiya: {
      kicker: {
        uz: "Dental Implantologiya · Flagship",
        ru: "Дентальная Имплантология · Флагман",
        en: "Dental Implantology · Flagship",
      },
      materialBadge: "MegaGen & AnyRidge",
      durationText: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
      accentGradient: "from-teal-600 via-emerald-500 to-indigo-600",
      isFlagship: true,
    },
    xirurgiya: {
      kicker: {
        uz: "Jarrohlik Stomatologiyasi",
        ru: "Хирургическая Стоматология",
        en: "Oral Surgery",
      },
      materialBadge: "Orablok & Supercain",
      durationText: { uz: "10–25 daqiqa", ru: "10–25 минут", en: "10–25 mins" },
      accentGradient: "from-rose-500 to-pink-500",
    },
    ortodontiya: {
      kicker: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
      materialBadge: "Breket Tizimlari",
      durationText: { uz: "12–18 oy", ru: "12–18 месяцев", en: "12–18 months" },
      accentGradient: "from-orange-500 to-amber-500",
    },
  };

  return (
    <section aria-labelledby="specialities-heading" className="py-8 sm:py-12 space-y-8 relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-teal-50 border border-teal-200 text-primary shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>
            {lang === "uz"
              ? "Asosiy 5 Klinik Yo'nalish"
              : lang === "ru"
              ? "5 Основных Направлений"
              : "5 Core Specialties"}
          </span>
        </span>
        <h2
          id="specialities-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif-classic tracking-tight"
        >
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {SERVICES_CATALOG.map((s, index) => {
          const meta = specialtyMeta[s.id] || {
            kicker: {
              uz: s.category?.[lang] || "Xizmat",
              ru: s.category?.[lang] || "Услуга",
              en: "Service",
            },
            materialBadge: s.techTag?.[lang] || "Sertifikatlangan",
            durationText: {
              uz: s.duration?.[lang] || "Qisqa muddat",
              ru: "Короткий срок",
              en: "Short visit",
            },
            accentGradient: "from-teal-500 to-emerald-500",
          };

          const isFlagship = meta.isFlagship;

          return (
            <article
              key={s.id}
              className={`group bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between hover-lift-glow ${
                isFlagship
                  ? "border-teal-300 ring-2 ring-primary/20 shadow-[0_12px_40px_-8px_rgba(12,110,90,0.18)]"
                  : "border-slate-200/90 shadow-[0_6px_25px_rgba(20,30,40,0.05)] hover:border-teal-300 hover:shadow-[0_16px_40px_rgba(12,110,90,0.12)]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* Visual Header / Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={s.image}
                    alt={s.title[lang]}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top gradient accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.accentGradient}`}
                  />

                  {/* Flagship ribbon badge */}
                  {isFlagship && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                        <svg className="w-3 h-3 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>Flagship</span>
                      </span>
                    </div>
                  )}

                  {/* Bottom gradient on image */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 space-y-3.5 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">
                      {meta.kicker[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                      <IconClock className="w-3 h-3 text-primary" />
                      <span>{meta.durationText[lang]}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                    {s.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {s.shortDesc[lang]}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50/70 border border-teal-200/60 text-[11px] font-bold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{meta.materialBadge}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-3">
                <Link
                  to={to(`/services/${s.id}`)}
                  className="text-xs font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
                >
                  <span>
                    {lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Details"}
                  </span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <button
                  onClick={() => onOpenBooking(s.id)}
                  className="px-4 py-2 rounded-xl bg-primary hover:bg-[#095446] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer select-none"
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
   MAIN HOME PAGE WITH CLINICAL ELEGANCE REDESIGN
   ═══════════════════════════════════════════════════════════════════ */
const Home = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const seo = PAGE_SEO.home[lang] || PAGE_SEO.home.uz;
  const homeSchema = buildHomeSchema(lang, FAQ_ITEMS);

  return (
    <div className="space-y-10 sm:space-y-14 pb-12">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={homeSchema}
      />

      {/* 1. Hero with Animated Blobs & Medical Geometry */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Clinical Ticker Marquee with clean white card */}
      <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(20,30,40,0.03)] py-1 overflow-hidden">
        <ClinicalTickerMarquee />
      </div>

      {/* 3. 5 Core Specialties with Glass & Hover Lift */}
      <SpecialitiesSection onOpenBooking={onOpenBooking} />

      {/* Wave Transition Divider */}
      <div className="relative -my-4 sm:-my-6 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-10 opacity-70"
        >
          <path
            d="M0,20 C360,0 720,40 1080,10 C1260,-5 1380,25 1440,20 L1440,40 L0,40 Z"
            fill="#F1F5F9"
          />
        </svg>
      </div>

      {/* 4. Interactive Treatment & Cost Calculator */}
      <div className="relative">
        <Interactive3DCostCalculator />
      </div>

      {/* 5. Verified Diplomas & MegaGen Certificates */}
      <div className="relative">
        <CertificatesShowcase />
      </div>

      {/* 6. Authentic Equipment & Clinical Operatory Tour */}
      <div className="relative">
        <ClinicEquipmentShowcase />
      </div>

      {/* 7. Certified Clinical Materials: Germany & South Korea */}
      <div className="relative">
        <ClinicalMaterialsShowcase onOpenBooking={onOpenBooking} />
      </div>

      {/* 8. Online Smile Assessment Wizard */}
      <div className="relative">
        <SmileAssessmentWizard />
      </div>

      {/* 9. Patient Aftercare Guides */}
      <div className="relative">
        <PatientCareGuides />
      </div>

      {/* 10. Inline Booking Section */}
      <div className="relative">
        <InlineBookingSection />
      </div>

      {/* 11. FAQ Accordion */}
      <div className="relative">
        <FaqAccordion />
      </div>

      {/* 12. Clinic Contact & Location */}
      <div className="relative">
        <ClinicLocationMap />
      </div>
    </div>
  );
};

export default Home;
