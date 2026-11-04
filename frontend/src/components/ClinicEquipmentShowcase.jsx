import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useLanguage } from "../context/LanguageContext";
import {
  IconShieldCheck,
  IconSparkleStar,
  IconAward,
} from "./MedicalIcons";

/**
 * ClinicEquipmentShowcase:
 * Authentic clinical equipment and sterilization suite at Eco Denta.
 * Features Dentist Orifjon's genuine operatory, hospital-grade Class-B
 * autoclave sterilization station, and original MegaGen implant systems.
 */
export default function ClinicEquipmentShowcase() {
  const { lang } = useLanguage();
  const [activeModalItem, setActiveModalItem] = useState(null);

  const T = {
    uz: {
      badge: "ZAMONAVIY KLINIKA VA STERILIZATSIYA",
      title: "Zamonaviy Jihozlar va Mutlaq Steril Muhit",
      subtitle:
        "Eco Denta stomatologiya xonasida qo'llaniladigan ergonomik uskunalar, 100% Anti-SPID/Anti-Gepatit avtoklav sterilizatsiyasi va original MegaGen biotitan tizimlari.",
      viewPhoto: "Suratni ko'rish",
      items: [
        {
          id: "operatory",
          category: "Eco Denta Operatsiyasi",
          warrantyBadge: "Ergonomik & Qulay",
          pill: "Zamonaviy Kreslo",
          icon: <IconSparkleStar className="w-6 h-6 text-primary" />,
          title: "Eco Denta Operatsion Xonasi va Qulay Bemor Kreslosi",
          desc: "Zamonaviy stomatologik qurilma, mikro-motorli sokin asboblar va sensorli soyasiz LED chiroq. Bemor uchun qulay anatomiya davolash jarayonini xotirjam va charchoqsiz o'tishini ta'minlaydi.",
          image: assets.clinic_room,
          specs: [
            "Zamonaviy ergonomik stomatologik kreslo va yumshoq bosh suyanchig'i",
            "Sensorli soyasiz LED operatsion yoritgich",
            "Sokin va tebranishsiz zamonaviy mikromotor va turbinalar",
            "Eco Denta yorug'lik belgisi va toza sanitar muhit",
          ],
        },
        {
          id: "sterilization",
          category: "Sterilizatsiya Markazi",
          warrantyBadge: "100% Xavfsizlik",
          pill: "Anti-SPID & Gepatit",
          icon: <IconShieldCheck className="w-6 h-6 text-emerald-500" />,
          title: "B-Sinf Avtoklav va Mutlaq Steril Xavfsizlik Muhiti",
          desc: "Har bir bemor uchun asboblar ko'z o'ngingizda ochiladigan individual kraft-paketlarda saqlanadi. B-sinf avtoklav bosim ostida bug'lash, ultrabinafsha (UV) kameralar va kimyoviy nazorat orqali 100% mikrob va viruslardan himoyalangan.",
          image: assets.clinic_sterilization,
          specs: [
            "100% Anti-SPID va Anti-Gepatit xalqaro qat'iy standartlari",
            "Ko'z o'ngingizda ochiladigan muhrlangan steril kraft-paketlar",
            "Ultrabinafsha (UV) nurli germetik asboblar saqlash kamerasi",
            "Har bir avtoklav siklida rang o'zgartiruvchi kimyoviy nazorat testi",
          ],
        },
        {
          id: "materials",
          category: "Original Materiallar",
          warrantyBadge: "MegaGen & Kulzer",
          pill: "Sertifikatlangan",
          icon: <IconAward className="w-6 h-6 text-brandOrange" />,
          title: "MegaGen Biotitan Implantlari va Kulzer Nanokompozitlari",
          desc: "Janubiy Koreyaning rasmiy MegaGen biotitan implantlari hamda Germaniyaning Kulzer Charisma va DenFil nano-gibrid restavratsiya materiallari. Italiyaning Orablok anesteziyasi orqali 100% og'riqsiz muolaja.",
          image: assets.treatment_implant,
          specs: [
            "MegaGen rasmiy biotitan implantologik xirurgik protokollari",
            "Kulzer Charisma (Germaniya) nano-gibrid emal rangidagi plombalar",
            "Orablok (Italiya) yuqori samarali 100% og'riqsiz anesteziya",
            "Uzoq yillik klinik barqarorlik va estetik kafolat",
          ],
        },
      ],
    },
    ru: {
      badge: "СОВРЕМЕННАЯ КЛИНИКА И СТЕРИЛИЗАЦИЯ",
      title: "Современное Оснащение и Абсолютная Стерильность",
      subtitle:
        "Эргономичное оборудование в кабинете Eco Denta, многоступенчатая стерилизация по стандартам Анти-СПИД / Анти-Гепатит и оригинальные биотитановые системы MegaGen.",
      viewPhoto: "Смотреть фото",
      items: [
        {
          id: "operatory",
          category: "Кабинет Eco Denta",
          warrantyBadge: "Эргономика и Комфорт",
          pill: "Современное Кресло",
          icon: <IconSparkleStar className="w-6 h-6 text-primary" />,
          title: "Операционный Кабинет Eco Denta и Анатомическое Кресло",
          desc: "Современная стоматологическая установка, бесшумные микромоторы и бестеневой сенсорный LED-светильник. Анатомическое кресло обеспечивает максимальный комфорт и расслабление во время процедур.",
          image: assets.clinic_room,
          specs: [
            "Анатомическое кресло с мягким подголовником и плавным ходом",
            "Сенсорный бестеневой хирургический LED-светильник",
            "Бесшумные высокоточные микромоторы и турбины без вибраций",
            "Фирменное световое панно Eco Denta и безупречная санитария",
          ],
        },
        {
          id: "sterilization",
          category: "Центр Стерилизации",
          warrantyBadge: "100% Безопасность",
          pill: "Анти-СПИД / Гепатит",
          icon: <IconShieldCheck className="w-6 h-6 text-emerald-500" />,
          title: "Автоклав B-Класса и Полная Стерилизационная Безопасность",
          desc: "Индивидуальные крафт-пакеты вскрываются строго при пациенте. Паровой автоклав класса B, ультрафиолетовые камеры хранения и строгие индикаторы контроля обеспечивают 100% защиту от любых инфекций.",
          image: assets.clinic_sterilization,
          specs: [
            "Строгое соблюдение стандартов Анти-СПИД и Анти-Гепатит",
            "Стерильные запечатанные крафт-пакеты, вскрываемые при пациенте",
            "Ультрафиолетовые (УФ) бактерицидные камеры хранения инструментов",
            "Многоступенчатый химический и термодинамический контроль каждого цикла",
          ],
        },
        {
          id: "materials",
          category: "Оригинальные Материалы",
          warrantyBadge: "MegaGen и Kulzer",
          pill: "Сертифицировано",
          icon: <IconAward className="w-6 h-6 text-brandOrange" />,
          title: "Биотитановые Импланты MegaGen и Нанокомпозиты Kulzer Charisma",
          desc: "Оригинальные южнокорейские биотитановые импланты MegaGen и немецкие наногибридные реставрационные композиты Kulzer Charisma, DenFil. Итальянский анестетик Ораблок для лечения без боли.",
          image: assets.treatment_implant,
          specs: [
            "Официальные протоколы имплантации MegaGen (Южная Корея)",
            "Немецкие наногибридные пломбировочные материалы Kulzer Charisma",
            "Итальянская премиальная анестезия Ораблок (100% без боли)",
            "Долговечная клиническая стабильность и естественная эстетика",
          ],
        },
      ],
    },
    en: {
      badge: "MODERN CLINIC & STERILIZATION",
      title: "State-of-the-Art Operatory & Absolute Sterility",
      subtitle:
        "Ergonomic clinical equipment in the Eco Denta operatory, hospital-grade Class-B autoclave infection control, and authentic MegaGen biotitanium implant systems.",
      viewPhoto: "Inspect photo",
      items: [
        {
          id: "operatory",
          category: "Eco Denta Operatory",
          warrantyBadge: "Ergonomic & Gentle",
          pill: "Modern Dental Unit",
          icon: <IconSparkleStar className="w-6 h-6 text-primary" />,
          title: "Eco Denta Dental Operatory & Ergonomic Patient Unit",
          desc: "Advanced dental operatory unit with quiet precision micromotors and shadowless sensor LED illumination. Ergonomic patient contouring guarantees a calm, stress-free clinical experience.",
          image: assets.clinic_room,
          specs: [
            "Ergonomic contour dental chair with adaptive headrest",
            "Touchless shadowless surgical LED clinical illumination",
            "Whisper-quiet vibration-free high-precision turbines",
            "Illuminated Eco Denta branding & pristine operatory interior",
          ],
        },
        {
          id: "sterilization",
          category: "Sterilization Suite",
          warrantyBadge: "Hospital-Grade",
          pill: "100% Sterile",
          icon: <IconShieldCheck className="w-6 h-6 text-emerald-500" />,
          title: "Class-B Autoclave & 100% Clinical Sterilization Suite",
          desc: "Individual kraft pouches sealed and opened exclusively in front of each patient. High-pressure Class-B steam autoclaving, UV storage cabinets, and chemical sterility indicators guarantee total infection defense.",
          image: assets.clinic_sterilization,
          specs: [
            "Full compliance with international Anti-HIV & Anti-Hepatitis protocols",
            "Hermetically sealed individual kraft pouches opened before you",
            "Ultraviolet (UV) germicidal instrument storage chambers",
            "Multi-stage chemical and thermodynamic cycle validation indicators",
          ],
        },
        {
          id: "materials",
          category: "Certified Materials",
          warrantyBadge: "MegaGen & Kulzer",
          pill: "Certified Genuine",
          icon: <IconAward className="w-6 h-6 text-brandOrange" />,
          title: "MegaGen Biotitanium Implants & Kulzer Charisma Nanocomposites",
          desc: "Genuine South Korean MegaGen biocompatible titanium implants and premium German Kulzer Charisma & DenFil nanohybrid composites. Italian Orabloc anaesthesia for completely painless dental work.",
          image: assets.treatment_implant,
          specs: [
            "Official MegaGen surgical implantation protocols (South Korea)",
            "German Kulzer Charisma nanohybrid enamel-matching restorations",
            "Italian Orabloc premium localized anaesthesia (zero pain)",
            "Decade-long clinical bone stability and natural aesthetic smiles",
          ],
        },
      ],
    },
  };

  const t = T[lang] || T.uz;

  return (
    <section aria-labelledby="equipment-heading" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/25 shadow-sm">
          <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span>{t.badge}</span>
        </span>
        <h2 id="equipment-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-classic">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 3-Card Grid Matching Simple Classic UI/UX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
        {t.items.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl border border-amber-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2.5 hover:border-primary/50 overflow-hidden flex flex-col justify-between [transform-style:preserve-3d]"
          >
            <div>
              {/* Photo Banner with Zoom Depth & Simple Classic Clean Stickers */}
              <div
                onClick={() => setActiveModalItem(item)}
                className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 cursor-pointer [transform-style:preserve-3d]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Visual Depth Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Medical Icon Disc & Clean Clinical Pill */}
              <div className="px-5 -mt-6 relative z-20 flex justify-between items-end">
                <span className="w-12 h-12 rounded-2xl bg-white shadow-xl border-2 border-amber-200/90 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full shadow-sm mb-1">
                  {item.pill}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-5 pt-3 space-y-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug font-serif-classic">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Clinical Specs */}
                <div className="space-y-1.5 pt-2 border-t border-amber-100 text-xs">
                  {item.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-[11px] leading-snug">{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple Classic Footer Button */}
            <div className="p-5 pt-0 border-t border-amber-100/60 mt-2">
              <button
                onClick={() => setActiveModalItem(item)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary border border-slate-200/80 text-slate-700 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
              >
                <span>{t.viewPhoto}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {activeModalItem && (
        <div
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-lg font-bold backdrop-blur-md transition-all cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-slate-900 border-t border-white/10 text-white space-y-1">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                {activeModalItem.category} · {activeModalItem.warrantyBadge}
              </span>
              <h4 className="text-lg font-bold font-serif-classic">
                {activeModalItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeModalItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
