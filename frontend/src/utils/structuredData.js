import { SITE_ORIGIN } from "../constants/seo";
import { localizePath } from "./language";
import { DOCTOR_INFO } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";

export const withTrailingSlash = (path) => (path.endsWith("/") ? path : `${path}/`);

export const urlFor = (path = "/", lang = "uz") =>
  `${SITE_ORIGIN}${withTrailingSlash(localizePath(path, lang))}`;

export const buildBreadcrumbSchema = (crumbs, lang = "uz") => ({
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": crumb.name,
    "item": urlFor(crumb.path, lang),
  })),
});

export const buildFaqSchema = (faqItems, lang = "uz") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${urlFor("/", lang)}#faq`,
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.q[lang] || item.q.uz,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a[lang] || item.a.uz,
    },
  })),
});

const SERVICE_INDICATIONS = {
  "terapiya": {
    uz: "Tish kariesi, chuqur karies, pulpit va estetik restavratsiya",
    ru: "Кариес любой сложности, пульпит и эстетическая реставрация зубов",
    en: "Dental caries, pulpitis, root canal therapy, and artistic restoration",
  },
  "ortopediya": {
    uz: "Sirkon karonkalar, keramika, vinirlar va zamonaviy tish protezlari",
    ru: "Циркониевые коронки, керамика, виниры и протезирование зубов",
    en: "Zirconia crowns, ceramics, veneers, and modern dental prosthetics",
  },
  "implantatsiya": {
    uz: "Germaniya va Koreya biotitan implantlari bilan yo'qotilgan tishlarni tiklash",
    ru: "Дентальная имплантация немецкими и корейскими титановыми системами",
    en: "Restoration of missing teeth with German and Korean titanium dental implants",
  },
  "xirurgiya": {
    uz: "Og'riqsiz va asoratsiz tish olish, murakkab aql tishlari jarrohligi",
    ru: "Безболезненное атравматичное удаление зубов и зубов мудрости",
    en: "Atraumatic and painless tooth extraction and wisdom tooth removal",
  },
  "ortodontiya": {
    uz: "Qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash",
    ru: "Исправление прикуса и выравнивание кривых зубных рядов брекетами",
    en: "Orthodontic alignment of crooked and uneven teeth with braces",
  },
  "dental-implant": {
    uz: "Germaniya va Koreya biotitan implantlari bilan tishlarni tiklash",
    ru: "Дентальная имплантация немецкими и корейскими системами",
    en: "German and Korean titanium dental implant systems",
  },
  "breketlar": {
    uz: "Qiyshiq va notekis tishlarni breketlar yordamida to'g'rilash",
    ru: "Выравнивание зубов и прикуса брекетами",
    en: "Bite correction and teeth alignment with braces",
  },
  "sirkon-keramika-karonkalar": {
    uz: "Sirkon va keramika karonkalar bilan tish qo'yish",
    ru: "Протезирование циркониевыми и керамическими коронками",
    en: "Zirconia and ceramic dental crowns",
  },
  "vinirlar": {
    uz: "Old tishlarning shakli va rangini vinirlar bilan yaxshilash",
    ru: "Эстетическое преображение зоны улыбки винирами",
    en: "Aesthetic smile makeover with dental veneers",
  },
  "pratezlar": {
    uz: "Zamonaviy olinadigan va olinmaydigan tish protezlari",
    ru: "Современные съемные и несъемные зубные протезы",
    en: "Modern removable and fixed dental prosthetics",
  },
  "elaynerlar": {
    uz: "Shaffof ko'rinmas elaynerlar bilan tishlarni tekislash",
    ru: "Выравнивание зубов прозрачными элайнерами",
    en: "Clear invisible aligners",
  },
  "tish-oqartirish": {
    uz: "Professional tish oqartirish va estetik tozalash",
    ru: "Профессиональное отбеливание зубов",
    en: "Professional teeth whitening",
  },
  "ogriqsiz-tish-davolash": {
    uz: "Tishlarni og'riqsiz davolash va nano-restavratsiya",
    ru: "Лечение кариеса и каналов без боли",
    en: "Painless tooth treatment and restoration",
  },
  "ogriqsiz-tish-olish": {
    uz: "Og'riqsiz va asoratsiz tish olish",
    ru: "Удаление зубов без боли и осложнений",
    en: "Painless and safe tooth extraction",
  },
};

