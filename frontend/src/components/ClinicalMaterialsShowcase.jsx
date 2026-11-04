import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  IconShieldCheck,
  IconSparkleStar,
  IconAward,
  IconCheckCircle,
} from "./MedicalIcons";

/**
 * ClinicalMaterialsShowcase:
 * Deep interactive showcase of certified filling materials,
 * pain-free anesthesia protocols, and premium dental implants
 * used by Stomatolog Orifjon (Mansurov Orifjon Alimbekovich).
 */
export default function ClinicalMaterialsShowcase({ onOpenBooking }) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const T = {
    uz: {
      badge: "KLINIK STANDARTLAR VA MATERIALLAR",
      title: "Sertifikatlangan Xalqaro Materiallar: Germaniya va Janubiy Koreya",
      subtitle:
        "Stomatolog Orifjon har bir bemorga faqat dunyoda tan olingan, 100% original va xavfsiz materiallarni qo'llaydi — nurlanuvchi nano-kompozitlar, steril shaxsiy blisterli anesteziya va umrbod kafolatli biotitan implantlar.",
      allTab: "Barcha Materiallar",
      tabs: {
        all: "Barchasi",
        composites: "Plombalash (Germaniya & Koreya)",
        anesthetics: "Og'riqsiz Anesteziya (Orablok, Supercain)",
        implants: "Implantlar (Mega'Gen, AnyRidge, DXL)",
      },
      originLabel: "Ishlab Chiqaruvchi:",
      specLabel: "Asosiy Xususiyatlari:",
      benefitLabel: "Bemor Uchun Afzalligi:",
      bookWithMaterial: "Ushbu Material Bilan Qabulga Yozilish",
      trustBanner: {
        title: "100% Sertifikatlangan va Kafolatlangan Materiallar",
        desc: "Barcha plomba, anesteziya va implantlar faqat rasmiy vakolatxonalardan olinadi va ko'z o'ngingizda steril ochiladi.",
      },
    },
    ru: {
      badge: "КЛИНИЧЕСКИЕ СТАНДАРТЫ И МАТЕРИАЛЫ",
      title: "Сертифицированные Материалы: Германия и Южная Корея",
      subtitle:
        "В практике Стоматолога Орифжона используются только оригинальные мировые бренды — светоотверждаемые нанокомпозиты, индивидуальная стерильная анестезия и биотитановые импланты с пожизненной гарантией.",
      allTab: "Все Материалы",
      tabs: {
        all: "Все",
        composites: "Пломбы (Германия & Корея)",
        anesthetics: "Анестезия (Ораблок, Суперкаин)",
        implants: "Импланты (Mega'Gen, AnyRidge, DXL)",
      },
      originLabel: "Производитель:",
      specLabel: "Ключевые характеристики:",
      benefitLabel: "Преимущество для пациента:",
      bookWithMaterial: "Записаться на приём с этим материалом",
      trustBanner: {
        title: "100% Сертифицированные и Безопасные Материалы",
        desc: "Все пломбировочные материалы, карпулы анестетиков и импланты вскрываются индивидуально в вашем присутствии.",
      },
    },
    en: {
      badge: "CLINICAL STANDARDS & MATERIALS",
      title: "Certified International Materials: Germany & South Korea",
      subtitle:
        "Dentist Orifjon exclusively utilizes certified, premium international dental materials — aesthetic light-cured nanocomposites, sterile blistered micro-anesthetics, and biocompatible titanium implants.",
      allTab: "All Materials",
      tabs: {
        all: "All",
        composites: "Fillings (Germany & Korea)",
        anesthetics: "Painless Anesthesia (Orabloc, Supercain)",
        implants: "Implants (Mega'Gen, AnyRidge, DXL)",
      },
      originLabel: "Manufacturer:",
      specLabel: "Key Specifications:",
      benefitLabel: "Clinical Patient Advantage:",
      bookWithMaterial: "Book Appointment with this Material",
      trustBanner: {
        title: "100% Certified & Biocompatible Dental Materials",
        desc: "All composite syringes, blistered anesthetic carpules, and sterile titanium implants are unsealed directly before you.",
      },
    },
  };

  const t = T[lang] || T.uz;

  // Flatten or filter items
  const materialsList = [
    ...DOCTOR_INFO.clinicalMaterials.composites.map((m) => ({ ...m, category: "composites", catLabel: lang === "uz" ? "Plombalash & Restavratsiya" : lang === "ru" ? "Пломбирование и реставрация" : "Restoration & Filling" })),
    ...DOCTOR_INFO.clinicalMaterials.anesthetics.map((m) => ({ ...m, category: "anesthetics", catLabel: lang === "uz" ? "100% Og'riqsiz Anesteziya" : lang === "ru" ? "Анестезия без боли" : "Gentle Local Anesthesia" })),
    ...DOCTOR_INFO.clinicalMaterials.implants.map((m) => ({ ...m, category: "implants", catLabel: lang === "uz" ? "Dental Implantologiya" : lang === "ru" ? "Дентальная имплантация" : "Dental Implantology" })),
  ];

  const filteredMaterials =
    activeTab === "all"
      ? materialsList
      : materialsList.filter((m) => m.category === activeTab);

  return (
    <section aria-labelledby="clinical-materials-heading" className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
          <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
          <span>{t.badge}</span>
        </div>
        <h2
          id="clinical-materials-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif-classic tracking-tight"
        >
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {Object.entries(t.tabs).map(([key, label]) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer touch-manipulation border ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                  : "bg-white text-slate-700 border-amber-200/90 hover:border-primary/60 hover:bg-amber-50/50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Materials Cards Grid with 3D Perspective */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
        {filteredMaterials.map((mat) => (
          <article
            key={mat.id}
            className="group relative bg-white rounded-2xl sm:rounded-3xl border border-amber-200/90 p-4 2xs:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden [transform-style:preserve-3d]"
          >
            {/* Top Brand Ambient Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-brandCyan to-brandGreen" />

            <div className="space-y-4">
              {/* Category pill & Country Flag badge */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200/70 truncate">
                  {mat.catLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                  <span>{mat.flag}</span>
                  <span>{mat.country.split(" ")[0]}</span>
                </span>
              </div>

              {/* Title & Brand Name */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-classic group-hover:text-primary transition-colors">
                  {mat.title[lang]}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5">
                  <span className="text-slate-400">{t.originLabel}</span>
                  <span className="font-bold text-slate-700">{mat.manufacturer || mat.formula}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {mat.desc[lang]}
              </p>

              {/* Quality Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
                  <IconShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{mat.badge[lang]}</span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-5 mt-4 border-t border-amber-100/80 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                100% Original
              </span>
              <a
                href="#booking"
                onClick={(e) => {
                  if (onOpenBooking) {
                    e.preventDefault();
                    onOpenBooking(
                      mat.category === "composites"
                        ? "terapiya"
                        : mat.category === "implants"
                        ? "implantatsiya"
                        : "xirurgiya"
                    );
                  }
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-orange-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>{lang === "uz" ? "Tanlash" : lang === "ru" ? "Выбрать" : "Select"}</span>
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Trust Guarantee Strip */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50/60 to-emerald-50/60 border border-amber-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left [transform-style:preserve-3d]">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-brandOrange text-white flex items-center justify-center shrink-0 shadow-md">
          <IconAward className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 space-y-0.5">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 font-serif-classic">
            {t.trustBanner.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.trustBanner.desc}
          </p>
        </div>
        <a
          href="#booking"
          onClick={(e) => {
            if (onOpenBooking) {
              e.preventDefault();
              onOpenBooking("terapiya");
            }
          }}
          className="shrink-0 px-5 py-2.5 rounded-2xl bg-primary hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer touch-manipulation"
        >
          {lang === "uz" ? "Konsultatsiyaga Yozilish" : lang === "ru" ? "Консультация Врача" : "Book Consultation"}
        </a>
      </div>
    </section>
  );
}
