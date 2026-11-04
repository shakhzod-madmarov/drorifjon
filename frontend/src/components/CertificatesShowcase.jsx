import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IconAward, IconCheckCircle, IconGraduationCap, IconShieldCheck } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

const credentials = [
  {
    id: "cert-megagen-basic-2025",
    type: "certificate",
    year: "2025",
    org: "MegaGen Uzbekistan & MegaGen Implant Co., LTD",
    badge: {
      uz: "MEGAG'EN RASMIY SERTIFIKAT",
      ru: "ОФИЦИАЛЬНЫЙ СЕРТИФИКАТ MEGAGEN",
      en: "OFFICIAL MEGAGEN CERTIFICATE",
    },
    title: {
      uz: "MegaGen Implantologiya Asosiy Kursi (Mansurov Orifbek)",
      ru: "Базовый Курс Имплантации MegaGen (Мансуров Орифбек)",
      en: "Basic Course of Implantation MegaGen (Mansurov Orifbek)",
    },
    desc: {
      uz: "MegaGen Uzbekistan tomonidan 'Basic Course of Implantation' (03–08-fevral 2025-yil, ma'ruzachi: Karimkulov N.A.) bo'yicha berilgan rasmiy tasdiqlangan 'Certificate of Appreciation' sertifikati.",
      ru: "Официальный 'Certificate of Appreciation' от MegaGen Uzbekistan об успешном окончании курса 'Basic Course of Implantation' (03–08 февраля 2025, лектор: Каримкулов Н.А.).",
      en: "Official MegaGen Uzbekistan 'Certificate of Appreciation' presented to Mansurov Orifbek for successful completion of the Basic Course of Implantation (03-08 February 2025, Lecturer Karimkulov N.A.).",
    },
    image: "/certificates/cert_megagen_basic.webp",
    hasZoom: true,
    verification: "MegaGen Implant Co., LTD",
  },
  {
    id: "edu-osh-university",
    type: "degree",
    year: "2017 – 2022",
    org: "O'sh Davlat Universiteti (Stomatologiya Fakulteti)",
    badge: {
      uz: "OLIY AKADEMIK TA'LIM",
      ru: "ВЫСШЕЕ МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ",
      en: "HIGHER MEDICAL DEGREE",
    },
    title: {
      uz: "Vrach-Stomatolog Mutaxassisligi Diplomi",
      ru: "Диплом Врача-Стоматолога Высшей Квалификации",
      en: "Doctor of Dental Medicine (DMD) Medical Diploma",
    },
    desc: {
      uz: "Stomatologiya sohasida 5 yillik to'liq oliy akademik ta'lim: terapevtik restavratsiya, ortopedik protezlash, jarrohlik protokollari va xalqaro klinik standartlar.",
      ru: "Полный 5-летний курс профильного высшего образования: терапевтическая реставрация, ортопедия, хирургические протоколы и международные клинические стандарты.",
      en: "Comprehensive 5-year higher academic medical degree in clinical dentistry: modern restorations, prosthetics, surgical protocols, and standards.",
    },
    verification: "O'sh Davlat Universiteti",
  },
  {
    id: "edu-andijan-college",
    type: "foundation",
    year: "2001 – 2004",
    org: "Andijon Tibbiyot Kolleji",
    badge: {
      uz: "FUNDAMENTAL TA'LIM",
      ru: "БАЗОВОЕ ОБРАЗОВАНИЕ",
      en: "FOUNDATIONAL TRAINING",
    },
    title: {
      uz: "Fundamental Tibbiyot va Gigiyena Maktabi",
      ru: "Фундаментальная Медицинская Подготовка",
      en: "Foundational Medical Sciences & Clinic",
    },
    desc: {
      uz: "Fundamental tibbiyot, anatomiya, farmakologiya va antiseptika maktabi. 20 yildan ortiq uzluksiz tibbiy amaliyotning mustahkam professional poydevori.",
      ru: "Фундаментальная медицина, анатомия, фармакология и строгие протоколы асептики. Прочный фундамент более чем 20-летней непрерывной клинической практики.",
      en: "Medical foundations, anatomy, clinical pharmacology, and rigorous aseptic hygiene. Over two decades of dedicated continuous healthcare practice.",
    },
    verification: "20+ yillik tibbiyot staji",
  },
];

