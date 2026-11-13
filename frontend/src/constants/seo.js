import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drorifjon.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Stomatolog Orifjon (Mansurov Orifjon) — Zamonaviy Stomatologiya | Andijon",
      description: `Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) qabuli. ${years}+ yillik tibbiyot tajribasi. Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi. Terapiya (Charisma, DenFil), ortopediya (sirkon karonkalar, vinirlar), Germaniya va Koreya implantatsiyasi, xirurgiya hamda ortodontiya (breketlar). Muqimiy ko'chasi, 35-uy (Rayon Stoyanka), Andijon. Tel: +998 90 548 10 90 / +998 99 905 30 90.`,
    },
    ru: {
      title: "Стоматолог Орифжон — Стоматология в Андижане | Врач-Стоматолог Мансуров Орифжон",
      description: `Приём Стоматолога Орифжона (Мансуров Орифжон Алимбекович). Более ${years} лет практики. Андижанский медицинский колледж и Ошский Государственный Университет. Терапия, циркониевые коронки, виниры, имплантация (Германия, Корея), бережная хирургия и брекеты. Андижан, ул. Мукими 35 (Районная стоянка). Тел: +998 90 548 10 90 / +998 99 905 30 90.`,
    },
    en: {
      title: "Dentist Orifjon (Mansurov Orifjon) — Modern Painless Dentistry | Andijan",
      description: `Practice of Dentist Orifjon (Mansurov Orifjon Alimbekovich) in Andijan. Over ${years}+ years healthcare experience. Andijan Medical College and Osh State University graduate. Therapy & restoration (Charisma, DenFil), orthopedics, German & Korean implants, gentle surgery, and braces. 35 Muqimiy St., Rayon Stoyanka, Andijan. Tel: +998 90 548 10 90 / +998 99 905 30 90.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Stomatolog Orifjon (Andijon)",
      description:
        "Stomatolog Orifjondan 5 ta asosiy klinik yo'nalish: Terapiya (Charisma va DenFil bilan og'riqsiz tish davolash va restavratsiya), Ortopediya (sirkon karonkalar, vinirlar va protezlar), Implantatsiya (Germaniya va Koreya biotitan tizimlari), Xirurgiya hamda Ortodontiya (breketlar). Rasmiy kafolat. Tel: +998 90 548 10 90 / +998 99 905 30 90.",
    },
    ru: {
      title: "Стоматологические Услуги — Стоматолог Орифжон (Андижан)",
      description:
        "5 ключевых направлений у Стоматолога Орифжона: Терапия (пломбы Charisma и DenFil без боли), Ортопедия (циркониевые коронки, керамика, виниры), Имплантация (Германия, Корея), Хирургия (атравматичное удаление) и Ортодонтия (исправление прикуса брекетами). Тел: +998 90 548 10 90 / +998 99 905 30 90.",
    },
    en: {
      title: "Dental Services & Clinical Specialties — Dentist Orifjon (Andijan)",
      description:
        "5 core specialties by Dentist Orifjon in Andijan: Therapy (Charisma & DenFil painless restorations), Orthopedics (zirconia crowns, veneers), Implantation (German & Korean titanium implants), Gentle Surgery, and Orthodontics (braces). Tel: +998 90 548 10 90 / +998 99 905 30 90.",
    },
  },
  about: {
    uz: {
      title: `Stomatolog Orifjon Haqida — ${years}+ Yillik Tajriba | Andijon`,
      description: `Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — Andijon Tibbiyot kolleji (2001–2004) hamda O'sh Davlat Universiteti (2017–2022) stomatologiya fakulteti bitiruvchisi. ${years} yildan ortiq tibbiyot tajribasi. Muqimiy ko'chasi 35, Rayon Stoyanka, Andijon.`,
    },
    ru: {
      title: `О Стоматологе Орифжоне — Врач-Стоматолог | Более ${years} Лет Опыта (Андижан)`,
      description: `Стоматолог Орифжон (Мансуров Орифжон Алимбекович) — выпускник Андижанского медицинского колледжа (2001–2004) и Ошского Государственного Университета (2017–2022). Более ${years} лет практики. г. Андижан, ул. Мукими 35 (Районная стоянка).`,
    },
    en: {
      title: `About Dentist Orifjon — Over ${years}+ Years Healthcare Background | Andijan`,
      description: `Meet Dentist Orifjon (Mansurov Orifjon Alimbekovich), graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Over ${years}+ years medical background. 35 Muqimiy St., Rayon Stoyanka, Andijan.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Stomatolog Orifjon (Andijon, Muqimiy 35, Rayon Stoyanka)",
      description:
        "Stomatolog Orifjon qabuli (Andijon shahri, Muqimiy 35, Rayon Stoyanka). Telefon: +998 90 548 10 90 / +998 99 905 30 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon. Dushanba-Shanba 08:30–18:30.",
    },
    ru: {
      title: "Контакты и Адрес — Стоматолог Орифжон (Андижан, ул. Мукими 35, Районная стоянка)",
      description:
        "Приём Стоматолога Орифжона (г. Андижан, ул. Мукими 35, Rayon Stoyanka). Телефон: +998 90 548 10 90 / +998 99 905 30 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon. Понедельник–Суббота 08:30–18:30.",
    },
    en: {
      title: "Contact & Location — Dentist Orifjon (Andijan, 35 Muqimiy St., Rayon Stoyanka)",
      description:
        "Dentist Orifjon Practice (Andijan, 35 Muqimiy St., Rayon Stoyanka). Tel: +998 90 548 10 90 / +998 99 905 30 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon. Monday–Saturday 08:30–18:30.",
    },
  },
  booking: {
    uz: {
      title: "Qabulga Yozilish — Stomatolog Orifjon | Onlayn Qabul",
      description:
        "Stomatolog Orifjon qabuliga onlayn yozilish. Bo'sh kun va soatni tanlang, navbatsiz va qulay ro'yxatdan o'ting. Telefon: +998 90 548 10 90 / +998 99 905 30 90.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Стоматолог Орифжон (Андижан)",
      description:
        "Онлайн запись к Стоматологу Орифжону: выберите удобный день и время приёма без очередей. Андижан, ул. Мукими 35 (Районная стоянка). Телефон: +998 90 548 10 90 / +998 99 905 30 90.",
    },
    en: {
      title: "Book Dental Appointment — Dentist Orifjon (Andijan)",
      description:
        "Book your dental appointment online with Dentist Orifjon in Andijan. Select preferred date and time slot with zero wait. Tel: +998 90 548 10 90 / +998 99 905 30 90.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Stomatolog Orifjon",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.",
    },
    ru: {
      title: "Страница не найдена (404) — Стоматолог Орифжон",
      description: "Запрошенная страница не найдена. Вернитесь на главную страницу.",
    },
    en: {
      title: "Page Not Found (404) — Dentist Orifjon",
      description: "The page you are looking for does not exist. Return to homepage.",
    },
  },
};

