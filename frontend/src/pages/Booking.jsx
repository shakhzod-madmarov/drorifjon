import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import Floating3DShapes from "../components/Floating3DShapes";
import { ZeroPainShield, OriginPill } from "../components/Bespoke3DStickers";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import { buildBookingPageSchema } from "../utils/structuredData";
import { PAGE_SEO } from "../constants/seo";
import {
  IconPhone,
  IconShieldCheck,
  IconGraduationCap,
} from "../components/MedicalIcons";

const Booking = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const years = getYearsOfExperience();
  const seo = PAGE_SEO.booking[lang] || PAGE_SEO.booking.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish", path: "/booking" },
  ];
  const bookingSchema = buildBookingPageSchema(lang, breadcrumbs);

  return (
    <div className="relative py-6 sm:py-10 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={bookingSchema}
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
          {lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish"}
        </span>
      </nav>

      {/* Doctor Summary Banner */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wide border border-primary/25 shadow-2xs">
              {DOCTOR_INFO.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
              {years} {lang === "uz" ? "Yillik Tajriba" : lang === "ru" ? "Лет Опыта" : "Years Experience"}
            </span>
            <ZeroPainShield
              label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Gentle" : "100% Og'riqsiz"}
              sublabel="Orablok & Supercain"
            />
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-classic leading-snug">
            {lang === "uz"
              ? "Stomatolog Orifjon Qabuliga Onlayn Yozilish"
              : lang === "ru"
              ? "Онлайн Запись на Приём к Стоматологу Орифжону"
              : "Online Appointment with Dentist Orifjon"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Andijon Tibbiyot kolleji (2001–2004) va O'sh Davlat Universiteti (2017–2022) bitiruvchisi. Dental implantlar, breketlar, sirkon karonkalar, vinirlar va 100% og'riqsiz davolash."
              : lang === "ru"
              ? "Выпускник Андижанского медицинского колледжа (2001–2004) и Ошского Государственного Университета (2017–2022). Запишитесь на удобный день и время без очереди."
              : "Graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Book your appointment online without waiting in line."}
          </p>

          {/* Certified Materials Quick Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <OriginPill flag="🇩🇪" material="Charisma" country="Germaniya" />
            <OriginPill flag="🇰🇷" material="DenFil" country="Koreya" />
            <OriginPill flag="💉" material="Orablok" country="Yevropa Blister" />
            <OriginPill flag="🔩" material="Mega'Gen & AnyRidge & DXL" country="Germaniya/Koreya" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
            <span className="flex items-center gap-1.5">
              <IconGraduationCap className="w-4 h-4 text-primary" />
              <span>
                {lang === "ru"
                  ? "Андижанский мед. колледж (2001-2004) & ОшГУ (2017-2022)"
                  : lang === "en"
                  ? "Andijan Medical College (2001-2004) & Osh State Univ (2017-2022)"
                  : "Andijon Tibbiyot kolleji (2001-2004) & O'shDU (2017-2022)"}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <IconShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>
                {lang === "uz"
                  ? "100% Sterillik & Kafolat"
                  : lang === "ru"
                  ? "100% Стерильность и Гарантия"
                  : "100% Sterile & Guaranteed"}
              </span>
            </span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-2 shrink-0 text-center sm:text-left">
          <p className="font-bold text-slate-900">{hours.full}</p>
          <p className="text-slate-500">{hours.sunday}</p>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline pt-1 text-sm"
          >
            <IconPhone className="w-4 h-4 text-primary" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Interactive Booking Section */}
      <div className="relative z-10">
        <InlineBookingSection />
      </div>
    </div>
  );
};

export default Booking;