// Single 3D Credential Card with Cursor-Following Holographic Sheen
const CredentialCard = ({ item, lang, onSelect }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = -((y - centerY) / centerY) * 5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });
  }, []);

  const isClickable = Boolean(item.image);

  return (
    <div
      ref={cardRef}
      role={isClickable ? "button" : "article"}
      tabIndex={isClickable ? 0 : undefined}
      aria-haspopup={isClickable ? "dialog" : undefined}
      onClick={() => isClickable && onSelect(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (isClickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect(item);
        }
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.active ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className={`group relative bg-white rounded-3xl p-6 border border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary [transform-style:preserve-3d] ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Golden metallic accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

      {/* Holographic Gold Sheen Glare */}
      {tilt.active && (
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl z-20"
          style={{
            background: `radial-gradient(circle 250px at ${tilt.glareX}% ${tilt.glareY}%, rgba(253, 230, 138, 0.35), transparent 75%)`,
          }}
        />
      )}

      <div className="[transform-style:preserve-3d]">
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 truncate">
            {item.badge[lang]}
          </span>
          <span className="text-[11px] font-black text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-lg shrink-0 border border-amber-300/60 shadow-xs">
            {item.year}
          </span>
        </div>

        {/* Card Visual: Either Real Certificate Image OR Elegant Academic Degree Plaque */}
        {item.image ? (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-amber-200/90 mb-4 group-hover:scale-[1.02] transition-transform duration-300 shadow-md">
            <img
              src={item.image}
              alt={item.title[lang]}
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
            <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-xs text-amber-200 text-[10px] font-bold border border-amber-300/30 flex items-center gap-1.5 shadow-md">
              <svg className="w-3 h-3 text-amber-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>{lang === "uz" ? "Kattalashtirish" : lang === "ru" ? "Открыть 3D" : "Inspect"}</span>
            </span>
          </div>
        ) : (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/50 border border-amber-200/90 mb-4 flex flex-col items-center justify-center p-6 text-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-brandOrange text-white flex items-center justify-center mb-3 shadow-md border-2 border-white">
              {item.type === "degree" ? (
                <IconGraduationCap className="w-9 h-9 text-white" />
              ) : (
                <IconShieldCheck className="w-9 h-9 text-white" />
              )}
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-900">
              {item.type === "degree" ? "Vrach-Stomatolog" : "Tibbiy Malaka"}
            </span>
            <span className="text-[11px] text-slate-500 font-semibold mt-1">
              {item.org}
            </span>
          </div>
        )}

        <p className="text-[11px] font-bold uppercase tracking-wider text-brandOrange mb-1">
          {item.org}
        </p>
        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors font-serif-classic">
          {item.title[lang]}
        </h3>
        <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
          {item.desc[lang]}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-primary">
        <span className="text-slate-600 text-[11px]">
          {lang === "uz" ? "Rasmiy akkreditatsiya" : lang === "ru" ? "Официальная аккредитация" : "Official credential"}
        </span>
        <span className="text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200/60">
          <IconCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>{item.verification}</span>
        </span>
      </div>
    </div>
  );
};

export default function CertificatesShowcase() {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCert, setActiveCert] = useState(null);
  const closeCert = () => setActiveCert(null);
  const modalRef = useModalA11y(Boolean(activeCert), closeCert);

  return (
    <section aria-labelledby="certificates-heading" className="py-10 sm:py-16 border-t border-amber-100">
      <div className="w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200/60 shadow-xs">
            <IconAward className="w-3.5 h-3.5 text-brandOrange" />
            <span>
              {lang === "uz"
                ? "Diplom va Xalqaro Sertifikatlar"
                : lang === "ru"
                ? "Дипломы и Сертификаты"
                : "Diplomas & Certifications"}
            </span>
          </span>
          <h2 id="certificates-heading" className="text-3xl sm:text-4xl font-bold text-[#1A202C] tracking-tight font-serif-classic">
            {lang === "uz"
              ? "Tasdiqlangan Tibbiy Malaka & Xalqaro Diplomlar"
              : lang === "ru"
              ? "Подтверждённая Квалификация и Международные Сертификаты"
              : "Verified Medical Credentials & Honors"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {lang === "uz"
              ? "Stomatolog Orifjon (Mansurov Orifbek Alimbekovich) — Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi, 20 yildan ortiq tibbiyot tajribasiga ega mutaxassis."
              : lang === "ru"
              ? "Стоматолог Орифжон (Мансуров Орифбек Алимбекович) — выпускник Андижанского медицинского колледжа и Ошского Государственного Университета, более 20 лет опыта в сфере здравоохранения."
              : "Dentist Orifjon (Mansurov Orifbek Alimbekovich) — Graduate of Andijan Medical College and Osh State University with over 20+ years of healthcare background."}
          </p>
        </div>

        {/* Education Highlight Banner */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-brandOrange text-white flex items-center justify-center shrink-0 shadow-lg border border-white/40">
            <IconGraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-orange-50 border border-orange-200/60 text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
              {lang === "uz" ? "Tibbiy Ta'lim & Malaka" : lang === "ru" ? "Медицинское Образование и Квалификация" : "Medical Education & Credentials"}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-classic">
              {lang === "uz"
                ? "Andijon Tibbiyot Kolleji (2001–2004) & O'sh Davlat Universiteti (2017–2022)"
                : lang === "ru"
                ? "Андижанский медицинский колледж (2001–2004) и Ошский Государственный Университет (2017–2022)"
                : "Andijan Medical College (2001–2004) & Osh State University (2017–2022)"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {lang === "uz"
                ? "20+ yillik tibbiyot tajribasi, zamonaviy tish davolash, estetik restavratsiya va implantatsiya."
                : lang === "ru"
                ? "Более 20 лет в медицине: бережное лечение, эстетическая реставрация и дентальная имплантация."
                : "20+ years of healthcare excellence, gentle treatments, aesthetic restorations, and dental surgery."}
            </p>
          </div>
        </div>

        {/* 3 Authentic Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
          {credentials.map((cred) => (
            <CredentialCard
              key={cred.id}
              item={cred}
              lang={lang}
              onSelect={setActiveCert}
            />
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Full-Size Certificate Inspection */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={a11y.certificateModal}
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={closeCert}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl relative border border-amber-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {activeCert.org} ({activeCert.year})
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-classic">
                  {activeCert.title[lang]}
                </h3>
              </div>
              <button
                onClick={closeCert}
                aria-label={lang === "uz" ? "Sertifikat oynasini yopish" : lang === "ru" ? "Закрыть просмотр сертификата" : "Close certificate preview"}
                title={lang === "uz" ? "Yopish" : lang === "ru" ? "Закрыть" : "Close"}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-amber-200/50 flex items-center justify-center p-2 shadow-inner">
              <img
                src={activeCert.image}
                alt={activeCert.title[lang]}
                className="max-h-[65vh] w-auto object-contain mx-auto rounded-lg"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeCert.desc[lang]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
