import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { assets } from "../assets/assets";
import {
  DentalImplantFixture,
  DentalBracesIcon,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalDenturesIcon,
  DentalAlignersIcon,
  DentalWhiteningZoom,
  DentalSurgeryExtraction,
  IconShieldCheck,
  IconClock,
  IconCheckCircle,
  IconSparkleStar,
} from "./MedicalIcons";
import { useBooking } from "../context/BookingContext";

const treatments = [
  {
    id: "terapiya",
    serviceId: "terapiya",
    image: assets.treatment_therapy,
    unitLabel: { uz: "tish dona", ru: "зуб(а)", en: "tooth / teeth" },
    maxUnits: 6,
    shortTitle: { uz: "Terapiya", ru: "Терапия", en: "Therapy" },
    tagBadge: "🇩🇪 Charisma & 🇰🇷 DenFil",
    icon: <DentalToothMolar className="w-5 h-5" />,
    badgeTitle: {
      uz: "✦ 100% OG'RIQSIZ BADIIY RESTAVRATSIYA",
      ru: "✦ 100% БЕЗБОЛЕЗНЕННОЕ ЛЕЧЕНИЕ И РЕСТАВРАЦИЯ",
      en: "✦ 100% PAINLESS AESTHETIC RESTORATION",
    },
    title: {
      uz: "Terapiya va Badiiy Restavratsiya",
      ru: "Терапия и Художественная Реставрация",
      en: "Therapy & Aesthetic Restoration",
    },
    desc: {
      uz: "Karies, chuqur karies, pulpit va nerv yallig'lanishini Orablok hamda Supercain Forte anesteziyasi ostida 100% og'riqsiz davolash. Charisma (Germaniya) va DenFil (Janubiy Koreya) kompozitlari bilan tishning tabiiy shaklini badiiy tiklash.",
      ru: "Лечение кариеса любой сложности, пульпита и корневых каналов под анестезией Ораблок и Суперкаин Форте на 100% без боли. Художественное восстановление зубов нанокомпозитами Charisma (Германия) и DenFil (Корея).",
      en: "100% painless treatment of cavities and root canals under Orabloc & Supercain Forte micro-anesthesia, with artistic restoration using genuine Charisma (Germany) and DenFil (Korea) composites.",
    },
    options: [
      { name: "Charisma (Germaniya) Nano-Restavratsiya", desc: { uz: "Mikro-shisha zarrachali 'xameleon' kompozit", ru: "Немецкий микростекольный нанокомпозит", en: "German microglass chameleon composite" } },
      { name: "DenFil (Janubiy Koreya) Mikro-Gibrid Plomba", desc: { uz: "80%+ mineral to'ldiruvchi, 300+ MPa mustahkamlik", ru: "Корейский наногибрид повышенной прочности", en: "Korean high-strength micro-hybrid resin" } },
      { name: "Pulpit & Kanal Davolash (Endodontiya)", desc: { uz: "Orablok anesteziyasi ostida 3D germetik steril plombalash", ru: "3D-обтурация под анестезией Ораблок", en: "3D hermetic root canal sealing under Orabloc" } },
    ],
    durationPerUnit: 35,
    warranty: { uz: "Rasmiy sifat kafolati", ru: "Официальная гарантия качества", en: "Official quality warranty" },
    features: [
      { uz: "2 bosqichli og'riqsizlantirish", ru: "Двухэтапная анестезия", en: "Two-stage gentle numbing" },
      { uz: "Tabiiy rang va nur o'tkazuvchanlik", ru: "Идеальный подбор цвета", en: "Exact shade & translucency" },
      { uz: "Karies qaytalanishidan himoya", ru: "Защита от рецидива", en: "Secondary caries prevention" },
    ],
  },
  {
    id: "ortopediya",
    serviceId: "ortopediya",
    image: assets.treatment_crowns,
    unitLabel: { uz: "birlik dona", ru: "единица(ы)", en: "unit(s)" },
    maxUnits: 14,
    shortTitle: { uz: "Ortopediya", ru: "Ортопедия", en: "Orthopedics" },
    tagBadge: "💎 Sirkon & Vinirlar",
    icon: <DentalVeneerCrown className="w-5 h-5" />,
    badgeTitle: {
      uz: "✦ CAD/CAM MONOLIT SIRKONIY VA PROTEZLAR",
      ru: "✦ ВЫСОКОТОЧНОЕ ЦИРКОНИЕВОЕ ПРОТЕЗИРОВАНИЕ",
      en: "✦ PRECISION CAD/CAM ZIRCONIA & PROSTHETICS",
    },
    title: {
      uz: "Ortopediya va Sirkon Protezlash",
      ru: "Ортопедия и Циркониевое Протезирование",
      en: "Orthopedics & Zirconia Prosthetics",
    },
    desc: {
      uz: "Yo'qotilgan va yemirilgan tishlarni metall-siz monolit sirkoniy, IPS E.max keramik karonkalar, vinirlar hamda qulay zamonaviy protezlar bilan tiklash.",
      ru: "Восстановление разрушенных и отсутствующих зубов сверхточными циркониевыми коронками, керамикой E.max, винирами и удобными протезами.",
      en: "Restoring broken or missing teeth with metal-free zirconia and ceramic crowns, aesthetic veneers, and comfortable modern prosthetics.",
    },
    options: [
      { name: "Monolit Sirkoniy Karonka (CAD/CAM)", desc: { uz: "Maksimal mustahkamlik va chidamlilik", ru: "Сверхпрочный диоксид циркония", en: "Ultra-strong monolithic zirconia" } },
      { name: "IPS E.max Presslangan Keramika", desc: { uz: "Old tishlar uchun tabiiy yaltiroqlik", ru: "Прессованная керамика E.max", en: "Natural front tooth translucency" } },
      { name: "Zamonaviy Tish Protezi (Byugel/Neylon)", desc: { uz: "Yengil, milkni qismaydi, qulay", ru: "Бюгельные и гибкие протезы", en: "Modern clasp & flexible dentures" } },
    ],
    durationPerUnit: 30,
    warranty: { uz: "10–15 yil rasmiy kafolat", ru: "Гарантия 10–15 лет", en: "10–15 years warranty" },
    features: [
      { uz: "Raqamli optik 3D skanerlash", ru: "Цифровое 3D-сканирование", en: "Digital 3D scanning" },
      { uz: "Metall qorayishi yo'q", ru: "Без темных ободков у десны", en: "No dark metal borders" },
      { uz: "100% chaynash qulayligi", ru: "100% комфорт при жевании", en: "100% chewing restoration" },
    ],
  },
  {
    id: "implantatsiya",
    serviceId: "implantatsiya",
    image: assets.treatment_implant,
    unitLabel: { uz: "implant dona", ru: "имплант(ов)", en: "implant unit(s)" },
    maxUnits: 10,
    shortTitle: { uz: "Implantatsiya", ru: "Имплантация", en: "Implantation" },
    tagBadge: "🔩 Mega'Gen & AnyRidge",
    icon: <DentalImplantFixture className="w-5 h-5" />,
    badgeTitle: {
      uz: "✦ GERMANIYA VA JANUBIY KOREYA BIOTITAN TIZIMLARI",
      ru: "✦ ПРЕМИАЛЬНЫЙ БИОТИТАН ИЗ ГЕРМАНИИ И КОРЕИ",
      en: "✦ PREMIUM GERMAN & SOUTH KOREAN BIO-TITANIUM",
    },
    title: {
      uz: "Germaniya va Koreya Implantatsiyasi",
      ru: "Дентальная Имплантация (Германия и Корея)",
      en: "German & South Korean Dental Implants",
    },
    desc: {
      uz: "Yo'qotilgan tishlarni Janubiy Koreyaning Mega'Gen hamda Germaniyaning AnyRidge va DXL original biotitan implantlari bilan 15-20 daqiqada 100% og'riqsiz o'rnatish.",
      ru: "Восстановление зубов без обточки соседних оригинальными титановыми имплантами Mega'Gen (Корея), AnyRidge (Германия) и DXL (Германия) за 15-20 минут без боли.",
      en: "Gentle 15-20 minute tooth replacement using genuine biocompatible titanium implants: Mega'Gen (Korea), AnyRidge (Germany), and DXL (Germany) with lifetime warranty.",
    },
    options: [
      { name: "Mega'Gen (Janubiy Koreya)", desc: { uz: "Xpeed kaltsiy nano-qoplama & KnifeThread rezbasi", ru: "Резьба KnifeThread и покрытие Xpeed", en: "Xpeed calcium nano-surface & KnifeThread" } },
      { name: "AnyRidge (AnyRidch Germaniya)", desc: { uz: "Suyakni maksimal asrovchi progressiv arxitektura", ru: "Костесохраняющая система немецкого стандарта", en: "Bone-preserving progressive German design" } },
      { name: "DXL (Germaniya)", desc: { uz: "Sof tibbiy biotitan Grade 4/5 va mikron konus birikma", ru: "Чистый биотитан Grade 4/5 с конусным соединением", en: "Medical Grade 4/5 pure bio-titanium cone" } },
    ],
    durationPerUnit: 20,
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная официальная гарантия", en: "Lifetime official warranty" },
    features: [
      { uz: "Qo'shni tishlar charxlanmaydi", ru: "Без обточки соседних зубов", en: "Adjacent teeth preserved" },
      { uz: "Orablok & Supercain anesteziyasi", ru: "Анестезия Ораблок и Суперкаин", en: "Orabloc & Supercain anesthesia" },
      { uz: "15-20 daqiqada o'rnatish", ru: "Установка за 15-20 минут", en: "15-20 minute placement" },
    ],
  },
  {
    id: "xirurgiya",
    serviceId: "xirurgiya",
    image: assets.treatment_surgery,
    unitLabel: { uz: "tish dona", ru: "зуб(а)", en: "tooth / teeth" },
    maxUnits: 4,
    shortTitle: { uz: "Xirurgiya", ru: "Хирургия", en: "Oral Surgery" },
    tagBadge: "🛡️ Orablok & Supercain",
    icon: <DentalSurgeryExtraction className="w-5 h-5" />,
    badgeTitle: {
      uz: "✦ ATRAVMATIK VA 100% OG'RIQSIZ XIRURGIYA",
      ru: "✦ АТРАВМАТИЧНАЯ ХИРУРГИЯ И УДАЛЕНИЕ БЕЗ БОЛИ",
      en: "✦ ATRAUMATIC & 100% PAIN-FREE SURGERY",
    },
    title: {
      uz: "Atravmatik Jarrohlik va Tish Olish",
      ru: "Атравматичная Хирургия и Удаление Зубов",
      en: "Atraumatic Oral Surgery & Extraction",
    },
    desc: {
      uz: "Murakkab aql tishlari va singan ildizlarni Orablok, Supercain Forte va Artikain anesteziyasi ostida jag' suyagini asrab, 100% og'riqsiz va asoratsiz sug'urish.",
      ru: "Удаление разрушенных зубов и ретинированных восьмерок под анестезией Ораблок, Суперкаин Форте и Артикаин на 100% без боли, с сохранением лунки.",
      en: "Atraumatic socket-preserving extraction of compromised roots and wisdom teeth under Orabloc, Supercain Forte & Articaine without pain or complications.",
    },
    options: [
      { name: "Atravmatik Oddiy Tish Olish", desc: { uz: "Orablok anesteziyasi ostida tezkor mikro-jarrohlik", ru: "Быстрое и бережное удаление под Ораблоком", en: "Swift painless extraction under Orabloc" } },
      { name: "Murakkab Aql Tishi Jarrohligi (8-tish)", desc: { uz: "Supercain Forte anesteziyasi ostida asoratsiz olish", ru: "Сложные восьмерки под Суперкаин Форте", en: "Impacted wisdom tooth under Supercain" } },
    ],
    durationPerUnit: 20,
    warranty: { uz: "Asoratsiz tez bitish nazorati", ru: "Контроль быстрого заживления", en: "Rapid safe socket healing" },
    features: [
      { uz: "Suyak to'qimasi to'liq saqlanadi", ru: "Сохранение костной лунки", en: "Bone socket preserved" },
      { uz: "Tiklanish tez va oson", ru: "Быстрое восстановление", en: "Fast and easy recovery" },
      { uz: "100% og'riqsizlantirish", ru: "100% безболезненно", en: "100% painless anesthesia" },
    ],
  },
  {
    id: "ortodontiya",
    serviceId: "ortodontiya",
    image: assets.treatment_braces,
    unitLabel: { uz: "jag' (yuqori/pastki)", ru: "челюсть (верх/низ)", en: "dental arch" },
    maxUnits: 2,
    shortTitle: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
    tagBadge: "✨ Zamonaviy Breketlar",
    icon: <DentalBracesIcon className="w-5 h-5" />,
    badgeTitle: {
      uz: "✦ ZAMONAVIY ESTETIK BREKETLAR BILAN TEKISLASH",
      ru: "✦ ВЫРАВНИВАНИЕ ЗУБОВ И ПРИКУСА БРЕКЕТАМИ",
      en: "✦ MODERN BITE CORRECTION WITH BRACES",
    },
    title: {
      uz: "Ortodontiya va Breket Tizimlari",
      ru: "Ортодонтия и Современные Брекеты",
      en: "Orthodontics & Modern Braces",
    },
    desc: {
      uz: "Tishlarning qiyshiqligi, orasi ochiqligi (diastema) va murakkab tishlash (prikus) nuqsonlarini zamonaviy metall va keramik breket tizimlari yordamida tekislash.",
      ru: "Исправление кривизны зубов, закрытие межзубных промежутков и выравнивание прикуса современными металлическими и эстетическими брекетами.",
      en: "Comprehensive bite alignment and smile straightening for crooked or crowded teeth using reliable metal and aesthetic ceramic braces.",
    },
    options: [
      { name: "Klassik Metall Breket Tizimi", desc: { uz: "Maksimal mustahkam va tezkor tekislash", ru: "Классическая прочность и быстрый эффект", en: "Classic strength & rapid alignment" } },
      { name: "Estetik Keramik / Sapfir Breketlar", desc: { uz: "Tish rangida, ko'zga tashlanmaydi", ru: "Эстетичные, незаметны на зубах", en: "Discreet tooth-colored brackets" } },
    ],
    durationPerUnit: 45,
    warranty: { uz: "Barqaror to'g'ri natija kafolati", ru: "Стабильный пожизненный результат", en: "Stable lifetime retention" },
    features: [
      { uz: "Tishlash nuqsonlarini to'liq to'g'rilash", ru: "Коррекция любого прикуса", en: "Complete bite correction" },
      { uz: "Har qanday yoshda samarali", ru: "Эффективно в любом возрасте", en: "Effective for all ages" },
      { uz: "Muntazam professional nazorat", ru: "Регулярный контроль врача", en: "Regular clinical follow-up" },
    ],
  },
];

