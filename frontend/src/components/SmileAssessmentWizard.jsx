import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { assets } from "../assets/assets";
import {
  DentalImplantFixture,
  DentalBracesIcon,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalSurgeryExtraction,
  IconShieldCheck,
  IconClock,
  IconSparkleStar,
  IconCheckCircle,
} from "./MedicalIcons";
import { useBooking } from "../context/BookingContext";

const concerns = [
  {
    id: "pain",
    serviceId: "terapiya",
    image: assets.treatment_therapy,
    icon: <DentalToothMolar className="w-5 h-5 text-rose-500" />,
    badgeColor: "bg-white/95 text-slate-900 border-white/80 shadow-xs font-black",
    tag: { uz: "Terapiya", ru: "Терапия", en: "Therapy" },
    title: {
      uz: "Tish og'rig'i, karies yoki plomba tushishi",
      ru: "Острая боль, кариес или выпала пломба",
      en: "Toothache, cavity, or lost filling",
    },
    recommendation: {
      uz: "Tishlarni Og'riqsiz Davolash & Badiiy Restavratsiya",
      ru: "Лечение Каналов и Нанокомпозитная Пломба",
      en: "Root Canal Therapy & Nano-Composite Restoration",
    },
    summary: {
      uz: "Karies va nerv shamollashini Orablok va Supercain Forte mikro-anesteziyasi ostida 100% og'riqsiz tozalab, original Charisma (Germaniya) yoki DenFil (Koreya) kompoziti bilan tish anatomiyasini tiklaymiz.",
      ru: "Обезболивание анестетиками Ораблок и Суперкаин Форте, восстановление анатомии зуба нанокомпозитами Charisma (Германия) или DenFil (Корея).",
      en: "100% painless treatment under Orabloc & Supercain Forte anesthesia, restoring tooth anatomy with genuine Charisma (Germany) or DenFil (Korea) composites.",
    },
    steps: [
      { uz: "Orablok & Supercain anesteziyasi", ru: "Анестезия Ораблок/Суперкаин", en: "Orabloc & Supercain numbing" },
      { uz: "Kariesni tozalash", ru: "Очистка кариеса", en: "Caries excavation" },
      { uz: "Charisma / DenFil restavratsiyasi", ru: "Реставрация Charisma / DenFil", en: "Charisma / DenFil restoration" },
    ],
    duration: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    matchScore: "99%",
  },
  {
    id: "missing",
    serviceId: "implantatsiya",
    image: assets.treatment_implant,
    icon: <DentalImplantFixture className="w-5 h-5 text-primary" />,
    badgeColor: "bg-white/95 text-slate-900 border-white/80 shadow-xs font-black",
    tag: { uz: "Implantatsiya", ru: "Имплантация", en: "Implantation" },
    title: {
      uz: "Bir yoki bir nechta tish yo'qolgan (tish qo'yish)",
      ru: "Отсутствует один или несколько зубов",
      en: "One or more missing teeth",
    },
    recommendation: {
      uz: "Mega'Gen (Koreya), AnyRidge va DXL (Germaniya) Implantatsiyasi",
      ru: "Имплантация Mega'Gen (Корея), AnyRidge и DXL (Германия)",
      en: "Mega'Gen (Korea), AnyRidge & DXL (Germany) Dental Implants",
    },
    summary: {
      uz: "Qo'shni sog'lom tishlarni charxlamasdan, Janubiy Koreyaning Mega'Gen hamda Germaniyaning AnyRidge va DXL premium titan implantlarini 15-20 daqiqada og'riqsiz o'rnatish.",
      ru: "Восстановление зуба за 15-20 минут без обточки соседних с системами Mega'Gen (Корея), AnyRidge и DXL (Германия) с пожизненной гарантией.",
      en: "Restore missing teeth gently in 15-20 minutes with Mega'Gen (Korea), AnyRidge (Germany), and DXL (Germany) bio-titanium implants.",
    },
    steps: [
      { uz: "3D tomografiya tahlili", ru: "3D томография и план", en: "3D scan planning" },
      { uz: "Mega'Gen / AnyRidge / DXL o'rnatish", ru: "Установка Mega'Gen / AnyRidge / DXL", en: "Mega'Gen / AnyRidge / DXL placement" },
      { uz: "CAD/CAM sirkoniy karonka", ru: "Циркониевая коронка", en: "Zirconia crown fitting" },
    ],
    duration: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
    matchScore: "100%",
  },
  {
    id: "crooked",
    serviceId: "ortodontiya",
    image: assets.treatment_braces,
    icon: <DentalBracesIcon className="w-5 h-5 text-brandOrange" />,
    badgeColor: "bg-white/95 text-slate-900 border-white/80 shadow-xs font-black",
    tag: { uz: "Ortodontiya", ru: "Ортодонтия", en: "Orthodontics" },
    title: {
      uz: "Qiyshiq tishlar yoki noto'g'ri tishlash (prikus)",
      ru: "Неровные зубы или неправильный прикус",
      en: "Crooked teeth or bite misalignment",
    },
    recommendation: {
      uz: "Zamonaviy Breket Tizimlari (Metall, Keramika, Sapfir)",
      ru: "Брекет-Системы (Металл, Керамика, Сапфир)",
      en: "Orthodontic Braces Systems (Metal, Ceramic, Sapphire)",
    },
    summary: {
      uz: "20+ yillik tibbiyot tajribasiga ega vrach stomatolog nazoratida metall va estetik keramik breketlar yordamida tabassumni to'liq tekislash.",
      ru: "Выравнивание зубного ряда и прикуса надежными брекетами под контролем врача с более чем 20-летним опытом.",
      en: "Personalized digital alignment with metal or aesthetic ceramic braces supervised by 20+ years experienced dentist.",
    },
    steps: [
      { uz: "Raqamli prikus diagnostikasi", ru: "Диагностика прикуса", en: "Digital bite diagnosis" },
      { uz: "Breket tizimini o'rnatish", ru: "Фиксация брекетов", en: "Bracket placement" },
      { uz: "Mukammal tekis tabassum", ru: "Ровные зубы и прикус", en: "Harmonious straight smile" },
    ],
    duration: { uz: "Individual reja", ru: "Поэтапно", en: "Custom course" },
    matchScore: "98%",
  },
  {
    id: "aesthetic",
    serviceId: "ortopediya",
    image: assets.treatment_crowns,
    icon: <DentalVeneerCrown className="w-5 h-5 text-brandCyan" />,
    badgeColor: "bg-white/95 text-slate-900 border-white/80 shadow-xs font-black",
    tag: { uz: "Ortopediya", ru: "Ортопедия", en: "Orthopedics" },
    title: {
      uz: "Tish qo'yish, singan tishlar, sirkon karonka va protezlar",
      ru: "Протезирование, сколы зубов, коронки и мосты",
      en: "Tooth placement, broken teeth, crowns & prosthetics",
    },
    recommendation: {
      uz: "Yuqori Sifatli Sirkon Karonkalar & Zamonaviy Protezlash",
      ru: "Циркониевые Коронки и Высокоточное Протезирование",
      en: "Precision Zirconia Crowns & Modern Prosthetics",
    },
    summary: {
      uz: "Metall-siz monolit sirkoniy, IPS E.max keramika va qulay protezlar bilan tishlarning chaynash qobiliyati va estetikasini 100% tiklash.",
      ru: "Восстановление разрушенных и отсутствующих зубов безметалловой керамикой и комфортными протезами.",
      en: "Restoring natural masticatory function and smile harmony using metal-free zirconia crowns and precision dentures.",
    },
    steps: [
      { uz: "Raqamli 3D skanerlash", ru: "3D-сканирование", en: "3D intraoral scan" },
      { uz: "Mikron aniqlikda tayyorlash", ru: "Высокоточное изготовление", en: "Micron precision CAD/CAM" },
      { uz: "Kafolatli mustahkam fiksatsiya", ru: "Надежная фиксация", en: "Permanent bonding" },
    ],
    duration: { uz: "3–5 kun", ru: "3–5 дней", en: "3–5 days" },
    matchScore: "100%",
  },
  {
    id: "surgery",
    serviceId: "xirurgiya",
    image: assets.treatment_surgery,
    icon: <DentalSurgeryExtraction className="w-5 h-5 text-rose-600" />,
    badgeColor: "bg-white/95 text-slate-900 border-white/80 shadow-xs font-black",
    tag: { uz: "Xirurgiya", ru: "Хирургия", en: "Surgery" },
    title: {
      uz: "Muammoli aql tishi yoki tish oldirish zarurati",
      ru: "Сложный зуб мудрости или удаление зуба",
      en: "Problematic wisdom tooth or extraction need",
    },
    recommendation: {
      uz: "Atravmatik Og'riqsiz & Asoratsiz Tish Olish",
      ru: "Бережное Удаление Зубов Без Боли и Осложнений",
      en: "Atraumatic Painless Tooth Extraction",
    },
    summary: {
      uz: "Jag' suyagini asrab qolgan holda, murakkab aql tishlari va singan ildizlarni 2 bosqichli og'riqsizlantirish bilan 10-15 daqiqada asoratsiz olish.",
      ru: "Бережное извлечение зубов и сложных восьмерок без боли и с быстрым легким заживлением.",
      en: "Gentle socket-preserving removal of teeth and impacted wisdom teeth in 10-15 minutes with zero pain.",
    },
    steps: [
      { uz: "Rentgen tashxisi", ru: "Рентген-контроль", en: "Digital radiography" },
      { uz: "2 bosqichli anesteziya", ru: "Двухэтапная анестезия", en: "Two-stage anesthesia" },
      { uz: "Atravmatik olib tashlash", ru: "Бережное извлечение", en: "Gentle extraction" },
    ],
    duration: { uz: "10–20 daqiqa", ru: "10–20 минут", en: "10–20 mins" },
    matchScore: "100%",
  },
];

