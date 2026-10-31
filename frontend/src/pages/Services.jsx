import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getServicesTag } from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import Seo from "../components/Seo";
import { buildServicesCatalogSchema } from "../utils/structuredData";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import ClinicalMaterialsShowcase from "../components/ClinicalMaterialsShowcase";
import PatientCareGuides from "../components/PatientCareGuides";
import Floating3DShapes from "../components/Floating3DShapes";
import ClinicalTickerMarquee from "../components/ClinicalTickerMarquee";
import {
  HoloGoldStamp,
  DigitalCyanTag,
  BioTitaniumBadge,
  ZeroPainShield,
  OriginPill,
} from "../components/Bespoke3DStickers";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconSparkleStar,
} from "../components/MedicalIcons";

const Services = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.services[lang] || PAGE_SEO.services.uz;

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: { uz: "Barcha Yo'nalishlar", ru: "Все Направления", en: "All Specialties" } },
    { id: "terapiya", label: { uz: "1. Terapiya", ru: "1. Терапия", en: "1. Therapy" } },
    { id: "ortopediya", label: { uz: "2. Ortopediya", ru: "2. Ортопедия", en: "2. Orthopedics" } },
    { id: "implantatsiya", label: { uz: "3. Implantatsiya", ru: "3. Имплантация", en: "3. Implantation" } },
    { id: "xirurgiya", label: { uz: "4. Xirurgiya", ru: "4. Хирургия", en: "4. Surgery" } },
    { id: "ortodontiya", label: { uz: "5. Ortodontiya", ru: "5. Ортодонтия", en: "5. Orthodontics" } },
  ];

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    if (activeCategory === "all") return true;
    return s.id === activeCategory;
  });

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar", path: "/services" },
  ];
  const catalogSchema = buildServicesCatalogSchema(SERVICES_CATALOG, lang, breadcrumbs);

  return (
    <div className="relative py-6 sm:py-10 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={catalogSchema}
      />

      {/* Dynamic 3D Floating Geometry Background */}
      <Floating3DShapes />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="relative z-10 text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </span>
      </nav>

      {/* Header Stage with 3D Holographic Badges */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/25 shadow-2xs">
            <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>{getServicesTag(lang)}</span>
          </span>
          <ZeroPainShield
            label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Pain-Free" : "100% Og'riqsiz"}
            sublabel="Orablok & Supercain"
          />
        </div>

        <h1 className="font-serif-classic text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          {lang === "uz" ? "Stomatologik Xizmatlar " : lang === "ru" ? "Каталог Стоматологических " : "Dental Services & "}
          <span className="bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            {lang === "uz" ? "Katalogi & Yo'nalishlari" : lang === "ru" ? "Услуг и Направлений" : "Specialties Catalog"}
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
          {lang === "uz"
            ? "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) tomonidan 20+ yillik tajriba va Germaniya hamda Koreyaning original sertifikatlangan materiallari asosida 100% og'riqsiz muolajalar."
            : lang === "ru"
            ? "Все виды современного безболезненного лечения, протезирования, ортодонтии и имплантации у Стоматолога Орифжона с официальной гарантией."
            : "All dental procedures performed by Dentist Orifjon (Mansurov Orifjon Alimbekovich) using genuine German & South Korean certified materials."}
        </p>

        {/* Certified Materials Quick Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <OriginPill flag="🇩🇪" material="Charisma" country="Germaniya" />
          <OriginPill flag="🇰🇷" material="DenFil" country="Koreya" />
          <OriginPill flag="💉" material="Orablok" country="Yevropa" />
          <OriginPill flag="🔩" material="Mega'Gen & AnyRidge & DXL" country="Germaniya/Koreya" />
        </div>
      </div>

      {/* Infinite 3D Ticker Marquee */}
      <div className="relative z-10 -mx-4 sm:mx-0">
        <ClinicalTickerMarquee />
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-1 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === c.id
                ? "bg-gradient-to-r from-primary via-orange-500 to-primary text-white shadow-md scale-105"
                : "bg-white/90 backdrop-blur-xs text-slate-700 border border-amber-200/90 hover:bg-amber-50 hover:border-primary/40 shadow-xs"
            }`}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      {/* Services Grid with 3D Perspective Elevation */}
      <section aria-labelledby="services-catalog-heading" className="relative z-10">
        <h2 id="services-catalog-heading" className="sr-only">
          {lang === "uz" ? "Barcha Stomatologik Xizmatlar Ro'yxati" : lang === "ru" ? "Список Всех Стоматологических Услуг" : "All Dental Services Catalog"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 [perspective:1200px]">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className={`group relative rounded-3xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary flex flex-col justify-between overflow-hidden [transform-style:preserve-3d] ${service.badgeTheme?.accentGlow || ""}`}
            >
              <div>
                {/* Photo Banner with Zoom Depth & Bespoke Clinical Stickers */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100 [transform-style:preserve-3d]">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img
                      src={service.image.replace(/\.webp$/, ".jpg")}
                      alt={service.title[lang]}
                      width={900}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  {/* Visual Depth Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-black/15 pointer-events-none" />

                  {/* Top Bespoke Frosted Glass Stickers */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black tracking-wide text-slate-900 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>{service.badge?.[lang] || service.category[lang]}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] text-[10.5px] font-black tracking-wide border border-emerald-300/40">
                      <IconShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{service.warranty[lang]}</span>
                    </span>
                  </div>

                  {/* Dynamic Category Sticker Overlay */}
                  <div className="absolute bottom-3 left-4 z-10 pointer-events-none">
                    {service.id === "implantatsiya" && (
                      <BioTitaniumBadge
                        system="Mega'Gen & AnyRidge & DXL"
                        origin={lang === "ru" ? "Германия & Корея" : lang === "en" ? "Germany & Korea" : "Germaniya & Koreya"}
                      />
                    )}
                    {service.id === "terapiya" && (
                      <div className="flex items-center gap-1.5">
                        <OriginPill flag="🇩🇪" material="Charisma" country="Germaniya" />
                        <OriginPill flag="🇰🇷" material="DenFil" country="Koreya" />
                      </div>
                    )}
                    {service.id === "xirurgiya" && (
                      <ZeroPainShield
                        label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "Gentle Care" : "100% Og'riqsiz"}
                        sublabel="Orablok / Supercain"
                      />
                    )}
                    {service.id === "ortopediya" && (
                      <DigitalCyanTag
                        tag="CAD/CAM Tsirkoniy"
                        subtag={lang === "ru" ? "Премиум Эстетика" : lang === "en" ? "Premium Aesthetics" : "Yuqori Aniqlik"}
                      />
                    )}
                    {service.id === "ortodontiya" && (
                      <HoloGoldStamp
                        text={lang === "ru" ? "Ровные Зубы" : lang === "en" ? "Aligned Teeth" : "Tekis Tishlar"}
                        subtext={lang === "ru" ? "Брекеты" : lang === "en" ? "Braces" : "Breketlar"}
                      />
                    )}
                  </div>
                </div>

                {/* Floating Medical Icon Disc on Image Border & Refined Clinical Pill */}
                <div className="px-6 -mt-6 relative z-20 flex justify-between items-end">
                  <span className="w-14 h-14 rounded-2xl bg-white shadow-xl border-2 border-amber-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 px-3.5 py-1 rounded-full shadow-2xs mb-1">
                    {service.featurePill?.[lang] || (lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Gentle")}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 pt-3 space-y-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
                      {service.category[lang]}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-serif-classic text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {service.title[lang]}
                    </h3>
                    {/* Clean treatment meta row: duration & origin */}
                    <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold pt-1.5">
                      <span className="inline-flex items-center gap-1.5 text-slate-700">
                        <IconClock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{service.duration[lang]}</span>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1.5 text-slate-700 truncate">
                        <IconSparkleStar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{service.techTag?.[lang] || service.category[lang]}</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-amber-100">
                    {service.highlights[lang].map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <IconCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons with Shimmer Motion */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-amber-100/70 mt-2">
                <Link
                  to={to(`/services/${service.id}`)}
                  className="text-xs font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 group/btn"
                >
                  <span>{lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Full details"}</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer hover:shadow-orange hover:-translate-y-0.5 transition-all group/cta select-none"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover/cta:animate-shimmer-sweep pointer-events-none" />
                  <span className="relative z-10">
                    {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book"}
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Cost Calculator */}
      <Interactive3DCostCalculator />

      {/* Smile Assessment Wizard */}
      <SmileAssessmentWizard />

      {/* Certified Clinical Materials: Germany & South Korea */}
      <ClinicalMaterialsShowcase onOpenBooking={onOpenBooking} />

      {/* Patient Care Guides */}
      <PatientCareGuides />
    </div>
  );
};

export default Services;
