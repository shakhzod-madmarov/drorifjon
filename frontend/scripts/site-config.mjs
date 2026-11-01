/**
 * Single source of truth for the public route table.
 *
 * Consumed by:
 *   - scripts/generate-sitemap.mjs (writes dist/sitemap.xml after `vite build`)
 *   - scripts/prerender.mjs        (renders each route x language to static HTML)
 */

export const SITE_ORIGIN = "https://drorifjon.uz";

export const LANGS = ["uz", "ru", "en"];
export const DEFAULT_LANG = "uz";

/** Turn a canonical (Uzbek) path into its equivalent in `lang`. */
export const localizePath = (routePath = "/", lang = DEFAULT_LANG) => {
  const clean = routePath.startsWith("/") ? routePath : `/${routePath}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
};

export const ROUTES = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: {
      src: "public/dr_orifjon_og.jpg",
      title: "Stomatolog Orifjon — Vrach Stomatolog (Andijon)",
      caption:
        "Andijon Tibbiyot kolleji va O'sh Davlat Universiteti bitiruvchisi, 20+ yillik tibbiyot tajribasiga ega vrach stomatolog Stomatolog Orifjon",
    },
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Stomatologik Xizmatlar — Stomatolog Orifjon",
      caption:
        "Dental implant, breketlar, sirkon karonkalar, vinirlar, pratezlar, elaynerlar, oqartirish va og'riqsiz davolash",
    },
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/hero_smile.webp",
      title: "Stomatolog Orifjon Haqida — 20+ Yillik Tibbiyot Tajribasi",
      caption:
        "Andijon Tibbiyot kolleji (2001-2004) va O'sh Davlat Universiteti (2017-2022) bitiruvchisi",
    },
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/booking",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/qabul",
    changefreq: "weekly",
    priority: "0.8",
  },
  /* ═════════════════════════════════════════════════════════════════
     5 CORE CLINICAL SPECIALTIES
     ═════════════════════════════════════════════════════════════════ */
  {
    path: "/services/terapiya",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/treatment_therapy.webp",
      title: "Terapiya (Tishlarni og'riqsiz davolash va restavratsiya) — Stomatolog Orifjon",
      caption: "Charisma (Germaniya) va DenFil (Koreya) kompozitlari bilan og'riqsiz davolash va restavratsiya",
    },
  },
  {
    path: "/services/ortopediya",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/treatment_crowns.webp",
      title: "Ortopediya (Yuqori sifatli tish qo'yish, protezlash) — Stomatolog Orifjon",
      caption: "Sirkon va keramika karonkalar, vinirlar hamda zamonaviy protezlar",
    },
  },
  {
    path: "/services/implantatsiya",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/treatment_implant.webp",
      title: "Implantatsiya (Germaniya va Koreya mahsulotlari) — Stomatolog Orifjon",
      caption: "Mega'Gen (Koreya), AnyRidge va DXL (Germaniya) biotitan implantlari bilan og'riqsiz tish tiklash",
    },
  },
  {
    path: "/services/xirurgiya",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/treatment_surgery.webp",
      title: "Xirurgiya (Og'riqsiz va asoratsiz tish olish) — Stomatolog Orifjon",
      caption: "Orablok va Supercain Forte anesteziyasi ostida atravmatik tish olish",
    },
  },
  {
    path: "/services/ortodontiya",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/treatment_braces.webp",
      title: "Ortodontiya (Qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash) — Stomatolog Orifjon",
      caption: "Metall, keramika va sapfir breketlar bilan tishlarni tekislash",
    },
  },
  /* ═════════════════════════════════════════════════════════════════
     PROCEDURE ALIASES FOR SEAMLESS ACCESS
     ═════════════════════════════════════════════════════════════════ */
  {
    path: "/services/dental-implant",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_implant.webp",
      title: "Dental Implantatsiya — Stomatolog Orifjon",
      caption: "Biotitan implantlar bilan yo'qotilgan tishlarni og'riqsiz tiklash",
    },
  },
  {
    path: "/services/breketlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_braces.webp",
      title: "Breket Tizimlari (Metall, Keramika, Sapfir) — Stomatolog Orifjon",
      caption: "Tish qatorini to'g'irlash va ideal tishlash tizimi",
    },
  },
  {
    path: "/services/sirkon-keramika-karonkalar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_crowns.webp",
      title: "Sirkon va Keramika Karonkalar — Stomatolog Orifjon",
      caption: "Tabiiy va mustahkam sirkoniy qoplamalar",
    },
  },
  {
    path: "/services/vinirlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_veneers.webp",
      title: "Keramik Vinirlar va Tabassum Dizayni — Stomatolog Orifjon",
      caption: "Tishlarning shakli va rangini mukammallashtirish",
    },
  },
  {
    path: "/services/pratezlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_dentures.webp",
      title: "Zamonaviy Tish Pratezlari — Stomatolog Orifjon",
      caption: "Qulay va chidamli protezlar",
    },
  },
  {
    path: "/services/elaynerlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_aligners.webp",
      title: "Shaffof Elaynerlar (Ko'rinmas Kapalar) — Stomatolog Orifjon",
      caption: "Breketsiz tishlarni to'g'irlashning zamonaviy usuli",
    },
  },
  {
    path: "/services/tish-oqartirish",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_whitening.webp",
      title: "Professional Tish Oqartirish — Stomatolog Orifjon",
      caption: "Emalga zarar yetkazmasdan tishlarni xavfsiz oqartirish",
    },
  },
  {
    path: "/services/ogriqsiz-tish-davolash",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_therapy.webp",
      title: "Og'riqsiz Tish Davolash va Plombalash — Stomatolog Orifjon",
      caption: "Karies va asab kanallarini 100% og'riqsiz davolash",
    },
  },
  {
    path: "/services/ogriqsiz-tish-olish",
    changefreq: "monthly",
    priority: "0.75",
    image: {
      src: "src/assets/treatment_surgery.webp",
      title: "Og'riqsiz Tish Olish va Jarrohlik — Stomatolog Orifjon",
      caption: "Atravmatik tish olish va aql tishlarini og'riqsiz bartaraf etish",
    },
  },
];
