export const CANONICAL_SPECIALTIES = [
  {
    id: "terapiya",
    icon: "🦷",
    kicker: {
      uz: "✦ 100% OG'RIQSIZ",
      ru: "✦ 100% БЕЗ БОЛИ",
      en: "✦ 100% PAIN-FREE",
    },
    materials: "🇩🇪 Charisma & 🇰🇷 DenFil",
    uz: "Terapiya va Badiiy Restavratsiya",
    ru: "Терапия и Художественная Реставрация",
    en: "Therapy & Aesthetic Restoration",
    desc: {
      uz: "Karies, pulpit, nerv shamollashi va kompozit restavratsiya",
      ru: "Лечение кариеса, каналов и художественная реставрация",
      en: "Cavities, pulpitis, root canals & artistic restoration",
    },
    subOptions: [
      { id: "plomba", uz: "Charisma / DenFil Plomba", ru: "Пломба Charisma / DenFil", en: "Charisma / DenFil Filling" },
      { id: "kanal", uz: "Kanal Davolash (Endodontiya)", ru: "Лечение Каналов", en: "Root Canal Therapy" },
      { id: "restavratsiya", uz: "Badiiy Restavratsiya", ru: "Художественная Реставрация", en: "Aesthetic Restoration" },
    ],
  },
  {
    id: "ortopediya",
    icon: "👑",
    kicker: {
      uz: "✦ CAD/CAM SIRKONIY",
      ru: "✦ CAD/CAM ЦИРКОНИЙ",
      en: "✦ CAD/CAM ZIRCONIA",
    },
    materials: "💎 Monolit Sirkon & Vinir",
    uz: "Ortopediya va Sirkon Protezlash",
    ru: "Ортопедия и Циркониевое Протезирование",
    en: "Orthopedics & Zirconia Prosthetics",
    desc: {
      uz: "Monolit sirkoniy, IPS E.max vinirlar va zamonaviy protezlar",
      ru: "Монолитный цирконий, виниры E.max и удобные протезы",
      en: "Monolithic zirconia, E.max veneers & precision dentures",
    },
    subOptions: [
      { id: "sirkon", uz: "Monolit Sirkon Karonka", ru: "Циркониевая Коронка", en: "Monolithic Zirconia Crown" },
      { id: "vinir", uz: "IPS E.max Keramik Vinir", ru: "Керамический Винир E.max", en: "IPS E.max Ceramic Veneer" },
      { id: "protez", uz: "Zamonaviy Tish Protezi", ru: "Съемный / Бюгельный Протез", en: "Modern Dental Prosthetic" },
    ],
  },
  {
    id: "implantatsiya",
    icon: "🔩",
    kicker: {
      uz: "✦ GERMANIYA & KOREYA",
      ru: "✦ ГЕРМАНИЯ И КОРЕЯ",
      en: "✦ GERMANY & KOREA",
    },
    materials: "🔩 Mega'Gen, AnyRidge & DXL",
    uz: "Germaniya va Koreya Implantatsiyasi",
    ru: "Дентальная Имплантация из Германии и Кореи",
    en: "German & South Korean Dental Implants",
    desc: {
      uz: "Qo'shni tishlarni asrab, 15-20 daqiqada og'riqsiz o'rnatish",
      ru: "Установка титановых имплантов за 15–20 минут без боли",
      en: "Gentle 15-20 min titanium implant placement with zero pain",
    },
    subOptions: [
      { id: "megagen", uz: "Mega'Gen (Janubiy Koreya)", ru: "Mega'Gen (Южная Корея)", en: "Mega'Gen (South Korea)" },
      { id: "anyridge", uz: "AnyRidge (AnyRidch Germaniya)", ru: "AnyRidge (Германия)", en: "AnyRidge (Germany)" },
      { id: "dxl", uz: "DXL Biotitan (Germaniya)", ru: "DXL Биотитан (Германия)", en: "DXL Bio-Titanium (Germany)" },
    ],
  },
  {
    id: "xirurgiya",
    icon: "🛡️",
    kicker: {
      uz: "✦ ATRAVMATIK XIRURGIYA",
      ru: "✦ АТРАВМАТИЧНАЯ ХИРУРГИЯ",
      en: "✦ ATRAUMATIC SURGERY",
    },
    materials: "💉 Orablok & Supercain",
    uz: "Atravmatik Jarrohlik va Tish Olish",
    ru: "Атравматичная Хирургия и Удаление Зубов",
    en: "Atraumatic Oral Surgery & Extraction",
    desc: {
      uz: "Murakkab aql tishlari va ildizlarni 100% og'riqsiz sug'urish",
      ru: "Бережное удаление зубов и ретинированных восьмерок",
      en: "Socket-preserving gentle removal of damaged or wisdom teeth",
    },
    subOptions: [
      { id: "oddiy-olish", uz: "Atravmatik Oddiy Tish Olish", ru: "Простое Атравматичное Удаление", en: "Gentle Simple Extraction" },
      { id: "aql-tishi", uz: "Murakkab Aql Tishi (8-tish)", ru: "Сложный Зуб Мудрости (8-ка)", en: "Impacted Wisdom Tooth" },
    ],
  },
  {
    id: "ortodontiya",
    icon: "✨",
    kicker: {
      uz: "✦ MUKAMMAL TABASSUM",
      ru: "✦ ИДЕАЛЬНЫЙ ПРИКУС",
      en: "✦ PERFECT BITE",
    },
    materials: "✨ Metall, Keramika & Sapfir",
    uz: "Ortodontiya va Breket Tizimlari",
    ru: "Ортодонтия и Современные Брекеты",
    en: "Orthodontics & Modern Braces",
    desc: {
      uz: "Qiyshiq tishlarni tekislash va prikus nuqsonlarini davolash",
      ru: "Исправление прикуса и кривизны зубов брекетами и элайнерами",
      en: "Smile alignment and bite correction with modern braces & aligners",
    },
    subOptions: [
      { id: "metall-breket", uz: "Klassik Metall Breket", ru: "Металлические Брекеты", en: "Classic Metal Braces" },
      { id: "keramika-breket", uz: "Estetik Keramika / Sapfir", ru: "Керамические / Сапфировые", en: "Ceramic / Sapphire Braces" },
      { id: "elayner", uz: "Ko'rinmas Shaffof Elaynerlar", ru: "Прозрачные Элайнеры (Капы)", en: "Clear Invisible Aligners" },
    ],
  },
];