export const buildMedicalProcedureSchema = (service, lang = "uz", breadcrumbs = []) => {
  const serviceUrl = urlFor(`/services/${service.id}`, lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;
  const indicationsList = service.indications?.[lang] || service.indications?.uz;
  const fallbackIndication = SERVICE_INDICATIONS[service.id]?.[lang] || SERVICE_INDICATIONS[service.id]?.uz;

  const procedure = {
    "@type": "MedicalProcedure",
    "@id": `${serviceUrl}#procedure`,
    "name": service.title[lang] || service.title.uz,
    "description": service.shortDesc[lang] || service.shortDesc.uz,
    "procedureType": service.id.includes("implant") || service.id.includes("olish")
      ? "https://schema.org/SurgicalProcedure"
      : "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "https://en.wikipedia.org/wiki/Human_mouth",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry",
    },
    ...(Array.isArray(indicationsList) && indicationsList.length > 0
      ? {
          "indication": indicationsList.map((text) => ({
            "@type": "MedicalIndication",
            "name": text,
          })),
        }
      : fallbackIndication
      ? {
          "indication": {
            "@type": "MedicalIndication",
            "name": fallbackIndication,
          },
        }
      : {}),
    "provider": {
      "@type": ["Dentist", "MedicalBusiness"],
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": `${DOCTOR_INFO.name} — Stomatologiya Markazi`,
      "telephone": DOCTOR_INFO.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Andijon shahri",
        "addressLocality": "Andijon",
        "addressRegion": "Andijon viloyati",
        "postalCode": "170100",
        "addressCountry": "UZ",
      },
      "url": `${SITE_ORIGIN}/`,
    },
    "performer": {
      "@type": "Physician",
      "@id": `${SITE_ORIGIN}/#doctor`,
      "name": DOCTOR_INFO.name,
      "jobTitle": DOCTOR_INFO.title,
      "telephone": DOCTOR_INFO.phoneRaw,
      "url": `${SITE_ORIGIN}/`,
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
      },
    },
    "offers": {
      "@type": "Offer",
      "url": serviceUrl,
      "priceCurrency": "UZS",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": `${SITE_ORIGIN}/#dentist`,
      },
    },
  };

  const graph = [];
  if (breadcrumbObj) {
    graph.push(breadcrumbObj);
  }
  graph.push(procedure);

  if (Array.isArray(service.faq) && service.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${serviceUrl}#faq`,
      "mainEntity": service.faq.map((item) => ({
        "@type": "Question",
        "name": item.q[lang] || item.q.uz,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a[lang] || item.a.uz,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

export const buildServicesCatalogSchema = (services, lang = "uz", breadcrumbs = []) => {
  const catalogUrl = urlFor("/services", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const catalog = {
    "@type": "MedicalWebPage",
    "@id": `${catalogUrl}#catalog`,
    "url": catalogUrl,
    "name": lang === "ru" ? "Стоматологические услуги" : lang === "en" ? "Dental Services" : "Stomatologik xizmatlar",
    "about": {
      "@type": "Dentist",
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": DOCTOR_INFO.name,
      "telephone": DOCTOR_INFO.phoneRaw,
    },
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "Stomatologiya Xizmatlari",
      "itemListElement": services.map((s, idx) => ({
        "@type": "OfferCatalog",
        "position": idx + 1,
        "name": s.title[lang] || s.title.uz,
        "url": urlFor(`/services/${s.id}`, lang),
      })),
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, catalog],
    };
  }

  return {
    "@context": "https://schema.org",
    ...catalog,
  };
};

export const buildAboutPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/about", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const aboutPage = {
    "@type": "AboutPage",
    "@id": `${pageUrl}#about`,
    "url": pageUrl,
    "name": lang === "ru" ? "О враче" : lang === "en" ? "About Doctor" : "Dr. Mansurov haqida",
    "mainEntity": {
      "@type": "Physician",
      "@id": `${SITE_ORIGIN}/#doctor`,
      "name": DOCTOR_INFO.name,
      "jobTitle": DOCTOR_INFO.title,
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
      },
      "telephone": DOCTOR_INFO.phoneRaw,
      "email": DOCTOR_INFO.email,
      "sameAs": [
        DOCTOR_INFO.telegramUrl,
        DOCTOR_INFO.instagramUrl,
      ],
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, aboutPage],
    };
  }

  return {
    "@context": "https://schema.org",
    ...aboutPage,
  };
};

