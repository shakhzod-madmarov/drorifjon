import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drorifjon.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Stomatolog Orifjon — Mansurov Orifjon Alimbekovich | Vrach Stomatolog",
      description: `Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — ${years}+ yillik tibbiyot tajribasiga ega vrach stomatolog. Andijon Tibbiyot kolleji (2001-2004) va O'sh Davlat Universiteti (2017-2022) bitiruvchisi. Terapiya (davolash va restavratsiya), ortopediya (tish qo'yish), Germaniya va Koreya implantatsiyasi, xirurgiya hamda ortodontiya (breketlar). Tel: +998 90 548 10 90.`,
    },
    ru: {
      title: "Стоматолог Орифжон — Мансуров Орифжон Алимбекович | Врач-Стоматолог",
      description: `Стоматолог Орифжон (Мансуров Орифжон Алимбекович). Более ${years} лет в медицине. Андижанский медицинский колледж (2001-2004), Ошский Государственный Университет (2017-2022). Терапия, ортопедия, имплантация (Германия, Корея), хирургия и ортодонтия (брекеты). +998 90 548 10 90.`,
    },
    en: {
      title: "Dentist Orifjon — Mansurov Orifjon Alimbekovich | Modern Dentistry",
      description: `Dentist Orifjon (Mansurov Orifjon Alimbekovich), restorative dentist with over ${years}+ years healthcare experience. Andijan Medical College and Osh State University graduate. Therapy & restoration, orthopedics, German & Korean implants, gentle surgery, and braces. Tel: +998 90 548 10 90.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Stomatolog Orifjon | Vrach Stomatolog",
      description:
        "Stomatolog Orifjondan 5 ta asosiy yo'nalish: Terapiya (tishlarni og'riqsiz davolash va restavratsiya), Ortopediya (yuqori sifatli tish qo'yish, protezlash), Implantatsiya (Germaniya va Koreya mahsulotlari), Xirurgiya (og'riqsiz va asoratsiz tish olish) hamda Ortodontiya (breketlar).",
    },
    ru: {
      title: "Стоматологические Услуги — Стоматолог Орифжон",
      description:
        "5 ключевых направлений у Стоматолога Орифжона: Терапия (безболезненное лечение и реставрация), Ортопедия (протезирование и коронки), Имплантация (Германия и Корея), Хирургия (удаление зубов без осложнений), Ортодонтия (исправление прикуса брекетами).",
    },
    en: {
      title: "Dental Services & Clinical Specialties — Dentist Orifjon",
      description:
        "5 core specialties by Dentist Orifjon: Therapy (painless tooth treatment and restoration), Orthopedics (precision prosthetics), Implantation (German and Korean implants), Surgery (gentle extraction without complications), and Orthodontics (braces).",
    },
  },
  about: {
    uz: {
      title: `Stomatolog Orifjon Haqida — ${years}+ Yillik Tajriba | Vrach Stomatolog`,
      description: `Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) — Andijon Tibbiyot kolleji (2001–2004) hamda O'sh Davlat Universiteti (2017–2022) stomatologiya fakulteti bitiruvchisi. ${years} yildan ortiq tibbiyot tajribasi.`,
    },
    ru: {
      title: `О Стоматологе Орифжоне — Врач-Стоматолог | Более ${years} Лет в Медицине`,
      description: `Стоматолог Орифжон (Мансуров Орифжон Алимбекович) — выпускник Андижанского медицинского колледжа (2001–2004) и Ошского Государственного Университета (2017–2022). Более ${years} лет практики.`,
    },
    en: {
      title: `About Dentist Orifjon — Over ${years}+ Years Healthcare Background`,
      description: `Meet Dentist Orifjon (Mansurov Orifjon Alimbekovich), graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Over ${years}+ years of medical background.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Stomatolog Orifjon | Andijon",
      description:
        "Stomatolog Orifjon qabuli (Andijon shahri). Telefon: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
    ru: {
      title: "Контакты и Адрес — Стоматолог Орифжон | Андижан",
      description:
        "Приём Стоматолога Орифжона (г. Андижан). Телефон: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
    en: {
      title: "Contact & Location — Dentist Orifjon | Andijan",
      description:
        "Book visit with Dentist Orifjon in Andijan. Tel: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
  },
  booking: {
    uz: {
      title: "Qabulga Yozilish — Stomatolog Orifjon | Onlayn Qabul",
      description:
        "Stomatolog Orifjon qabuliga onlayn yozilish. Bo'sh kun va soatni tanlang, navbatsiz va qulay ro'yxatdan o'ting. Tel: +998 90 548 10 90.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Стоматолог Орифжон",
      description:
        "Онлайн запись к Стоматологу Орифжону: выберите удобный день и время приёма без очередей. Телефон: +998 90 548 10 90.",
    },
    en: {
      title: "Book Online Appointment — Dentist Orifjon",
      description:
        "Book your dental visit online with Dentist Orifjon. Select preferred date and time slot. Tel: +998 90 548 10 90.",
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
    "stomatolog orifjon",
    "orifjon stomatolog",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon",
    "mansurov orifjon alimbekovich",
    "vrach stomatolog orifjon",
    "stomatolog andijon",
    "dental implant",
    "breketlar",
    "sirkon karonka",
    "vinirlar",
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
    "ошский государственный университет",
    "стоматолог орифжон мансуров",
  ],
  uz: [
    "stomatolog orifjon",
    "orifjon stomatolog",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon alimbekovich",
    "vrach stomatolog orifjon",
    "stomatolog andijon",
    "dental implant andijon",
    "breketlar",
    "sirkon karonka",
    "vinirlar",
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
  ru: [
    "стоматолог орифжон",
    "орифжон стоматолог",
    "доктор орифжон",
    "орифжон",
    "мансуров орифжон",
    "мансуров орифжон алимбекович",
    "стоматолог андижан",
    "имплантация зубов андижан",
    "брекеты андижан",
    "коронки цирконий",
    "виниры",
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
  ],
  en: [
    "dentist orifjon",
    "orifjon dentist",
    "dr orifjon",
    "orifjon",
    "mansurov orifjon alimbekovich",
    "dentist andijan",
    "dental implants andijan",
    "braces",
    "zirconia crowns",
    "veneers",
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
  ],
};