const SmileAssessmentWizard = () => {
  const { lang } = useLanguage();
  const { openBooking } = useBooking();
  const [selectedConcern, setSelectedConcern] = useState(concerns[0]);

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] rounded-3xl border border-amber-200/90 shadow-luxury p-5 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-100/30 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200/60 shadow-2xs">
            <IconSparkleStar className="w-3.5 h-3.5 text-brandOrange" />
            <span>{lang === "uz" ? "Onlayn Tabassum Tahlili" : lang === "ru" ? "Онлайн-Подбор Лечения" : "Online Smile Assessment"}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-classic">
            {lang === "uz"
              ? "Sizni Nima Bezovta Qilmoqda? Mos Yechimni Aniqlang"
              : lang === "ru"
              ? "Что Вас Беспокоит? Подберите Оптимальное Решение"
              : "What is Your Main Dental Concern?"}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === "uz"
              ? "Holatingizni tanlang va Stomatolog Orifjonning individual davolash rejasi bilan darhol tanishing."
              : lang === "ru"
              ? "Выберите вашу ситуацию и получите персональный план лечения от Стоматолога Орифжона."
              : "Select your primary symptom to preview Dentist Orifjon's customized clinical approach."}
          </p>
        </div>

        {/* 5 Concern Cards with Visual Thumbnail Images & Luxury Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 [perspective:1000px]">
          {concerns.map((item) => {
            const isSelected = selectedConcern.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedConcern(item)}
                className={`p-4 rounded-3xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden [transform-style:preserve-3d] ${
                  isSelected
                    ? "bg-white border-primary shadow-luxury-lg scale-[1.03] ring-2 ring-primary/30 -translate-y-1"
                    : "bg-white/90 border-amber-200/80 hover:bg-white hover:border-amber-300 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Visual Clinical Thumbnail Image with Floating Badge */}
                  <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-3 bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    
                    {/* Category Floating Sticker */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] font-semibold tracking-wide border shadow-xs ${item.badgeColor}`}>
                        {item.tag[lang]}
                      </span>
                    </div>

                    {/* Floating Icon Disc */}
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center">
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title[lang]}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-amber-100/70">
                  <span className="text-xs font-bold text-primary flex items-center gap-1">
                    <span>{lang === "uz" ? "Yechim" : lang === "ru" ? "Решение" : "Solution"}</span>
                    <span>→</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-2xs">
                    {item.matchScore} {lang === "uz" ? "moslik" : lang === "ru" ? "совпадение" : "match"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Recommendation Details with 3D Depth Card & Clinical Photo */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-amber-200/90 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center [transform-style:preserve-3d]">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-primary bg-red-50 px-3.5 py-1 rounded-full border border-red-200/60 shadow-2xs">
                {lang === "uz" ? "TAVSIYA ETILADIGAN MUOLAJA" : lang === "ru" ? "РЕКОМЕНДОВАННОЕ ЛЕЧЕНИЕ" : "RECOMMENDED PROCEDURE"}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1 shadow-2xs">
                <IconCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === "uz" ? "100% Og'riqsiz Zamonaviy Texnologiya" : lang === "ru" ? "100% Без боли и страха" : "100% Painless Tech"}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-classic leading-tight">
              {selectedConcern.recommendation[lang]}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {selectedConcern.summary[lang]}
            </p>

            {/* 3 Step Protocol */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              {selectedConcern.steps.map((st, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-brandOrange">
                    {lang === "uz" ? `Bosqich 0${idx + 1}` : lang === "ru" ? `Шаг 0${idx + 1}` : `Step 0${idx + 1}`}
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    {st[lang]}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 text-xs font-bold text-slate-700 pt-3 border-t border-amber-100">
              <span className="flex items-center gap-1.5">
                <IconClock className="w-4 h-4 text-brandOrange" />
                <span>{selectedConcern.duration[lang]}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <IconShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{lang === "uz" ? "Rasmiy Kafolat" : lang === "ru" ? "Официальная Гарантия" : "Clinical Warranty"}</span>
              </span>
            </div>
          </div>

          {/* Right Action Column with Clinical Treatment Photo & Direct Booking */}
          <div className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border border-amber-200/90 shadow-md space-y-4">
            {/* Visual Recommendation Image Preview */}
            <div className="relative h-40 w-full rounded-2xl overflow-hidden border border-amber-200/80 shadow-md group">
              <img
                src={selectedConcern.image}
                alt={selectedConcern.recommendation[lang]}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] font-semibold tracking-wide border shadow-xs ${selectedConcern.badgeColor}`}>
                  {selectedConcern.tag[lang]}
                </span>
              </div>
              <div className="absolute bottom-2 left-3 right-3 text-left">
                <p className="text-[10px] font-bold text-amber-200 uppercase tracking-wider">
                  {lang === "uz" ? "Klinik Natija" : lang === "ru" ? "Клинический Результат" : "Clinical Result"}
                </p>
                <p className="text-xs font-bold text-white truncate">
                  {selectedConcern.duration[lang]} · {lang === "uz" ? "100% Og'riqsiz" : lang === "ru" ? "100% Без боли" : "100% Gentle"}
                </p>
              </div>
            </div>

            <button
              onClick={() => openBooking(selectedConcern.serviceId)}
              className="relative overflow-hidden w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-luxury transition-all cursor-pointer hover:shadow-luxury-lg hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>{lang === "uz" ? "Stomatolog Orifjon Qabuliga Yozilish" : lang === "ru" ? "Записаться к Стоматологу Орифжону" : "Book with Dentist Orifjon"}</span>
                <span>→</span>
              </span>
            </button>

            <p className="text-[11px] text-slate-500 leading-snug text-center">
              {lang === "uz"
                ? "Navbatsiz, qulay vaqtda qabul qilinadi. Bepul dastlabki konsultatsiya."
                : lang === "ru"
                ? "Без очередей в удобное для вас время. Бесплатный первичный осмотр."
                : "No queues, scheduled at your preferred time. Free initial checkup."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileAssessmentWizard;
