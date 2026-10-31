import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { SERVICES_CATALOG, resolveServiceId } from "../constants/servicesCatalog";
import { DOCTOR_INFO } from "../constants/doctor";
import { PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import { buildMedicalProcedureSchema } from "../utils/structuredData";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconPhone,
  IconSparkleStar,
} from "../components/MedicalIcons";
import { useBooking } from "../context/BookingContext";
import FaqAccordion from "../components/FaqAccordion";
import Floating3DShapes from "../components/Floating3DShapes";
import ClinicalMaterialsShowcase from "../components/ClinicalMaterialsShowcase";
import {
  HoloGoldStamp,
  DigitalCyanTag,
  BioTitaniumBadge,
  ZeroPainShield,
  OriginPill,
} from "../components/Bespoke3DStickers";

const ServiceDetail = () => {
  const { serviceId, slug } = useParams();
  const activeServiceId = serviceId || slug;
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const { openBooking } = useBooking();

  const targetId = resolveServiceId(activeServiceId);
  const service =
    SERVICES_CATALOG.find((s) => s.id === targetId) || SERVICES_CATALOG[0];

  const steps = {
    uz: [
      {
        num: "01",
        title: "Ko'rik va Raqamli Diagnostika",
        desc: "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) tish holatini diqqat bilan tekshiradi va aniq individual davolash rejasini tuzadi.",
      },
      {
        num: "02",
        title: "2 Bosqichli Og'riqsiz Anesteziya",
        desc: "Avval milk muzlatuvchi gel bilan og'riqsizlantiriladi, so'ng Yevropa anestetigi yuboriladi — bemor ignani ham sezmaydi.",
      },
      {
        num: "03",
        title: "Mikroskopik Aniqlikda Asosiy Muolaja",
        desc: "Germaniya, Janubiy Koreya va Yaponiyaning original sertifikatlangan materiallari yordamida tiklash.",
      },
      {
        num: "04",
        title: "Sifat Nazorati va Kafolat",
        desc: "Muolaja yakunida chaynash balansi tekshiriladi, sayqallanadi va rasmiy klinik kafolat beriladi.",
      },
    ],
    ru: [
      {
        num: "01",
        title: "Осмотр и Цифровая Диагностика",
        desc: "Стоматолог Орифжон (Мансуров Орифжон Алимбекович) проводит детальный осмотр и составляет прозрачный индивидуальный план лечения.",
      },
      {
        num: "02",
        title: "Двухэтапная Анестезия Без Боли",
        desc: "Десна предварительно обрабатывается гелем, после чего мягко вводится современный европейский анестетик.",
      },
      {
        num: "03",
        title: "Основной Этап Лечения / Реставрации",
        desc: "Работа выполняется с использованием сертифицированных материалов из Германии, Южной Кореи и Японии.",
      },
      {
        num: "04",
        title: "Контроль Качества и Гарантия",
        desc: "Проверка прикуса, полировка до естественного блеска эмали и выдача официальной гарантии.",
      },
    ],
    en: [
      {
        num: "01",
        title: "Consultation & Digital Diagnostics",
        desc: "Dentist Orifjon (Mansurov Orifjon Alimbekovich) performs a comprehensive clinical exam and formulates a transparent procedure plan.",
      },
      {
        num: "02",
        title: "Two-Stage Painless Anesthesia",
        desc: "Topical numbing gel is applied to the gum before gentle local anesthesia so you never feel the needle.",
      },
      {
        num: "03",
        title: "Precision Restorative Procedure",
        desc: "Treatment is performed using genuine certified materials from Germany, South Korea, and Japan.",
      },
      {
        num: "04",
        title: "Quality Verification & Warranty",
        desc: "Bite calibration, high-gloss enamel finishing, and formal clinical warranty.",
      },
    ],
  }[lang];

  const seoSuffix = {
    uz: "Stomatolog Orifjon | Vrach Stomatolog",
    ru: "Стоматолог Орифжон | Врач-Стоматолог",
    en: "Dentist Orifjon | Dental Surgeon",
  }[lang];

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar", path: "/services" },
    { name: service.title[lang] || service.title.uz, path: `/services/${service.id}` },
  ];

  const procedureSchema = buildMedicalProcedureSchema(service, lang, breadcrumbs);

  const serviceKeywords = [
    service.title[lang],
    service.category[lang],
    service.badge?.[lang],
    service.techTag?.[lang],
    ...(service.indications?.[lang] || []),
    PAGE_KEYWORDS[lang],
  ].filter(Boolean).join(", ");

  return (
    <div className="relative py-6 sm:py-10 space-y-12">
      <Seo
        title={`${service.title[lang]} — ${seoSuffix}`}
        description={`${service.shortDesc[lang]} Stomatolog Orifjon, 20+ yillik tajriba. Tel: ${DOCTOR_INFO.phoneDisplay}.`}
        keywords={serviceKeywords}
        schemaJson={procedureSchema}
      />

      {/* Dynamic 3D Floating Geometry Background */}
      <Floating3DShapes />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="relative z-10 text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2 flex-wrap">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <Link to={to("/services")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold truncate" aria-current="page">
          {service.title[lang]}
        </span>
      </nav>

      {/* Hero Service Showcase — Editorial Split with 3D Depth and Bespoke Badges */}
      <div className="relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 text-white shadow-luxury border border-amber-400/30 [transform-style:preserve-3d]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Clinical Information & CTA */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-400/30 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{service.badge?.[lang] || service.category[lang]}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-[11px] font-medium uppercase tracking-wider border border-white/15">
                {service.category[lang]}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-semibold tracking-wide border border-emerald-400/30">
                <IconShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{service.warranty[lang]}</span>
              </span>
            </div>

            <h1 className="font-serif-classic text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {service.title[lang]}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.shortDesc[lang]}
            </p>

            {/* Bespoke Sticker for Service Category */}
            <div className="pt-1">
              {service.id === "implantatsiya" && (
                <BioTitaniumBadge
                  system="Mega'Gen & AnyRidge & DXL"
                  origin={lang === "ru" ? "Германия & Корея" : lang === "en" ? "Germany & Korea" : "Germaniya & Koreya"}
                />
              )}
              {service.id === "terapiya" && (
                <div className="flex flex-wrap items-center gap-2">
                  <OriginPill flag="🇩🇪" material="Charisma" country="Germaniya" />
                  <OriginPill flag="🇰🇷" material="DenFil" country="Koreya" />
                  <ZeroPainShield
                    label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Gentle" : "100% Og'riqsiz"}
                    sublabel="Orablok / Artikain"
                  />
                </div>
              )}
              {service.id === "xirurgiya" && (
                <div className="flex flex-wrap items-center gap-2">
                  <ZeroPainShield
                    label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Painless" : "100% Og'riqsiz"}
                    sublabel="Orablok & Supercain"
                  />
                  <OriginPill flag="💉" material="Orablok" country="Yevropa Blister" />
                </div>
              )}
              {service.id === "ortopediya" && (
                <div className="flex flex-wrap items-center gap-2">
                  <DigitalCyanTag
                    tag="CAD/CAM Tsirkoniy"
                    subtag={lang === "ru" ? "Премиум Эстетика" : lang === "en" ? "Premium Aesthetics" : "Germaniya & Koreya"}
                  />
                  <OriginPill flag="👑" material="Zirconia & E.max" country="15 Yil Kafolat" />
                </div>
              )}
              {service.id === "ortodontiya" && (
                <div className="flex flex-wrap items-center gap-2">
                  <HoloGoldStamp
                    text={lang === "ru" ? "Ровные Зубы" : lang === "en" ? "Perfect Smile" : "Tekis Tishlar"}
                    subtext={lang === "ru" ? "Брекет-Системы" : lang === "en" ? "Braces Systems" : "Breket Tizimlari"}
                  />
                </div>
              )}
            </div>

            {/* Quick Metrics Badges with 3D Depth */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 text-center transition-colors">
                <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                  {lang === "uz" ? "Tizim" : lang === "ru" ? "Система" : "System"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-300 block mt-0.5 truncate">
                  {service.techTag?.[lang] || "Klinik"}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 text-center transition-colors">
                <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                  {lang === "uz" ? "Davomiyligi" : lang === "ru" ? "Время" : "Duration"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5 truncate">
                  {service.duration[lang]}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 text-center transition-colors">
                <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                  {lang === "uz" ? "Kafolat" : lang === "ru" ? "Гарантия" : "Warranty"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-0.5 truncate">
                  {service.warranty[lang]}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => openBooking(service.id)}
                className="relative overflow-hidden px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary hover:brightness-110 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-orange hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group/cta select-none"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover/cta:animate-shimmer-sweep pointer-events-none" />
                <span className="relative z-10">
                  {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться на Приём" : "Book Procedure"}
                </span>
              </button>
              <a
                href={DOCTOR_INFO.phoneHref}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-xs border border-white/15 hover:-translate-y-0.5 transition-all"
              >
                <IconPhone className="w-4 h-4 text-primary" />
                <span>{DOCTOR_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right: Dedicated High-Res Clinical Photography Showcase */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-amber-300/40 shadow-2xl [transform-style:preserve-3d]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  width={800}
                  height={600}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

                {/* Clean Top Frosted Glass Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black tracking-wide text-slate-900 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{service.badge?.[lang] || service.category[lang]}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] text-[10.5px] font-black tracking-wide border border-emerald-300/40">
                    <IconShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{service.warranty[lang]}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights & Features */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-amber-300/80 shadow-luxury space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-classic">
            {lang === "uz" ? "Muolajaning Asosiy Afzalliklari" : lang === "ru" ? "Преимущества Методики" : "Clinical Highlights"}
          </h2>
          <div className="space-y-3 pt-2">
            {service.highlights[lang].map((hl, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/50 border border-amber-200/50">
                <IconCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-classic">
              {lang === "uz" ? "Klinik Kafolat & Muddat" : lang === "ru" ? "Сроки и Гарантия" : "Timeline & Warranty"}
            </h2>
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200">
                <span className="text-xs text-slate-600 font-semibold">
                  {lang === "uz" ? "Davomiyligi:" : lang === "ru" ? "Время приёма:" : "Estimated time:"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{service.duration[lang]}</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200">
                <span className="text-xs text-slate-600 font-semibold">
                  {lang === "uz" ? "Rasmiy Kafolat:" : lang === "ru" ? "Гарантия:" : "Clinical warranty:"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700">{service.warranty[lang]}</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF9] border border-amber-200">
                <span className="text-xs text-slate-600 font-semibold">
                  {lang === "uz" ? "Shifokor:" : lang === "ru" ? "Врач:" : "Dentist:"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary">{DOCTOR_INFO.name}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => openBooking(service.id)}
            className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-luxury cursor-pointer"
          >
            {lang === "uz"
              ? "Ushbu Xizmatga Navbat Olish"
              : lang === "ru"
              ? "Записаться на эту процедуру"
              : "Book This Dental Service"}
          </button>
        </div>
      </div>

      {/* Clinical Indications Section */}
      {service.indications?.[lang] && service.indications[lang].length > 0 && (
        <section className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFDF9] border border-amber-200 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-amber-100 text-amber-900 border border-amber-300">
                <IconSparkleStar className="w-3.5 h-3.5 text-brandOrange" />
                <span>
                  {lang === "uz"
                    ? "KLINIK KO'RSATMALAR"
                    : lang === "ru"
                    ? "ПОКАЗАНИЯ К ЛЕЧЕНИЮ"
                    : "CLINICAL INDICATIONS"}
                </span>
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-serif-classic">
                {lang === "uz"
                  ? "Qachon Ushbu Muolajaga Murojaat Qilish Zarur?"
                  : lang === "ru"
                  ? "В Каких Случаях Необходима Данная Процедура?"
                  : "When Is This Dental Procedure Indicated?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {lang === "uz"
                  ? "Quyidagi holatlar tishlaringizda kuzatilsa, asoratlarning oldini olish uchun ko'rikdan o'tish tavsiya etiladi."
                  : lang === "ru"
                  ? "Если у вас наблюдаются следующие симптомы, запишитесь на своевременный осмотр во избежание осложнений."
                  : "If you experience any of the following symptoms, schedule an examination to prevent complications."}
              </p>
            </div>
            <button
              onClick={() => openBooking(service.id)}
              className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-luxury transition-all cursor-pointer shrink-0"
            >
              {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book Visit"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {service.indications[lang].map((ind, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-amber-200/80 shadow-2xs hover:border-amber-300 hover:shadow-xs transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4 Steps */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {lang === "uz" ? "MUOLAJA BOSQICHLARI" : lang === "ru" ? "ЭТАПЫ ЛЕЧЕНИЯ" : "PROCEDURE PHASES"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-classic">
            {lang === "uz" ? "Muolaja Qanday Amalga Oshiriladi?" : lang === "ru" ? "Как Проходит Лечение?" : "How the Treatment Works"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 [perspective:1000px]">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-5 rounded-3xl bg-white border border-amber-200 shadow-2xs space-y-2 hover:-translate-y-1.5 hover:shadow-md hover:border-amber-300 transition-all duration-300 [transform-style:preserve-3d]"
            >
              <span className="w-8 h-8 rounded-xl bg-primary text-white text-xs font-bold flex items-center justify-center shadow-xs">
                {st.num}
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certified Clinical Materials Showcase */}
      <div className="relative z-10">
        <ClinicalMaterialsShowcase onOpenBooking={openBooking} />
      </div>

      {/* Service-Specific FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <FaqAccordion
          items={service.faq}
          badgeText={
            lang === "uz"
              ? `${service.title[lang]} — Savol-Javob`
              : lang === "ru"
              ? `${service.title[lang]} — Вопросы и Ответы`
              : `${service.title[lang]} — FAQ`
          }
          title={
            lang === "uz"
              ? "Ushbu Muolaja Bo'yicha Eng Ko'p Beriladigan Savollar"
              : lang === "ru"
              ? "Частые Вопросы Пациентов по Этой Процедуре"
              : "Frequently Asked Questions About This Treatment"
          }
          subtitle={
            lang === "uz"
              ? "Stomatolog Orifjonning klinik tajribasidan kelib chiqqan javoblar va amaliy tavsiyalar."
              : lang === "ru"
              ? "Практические ответы и клинические рекомендации Стоматолога Орифжона."
              : "Clinical answers and expert guidance directly from Dentist Orifjon."
          }
        />
      )}

      {/* Bottom Urgent CTA Box */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-classic">
            {lang === "uz"
              ? "Savollaringiz bormi yoki tishingiz bezovta qilyaptimi?"
              : lang === "ru"
              ? "Беспокоит зубная боль или остались вопросы?"
              : "Experiencing a toothache or need advice?"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {lang === "uz"
              ? `Stomatolog Orifjon qabuliga yoziling yoki to'g'ridan-to'g'ri qo'ng'iroq qiling: ${DOCTOR_INFO.phoneDisplay}`
              : lang === "ru"
              ? `Запишитесь на приём к Стоматологу Орифжону или звоните напрямую: ${DOCTOR_INFO.phoneDisplay}`
              : `Book an appointment with Dentist Orifjon or call directly: ${DOCTOR_INFO.phoneDisplay}`}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => openBooking(service.id)}
            className="px-6 py-3 rounded-2xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-luxury cursor-pointer transition-all"
          >
            {lang === "uz" ? "Onlayn Band Qilish" : lang === "ru" ? "Записаться Онлайн" : "Book Online"}
          </button>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="px-4 py-3 rounded-2xl bg-white hover:bg-amber-50 text-slate-800 border border-amber-200 text-xs font-bold flex items-center gap-2 transition-all"
          >
            <IconPhone className="w-4 h-4 text-primary" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
