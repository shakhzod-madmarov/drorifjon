import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { useClinicHours } from "../lib/medinsonBooking";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import { buildContactPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import Floating3DShapes from "../components/Floating3DShapes";
import {
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconLocationPin,
} from "../components/MedicalIcons";

const Contact = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.contact[lang] || PAGE_SEO.contact.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil", path: "/contact" },
  ];
  const contactSchema = buildContactPageSchema(lang, breadcrumbs);

  return (
    <div className="relative py-4 sm:py-6 space-y-6 sm:space-y-8">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={contactSchema}
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
          {lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil"}
        </span>
      </nav>

      {/* Header: Classic Medical Presentation */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-slate-800 text-xs font-bold shadow-2xs">
          <span>{lang === "uz" ? "Bevosita Aloqa · Andijon" : lang === "ru" ? "Прямая Связь · Андижан" : "Direct Clinic Contact"}</span>
        </div>
        <h1 className="font-serif-classic text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
          {lang === "uz" ? "Aloqa va Qabulga Yozilish" : lang === "ru" ? "Контакты и Запись на Приём" : "Contact & Appointment"}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {lang === "uz"
            ? "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) qabuliga telefon, Telegram, Instagram yoki onlayn jadval orqali yozilishingiz mumkin."
            : lang === "ru"
            ? "Свяжитесь с нами по телефону, через Telegram, Instagram или запишитесь через онлайн-расписание к Стоматологу Орифжону."
            : "Connect with Dentist Orifjon (Mansurov Orifjon Alimbekovich) via phone, Telegram, Instagram, or our online appointment scheduler."}
        </p>
        <div className="pt-1">
          <Link
            to={to("/booking")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-2xs transition-colors group select-none"
          >
            <span>{lang === "uz" ? "Onlayn Jadvaldan Vaqt Tanlash" : lang === "ru" ? "Онлайн Расписание и Запись" : "Book Online via Schedule"}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* 4 Contact & Location Cards (No Email) */}
      <section aria-labelledby="contact-channels-heading" className="relative z-10 space-y-4">
        <h2 id="contact-channels-heading" className="sr-only">
          {lang === "uz" ? "Bog'lanish Kanallari va Manzil" : lang === "ru" ? "Способы Связи и Адрес" : "Contact Methods & Address"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Phone */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <IconPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === "uz" ? "Shifokor Telefoni" : lang === "ru" ? "Телефон Врача" : "Doctor's Phone"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {hours.full}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-block text-sm sm:text-base font-bold text-primary hover:underline whitespace-nowrap"
          >
            {DOCTOR_INFO.phoneDisplay}
          </a>
        </div>

        {/* Telegram */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <IconTelegram className="w-6 h-6 text-sky-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Telegram Chat
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "uz"
                  ? "Savollar va konsultatsiya uchun:"
                  : lang === "ru"
                  ? "Для вопросов и консультаций:"
                  : "For inquiries and consultations:"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm sm:text-base font-bold text-sky-600 hover:underline"
          >
            {DOCTOR_INFO.telegramHandle} ↗
          </a>
        </div>

        {/* Instagram */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
              <IconInstagram className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Instagram Profil
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "uz"
                  ? "Klinik ishlar va natijalar videosi:"
                  : lang === "ru"
                  ? "Фото и видео до/после лечения:"
                  : "Clinical cases and videos:"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm sm:text-base font-bold text-pink-600 hover:underline"
          >
            {DOCTOR_INFO.instagramHandle} ↗
          </a>
        </div>

        {/* Clinic Location Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <IconLocationPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {PRIMARY_CLINIC.name[lang]}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {PRIMARY_CLINIC.shortAddress[lang]}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold pt-1">
            <a
              href={PRIMARY_CLINIC.maps.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={PRIMARY_CLINIC.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Yandex
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Map Section */}
      <ClinicLocationMap />
    </div>
  );
};

export default Contact;
