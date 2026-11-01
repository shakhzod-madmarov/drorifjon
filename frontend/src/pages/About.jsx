import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience, getExperienceBadge } from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS, SITE_ORIGIN } from "../constants/seo";
import Seo from "../components/Seo";
import { buildAboutPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import CertificatesShowcase from "../components/CertificatesShowcase";
import ClinicEquipmentShowcase from "../components/ClinicEquipmentShowcase";
import ClinicalMaterialsShowcase from "../components/ClinicalMaterialsShowcase";
import {
  IconAward,
  IconShieldCheck,
  IconCheckCircle,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconGraduationCap,
} from "../components/MedicalIcons";
import Doctor3DCard from "../components/Doctor3DCard";
import Floating3DShapes from "../components/Floating3DShapes";

const About = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.about[lang] || PAGE_SEO.about.uz;
  const years = getYearsOfExperience();

  const timeline = [
    {
      year: {
        uz: "2001 – Hozirgacha",
        ru: "2001 – По настоящее время",
        en: "2001 – Present",
      },
      title: {
        uz: `Tibbiyot va Stomatologiya Amaliyoti (${years}+ Yillik Tajriba)`,
        ru: `Практика в Медицине и Стоматологии (Более ${years} Лет)`,
        en: `Healthcare & Dental Practice (Over ${years}+ Years)`,
      },
      desc: {
        uz: "Minglab bemorlarning tishlarini og'riqsiz davolash (terapiya), tish qo'yish va protezlash (ortopediya), Germaniya va Koreya implantatsiyasi, atravmatik jarrohlik (xirurgiya) hamda breketlar (ortodontiya).",
        ru: "Многолетняя клиническая практика: терапия и реставрация зубов без боли, высокоточная ортопедия, немецкая и корейская имплантация, бережная хирургия и исправление прикуса брекетами.",
        en: "Decades of dedicated practice: painless tooth therapy and restoration, high-precision orthopedics, German & Korean implants, gentle surgery, and braces orthodontics.",
      },
    },
    {
      year: {
        uz: "2017 – 2022",
        ru: "2017 – 2022",
        en: "2017 – 2022",
      },
      title: {
        uz: "O'sh Davlat Universiteti (Stomatologiya Fakulteti)",
        ru: "Ошский Государственный Университет (Стоматологический факультет)",
        en: "Osh State University (Faculty of Dentistry)",
      },
      desc: {
        uz: "Oliy akademik tibbiy stomatologiya ta'limi, zamonaviy klinik va jarrohlik usullari.",
        ru: "Высшее профильное медицинское образование европейского стандарта по специальности «Стоматология».",
        en: "Higher medical academic dental degree, modern clinical methods, and surgical techniques.",
      },
    },
    {
      year: {
        uz: "2001 – 2004",
        ru: "2001 – 2004",
        en: "2001 – 2004",
      },
      title: {
        uz: "Andijon Tibbiyot Kolleji (Dastlabki tibbiy ta'lim)",
        ru: "Андижанский Медицинский Колледж (Базовое образование)",
        en: "Andijan Medical College (Foundational Training)",
      },
      desc: {
        uz: "Fundamental tibbiy ta'lim, anatomiya, gigiyena va klinik tayyorgarlik asoslari.",
        ru: "Фундаментальная базовая медицинская подготовка, клиническая практика и стандарты асептики.",
        en: "Fundamental healthcare training, clinical practice, and medical foundations.",
      },
    },
  ];

  const values = [
    {
      icon: <IconShieldCheck className="w-6 h-6 text-primary" />,
      title: {
        uz: "100% Sterillik (Anti-SPID / Anti-Gepatit)",
        ru: "100% Стерильность (Анти-СПИД / Гепатит)",
        en: "100% Sterility (Anti-HIV / Hepatitis)",
      },
      desc: {
        uz: "Har bir bemor uchun alohida kraft-paketda avtoklavlangan steril asboblar ko'z oldingizda ochiladi.",
        ru: "Индивидуальный крафт-пакет со стерильными инструментами вскрывается прямо перед пациентом.",
        en: "Autoclaved sterile instrument pouches are unsealed right in front of every patient.",
      },
    },
    {
      icon: <IconCheckCircle className="w-6 h-6 text-brandOrange" />,
      title: {
        uz: "Ikki Bosqichli Og'riqsiz Anesteziya (Orablok & Supercain)",
        ru: "Двухэтапная Анестезия Без Боли (Ораблок & Суперкаин)",
        en: "Two-Stage Gentle Anesthesia (Orabloc & Supercain)",
      },
      desc: {
        uz: "Yevropaning individual steril blisterli Orablok, Supercain Forte va Artikain preparatlari bilan 100% og'riqsiz muolaja.",
        ru: "Итальянский стерильный Ораблок в блистерах, Суперкаин Форте и Артикаин обеспечивают глубокое обезболивание без боли.",
        en: "Sterile blistered European Orabloc carpules, Supercain Forte, and pure Articaine guarantee completely painless treatment.",
      },
    },
    {
      icon: <IconAward className="w-6 h-6 text-emerald-600" />,
      title: {
        uz: "Original Germaniya va Koreya Materiallari",
        ru: "Оригинальные Материалы из Германии и Кореи",
        en: "Genuine German & Korean Certified Materials",
      },
      desc: {
        uz: "Charisma (Germaniya) va DenFil (Koreya) plombalari, Mega'Gen (Koreya), AnyRidge (Germaniya) va DXL (Germaniya) implantlari.",
        ru: "Пломбы Charisma (Германия) и DenFil (Корея), имплантаты Mega'Gen (Корея), AnyRidge (Германия) и DXL (Германия).",
        en: "Charisma (Germany) & DenFil (Korea) composites, Mega'Gen (Korea), AnyRidge (Germany) & DXL (Germany) implant systems.",
      },
    },
  ];

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "О Стоматологе Орифжоне" : lang === "en" ? "About Dentist Orifjon" : "Stomatolog Orifjon haqida", path: "/about" },
  ];
  const aboutSchema = buildAboutPageSchema(lang, breadcrumbs);

  return (
    <div className="relative py-4 sm:py-6 space-y-6 sm:space-y-8">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        ogImage={`${SITE_ORIGIN}/dr_orifjon_og.jpg`}
        schemaJson={aboutSchema}
      />

      {/* Dynamic 3D Floating Geometry Background */}
      <Floating3DShapes />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="relative z-10 text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "О Стоматологе Орифжоне" : lang === "en" ? "About Dentist Orifjon" : "Stomatolog Orifjon haqida"}
        </span>
      </nav>

      {/* Doctor Bio Editorial Header — Tight & Balanced */}
      <div className="relative z-10 overflow-hidden bg-white rounded-3xl border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 lg:p-8">
        <div className="lg:col-span-7 space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold shadow-2xs">
              {getExperienceBadge(lang)}
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-50 text-slate-700 border border-stone-200 text-xs font-medium">
              {lang === "ru"
                ? "Андижанский мед. колледж (2001–2004) & ОшГУ (2017–2022)"
                : lang === "en"
                ? "Andijan Medical College (2001–2004) & Osh State Univ (2017–2022)"
                : "Andijon Tibbiyot kolleji (2001–2004) & O'shDU (2017–2022)"}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="font-serif-classic text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              {lang === "ru"
                ? "Стоматолог Орифжон (Мансуров Орифжон Алимбекович)"
                : lang === "en"
                ? "Dentist Orifjon (Mansurov Orifjon Alimbekovich)"
                : "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich)"}
            </h1>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {lang === "ru"
                ? "Стоматолог Орифжон · Врач-Стоматолог"
                : lang === "en"
                ? "Dentist Orifjon · Dental Surgeon"
                : "Stomatolog Orifjon · Vrach Stomatolog"}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {lang === "uz"
              ? "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) 20 yildan ortiq tibbiyot sohasida amaliy faoliyat yuritib kelmoqda. Dastlab Andijon Tibbiyot kollejida (2001–2004) fundamental tibbiyot saboqlarini olgan, so'ngra O'sh Davlat Universitetida (2017–2022) oliy stomatologik ta'limni muvaffaqiyatli tamomlagan. 5 ta asosiy yo'nalish bo'yicha yuqori malakali mutaxassis: Terapiya, Ortopediya, Implantatsiya, Xirurgiya hamda Ortodontiya."
              : lang === "ru"
              ? "Стоматолог Орифжон (Мансуров Орифжон Алимбекович) работает в сфере здравоохранения более 20 лет. Начальное образование получил в Андижанском медицинском колледже (2001–2004), затем окончил стоматологический факультет Ошского Государственного Университета (2017–2022). Практикует 5 ключевых направлений: терапия, ортопедия, имплантация, хирургия и ортодонтия."
              : "Dentist Orifjon (Mansurov Orifjon Alimbekovich) has been practicing healthcare for over 20+ years. Graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Specialized in 5 core dental areas: Therapy, Orthopedics, Implantation, Oral Surgery, and Orthodontics."}
          </p>

          {/* Action buttons & phone */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 pt-1">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-orange-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer select-none"
            >
              {lang === "uz" ? "Qabulga Yozilish" : lang === "ru" ? "Записаться на Приём" : "Book Visit"}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex justify-center items-center px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-slate-800 text-xs sm:text-sm font-semibold gap-2 transition-colors whitespace-nowrap"
            >
              <IconPhone className="w-4 h-4 text-primary" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* 3 Clinical Guarantee Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 font-medium">
              <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>{lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Pain-free"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 font-medium">
              <IconAward className="w-3.5 h-3.5 text-primary" />
              <span>{lang === "uz" ? "Steril asboblar" : lang === "ru" ? "Стерильно" : "Sterile instruments"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 font-medium">
              <IconCheckCircle className="w-3.5 h-3.5 text-primary" />
              <span>{lang === "uz" ? "Germaniya & Koreya materiallari" : lang === "ru" ? "Материалы Германии и Кореи" : "German & Korean materials"}</span>
            </span>
          </div>
        </div>

        {/* Right 3D Perspective Card */}
        <div className="lg:col-span-5 flex justify-center">
          <Doctor3DCard lang={lang} onOpenBooking={onOpenBooking} />
        </div>
      </div>

      {/* Career Timeline Section */}
      <section className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl border border-amber-300/80 shadow-luxury p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-primary/10 text-primary border border-primary/25 shadow-xs">
            <IconGraduationCap className="w-3.5 h-3.5 text-primary" />
            <span>{lang === "uz" ? "Ta'lim va Amaliy Yo'l" : lang === "ru" ? "Образование и Путь" : "Career & Milestones"}</span>
          </span>
          <h2 className="font-serif-classic text-2xl sm:text-3xl font-extrabold text-slate-900">
            {lang === "uz" ? "Stomatolog Orifjonning Kasbiy Yo'li" : lang === "ru" ? "Профессиональный Путь Стоматолога Орифжона" : "Dentist Orifjon's Professional Journey"}
          </h2>
        </div>

        <div className="relative border-l-2 border-primary/40 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-1.5 bg-amber-50/50 p-5 rounded-2xl border border-amber-200 hover:bg-white hover:shadow-md hover:border-amber-300 transition-all">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">
                  {item.year[lang]}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-classic">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Clinical Values */}
      <section className="relative z-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold text-slate-900">
            {lang === "uz" ? "Bemorlar Uchun 3 Asosiy Qoida" : lang === "ru" ? "3 Главных Принципа Лечения" : "3 Core Treatment Principles"}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === "uz"
              ? "Har bir muolaja eng qat'iy xalqaro xavfsizlik va gigiyena me'yorlariga rioya qilingan holda bajariladi."
              : lang === "ru"
              ? "Каждая процедура проводится в строгом соответствии с международными стандартами чистоты и комфорта."
              : "Every clinical procedure strictly complies with world-class safety and comfort standards."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-amber-200/90 shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="font-serif-classic text-lg font-bold text-slate-900">
                {v.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {v.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Showcase */}
      <div className="relative z-10">
        <ClinicEquipmentShowcase />
      </div>

      {/* Certified Clinical Materials: Germany & South Korea */}
      <div className="relative z-10">
        <ClinicalMaterialsShowcase onOpenBooking={onOpenBooking} />
      </div>

      {/* Certificates & Qualifications Showcase */}
      <div className="relative z-10">
        <CertificatesShowcase />
      </div>

      {/* Location Map */}
      <div className="relative z-10">
        <ClinicLocationMap />
      </div>
    </div>
  );
};

export default About;
