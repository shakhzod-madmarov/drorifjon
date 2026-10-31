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
      uz: "Nano-kompozit & Badiiy Restavratsiya",
      ru: "Нанокомпозиты & Художественная реставрация",
      en: "Nanocomposites & Artistic Restoration",
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
      uz: "Terapiya (Tishlarni og'riqsiz davolash va restavratsiya)",
      ru: "Терапия (Безболезненное лечение и реставрация зубов)",
      en: "Therapy (Painless Tooth Treatment & Aesthetic Restoration)",
    },
    shortDesc: {
      uz: "Tish kariesi, chuqur karies, pulpit va periodontitni 2 bosqichli mikro-anesteziya ostida 100% og'riqsiz davolash hamda yuqori sifatli nano-kompozitlar bilan tishning tabiiy shakli va rangini badiiy restavratsiya qilish.",
      ru: "Безболезненное лечение кариеса любой сложности, пульпита и периодонтита под двухэтапной микроанестезией, а также высокоточная эстетическая реставрация зубов нанокомпозитами последнего поколения.",
      en: "100% painless treatment of caries, pulpitis, and periodontitis under two-stage gentle micro-anesthesia, combined with advanced nano-composite artistic restoration of natural tooth anatomy and shade.",
    },
    duration: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    warranty: { uz: "Rasmiy sifat kafolati", ru: "Официальная гарантия качества", en: "Official quality guarantee" },
    highlights: {
      uz: [
        "2 bosqichli og'riqsiz mikro-anesteziya: muolaja davomida bemor mutlaqo og'riq sezmaydi",
        "Ildiz kanallarini zamonaviy endodontik usulda mikron aniqlikda tozalash va 3D germetik plombalash",
        "Germaniya va Yaponiya nano-gibrid kompozitlari bilan tabiiy tish anatomiyasi va fissuralarini tiklash",
        "Kariesni dastlabki bosqichda aniqlash va sog'lom tish to'qimasini maksimal darajada asrab qolish",
      ],
      ru: [
        "Двухэтапная микроанестезия: полный комфорт и 0% боли на протяжении всего лечения",
        "Эндодонтическая обработка и трехмерная герметичная обтурация корневых каналов",
        "Художественная реставрация нанокомпозитами из Германии и Японии с идеальным подбором оттенка",
        "Максимальное сохранение здоровых тканей зуба и долговечность реставрации",
      ],
      en: [
        "Two-stage gentle micro-anesthesia ensuring absolute comfort with zero pain sensation",
        "Advanced endodontic root canal disinfection and hermetic 3D obturation",
        "Artistic aesthetic restoration using premium German and Japanese nanocomposites",
        "Minimally invasive approach preserving natural enamel and dentin structure",
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
          uz: "Badiiy restavratsiya oddiy plombadan nimasi bilan farq qiladi?",
          ru: "Чем художественная реставрация отличается от обычной пломбы?",
          en: "How does artistic restoration differ from a standard filling?",
        },
        a: {
          uz: "Oddiy plomba shunchaki bo'shliqni to'ldiradi. Badiiy restavratsiyada esa Germaniya va Yaponiya nanokompozitlari qatlam-qatlam qo'llanilib, tishning tabiiy do'mbog'lari (fissuralari), yorug'lik o'tkazuvchanligi va anatomik shakli tabiiy tishdan ajralmas qilib tiklanadi.",
          ru: "Обычная пломба просто закрывает дефект, тогда как художественная реставрация воссоздает природную анатомию зуба, индивидуальные бугорки, фиссуры и прозрачность эмали так, что зуб неотличим от соседних.",
          en: "A standard filling merely patches a cavity. Artistic restoration rebuilds natural tooth cusps, micro-textures, and optical translucency layer-by-layer so the tooth looks indistinguishable from natural teeth.",
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
      uz: "Ortopediya (Yuqori sifatli tish qo'yish, protezlash)",
      ru: "Ортопедия (Высококачественное протезирование и установка зубов)",
      en: "Orthopedics (High-Quality Tooth Placement & Prosthetics)",
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
      uz: "Premium Biotitan",
      ru: "Премиальный биотитан",
      en: "Premium Biocompatible Titanium",
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
      uz: "Implantatsiya (Germaniya va Koreya mahsulotlari)",
      ru: "Имплантация (Премиальные импланты из Германии и Кореи)",
      en: "Implantation (German & Korean Premium Systems)",
    },
    shortDesc: {
      uz: "Yo'qotilgan tishlarni qo'shni sog'lom tishlarni charxlamasdan, Germaniya va Janubiy Koreyaning original premium biotitan implantlari yordamida 15-20 daqiqada og'riqsiz va umrbod kafolat bilan tiklash.",
      ru: "Восстановление утраченных зубов без обточки соседних за 15-20 минут с использованием оригинальных биосовместимых титановых имплантов из Германии и Южной Кореи с пожизненной гарантией.",
      en: "Gentle 15-20 minute restoration of missing teeth using original certified biocompatible titanium implants from Germany and South Korea without grinding down healthy adjacent teeth.",
    },
    duration: { uz: "15–20 daqiqa (1 qabul)", ru: "15–20 минут (1 визит)", en: "15–20 mins (1 visit)" },
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    highlights: {
      uz: [
        "Faqat sertifikatlangan Germaniya va Janubiy Koreya biotitan implant tizimlari",
        "Qo'shni sog'lom tishlarni charxlash yoki nervini olish mutlaqo talab etilmaydi",
        "20+ yillik tibbiyot tajribasi va 99.5% dan yuqori suyak integratsiyasi",
        "2 bosqichli og'riqsiz mikro-anesteziya: muolaja jarayonida 0% og'riq",
      ],
      ru: [
        "Только оригинальные сертифицированные титановые системы высшего класса из Германии и Кореи",
        "Здоровые соседние зубы не требуют обточки или депульпирования",
        "Более 20 лет практического медицинского опыта и приживаемость свыше 99.5%",
        "Двухэтапная анестезия: процедура занимает 15–20 минут абсолютно без боли",
      ],
      en: [
        "Exclusively genuine certified biocompatible titanium systems from Germany and South Korea",
        "Zero grinding or devitalizing of adjacent healthy teeth",
        "Over 20+ years of clinical healthcare practice and 99.5%+ osseointegration success",
        "Two-stage gentle local anesthesia ensuring 100% painless procedure",
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
          uz: "Implant o'rnatish tish oldirishdan ham oson va tez o'tadi! Zamonaviy 2 bosqichli anesteziya sababli bemor umuman og'riq sezmaydi. Bitta implant o'rnatish o'rtacha 15–20 daqiqa vaqt oladi.",
          ru: "Установка импланта проходит даже легче и быстрее, чем простое удаление зуба. Благодаря качественной двухэтапной анестезии вы не почувствуете боли. Сама операция занимает всего 15–20 минут.",
          en: "Implant placement is faster and gentler than a standard extraction. Modern two-stage anesthesia ensures total comfort, with the fixture placed in just 15-20 minutes.",
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
      uz: "Og'riqsiz & Asoratsiz",
      ru: "Без боли и осложнений",
      en: "Painless & Complication-Free",
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
      uz: "Xirurgiya (Og'riqsiz va asoratsiz tish olish)",
      ru: "Хирургия (Безболезненное и атравматичное удаление зубов без осложнений)",
      en: "Surgery (Painless & Complication-Free Tooth Extraction)",
    },
    shortDesc: {
      uz: "Qutqarib bo'lmaydigan, yiringlagan yoki noto'g'ri o'sgan tishlarni, shu jumladan murakkab aql tishlarini (donolik tishlari) zamonaviy atravmatik texnika va 2 bosqichli og'riqsizlantirish ostida asoratsiz olib tashlash.",
      ru: "Безопасное и безболезненное удаление зубов любой сложности, включая ретинированные и дистопированные зубы мудрости, с максимальным сохранением костной ткани и быстрым заживлением без осложнений.",
      en: "Safe, gentle, and painless extraction of compromised, impacted, or wisdom teeth using atraumatic micro-surgical techniques that protect jawbone volume and ensure smooth, complication-free healing.",
    },
    duration: { uz: "10–25 daqiqa", ru: "10–25 минут", en: "10–25 mins" },
    warranty: { uz: "Tez va xavfsiz bitish nazorati", ru: "Контроль быстрого заживления", en: "Safe healing post-op care" },
    highlights: {
      uz: [
        "Atravmatik ajratish texnikasi: jag' suyagi va tish milkini shikastlamasdan tish olish",
        "Murakkab va yotib qolgan aql tishlarini (8-tishlar) rentgen nazoratida xavfsiz bartaraf etish",
        "2 bosqichli zamonaviy anesteziya bilan 100% og'riqsiz jarrohlik",
        "Operatsiyadan keyingi shish va asoratlarning oldini oluvchi maxsus protokollar",
      ],
      ru: [
        "Атравматичная методика: бережное извлечение зуба с сохранением стенок лунки для будущей имплантации",
        "Удаление сложных ретинированных зубов мудрости под точным визуальным и рентген-контролем",
        "Двухэтапная анестезия: процедура проходит абсолютно незаметно и комфортно для пациента",
        "Проверенные протоколы против отеков и воспалений для легкого и быстрого заживления",
      ],
      en: [
        "Atraumatic technique: gentle extraction preserving bone socket walls for future implants",
        "Safe surgical removal of complex impacted wisdom teeth under careful clinical protocol",
        "Two-stage advanced local anesthesia: completely painless from start to finish",
        "Strict post-operative protocols minimizing swelling and preventing complications",
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
      uz: "Ortodontiya (Qiyshiq va notekis tish qatorlarini breketlar yordamida to'g'rilash)",
      ru: "Ортодонтия (Исправление прикуса и выравнивание кривых зубов брекетами)",
      en: "Orthodontics (Bite Correction & Alignment of Crooked Teeth with Braces)",
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
