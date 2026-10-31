/**
 * Single source of truth for Dr. Mansurov Orifjon Alimbekovich's credentials, career, and contact info.
 */
export const DOCTOR_INFO = {
  name: "Dr. Mansurov O.A.",
  fullName: "Mansurov Orifjon Alimbekovich",
  title: "Vrach Stomatolog",
  specialtiesText: "Terapiya · Ortopediya · Implantatsiya · Xirurgiya · Ortodontiya",
  specialties: {
    uz: [
      "1. Terapiya (tishlarni og'riqsiz davolash va restavratsiya)",
      "2. Ortopediya (yuqori sifatli tish qo'yish, protezlash)",
      "3. Implantatsiya (Germaniya va Koreya mahsulotlari)",
      "4. Xirurgiya (og'riqsiz va asoratsiz tish olish)",
      "5. Ortodontiya (qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash)",
    ],
    ru: [
      "1. Терапия (безболезненное лечение и реставрация зубов)",
      "2. Ортопедия (высококачественное протезирование и установка зубов)",
      "3. Имплантация (премиальные импланты из Германии и Кореи)",
      "4. Хирургия (безболезненное и атравматичное удаление зубов без осложнений)",
      "5. Ортодонтия (выравнивание неровных зубных рядов и исправление прикуса брекетами)",
    ],
    en: [
      "1. Therapy (Painless tooth treatment and aesthetic restoration)",
      "2. Orthopedics (High-quality tooth placement and prosthetics)",
      "3. Implantation (German and Korean premium implant systems)",
      "4. Surgery (Painless and complication-free tooth extraction)",
      "5. Orthodontics (Alignment of crooked and uneven teeth using braces)",
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
  telegramUrl: "https://t.me/dr_orifjon_1",
  telegramHandle: "@dr_orifjon_1",
  instagramUrl: "https://www.instagram.com/dr_orifjon/",
  instagramHandle: "@dr_orifjon",
  email: "info@drorifjon.uz",
  emailHref: "mailto:info@drorifjon.uz",
  technologies: {
    uz: "Raqamli optik skanerlash, zamonaviy biotitan implantologiya, CAD/CAM sirkon restavratsiyasi, xavfsiz 100% og'riqsiz mikro-anesteziya",
    ru: "Цифровое оптическое 3D-сканирование, современная биотитановая имплантация, CAD/CAM циркониевые реставрации, безопасная 100% анестезия без боли",
    en: "Digital optical 3D scanning, advanced biocompatible titanium implants, CAD/CAM zirconia restoration, and 100% painless micro-anesthesia",
  },
};

export const getYearsOfExperience = () => 20;

export const OPENING_HOURS = {
  weekdays: { opens: "08:30", closes: "18:30" },
  labels: {
    uz: {
      days: "Dushanba – Shanba",
      hours: "08:30 – 18:30",
      full: "Dushanba – Shanba: 08:30 – 18:30",
      sunday: "Yakshanba — oldindan yozilish bo'yicha",
    },
    ru: {
      days: "Понедельник – Суббота",
      hours: "08:30 – 18:30",
      full: "Понедельник – Суббота: 08:30 – 18:30",
      sunday: "Воскресенье — по предварительной записи",
    },
    en: {
      days: "Monday – Saturday",
      hours: "08:30 – 18:30",
      full: "Monday – Saturday: 08:30 – 18:30",
      sunday: "Sunday — by prior appointment",
    },
  },
};

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
