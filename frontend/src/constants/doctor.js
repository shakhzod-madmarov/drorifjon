/**
 * Single source of truth for Stomatolog Orifjon (Mansurov Orifjon Alimbekovich)'s credentials, career, and contact info.
 */
export const DOCTOR_INFO = {
  name: "Stomatolog Orifjon",
  brandName: "Stomatolog Orifjon",
  shortName: "Orifjon",
  names: {
    uz: "Stomatolog Orifjon",
    ru: "Стоматолог Орифжон",
    en: "Dentist Orifjon",
  },
  drNames: {
    uz: "Dr. Orifjon",
    ru: "Д-р Орифжон",
    en: "Dr. Orifjon",
  },
  fullName: "Mansurov Orifjon Alimbekovich",
  legalName: "Mansurov Orifbek Alimbekovich",
  fullNames: {
    uz: "Mansurov Orifjon Alimbekovich",
    ru: "Мансуров Орифжон Алимбекович",
    en: "Mansurov Orifjon Alimbekovich",
  },
  legalNames: {
    uz: "Mansurov Orifbek Alimbekovich",
    ru: "Мансуров Орифбек Алимбекович",
    en: "Mansurov Orifbek Alimbekovich",
  },
  title: "Vrach Stomatolog",
  specialtiesText: "Terapiya · Ortopediya · Implantatsiya · Xirurgiya · Ortodontiya",
  specialties: {
    uz: [
      "Terapiya va Badiiy Restavratsiya",
      "Ortopediya va Sirkon Protezlash",
      "Dental Implantologiya",
      "Atravmatik Jarrohlik",
      "Ortodontiya va Breket Tizimlari",
    ],
    ru: [
      "Терапия и Художественная Реставрация",
      "Ортопедия и Циркониевое Протезирование",
      "Дентальная Имплантация",
      "Атравматичная Хирургия",
      "Ортодонтия и Брекет-Системы",
    ],
    en: [
      "Therapy & Aesthetic Restoration",
      "Orthopedics & Zirconia Prosthetics",
      "Dental Implantology",
      "Atraumatic Oral Surgery",
      "Orthodontics & Modern Braces",
    ],
  },
  careerStartYear: 2001, // 20+ years of healthcare experience since medical college
  dentalDegreeYear: 2022,
  education: {
    college: {
      uz: "Andijon Tibbiyot kolleji (2001–2004)",
      ru: "Андижанский медицинский колледж (2001–2004)",
      en: "Andijan Medical College (2001–2004)",
    },
    university: {
      uz: "O'sh Davlat Universiteti (2017–2022)",
      ru: "Ошский Государственный Университет (2017–2022)",
      en: "Osh State University (2017–2022)",
    },
    uz: "Andijon Tibbiyot kolleji (2001–2004) & O'sh Davlat Universiteti (2017–2022)",
    ru: "Андижанский медицинский колледж (2001–2004) и Ошский Государственный Университет (2017–2022)",
    en: "Andijan Medical College (2001–2004) & Osh State University (2017–2022)",
  },
  degree: {
    uz: "Vrach Stomatolog",
    ru: "Врач-Стоматолог",
    en: "Doctor of Dental Medicine",
  },
  phone: "+998 (90) 548-10-90",
  phoneDisplay: "+998 90 548 10 90",
  phoneHref: "tel:+998905481090",
  phoneRaw: "+998905481090",
  secondaryPhone: "+998 (99) 905-30-90",
  secondaryPhoneDisplay: "+998 99 905 30 90",
  secondaryPhoneHref: "tel:+998999053090",
  secondaryPhoneRaw: "+998999053090",
  phones: [
    {
      display: "+998 90 548 10 90",
      raw: "+998905481090",
      href: "tel:+998905481090",
      primary: true,
      label: { uz: "Asosiy", ru: "Основной", en: "Primary" },
    },
    {
      display: "+998 99 905 30 90",
      raw: "+998999053090",
      href: "tel:+998999053090",
      primary: false,
      label: { uz: "Qo'shimcha", ru: "Дополнительный", en: "Additional" },
    },
  ],
  telegramUrl: "https://t.me/dr_orifjon_1",
  telegramHandle: "@dr_orifjon_1",
  instagramUrl: "https://www.instagram.com/dr_orifjon/",
  instagramHandle: "@dr_orifjon",
  technologies: {
    uz: "Charisma (Germaniya) va DenFil (Koreya) plombalari, Orablok va Supercain Forte anesteziyasi, Mega'Gen (Koreya), AnyRidge va DXL (Germaniya) implantlari, 3D optik skanerlash",
    ru: "Пломбы Charisma (Германия) и DenFil (Корея), анестетики Ораблок и Суперкаин Форте, импланты Mega'Gen (Корея), AnyRidge и DXL (Германия), 3D-сканирование",
    en: "Charisma (Germany) & DenFil (Korea) composites, Orabloc & Supercain Forte anesthesia, Mega'Gen (Korea), AnyRidge & DXL (Germany) implants, 3D optical scanning",
  },
  clinicalMaterials: {
    composites: [
      {
        id: "charisma",
        brand: "Charisma (Харизма)",
        manufacturer: "Kulzer Dental",
        country: "Germaniya (Germany)",
        flag: "🇩🇪",
        title: {
          uz: "Charisma (Germaniya) — Badiiy Restavratsiya & Mikro-shisha Kompoziti",
          ru: "Charisma (Германия) — Художественная реставрация & Микростекольный композит",
          en: "Charisma (Germany) — Aesthetic Microglass Submicron Composite",
        },
        desc: {
          uz: "Kulzer (Germaniya) kompaniyasining afsonaviy submikron kompoziti. Tish emalining tabiiy nur sinishiga 100% moslashuvchi 'xameleon' effekti, ko'zgu jilosi darajasida silliqlanishi va 10-15 yillik yemirilishsiz mustahkamligi.",
          ru: "Легендарный немецкий микростекольный нанокомпозит от Kulzer. Эффект 'хамелеона' для идеального слияния с цветом своей эмали, зеркальный блеск и долговечность без истирания более 10-15 лет.",
          en: "Renowned German submicron microglass composite from Kulzer. Natural chameleon optical blending, high polish retention, and exceptional 10-15 year durability for anterior and posterior teeth.",
        },
        badge: {
          uz: "Nemis Sifat Standarti",
          ru: "Немецкий стандарт качества",
          en: "German Quality Benchmark",
        },
      },
      {
        id: "denfil",
        brand: "DenFil (Денфил)",
        manufacturer: "Vericom Co., Ltd.",
        country: "Janubiy Koreya (South Korea)",
        flag: "🇰🇷",
        title: {
          uz: "DenFil (Janubiy Koreya) — Yuqori Zichlikdagi Mikro-Gibrid Plomba",
          ru: "DenFil (Южная Корея) — Сверхпрочный микрогибридный композит",
          en: "DenFil (South Korea) — High-Strength Micro-Hybrid Restorative Resin",
        },
        desc: {
          uz: "Vericom (Janubiy Koreya) kompaniyasining yuqori anorganik to'ldiruvchiga (80%+) ega nurlanuvchi mikro-gibrid kompoziti. 300 MPa dan ortiq chaynash bosimiga bardoshliligi va mikroskopik past qisqarish darajasi (1.6%).",
          ru: "Светоотверждаемый микрогибридный композит премиум-класса от Vericom (Корея). Выдерживает колоссальные жевательные нагрузки (более 300 МПа) с минимальной полимеризационной усадкой.",
          en: "Premium Korean light-cured micro-hybrid composite by Vericom with 80%+ inorganic filler load, outstanding 300+ MPa compressive strength, and minimal polymerization shrinkage (< 1.6%).",
        },
        badge: {
          uz: "Janubiy Koreya Biotexnologiyasi",
          ru: "Биотехнологии Южной Кореи",
          en: "Korean Biotechnology",
        },
      },
    ],
    anesthetics: [
      {
        id: "supercain",
        brand: "Supercain Forte (Суперкаин форте)",
        formula: "Articaine 4% + Epinephrine 1:100,000",
        country: "Xalqaro Farmatsevtika Standarti",
        flag: "⚡",
        title: {
          uz: "Supercain Forte — Chuqur va Tezkor Og'riqsizlantirish",
          ru: "Суперкаин Форте — Глубокая и быстрая пульпарная анестезия",
          en: "Supercain Forte — Rapid-Onset Deep Pulpal Anesthesia",
        },
        desc: {
          uz: "Artikain va epinefrinning kuchaytirilgan muvozanatli formulasi. 1-2 daqiqada to'liq muzlatadi, chuqur pulpit va murakkab ildiz kanallarini tozalashda 100% og'riq sezgisini yo'qotadi.",
          ru: "Усиленная комбинация артикаина и эпинефрина (1:100 000). Действует уже через 1–2 минуты, гарантируя абсолютное отсутствие боли при пульпите и лечении корневых каналов.",
          en: "Potent articaine 4% formulation with epinephrine 1:100,000 for rapid 1-2 minute onset and deep pulpal analgesia during complex root canal treatments.",
        },
        badge: {
          uz: "Tezkor 1-2 daqiqa",
          ru: "Быстрое действие 1-2 мин",
          en: "Rapid 1-2 Min Onset",
        },
      },
      {
        id: "articaine",
        brand: "Artikain (Артикаин)",
        formula: "Articaine Hydrochloride 4%",
        country: "Oltin Jahon Standarti",
        flag: "🛡️",
        title: {
          uz: "Artikain — Stomatologiyada Oltin Xavfsizlik Standarti",
          ru: "Артикаин — Золотой мировой стандарт безопасности",
          en: "Articaine — Gold Standard in Dental Local Anesthesia",
        },
        desc: {
          uz: "Lidokainga nisbatan suyak to'qimasiga 5 barobar yaxshiroq kirib boradi. Qonda tez parchalanadi (yarim chiqish davri atigi 20 daqiqa), jigar va organizmga ortiqcha yuklama bermaydi.",
          ru: "В 5 раз превосходит лидокаин по диффузии в костную ткань. Быстро расщепляется в плазме крови (период полувыведения всего 20 минут), максимально безопасен для организма.",
          en: "5x superior bone tissue diffusion compared to lidocaine. Rapid plasma clearance (20 min half-life), ensuring minimal systemic burden and exceptional clinical safety.",
        },
        badge: {
          uz: "Maksimal Xavfsizlik",
          ru: "Максимальная безопасность",
          en: "Maximum Patient Safety",
        },
      },
      {
        id: "orablok",
        brand: "Orablok (Ораблок)",
        manufacturer: "Pierrel S.p.A. (Yevropa)",
        country: "Italiya / Yevropa Ittifoqi (EU)",
        flag: "🇪🇺",
        title: {
          uz: "Orablok — Shaxsiy Blisterdagi Ultra-toza Yevropa Karpulasi",
          ru: "Ораблок (Orabloc) — Европейский карпульный анестетик в стерильном блистере",
          en: "Orabloc — Ultra-Pure European Blister-Sealed Glass Carpules",
        },
        desc: {
          uz: "Pierrel (Italiya/Yevropa) farmatsevtika zavodida ishlab chiqarilgan. Har bir shisha karpula alohida steril blisterda saqlanadi. Konservantlarsiz toza tarkib, milkka kiritilganda mutlaqo achishmaydi.",
          ru: "Произведён по строжайшим стандартам GMP в Италии (Pierrel). Каждая стеклянная карпула упакована в индивидуальный стерильный блистер. Не жжёт десну при введении.",
          en: "Manufactured under strict European GMP standards by Pierrel. Sterile individual blister packs protect each glass carpule, delivering smooth, non-burning tissue infiltration.",
        },
        badge: {
          uz: "Yevropa Steril Blisteri",
          ru: "Стерильный евро-блистер",
          en: "Sterile European Blister",
        },
      },
    ],
    implants: [
      {
        id: "megagen",
        brand: "Mega'Gen (Мегаджен)",
        manufacturer: "MegaGen Implant Co., Ltd.",
        country: "Janubiy Koreya (South Korea)",
        flag: "🇰🇷",
        title: {
          uz: "Mega'Gen (Koreya) — Xpeed & KnifeThread Texnologiyasi",
          ru: "Mega'Gen (Корея) — Технология KnifeThread & Покрытие Xpeed",
          en: "Mega'Gen (Korea) — Patented KnifeThread & Xpeed Technology",
        },
        desc: {
          uz: "Dunyoning 100 dan ortiq mamlakatlarida tan olingan innovatsion Janubiy Koreya implantlari. Kaltsiy ionlari bilan boyitilgan nano-sirt suyak bitishini 2 barobar tezlashtiradi, patentlangan KnifeThread rezbasi esa yumshoq suyakda ham tishni mustahkam ushlaydi.",
          ru: "Мировой лидер корейской имплантологии. Нанопокрытие Xpeed с ионами кальция ускоряет остеоинтеграцию в 2 раза, а ножницевидная резьба KnifeThread обеспечивает первичную стабильность даже в мягкой кости.",
          en: "World-leading South Korean implant system. Xpeed calcium-incorporated nano-surface cuts healing time in half, while knife-edge threads guarantee rock-solid initial stability for immediate loading.",
        },
        badge: {
          uz: "99.5% Suyak Integratsiyasi",
          ru: "Приживаемость 99.5%",
          en: "99.5% Osseointegration",
        },
      },
      {
        id: "anyridge",
        brand: "AnyRidge (AnyRidch Germaniya)",
        manufacturer: "MegaGen Europe / AnyRidge German Standard",
        country: "Germaniya & Koreya hamkorligi",
        flag: "🇩🇪",
        title: {
          uz: "AnyRidge (AnyRidch Germaniya) — Suyakni Maksimal Asrovchi Premium Tizim",
          ru: "AnyRidge (AnyRidch Германия) — Премиум-система максимального сохранения кости",
          en: "AnyRidge (AnyRidch Germany) — Bone-Preserving Premium Implant Architecture",
        },
        desc: {
          uz: "Yevropa va Germaniya biotitan standartlariga asoslangan progressiv tizim. Jag' suyagini ortiqcha parmalashsiz (minimal burg'ulash bilan) o'rnatiladi, suyak to'qimasini tabiiy saqlaydi va bir kunda doimiy tish o'rnatish imkonini beradi.",
          ru: "Флагманская система, сертифицированная по европейским и немецким стандартам. Требует минимального сверления кости, предотвращает резорбцию и идеально подходит для одномоментной нагрузки.",
          en: "Premium architecture engineered to high European and German standards. Requires minimal osteotomy drilling, preserves crestal cortical bone, and allows same-day immediate functional loading.",
        },
        badge: {
          uz: "Suyakni Saqlovchi Rezba",
          ru: "Костесохраняющая резьба",
          en: "Bone-Preserving Architecture",
        },
      },
      {
        id: "dxl",
        brand: "DXL (Германия)",
        manufacturer: "DXL Dental eXcellence Germany",
        country: "Germaniya (Germany)",
        flag: "🇩🇪",
        title: {
          uz: "DXL (Germaniya) — Aniq Nemis Muhandisligi va Sof Biotitan",
          ru: "DXL (Германия) — Немецкая точность и чистый медицинский биотитан",
          en: "DXL (Germany) — High-Precision German Engineering & Pure Bio-Titanium",
        },
        desc: {
          uz: "Germaniyada ishlab chiqarilgan yuqori toifali tibbiy biotitan (Grade 4/5) implantlari. Mikron aniqlikdagi konus ulanish (Micro-Cone Connection) mikroblar kirishining oldini oladi va suyak chetida qorayishsiz umrbod kafolat beradi.",
          ru: "Оригинальные немецкие импланты из медицинского биотитана Grade 4/5. Конусное микронное соединение с абатментом полностью исключает микроподвижность и краевую резорбцию кости.",
          en: "Genuine German-manufactured medical Grade 4/5 bio-titanium implants. Precision Morse-taper cone connection eliminates micro-gap leakage and preserves biological bone width for a lifetime.",
        },
        badge: {
          uz: "Nemis Muhandisligi · Umrbod",
          ru: "Немецкая инженерия · Пожизненно",
          en: "German Engineering · Lifetime",
        },
      },
    ],
  },
};