/* Alias resolver for deep links or query parameters */
export const resolveCanonicalServiceId = (serviceId) => {
  if (!serviceId) return "implantatsiya";
  const sid = String(serviceId).toLowerCase().trim();
  if (sid.includes("implant")) return "implantatsiya";
  if (sid.includes("breket") || sid.includes("elayner") || sid.includes("ortodont")) return "ortodontiya";
  if (sid.includes("sirkon") || sid.includes("vinir") || sid.includes("karonk") || sid.includes("protez") || sid.includes("ortoped")) return "ortopediya";
  if (sid.includes("olish") || sid.includes("xirurg") || sid.includes("jarroh") || sid.includes("extraction")) return "xirurgiya";
  if (sid.includes("terapiy") || sid.includes("davolash") || sid.includes("plomba") || sid.includes("karies") || sid.includes("oqartirish")) return "terapiya";
  return CANONICAL_SPECIALTIES.some((s) => s.id === sid) ? sid : "implantatsiya";
};

/* Backwards-compatibility CLASSIC_SERVICES export */
export const CLASSIC_SERVICES = CANONICAL_SPECIALTIES.map((s) => ({
  id: s.id,
  uz: s.uz,
  ru: s.ru,
  en: s.en,
  icon: s.icon,
  kicker: s.kicker,
  materials: s.materials,
  desc: s.desc,
  subOptions: s.subOptions,
}));
