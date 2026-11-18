import React, { useState } from "react";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import {
  DentalToothMolar,
  DentalVeneerCrown,
  DentalSurgeryExtraction,
  DentalBracesIcon,
  IconShieldCheck,
  IconClock,
} from "./MedicalIcons";

export const SymptomQuickHelper = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const symptoms = [
    {
      id: "severe-pain",
      icon: "⚡",
      category: "terapiya",
      servicePath: "/services/terapiya",
      badge: {
        uz: "Shoshilinch Yordam",
        ru: "Срочная помощь",
        en: "Urgent Relief",
      },
      title: {
        uz: "Tishim qattiq og'riyapti yoki loxillayapti",
        ru: "Сильно болит или пульсирует зуб",
        en: "Severe throbbing toothache or night pain",
      },
      shortQuery: {
        uz: "Kechasi og'riq, ovqat chaynaganda qattiq og'riq",
        ru: "Боль ночью, больно накусывать на зуб",
        en: "Nocturnal pain, painful chewing pressure",
      },
      diagnosis: {
        uz: "O'tkir pulpit yoki periodontit (tish nervining chuqur yallig'lanishi).",
        ru: "Острый пульпит или периодонтит (воспаление зубного нерва).",
        en: "Acute pulpitis or periodontitis (inflamed dental nerve/pulp).",
      },
      solution: {
        uz: "2 bosqichli og'riqsiz mikro-anesteziya (Orablok) qilinadi. Og'riq birinchi daqiqalardanoq to'xtatilib, ildiz kanallari tozalanadi va germetik davolanadi.",
        ru: "Двухэтапная анестезия Ораблок. Боль полностью снимается за пару минут, каналы бережно очищаются и герметично пломбируются.",
        en: "Gentle two-stage local anesthesia immediately stops pain. Canals are gently sanitized and sealed.",
      },
      time: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    },
    {
      id: "sensitive-teeth",
      icon: "❄️",
      category: "terapiya",
      servicePath: "/services/terapiya",
      badge: {
        uz: "Emal Sezuvchanligi",
        ru: "Чувствительность эмали",
        en: "Enamel Sensitivity",
      },
      title: {
        uz: "Sovuq suvda yoki shirinlikda tishim sirqirayapti",
        ru: "Зуб реагирует на холодное, горячее или сладкое",
        en: "Sharp tooth sensitivity to cold water or sweets",
      },
      shortQuery: {
        uz: "Muzdek suv ichganda qaqshash, shirinlik yeganda og'riq",
        ru: "Ломота от холодного, реакция на сладкое",
        en: "Sharp twinges from cold drinks or sugary food",
      },
      diagnosis: {
        uz: "Boshlang'ich karies, emal mikro-darzlari yoki bo'yin qismi emirilishi.",
        ru: "Начальный кариес, микротрещины эмали или клиновидный дефект.",
        en: "Early caries, enamel demineralization, or cervical tooth wear.",
      },
      solution: {
        uz: "Tish nervi olinmaydi! Emal mineralizatsiyasi tiklanadi yoki Charisma xameleon nanokompoziti bilan sezilmas darajada yopiladi.",
        ru: "Нерв сохраняется живым! Реминерализация эмали или пломба Charisma точно в цвет зуба.",
        en: "The nerve is kept vital. Enamel is remineralized or sealed with German Charisma composite.",
      },
      time: { uz: "20–30 daqiqa", ru: "20–30 минут", en: "20–30 mins" },
    },
    {
      id: "dark-cavity",
      icon: "🦷",
      category: "terapiya",
      servicePath: "/services/terapiya",
      badge: {
        uz: "Tish Kariesi",
        ru: "Кариес зуба",
        en: "Dental Cavity",
      },
      title: {
        uz: "Tishimda qora dog' yoki teshik paydo bo'ldi",
        ru: "В зубе черная точка, потемнение или дырка",
        en: "Dark spot, visible hole, or cavity in tooth",
      },
      shortQuery: {
        uz: "Ovqat tiqilib qolyapti, tish ichidan qoraygan",
        ru: "Застревает пища, зуб темнеет изнутри",
        en: "Food catches in tooth, discoloration inside",
      },
      diagnosis: {
        uz: "Yuzaki yoki chuqur karies (tish to'qimasining bakterial emirilishi).",
        ru: "Поверхностный или глубокий кариес (деструкция эмали и дентина).",
        en: "Superficial or deep cavity caries demineralization.",
      },
      solution: {
        uz: "Tish tirik saqlangan holda mikron aniqlikda tozalanadi, Germaniyaning Charisma yoki Janubiy Koreyaning DenFil kompoziti bilan tish anatomiyasi 1 qabulda tiklanadi.",
        ru: "Бережное иссечение кариеса с сохранением живой пульпы, реставрация нанокомпозитами Charisma (Германия) и DenFil (Корея) за 1 визит.",
        en: "Precise cavity cleanup preserving nerve vitality, layered with German Charisma or Korean DenFil.",
      },
      time: { uz: "30–40 daqiqa", ru: "30–40 минут", en: "30–40 mins" },
    },
    {
      id: "wisdom-tooth",
      icon: "⚠️",
      category: "xirurgiya",
      servicePath: "/services/xirurgiya",
      badge: {
        uz: "Aql Tishi (Donolik)",
        ru: "Зуб мудрости",
        en: "Wisdom Tooth",
      },
      title: {
        uz: "Aql tishim chiqib milkim shishdi, og'riyapti",
        ru: "Режется зуб мудрости, опухла десна и щека",
        en: "Wisdom tooth eruption pain and swollen gum",
      },
      shortQuery: {
        uz: "Og'iz ochish qiyinlashishi, 8-tish usti yiringlashi",
        ru: "Больно открывать рот, воспалился капюшон восьмерки",
        en: "Pain opening jaw, pericoronitis gum inflammation",
      },
      diagnosis: {
        uz: "Perikoronarit yoki 8-tishning noto'g'ri (yotgan) chiqishi.",
        ru: "Перикоронит или ретенция (дистопия) зуба мудрости.",
        en: "Pericoronitis or impacted/misaligned 8th wisdom molar.",
      },
      solution: {
        uz: "Milk qopqog'i og'riqsiz ochiladi yoki tish xalaqit bersa, Orablok ostida 10-15 daqiqada 100% og'riqsiz va suyakni asrab olinadi.",
        ru: "Иссечение капюшона или атравматичное безболезненное удаление восьмерки за 10–15 минут без боли под Ораблоком.",
        en: "Painless operculectomy or gentle 10-15 minute atraumatic extraction under Orabloc anesthesia.",
      },
      time: { uz: "15–25 daqiqa", ru: "15–25 минут", en: "15–25 mins" },
    },
    {
      id: "chipped-tooth",
      icon: "🔨",
      category: "terapiya",
      servicePath: "/services/terapiya",
      badge: {
        uz: "1 Qabulda Tiklash",
        ru: "За 1 визит",
        en: "Same-Day Fix",
      },
      title: {
        uz: "Old tishim sinib qoldi yoki plomba tushib ketdi",
        ru: "Откололся передний зуб или выпала старая пломба",
        en: "Chipped front tooth, crack, or lost filling",
      },
      shortQuery: {
        uz: "Tabassumda siniq ko'rinyapti, tilga botyapti",
        ru: "Заметен скол на улыбке, царапает язык",
        en: "Visible tooth break, sharp edge irritating tongue",
      },
      diagnosis: {
        uz: "Tish toj qismining sinishi yoki kompozit yemirilishi.",
        ru: "Скол коронковой части зуба, травма эмали или дефект пломбы.",
        en: "Crown fracture, trauma chip, or marginal restoration failure.",
      },
      solution: {
        uz: "Badiiy nano-restavratsiya: 45 daqiqada tishning shaffofligi, qirrasi va rangi tushirilgan Charisma kompoziti bilan yangidek tiklanadi.",
        ru: "Художественная реставрация за 45 минут: невидимый переход, натуральная прозрачность эмали нанокомпозитом Charisma.",
        en: "Artistic direct reconstruction in 45 mins matching tooth chroma, translucency, and natural gloss.",
      },
      time: { uz: "40–50 daqiqa", ru: "40–50 минут", en: "40–50 mins" },
    },
    {
      id: "bleeding-gums",
      icon: "🩸",
      category: "terapiya",
      servicePath: "/services/terapiya",
      badge: {
        uz: "Milk Salomatligi",
        ru: "Здоровье десен",
        en: "Gum Health",
      },
      title: {
        uz: "Tish yuvganda milk qonayapti, og'izdan hid kelyapti",
        ru: "Кровоточат десны при чистке, неприятный запах",
        en: "Gums bleed during brushing, bad breath",
      },
      shortQuery: {
        uz: "Tishlarda qattiq toshlar, qizargan shishgan milklar",
        ru: "Зубной камень, воспаленные красные десны",
        en: "Tartar buildup, inflamed red gingiva, halitosis",
      },
      diagnosis: {
        uz: "Gingivit, tish toshlari va bakterial karash yallig'lanishi.",
        ru: "Гингивит, поддесневой зубной камень и бактериальный налет.",
        en: "Gingivitis, subgingival dental calculus, and bacterial plaque.",
      },
      solution: {
        uz: "Ultratovushli og'riqsiz apparatda toshlar tozalanadi, emal Air-Flow bilan sayqallanadi va milkka antibakterial gel surtiladi.",
        ru: "Ультразвуковая безболезненная чистка зубного камня, полировка Air-Flow и снятие воспаления за 1 процедуру.",
        en: "Painless ultrasonic scaling, Air-Flow polish, and soothing medicinal gum application.",
      },
      time: { uz: "30–40 daqiqa", ru: "30–40 минут", en: "30–40 mins" },
    },
    {
      id: "gold-to-zirconia",
      icon: "✨",
      category: "ortopediya",
      servicePath: "/services/ortopediya",
      badge: {
        uz: "15 Yillik Kafolat",
        ru: "Гарантия 15 лет",
        en: "15-Yr Warranty",
      },
      title: {
        uz: "Eski tilla yoki qoraygan temir tishlarni almashtirish",
        ru: "Замена старых золотых коронок на белые циркониевые",
        en: "Replacing outdated gold or metal crowns with zirconia",
      },
      shortQuery: {
        uz: "Milk ko'karishi, tabiiy oq tabassum xohlash",
        ru: "Синюшность десны от металла, желание иметь белые зубы",
        en: "Dark gum lines from metal, desiring natural white smile",
      },
      diagnosis: {
        uz: "Eskirgan metall qoplamalar va metall oksidlanishi.",
        ru: "Устаревшие металлические коронки, окисление у края десны.",
        en: "Outdated metal alloy crowns, marginal gingival staining.",
      },
      solution: {
        uz: "Eski qoplamalar atravmatik yechiladi. 3D optik skaner orqali monolit Sirkoniy (Zirconia) karonkalar 3-4 kunda o'rnatiladi.",
        ru: "Бережное снятие старых коронок, цифровое сканирование и установка монолитного циркония за 3-4 дня.",
        en: "Gentle removal, 3D optical scan, and CAD/CAM monolithic Zirconia placement in 3-4 days.",
      },
      time: { uz: "3–4 kun", ru: "3–4 дня", en: "3–4 days" },
    },
    {
      id: "crooked-teeth",
      icon: "📐",
      category: "ortodontiya",
      servicePath: "/services/ortodontiya",
      badge: {
        uz: "Tishlarni Tekislash",
        ru: "Выравнивание",
        en: "Smile Alignment",
      },
      title: {
        uz: "Tishlarim qiyshiq, ustma-ust yoki orasi ochiq",
        ru: "Кривые, скученные зубы или щели между зубами",
        en: "Crooked, crowded, or spaced teeth and irregular bite",
      },
      shortQuery: {
        uz: "Tabassum qilishdan uyalish, noto'g'ri tishlash (prikus)",
        ru: "Комплекс улыбки, неправильный прикус у взрослых",
        en: "Self-conscious smile, malocclusion at any age",
      },
      diagnosis: {
        uz: "Tish qatori anomaliyasi, jag'da joy yetishmovchiligi.",
        ru: "Аномалии зубных рядов, скученность, дистопия.",
        en: "Dental arch crowding, ectopic alignment, crossbite.",
      },
      solution: {
        uz: "Sog'lom tishlar sug'urilmasdan, zamonaviy metall yoki keramik breketlar orqali 6–12 oyda ideal tekis holga keltiriladi.",
        ru: "Бережное исправление брекетами без удаления здоровых зубов. Первые заметные результаты уже через 6 месяцев.",
        en: "Non-extraction braces or clear aligners guiding teeth into balanced occlusion within 6–12 months.",
      },
      time: { uz: "6–12 oy", ru: "6–12 месяцев", en: "6–12 months" },
    },
  ];

  const [activeSymptomId, setActiveSymptomId] = useState("severe-pain");
  const activeSymptom = symptoms.find((s) => s.id === activeSymptomId) || symptoms[0];

  const t = {
    eyebrow: {
      uz: "Bemorlar Alomatlari va Tezkor Yordam",
      ru: "Симптомы и Скорая Помощь",
      en: "Symptoms & Emergency Dental Guide",
    }[lang],
    title: {
      uz: "Sizni qanday tish og'rig'i yoki muammo bezovta qilyapti?",
      ru: "Какая зубная боль или проблема вас беспокоит?",
      en: "What dental symptom or pain are you experiencing?",
    }[lang],
    subtitle: {
      uz: "O'zingizdagi alomatni tanlang va Stomatolog Orifjondan aniq tashxis, 100% og'riqsiz yechim hamda muddatni ko'ring.",
      ru: "Выберите ваш симптом и узнайте диагноз, 100% безболезненное решение и сроки лечения.",
      en: "Select your symptom to view the likely diagnosis, pain-free treatment solution, and timeline.",
    }[lang],
    likelyDiagnosis: {
      uz: "Ehtimoliy tashxis / sabab:",
      ru: "Вероятный диагноз / причина:",
      en: "Likely diagnosis / cause:",
    }[lang],
    ourSolution: {
      uz: "Stomatolog Orifjon qanday yordam beradi:",
      ru: "Как поможет Стоматолог Орифжон:",
      en: "How Dentist Orifjon treats this:",
    }[lang],
    procedureTime: {
      uz: "Muolaja vaqti:",
      ru: "Время лечения:",
      en: "Duration:",
    }[lang],
    bookAppointment: {
      uz: "Ushbu muammo bo'yicha qabulga yozilish →",
      ru: "Записаться по этой проблеме →",
      en: "Book appointment for this symptom →",
    }[lang],
    viewServiceDetails: {
      uz: "Xizmat haqida batafsil",
      ru: "Подробнее об услуге",
      en: "Service details",
    }[lang],
  };

  return (
    <section
      aria-labelledby="symptom-helper-heading"
      className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-[#F8FAFB] via-white to-teal-50/20 border border-teal-100/80 p-5 sm:p-8 lg:p-12 shadow-[0_16px_50px_-12px_rgba(12,110,90,0.08)]"
    >
      {/* Top Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-black uppercase tracking-wider text-primary shadow-2xs">
          <span>🩺 {t.eyebrow}</span>
        </span>
        <h2
          id="symptom-helper-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-serif-classic"
        >
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Symptoms Horizontal Pill Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-5xl mx-auto mb-8">
        {symptoms.map((s) => {
          const isSelected = s.id === activeSymptomId;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSymptomId(s.id)}
              className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md scale-102"
                  : "bg-white text-slate-800 border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/40 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-xl sm:text-2xl">{s.icon}</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-teal-50 text-primary border border-teal-200/60"
                  }`}
                >
                  {s.badge[lang]}
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm font-bold leading-snug line-clamp-2 ${
                  isSelected ? "text-white" : "text-slate-900"
                }`}
              >
                {s.title[lang]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Symptom Detailed Solution Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-teal-200/80 shadow-lg animate-fadeIn">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-teal-50 text-2xl flex items-center justify-center border border-teal-200/60">
              {activeSymptom.icon}
            </span>
            <div>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider bg-teal-100 text-teal-900">
                {activeSymptom.badge[lang]}
              </span>
              <h3 className="text-base sm:text-xl font-black text-slate-900 mt-1">
                {activeSymptom.title[lang]}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold">
            <IconClock className="w-4 h-4 text-amber-600" />
            <span>
              {t.procedureTime} {activeSymptom.time[lang]}
            </span>
          </div>
        </div>

        {/* Diagnosis & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm">
          {/* Diagnosis Block */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {t.likelyDiagnosis}
            </p>
            <p className="text-slate-700 leading-relaxed font-semibold">
              {activeSymptom.diagnosis[lang]}
            </p>
            <p className="text-[11px] text-slate-500 italic">
              ({activeSymptom.shortQuery[lang]})
            </p>
          </div>

          {/* Solution Block */}
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/70 space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              {t.ourSolution}
            </p>
            <p className="text-slate-800 leading-relaxed">
              {activeSymptom.solution[lang]}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => onOpenBooking(activeSymptom.category)}
            className="w-full sm:flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-primary to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
          >
            {t.bookAppointment}
          </button>
          <Link
            to={to(activeSymptom.servicePath)}
            className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors text-center shrink-0"
          >
            {t.viewServiceDetails}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SymptomQuickHelper;