export const buildContactPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/contact", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const contactPage = {
    "@type": "ContactPage",
    "@id": `${pageUrl}#contact`,
    "url": pageUrl,
    "name": lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa",
    "mainEntity": {
      "@type": ["Dentist", "MedicalBusiness"],
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": `${DOCTOR_INFO.name} — Vrach Stomatolog`,
      "telephone": DOCTOR_INFO.phoneRaw,
      "email": DOCTOR_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-kichik daha (1-mikrorayon), 8A-bino",
        "addressLocality": "Andijon",
        "addressRegion": "Andijon viloyati",
        "postalCode": "170100",
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": PRIMARY_CLINIC.coordinates.lat,
        "longitude": PRIMARY_CLINIC.coordinates.lng,
      },
      "hasMap": [
        PRIMARY_CLINIC.maps.googleFull,
        PRIMARY_CLINIC.maps.yandex,
      ],
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, contactPage],
    };
  }

  return {
    "@context": "https://schema.org",
    ...contactPage,
  };
};

export const buildPageWithBreadcrumbs = (pageType, path, title, lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor(path, lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const page = {
    "@type": pageType || "WebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": title,
    "inLanguage": lang,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      "url": SITE_ORIGIN,
      "name": DOCTOR_INFO.name,
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, page],
    };
  }

  return {
    "@context": "https://schema.org",
    ...page,
  };
};

