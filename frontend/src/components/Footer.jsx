import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getExperienceBadge, getExperienceText } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import {
  IconShieldCheck,
  IconAward,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconGraduationCap,
  IconClock,
} from "./MedicalIcons";

const Footer = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const clinicHours = useClinicHours(lang);

  const hoursDisplay = clinicHours.full;

  const quickLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Stomatologik Xizmatlar", ru: "Стоматологические Услуги", en: "Dental Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О враче", en: "About Doctor" } },
    { path: "/booking", label: { uz: "Onlayn Qabulga Yozilish", ru: "Онлайн Запись на Приём", en: "Book Appointment" } },
    { path: "/contact", label: { uz: "Aloqa va Manzil", ru: "Контакты и Адрес", en: "Contact & Location" } },
  ];

  const specialtyLinks = [
    { path: "/services/terapiya", label: { uz: "Terapiya va Badiiy Restavratsiya", ru: "Терапия и Реставрация", en: "Therapy & Aesthetic Restoration" } },
    { path: "/services/ortopediya", label: { uz: "Ortopediya va Sirkon Protezlash", ru: "Ортопедия и Циркониевые Коронки", en: "Orthopedics & Zirconia Crowns" } },
    { path: "/services/implantatsiya", label: { uz: "Dental Implantologiya", ru: "Дентальная Имплантация", en: "Dental Implantation" } },
    { path: "/services/xirurgiya", label: { uz: "Atravmatik Jarrohlik", ru: "Атравматичная Хирургия", en: "Atraumatic Oral Surgery" } },
    { path: "/services/ortodontiya", label: { uz: "Ortodontiya va Breket Tizimlari", ru: "Ортодонтия и Брекеты", en: "Orthodontics & Modern Braces" } },
  ];

  return (
    <footer className="relative bg-[#0A1628] text-slate-300 overflow-hidden mt-14 sm:mt-20">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-900/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-teal-800/40 to-transparent" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #0C6E5A22 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 pb-10">
        {/* Top section: Brand + big tagline */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-white/10">
          <div className="lg:max-w-sm space-y-5">
            <Link
              to={to("/")}
              aria-label="Stomatolog Orifjon bosh sahifa"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
            >
              <Logo className="h-10 sm:h-12" inverted={true} />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {lang === "uz"
                ? `Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — Andijon Tibbiyot kolleji (2001–2004) va O'sh Davlat Universiteti (2017–2022) bitiruvchisi. ${getExperienceText(
                    "uz"
                  )}. Dental implantatsiya, breketlar, sirkon karonkalar va 100% og'riqsiz davolash.`
                : lang === "ru"
                ? `Стоматолог Орифжон (Мансуров Орифбек Алимбекович) — Андижанский мед. колледж (2001–2004) и ОшГУ (2017–2022). ${getExperienceText(
                    "ru"
                  )}. Имплантация, брекеты, циркониевые коронки и 100% безболезненное лечение.`
                : `Dentist Orifjon (Mansurov Orifjon Alimbekovich) — Andijan Medical College (2001–2004) and Osh State University (2017–2022). ${getExperienceText(
                    "en"
                  )}. Dental implants, braces, zirconia crowns, and 100% painless care.`}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  icon: <IconShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
                  label:
                    lang === "uz"
                      ? "100% Steril & Og'riqsiz"
                      : lang === "ru"
                      ? "100% Стерильно"
                      : "100% Sterile & Painless",
                },
                {
                  icon: <IconGraduationCap className="w-3.5 h-3.5 text-blue-400" />,
                  label:
                    lang === "uz"
                      ? "20+ Yillik Tajriba"
                      : lang === "ru"
                      ? "20+ Лет Опыта"
                      : "20+ Years Exp.",
                },
                { icon: <IconAward className="w-3.5 h-3.5 text-primary" />, label: "MegaGen 2025" },
              ].map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/10"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Contact + Book CTA */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
            <div className="space-y-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                {lang === "uz" ? "Bog'lanish" : lang === "ru" ? "Контакты" : "Contact"}
              </p>
              <a
                href={DOCTOR_INFO.phoneHref}
                className="flex items-center gap-2.5 text-white font-bold text-sm hover:text-primary transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <IconPhone className="w-3.5 h-3.5 text-primary" />
                </span>
                {DOCTOR_INFO.phoneDisplay}
              </a>
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sky-400 hover:text-sky-300 transition-colors text-sm group"
              >
                <span className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/20 flex items-center justify-center">
                  <IconTelegram className="w-3.5 h-3.5 text-sky-400" />
                </span>
                {DOCTOR_INFO.telegramHandle}
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-pink-400 hover:text-pink-300 transition-colors text-sm group"
              >
                <span className="w-7 h-7 rounded-lg bg-pink-500/15 border border-pink-500/20 flex items-center justify-center">
                  <IconInstagram className="w-3.5 h-3.5 text-pink-400" />
                </span>
                {DOCTOR_INFO.instagramHandle}
              </a>
              <div className="flex items-start gap-2 text-slate-500 text-xs pt-1">
                <IconClock className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{hoursDisplay}</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-emerald-400 mb-3">
                {lang === "uz" ? "Sahifalar" : lang === "ru" ? "Страницы" : "Pages"}
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={to(link.path)}
                      className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-indigo-400 mb-3">
                {lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                {specialtyLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={to(link.path)}
                      className="hover:text-white transition-colors truncate block max-w-[180px] group inline-flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {DOCTOR_INFO.name}.{" "}
            {lang === "uz"
              ? "Barcha huquqlar himoyalangan."
              : lang === "ru"
              ? "Все права защищены."
              : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Telegram
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={DOCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-700">·</span>
            <a href={DOCTOR_INFO.phoneHref} className="hover:text-white transition-colors">
              Tel: {DOCTOR_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
