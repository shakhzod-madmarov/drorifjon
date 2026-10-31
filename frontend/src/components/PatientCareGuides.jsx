import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { assets } from "../assets/assets";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  DentalImplantFixture,
  DentalBracesIcon,
  DentalVeneerCrown,
  DentalSurgeryExtraction,
  DentalWhiteningZoom,
  IconCheckCircle,
  IconShieldCheck,
  IconSparkleStar,
  IconClock,
  IconPhone,
} from "./MedicalIcons";

const guides = [
  {
    id: "implant-care",
    image: assets.treatment_implant,
    icon: <DentalImplantFixture className="w-5 h-5" />,
    tab: { uz: "Implantdan Keyin", ru: "После Имплантации", en: "Post-Implant" },
    tabBadge: "🔩 Biotitan",
    recoveryTime: { uz: "Dastlabki 3–5 kunlik rejim", ru: "Режим на 3–5 дней", en: "First 3–5 days protocol" },
    tagPill: { uz: "100% Asoratsiz Bitish", ru: "Без Осложнений", en: "Zero Complications" },
    badge: { uz: "Mega'Gen & AnyRidge Biotitan", ru: "Биотитан Mega'Gen & AnyRidge", en: "Mega'Gen & AnyRidge Biotitanium" },
    title: {
      uz: "Dental Implantatsiyasidan Keyingi Parvarish Qoidalari",
      ru: "Памятка Пациенту После Установки Имплантата",
      en: "Post-Implant Recovery & Care Guidelines",
    },
    doctorTip: {
      uz: "Dastlabki soatlarda sovuq kompress shishishning oldini oladi. 3-kundan so'ng antiseptik ohista vannachalar suyak bilan implantning 99.5% mustahkam bitishini ta'minlaydi.",
      ru: "Холодный компресс в первые часы снимает отек. С 3-го дня мягкие антисептические ванночки гарантируют 99.5% остеоинтеграцию импланта.",
      en: "Cold compress prevents swelling in the first hours. Gentle antiseptic baths from day 3 ensure rapid 99.5% bone-to-implant integration.",
    },
    dos: {
      uz: [
        { title: "Sovuq Kompress", desc: "Dastlabki 2–3 soat davomida yonoqqa 15 daqiqadan sovuq kompress qo'ying" },
        { title: "Dori Vositalari", desc: "Stomatolog Orifjon yozib bergan dori va antibiotiklarni o'z vaqtida qabul qiling" },
        { title: "Iliq va Yumshoq Taom", desc: "Dastlabki 3-5 kunda faqat yumshoq taomlar (sho'rva, pyure, bo'tqa) iste'mol qiling" },
        { title: "Ohista Antiseptik", desc: "Xlorgeksidin 0.05% eritmasi bilan og'izni chayqamasdan, 1 daqiqa ushlab turing" },
      ],
      ru: [
        { title: "Холодный Компресс", desc: "Прикладывайте лед к щеке по 15 минут в первые 2–3 часа после операции" },
        { title: "Медикаменты", desc: "Принимайте назначенные препараты строго по часам, как прописал Стоматолог Орифжон" },
        { title: "Мягкая Диета", desc: "Первые 3–5 дней употребляйте только теплую пюреобразную пищу и бульоны" },
        { title: "Ротовые Ванночки", desc: "Делайте антисептические ванночки хлоргексидином 0.05% без активного полоскания" },
      ],
      en: [
        { title: "Cold Compress", desc: "Apply a cold compress to the cheek for 15-minute intervals during the first 2-3 hours" },
        { title: "Prescribed Meds", desc: "Take all medications and antibiotics on schedule as instructed by Dentist Orifjon" },
        { title: "Lukewarm Soft Meals", desc: "Eat soft soups, purées, and gentle foods for the first 3-5 days" },
        { title: "Gentle Antiseptic", desc: "Hold Chlorhexidine 0.05% mouth rinse gently in mouth without active swirling" },
      ],
    },
    donts: {
      uz: [
        { title: "Issiq Hammom & Sauna", desc: "3–5 kun davomida issiq dush, hammom, sauna va og'ir sport mashqlaridan tiyiling" },
        { title: "Qattiq Ovqat Chaynash", desc: "Implant qo'yilgan jag' tomonida yong'oq, qattiq non yoki go'sht chaynamang" },
        { title: "Yaraga Tegish", desc: "Jarrohlik joyini qo'l, til yoki tish tozalagich (zubochistka) bilan tegmang" },
      ],
      ru: [
        { title: "Бани и Спорт", desc: "Исключите горячие ванны, бани, сауны и силовые тренировки на 3–5 дней" },
        { title: "Твердая Пища", desc: "Категорически не жуйте твердую пищу на оперированной стороне челюсти" },
        { title: "Прикосновения к Лунке", desc: "Не дотрагивайтесь до операционного шва языком, руками или зубочистками" },
      ],
      en: [
        { title: "Heat & Heavy Exercise", desc: "Avoid saunas, hot baths, and strenuous fitness workouts for 3-5 days" },
        { title: "Chewing on Implant", desc: "Do not chew hard bread, nuts, or tough meats on the treated side" },
        { title: "Disturbing Site", desc: "Never touch the healing socket with fingers, tongue, or toothpicks" },
      ],
    },
  },
  {
    id: "braces-care",
    image: assets.treatment_braces,
    icon: <DentalBracesIcon className="w-5 h-5" />,
    tab: { uz: "Breket & Elayner", ru: "Брекеты и Капы", en: "Braces & Aligners" },
    tabBadge: "✨ Breketlar",
    recoveryTime: { uz: "Muntazam kundalik gigiyena", ru: "Ежедневная гигиена", en: "Daily active hygiene" },
    tagPill: { uz: "Mukammal Tishlash", ru: "Ровный Прикус", en: "Straight Smile" },
    badge: { uz: "Keramika, Sapfir & Metall Breketlar", ru: "Сапфировые и Керамические Брекеты", en: "Ceramic & Sapphire Braces" },
    title: {
      uz: "Breketlar va Ko'rinmas Elaynerlarni Parvarishlash",
      ru: "Уход за Брекетами и Элайнерами",
      en: "Braces & Clear Aligners Hygiene Guide",
    },
    doctorTip: {
      uz: "Breket zamoklari atrofida emal sog'lom qolishi uchun har gal ovqatdan so'ng ortodontik V-shaklli cho'tka va tish ipidan foydalanish shart.",
      ru: "Чтобы эмаль вокруг брекетов оставалась белоснежной, обязательно чистите замки V-образной орто-щеткой после каждого приема пищи.",
      en: "To keep enamel pristine around bracket bases, clean with a V-shaped orthodontic brush and interdental brush after every meal.",
    },
    dos: {
      uz: [
        { title: "Ortodontik Cho'tka", desc: "Har ovqatdan so'ng maxsus V-shaklli cho'tka va konussimon yorshik bilan tozalang" },
        { title: "Floss & Irrigator", desc: "Tishlar oralig'ini tozalash uchun tish ipi (superfloss) va suvli irrigatordan foydalaning" },
        { title: "Elaynerlarni Yuvish", desc: "Ko'rinmas kapallarni har kuni iliq suv va yumshoq cho'tka bilan tozalab turing" },
        { title: "Rejali Ko'rik", desc: "Har 4–6 haftada Stomatolog Orifjon ko'rigiga kelib, rezinalarni almashtirib turing" },
      ],
      ru: [
        { title: "Орто-Щетка", desc: "Чистите зубы специальной V-образной щеткой и монопучковым ершиком после каждого приема пищи" },
        { title: "Флосс и Ирригатор", desc: "Очищайте межзубные контакты суперфлоссом и используйте ирригатор дважды в день" },
        { title: "Чистка Элайнеров", desc: "Промывайте съемные капы теплой водой с нейтральным мылом каждый день" },
        { title: "Контрольные Визиты", desc: "Посещайте Стоматолога Орифжона каждые 4–6 недель для плановой коррекции дуг" },
      ],
      en: [
        { title: "Specialized Brush", desc: "Clean brackets after each meal using a V-trim orthodontic brush and interdental brush" },
        { title: "Floss & Water Jet", desc: "Use specialized orthodontic floss and water flosser to remove plaque between teeth" },
        { title: "Aligner Sanitizing", desc: "Wash and brush clear aligners daily with lukewarm water and mild cleanser" },
        { title: "Follow-up Checks", desc: "Visit Dentist Orifjon every 4-6 weeks for wire tightening and arch adjustments" },
      ],
    },
    donts: {
      uz: [
        { title: "Yopishqoq & Qattiq", desc: "Saqich, iris, suxarik, muz va yong'oq chaynash zamoklarni ko'chirib yuboradi" },
        { title: "Butunlay Tishlash", desc: "Olma, sabzi va qattiq nonni old tishlar bilan tishlamang, maydalab yeng" },
        { title: "Issiq Suvda Yuvish", desc: "Elaynerlarni qaynoq suvda yuvmang, bu ularning shaklini buzadi" },
      ],
      ru: [
        { title: "Жвачки и Орехи", desc: "Исключите жевательные резинки, ириски, сухари и леденцы — они отклеивают замки" },
        { title: "Откусывание", desc: "Не откусывайте яблоки и морковь передними зубами, нарезайте их на ломтики" },
        { title: "Горячая Вода", desc: "Не мойте прозрачные капы горячей водой во избежание термодеформации" },
      ],
      en: [
        { title: "Sticky & Hard Foods", desc: "Avoid chewing ice, sticky candy, caramel, nuts, and gum to prevent debonding" },
        { title: "Biting Whole Fruits", desc: "Do not bite whole apples or raw carrots with front teeth; slice into pieces" },
        { title: "Hot Water Rinse", desc: "Never wash aligners with boiling water as high heat warps plastic trays" },
      ],
    },
  },
  {
    id: "crown-veneer-care",
    image: assets.treatment_crowns,
    icon: <DentalVeneerCrown className="w-5 h-5" />,
    tab: { uz: "Karonka & Vinirlar", ru: "Коронки и Виниры", en: "Crowns & Veneers" },
    tabBadge: "💎 Sirkon",
    recoveryTime: { uz: "10–15 yillik kafolatli parvarish", ru: "Уход на 10–15 лет", en: "10-15 year long-term care" },
    tagPill: { uz: "Tabiiy Jilo & Kuch", ru: "Прочность и Блеск", en: "Strength & Shine" },
    badge: { uz: "Monolit Sirkoniy & IPS E.max Vinirlar", ru: "Монолитный Цирконий и Керамика", en: "Monolithic Zirconia & E.max" },
    title: {
      uz: "Sirkon Karonkalar va E-max Vinirlarni Uzoq Yillar Asrash",
      ru: "Уход за Циркониевыми Коронками и Винирами",
      en: "Long-term Care for Crowns and Veneers",
    },
    doctorTip: {
      uz: "Monolit sirkoniy karonkalar tabiiy tishdek o'ta mustahkam. Milk chegarasini toza saqlash uchun irrigator qo'llash tish go'shtining chekinishini oldini oladi.",
      ru: "Циркониевые коронки выдерживают любые жевательные нагрузки. Использование ирригатора сохраняет плотное прилегание десны.",
      en: "Monolithic zirconia is diamond-hard. Using a water flosser along the gumline prevents recession and keeps veneers pristine.",
    },
    dos: {
      uz: [
        { title: "Yumshoq Cho'tka", desc: "Abrasiv bo'lmagan (RDA < 70) pasta va yumshoq cho'tka bilan kuniga 2 mahal yuving" },
        { title: "Milk Chegarasi Gigiyenasi", desc: "Karonka va milk tutashgan joyni irrigator yordamida chuqur tozalang" },
        { title: "6 Oylik Profilaktika", desc: "Har 6 oyda Stomatolog Orifjon ko'rigidan o'tib, professional jilolang" },
        { title: "Tungi Bruksizm Nazorati", desc: "Agar tish g'ijirlatish bo'lsa, maxsus tungi himoya kapasi taqing" },
      ],
      ru: [
        { title: "Мягкая Паста", desc: "Чистите зубы мягкой щеткой и низкоабразивной пастой (RDA < 70) 2 раза в день" },
        { title: "Зона Десны", desc: "Ежедневно очищайте десневой край вокруг коронок струей ирригатора" },
        { title: "Осмотр Раз в Полгода", desc: "Посещайте Стоматолога Орифжона каждые 6 месяцев для полировки и контроля" },
        { title: "Защита от Бруксизма", desc: "При ночном скрежетании зубами используйте защитную прозрачную капу" },
      ],
      en: [
        { title: "Low-Abrasive Paste", desc: "Brush twice daily using soft bristles and non-abrasive toothpaste (RDA < 70)" },
        { title: "Gum Margin Hygiene", desc: "Flush the crown-gum interface with a water flosser daily to prevent gingivitis" },
        { title: "Biannual Checkup", desc: "Schedule a routine checkup and polishing with Dentist Orifjon every 6 months" },
        { title: "Nightguard if Needed", desc: "Wear a custom nightguard if you experience clenching or sleep bruxism" },
      ],
    },
    donts: {
      uz: [
        { title: "Qattiq Po'choqlar", desc: "Old vinir yoki karonkalar bilan pista, yong'oq po'chog'i chaqish qat'iyan taqiqlanadi" },
        { title: "Idish & Ip Ochish", desc: "Tishlar bilan qadoqlarni yirtish, ip qirqish yoki qopqoq ochish mumkin emas" },
        { title: "Juda Qattiq Cho'tkalar", desc: "Qattiq (hard) cho'tkalar keramik jiloni tirnashi va milkni jarohatlashi mumkin" },
      ],
      ru: [
        { title: "Семечки и Орехи", desc: "Не разгрызайте винирами скорлупу орехов, фисташек или семечек" },
        { title: "Бытовые Привычки", desc: "Не открывайте зубами упаковки, не перекусывайте нитки или проволоку" },
        { title: "Жесткие Щетки", desc: "Избегайте жестких щеток, чтобы не травмировать десневой контур" },
      ],
      en: [
        { title: "Cracking Shells", desc: "Never crack pistachios, walnut shells, or bone fragments with front veneers" },
        { title: "Opening Packages", desc: "Do not use teeth as scissors to tear tape, open bottles, or bite plastic" },
        { title: "Hard Bristles", desc: "Avoid stiff-bristled brushes that can abrade polished glaze or irritate gums" },
      ],
    },
  },
  {
    id: "extraction-care",
    image: assets.treatment_surgery,
    icon: <DentalSurgeryExtraction className="w-5 h-5" />,
    tab: { uz: "Tish Olinganda", ru: "После Удаления", en: "Extraction Care" },
    tabBadge: "🛡️ 24 Soat",
    recoveryTime: { uz: "Dastlabki 24–48 soatlik qat'iy rejim", ru: "Критичные 24–48 часов", en: "First 24-48 hours strict care" },
    tagPill: { uz: "Qon Quyqasini Asrash", ru: "Защита Сгустка", en: "Clot Protection" },
    badge: { uz: "Atravmatik Xirurgiya & Orablok", ru: "Атравматичное Удаление Зубов", en: "Atraumatic Surgery & Orabloc" },
    title: {
      uz: "Tish Olingandan Keyingi Birinchi Yordam va Qoidalar",
      ru: "Рекомендации После Удаления Зуба",
      en: "Post-Extraction Recovery Care",
    },
    doctorTip: {
      uz: "Eng muhim vazifa — tish o'rnidagi qon quyqasini (trombbni) asrab qolish. Agar uni yuvib yubormasangiz, yara 2-3 kunda mutlaqo og'riqsiz va asoratsiz bitadi.",
      ru: "Главная цель — сохранить кровяной сгусток в лунке. Не полощите рот активно, и заживление пройдет за 2-3 дня без малейшей боли.",
      en: "The primary objective is preserving the protective blood clot. Refrain from vigorous rinsing, and the socket will heal seamlessly in 2-3 days.",
    },
    dos: {
      uz: [
        { title: "Doka Tamponi", desc: "Shifokor qo'ygan dokani 20 daqiqadan so'ng tishlar orasidan ohista olib tashlang" },
        { title: "2 Soatlik Tanaffus", desc: "Dastlabki 2 soat davomida ovqat yemang va faqat iliq suv iching" },
        { title: "Shifokor Retsepti", desc: "Stomatolog Orifjon tavsiya qilgan og'riqsizlantiruvchi dorilarni o'z vaqtida iching" },
        { title: "Yumshoq Oziqlanish", desc: "Kun davomida xona haroratidagi sho'rva, qatiq va pyure iste'mol qiling" },
      ],
      ru: [
        { title: "Марлевый Тампон", desc: "Аккуратно сплюньте марлевый тампон ровно через 20 минут после процедуры" },
        { title: "Пауза 2 Часа", desc: "Воздержитесь от любой еды и горячих напитков в первые 2 часа" },
        { title: "Назначения Врача", desc: "Принимайте противовоспалительные препараты по выписанной схеме" },
        { title: "Теплая Еда", desc: "Питайтесь мягкой пищей комнатной температуры (супы-пюре, йогурты)" },
      ],
      en: [
        { title: "Gauze Pack", desc: "Gently discard the sterile gauze pack 20 minutes after completion" },
        { title: "2-Hour Fast", desc: "Do not eat or drink hot liquids for at least 2 hours following extraction" },
        { title: "Medications", desc: "Take anti-inflammatory remedies as prescribed by Dentist Orifjon" },
        { title: "Cool Soft Diet", desc: "Consume room-temperature liquid and soft meals (yogurt, broths, purée)" },
      ],
    },
    donts: {
      uz: [
        { title: "Og'izni Chayqash", desc: "Og'izni qattiq chayqash va tupurish qat'iyan man etiladi — quyqa tushib ketishi mumkin" },
        { title: "Naycha (Trubochka)", desc: "Ichimliklarni naycha orqali ichmang, og'izdagi vakuum qonashni qo'zg'atadi" },
        { title: "Issiq Hammom & Qizish", desc: "Issiq vanna, sauna va qattiq quyoshda yurish bosimni oshirib qonatishi mumkin" },
      ],
      ru: [
        { title: "Активное Полоскание", desc: "Категорически запрещено полоскать рот и плевать, чтобы не вымыть сгусток" },
        { title: "Трубочки", desc: "Не пейте через соломинку — отрицательное давление может вызвать кровотечение" },
        { title: "Баня и Прогрев", desc: "Исключите баню, сауну и горячие компрессы на щеку в первые 48 часов" },
      ],
      en: [
        { title: "Vigorous Swirling", desc: "Do not rinse or spit forcefully; dislodging the clot causes dry socket" },
        { title: "Drinking Straws", desc: "Never drink through straws, as suction pressure triggers renewed bleeding" },
        { title: "Hot Showers & Saunas", desc: "Avoid hot baths and heat packs that dilate vessels and promote swelling" },
      ],
    },
  },
  {
    id: "whitening-care",
    image: assets.treatment_whitening,
    icon: <DentalWhiteningZoom className="w-5 h-5" />,
    tab: { uz: "Oqartirishdan So'ng", ru: "После Отбеливания", en: "After Whitening" },
    tabBadge: "⚡ Oq Parhez",
    recoveryTime: { uz: "Dastlabki 48 soatlik «Oq Parhez»", ru: "48 часов «Белая Диета»", en: "First 48-hour White Diet" },
    tagPill: { uz: "Maksimal Oqlik", ru: "Белоснежная Эмаль", en: "Maximum Whiteness" },
    badge: { uz: "Philips Zoom & Estetik Gigiyena", ru: "Отбеливание Philips Zoom", en: "Philips Zoom Aesthetics" },
    title: {
      uz: "Tish Oqartirishdan Keyingi «Oq Parhez» (White Diet)",
      ru: "«Белая диета» После Профессионального Отбеливания",
      en: "The «White Diet» After Teeth Whitening",
    },
    doctorTip: {
      uz: "Oqartirishdan keyin dastlabki 48 soatda tish emalining mikrog'ovaklari bo'yoqlarga juda ta'sirchan bo'ladi. «Oq parhez»ga rioya qilsangiz, tabassumingiz 5–8 tongacha oq va yorqin saqlanadi.",
      ru: "Первые 48 часов микропоры эмали открыты. Соблюдение «белой диеты» фиксирует ослепительный результат на срок до 2-3 лет.",
      en: "Enamel micropores remain receptive for 48 hours. Sticking to the White Diet locks in your 5-8 shade brighter radiant smile.",
    },
    dos: {
      uz: [
        { title: "Oq Rangli Mahsulotlar", desc: "Tuxum oqi, sut, tvorog, oq guruch, qaynatilgan tovuq va baliq go'shti iste'mol qiling" },
        { title: "Toza Suv", desc: "Kop miqdorda toza mineral suv iching va emal gidratatsiyasini saqlang" },
        { title: "Ftorli Tish Pastasi", desc: "Tish sezgirligini pasaytirish uchun ftorli va mineralli pastadan foydalaning" },
        { title: "Yumshoq Cho'tka", desc: "Emalga nozik munosabatda bo'lish uchun ultra-yumshoq cho'tka bilan tozalang" },
      ],
      ru: [
        { title: "Светлые Продукты", desc: "Ешьте рис, белое куриное филе, рыбу, творог, яичный белок и цветную капусту" },
        { title: "Чистая Вода", desc: "Пейте много негазированной воды для поддержания гидробаланса эмали" },
        { title: "Реминерализация", desc: "Используйте пасты с фтором и кальцием для быстрого снятия чувствительности" },
        { title: "Мягкая Щетка", desc: "Очищайте зубы бережно, без сильного нажима мягкой зубной щеткой" },
      ],
      en: [
        { title: "White Food Only", desc: "Eat egg whites, milk, white rice, steamed chicken breast, and white fish" },
        { title: "Abundant Hydration", desc: "Drink plenty of still room-temperature water to keep enamel hydrated" },
        { title: "Fluoride Protection", desc: "Use a remineralizing fluoride paste to alleviate temporary sensitivity" },
        { title: "Gentle Brushing", desc: "Brush with ultra-soft filaments to soothe enamel surfaces" },
      ],
    },
    donts: {
      uz: [
        { title: "Qahva & Qora Choy", desc: "Qahva, qora choy, qizil vino, kola, pomidor sousi va shokoladdan 3 kun tiyiling" },
        { title: "Lavlagi & Rangli Mevalar", desc: "Lavlagi, olcha, anor va rang beruvchi rezavor mevalarni iste'mol qilmang" },
        { title: "Chekish (Nikotin)", desc: "Tamaki va elektron sigaretlar oqargan emalni zudlik bilan sarg'aytiradi (kamida 48 soat)" },
      ],
      ru: [
        { title: "Кофе и Чай", desc: "Исключите кофе, темный чай, красное вино, соевый соус и шоколад минимум на 3 дня" },
        { title: "Красящие Овощи", desc: "Не употребляйте свеклу, ягоды, морковь и цветные соусы" },
        { title: "Курение", desc: "Воздержитесь от сигарет и вейпов хотя бы 48 часов — никотин мгновенно красит эмаль" },
      ],
      en: [
        { title: "Coffee & Tea", desc: "Avoid black coffee, dark tea, red wine, cola, chocolate, and soy sauce for 3 days" },
        { title: "Dark Berries & Beetroot", desc: "Do not eat beets, blueberries, pomegranates, or rich red sauces" },
        { title: "Smoking & Nicotine", desc: "Avoid tobacco and vape products for at least 48 hours to prevent staining" },
      ],
    },
  },
];

