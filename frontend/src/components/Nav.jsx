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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

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

  const specialties = [
    {
      id: "terapiya",
      path: "/services/terapiya",
      icon: <DentalToothMolar className="w-4 h-4" />,
      title: { uz: "Terapiya", ru: "Терапия", en: "Therapy" },
      desc: {
        uz: "Og'riqsiz davolash va restavratsiya",
        ru: "Безболезненное лечение и реставрация",
        en: "Painless treatment & restoration",
      },
      color: "from-teal-500 to-emerald-500",
    },
    {
      id: "ortopediya",
      path: "/services/ortopediya",
      icon: <DentalVeneerCrown className="w-4 h-4" />,
      title: { uz: "Ortopediya", ru: "Ортопедия", en: "Orthopedics" },
      desc: {
        uz: "Sirkon karonkalar, vinirlar va protezlar",
        ru: "Коронки, виниры и протезы",
        en: "Zirconia crowns, veneers & dentures",
      },
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "implantatsiya",
      path: "/services/implantatsiya",
      icon: <DentalImplantFixture className="w-4 h-4" />,
      title: { uz: "Implantatsiya", ru: "Имплантация", en: "Implantation" },
      desc: {
        uz: "MegaGen, AnyRidge va DXL biotitan implantlari",
        ru: "Импланты MegaGen, AnyRidge, DXL",
        en: "MegaGen, AnyRidge, DXL titanium",
      },
      color: "from-violet-500 to-purple-500",
    },
    {
      id: "xirurgiya",
      path: "/services/xirurgiya",
      icon: <DentalSurgeryExtraction className="w-4 h-4" />,
      title: { uz: "Xirurgiya", ru: "Хирургия", en: "Oral Surgery" },
      desc: {
        uz: "Atravmatik va og'riqsiz tish olish",
        ru: "Атравматическое удаление зубов",
        en: "Gentle atraumatic extractions",
      },
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "ortodontiya",
      path: "/services/ortodontiya",
      icon: <DentalBracesIcon className="w-4 h-4" />,
      title: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
      desc: {
        uz: "Metall, keramika va sapfir breketlar",
        ru: "Металлические, керамические брекеты",
        en: "Modern braces & aligners",
      },
      color: "from-orange-500 to-amber-500",
    },
  ];

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О враче", en: "About Doctor" } },
    { path: "/contact", label: { uz: "Aloqa", ru: "Контакты", en: "Contact" } },
  ];

  const handleBookClick = () => {
    closeDrawer();
    if (onOpenBooking) onOpenBooking();
    else navigate(to("/booking"));
  };

  const currentBase = stripLangPrefix(location.pathname);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_30px_-4px_rgba(12,110,90,0.12)] border-b border-teal-100/80"
            : "bg-white/80 backdrop-blur-lg border-b border-slate-100/80 shadow-2xs"
        }`}
      >
        {/* Animated top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-3 2xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <NavLink
              to={to("/")}
              aria-label="Stomatolog Orifjon bosh sahifa"
              className="shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
            >
              <Logo className="h-8 sm:h-9" />
            </NavLink>

            {/* Desktop Nav Links */}
            <nav aria-label={a11y.mainNav} className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 1).map((link) => (
                <NavLink
                  key={link.path}
                  to={to(link.path)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[lang]}
                      <span
                        className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Services Mega Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  onClick={() => setServicesDropdown((v) => !v)}
                  aria-expanded={servicesDropdown}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    servicesDropdown || currentBase.startsWith("/services")
                      ? "text-primary bg-teal-50/80 font-bold"
                      : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                  }`}
                >
                  <span>{lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesDropdown ? "rotate-180 text-primary" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                {servicesDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px] animate-fadeInScale z-50">
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(12,110,90,0.18)] border border-slate-100 overflow-hidden">
                      {/* Header */}
                      <div className="px-5 py-3.5 bg-gradient-to-r from-teal-50 via-emerald-50/40 to-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <p className="text-[11px] font-black uppercase tracking-widest text-primary">
                          {lang === "uz"
                            ? "Klinik Yo'nalishlar — 100% Og'riqsiz"
                            : lang === "ru"
                            ? "Направления — 100% Безболезненно"
                            : "Clinical Specialties — 100% Painless"}
                        </p>
                        <span className="text-[10px] font-bold text-slate-400">Andijon · Eco Denta</span>
                      </div>
                      {/* Grid */}
                      <div className="p-3 grid grid-cols-1 gap-1.5">
                        {specialties.map((spec) => (
                          <NavLink
                            key={spec.id}
                            to={to(spec.path)}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-teal-50/60 transition-all duration-200 group"
                          >
                            <span
                              className={`w-9 h-9 rounded-xl bg-gradient-to-br ${spec.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}
                            >
                              {spec.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                                {spec.title[lang]}
                              </p>
                              <p className="text-[11px] text-slate-500 truncate">{spec.desc[lang]}</p>
                            </div>
                            <svg
                              className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </NavLink>
                        ))}
                        <NavLink
                          to={to("/services")}
                          onClick={() => setServicesDropdown(false)}
                          className="mt-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-primary/5 hover:bg-primary/10 text-primary text-xs font-bold transition-colors border border-primary/15"
                        >
                          {lang === "uz"
                            ? "Barcha 5 asosiy xizmatni ko'rish →"
                            : lang === "ru"
                            ? "Смотреть все услуги →"
                            : "View all services →"}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={to(link.path)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[lang]}
                      <span
                        className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side: Lang + Phone + CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Switcher - pill style */}
              <div className="flex items-center bg-slate-100/90 rounded-xl p-0.5 text-[11px] font-bold border border-slate-200/60">
                {["uz", "ru", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      lang === l
                        ? "bg-white text-primary shadow-sm font-black"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Phone — compact */}
              <a
                href={DOCTOR_INFO.phoneHref}
                className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:border-primary hover:text-primary hover:bg-teal-50/50 transition-all duration-200"
              >
                <span className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconPhone className="w-3 h-3 text-primary" />
                </span>
                {DOCTOR_INFO.phoneDisplay}
              </a>

              {/* CTA Book Button */}
              <button
                onClick={handleBookClick}
                className="relative overflow-hidden px-4.5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_4px_16px_-4px_rgba(12,110,90,0.5)] hover:shadow-[0_6px_24px_-4px_rgba(12,110,90,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>
                    {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book Now"}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>
            </div>

            {/* Mobile: Lang + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-[10px] font-bold border border-slate-200/50">
                {["uz", "ru", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`px-2 py-1 rounded-md uppercase tracking-wider transition-all ${
                      lang === l ? "bg-white text-primary shadow-sm font-black" : "text-slate-400"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowMenu(true)}
                aria-label={a11y.openMenu}
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-teal-50 border border-slate-200/60 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <span className="w-5 h-0.5 bg-slate-700 rounded-full" />
                <span className="w-4 h-0.5 bg-primary rounded-full" />
                <span className="w-5 h-0.5 bg-slate-700 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {showMenu && (
        <div
          className="fixed inset-0 z-[200] flex"
          role="dialog"
          aria-modal="true"
          aria-label={a11y.mobileNavigation}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeDrawer} />

          {/* Panel — slides in from right */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            className="relative ml-auto w-[min(88vw,340px)] h-full bg-white flex flex-col shadow-2xl animate-fadeInLeft focus:outline-none"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 via-emerald-50/30 to-white">
              <Logo className="h-7.5" />
              <button
                onClick={closeDrawer}
                aria-label={a11y.closeMenu}
                className="w-9 h-9 rounded-xl bg-white border border-slate-200/70 text-slate-600 hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Nav Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={to(link.path)}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-sm font-bold"
                          : "text-slate-700 hover:bg-teal-50 hover:text-primary"
                      }`
                    }
                  >
                    <span>{link.label[lang]}</span>
                    <svg
                      className="w-4 h-4 opacity-40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                ))}
              </div>

              {/* Specialties */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">
                  {lang === "uz"
                    ? "Asosiy Yo'nalishlar"
                    : lang === "ru"
                    ? "Направления"
                    : "Specialties"}
                </p>
                <div className="space-y-1.5">
                  {specialties.map((spec) => (
                    <NavLink
                      key={spec.id}
                      to={to(spec.path)}
                      onClick={closeDrawer}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 hover:border-primary/30 border border-slate-100 transition-all group"
                    >
                      <span
                        className={`w-8 h-8 rounded-xl bg-gradient-to-br ${spec.color} text-white flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        {spec.icon}
                      </span>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {spec.title[lang]}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-slate-300 ml-auto group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-teal-50 border border-teal-200/60 group"
                >
                  <span className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <IconPhone className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-slate-800">{DOCTOR_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={DOCTOR_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-sky-50 border border-sky-200/60"
                >
                  <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <IconTelegram className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-slate-800">@dr_orifjon_1</span>
                </a>
                <a
                  href={DOCTOR_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-pink-50 border border-pink-200/60"
                >
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <IconInstagram className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-slate-800">@dr_orifjon</span>
                </a>
              </div>
            </div>

            {/* Sticky Book Button */}
            <div className="p-4 border-t border-slate-100 bg-white pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
              <button
                onClick={handleBookClick}
                className="w-full py-3.5 rounded-2xl bg-primary hover:bg-[#095446] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                {lang === "uz"
                  ? "Qabulga Yozilish →"
                  : lang === "ru"
                  ? "Записаться на приём →"
                  : "Book Appointment →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
