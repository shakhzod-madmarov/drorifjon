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
    shortTitle: { uz: "1. Terapiya", ru: "1. Терапия", en: "1. Therapy" },
    icon: <DentalToothMolar className="w-5 h-5" />,
    badgeTitle: {
      uz: "100% OG'RIQSIZ DAVOLASH & BADIIY RESTAVRATSIYA",
      ru: "100% БЕЗБОЛЕЗНЕННОЕ ЛЕЧЕНИЕ И РЕСТАВРАЦИЯ",
      en: "100% PAINLESS TREATMENT & RESTORATION",
    },
    title: {
      uz: "Terapiya (Tishlarni og'riqsiz davolash va restavratsiya)",
      ru: "Терапия (Безболезненное лечение и реставрация зубов)",
      en: "Therapy (Painless Tooth Treatment & Aesthetic Restoration)",
    },
    desc: {
      uz: "Karies, chuqur karies, pulpit va nerv yallig'lanishini 2 bosqichli mikro-anesteziya ostida davolash. Germaniya va Yaponiya nanokompozitlari bilan tabiiy tish shaklini badiiy tiklash.",
      ru: "Лечение кариеса любой сложности и каналов под комфортной двухэтапной анестезией без боли. Художественная реставрация формы зуба нанокомпозитами из Германии и Японии.",
      en: "Gentle treatment of cavities and root canals under two-stage micro-anesthesia, with artistic nanocomposite restoration of natural tooth contours.",
    },
    options: [
      { name: "Kariesni Og'riqsiz Davolash", desc: { uz: "Germaniya nanokompozit plombasi", ru: "Пломбирование нанокомпозитом (Германия)", en: "German nanocomposite filling" } },
      { name: "Pulpit & Kanal Davolash (Endodontiya)", desc: { uz: "3D germetik steril plombalash", ru: "3D-обтурация корневых каналов", en: "3D hermetic root canal sealing" } },
      { name: "Badiiy Nano-Restavratsiya", desc: { uz: "Tabiiy tish anatomiyasi va emal jilosi", ru: "Воссоздание живой анатомии зуба", en: "Natural tooth enamel anatomy rebuild" } },
    ],
    durationPerUnit: 35,
    warranty: { uz: "Rasmiy sifat kafolati", ru: "Официальная гарантия", en: "Official quality warranty" },
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
    shortTitle: { uz: "2. Ortopediya", ru: "2. Ортопедия", en: "2. Orthopedics" },
    icon: <DentalVeneerCrown className="w-5 h-5" />,
    badgeTitle: {
      uz: "YUQORI SIFATLI TISH QO'YISH & PROTEZLASH",
      ru: "ВЫСОКОТОЧНОЕ ПРОТЕЗИРОВАНИЕ И УСТАНОВКА ЗУБОВ",
      en: "PRECISION TOOTH REPLACEMENT & PROSTHETICS",
    },
    title: {
      uz: "Ortopediya (Yuqori sifatli tish qo'yish, protezlash)",
      ru: "Ортопедия (Высококачественное протезирование и установка зубов)",
      en: "Orthopedics (High-Quality Tooth Placement & Prosthetics)",
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
    shortTitle: { uz: "3. Implantatsiya", ru: "3. Имплантация", en: "3. Implantation" },
    icon: <DentalImplantFixture className="w-5 h-5" />,
    badgeTitle: {
      uz: "GERMANIYA VA JANUBIY KOREYA BIOTITAN TIZIMLARI",
      ru: "ПРЕМИАЛЬНЫЕ СИСТЕМЫ ИЗ ГЕРМАНИИ И ЮЖНОЙ КОРЕИ",
      en: "PREMIUM GERMAN & SOUTH KOREAN IMPLANT SYSTEMS",
    },
    title: {
      uz: "Implantatsiya (Germaniya va Koreya mahsulotlari)",
      ru: "Имплантация (Премиальные импланты из Германии и Кореи)",
      en: "Implantation (German & Korean Premium Systems)",
    },
    desc: {
      uz: "Yo'qotilgan tishlarni qo'shni tishlarga ziyon yetkazmasdan, Germaniya va Janubiy Koreyaning original sertifikatlangan biotitan implantlari bilan 15-20 daqiqada og'riqsiz o'rnatish.",
      ru: "Восстановление утраченных зубов без обточки соседних оригинальными титановыми имплантатами из Германии и Кореи за 15-20 минут без боли.",
      en: "Gentle 15-20 minute tooth replacement using genuine biocompatible titanium implants from Germany and South Korea with lifetime warranty.",
    },
    options: [
      { name: "Janubiy Koreya Biotitan Tizimi", desc: { uz: "Tezkor suyak integratsiyasi, 99.5% muvaffaqiyat", ru: "Высокая приживаемость, проверенное качество", en: "Fast osseointegration, 99.5% success" } },
      { name: "Germaniya Premium Biotitan Tizimi", desc: { uz: "Maksimal barqarorlik va umrbod zavod kafolati", ru: "Немецкая точность и пожизненная гарантия", en: "German precision with lifetime warranty" } },
    ],
    durationPerUnit: 20,
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    features: [
      { uz: "Qo'shni tishlar charxlanmaydi", ru: "Без обточки соседних зубов", en: "Adjacent teeth preserved" },
      { uz: "100% og'riqsiz anesteziya", ru: "100% безболезненно", en: "100% painless procedure" },
      { uz: "15-20 daqiqada o'rnatish", ru: "Установка за 15-20 минут", en: "15-20 minute placement" },
    ],
  },
  {
    id: "xirurgiya",
    serviceId: "xirurgiya",
    image: assets.treatment_surgery,
    unitLabel: { uz: "tish dona", ru: "зуб(а)", en: "tooth / teeth" },
    maxUnits: 4,
    shortTitle: { uz: "4. Xirurgiya", ru: "4. Хирургия", en: "4. Surgery" },
    icon: <DentalSurgeryExtraction className="w-5 h-5" />,
    badgeTitle: {
      uz: "OG'RIQSIZ & ASORATSIZ ATRAVMATIK XIRURGIYA",
      ru: "БЕЗБОЛЕЗНЕННОЕ УДАЛЕНИЕ ЗУБОВ БЕЗ ОСЛОЖНЕНИЙ",
      en: "PAINLESS & COMPLICATION-FREE ATRAUMATIC SURGERY",
    },
    title: {
      uz: "Xirurgiya (Og'riqsiz va asoratsiz tish olish)",
      ru: "Хирургия (Безболезненное и атравматичное удаление зубов без осложнений)",
      en: "Surgery (Painless & Complication-Free Tooth Extraction)",
    },
    desc: {
      uz: "Murakkab aql tishlari (8-tishlar) va singan ildizlarni jag' suyagini shikastlamasdan, atravmatik usulda mutlaqo og'riqsiz va asoratlarsiz sug'urish.",
      ru: "Бережное атравматичное удаление разрушенных зубов и сложных ретинированных восьмерок без боли, повреждения кости и осложнений.",
      en: "Atraumatic socket-preserving extraction of severely compromised roots and wisdom teeth without pain or complications.",
    },
    options: [
      { name: "Atravmatik Oddiy Tish Olish", desc: { uz: "Tezkor, og'riqsiz mikro-jarrohlik", ru: "Быстрое и бережное удаление", en: "Swift painless extraction" } },
      { name: "Murakkab Aql Tishi Jarrohligi (8-tish)", desc: { uz: "Yotgan yoki milk ostidagi aql tishini olish", ru: "Сложные ретинированные восьмерки", en: "Impacted wisdom tooth extraction" } },
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
    shortTitle: { uz: "5. Ortodontiya", ru: "5. Ортодонтия", en: "5. Orthodontics" },
    icon: <DentalBracesIcon className="w-5 h-5" />,
    badgeTitle: {
      uz: "NOTEKIS TISHLARNI BREKETLAR BILAN TO'G'RILASH",
      ru: "ВЫРАВНИВАНИЕ ЗУБОВ И ПРИКУСА БРЕКЕТАМИ",
      en: "ALIGNMENT OF CROOKED TEETH WITH BRACES",
    },
    title: {
      uz: "Ortodontiya (Qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash)",
      ru: "Ортодонтия (Исправление прикуса и выравнивание кривых зубов брекетами)",
      en: "Orthodontics (Bite Correction & Alignment of Crooked Teeth with Braces)",
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

        {/* 9 Specialty 3D Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-2 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
          {treatments.map((t) => {
            const isSelected = selectedId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleTreatmentChange(t.id)}
                className={`flex shrink-0 whitespace-nowrap items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white shadow-luxury scale-105 ring-2 ring-primary/20"
                    : "bg-amber-50/70 hover:bg-amber-100/70 text-slate-700 border border-amber-200/50 hover:scale-[1.02]"
                }`}
              >
                <span className={`transition-transform duration-300 ${isSelected ? "scale-110" : ""}`}>
                  {t.icon}
                </span>
                <span>{t.shortTitle[lang]}</span>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/15 via-amber-500/15 to-transparent text-primary text-[11px] font-black uppercase tracking-wider border border-primary/25 translate-z-20 shadow-xs">
                <IconSparkleStar className="w-3.5 h-3.5 text-brandOrange" />
                <span>{activeTreatment.badgeTitle[lang]}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 translate-z-20">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-classic leading-tight">
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
                      onClick={() => setUnits((u) => Math.max(1, u - 1))}
                      disabled={units <= 1}
                      className="w-8 h-8 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-slate-800 font-bold flex items-center justify-center transition-all disabled:opacity-30 cursor-pointer"
                    >
                      –
                    </button>
                    <span className="font-serif-classic text-xl font-bold text-primary min-w-[2.5rem] text-center">
                      {units}
                    </span>
                    <button
                      onClick={() => setUnits((u) => Math.min(activeTreatment.maxUnits, u + 1))}
                      disabled={units >= activeTreatment.maxUnits}
                      className="w-8 h-8 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-slate-800 font-bold flex items-center justify-center transition-all disabled:opacity-30 cursor-pointer"
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
                  <span className="font-bold text-slate-900 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/50">
                    {formattedDuration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <IconShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold">{lang === "uz" ? "Rasmiy Kafolat:" : lang === "ru" ? "Клиническая Гарантия:" : "Warranty:"}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200/50">
                    {activeTreatment.warranty[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action 3D Box (4 cols) with Clinical Photo & Stickers */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl bg-white border border-amber-200 shadow-luxury flex flex-col justify-between space-y-5 text-center translate-z-30 hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-3.5">
                {/* Clinical Photo Preview with Frosted Glass Badges */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-amber-200/90 shadow-md group">
                  <img
                    src={activeTreatment.image}
                    alt={activeTreatment.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white/95 border border-white/20 text-[10px] font-semibold tracking-wide shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{activeTreatment.shortTitle[lang]}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-left z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-amber-200 uppercase tracking-wider">
                        {lang === "uz" ? "Dr. Mansurov O.A." : lang === "ru" ? "Д-р Мансуров О.А." : "Dr. Mansurov O.A."}
                      </p>
                      <p className="text-xs font-bold text-white truncate">
                        {units} {activeTreatment.unitLabel[lang]} · {formattedDuration}
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-primary flex items-center justify-center shrink-0 shadow-sm">
                      {activeTreatment.icon}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-left space-y-1">
                  <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                    <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{activeTreatment.warranty[lang]}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 leading-snug">
                    {lang === "uz"
                      ? "Navbatsiz bepul dastlabki ko'rik va to'liq 3D muolaja rejasi."
                      : lang === "ru"
                      ? "Бесплатная первичная консультация и наглядный расчет."
                      : "Zero queue consultation and transparent clinical roadmap."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => openBooking(activeTreatment.serviceId)}
                className="relative overflow-hidden w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-luxury transition-all cursor-pointer hover:shadow-luxury-lg hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{lang === "uz" ? "Shu Xizmatga Yozilish" : lang === "ru" ? "Записаться на Услугу" : "Book This Service"}</span>
                  <span>→</span>
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
