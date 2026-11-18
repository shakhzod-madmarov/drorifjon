/**
 * Single source of truth for Dr. Orifjon's Real Clinical Results & Cases.
 * Powers the /results page, Home showcase, and SEO schemas.
 */

export const CLINICAL_CASES = [
  {
    id: "case-ortodontiya-breket-6-oy",
    category: "ortodontiya",
    categoryBadge: {
      uz: "Ortodontiya · Breketlar",
      ru: "Ортодонтия · Брекеты",
      en: "Orthodontics · Braces",
    },
    serviceId: "ortodontiya",
    timeline: {
      uz: "Aprel 2026 — Oktyabr 2026",
      ru: "Апрель 2026 — Октябрь 2026",
      en: "April 2026 — October 2026",
    },
    durationBadge: {
      uz: "6 Oylik Natija",
      ru: "Результат за 6 месяцев",
      en: "6-Month Result",
    },
    title: {
      uz: "Yuqori va pastki tishlar kuchli qiyshiqligini breketlar bilan tekislash",
      ru: "Исправление выраженной скученности и кривизны зубных рядов брекетами",
      en: "Severe dental arch crowding and protrusion correction using braces",
    },
    summary: {
      uz: "Bemor yuqori va pastki tishlarning o'tkir burchak ostida chiqib ketishi va kuchli zichlik shikoyati bilan murojaat qildi. Atigi 6 oy ichida zamonaviy metall breket tizimi orqali tishlar tekislanib, to'g'ri tishlash (prikus) o'rnatildi.",
      ru: "Пациент обратился с выраженной скученностью, протрузией резцов и неправильным прикусом. Всего за 6 месяцев с помощью металлической брекет-системы зубные ряды выровнены и восстановлена правильная окклюзия.",
      en: "Patient presented with severe upper and lower crowding, incisor protrusion, and malocclusion. In just 6 months of modern fixed braces therapy, both dental arches achieved balanced alignment.",
    },
    diagnosis: {
      uz: "Yuqori markaziy kurak tishlarning oldinga bo'rtib chiqishi (protrusiya), pastki tishlarning zichligi, emal qorayishi va tosh to'planishi.",
      ru: "Протрузия и разворот верхних резцов, скученность нижнего зубного ряда, скопление зубного налета и камня.",
      en: "Upper anterior protrusion, severe lower arch crowding, subgingival calculus, and irregular bite relationships.",
    },
    treatment: {
      uz: "Individual metall breket tizimi o'rnatildi. Nozik ortodontik yoylar yordamida tishlar qatori asta-sekin kengaytirilib, har bir tish o'zining tabiiy o'rniga joylashtirildi.",
      ru: "Фиксация металлической брекет-системы, пошаговая смена нитиноловых дуг, мягкое расширение дуги и выравнивание осей зубов.",
      en: "Placement of fixed metal bracket system, progressive nickel-titanium archwire progression, and arch coordination without tooth extractions.",
    },
    resultText: {
      uz: "6 oyda tishlar to'liq tekislandi, yuqori va pastki tishlarning to'g'ri o'zaro tutashishi ta'minlandi, tabassum estetikasi tubdan yaxshilandi.",
      ru: "Всего за 6 месяцев сформирована ровная линия улыбки, зубы встали в правильную дугу, обеспечено стабильное смыкание челюстей.",
      en: "Near-ideal dental alignment achieved in 6 months with harmonious smile aesthetics and normalized functional contact.",
    },
    images: {
      before: "/cases/case1_before.webp",
      after: "/cases/case1_after.webp",
      full: "/cases/case1_full.webp",
    },
    tags: ["breketlar", "ortodontiya", "prikus", "andijon"],
  },
  {
    id: "case-qoziq-tish-distopiya-7-oy",
    category: "ortodontiya",
    categoryBadge: {
      uz: "Ortodontiya · Yuqori Qoziq Tish",
      ru: "Ортодонтия · Дистопия Клыка",
      en: "Orthodontics · High Ectopic Canine",
    },
    serviceId: "ortodontiya",
    timeline: {
      uz: "Aprel 2026 — Noyabr 2026",
      ru: "Апрель 2026 — Ноябрь 2026",
      en: "April 2026 — November 2026",
    },
    durationBadge: {
      uz: "7 Oylik Natija",
      ru: "Результат за 7 месяцев",
      en: "7-Month Result",
    },
    title: {
      uz: "Yuqori qoziq tish distopiyasini (yuqoriga chiqib qolgan tishni) tish qatoriga tushirish",
      ru: "Исправление высокой дистопии верхнего клыка брекетами без удаления зубов",
      en: "Non-extraction alignment of high ectopic canine dystopia using braces",
    },
    summary: {
      uz: "Yuqori qoziq tishning (distopiya) tabiiy qatordan balandda chiqib o'sishi holati. Birorta ham sog'lom tishni sug'urmasdan, 7 oy ichida qoziq tish o'zining tabiiy o'rniga tushirildi va mukammal tabassum yaratildi.",
      ru: "Клык прорезался высоко над зубным рядом из-за дефицита места. Без удаления здоровых зубов за 7 месяцев клык бережно перемещен в правильное положение в зубном ряду.",
      en: "High ectopic canine positioned above the dental arch. Using non-extraction arch development, the displaced canine was guided down into ideal positioning within 7 months.",
    },
    diagnosis: {
      uz: "Yuqori chap qoziq tishning jiddiy distopiyasi (yuqoriga chiqishi), jag'da joy yetishmovchiligi, qo'shni tishlarning noto'g'ri burilishi.",
      ru: "Высокая дистопия верхнего клыка вне зубной дуги, дефицит места, разворот боковых резцов.",
      en: "High canine dystopia, arch length deficiency, and lateral incisor crossbite.",
    },
    treatment: {
      uz: "Breket tizimi orqali avval qoziq tish uchun joy ochildi, so'ngra elastik tortishlar va yo'naltiruvchi yoylar yordamida tish silliq ravishda pastga tushirildi.",
      ru: "Создание пространства в зубном ряду брекет-системой, фиксация брекета на дистопированный зуб и бережная эластичная тяга.",
      en: "Controlled orthodontic space opening followed by bracket engagement and elastic traction to guide canine along physiological path.",
    },
    resultText: {
      uz: "Qoziq tish 100% o'z anatomik o'rniga tushdi, jag' yoyi tekislandi, bemor hech qanday jarrohliksiz go'zal tabassumga ega bo'ldi.",
      ru: "Клык занял правильное положение в зубной дуге, линия улыбки полностью выровнена без удаления зубов.",
      en: "Canine fully integrated into arch with intact roots, healthy gingival margin, and lifelong functional occlusion.",
    },
    images: {
      before: "/cases/case2_before.webp",
      after: "/cases/case2_after.webp",
      full: "/cases/case2_full.webp",
    },
    tags: ["distopiya", "qoziq tish", "breket", "ortodontiya"],
  },
  {
    id: "case-badiiy-restavratsiya-karies",
    category: "terapiya",
    categoryBadge: {
      uz: "Terapiya · Badiiy Restavratsiya",
      ru: "Терапия · Художественная Реставрация",
      en: "Therapy · Aesthetic Restoration",
    },
    serviceId: "terapiya",
    timeline: {
      uz: "1 ta Qabul (45–60 daqiqa)",
      ru: "1 визит (45–60 минут)",
      en: "Single visit (45–60 mins)",
    },
    durationBadge: {
      uz: "Bir Qabulda Tiklandi",
      ru: "Восстановление за 1 визит",
      en: "Single Visit Restoration",
    },
    title: {
      uz: "Old tishlar chuqur kariesini og'riqsiz badiiy nano-restavratsiya bilan tiklash",
      ru: "Художественная реставрация зоны улыбки при глубоком кариесе передних зубов",
      en: "Artistic direct composite restoration of deep anterior cavities",
    },
    summary: {
      uz: "Oldingi yuqori tishlarning qorayishi, chuqur kariesi va emal to'qimalarining emirilishi. 2 bosqichli og'riqsiz anesteziya ostida tishlar tirik saqlangan holda Charisma (Germaniya) va DenFil (Koreya) nanokompozitlari bilan bir qabulda tabiiy holiga keltirildi.",
      ru: "Глубокий кариес и потемнение передних резцов. Под двухэтапной анестезией зубы сохранены живыми и отреставрированы немецкими и корейскими нанокомпозитами за 1 визит.",
      en: "Severe anterior caries and dark decay on upper incisors. Painlessly restored in a single appointment preserving tooth vitality with genuine German & Korean composites.",
    },
    diagnosis: {
      uz: "Markaziy va yon kurak tishlarning ildiz bo'yni va oraliq chuqur kariesi, emalning qorayishi va sinishi, estetika yo'qolishi.",
      ru: "Глубокий пришеечный и контактный кариес верхних резцов, деструкция эмали, нарушение эстетики.",
      en: "Deep cervical and interproximal caries on central incisors with extensive dark demineralization.",
    },
    treatment: {
      uz: "Orablok bilan 100% og'riqsizlantirish. Kariesli qora to'qimalar mikron aniqlikda olib tashlandi, Germaniyaning Charisma 'xameleon' mikro-shishasi va DenFil kompoziti bilan tish shakli va tabiiy jilosi qatlamma-qatlam tiklandi.",
      ru: "Двухэтапная анестезия Ораблок. Микропрепарирование кариеса с сохранением пульпы, послойная реставрация нанокомпозитами Charisma (Германия) и DenFil (Корея).",
      en: "Gentle local anesthesia, conservative caries removal, adhesive bonding, and multi-shade anatomical layering matching natural enamel chroma and opacity.",
    },
    resultText: {
      uz: "Tishlarning nervi olinmasdan (tirik holda) qutqarildi, qorayishlar mutlaqo yo'qoldi, ko'zgu jilosi va tabiiy oq tabassum hosil bo'ldi.",
      ru: "Зубы сохранены живыми, кариес устранен, достигнута безупречная светопроницаемость и природная анатомия.",
      en: "Complete aesthetic renewal: natural tooth morphology, invisible restoration margins, vital tooth preservation.",
    },
    images: {
      before: "/cases/case3_before.webp",
      after: "/cases/case3_after.webp",
      full: "/cases/case3_full.webp",
    },
    tags: ["karies", "restavratsiya", "charisma", "denfil", "terapiya"],
  },
  {
    id: "case-tilla-tish-sirkon-almashtirish",
    category: "ortopediya",
    categoryBadge: {
      uz: "Ortopediya · Sirkon Karonkalar",
      ru: "Ортопедия · Циркониевые Коронки",
      en: "Orthopedics · Zirconia Crowns",
    },
    serviceId: "ortopediya",
    timeline: {
      uz: "3–4 Kun (2–3 qabul)",
      ru: "3–4 дня (2–3 визита)",
      en: "3–4 days (2–3 visits)",
    },
    durationBadge: {
      uz: "15 Yillik Kafolat",
      ru: "Гарантия 15 лет",
      en: "15-Year Warranty",
    },
    title: {
      uz: "Eski tilla tishlarni zamonaviy monolit Sirkoniy (Zirconia) karonkalarga almashtirish",
      ru: "Замена старых золотых коронок на монолитные коронки из диоксида циркония (Zirconia)",
      en: "Complete smile makeover: replacing outdated gold crowns with monolithic Zirconia",
    },
    summary: {
      uz: "Eski sovet davridan qolgan metall va tilla qoplamalar atravmatik tarzda yechib olindi. Milk cheti tozalanib, yuqori aniqlikdagi monolit Sirkoniy (Zirconia) va IPS E.max keramika karonkalari o'rnatildi. Natijada yorqin Gollivud tabassumi hosil qilindi.",
      ru: "Устаревшие золотые коронки бережно сняты, десна подготовлена и установлены безметалловые циркониевые коронки. Пациент получил великолепную белоснежную улыбку.",
      en: "Outdated gold alloy crowns safely removed, soft tissues treated, and replaced with high-translucency monolithic Zirconia crowns for a Hollywood smile transformation.",
    },
    diagnosis: {
      uz: "Yuqori va pastki jag'dagi eskirgan tilla qoplamalar, milk chetining qorayishi, sun'iy ko'rinish va zamonaviy estetikaga nomuvofiqlik.",
      ru: "Неэстетичные золотые коронки, синюшность краевой десны из-за окисления металла, желание пациента иметь естественные белые зубы.",
      en: "Compromised aesthetic appearance from outdated gold crowns, marginal gingival inflammation, and patient request for natural white aesthetics.",
    },
    treatment: {
      uz: "Eski tilla karonkalar milkka shikast yetkazmasdan yechildi. Raqamli 3D optik o'lcham olindi va CAD/CAM texnologiyasida metall-siz monolit sirkoniy karonkalar tayyorlanib, doimiy o'rnatildi.",
      ru: "Атравматичное снятие коронок, антисептическая обработка, цифровое сканирование и фиксация сверхпрочных циркониевых коронок CAD/CAM.",
      en: "Atraumatic crown removal, gingival re-contouring, optical impression, and precision CAD/CAM milling of monolithic biocompatible Zirconia crowns.",
    },
    resultText: {
      uz: "Mukammal tabiiy qor-oq Gollivud tabassumi! Milklar qoraymaydi, metall ta'mi yo'q, chaynash funksiyasi 100% tiklandi va 15 yillik kafolat berildi.",
      ru: "Белоснежная естественная улыбка без металла. Десны розовые и здоровые, полная биосовместимость и 15 лет гарантии.",
      en: "Stunning aesthetic transformation: healthy pink gum line, metal-free biocompatibility, translucent natural white teeth with 15-year warranty.",
    },
    images: {
      before: "/cases/case4_before.webp",
      after: "/cases/case4_after.webp",
      full: "/cases/case4_full.webp",
    },
    tags: ["sirkon", "zirconia", "tilla tish", "protezlash", "ortopediya"],
  },
];
