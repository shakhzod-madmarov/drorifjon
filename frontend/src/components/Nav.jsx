import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { stripLangPrefix } from "../utils/language";
import {
  IconPhone,
  IconTelegram,
  IconInstagram,
  DentalToothMolar,
  DentalVeneerCrown,
  DentalImplantFixture,
  DentalSurgeryExtraction,
  DentalBracesIcon,
} from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";

const Nav = ({ topOffset = 0, onOpenBooking }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { lang, changeLanguage } = useLanguage();
  const to = useLocalizedPath();
  const a11y = getA11yLabels(lang);
  const closeDrawer = () => setShowMenu(false);
  const drawerRef = useModalA11y(showMenu, closeDrawer);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  // Close services dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setServicesDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 5 Canonical Specialties for Quick Access in Mega Flyout
  const specialties = [
    {
      id: "terapiya",
      path: "/services/terapiya",
      title: { uz: "Terapiya", ru: "Терапия", en: "Therapy" },
      desc: {
        uz: "Og'riqsiz davolash va restavratsiya (Charisma, DenFil)",
        ru: "Лечение без боли и реставрация (Charisma, DenFil)",
        en: "Painless treatment and aesthetic restoration",
      },
      icon: <DentalToothMolar className="w-4 h-4 text-primary" />,
    },
    {
      id: "ortopediya",
      path: "/services/ortopediya",
      title: { uz: "Ortopediya", ru: "Ортопедия", en: "Orthopedics" },
      desc: {
        uz: "Sirkon karonkalar, vinirlar va sifatli protezlar",
        ru: "Циркониевые коронки, виниры и протезы",
        en: "Zirconia crowns, veneers, and dentures",
      },
      icon: <DentalVeneerCrown className="w-4 h-4 text-primary" />,
    },
    {
      id: "implantatsiya",
      path: "/services/implantatsiya",
      title: { uz: "Implantatsiya", ru: "Имплантация", en: "Implantation" },
      desc: {
        uz: "Mega'Gen, AnyRidge va DXL biotitan implantlari",
        ru: "Оригинальные системы Mega'Gen, AnyRidge, DXL",
        en: "Genuine Mega'Gen, AnyRidge, DXL titanium systems",
      },
      icon: <DentalImplantFixture className="w-4 h-4 text-primary" />,
    },
    {
      id: "xirurgiya",
      path: "/services/xirurgiya",
      title: { uz: "Xirurgiya", ru: "Хирургия", en: "Oral Surgery" },
      desc: {
        uz: "Atravmatik va og'riqsiz tish olish (Orablok)",
        ru: "Атравматичное удаление без боли (Ораблок)",
        en: "Gentle atraumatic extractions under Orabloc",
      },
      icon: <DentalSurgeryExtraction className="w-4 h-4 text-primary" />,
    },
    {
      id: "ortodontiya",
      path: "/services/ortodontiya",
      title: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
      desc: {
        uz: "Metall, keramika va sapfir breketlar bilan tekislash",
        ru: "Исправление прикуса брекетами и элайнерами",
        en: "Bite correction with modern braces & aligners",
      },
      icon: <DentalBracesIcon className="w-4 h-4 text-primary" />,
    },
  ];

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    {
      path: "/services",
      label: { uz: "Xizmatlar", ru: "Услуги", en: "Services" },
      hasDropdown: true,
    },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/contact", label: { uz: "Aloqa", ru: "Контакты", en: "Contact" } },
  ];

  const isBookingActive =
    stripLangPrefix(location.pathname) === "/booking" ||
    stripLangPrefix(location.pathname) === "/qabul";

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      navigate(to("/booking"));
    }
  };

  return (
    <>
      <header
        style={{ top: `${topOffset}px` }}
        className="fixed left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
      >
        {/* ═══════════════════════════════════════════════════════════
            CLEAN FLOATING CLASSIC NAVBAR
            ═══════════════════════════════════════════════════════════ */}
        <div className="pointer-events-auto max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 mt-2 sm:mt-3">
          <div
            className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 flex items-center justify-between gap-3 px-4 sm:px-6 ${
              scrolled
                ? "py-2.5 bg-white/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(20,30,40,0.08)] border border-amber-200/90"
                : "py-3 sm:py-3.5 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(20,30,40,0.06)] border border-white/90 hover:border-amber-200/80"
            }`}
          >
            {/* Top Metallic Holo-Shine Accent Border */}
            <div className="absolute -top-[1px] inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-primary via-brandCyan to-transparent rounded-full opacity-80" />

            {/* Brand Logo */}
            <NavLink
              to={to("/")}
              aria-label={
                lang === "ru"
                  ? "Стоматолог Орифжон — На главную"
                  : lang === "en"
                  ? "Dentist Orifjon — Go to homepage"
                  : "Stomatolog Orifjon — Bosh sahifaga o'tish"
              }
              className="flex items-center shrink-0 group focus:outline-none"
            >
              <Logo className="h-8 sm:h-9" />
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav
              aria-label={a11y.mainNavigation}
              className="hidden lg:flex items-center gap-1 relative"
            >
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.path}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <NavLink
                        to={to(link.path)}
                        className={({ isActive }) =>
                          `inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                            isActive
                              ? "text-primary bg-primary/10 shadow-2xs font-bold"
                              : "text-slate-700 hover:text-primary hover:bg-amber-50/60"
                          }`
                        }
                      >
                        <span>{link.label[lang]}</span>
                        <svg
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                            servicesDropdown ? "rotate-180 text-primary" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </NavLink>

                      {/* Mega Dropdown Card for 5 Specialties */}
                      {servicesDropdown && (
                        <div
                          className="absolute top-full left-0 mt-2 w-96 sm:w-[410px] rounded-2xl bg-white/98 backdrop-blur-2xl border border-stone-200/90 shadow-[0_20px_50px_rgba(20,30,40,0.14)] p-3 space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                        >
                          <div className="px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-400 border-b border-stone-100 flex items-center justify-between">
                            <span>{lang === "uz" ? "Klinik Yo'nalishlar" : lang === "ru" ? "5 Направлений" : "5 Specialties"}</span>
                            <span className="text-primary font-bold">{lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Gentle"}</span>
                          </div>

                          {specialties.map((spec) => (
                            <NavLink
                              key={spec.id}
                              to={to(spec.path)}
                              onClick={() => setServicesDropdown(false)}
                              className="group flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-stone-50 transition-colors"
                            >
                              <span className="w-9 h-9 rounded-xl bg-amber-50/70 border border-amber-200/80 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-2xs">
                                {spec.icon}
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">
                                  {spec.title[lang]}
                                </p>
                                <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5 font-normal">
                                  {spec.desc[lang]}
                                </p>
                              </div>
                              <span className="text-xs text-stone-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                                →
                              </span>
                            </NavLink>
                          ))}

                          <div className="pt-2 border-t border-amber-100 flex items-center justify-between px-2">
                            <NavLink
                              to={to("/services")}
                              onClick={() => setServicesDropdown(false)}
                              className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"
                            >
                              <span>
                                {lang === "uz"
                                  ? "Barcha 5 asosiy xizmatni ko'rish"
                                  : lang === "ru"
                                  ? "Смотреть все 5 основных услуг"
                                  : "Explore all 5 core specialties"}
                              </span>
                              <span>→</span>
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={to(link.path)}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 shadow-2xs font-bold"
                          : "text-slate-700 hover:text-primary hover:bg-amber-50/60"
                      }`
                    }
                  >
                    {link.label[lang]}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Side Actions: Language + Phone + Book CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Segmented Glass Language Switcher */}
              <div
                role="group"
                aria-label={a11y.languageSwitcher}
                className="flex items-center bg-amber-100/60 p-0.5 rounded-xl border border-amber-300/60 shadow-inner"
              >
                {["uz", "ru", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    aria-pressed={lang === l}
                    className={`min-h-[32px] sm:min-h-[28px] px-2.5 sm:px-2 py-0.5 rounded-lg text-[11px] font-extrabold uppercase transition-all duration-200 touch-manipulation cursor-pointer ${
                      lang === l
                        ? "bg-white text-primary shadow-xs scale-102"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Direct Phone Dial (Desktop) */}
              <a
                href={DOCTOR_INFO.phoneHref}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-primary px-3 py-2 rounded-xl bg-amber-50/80 hover:bg-amber-100 border border-amber-200/80 transition-all duration-200 shadow-2xs whitespace-nowrap group"
              >
                <span className="w-5 h-5 rounded-md bg-primary text-white flex items-center justify-center shadow-xs">
                  <IconPhone className="w-3 h-3 text-white" />
                </span>
                <span className="whitespace-nowrap">{DOCTOR_INFO.phoneDisplay}</span>
              </a>

              {/* Magnetic Glowing Primary Book CTA */}
              <button
                onClick={handleBookClick}
                className={`relative overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-extrabold tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-md group select-none ${
                  isBookingActive
                    ? "bg-slate-900 text-white ring-2 ring-primary"
                    : "bg-gradient-to-r from-primary via-orange-500 to-primary hover:brightness-110 text-white shadow-[0_4px_16px_rgba(255,157,80,0.35)] hover:shadow-[0_8px_24px_rgba(255,157,80,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {/* Sweep Shimmer Effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>
                  {lang === "uz"
                    ? "Qabulga Yozilish"
                    : lang === "ru"
                    ? "Запись на Приём"
                    : "Book Visit"}
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform text-white/90">
                  →
                </span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setShowMenu(true)}
                aria-label={a11y.openMenu}
                aria-expanded={showMenu}
                aria-controls="mobile-navigation-drawer"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50/80 border border-amber-200/70 text-slate-800 hover:bg-amber-100 transition-colors cursor-pointer touch-manipulation"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE NAVIGATION DRAWER (RICH LUXURY OVERLAY)
          ═══════════════════════════════════════════════════════════ */}
      {showMenu && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={a11y.mobileNavigation}
          ref={drawerRef}
          id="mobile-navigation-drawer"
          tabIndex={-1}
          className="fixed inset-0 h-screen h-[100dvh] z-50 lg:hidden flex flex-col bg-[#FFFDF9] outline-none animate-in fade-in duration-200"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-amber-200/80 bg-white">
            <Logo className="h-8" />
            <button
              onClick={closeDrawer}
              aria-label={a11y.closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 text-slate-600 hover:bg-amber-100 transition-colors cursor-pointer touch-manipulation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Live Acceptance Status Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-transparent border border-emerald-300/60 flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-slate-900">
                  {lang === "uz" ? "Qabul Ochiq · Andijon" : lang === "ru" ? "Приём открыт · Андижан" : "Accepting Patients"}
                </p>
                <p className="text-[10px] text-slate-600 font-medium">08:30 – 18:00 (Dushanba–Shanba)</p>
              </div>
              <span className="text-xs font-black text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                100% Og'riqsiz
              </span>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={to(link.path)}
                  end={link.path === "/"}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-800 hover:bg-amber-100/60"
                    }`
                  }
                >
                  <span>{link.label[lang]}</span>
                  <span>→</span>
                </NavLink>
              ))}
            </div>

            {/* 5 Specialties Quick Links */}
            <div className="pt-2">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-2 px-1">
                {lang === "uz" ? "Asosiy Yo'nalishlar" : lang === "ru" ? "Основные Направления" : "Core Specialties"}
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {specialties.map((spec) => (
                  <NavLink
                    key={spec.id}
                    to={to(spec.path)}
                    onClick={closeDrawer}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-primary text-slate-800 text-xs font-semibold shadow-2xs group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                        {spec.icon}
                      </span>
                      <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {spec.title[lang]}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 border-t border-amber-200/70 space-y-2">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200/90 text-slate-900 font-bold text-xs hover:bg-amber-100 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center">
                  <IconPhone className="w-4 h-4 text-white" />
                </span>
                <span>{DOCTOR_INFO.phoneDisplay} (To'g'ridan-to'g'ri qo'ng'iroq)</span>
              </a>

              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 border border-sky-300 text-sky-950 font-bold text-xs"
              >
                <span className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                  <IconTelegram className="w-4 h-4 text-white" />
                </span>
                <span>Telegram: @dr_orifjon_1</span>
              </a>

              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 border border-pink-300 text-pink-950 font-bold text-xs"
              >
                <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                  <IconInstagram className="w-4 h-4 text-white" />
                </span>
                <span>Instagram: @dr_orifjon</span>
              </a>
            </div>
          </div>

          {/* Drawer Footer Book Button */}
          <div className="p-4 border-t border-amber-200/80 bg-white">
            <button
              onClick={() => {
                closeDrawer();
                handleBookClick();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:brightness-110 text-white text-center font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <span>
                {lang === "uz"
                  ? "Qabulga Yozilish (Onlayn)"
                  : lang === "ru"
                  ? "Записаться на Приём"
                  : "Book Appointment"}
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
