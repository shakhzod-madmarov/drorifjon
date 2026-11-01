export const CANONICAL_SPECIALTIES = [
  {
    id: "terapiya",
    icon: "terapiya",
    kicker: {
      uz: "100% Og'riqsiz",
      ru: "100% Без боли",
      en: "100% Gentle",
    },
    materials: "Charisma & DenFil",
    uz: "Terapiya va Restavratsiya",
    ru: "Терапия и Реставрация",
    en: "Therapy & Restoration",
    desc: {
      uz: "Karies, pulpit, nerv shamollashi va nano-kompozit restavratsiya",
      ru: "Лечение кариеса, каналов и художественная нанореставрация",
      en: "Cavities, root canals, and aesthetic nano-restoration",
    },
    subOptions: [
      { id: "plomba", uz: "Charisma / DenFil Plomba", ru: "Пломба Charisma / DenFil", en: "Charisma / DenFil Filling" },
      { id: "kanal", uz: "Kanal Davolash (Endodontiya)", ru: "Лечение Каналов", en: "Root Canal Therapy" },
      { id: "restavratsiya", uz: "Badiiy Restavratsiya", ru: "Художественная Реставрация", en: "Aesthetic Restoration" },
    ],
  },
  {
    id: "ortopediya",
    icon: "ortopediya",
    kicker: {
      uz: "CAD/CAM Sirkoniy",
      ru: "CAD/CAM Цирконий",
      en: "CAD/CAM Zirconia",
    },
    materials: "Sirkoniy & Vinirlar",
    uz: "Ortopediya va Protezlash",
    ru: "Ортопедия и Протезирование",
    en: "Orthopedics & Prosthetics",
    desc: {
      uz: "Monolit sirkoniy, IPS E.max vinirlar va sifatli protezlar",
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
    icon: "implantatsiya",
    kicker: {
      uz: "Germaniya & Koreya",
      ru: "Германия и Корея",
      en: "Germany & Korea",
    },
    materials: "Mega'Gen & AnyRidge",
    uz: "Biotitan Implantatsiya",
    ru: "Дентальная Имплантация",
    en: "Dental Implantation",
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
    icon: "xirurgiya",
    kicker: {
      uz: "Atravmatik Jarrohlik",
      ru: "Атравматично",
      en: "Atraumatic Care",
    },
    materials: "Orablok Anesteziya",
    uz: "Atravmatik Tish Olish",
    ru: "Атравматичное Удаление",
    en: "Atraumatic Extraction",
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
    icon: "ortodontiya",
    kicker: {
      uz: "Tabassum Tekislash",
      ru: "Исправление Прикуса",
      en: "Smile Alignment",
    },
    materials: "Breket Tizimlari",
    uz: "Ortodontiya va Breketlar",
    ru: "Ортодонтия и Брекеты",
    en: "Orthodontics & Braces",
    desc: {
      uz: "Qiyshiq tishlarni tekislash va prikus nuqsonlarini to'g'rilash",
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
