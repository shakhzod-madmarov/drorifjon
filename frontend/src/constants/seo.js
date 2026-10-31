import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drorifjon.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Mansurov O.A. — Mansurov Orifjon Alimbekovich | Vrach Stomatolog",
      description: `Mansurov Orifjon Alimbekovich — ${years}+ yillik tibbiyot tajribasiga ega vrach stomatolog. Andijon Tibbiyot kolleji (2001-2004) va O'sh Davlat Universiteti (2017-2022) bitiruvchisi. Terapiya (davolash va restavratsiya), ortopediya (tish qo'yish), Germaniya va Koreya implantatsiyasi, xirurgiya hamda ortodontiya (breketlar). Tel: +998 90 548 10 90.`,
    },
    ru: {
      title: "Д-р Мансуров О.А. — Мансуров Орифжон Алимбекович | Врач-Стоматолог",
      description: `Врач-стоматолог Д-р Мансуров Орифжон Алимбекович. Более ${years} лет в медицине. Андижанский медицинский колледж (2001-2004), Ошский Государственный Университет (2017-2022). Терапия, ортопедия, имплантация (Германия, Корея), хирургия и ортодонтия (брекеты). +998 90 548 10 90.`,
    },
    en: {
      title: "Dr. Mansurov O.A. — Mansurov Orifjon Alimbekovich | Modern Dentist",
      description: `Dr. Mansurov Orifjon Alimbekovich, restorative dentist with over ${years}+ years healthcare experience. Andijan Medical College and Osh State University graduate. Therapy & restoration, orthopedics, German & Korean implants, gentle surgery, and braces. Tel: +998 90 548 10 90.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Mansurov O.A. | Vrach Stomatolog",
      description:
        "5 ta asosiy yo'nalish: Terapiya (tishlarni og'riqsiz davolash va restavratsiya), Ortopediya (yuqori sifatli tish qo'yish, protezlash), Implantatsiya (Germaniya va Koreya mahsulotlari), Xirurgiya (og'riqsiz va asoratsiz tish olish) hamda Ortodontiya (breketlar).",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Мансуров О.А.",
      description:
        "5 ключевых направлений: Терапия (безболезненное лечение и реставрация), Ортопедия (протезирование и коронки), Имплантация (Германия и Корея), Хирургия (удаление зубов без осложнений), Ортодонтия (исправление прикуса брекетами).",
    },
    en: {
      title: "Dental Services & Clinical Specialties — Dr. Mansurov O.A.",
      description:
        "5 core specialties: Therapy (painless tooth treatment and restoration), Orthopedics (precision prosthetics), Implantation (German and Korean implants), Surgery (gentle extraction without complications), and Orthodontics (braces).",
    },
  },
  about: {
    uz: {
      title: `Dr. Mansurov Orifjon Alimbekovich Haqida — ${years}+ Yillik Tajriba | Vrach Stomatolog`,
      description: `Dr. Mansurov Orifjon Alimbekovich — Andijon Tibbiyot kolleji (2001–2004) hamda O'sh Davlat Universiteti (2017–2022) stomatologiya fakulteti bitiruvchisi. ${years} yildan ortiq tibbiyot tajribasi.`,
    },
    ru: {
      title: `О Докторе Мансурове Орифжоне — Врач-Стоматолог | Более ${years} Лет в Медицине`,
      description: `Д-р Мансуров Орифжон Алимбекович — выпускник Андижанского медицинского колледжа (2001–2004) и Ошского Государственного Университета (2017–2022). Более ${years} лет практики.`,
    },
    en: {
      title: `About Dr. Mansurov Orifjon Alimbekovich — Dentist with ${years}+ Years Healthcare Background`,
      description: `Meet Dr. Mansurov Orifjon Alimbekovich, graduate of Andijan Medical College (2001–2004) and Osh State University (2017–2022). Over ${years}+ years of medical background.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Dr. Mansurov O.A. | Andijon",
      description:
        "Dr. Mansurov Orifjon Alimbekovich qabuli (Andijon shahri). Telefon: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
    ru: {
      title: "Контакты и Адрес — Д-р Мансуров О.А. | Андижан",
      description:
        "Приём Д-ра Мансурова Орифжона Алимбековича (г. Андижан). Телефон: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
    en: {
      title: "Contact & Location — Dr. Mansurov O.A. | Andijan",
      description:
        "Book visit with Dr. Mansurov Orifjon Alimbekovich in Andijan. Tel: +998 90 548 10 90, Telegram: @dr_orifjon_1, Instagram: @dr_orifjon.",
    },
  },
  booking: {
    uz: {
      title: "Qabulga Yozilish — Dr. Mansurov O.A. | Onlayn Qabul",
      description:
        "Dr. Mansurov Orifjon Alimbekovich qabuliga onlayn yozilish. Bo'sh kun va soatni tanlang, navbatsiz va qulay ro'yxatdan o'ting. Tel: +998 90 548 10 90.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р Мансуров О.А.",
      description:
        "Онлайн запись к Д-ру Мансурову Орифжону Алимбековичу: выберите удобный день и время приёма без очередей. Телефон: +998 90 548 10 90.",
    },
    en: {
      title: "Book Online Appointment — Dr. Mansurov O.A.",
      description:
        "Book your dental visit online with Dr. Mansurov Orifjon Alimbekovich. Select preferred date and time slot. Tel: +998 90 548 10 90.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Mansurov O.A.",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Мансуров О.А.",
      description: "Запрошенная страница не найдена. Вернитесь на главную страницу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Mansurov O.A.",
      description: "The page you are looking for does not exist. Return to homepage.",
    },
  },
};

export const PAGE_KEYWORDS = {
  home: [
    "dr orifjon",
    "dr mansurov",
    "mansurov orifjon",
    "mansurov orifjon alimbekovich",
    "vrach stomatolog orifjon",
    "stomatolog andijon",
    "dental implant",
    "breketlar",
    "sirkon karonka",
    "vinirlar",
    "andijon tibbiyot kolleji",
    "osh davlat universiteti",
    "ошский государственный университет",
    "стоматолог орифжон мансуров",
  ],
};
