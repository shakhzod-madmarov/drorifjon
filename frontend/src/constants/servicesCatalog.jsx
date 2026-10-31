import React from "react";
import {
  DentalToothMolar,
  DentalVeneerCrown,
  DentalImplantFixture,
  DentalSurgeryExtraction,
  DentalBracesIcon,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  /* ═════════════════════════════════════════════════════════════════
     1. TERAPIYA (TISHLARNI OG'RIQSIZ DAVOLASH VA RESTAVRATSIYA)
     ═════════════════════════════════════════════════════════════════ */
  {
    id: "terapiya",
    icon: <DentalToothMolar className="w-7 h-7 text-primary" />,
    image: assets.treatment_therapy,
    badge: {
      uz: "100% OG'RIQSIZ DAVOLASH",
      ru: "100% БЕЗБОЛЕЗНЕННОЕ ЛЕЧЕНИЕ",
      en: "100% PAINLESS THERAPY",
    },
    techTag: {
      uz: "Charisma (Germaniya) & DenFil (Koreya)",
      ru: "Charisma (Германия) & DenFil (Корея)",
      en: "Charisma (Germany) & DenFil (Korea)",
    },
    featurePill: {
      uz: "Tabiiy Emal Anatomiyasi",
      ru: "Анатомия естественной эмали",
      en: "Natural Enamel Anatomy",
    },
    badgeTheme: {
      badgeBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      warrantyBg: "bg-teal-950/85 text-teal-300 border-teal-400/50",
      accentGlow: "hover:shadow-emerald-500/10",
    },
    category: {
      uz: "Terapevtik Stomatologiya",
      ru: "Терапевтическая Стоматология",
      en: "Therapeutic Dentistry",
    },
    title: {
      uz: "Terapiya va Badiiy Restavratsiya",
      ru: "Терапия и Художественная Реставрация",
      en: "Therapy & Aesthetic Restoration",
    },
    shortDesc: {
      uz: "Tish kariesi, chuqur karies, pulpit va periodontitni Supercain Forte va Orablok mikro-anesteziyasi ostida 100% og'riqsiz davolash hamda original Charisma (Germaniya) va DenFil (Janubiy Koreya) nano-kompozitlari yordamida tishning tabiiy anatomik shakli va rangini badiiy restavratsiya qilish.",
      ru: "Безболезненное лечение кариеса любой сложности, пульпита и периодонтита под анестезией Суперкаин Форте и Ораблок, а также высокоточная реставрация зубов премиальными нанокомпозитами Charisma (Германия) и DenFil (Южная Корея).",
      en: "100% painless treatment of caries, pulpitis, and periodontitis under Supercain Forte & Orabloc micro-anesthesia, combined with artistic restoration using genuine Charisma (Germany) and DenFil (South Korea) nanocomposites.",
    },
    duration: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    warranty: { uz: "Rasmiy sifat kafolati", ru: "Официальная гарантия качества", en: "Official quality guarantee" },
    highlights: {
      uz: [
        "2 bosqichli og'riqsiz anesteziya (Orablok & Supercain Forte): muolaja davomida bemor mutlaqo og'riq sezmaydi",
        "Charisma (Germaniya) mikro-shisha kompoziti: tish emaliga moslashuvchi 'xameleon' effekti va ko'zgu jilosi",
        "DenFil (Janubiy Koreya) mikro-gibrid material: 300+ MPa chaynash bosimiga chidamli, mikroskopik past qisqarish (1.6%)",
        "Ildiz kanallarini zamonaviy endodontik usulda mikron aniqlikda tozalash va 3D germetik plombalash",
      ],
      ru: [
        "Двухэтапная анестезия (Ораблок и Суперкаин Форте): полный комфорт и 0% боли на протяжении всей процедуры",
        "Микростекольный композит Charisma (Германия): эффект 'хамелеона' и идеальная полируемость под натуральную эмаль",
        "Сверхпрочный наногибрид DenFil (Южная Корея): выдерживает жевательные нагрузки свыше 300 МПа, минимальная усадка",
        "Эндодонтическая обработка и трехмерная герметичная обтурация корневых каналов",
      ],
      en: [
        "Two-stage gentle anesthesia (Orabloc & Supercain Forte) ensuring absolute comfort with zero pain sensation",
        "Charisma (Germany) microglass composite: natural chameleon optical blending and mirror-like enamel sheen",
        "DenFil (South Korea) micro-hybrid: 300+ MPa compressive strength with minimal polymerization shrinkage (< 1.6%)",
        "Advanced endodontic root canal disinfection and hermetic 3D obturation",
      ],
    },
    indications: {
      uz: [
        "Har qanday darajadagi karies (yuzaki, o'rta va chuqur karies)",
        "Issiq yoki sovuqqa, shirin taomlarga nisbatan o'tkir og'riq (pulpit alomatlari)",
        "Tish ildizi sohasidagi surunkali noqulaylik va yallig'lanish (periodontit)",
        "Tishning sinishi, emal yemirilishi va estetik nuqsonlarni badiiy tiklash",
        "Eski, rangi qoraygan yoki germetikligini yo'qotgan plombalarni almashtirish",
      ],
      ru: [
        "Кариес различной степени (поверхностный, средний, глубокий)",
        "Острая или ноющая боль от холодного, горячего или сладкого (признаки пульпита)",
        "Воспалительные процессы в области верхушки корня (периодонтит)",
        "Сколы, трещины эмали и дефекты формы зуба, требующие художественного восстановления",
        "Необходимость замены старых, потемневших или разрушенных пломб",
      ],
      en: [
        "Dental caries at any stage (superficial, moderate, or deep)",
        "Acute tooth sensitivity to hot, cold, or sweets indicating pulpitis",
        "Root apex inflammation or discomfort requiring endodontic therapy (periodontitis)",
        "Chipped, cracked, or worn tooth enamel needing artistic reconstruction",
        "Replacement of defective, leaking, or discolored old restorations",
      ],
    },
    faq: [
      {
        q: {
          uz: "Tish davolash rostdan ham 100% og'riqsiz bo'ladimi?",
          ru: "Лечение зубов действительно проходит на 100% без боли?",
          en: "Is dental treatment truly 100% painless?",
        },
        a: {
          uz: "Ha, mutlaqo og'riqsiz! Biz 2 bosqichli og'riqsizlantirish usulidan foydalanamiz: dastlab milk yuzasi shirin ta'mli maxsus gel bilan muzlatiladi, so'ngra mikro-igna yordamida Yevropa anestetigi kiritiladi. Bemor muolaja davomida hech qanday og'riq sezmaydi.",
          ru: "Да, абсолютно безболезненно! Мы применяем двухэтапную анестезию: сначала десна обрабатывается обезболивающим гелем, после чего микроиглой вводится европейский анестетик. Вы не почувствуете даже укола.",
          en: "Yes, completely painless! We apply a two-stage anesthesia protocol: a gentle topical numbing gel is applied first, followed by micro-injection of premium European anesthetic. You will feel zero discomfort.",
        },
      },
      {
        q: {
          uz: "Plombalashda Charisma (Germaniya) va DenFil (Koreya) materiallarining qanday afzalliklari bor?",
          ru: "В чем преимущества пломбировочных материалов Charisma (Германия) и DenFil (Корея)?",
          en: "What are the clinical advantages of Charisma (Germany) and DenFil (Korea) composites?",
        },
        a: {
          uz: "Nemis Charisma kompoziti o'zining mikro-shisha zarrachalari va 'xameleon' effekti bilan oldingi tishlar tabassum zonasida tabiiy emaldan mutlaqo ajralmaydi. Janubiy Koreyaning DenFil materiali esa 80% dan ortiq anorganik zichlikka ega bo'lib, orqa chaynov tishlarida 300+ MPa kuchli bosimga bardosh beradi va 10-15 yil yemirilmay xizmat qiladi.",
          ru: "Немецкий нанокомпозит Charisma благодаря эффекту 'хамелеона' и микростекольным частицам идеально подходит для передней зоны улыбки, полностью сливаясь с естественной эмалью. Корейский DenFil с 80% минеральным наполнением обеспечивает рекордную прочность (свыше 300 МПа) на жевательных зубах без сколов и микроусадки.",
          en: "German Charisma composite features microglass submicron fillers and a chameleon optical effect that seamlessly blends with natural enamel in the smile line. South Korea's DenFil offers 80%+ inorganic loading, withstanding heavy 300+ MPa chewing loads without wear or secondary microleakage.",
        },
      },
    ],
  },

  /* ═════════════════════════════════════════════════════════════════
     2. ORTOPEDIYA (YUQORI SIFATLI TISH QO'YISH, PROTEZLASH)
     ═════════════════════════════════════════════════════════════════ */
  {
    id: "ortopediya",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_crowns,
    badge: {
      uz: "YUQORI SIFATLI TISH QO'YISH",
      ru: "ВЫСОКОТОЧНОЕ ПРОТЕЗИРОВАНИЕ",
      en: "PRECISION PROSTHETICS",
    },
    techTag: {
      uz: "Sirkon & Keramika & Protezlar",
      ru: "Цирконий & Керамика & Протезы",
      en: "Zirconia & Ceramic & Dentures",
    },
    featurePill: {
      uz: "100% Chaynash & Estetika",
      ru: "100% Функция & Эстетика",
      en: "100% Chewing & Aesthetics",
    },
    badgeTheme: {
      badgeBg: "bg-amber-950/85 text-amber-300 border-amber-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-amber-500/10",
    },
    category: {
      uz: "Ortopedik Stomatologiya",
      ru: "Ортопедическая Стоматология",
      en: "Prosthetic Dentistry",
    },
    title: {
      uz: "Ortopediya va Sirkon Protezlash",
      ru: "Ортопедия и Циркониевое Протезирование",
      en: "Orthopedics & Zirconia Prosthetics",
    },
    shortDesc: {
      uz: "Yo'qotilgan yoki shikastlangan tishlarni yuqori aniqlikdagi sirkoniy (Zirconia) va presslangan keramika (IPS E.max) karonkalar, estetik vinirlar hamda zamonaviy qulay olinadigan va olinmaydigan protezlar yordamida tiklash.",
      ru: "Восстановление разрушенных и отсутствующих зубов с применением сверхточных коронок из диоксида циркония и прессованной керамики E.max, эстетических виниров, а также удобных современных съемных и несъемных протезов.",
      en: "Restoring broken or missing teeth with high-strength zirconia and IPS E.max pressed ceramic crowns, cosmetic veneers, and comfortable modern removable and fixed dental prosthetics.",
    },
    duration: { uz: "3–5 kun (2–3 qabul)", ru: "3–5 дней (2–3 визита)", en: "3–5 days (2–3 visits)" },
    warranty: { uz: "10 yildan 15 yilgacha kafolat", ru: "Гарантия 10–15 лет", en: "10 to 15 years warranty" },
    highlights: {
      uz: [
        "Raqamli 3D optik skanerlash: noqulay qolip pastasiz tish o'lchamlarini mikron aniqlikda olish",
        "Metall-siz monolit sirkoniy va IPS E.max: tabiiy tishdek mustahkam va tabiiy nur o'tkazuvchan",
        "Zamonaviy byugel, elastik neylon va akril protezlar: jag'ga mustahkam o'rnashadi, tushib ketmaydi",
        "Tish milkiga 100% moslashuvchanlik, qorayishsiz chiroyli chegara va uzoq yillik xizmat",
      ],
      ru: [
        "Цифровое 3D-сканирование без неприятных слепочных масс с микронной точностью прилегания",
        "Безметалловые коронки из диоксида циркония и IPS E.max с естественной светопроницаемостью",
        "Современные бюгельные и нейлоновые съемные протезы с надежной комфортной фиксацией",
        "Идеальное краевое прилегание к десне без потемнений, гипоаллергенность и долговечность",
      ],
      en: [
        "Digital 3D intraoral scanning without gooey impression pastes for micrometer precision",
        "Metal-free monolithic zirconia and IPS E.max ceramics mimicking natural enamel translucency",
        "Modern precision clasp (buckle) and flexible removable dentures with rock-solid retention",
        "Biocompatible gum adaptation, zero allergic reactions, and proven multi-year longevity",
      ],
    },
    indications: {
      uz: [
        "Tish toj qismining 50% dan ko'prog'i yemirilgan yoki singan holatlar",
        "Bir nechta yoki barcha tishlarning yo'qligi sababli ovqat chaynash qiyinligi",
        "Old tishlarning shakli va rangini tubdan yaxshilash (vinir va karonkalar)",
        "Eski metall-keramika karonkalarning qorayishi yoki yaroqsiz holga kelishi",
      ],
      ru: [
        "Разрушение коронковой части зуба более чем на 50%",
        "Частичная или полная потеря зубов и нарушение жевательной функции",
        "Необходимость эстетического преображения передних зубов винирами или коронками",
        "Сколы, износ или потемнение старых металлокерамических коронок",
      ],
      en: [
        "More than 50% loss or structural breakdown of natural tooth crown",
        "Partial or total tooth loss requiring full functional restoration",
        "Need for aesthetic smile transformation with ceramic veneers or crowns",
        "Compromised, chipped, or dark-bordered old metal-ceramic crowns",
      ],
    },
    faq: [
      {
        q: {
          uz: "Sirkoniy karonka metall-keramikadan nimasi bilan ustun?",
          ru: "Чем коронки из диоксида циркония лучше металлокерамики?",
          en: "Why is a zirconia crown superior to metal-ceramic?",
        },
        a: {
          uz: "Sirkoniy tarkibida qora metall karkas bo'lmaydi, shuning uchun milk cheti qoraymaydi, allergik reaktsiya chaqirmaydi va tabiiy tish kabi nur o'tkazadi. U 3-4 barobar mustahkam va 15 yildan ortiq xizmat qiladi.",
          ru: "Диоксид циркония не содержит темного металлического каркаса, не вызывает аллергии и не дает темной полосы у десны. Он пропускает свет как живой зуб, при этом в разы прочнее и служит более 15 лет.",
          en: "Zirconia has no dark metal substructure, preventing gum discoloration and allergic reactions. It is biocompatible, translucent like natural teeth, and significantly stronger for long-lasting durability.",
        },
      },
    ],
  },

  /* ═════════════════════════════════════════════════════════════════
     3. IMPLANTATSIYA (GERMANIYA VA KOREYA MAHSULOTLARI)
     ═════════════════════════════════════════════════════════════════ */
  {
    id: "implantatsiya",
    icon: <DentalImplantFixture className="w-7 h-7 text-primary" />,
    image: assets.treatment_implant,
    badge: {
      uz: "GERMANIYA VA KOREYA MAHSULOTLARI",
      ru: "СИСТЕМЫ ИЗ ГЕРМАНИИ И КОРЕИ",
      en: "GERMAN & KOREAN SYSTEMS",
    },
    techTag: {
      uz: "Mega'Gen · AnyRidge · DXL",
      ru: "Mega'Gen · AnyRidge · DXL",
      en: "Mega'Gen · AnyRidge · DXL",
    },
    featurePill: {
      uz: "Suyak Integratsiyasi 99.5%",
      ru: "Приживаемость 99.5%",
      en: "99.5% Integration",
    },
    badgeTheme: {
      badgeBg: "bg-sky-950/85 text-sky-300 border-sky-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-sky-500/10",
    },
    category: {
      uz: "Dental Implantologiya",
      ru: "Дентальная Имплантология",
      en: "Dental Implantology",
    },
    title: {
      uz: "Germaniya va Koreya Implantatsiyasi",
      ru: "Дентальная Имплантация (Германия/Корея)",
      en: "German & Korean Dental Implantation",
    },
    shortDesc: {
      uz: "Yo'qotilgan tishlarni qo'shni sog'lom tishlarni charxlamasdan, Janubiy Koreyaning Mega'Gen hamda Germaniyaning AnyRidge (AnyRidch) va DXL original premium biotitan implantlari yordamida 15-20 daqiqada og'riqsiz va umrbod kafolat bilan tiklash.",
      ru: "Восстановление утраченных зубов без обточки соседних за 15-20 минут с использованием оригинальных биосовместимых титановых систем Mega'Gen (Корея), AnyRidge (Германия) и DXL (Германия) с пожизненной гарантией.",
      en: "Restoring missing teeth in 15-20 minutes without grinding healthy adjacent teeth, utilizing certified premium bio-titanium systems: Mega'Gen (Korea), AnyRidge (Germany), and DXL (Germany) with lifetime warranty.",
    },
    duration: { uz: "15–20 daqiqa (1 qabul)", ru: "15–20 минут (1 визит)", en: "15–20 mins (1 visit)" },
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    highlights: {
      uz: [
        "Mega'Gen (Janubiy Koreya): Xpeed kaltsiyli nano-qoplama va KnifeThread patentlangan rezbasi bilan suyakka 2 barobar tez o'rnashadi",
        "AnyRidge (AnyRidch Germaniya): minimal burg'ulash talab qiluvchi, suyakni maksimal asrovchi va bir kunda yuklama beruvchi tizim",
        "DXL (Germaniya): yuqori toifali sof tibbiy biotitan (Grade 4/5), mikron aniqlikdagi konus birikma va umrbod xizmat",
        "2 bosqichli og'riqsiz anesteziya (Orablok & Supercain Forte) — 15-20 daqiqada mutlaqo og'riqsiz o'rnatish",
      ],
      ru: [
        "Mega'Gen (Южная Корея): кальцинированное нанопокрытие Xpeed и резьба KnifeThread для ускоренной остеоинтеграции",
        "AnyRidge (AnyRidch Германия): костесохраняющая система с минимальным сверлением и возможностью немедленной нагрузки",
        "DXL (Германия): оригинальный немецкий медицинский биотитан Grade 4/5, микроконусное соединение без зазоров и микроподвижности",
        "Двухэтапная анестезия (Ораблок и Суперкаин Форте): комфортная установка за 15–20 минут абсолютно без боли",
      ],
      en: [
        "Mega'Gen (South Korea): Xpeed calcium nano-surface and KnifeThread design cutting osseointegration time in half",
        "AnyRidge (AnyRidch Germany): bone-preserving progressive architecture requiring minimal drilling for immediate restoration",
        "DXL (Germany): genuine German medical Grade 4/5 bio-titanium with precision Morse-taper cone connection and zero micro-gaps",
        "Two-stage gentle local anesthesia (Orabloc & Supercain Forte) ensuring 15-20 minute 100% painless placement",
      ],
    },
    indications: {
      uz: [
        "Bir yoki bir nechta tish yo'qolishi va chaynashdagi noqulaylik",
        "Qo'shni sog'lom tishlarni asrab qolgan holda yangi tish o'rnatish istagi",
        "Noqulay olinadigan protezlar o'rniga mustahkam sun'iy ildiz o'rnatish",
        "Tish olingandan so'ng jag' suyagi yupqalashishining oldini olish",
      ],
      ru: [
        "Отсутствие одного, нескольких или всех зубов",
        "Желание сохранить соседние здоровые зубы нетронутыми без обточки",
        "Замена неудобных съемных протезов на долговечные постоянные зубы",
        "Предотвращение атрофии и убыли костной ткани челюсти",
      ],
      en: [
        "Loss of one, multiple, or all teeth causing functional chewing deficits",
        "Desire to replace missing teeth without damaging adjacent healthy teeth",
        "Upgrading loose or clicking removable dentures to permanently anchored teeth",
        "Preventing jawbone atrophy and facial collapse following tooth extraction",
      ],
    },
    faq: [
      {
        q: {
          uz: "Dental implant o'rnatish og'riqlimi va qancha vaqt davom etadi?",
          ru: "Больно ли ставить имплант и сколько времени занимает процедура?",
          en: "Is dental implant surgery painful and how long does it take?",
        },
        a: {
          uz: "Implant o'rnatish tish oldirishdan ham oson va tez o'tadi! Supercain Forte va Orablok mikro-anesteziyasi tufayli bemor umuman og'riq sezmaydi. Bitta implant o'rnatish o'rtacha 15–20 daqiqa vaqt oladi.",
          ru: "Установка импланта проходит даже комфортнее, чем обычное удаление. Благодаря анестезии Ораблок и Суперкаин Форте вы абсолютно ничего не почувствуете. Вся операция занимает 15–20 минут.",
          en: "Implant placement is faster and gentler than an extraction. Thanks to advanced Orabloc and Supercain Forte micro-anesthesia, you feel zero discomfort, with placement taking only 15-20 minutes.",
        },
      },
      {
        q: {
          uz: "Mega'Gen (Koreya), AnyRidge (Germaniya) va DXL (Germaniya) implantlarining qanday farqi bor?",
          ru: "В чем разница между имплантами Mega'Gen (Корея), AnyRidge (Германия) и DXL (Германия)?",
          en: "What is the difference between Mega'Gen (Korea), AnyRidge (Germany), and DXL (Germany) implants?",
        },
        a: {
          uz: "Mega'Gen (Janubiy Koreya) o'zining KnifeThread rezbasi bilan har qanday zichlikdagi suyakda a'lo darajadagi dastlabki mahkamlikni ta'minlaydi. AnyRidge (AnyRidch Germaniya) tizimi esa suyak to'qimasini maksimal darajada saqlab qoluvchi nozik arxitekturaga ega bo'lib, o'sha kuniyoq vaqtinchalik yoki doimiy tish o'rnatish uchun ideal. DXL (Germaniya) — toza tibbiy biotitandan (Grade 4/5) tayyorlangan mikron aniqlikdagi konus ulanishli nemis muhandislik cho'qqisi hisoblanadi. Shifokor kompyuter tomografiyasi (KT) asosida sizning suyak holatingizga eng mos tizimni tanlaydi.",
          ru: "Mega'Gen (Корея) с резьбой KnifeThread гарантирует идеальную фиксацию даже в мягкой кости и ускоренную интеграцию Xpeed. AnyRidge (AnyRidch Германия) бережно сохраняет кортикальную кость и позволяет нагружать имплант коронкой в кратчайшие сроки. DXL (Германия) — классическая прецизионная немецкая точность из чистого биотитана Grade 4/5 с герметичным конусным соединением без микрозазоров. Врач подберет идеальную систему на основе вашего 3D-снимка КТ.",
          en: "Mega'Gen (Korea) delivers exceptional primary stability with KnifeThread and rapid Xpeed nano-integration. AnyRidge (AnyRidch Germany) features bone-preserving progressive geometry ideal for immediate aesthetic loading. DXL (Germany) represents ultra-precise German engineering from medical Grade 4/5 pure bio-titanium with hermetic zero-gap cone connection. Dentist Orifjon selects the optimal system based on your individual 3D CBCT scan.",
        },
      },
    ],
  },

  /* ═════════════════════════════════════════════════════════════════
     4. XIRURGIYA (OG'RIQSIZ VA ASORATSIZ TISH OLISH)
     ═════════════════════════════════════════════════════════════════ */
  {
    id: "xirurgiya",
    icon: <DentalSurgeryExtraction className="w-7 h-7 text-primary" />,
    image: assets.treatment_surgery,
    badge: {
      uz: "ATRAVMATIK VA XAVFSIZ",
      ru: "АТРАВМАТИЧНО И БЕЗОПАСНО",
      en: "ATRAUMATIC & SAFE",
    },
    techTag: {
      uz: "Supercain Forte · Artikain · Orablok",
      ru: "Суперкаин Форте · Артикаин · Ораблок",
      en: "Supercain Forte · Articaine · Orabloc",
    },
    featurePill: {
      uz: "Suyak To'qimasini Saqlash",
      ru: "Сохранение кости",
      en: "Bone Preservation",
    },
    badgeTheme: {
      badgeBg: "bg-rose-950/85 text-rose-300 border-rose-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-rose-500/10",
    },
    category: {
      uz: "Jarrohlik Stomatologiyasi",
      ru: "Хирургическая Стоматология",
      en: "Surgical Dentistry",
    },
    title: {
      uz: "Atravmatik Xirurgiya va Tish Olish",
      ru: "Атравматичная Хирургия и Удаление Зубов",
      en: "Gentle Oral Surgery & Extractions",
    },
    shortDesc: {
      uz: "Qutqarib bo'lmaydigan yoki noto'g'ri o'sgan tishlarni, shu jumladan murakkab aql tishlarini individual steril Orablok, Supercain Forte va Artikain anesteziyasi ostida 100% og'riqsiz, atravmatik texnika bilan asoratsiz olib tashlash.",
      ru: "Безопасное удаление зубов любой сложности, включая ретинированные зубы мудрости, под европейской анестезией Ораблок, Суперкаин Форте и Артикаин без боли, с сохранением костной ткани.",
      en: "Safe and gentle extraction of compromised or impacted wisdom teeth under certified Orabloc, Supercain Forte, and Articaine anesthesia — 100% painless with atraumatic bone preservation.",
    },
    duration: { uz: "10–25 daqiqa", ru: "10–25 минут", en: "10–25 mins" },
    warranty: { uz: "Tez va xavfsiz bitish nazorati", ru: "Контроль быстрого заживления", en: "Safe healing post-op care" },
    highlights: {
      uz: [
        "2 bosqichli og'riqsizlantirish: Yevropaning Orablok (steril blisterli karpula) va Supercain Forte preparatlari bilan 100% og'riqsiz muolaja",
        "Artikain formulasining yuqori suyak o'tkazuvchanligi: tish atrofi chuqur muzlaydi, noqulaylik mutlaqo sezilmaydi",
        "Atravmatik ajratish texnikasi: jag' suyagi va tish milkini shikastlamasdan tish olish (kelgusida implant o'rnatish uchun ideal)",
        "Murakkab va yotib qolgan aql tishlarini (8-tishlar) rentgen nazoratida xavfsiz bartaraf etish",
      ],
      ru: [
        "Двухэтапная анестезия премиум-класса: стерильный европейский Ораблок (в блистере) и Суперкаин Форте гарантируют 0% боли",
        "Высокая костная диффузия артикаина обеспечивает глубокое обезболивание даже при сильном воспалении",
        "Атравматичная методика: бережное извлечение зуба с сохранением стенок лунки для последующей имплантации",
        "Удаление сложных ретинированных зубов мудрости под точным визуальным и рентген-контролем",
      ],
      en: [
        "Two-stage gentle protocol: sterile European Orabloc (blister carpules) and Supercain Forte for zero pain",
        "High bone tissue diffusion of modern articaine ensuring deep, dependable analgesia even with acute inflammation",
        "Atraumatic micro-surgical technique preserving socket bone architecture for future implant placement",
        "Safe extraction of complex and impacted wisdom teeth under careful clinical protocol",
      ],
    },
    indications: {
      uz: [
        "Terapevtik yoki ortopedik yo'l bilan tiklab bo'lmaydigan qattiq singan yoki zararlangan tishlar",
        "Noto'g'ri o'sgan, milk ostida qolgan yoki qattiq og'riq berayotgan aql tishlari (8-tishlar)",
        "Tish ildizi atrofidagi surunkali yiringli o'choqlar yoki kistalar",
        "Ortodontik davolash (breket taqish) uchun jag'da joy ochish zarurati",
      ],
      ru: [
        "Зубы, разрушенные ниже уровня десны и не подлежащие восстановлению",
        "Ретинированные, дистопированные или вызывающие воспаление зубы мудрости",
        "Хронические очаги воспаления, гранулемы и кисты у корней зубов",
        "Показания ортодонта для освобождения места при установке брекетов",
      ],
      en: [
        "Severely decayed teeth fractured below the gumline beyond restoration",
        "Impacted, misaligned, or painful wisdom teeth causing crowding or pericoronitis",
        "Chronic periapical cysts or extensive bone infections around the root apex",
        "Orthodontic indications requiring selective space creation for braces alignment",
      ],
    },
    faq: [
      {
        q: {
          uz: "Aql tishini (8-tish) oldirish xavflimi va og'riq bo'ladimi?",
          ru: "Опасно ли удалять зуб мудрости и будет ли больно?",
          en: "Is wisdom tooth removal dangerous and does it hurt?",
        },
        a: {
          uz: "Mutlaqo xavfsiz va og'riqsiz! Biz rentgen orqali tish ildizlarining aniq joylashuvini ko'ramiz va zamonaviy mikro-jarrohlik asboblari yordamida uni atravmatik usulda olamiz. Muolaja davomida og'riq sezilmaydi, so'ngra tez bitishi uchun barcha tavsiyalar beriladi.",
          ru: "Это совершенно безопасно и не больно! Мы предварительно изучаем анатомию корней по снимку и бережно удаляем зуб микрохирургическими инструментами. Процедура безболезненна, а заживление проходит легко.",
          en: "Completely safe and painless! We evaluate the exact root anatomy on digital imaging and extract the tooth atraumatically using micro-instruments without damaging surrounding tissue.",
        },
      },
      {
        q: {
          uz: "Anesteziya vositalari (Supercain Forte, Artikain, Orablok) organizm uchun xavfsizmi?",
          ru: "Безопасны ли анестетики Суперкаин Форте, Артикаин и Ораблок для организма?",
          en: "Are Supercain Forte, Articaine, and Orabloc anesthetics safe for the body?",
        },
        a: {
          uz: "Ha, bu vositalar jahon stomatologiyasida oltin standart hisoblanadi. Yevropaning Orablok (individual blisterli steril karpula) va Supercain Forte preparatlari artikain asosida ishlab chiqarilgan. Ular qonda 20 daqiqada xavfsiz parchalanadi, jigar va buyraklarga ortiqcha yuklama bermaydi hamda tez va chuqur og'riqsizlantirishni ta'minlaydi.",
          ru: "Да, эти препараты являются золотым стандартом мировой стоматологии. Итальянский Ораблок (в индивидуальных стерильных блистерах) и Суперкаин Форте созданы на основе высокоочищенного артикаина. Они выводятся из плазмы всего за 20 минут, не нагружают печень и почки и гарантируют быстрое глубокое обезболивание.",
          en: "Yes, these formulations represent the international gold standard in dental local anesthesia. European Orabloc (sterile blister-packed glass carpules) and Supercain Forte are based on ultra-pure articaine. With a rapid 20-minute plasma half-life, they place minimal burden on internal organs while delivering fast, dependable analgesia.",
        },
      },
    ],
  },

  /* ═════════════════════════════════════════════════════════════════
     5. ORTODONTIYA (QIYSHIQ VA NOTEKIS TISH QATORLARINI BREKETLAR YORDAMIDA TO'G'RILASH)
     ═════════════════════════════════════════════════════════════════ */
  {
    id: "ortodontiya",
    icon: <DentalBracesIcon className="w-7 h-7 text-primary" />,
    image: assets.treatment_braces,
    badge: {
      uz: "MUKAMMAL TISHLASH & TABASSUM",
      ru: "ИДЕАЛЬНЫЙ ПРИКУС И УЛЫБКА",
      en: "PERFECT BITE & SMILE",
    },
    techTag: {
      uz: "Zamonaviy Breket Tizimlari",
      ru: "Современные брекет-системы",
      en: "Modern Braces Systems",
    },
    featurePill: {
      uz: "Metall · Keramika · Sapfir",
      ru: "Металл · Керамика · Сапфир",
      en: "Metal · Ceramic · Sapphire",
    },
    badgeTheme: {
      badgeBg: "bg-indigo-950/85 text-indigo-300 border-indigo-400/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-indigo-500/10",
    },
    category: {
      uz: "Ortodontiya",
      ru: "Ортодонтия",
      en: "Orthodontics",
    },
    title: {
      uz: "Ortodontiya va Breket Tizimlari",
      ru: "Ортодонтия и Брекет-Системы",
      en: "Orthodontics & Modern Braces",
    },
    shortDesc: {
      uz: "Qiyshiq, notekis, zich yoki orasi ochiq tish qatorlarini zamonaviy metall, keramika va estetik sapfir breket tizimlari yordamida to'g'rilash hamda ideal tishlash (prikus) tizimini barpo etish.",
      ru: "Эффективное исправление неровных, искривленных и скученных зубных рядов с помощью современных металлических, керамических и сапфировых брекетов для формирования правильного прикуса и ровной улыбки.",
      en: "Comprehensive alignment of crooked, crowded, or uneven dental arches and malocclusion correction using state-of-the-art metal, discreet ceramic, and sapphire braces systems for lifelong straight teeth.",
    },
    duration: { uz: "12–18 oy (muntazam nazorat)", ru: "12–18 месяцев (наблюдение)", en: "12–18 months" },
    warranty: { uz: "Barqaror natija kafolati", ru: "Гарантия стабильного результата", en: "Stable lifetime retention" },
    highlights: {
      uz: [
        "Klassik metall, o'z-o'zini ligaturlaydigan (Damon) hamda ko'rinmas estetik keramik/sapfir breketlar",
        "Bolalar, o'smirlar va kattalar uchun individual tashxis va davolash rejasi",
        "Jag' bo'g'imiga tushadigan ortiqcha yuklamani bartaraf etish va yuz simmetriyasini tiklash",
        "Davolash yakunida tekislangan tishlarning qayta surilmasligi uchun ishonchli reteynerlar",
      ],
      ru: [
        "Классические металлические, самолигирующие Damon и эстетические керамические/сапфировые брекеты",
        "Эффективное исправление прикуса в любом возрасте (дети, подростки, взрослые)",
        "Снятие лишней нагрузки с височно-нижнечелюстного сустава и гармонизация овала лица",
        "Надежная ретенция: фиксация идеального положения зубов после снятия брекетов",
      ],
      en: [
        "Classic metal, low-friction self-ligating Damon, and clear aesthetic ceramic/sapphire brackets",
        "Highly successful orthodontic treatment for patients of all ages (teens and adults)",
        "Relieving TMJ joint stress and improving facial symmetry and chewing balance",
        "Dedicated post-treatment retention protocols keeping teeth permanently straight",
      ],
    },
    indications: {
      uz: [
        "Tishlarning qiyshiq, burilgan yoki bir-birining ustiga chiqib qolishi (zichlik)",
        "Tishlar oralig'idagi sezilarli bo'shliqlar (diastema va tremalar)",
        "Noto'g'ri tishlash (chuqur, ochiq, distal yoki mezial prikus)",
        "Notekis tishlar sababli chaynash qiyinligi va emalning notekis yemirilishi",
      ],
      ru: [
        "Скученность, неровность, смещение или поворот зубов вокруг оси",
        "Широкие межзубные промежутки (диастемы и тремы)",
        "Патологический прикус любого типа (глубокий, открытый, мезиальный, дистальный)",
        "Неравномерное стирание зубов и дискомфорт при смыкании челюстей",
      ],
      en: [
        "Crooked, overlapping, tipped, or crowded teeth in either dental arch",
        "Unwanted gaps or wide spacing between teeth (diastemas and spacing)",
        "Malocclusion disorders including deep bite, open bite, and crossbite",
        "Abnormal enamel wear and chewing discomfort stemming from misaligned bite",
      ],
    },
    faq: [
      {
        q: {
          uz: "Katta yoshda ham breket taqib tishlarni to'g'rilash mumkinmi?",
          ru: "Можно ли ставить брекеты во взрослом возрасте?",
          en: "Can adults get braces to straighten their teeth?",
        },
        a: {
          uz: "Albatta! Breket taqish uchun hech qanday yuqori yosh chegarasi yo'q. Zamonaviy breket tizimlari yordamida 25, 35 va hatto 50 yoshdan keyin ham tishlarni to'liq tekislash va sog'lom tabassumga erishish mumkin.",
          ru: "Конечно! Для ортодонтического лечения нет возрастных ограничений. Современные брекеты позволяют успешно выровнять зубы и исправить прикус в 25, 35 и даже после 50 лет.",
          en: "Absolutely! There is no upper age limit for orthodontic treatment. Modern braces effectively straighten crooked teeth and correct bites at 25, 35, or even 50+.",
        },
      },
    ],
  },
];

/**
 * Backward compatibility alias mapping for existing and old links.
 */
export const SERVICE_ALIASES = {
  "dental-implant": "implantatsiya",
  "breketlar": "ortodontiya",
  "sirkon-keramika-karonkalar": "ortopediya",
  "vinirlar": "ortopediya",
  "pratezlar": "ortopediya",
  "elaynerlar": "ortodontiya",
  "tish-oqartirish": "terapiya",
  "ogriqsiz-tish-davolash": "terapiya",
  "ogriqsiz-tish-olish": "xirurgiya",
};

export const resolveServiceId = (id) => {
  if (!id) return SERVICES_CATALOG[0].id;
  const targetId = SERVICE_ALIASES[id] || id;
  const match = SERVICES_CATALOG.find((s) => s.id === targetId);
  return match ? match.id : SERVICES_CATALOG[0].id;
};