export const PAGE_KEYWORDS = {
  home: [
    "andijonda stomatologiya",
    "andijon stomatologiya",
    "stomatologiya andijon",
    "andijon stomatologiya narxlari",
    "andijonda eng yaxshi stomatolog",
    "andijon stomatologiyalari",
    "stomatolog orifjon andijon",
    "stomatolog orifjon",
    "orifjon stomatolog",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon",
    "mansurov orifjon alimbekovich",
    "mansurov orifbek",
    "mansurov orifbek alimbekovich",
    "vrach stomatolog orifjon",
    "stomatolog andijon",
    "stomatologiya muqimiy 35",
    "rayon stoyanka stomatologiya",
    "tish davolash andijon",
    "tish qoyish andijon",
    "dental implant andijon",
    "breketlar andijon",
    "sirkon karonka andijon",
    "vinirlar andijon",
    "charisma germaniya",
    "denfil koreya",
    "superkain forte",
    "artikain",
    "orablok",
    "megagen koreya",
    "anyridge germaniya",
    "dxl germaniya",
    "andijon tibbiyot kolleji",
    "osh davlat universiteti",
  ],
  uz: [
    "andijonda stomatologiya",
    "andijon stomatologiya",
    "stomatologiya andijon",
    "andijonda stomatologiya narxlari",
    "andijon shahrida stomatologiya",
    "andijonda eng yaxshi stomatolog",
    "tish shifokori andijon",
    "andijonda tish oldirish",
    "andijonda tish qoyish",
    "andijonda implantatsiya",
    "andijonda breketlar",
    "stomatolog orifjon",
    "orifjon stomatolog",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon alimbekovich",
    "mansurov orifbek",
    "mansurov orifbek alimbekovich",
    "vrach stomatolog orifjon",
    "stomatolog andijon",
    "tish davolash andijon",
    "tish qoyish andijon",
    "dental implant andijon",
    "breketlar andijon",
    "sirkon karonka andijon",
    "vinirlar andijon",
    "elaynerlar andijon",
    "ogriqsiz tish davolash",
    "charisma germaniya",
    "denfil koreya",
    "superkain forte",
    "artikain",
    "orablok",
    "megagen koreya",
    "anyridge germaniya",
    "dxl germaniya",
    "andijon tibbiyot kolleji",
    "osh davlat universiteti",
    "muqimiy kochasi andijon",
    "rayon stoyanka stomatologiya",
  ],
  ru: [
    "стоматология в андижане",
    "стоматология андижан",
    "андижан стоматология",
    "стоматологические клиники андижана",
    "лучший стоматолог в андижане",
    "цены на лечение зубов в андижане",
    "имплантация зубов в андижане",
    "удаление зуба в андижане",
    "стоматолог на мукими андижан",
    "районная стоянка стоматология",
    "стоматолог орифжон",
    "орифжон стоматолог",
    "доктор орифжон",
    "орифжон",
    "мансуров орифжон",
    "мансуров орифжон алимбекович",
    "мансуров орифбек",
    "мансуров орифбек алимбекович",
    "стоматолог андижан",
    "стоматология андижан",
    "лечение зубов андижан",
    "имплантация зубов андижан",
    "брекеты андижан",
    "коронки цирконий андижан",
    "виниры андижан",
    "харизма германия",
    "денфил корея",
    "суперкаин форте",
    "артикаин",
    "ораблок",
    "мегаджен корея",
    "эниридж германия",
    "dxl германия",
    "ошский государственный университет",
    "андижанский медицинский колледж",
    "ул мукими андижан",
  ],
  en: [
    "dentistry in andijan",
    "dentist in andijan",
    "dental clinic in andijan",
    "best dentist in andijan",
    "andijan dental clinic",
    "dental implants in andijan",
    "braces in andijan",
    "tooth extraction in andijan",
    "dentist orifjon",
    "orifjon dentist",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon alimbekovich",
    "mansurov orifbek",
    "mansurov orifbek alimbekovich",
    "dentist andijan",
    "dental clinic andijan",
    "dental implants andijan",
    "braces andijan",
    "zirconia crowns andijan",
    "veneers andijan",
    "painless dentistry",
    "charisma germany",
    "denfil korea",
    "supercain forte",
    "articaine",
    "orabloc",
    "megagen korea",
    "anyridge germany",
    "dxl germany",
    "osh state university",
    "andijan medical college",
    "muqimiy street andijan",
  ],
};