export const getYearsOfExperience = () => 20;

export const getExperienceText = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `Более ${years} лет в медицине и стоматологии`;
  if (lang === "en") return `Over ${years}+ Years in Healthcare & Dentistry`;
  return `${years}+ yillik tibbiyot va stomatologiya tajribasi`;
};

export const getExperienceBadge = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years}+ Лет Опыта`;
  if (lang === "en") return `${years}+ Years Experience`;
  return `${years}+ Yillik Tajriba`;
};

export const getHeroTag = (lang = "uz") => {
  if (lang === "ru") return "Врач-Стоматолог · Ошский Государственный Университет · Андижанский мед. колледж";
  if (lang === "en") return "Dentist · Osh State University · Andijan Medical College";
  return "Vrach-Stomatolog · O'sh Davlat Universiteti · Andijon Tibbiyot Kolleji";
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years}+ ЛЕТ В СФЕРЕ ЗДРАВООХРАНЕНИЯ · ВСЕ ВИДЫ СТОМАТОЛОГИИ`;
  if (lang === "en") return `${years}+ YEARS CLINICAL EXCELLENCE · ALL SPECIALTIES`;
  return `${years}+ YILLIK TAJRIBA · BARCHA ZAMONAVIY STOMATOLOGIK XIZMATLAR`;
};

export const getDoctorBrandName = (lang = "uz") => {
  if (lang === "ru") return "Стоматолог Орифжон";
  if (lang === "en") return "Dentist Orifjon";
  return "Stomatolog Orifjon";
};