const Interactive3DCostCalculator = () => {
  const { lang } = useLanguage();
  const { openBooking } = useBooking();
  const [selectedId, setSelectedId] = useState("implantatsiya");
  const [units, setUnits] = useState(1);

  // 3D Card Tilt State
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });

  const activeTreatment = treatments.find((t) => t.id === selectedId) || treatments[0];

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 4;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });
  }, []);

  const handleTreatmentChange = (id) => {
    setSelectedId(id);
    setUnits(1);
  };

  const estimatedMinutes = activeTreatment.durationPerUnit * units;
  const formattedDuration =
    estimatedMinutes < 60
      ? `${estimatedMinutes} ${lang === "uz" ? "daqiqa" : lang === "ru" ? "минут" : "mins"}`
      : `${Math.floor(estimatedMinutes / 60)} ${lang === "uz" ? "soat" : lang === "ru" ? "ч" : "hr"}${
          estimatedMinutes % 60 > 0
            ? ` ${estimatedMinutes % 60} ${lang === "uz" ? "daq" : lang === "ru" ? "мин" : "m"}`
            : ""
        }`;

  return (
    <section className="py-12 sm:py-16 bg-white rounded-3xl border border-amber-200/90 shadow-luxury p-4 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/20 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-red-50 text-primary border border-red-200/60 shadow-2xs">
            <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>{lang === "uz" ? "Interaktiv 3D Muolajalar Rejasi" : lang === "ru" ? "Интерактивный 3D План Лечения" : "3D Interactive Treatment Plan"}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A202C] font-serif-classic">
            {lang === "uz"
              ? "Muolajani Tanlang va 3D Rejani Hisoblang"
              : lang === "ru"
              ? "Выберите Услугу и Рассчитайте 3D План"
              : "Select a Specialty & Calculate 3D Treatment Plan"}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === "uz"
              ? "Har bir yo'nalish bo'yicha tishlar sonini tanlang, davomiylik va kafolat parametrlarini real vaqtda ko'ring."
              : lang === "ru"
              ? "Укажите количество единиц или зубов и оцените точные сроки, протокол и официальную гарантию."
              : "Adjust units and explore surgical protocols, materials, and certified warranties in real time."}
          </p>
        </div>

        {/* 5 Specialty 3D Elevated Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2.5 pb-2 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
          {treatments.map((t) => {
            const isSelected = selectedId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleTreatmentChange(t.id)}
                className={`flex shrink-0 whitespace-nowrap items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-primary via-orange-500 to-primary text-white shadow-[0_8px_25px_rgba(255,157,80,0.35)] scale-105 ring-2 ring-primary/30"
                    : "bg-white/95 hover:bg-amber-50/80 text-slate-700 border border-amber-200/80 shadow-2xs hover:scale-[1.02]"
                }`}
              >
                <span className={`transition-transform duration-300 ${isSelected ? "scale-115 text-white" : "text-primary"}`}>
                  {t.icon}
                </span>
                <span className="tracking-tight">{t.shortTitle[lang]}</span>
                <span
                  className={`text-[9.5px] px-2 py-0.5 rounded-full font-extrabold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-amber-100/70 text-slate-600"
                  }`}
                >
                  {t.tagBadge.split(" ")[0]} {t.tagBadge.split(" ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3D Perspective Treatment Stage */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.active ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="relative bg-gradient-to-br from-[#FFFDF9] via-amber-50/40 to-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-amber-200/90 shadow-luxury-lg [transform-style:preserve-3d] overflow-hidden"
        >
          {/* Dynamic Specular Holographic Glare */}
          {tilt.active && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
              style={{
                background: `radial-gradient(circle 450px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.55), transparent 70%)`,
              }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 [transform-style:preserve-3d]">
            {/* Left Info Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6 [transform-style:preserve-3d]">
              {/* Luxury Gradient Sticker */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/15 via-amber-500/15 to-transparent text-primary text-[11px] font-black uppercase tracking-wider border border-primary/25 translate-z-20 shadow-xs">
                <IconSparkleStar className="w-3.5 h-3.5 text-brandOrange" />
                <span>{activeTreatment.badgeTitle[lang]}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 translate-z-20">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif-classic leading-tight">
                  {activeTreatment.title[lang]}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeTreatment.desc[lang]}
                </p>
              </div>

              {/* Interactive Unit Stepper Slider */}
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/80 shadow-2xs space-y-3 translate-z-30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-bold text-slate-800">
                    {lang === "uz" ? "Hisoblash Miqdori:" : lang === "ru" ? "Количество единиц:" : "Procedure Units:"}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={lang === "uz" ? "Kamaytirish" : lang === "ru" ? "Уменьшить" : "Decrease"}
                      onClick={() => setUnits((u) => Math.max(1, u - 1))}
                      disabled={units <= 1}
                      className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-slate-800 text-base font-bold flex items-center justify-center transition-all disabled:opacity-30 cursor-pointer touch-manipulation"
                    >
                      –
                    </button>
                    <span className="font-serif-classic text-xl font-bold text-primary min-w-[2.5rem] text-center select-none">
                      {units}
                    </span>
                    <button
                      type="button"
                      aria-label={lang === "uz" ? "Oshirish" : lang === "ru" ? "Увеличить" : "Increase"}
                      onClick={() => setUnits((u) => Math.min(activeTreatment.maxUnits, u + 1))}
                      disabled={units >= activeTreatment.maxUnits}
                      className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-slate-800 text-base font-bold flex items-center justify-center transition-all disabled:opacity-30 cursor-pointer touch-manipulation"
                    >
                      +
                    </button>
                    <span className="text-xs text-slate-500 font-medium">
                      {activeTreatment.unitLabel[lang]}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-amber-100/60 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-brandOrange h-full rounded-full transition-all duration-300"
                    style={{ width: `${(units / activeTreatment.maxUnits) * 100}%` }}
                  />
                </div>
              </div>

              {/* Certified Materials / Options Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 translate-z-20">
                {activeTreatment.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-amber-200/70 shadow-2xs space-y-1 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-primary">
                      <IconCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{opt.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {opt.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Clinical Features Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-2 translate-z-10">
                {activeTreatment.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/90 border border-amber-200/60 text-[11px] font-semibold text-slate-700 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{feat[lang]}</span>
                  </span>
                ))}
              </div>

              {/* Metrics (Duration & Warranty) */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-amber-200/60 text-xs translate-z-20">
                <div className="flex items-center gap-2 text-slate-700">
                  <IconClock className="w-4 h-4 text-brandOrange" />
                  <span className="font-semibold">{lang === "uz" ? "Klinik Vaqt:" : lang === "ru" ? "Время приёма:" : "Estimated Time:"}</span>
                  <span className="font-bold text-slate-900 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/50">
                    {formattedDuration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <IconShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold">{lang === "uz" ? "Rasmiy Kafolat:" : lang === "ru" ? "Клиническая Гарантия:" : "Warranty:"}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200/50">
                    {activeTreatment.warranty[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action 3D Box (4 cols) with Bespoke Clinical Photo & Frosted Glass Badges */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-luxury flex flex-col justify-between space-y-5 text-center translate-z-30 hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-4">
                {/* Clinical Photo Preview with Frosted Glass Badges (NO HEAVY BLACK BOXES) */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-amber-200/90 shadow-md group">
                  <img
                    src={activeTreatment.image}
                    alt={activeTreatment.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Soft Luxury Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10 pointer-events-none" />

                  {/* Top Frosted Glass Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[11px] font-black tracking-wide shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{activeTreatment.shortTitle[lang]}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black tracking-wide shadow-md border border-amber-300/40">
                      <span>{activeTreatment.tagBadge}</span>
                    </span>
                  </div>

                  {/* Bottom Floating Frosted Glass Control Bar */}
                  <div className="absolute bottom-2.5 inset-x-2.5 z-10 pointer-events-none">
                    <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/90 shadow-md flex items-center justify-between gap-2 text-left">
                      <div className="min-w-0">
                        <p className="text-[9.5px] font-black uppercase tracking-wider text-primary flex items-center gap-1">
                          <IconSparkleStar className="w-3 h-3 text-brandOrange" />
                          <span>{lang === "uz" ? "Stomatolog Orifjon" : lang === "ru" ? "Стоматолог Орифжон" : "Dentist Orifjon"}</span>
                        </p>
                        <p className="text-xs font-bold text-slate-900 truncate mt-0.5">
                          {units} {activeTreatment.unitLabel[lang]} · {formattedDuration}
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-amber-50 text-primary flex items-center justify-center shrink-0 shadow-2xs border border-amber-200">
                        {activeTreatment.icon}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Emerald & Ivory Reassurance Guarantee Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/60 border border-emerald-300/80 text-left space-y-1 shadow-2xs">
                  <p className="text-xs font-extrabold text-emerald-800 flex items-center gap-1.5">
                    <IconShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{activeTreatment.warranty[lang]}</span>
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {lang === "uz"
                      ? "Navbatsiz bepul dastlabki ko'rik, 100% og'riqsizlantirish kafolati va to'liq 3D muolaja rejasi."
                      : lang === "ru"
                      ? "Бесплатная консультация, 100% обезболивание и прозрачный клинический план."
                      : "Zero queue consultation, 100% painless care guarantee and transparent plan."}
                  </p>
                </div>
              </div>

              {/* Magnetic Brand Shimmer Booking Button */}
              <button
                onClick={() => openBooking(activeTreatment.serviceId)}
                className="relative overflow-hidden w-full py-4 rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-orange hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{lang === "uz" ? "Shu Xizmatga Yozilish" : lang === "ru" ? "Записаться на Эту Услугу" : "Book This Service"}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DCostCalculator;
