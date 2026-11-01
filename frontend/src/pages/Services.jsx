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
    { id: "terapiya", label: { uz: "🦷 Terapiya", ru: "🦷 Терапия", en: "🦷 Therapy" } },
    { id: "ortopediya", label: { uz: "👑 Ortopediya", ru: "👑 Ортопедия", en: "👑 Orthopedics" } },
    { id: "implantatsiya", label: { uz: "🔩 Implantatsiya", ru: "🔩 Имплантация", en: "🔩 Implantation" } },
    { id: "xirurgiya", label: { uz: "🛡️ Xirurgiya", ru: "🛡️ Хирургия", en: "🛡️ Surgery" } },
    { id: "ortodontiya", label: { uz: "✨ Ortodontiya", ru: "✨ Ортодонтия", en: "✨ Orthodontics" } },
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

      {/* Header Stage: Simple Classic Luxury */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-stone-50 border border-stone-200 text-slate-800 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{lang === "uz" ? "Stomatolog Orifjon · 20+ Yillik Tajriba" : lang === "ru" ? "Стоматолог Орифжон · 20+ Лет Опыта" : "Dentist Orifjon · 20+ Yrs Practice"}</span>
        </div>

        <h1 className="font-serif-classic text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
          {lang === "uz"
            ? "Stomatologik Xizmatlar Katalogi"
            : lang === "ru"
            ? "Каталог Стоматологических Услуг"
            : "Dental Services & Specialties"}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          {lang === "uz"
            ? "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) tomonidan 20+ yillik tibbiyot tajribasi, Germaniya va Janubiy Koreyaning original sertifikatlangan materiallari asosida 100% og'riqsiz muolajalar."
            : lang === "ru"
            ? "Все виды современного безболезненного лечения, протезирования, ортодонтии и имплантации у Стоматолога Орифжона с официальной клинической гарантией."
            : "All dental procedures performed by Dentist Orifjon (Mansurov Orifjon Alimbekovich) using genuine German & South Korean certified materials with official warranty."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-1 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === c.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-slate-700 border border-stone-200 hover:bg-stone-50 shadow-2xs"
            }`}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      {/* Services Grid with Clean Classic Cards */}
      <section aria-labelledby="services-catalog-heading" className="relative z-10">
        <h2 id="services-catalog-heading" className="sr-only">
          {lang === "uz" ? "Barcha Stomatologik Xizmatlar Ro'yxati" : lang === "ru" ? "Список Всех Стоматологических Услуг" : "All Dental Services Catalog"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-3xl bg-white border border-stone-200/90 shadow-[0_4px_20px_rgba(20,30,40,0.04)] hover:shadow-[0_14px_35px_rgba(20,30,40,0.08)] hover:border-amber-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Pure Photography Banner (Zero Stickers on Photo) */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img
                      src={service.image.replace(/\.webp$/, ".jpg")}
                      alt={service.title[lang]}
                      width={900}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                  </picture>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {service.category[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                      <IconClock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{service.duration[lang]}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif-classic text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc[lang]}
                  </p>

                  <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-slate-700 font-medium">
                      {service.techTag?.[lang] || service.category[lang]}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/70 text-emerald-800 font-medium">
                      ✓ {service.warranty[lang]}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                    {service.highlights[lang].slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug font-normal">{hl}</span>
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