export const buildHomeSchema = (lang = "uz", faqItems = []) => {
  const homeUrl = urlFor("/", lang);
  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    "url": `${SITE_ORIGIN}/`,
    "name": DOCTOR_INFO.name,
    "description": "Dr. Mansurov Orifjon Alimbekovich — 20+ yillik tibbiyot tajribasiga ega vrach stomatolog. Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi.",
    "inLanguage": ["uz", "ru", "en"],
  };

  const clinicEntity = {
    "@type": "DentalClinic",
    "@id": `${SITE_ORIGIN}/#clinic`,
    "name": PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz,
    "alternateName": ["Dr. Mansurov Stomatologiya", "Mansurov Orifjon Alimbekovich", "Стоматология Мансуров"],
    "telephone": DOCTOR_INFO.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
      "addressLocality": "Andijon",
      "addressRegion": "Andijon viloyati",
      "addressCountry": "UZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": PRIMARY_CLINIC.coordinates.lat,
      "longitude": PRIMARY_CLINIC.coordinates.lng,
    },
    "hasMap": [
      PRIMARY_CLINIC.maps.googleFull,
      PRIMARY_CLINIC.maps.yandex,
    ],
    "areaServed": [
      { "@type": "City", "name": "Andijon" },
      { "@type": "City", "name": "Asaka" },
      { "@type": "City", "name": "Shahrixon" },
      { "@type": "AdministrativeArea", "name": "Andijon viloyati" },
      { "@type": "AdministrativeArea", "name": "Farg'ona vodiysi" },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": DOCTOR_INFO.phoneRaw,
      "email": DOCTOR_INFO.email,
      "contactType": "emergency dental service",
      "availableLanguage": ["Uzbek", "Russian", "English"],
      "areaServed": "UZ",
    },
    "sameAs": [
      DOCTOR_INFO.instagramUrl,
      DOCTOR_INFO.telegramUrl,
    ],
  };

  const dentistEntity = {
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${SITE_ORIGIN}/#dentist`,
    "name": `${DOCTOR_INFO.name} — Stomatologiya Markazi`,
    "alternateName": [`${DOCTOR_INFO.name} Stomatolog`, "Mansurov Orifjon Alimbekovich", "Стоматолог Орифжон Мансуров"],
    "url": `${SITE_ORIGIN}/`,
    "logo": `${SITE_ORIGIN}/logo_icon.png`,
    "image": `${SITE_ORIGIN}/dr_orifjon_og.jpg`,
    "telephone": DOCTOR_INFO.phoneRaw,
    "email": DOCTOR_INFO.email,
    "priceRange": "$$",
    "currenciesAccepted": "UZS",
    "paymentAccepted": "Cash, Payme, Click, Uzum",
    "parentOrganization": {
      "@id": `${SITE_ORIGIN}/#clinic`,
    },
    "containedInPlace": {
      "@id": `${SITE_ORIGIN}/#clinic`,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
      "addressLocality": "Andijon",
      "addressRegion": "Andijon viloyati",
      "addressCountry": "UZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": PRIMARY_CLINIC.coordinates.lat,
      "longitude": PRIMARY_CLINIC.coordinates.lng,
    },
    "hasMap": [
      PRIMARY_CLINIC.maps.googleFull,
      PRIMARY_CLINIC.maps.yandex,
    ],
    "areaServed": [
      { "@type": "City", "name": "Andijon" },
      { "@type": "City", "name": "Asaka" },
      { "@type": "City", "name": "Shahrixon" },
      { "@type": "AdministrativeArea", "name": "Andijon viloyati" },
      { "@type": "AdministrativeArea", "name": "Farg'ona vodiysi" },
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "18:30",
      },
    ],
    "medicalSpecialty": [
      "https://schema.org/Dentistry",
    ],
    "founder": {
      "@id": `${SITE_ORIGIN}/#doctor`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1",
    },
    "sameAs": [
      DOCTOR_INFO.telegramUrl,
      DOCTOR_INFO.instagramUrl,
    ],
  };

  const doctorEntity = {
    "@type": "Physician",
    "@id": `${SITE_ORIGIN}/#doctor`,
    "name": DOCTOR_INFO.name,
    "jobTitle": DOCTOR_INFO.title,
    "description": `${DOCTOR_INFO.name} — 20+ yillik tajribaga ega vrach stomatolog. Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi. Andijon.`,
    "telephone": DOCTOR_INFO.phoneRaw,
    "email": DOCTOR_INFO.email,
    "url": `${SITE_ORIGIN}/`,
    "image": `${SITE_ORIGIN}/dr_orifjon_og.jpg`,
    "worksFor": {
      "@id": `${SITE_ORIGIN}/#clinic`,
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
    },
    "medicalSpecialty": "https://schema.org/Dentistry",
    "knowsLanguage": ["uz", "ru", "en"],
    "knowsAbout":
      lang === "ru"
        ? [
            "Терапия (безболезненное лечение и реставрация зубов)",
            "Ортопедия (высококачественное протезирование и установка зубов)",
            "Имплантация (премиальные импланты из Германии и Кореи)",
            "Хирургия (безболезненное и атравматичное удаление зубов без осложнений)",
            "Ортодонтия (выравнивание неровных зубных рядов и исправление прикуса брекетами)",
            "Интраоральное цифровое 3D-сканирование (без слепков)",
            "Циркониевые и керамические коронки E.max (CAD/CAM)",
            "Бюгельное и эластичное съемное протезирование",
          ]
        : lang === "en"
        ? [
            "Therapy (Painless tooth treatment and aesthetic restoration)",
            "Orthopedics (High-quality tooth placement and prosthetics)",
            "Implantation (German and Korean premium implant systems)",
            "Surgery (Painless and complication-free tooth extraction)",
            "Orthodontics (Alignment of crooked teeth using braces)",
            "Intraoral digital 3D optical scanning (impression-free)",
            "Monolithic zirconia and IPS E.max ceramic crowns",
            "Modern precision clasp and flexible partial dentures",
          ]
        : [
            "Terapiya (tishlarni og'riqsiz davolash va restavratsiya)",
            "Ortopediya (yuqori sifatli tish qo'yish, protezlash)",
            "Implantatsiya (Germaniya va Koreya mahsulotlari)",
            "Xirurgiya (og'riqsiz va asoratsiz tish olish)",
            "Ortodontiya (qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash)",
            "Raqamli optik 3D skanerlash (qolip pastasiz)",
            "Sirkon va keramika karonkalar (CAD/CAM)",
            "Zamonaviy olinadigan va olinmaydigan protezlar",
          ],
    "sameAs": [
      DOCTOR_INFO.telegramUrl,
      DOCTOR_INFO.instagramUrl,
      SITE_ORIGIN,
    ],
  };

  const graph = [websiteEntity, clinicEntity, dentistEntity, doctorEntity];

  if (Array.isArray(faqItems) && faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${homeUrl}#faq`,
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.q[lang] || item.q.uz,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a[lang] || item.a.uz,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

export const buildBookingPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/booking", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const bookingPage = {
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#booking`,
    "url": pageUrl,
    "name": lang === "ru" ? "Онлайн запись к Д-ру Мансурову" : lang === "en" ? "Online Appointment Booking" : "Onlayn qabulga yozilish",
    "about": {
      "@type": "Dentist",
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": DOCTOR_INFO.name,
      "telephone": DOCTOR_INFO.phoneRaw,
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": pageUrl,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      "result": {
        "@type": "Reservation",
        "name":
          lang === "ru"
            ? "Запись на приём к стоматологу"
            : lang === "en"
            ? "Dental appointment booking"
            : "Stomatologik qabulga yozilish",
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, bookingPage],
    };
  }

  return {
    "@context": "https://schema.org",
    ...bookingPage,
  };
};