const PatientCareGuides = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(guides[0]);

  return (
    <section className="py-10 sm:py-16 bg-white rounded-[2.5rem] border border-amber-200/90 p-4 sm:p-8 lg:p-10 shadow-luxury relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/25 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-50 text-primary border border-amber-300/80 shadow-2xs">
            <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
            <span>
              {lang === "uz"
                ? "Bemorlar Uchun Klinik Eslatma"
                : lang === "ru"
                ? "Клиническая Памятка Пациентам"
                : "Clinical Patient Aftercare"}
            </span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif-classic tracking-tight">
            {lang === "uz"
              ? "Muolajadan Keyingi Foydali Qoidalar va Parvarish"
              : lang === "ru"
              ? "Рекомендации и Уход После Лечения"
              : "Post-Treatment Recovery & Care Guidelines"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === "uz"
              ? "Davolash natijasi uzoq yillar mustahkam saqlanishi uchun Stomatolog Orifjonning shaxsiy klinik tavsiyalari va xavfsiz tiklanish qoidalari."
              : lang === "ru"
              ? "Персональные клинические рекомендации Стоматолога Орифжона для безопасного заживления и долговечного результата."
              : "Personalized clinical guidance by Dentist Orifjon to ensure seamless recovery and lifelong stability."}
          </p>
        </div>

        {/* 5 Specialty 3D Pill Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2.5 pb-2 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
          {guides.map((g) => {
            const isSelected = activeTab.id === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveTab(g)}
                className={`flex shrink-0 whitespace-nowrap items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-primary via-orange-500 to-primary text-white shadow-[0_8px_25px_rgba(255,157,80,0.35)] scale-105 ring-2 ring-primary/30"
                    : "bg-white/95 hover:bg-amber-50 text-slate-700 border border-amber-200/80 shadow-2xs hover:scale-[1.02]"
                }`}
              >
                <span className={`transition-transform duration-300 ${isSelected ? "scale-115 text-white" : "text-primary"}`}>
                  {g.icon}
                </span>
                <span className="tracking-tight">{g.tab[lang]}</span>
                <span
                  className={`text-[9.5px] px-2 py-0.5 rounded-full font-extrabold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-amber-100/70 text-slate-600"
                  }`}
                >
                  {g.tabBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage (Split-View) */}
        <div className="p-5 sm:p-8 lg:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-amber-50/40 to-white border border-amber-200/90 shadow-luxury-lg space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (5 cols): Visual Presentation & Doctor Note */}
            <div className="lg:col-span-5 space-y-5">
              {/* Clinical Photo with Frosted Badges */}
              <div className="relative h-60 sm:h-72 w-full rounded-3xl overflow-hidden border border-amber-200/90 shadow-xl group">
                <img
                  src={activeTab.image}
                  alt={activeTab.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                {/* Soft Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-black/10 pointer-events-none" />

                {/* Top Frosted Glass Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-white/80 text-[11px] font-black tracking-wide shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{activeTab.recoveryTime[lang]}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10.5px] font-black tracking-wide shadow-md border border-emerald-300/40">
                    <IconShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>{activeTab.tagPill[lang]}</span>
                  </span>
                </div>

                {/* Bottom Over-Image Floating Control Bar */}
                <div className="absolute bottom-3 inset-x-3 z-10 pointer-events-none">
                  <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-md flex items-center justify-between gap-2 text-left">
                    <div className="min-w-0">
                      <p className="text-[9.5px] font-black uppercase tracking-wider text-primary flex items-center gap-1">
                        <IconSparkleStar className="w-3 h-3 text-brandOrange" />
                        <span>{lang === "uz" ? "Stomatolog Orifjon Tavsiyasi" : lang === "ru" ? "Совет Стоматолога Орифжона" : "Dentist Orifjon Advice"}</span>
                      </p>
                      <p className="text-xs font-bold text-slate-900 truncate mt-0.5">
                        {activeTab.badge[lang]}
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-amber-50 text-primary flex items-center justify-center shrink-0 shadow-2xs border border-amber-200">
                      {activeTab.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shifokor Kengashi (Doctor's Note Box) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border-l-4 border-l-primary border-y border-r border-amber-200/80 shadow-2xs space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                  <span>💡</span>
                  <span>{lang === "uz" ? "Muhim Klinik Maslahat:" : lang === "ru" ? "Важный Совет Врача:" : "Crucial Doctor's Tip:"}</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic">
                  "{activeTab.doctorTip[lang]}"
                </p>
              </div>

              {/* Emergency Doctor Hotline Strip */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-300/80 flex items-center justify-between gap-2 shadow-2xs">
                <div className="text-left min-w-0">
                  <p className="text-[10px] font-extrabold uppercase text-emerald-800">
                    {lang === "uz" ? "Savollaringiz Bormi?" : lang === "ru" ? "Есть Вопросы?" : "Need Assistance?"}
                  </p>
                  <p className="text-xs font-bold text-slate-800 truncate">
                    {lang === "uz" ? "Doimiy shifokor nazorati" : lang === "ru" ? "Прямая связь с врачом" : "Direct Doctor Support"}
                  </p>
                </div>
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition-colors shadow-xs shrink-0"
                >
                  <IconPhone className="w-3.5 h-3.5 text-white animate-bounce" />
                  <span>{DOCTOR_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): Action Checklist (Dos vs Don'ts) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Title Strip */}
              <div className="space-y-1.5 text-left">
                <span className="text-[10.5px] font-black uppercase tracking-widest text-primary">
                  {lang === "uz" ? "✦ Bemor Protokoli" : lang === "ru" ? "✦ Клинический Протокол" : "✦ Clinical Protocol"}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-serif-classic leading-snug">
                  {activeTab.title[lang]}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {/* 1. TAVSIYALAR (DO'S) */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border-2 border-emerald-300/80 shadow-[0_8px_25px_rgba(16,185,129,0.08)] space-y-4 text-left">
                  <div className="flex items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                        ✓
                      </span>
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-950">
                        {lang === "uz"
                          ? "NIMALARNI QILISH KERAK (TAVSIYALAR):"
                          : lang === "ru"
                          ? "ЧТО НУЖНО ДЕЛАТЬ (РЕКОМЕНДАЦИИ):"
                          : "WHAT TO DO (RECOMMENDED):"}
                      </h4>
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {lang === "uz" ? "Foydali" : lang === "ru" ? "Полезно" : "Best Steps"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTab.dos[lang].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white border border-emerald-200/70 shadow-2xs space-y-1 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <IconCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11.5px] text-slate-600 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. CHEKLOVLAR (DON'TS) */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-rose-50/90 via-white to-amber-50/30 border-2 border-rose-300/80 shadow-[0_8px_25px_rgba(244,63,94,0.08)] space-y-4 text-left">
                  <div className="flex items-center justify-between gap-2 border-b border-rose-200/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                        ✕
                      </span>
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-rose-950">
                        {lang === "uz"
                          ? "NIMALARNI QILISH MUMKIN EMAS (CHEKLOVLAR):"
                          : lang === "ru"
                          ? "ЧЕГО ДЕЛАТЬ НЕЛЬЗЯ (ОГРАНИЧЕНИЯ):"
                          : "WHAT TO AVOID (RESTRICTIONS):"}
                      </h4>
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                      {lang === "uz" ? "Taqiqlanadi" : lang === "ru" ? "Запрещено" : "Strictly Avoid"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTab.donts[lang].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white border border-rose-200/70 shadow-2xs space-y-1 hover:border-rose-400 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                          <span className="w-3.5 h-3.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] font-black shrink-0">
                            ✕
                          </span>
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11.5px] text-slate-600 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCareGuides;
