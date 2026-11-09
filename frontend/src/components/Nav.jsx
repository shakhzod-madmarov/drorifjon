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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileLangRef = useRef(null);
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
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target)) {
        setMobileLangOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setServicesDropdown(false);
        setMobileLangOpen(false);
      }
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

  const handleBookClick = () => {
    closeDrawer();
    if (onOpenBooking) onOpenBooking();
    else navigate(to("/booking"));
  };

  const currentBase = stripLangPrefix(location.pathname);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(12,110,90,0.12)] border-b border-teal-100/80"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100/90 shadow-2xs"
        }`}
      >
        {/* Subtle top accent gradient */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-3 xl:gap-6">
            {/* Logo — compact & responsive */}
            <NavLink
              to={to("/")}
              aria-label="Stomatolog Orifjon bosh sahifa"
              className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
            >
              <Logo className="h-8 sm:h-9" hideSubtitleOnMobile={true} />
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav aria-label={a11y.mainNav} className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {/* Home */}
              <NavLink
                to={to("/")}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{lang === "uz" ? "Bosh Sahifa" : lang === "ru" ? "Главная" : "Home"}</span>
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>

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
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
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

                {/* Mega Dropdown Panel */}
                {servicesDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[500px] animate-fadeInScale z-50">
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(12,110,90,0.18)] border border-slate-100 overflow-hidden">
                      <div className="px-5 py-3.5 bg-gradient-to-r from-teal-50 via-emerald-50/40 to-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <p className="text-[11px] font-black uppercase tracking-widest text-primary">
                          {lang === "uz"
                            ? "Klinik Yo'nalishlar — 100% Og'riqsiz"
                            : lang === "ru"
                            ? "Направления — 100% Безболезненно"
                            : "Clinical Specialties — 100% Painless"}
                        </p>
                        <span className="text-[10px] font-bold text-slate-400">Andijon · Muqimiy 35</span>
                      </div>
                      <div className="p-3 grid grid-cols-1 gap-1.5">
                        {specialties.map((spec) => (
                          <NavLink
                            key={spec.id}
                            to={to(spec.path)}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-teal-50/60 transition-all duration-200 group"
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
                            ? "Barcha xizmatlar katalogi →"
                            : lang === "ru"
                            ? "Все услуги каталога →"
                            : "View all services →"}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <NavLink
                to={to("/about")}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{lang === "uz" ? "Shifokor Haqida" : lang === "ru" ? "О враче" : "About"}</span>
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Contact */}
              <NavLink
                to={to("/contact")}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary hover:bg-teal-50/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакты" : "Contact"}</span>
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </nav>

            {/* Desktop Right Side: Lang + CTA */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
              {/* Language Switcher - 3 pill */}
              <div className="flex items-center bg-slate-100/90 rounded-xl p-0.5 text-[11px] font-bold border border-slate-200/60 shrink-0">
                {["uz", "ru", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      lang === l
                        ? "bg-white text-primary shadow-xs font-black"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* CTA Book Button */}
              <button
                onClick={handleBookClick}
                className="relative overflow-hidden px-4 xl:px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_4px_16px_-4px_rgba(12,110,90,0.5)] hover:shadow-[0_6px_24px_-4px_rgba(12,110,90,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group whitespace-nowrap shrink-0"
              >
                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  <span>
                    {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться" : "Book Now"}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>
            </div>

            {/* Mobile Header Right Side: Language Dropdown + Hamburger */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              {/* Compact Language Selector Dropdown (Mobile) */}
              <div className="relative" ref={mobileLangRef}>
                <button
                  type="button"
                  onClick={() => setMobileLangOpen((v) => !v)}
                  aria-expanded={mobileLangOpen}
                  aria-haspopup="true"
                  aria-label="Tilni tanlash / Select language"
                  className="h-9 px-2.5 rounded-xl bg-slate-100/90 hover:bg-teal-50 text-slate-700 border border-slate-200/70 flex items-center gap-1 text-[11px] font-bold uppercase transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="font-black tracking-wide">{lang}</span>
                  <svg
                    className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${mobileLangOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileLangOpen && (
                  <div className="absolute right-0 top-full mt-1.5 bg-white rounded-2xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.18)] border border-slate-100 p-1.5 min-w-[130px] z-50 animate-fadeInScale">
                    {[
                      { code: "uz", label: "O'zbek" },
                      { code: "ru", label: "Русский" },
                      { code: "en", label: "English" },
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          changeLanguage(item.code);
                          setMobileLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                          lang === item.code
                            ? "bg-teal-50 text-primary font-black"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        {lang === item.code && <span className="text-primary text-xs">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setShowMenu(true)}
                aria-label={a11y.openMenu}
                className="w-10 h-10 rounded-xl bg-slate-100/90 hover:bg-teal-50 border border-slate-200/70 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors shrink-0"
              >
                <span className="w-5 h-0.5 bg-slate-700 rounded-full" />
                <span className="w-3.5 h-0.5 bg-primary rounded-full" />
                <span className="w-5 h-0.5 bg-slate-700 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER MODAL ── */}
      {showMenu && (
        <div
          className="fixed inset-0 z-[200] flex"
          role="dialog"
          aria-modal="true"
          aria-label={a11y.mobileNavigation}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeDrawer}
          />

          {/* Drawer Slide-in Panel */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            className="relative ml-auto w-[min(90vw,360px)] h-full bg-white flex flex-col shadow-2xl animate-fadeInLeft focus:outline-none"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-3.5 2xs:p-4 border-b border-slate-100 bg-gradient-to-r from-teal-50/80 via-emerald-50/40 to-white">
              <Logo className="h-7" hideSubtitleOnMobile={true} />
              <button
                onClick={closeDrawer}
                aria-label={a11y.closeMenu}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
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
            <div className="flex-1 overflow-y-auto p-3.5 2xs:p-4 space-y-4">
              {/* Language Segmented Control inside Drawer */}
              <div className="p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 grid grid-cols-3 gap-1">
                {[
                  { code: "uz", label: "O'zbek" },
                  { code: "ru", label: "Русский" },
                  { code: "en", label: "English" },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className={`flex items-center justify-center py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      lang === item.code
                        ? "bg-white text-primary shadow-xs font-black"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Main Nav Links */}
              <div className="space-y-1">
                {/* Home */}
                <NavLink
                  to={to("/")}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-800 hover:bg-teal-50 hover:text-primary"
                    }`
                  }
                >
                  <span>{lang === "uz" ? "Bosh Sahifa" : lang === "ru" ? "Главная" : "Home"}</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>

                {/* Services Section with Accordion */}
                <div className="rounded-2xl bg-stone-50/70 border border-stone-200/70 overflow-hidden">
                  <div className="flex items-center justify-between p-1">
                    <NavLink
                      to={to("/services")}
                      onClick={closeDrawer}
                      className="flex-1 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-primary transition-colors"
                    >
                      {lang === "uz" ? "Xizmatlar Katalogi" : lang === "ru" ? "Каталог Услуг" : "Services Catalog"}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-label="Toggle specialties"
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white transition-colors cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-2 pb-2 space-y-1 pt-1 border-t border-stone-200/50">
                      {specialties.map((spec) => (
                        <NavLink
                          key={spec.id}
                          to={to(spec.path)}
                          onClick={closeDrawer}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-white hover:bg-teal-50 border border-stone-200/60 transition-all group"
                        >
                          <span
                            className={`w-7 h-7 rounded-lg bg-gradient-to-br ${spec.color} text-white flex items-center justify-center shrink-0 shadow-2xs`}
                          >
                            {spec.icon}
                          </span>
                          <span className="text-[11.5px] font-bold text-slate-800 group-hover:text-primary transition-colors">
                            {spec.title[lang]}
                          </span>
                          <svg
                            className="w-3.5 h-3.5 text-slate-300 ml-auto group-hover:text-primary"
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
                  )}
                </div>

                {/* About */}
                <NavLink
                  to={to("/about")}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-800 hover:bg-teal-50 hover:text-primary"
                    }`
                  }
                >
                  <span>{lang === "uz" ? "Shifokor Haqida" : lang === "ru" ? "О враче" : "About Doctor"}</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>

                {/* Contact */}
                <NavLink
                  to={to("/contact")}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-800 hover:bg-teal-50 hover:text-primary"
                    }`
                  }
                >
                  <span>{lang === "uz" ? "Aloqa va Manzil" : lang === "ru" ? "Контакты и Адрес" : "Contact & Location"}</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              </div>

              {/* Direct Quick Contact Grid */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">
                  {lang === "uz" ? "Tezkor Aloqa" : lang === "ru" ? "Быстрая Связь" : "Quick Contact"}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={DOCTOR_INFO.phoneHref}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-teal-50 hover:bg-teal-100 border border-teal-200/80 text-slate-800 transition-colors"
                  >
                    <IconPhone className="w-4 h-4 text-primary mb-1" />
                    <span className="text-[10.5px] font-bold text-slate-800">Qo'ng'iroq</span>
                  </a>
                  <a
                    href={DOCTOR_INFO.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200/80 text-slate-800 transition-colors"
                  >
                    <IconTelegram className="w-4 h-4 text-sky-500 mb-1" />
                    <span className="text-[10.5px] font-bold text-slate-800">Telegram</span>
                  </a>
                  <a
                    href={DOCTOR_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-pink-50 hover:bg-pink-100 border border-pink-200/80 text-slate-800 transition-colors"
                  >
                    <IconInstagram className="w-4 h-4 text-pink-500 mb-1" />
                    <span className="text-[10.5px] font-bold text-slate-800">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Clinic Location & Hours Info Card */}
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/70 text-left text-[11px] text-slate-600 space-y-1">
                <p className="font-extrabold text-slate-900">Stomatolog Orifjon (Mansurov O.)</p>
                <p className="leading-snug">Andijon sh., Muqimiy ko'chasi 35/41-uy (Rayon Stoyanka)</p>
                <p className="text-primary font-bold pt-0.5">Du – Sha: 08:30 – 16:30</p>
                <div className="pt-1.5 border-t border-stone-200/60 flex flex-wrap items-center gap-x-2 text-[10.5px]">
                  <a href={DOCTOR_INFO.phoneHref} className="text-primary font-bold hover:underline">
                    {DOCTOR_INFO.phoneDisplay}
                  </a>
                  <span className="text-slate-300">·</span>
                  <a href={DOCTOR_INFO.secondaryPhoneHref} className="text-slate-700 font-semibold hover:underline">
                    {DOCTOR_INFO.secondaryPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Sticky Bottom Booking Button */}
            <div className="p-3.5 2xs:p-4 border-t border-slate-100 bg-white pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
              <button
                onClick={handleBookClick}
                className="w-full py-3.5 rounded-2xl bg-primary hover:bg-[#095446] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <span>
                  {lang === "uz"
                    ? "Qabulga Yozilish"
                    : lang === "ru"
                    ? "Записаться на приём"
                    : "Book Appointment"}
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
