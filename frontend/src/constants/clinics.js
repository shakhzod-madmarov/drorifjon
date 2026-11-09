export const CLINICS = [
  {
    id: "stomatolog-orifjon",
    name: {
      uz: "Stomatolog Orifjon Qabuli",
      ru: "Стоматолог Орифжон — Приём",
      en: "Dentist Orifjon Practice",
    },
    dentistOffice: {
      uz: "Stomatolog Orifjon (Mansurov Orifjon Alimbekovich) qabuli",
      ru: "Приём Стоматолога Орифжона (Мансурова Орифжона Алимбековича)",
      en: "Dentist Orifjon (Mansurov Orifjon Alimbekovich) Practice",
    },
    badge: {
      uz: "Stomatolog Orifjon · Andijon",
      ru: "Стоматолог Орифжон · Андижан",
      en: "Dentist Orifjon · Andijan",
    },
    city: {
      uz: "Andijon",
      ru: "Андижан",
      en: "Andijan",
    },
    address: {
      uz: "Andijon shahri, Muqimiy ko'chasi, 35-uy (Rayon Stoyanka)",
      ru: "г. Андижан, ул. Мукими, 35 (Районная стоянка)",
      en: "35 Muqimiy St., Rayon Stoyanka, Andijan, Uzbekistan",
    },
    shortAddress: {
      uz: "Andijon sh., Muqimiy 35 (Rayon Stoyanka)",
      ru: "г. Андижан, Мукими 35 (Районная стоянка)",
      en: "35 Muqimiy St., Rayon Stoyanka, Andijan",
    },
    landmark: {
      uz: "Muqimiy 35 (Xaritada: Muqimiy 41, mo'ljal: Rayon Stoyanka)",
      ru: "Мукими 35 (На карте: Мукими 41, Районная стоянка)",
      en: "35 Muqimiy St. (On map: 41 Muqimiy St., Rayon Stoyanka)",
    },
    hours: {
      uz: "Dushanba – Shanba: 08:30 – 18:30",
      ru: "Понедельник – Суббота: 08:30 – 18:30",
      en: "Monday – Saturday: 08:30 – 18:30",
    },
    sundayNote: {
      uz: "Yakshanba: Oldindan yozilish orqali",
      ru: "Воскресенье: По предварительной записи",
      en: "Sunday: By prior appointment",
    },
    doctorPhone: "+998 90 548 10 90",
    doctorPhoneDisplay: "+998 90 548 10 90",
    doctorPhoneRaw: "+998905481090",
    secondaryPhone: "+998 99 905 30 90",
    secondaryPhoneDisplay: "+998 99 905 30 90",
    secondaryPhoneRaw: "+998999053090",
    secondaryPhoneHref: "tel:+998999053090",
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
    telegram: "https://t.me/dr_orifjon_1",
    telegramHandle: "@dr_orifjon_1",
    instagram: "https://www.instagram.com/dr_orifjon/",
    instagramHandle: "@dr_orifjon",
    coordinates: {
      lat: 40.759178,
      lng: 72.354302,
    },
    maps: {
      google: "https://www.google.com/maps/search/?api=1&query=40.759178,72.354302",
      googleFull: "https://www.google.com/maps/search/?api=1&query=40.759178,72.354302",
      googleEmbed: "https://www.google.com/maps?q=40.759178,72.354302&hl=uz&z=17&output=embed",
      yandex: "https://yandex.uz/maps/org/stomatolog_orifjon/133941332039/",
      yandexShort: "https://yandex.uz/maps/org/133941332039/",
      yandexEmbed: "https://yandex.uz/map-widget/v1/org/stomatolog_orifjon/133941332039/?ll=72.354302%2C40.759178&z=17",
      yandexOrgId: "133941332039",
      yandexReviewUrl: "https://yandex.uz/maps/org/stomatolog_orifjon/133941332039/reviews/",
      yandexRouteUrl: "https://yandex.uz/maps/?rtext=~40.759178,72.354302&rtt=auto",
      yandexBusinessUrl: "https://yandex.ru/sprav/133941332039/",
      yandexBusinessAddUrl: "https://business.yandex.ru/sprav/add",
      googlePlaceId: "",
      googleCid: "",
      googleReviewUrl: "https://g.page/r/CcypeG53HHZLEBM/review",
    },
  },
];

export const PRIMARY_CLINIC = CLINICS[0];
