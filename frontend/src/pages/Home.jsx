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
import { IconClock } from "../components/MedicalIcons";
import Doctor3DCard from "../components/Doctor3DCard";

/* ═══════════════════════════════════════════════════════════════════
   1. EDITORIAL HERO — STOMATOLOG ORIFJON
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badgeLocation: "Andijon sh., Muqimiy ko'chasi · 20+ yillik tajriba",
      kicker: "STOMATOLOG ORIFJON · ANDIJON",
      headlinePart1: "Tabiiy go'zallik va ",
      headlineHighlight: "100% og'riqsiz",
      headlinePart2: " zamonaviy stomatologiya",
      subtitle:
        "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi. 20 yildan ortiq tajriba, Yevropa va Koreyaning sertifikatlangan texnologiyalari hamda to'liq og'riqsiz muolajalar.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Xizmatlar bilan tanishish",
      stat1Num: "20+ Yil",
      stat1Label: "Tibbiy amaliyot",
      stat2Num: "5,000+",
      stat2Label: "Sog'lom tabassumlar",
      stat3Num: "100%",
      stat3Label: "Og'riqsiz kafolat",
    },
    ru: {
      badgeLocation: "г. Андижан, ул. Мукими · 20+ лет практики",
      kicker: "СТОМАТОЛОГ ОРИФЖОН · АНДИЖАН",
      headlinePart1: "Естественная красота и ",
      headlineHighlight: "100% без боли",
      headlinePart2: " современная стоматология",
      subtitle:
        "Стоматолог Орифжон (Мансуров Орифжон Алимбекович) — выпускник Андижанского медицинского колледжа и Ошского Государственного Университета. Более 20 лет практики, сертифицированные материалы Германии и Кореи, европейская анестезия.",
      ctaBook: "Записаться на Приём",
      ctaServices: "Каталог услуг",
      stat1Num: "20+ Лет",
      stat1Label: "Опыта в медицине",
      stat2Num: "5,000+",
      stat2Label: "Довольных пациентов",
      stat3Num: "100%",
      stat3Label: "Безболезненно",
    },
    en: {
      badgeLocation: "Andijan, Muqimiy St. · 20+ Years Practice",
      kicker: "DENTIST ORIFJON · ANDIJAN",
      headlinePart1: "Natural smile and ",
      headlineHighlight: "100% gentle",
      headlinePart2: " modern dentistry",
      subtitle:
        "Dentist Orifjon (Mansurov Orifjon Alimbekovich) — Graduate of Andijan Medical College and Osh State University. Over 20+ years of healthcare practice combining certified German and South Korean technology with gentle care.",
      ctaBook: "Book Appointment",
      ctaServices: "Explore Services",
      stat1Num: "20+ Yrs",
      stat1Label: "Healthcare practice",
      stat2Num: "5,000+",
      stat2Label: "Healthy smiles",
      stat3Num: "100%",
      stat3Label: "Painless guarantee",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-stone-200/90 shadow-[0_6px_25px_rgba(20,30,40,0.04)] mt-1.5 2xs:mt-2 sm:mt-4 p-3.5 2xs:p-5 sm:p-7 lg:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Editorial Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-left">
          {/* Eyebrow / Location Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-slate-800 text-[11.5px] font-bold shadow-2xs">
            <span>{t.badgeLocation}</span>
          </div>

          {/* Classic Headline */}
          <div className="space-y-1.5">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-primary">
              {t.kicker}
            </p>
            <h1
              id="hero-heading"
              className="font-serif-classic text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-[1.18]"
            >
              {t.headlinePart1}
              <span className="text-primary italic font-serif">
                {t.headlineHighlight}
              </span>
              <br className="hidden sm:inline" />
              {t.headlinePart2}
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
            {t.subtitle}
          </p>

          {/* Action CTAs (Just 2 clean buttons) */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 pt-1">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xs transition-all cursor-pointer select-none flex items-center justify-center gap-2"
            >
              <span>{t.ctaBook}</span>
              <span>→</span>
            </button>

            <Link
              to={to("/services")}
              className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-bold text-xs sm:text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <span>{t.ctaServices}</span>
              <span>→</span>
            </Link>
          </div>

          {/* 3 Classic Minimalist Editorial Stats */}
          <div className="grid grid-cols-3 gap-1.5 2xs:gap-2.5 pt-3.5 border-t border-stone-100 max-w-lg">
            <div className="p-2 2xs:p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="font-serif-classic text-base 2xs:text-lg sm:text-xl font-black text-slate-900">{t.stat1Num}</p>
              <p className="text-[9.5px] 2xs:text-[10.5px] font-medium text-slate-600 mt-0.5 leading-tight">{t.stat1Label}</p>
            </div>
            <div className="p-2 2xs:p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="font-serif-classic text-base 2xs:text-lg sm:text-xl font-black text-slate-900">{t.stat2Num}</p>
              <p className="text-[9.5px] 2xs:text-[10.5px] font-medium text-slate-600 mt-0.5 leading-tight">{t.stat2Label}</p>
            </div>
            <div className="p-2 2xs:p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <p className="font-serif-classic text-base 2xs:text-lg sm:text-xl font-black text-emerald-600">{t.stat3Num}</p>
              <p className="text-[9.5px] 2xs:text-[10.5px] font-medium text-slate-600 mt-0.5 leading-tight">{t.stat3Label}</p>
            </div>
          </div>
        </div>

        {/* Right Classic Portrait Card (5 cols) */}
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
      kicker: { uz: "Terapevtik Stomatologiya", ru: "Терапевтическая Стоматология", en: "Therapeutic Dentistry" },
      materialBadge: "Charisma & DenFil",
      durationText: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    },
    ortopediya: {
      kicker: { uz: "Ortopedik Stomatologiya", ru: "Ортопедическая Стоматология", en: "Prosthodontics" },
      materialBadge: "Sirkoniy & Vinirlar",
      durationText: { uz: "3–5 kun (2 qabul)", ru: "3–5 дней (2 визита)", en: "3–5 days (2 visits)" },
    },
    implantatsiya: {
      kicker: { uz: "Dental Implantologiya", ru: "Дентальная Имплантология", en: "Dental Implantology" },
      materialBadge: "Mega'Gen & AnyRidge",
      durationText: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
    },
    xirurgiya: {
      kicker: { uz: "Jarrohlik Stomatologiyasi", ru: "Хирургическая Стоматология", en: "Oral Surgery" },
      materialBadge: "Orablok & Supercain",
      durationText: { uz: "10–25 daqiqa", ru: "10–25 минут", en: "10–25 mins" },
    },
    ortodontiya: {
      kicker: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
      materialBadge: "Breket Tizimlari",
      durationText: { uz: "12–18 oy", ru: "12–18 месяцев", en: "12–18 months" },
    },
  };

  return (
    <section aria-labelledby="specialities-heading" className="py-6 sm:py-10 space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-primary">
          <span>{lang === "uz" ? "Asosiy 5 Klinik Yo'nalish" : lang === "ru" ? "5 Основных Направлений" : "5 Core Specialties"}</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_CATALOG.map((s) => {
          const meta = specialtyMeta[s.id] || {
            kicker: { uz: s.category?.[lang] || "Xizmat", ru: s.category?.[lang] || "Услуга", en: "Service" },
            materialBadge: s.techTag?.[lang] || "Sertifikatlangan",
            durationText: { uz: s.duration?.[lang] || "Qisqa muddat", ru: "Короткий срок", en: "Short visit" },
          };

          return (
            <article
              key={s.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-[0_4px_20px_rgba(20,30,40,0.04)] hover:shadow-[0_14px_35px_rgba(20,30,40,0.08)] hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Pure Crisp Studio Photography */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={s.image}
                    alt={s.title[lang]}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content Body */}
                <div className="p-4 2xs:p-5 sm:p-6 space-y-3 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                      {meta.kicker[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <IconClock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{meta.durationText[lang]}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                    {s.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {s.shortDesc[lang]}
                  </p>

                  <div className="pt-2 border-t border-stone-100 text-xs text-slate-700">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-[11px] font-medium text-slate-700">
                      <span>{meta.materialBadge}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-stone-100/80 flex items-center justify-between gap-3 mt-2">
                <Link
                  to={to(`/services/${s.id}`)}
                  className="text-xs font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
                >
                  <span>{lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Details"}</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <button
                  onClick={() => onOpenBooking(s.id)}
                  className="px-4 py-2 rounded-xl bg-primary hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-2xs transition-colors cursor-pointer select-none"
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
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-slate-800 border border-amber-200/80 shadow-2xs">
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
    <div className="space-y-8 sm:space-y-10 pb-8">
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
