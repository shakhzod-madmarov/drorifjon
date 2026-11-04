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
      {/* ═══════════════════════════════════════════════════════════
          MODERN FULL-WIDTH STICKY HEADER
          ═══════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-[0_4px_20px_rgba(20,30,40,0.06)]"
            : "bg-white/95 backdrop-blur-md border-b border-stone-200/70 shadow-2xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 2xs:px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <NavLink
            to={to("/")}
            aria-label={
              lang === "ru"
                ? "Eco Denta — Стоматолог Орифжон (На главную)"
                : lang === "en"
                ? "Eco Denta — Dentist Orifjon (Homepage)"
                : "Eco Denta — Stomatolog Orifjon (Bosh sahifa)"
            }
            className="flex items-center shrink group focus:outline-none min-w-0"
          >
            <Logo className="h-7.5 2xs:h-8.5 sm:h-10" />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label={a11y.mainNavigation}
            className="hidden lg:flex items-center gap-1 xl:gap-2 relative"
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
                        `inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13.5px] font-semibold transition-colors duration-150 ${
                          isActive
                            ? "text-primary font-bold bg-amber-50/80"
                            : "text-slate-700 hover:text-primary hover:bg-stone-50"
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
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>

                    {/* Mega Dropdown Card for 5 Specialties (100% Solid Opaque White Background) */}
                    {servicesDropdown && (
                      <div
                        className="absolute top-full left-0 mt-2 w-96 sm:w-[420px] rounded-2xl bg-white border border-stone-200 shadow-[0_20px_50px_rgba(20,30,40,0.18)] p-3 space-y-1.5 z-[100] animate-in fade-in slide-in-from-top-1 duration-150"
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
                            className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors"
                          >
                            <span className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-2xs">
                              {spec.icon}
                            </span>
                            <div className="min-w-0 flex-1 text-left">
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

                        <div className="pt-2 border-t border-stone-100 flex items-center justify-between px-2">
                          <NavLink
                            to={to("/services")}
                            onClick={() => setServicesDropdown(false)}
                            className="text-[11.5px] font-bold text-primary hover:underline flex items-center gap-1"
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
                    `px-3.5 py-2 rounded-xl text-[13.5px] font-semibold transition-colors duration-150 ${
                      isActive
                        ? "text-primary font-bold bg-amber-50/80"
                        : "text-slate-700 hover:text-primary hover:bg-stone-50"
                    }`
                  }
                >
                  {link.label[lang]}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Side Actions: Language + Phone + Book CTA */}
          <div className="flex items-center gap-1.5 2xs:gap-2 sm:gap-3 shrink-0">
            {/* Segmented Minimalist Language Switcher */}
            <div
              role="group"
              aria-label={a11y.languageSwitcher}
              className="hidden sm:flex items-center bg-stone-100 p-0.5 rounded-xl border border-stone-200"
            >
              {["uz", "ru", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => changeLanguage(l)}
                  aria-pressed={lang === l}
                  className={`min-h-[28px] px-2.5 py-0.5 rounded-lg text-[11px] font-bold uppercase transition-all duration-150 cursor-pointer ${
                    lang === l
                      ? "bg-white text-primary shadow-2xs font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Mobile Quick Cycle Language Button */}
            <button
              onClick={() => {
                const next = lang === "uz" ? "ru" : lang === "ru" ? "en" : "uz";
                changeLanguage(next);
              }}
              aria-label={
                lang === "uz"
                  ? "Tilni almashtirish (Ruscha)"
                  : lang === "ru"
                  ? "Сменить язык (English)"
                  : "Switch language (O'zbek)"
              }
              title={
                lang === "uz"
                  ? "Hozir: O'zbekcha (O'zgartirish uchun bosing)"
                  : lang === "ru"
                  ? "Сейчас: Русский (Нажмите для смены)"
                  : "Active: English (Tap to switch)"
              }
              className="sm:hidden inline-flex items-center justify-center gap-1 min-h-[34px] px-2.5 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-slate-800 text-[11px] font-black uppercase transition-colors cursor-pointer active:scale-95"
            >
              <span className="text-[11px] leading-none">🌐</span>
              <span className="font-black text-primary leading-none">{lang.toUpperCase()}</span>
            </button>

            {/* Direct Phone Dial (Desktop) */}
            <a
              href={DOCTOR_INFO.phoneHref}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-primary px-3 py-2 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-200 transition-colors whitespace-nowrap group"
            >
              <span className="w-5 h-5 rounded-md bg-primary text-white flex items-center justify-center shadow-xs">
                <IconPhone className="w-3 h-3 text-white" />
              </span>
              <span className="whitespace-nowrap">{DOCTOR_INFO.phoneDisplay}</span>
            </a>

            {/* Primary Appointment Booking CTA */}
            <button
              onClick={handleBookClick}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer shadow-sm group select-none whitespace-nowrap ${
                isBookingActive
                  ? "bg-slate-900 text-white ring-2 ring-primary"
                  : "bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-[0_4px_14px_rgba(255,157,80,0.3)] hover:shadow-[0_6px_18px_rgba(255,157,80,0.45)] active:scale-98"
              }`}
            >
              <span className="hidden sm:inline">
                {lang === "uz"
                  ? "Qabulga Yozilish"
                  : lang === "ru"
                  ? "Запись на Приём"
                  : "Book Visit"}
              </span>
              <span className="sm:hidden">
                {lang === "uz"
                  ? "Qabul"
                  : lang === "ru"
                  ? "Запись"
                  : "Book"}
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
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-slate-800 transition-colors cursor-pointer active:scale-95 shrink-0"
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
          <div className="flex items-center justify-between p-3.5 2xs:p-4 border-b border-amber-200/80 bg-white">
            <Logo className="h-7.5 2xs:h-8" />
            <button
              onClick={closeDrawer}
              aria-label={a11y.closeMenu}
              className="w-9 h-9 2xs:w-10 2xs:h-10 flex items-center justify-center rounded-xl bg-amber-50 text-slate-700 hover:bg-amber-100 transition-colors cursor-pointer touch-manipulation active:scale-95"
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
          <div className="flex-1 overflow-y-auto p-3.5 2xs:p-4 space-y-3.5">
            {/* Prominent 3-Language Selector Card */}
            <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {lang === "uz" ? "Tilni tanlang" : lang === "ru" ? "Выберите язык" : "Select language"}
                </span>
                <span className="text-[10px] font-bold text-primary">
                  🌐 3 Tilda / На 3 языках
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 bg-amber-50/70 p-1 rounded-xl border border-amber-200/60">
                {[
                  { code: "uz", name: "O'zbekcha", flag: "🇺🇿" },
                  { code: "ru", name: "Русский", flag: "🇷🇺" },
                  { code: "en", name: "English", flag: "🇬🇧" },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all touch-manipulation flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                      lang === item.code
                        ? "bg-white text-primary shadow-xs border border-amber-300 font-black scale-102"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-sm leading-none">{item.flag}</span>
                    <span className="text-[11px] leading-tight">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Acceptance Status Card */}
            <div className="p-3 2xs:p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-transparent border border-emerald-300/60 flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-black text-slate-900">
                  {lang === "uz" ? "Qabul Ochiq · Andijon" : lang === "ru" ? "Приём открыт · Андижан" : "Accepting Patients"}
                </p>
                <p className="text-[10.5px] text-slate-600 font-medium">08:30 – 18:30 (Dushanba–Shanba)</p>
              </div>
              <span className="text-[10.5px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200 shrink-0 shadow-2xs">
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
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
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
            <div className="pt-1">
              <p className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400 mb-2 px-1">
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
                      <span className="font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
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
                className="flex items-center gap-2.5 p-2.5 2xs:p-3 rounded-xl bg-amber-50 border border-amber-200/90 text-slate-900 font-bold text-xs hover:bg-amber-100 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                  <IconPhone className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="truncate">{DOCTOR_INFO.phoneDisplay} · To'g'ridan-to'g'ri qo'ng'iroq</span>
              </a>

              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 2xs:p-3 rounded-xl bg-sky-50 border border-sky-300 text-sky-950 font-bold text-xs hover:bg-sky-100 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0">
                  <IconTelegram className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="truncate">Telegram: @dr_orifjon_1</span>
              </a>

              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 2xs:p-3 rounded-xl bg-pink-50 border border-pink-300 text-pink-950 font-bold text-xs hover:bg-pink-100 transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <IconInstagram className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="truncate">Instagram: @dr_orifjon</span>
              </a>
            </div>
          </div>

          {/* Drawer Footer Book Button (Sticky Bottom with Safe-Area Inset) */}
          <div className="p-3 2xs:p-4 border-t border-amber-200/80 bg-white pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
            <button
              onClick={() => {
                closeDrawer();
                handleBookClick();
              }}
              className="w-full py-3 2xs:py-3.5 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:brightness-110 text-white text-center font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer touch-manipulation active:scale-98"
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
