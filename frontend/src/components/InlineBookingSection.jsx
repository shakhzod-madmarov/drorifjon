import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import {
  IconPhone,
  IconTelegram,
  IconSparkleStar,
  DentalToothMolar,
  DentalVeneerCrown,
  DentalImplantFixture,
  DentalSurgeryExtraction,
  DentalBracesIcon,
} from "./MedicalIcons";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  fetchDentistAvailability,
  submitDentistBooking,
  buildWorkingHoursSchedule,
  filterAvailabilitySchedule,
  getClinicTodayStr,
  useClinicHours,
} from "../lib/medinsonBooking";
import {
  formatUzPhone,
  isUzPhoneComplete,
} from "../utils/phone";
import {
  sanitizePatientName,
  sanitizeNote,
  checkRateLimit,
  isBotSubmission,
  isHumanSubmissionVelocity,
} from "../utils/security";
import { CANONICAL_SPECIALTIES, resolveCanonicalServiceId } from "../constants/bookingServices";

const pad2 = (n) => String(n).padStart(2, "0");

const WEEKDAY_SHORT = {
  uz: ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const parseYmd = (s) => {
  const [y, m, d] = String(s || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

const formatDayPill = (ymd, lang) => {
  const date = parseYmd(ymd);
  if (!date) return ymd;
  const wds = WEEKDAY_SHORT[lang] || WEEKDAY_SHORT.uz;
  return `${wds[date.getDay()]} ${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}`;
};

const formatDmy = (ymd) => {
  const [y, m, d] = String(ymd || "").split("-");
  if (!y || !m || !d) return ymd;
  return `${d}.${m}.${y}`;
};

const TEXT = {
  uz: {
    kicker: "Onlayn qabul · Stomatolog Orifjon",
    heading: "Uchrashuv vaqtini tanlang",
    sub: "Bo'sh kun va soatni tanlab, Stomatolog Orifjon qabuliga navbatsiz yoziling.",
    defaultDaysLabel: "Dushanba - Shanba (08:30 – 18:30)",
    serviceLabel: "Xizmat yo'nalishi",
    dayGroupLabel: "1-qadam: Qabul kunini tanlang",
    timeGroupLabel: "2-qadam: Bo'sh vaqtni tanlang",
    selectedSlotLabel: "Tanlangan vaqt:",
    nameLabel: "Ism va familiya *",
    phoneLabel: "Telefon raqami *",
    dobLabel: "Tug'ilgan sana (ixtiyoriy)",
    dobHint: "Bir xil telefon raqamidan oila a'zolari yozilganda bemorlarni farqlash uchun yordam beradi.",
    noteLabel: "Shikoyat yoki izoh (ixtiyoriy)",
    namePlaceholder: "Masalan: Ismingiz",
    phonePlaceholder: "+998 90 548 10 90",
    dobFormat: "kun-oy-yil",
    dobPlaceholder: "kun-oy-yil",
    notePlaceholder: "Implant, breket, karonka, vinir yoki og'riqsiz davolash bo'yicha...",
    submit: "Qabulga Yozilishni Tasdiqlash",
    submitting: "Yuborilmoqda...",
    needName: "Iltimos, ism va familiyangizni kiriting",
    needPhone: "Iltimos, to'liq telefon raqamini kiriting",
    needTime: "Iltimos, sana va vaqtni tanlang",
    conflictError: "Bu vaqt band qilingan. Iltimos, boshqa vaqtni tanlang.",
    failed: "So'rovni yuborib bo'lmadi. Iltimos, telefon orqali bog'laning.",
    pausedNotice: "Onlayn qabul vaqtlari yangilanmoqda. To'g'ridan-to'g'ri telefon orqali ham yozilishingiz mumkin:",
    successBadge: "Qabul so'rovi qabul qilindi",
    successTitle: "Qabulingiz muvaffaqiyatli ro'yxatga olindi!",
    successBody: "So'rovingiz qabul qilindi. Klinika tez orada siz bilan bog'lanadi.",
    summaryPatient: "Bemor",
    summaryPhone: "Telefon",
    summaryDob: "Tug'ilgan sana",
    summaryService: "Xizmat",
    summaryWhen: "Qabul vaqti",
    telegramCardTitle: "Telegram eslatmani yoqing",
    telegramCardDesc: "Qabul vaqti yaqinlashganda Telegram orqali avtomatik eslatma olish uchun quyidagi tugmani bosing va botda START tugmasini bosing.",
    telegramCardBtn: "Telegram botga ulanish ↗",
    callBtn: "Klinikaga qo'ng'iroq qilish",
    bookAnother: "← Yangi qabulga yozilish",
    leadNoticeTitle: "Adolatli qabul va navbat tartibi",
    leadNotice: "Jonli navbatdagi bemorlar huquqini hurmat qilgan holda, onlayn qabul kamida 2 soat oldindan band qilinadi (masalan, hozir soat 08:00 bo'lsa, eng yaqin bo'sh vaqt 10:00 dan boshlanadi).",
    leadNoticeEmergency: "Shoshilinch og'riq bo'lsa, to'g'ridan-to'g'ri qo'ng'iroq qiling:",
    slotsFullToday: "Bugun to'lgan",
    slotsFullOther: "Bo'sh joy yo'q",
    slotsLabel: "bo'sh soat",
    noSlotsTodayMessage: "Bugun uchun barcha onlayn vaqtlar to'lgan yoki 2 soatlik navbat buferi sababli yopilgan. Iltimos, keyingi sanalardan birini tanlang:",
    nextAvailableDayBtn: "Keyingi bo'sh kunga o'tish →",
  },
  ru: {
    kicker: "Онлайн приём · Стоматолог Орифжон",
    heading: "Выберите удобное время визита",
    sub: "Выберите свободный день и время для записи на приём к Стоматологу Орифжону без очереди.",
    defaultDaysLabel: "Понедельник - Суббота (08:30 – 18:30)",
    serviceLabel: "Направление лечения",
    dayGroupLabel: "Шаг 1: Выберите день приёма",
    timeGroupLabel: "Шаг 2: Выберите свободное время",
    selectedSlotLabel: "Выбранное время:",
    nameLabel: "Имя и фамилия *",
    phoneLabel: "Номер телефона *",
    dobLabel: "Дата рождения (необязательно)",
    dobHint: "Помогает клинике различать членов семьи при записи с одного номера телефона.",
    noteLabel: "Жалоба или комментарий (необязательно)",
    namePlaceholder: "Например: Ваше Имя",
    phonePlaceholder: "+998 90 548 10 90",
    dobFormat: "день-месяц-год",
    dobPlaceholder: "день-месяц-год",
    notePlaceholder: "Имплантация, брекеты, коронки, виниры или зубная боль...",
    submit: "Подтвердить запись на приём",
    submitting: "Отправка...",
    needName: "Пожалуйста, введите имя и фамилию",
    needPhone: "Пожалуйста, введите полный номер телефона",
    needTime: "Пожалуйста, выберите дату и время",
    conflictError: "Это время уже занято. Пожалуйста, выберите другое время.",
    failed: "Не удалось отправить заявку. Пожалуйста, позвоните нам.",
    pausedNotice: "Онлайн слоты обновляются. Записаться можно также напрямую по телефону:",
    successBadge: "Заявка успешно зарегистрирована",
    successTitle: "Вы записаны на приём!",
    successBody: "Ваша заявка принята. Клиника свяжется с вами в ближайшее время.",
    summaryPatient: "Пациент",
    summaryPhone: "Телефон",
    summaryDob: "Дата рождения",
    summaryService: "Услуга",
    summaryWhen: "Дата и время",
    telegramCardTitle: "Включите напоминание в Telegram",
    telegramCardDesc: "Чтобы получить напоминание о визите, нажмите кнопку ниже и запустите Telegram-бота (START).",
    telegramCardBtn: "Подключить Telegram-бота ↗",
    callBtn: "Позвонить в клинику",
    bookAnother: "← Записаться ещё раз",
    leadNoticeTitle: "Правило справедливой очереди",
    leadNotice: "С уважением к пациентам в клинике и живой очереди, онлайн-запись открыта минимум за 2 часа до приёма (например, если сейчас 08:00, ближайшее свободное время — с 10:00).",
    leadNoticeEmergency: "При острой боли звоните в клинику напрямую:",
    slotsFullToday: "На сегодня мест нет",
    slotsFullOther: "Мест нет",
    slotsLabel: "мест",
    noSlotsTodayMessage: "На сегодня все онлайн-слоты заняты либо закрыты по правилу 2-часового буфера очереди. Пожалуйста, выберите следующую дату:",
    nextAvailableDayBtn: "Перейти к ближайшей свободной дате →",
  },
  en: {
    kicker: "Online Appointment · Dentist Orifjon",
    heading: "Select your visit time",
    sub: "Choose an available date and time slot to reserve your appointment with Dentist Orifjon.",
    defaultDaysLabel: "Monday - Saturday (08:30 – 18:30)",
    serviceLabel: "Service Specialty",
    dayGroupLabel: "Step 1: Choose appointment date",
    timeGroupLabel: "Step 2: Choose available time",
    selectedSlotLabel: "Selected slot:",
    nameLabel: "Full Name *",
    phoneLabel: "Phone Number *",
    dobLabel: "Date of Birth (optional)",
    dobHint: "Helps distinguish family members sharing the same contact phone number.",
    noteLabel: "Complaint or Note (optional)",
    namePlaceholder: "e.g. Your Name",
    phonePlaceholder: "+998 90 548 10 90",
    dobFormat: "day-month-year",
    dobPlaceholder: "day-month-year",
    notePlaceholder: "Implants, braces, crowns, veneers or toothache...",
    submit: "Confirm Appointment Booking",
    submitting: "Submitting...",
    needName: "Please enter your full name",
    needPhone: "Please enter a complete phone number",
    needTime: "Please choose a date and time slot",
    conflictError: "This slot is already booked. Please choose another time.",
    failed: "Submission failed. Please call us directly.",
    pausedNotice: "Online slots are refreshing. You can also book directly by phone:",
    successBadge: "Appointment Request Confirmed",
    successTitle: "Your visit has been registered!",
    successBody: "Your request has been received. The clinic will contact you shortly.",
    summaryPatient: "Patient",
    summaryPhone: "Phone",
    summaryDob: "Date of Birth",
    summaryService: "Service",
    summaryWhen: "Date & Time",
    telegramCardTitle: "Enable Telegram Reminders",
    telegramCardDesc: "To receive an automated reminder as your appointment approaches, tap below and press START in our Telegram bot.",
    telegramCardBtn: "Connect Telegram Bot ↗",
    callBtn: "Call Clinic Directly",
    bookAnother: "← Book another appointment",
    leadNoticeTitle: "Fair Queue & Booking Notice",
    leadNotice: "To respect walk-in patients already waiting in the clinic, online appointments require at least 2 hours advance notice (e.g. at 08:00, earliest booking starts from 10:00).",
    leadNoticeEmergency: "For emergency pain, please call directly:",
    slotsFullToday: "Full today",
    slotsFullOther: "Fully booked",
    slotsLabel: "slots",
    noSlotsTodayMessage: "All online slots for today are booked or closed under the 2-hour queue buffer policy. Please select an upcoming date:",
    nextAvailableDayBtn: "Jump to next available date →",
  },
};

const renderSpecialtyIcon = (id, isSelected) => {
  const iconProps = { className: `w-5 h-5 ${isSelected ? "text-white" : "text-primary"}` };
  switch (id) {
    case "terapiya":
      return <DentalToothMolar {...iconProps} />;
    case "ortopediya":
      return <DentalVeneerCrown {...iconProps} />;
    case "implantatsiya":
      return <DentalImplantFixture {...iconProps} />;
    case "xirurgiya":
      return <DentalSurgeryExtraction {...iconProps} />;
    case "ortodontiya":
      return <DentalBracesIcon {...iconProps} />;
    default:
      return <DentalToothMolar {...iconProps} />;
  }
};

const InlineBookingSection = ({ initialService = null }) => {
  const { lang } = useLanguage();
  const { bookingRequest } = useBooking();
  const [searchParams] = useSearchParams();
  const t = TEXT[lang] || TEXT.uz;
  const clinicHours = useClinicHours(lang);

  const [days, setDays] = useState(() => buildWorkingHoursSchedule(10, 2));
  const [selectedDate, setSelectedDate] = useState(() => {
    const initDays = buildWorkingHoursSchedule(10, 2);
    const available = initDays.find((d) => d.times.length > 0) || initDays[0];
    return available ? available.date : "";
  });
  const [selectedTime, setSelectedTime] = useState(() => {
    const initDays = buildWorkingHoursSchedule(10, 2);
    const available = initDays.find((d) => d.times.length > 0) || initDays[0];
    return available?.times?.[0] || "";
  });
  const [service, setService] = useState(() => resolveCanonicalServiceId(initialService || "implantatsiya"));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [dob, setDob] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");
  const formMountTime = useMemo(() => Date.now(), []);

  useEffect(() => {
    const targetService =
      bookingRequest?.service ||
      initialService ||
      searchParams.get("service") ||
      searchParams.get("serviceId");

    if (targetService) {
      setService(resolveCanonicalServiceId(targetService));
    }
    if (bookingRequest?.name) {
      setName(bookingRequest.name);
    }
    if (bookingRequest?.phone) {
      setPhone(formatUzPhone(bookingRequest.phone));
    }
    if (bookingRequest?.note) {
      setNote(bookingRequest.note);
    }
  }, [bookingRequest, initialService, searchParams]);

  const [isRelayEnabled, setIsRelayEnabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingLockRef = useRef(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);
  const [botQr, setBotQr] = useState("");

  const applyScheduleData = useCallback((rawDays) => {
    const filtered = filterAvailabilitySchedule(rawDays, 2);
    const validDays = filtered.length > 0 ? filtered : buildWorkingHoursSchedule(10, 2);
    setDays(validDays);
    setSelectedDate((cur) => {
      const match =
        validDays.find((d) => d.times.length > 0 && d.date === cur) ||
        validDays.find((d) => d.times.length > 0) ||
        validDays[0];
      if (match) {
        setSelectedTime((curT) => (match.times.includes(curT) ? curT : match.times[0] || ""));
      }
      return match ? match.date : "";
    });
  }, []);

  const loadAvailability = useCallback(async () => {
    try {
      const data = await fetchDentistAvailability();
      if (data?.enabled === false) {
        setIsRelayEnabled(false);
        applyScheduleData(buildWorkingHoursSchedule(10, 2));
        return;
      }
      if (Array.isArray(data?.days)) {
        setIsRelayEnabled(true);
        applyScheduleData(data.days);
        return;
      }
      setIsRelayEnabled(false);
      applyScheduleData(buildWorkingHoursSchedule(10, 2));
    } catch {
      setIsRelayEnabled(false);
      applyScheduleData(buildWorkingHoursSchedule(10, 2));
    }
  }, [applyScheduleData]);

  useEffect(() => {
    loadAvailability();
  }, [loadAvailability]);

  const todayStr = useMemo(() => getClinicTodayStr(), []);

  const firstDayWithSlots = useMemo(
    () => days.find((d) => d.times && d.times.length > 0) || null,
    [days],
  );

  const activeDay = useMemo(
    () => days.find((d) => d.date === selectedDate) || firstDayWithSlots || days[0] || null,
    [days, selectedDate, firstDayWithSlots],
  );

  const serviceObj = CANONICAL_SPECIALTIES.find((s) => s.id === service) || CANONICAL_SPECIALTIES[0];
  const serviceLabel = serviceObj[lang] || serviceObj.uz;

  const handlePhoneChange = (e) => {
    const formatted = formatUzPhone(e.target.value, phone);
    setPhone(formatted);
    if (errors.phone && isUzPhoneComplete(formatted)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 0. Synchronous re-entrancy lock to prevent parallel double-submissions
    if (submittingLockRef.current || isSubmitting) return;

    // 1. Anti-Bot Honeypot Protection
    if (isBotSubmission(honeypot)) {
      // Fake success to trap automated bot scrapers without calling backend relay
      setIsSuccess(true);
      return;
    }

    // 2. Velocity trap: human patient takes at least 1.5s to read & submit form
    if (!isHumanSubmissionVelocity(formMountTime, 1500)) {
      toast.warn(
        lang === "uz"
          ? "Iltimos, ma'lumotlarni tekshirib qayta bosing."
          : lang === "ru"
          ? "Пожалуйста, проверьте введённые данные."
          : "Please review your information before submitting."
      );
      return;
    }

    // 3. Client session rate-limiting (backed by sessionStorage)
    const rateStatus = checkRateLimit("booking_submission", 10);
    if (!rateStatus.allowed) {
      toast.warn(rateStatus.message);
      return;
    }

    // 4. Input sanitization & validation
    const cleanName = sanitizePatientName(name);
    const nextErrors = {};
    if (cleanName.length < 2) nextErrors.name = t.needName;
    if (!phone.trim() || !isUzPhoneComplete(phone)) {
      nextErrors.phone = t.needPhone;
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error(nextErrors.name || nextErrors.phone);
      return;
    }
    if (!selectedDate || !selectedTime) {
      toast.error(t.needTime);
      return;
    }

    submittingLockRef.current = true;
    setIsSubmitting(true);
    try {
      const cleanNote = sanitizeNote(note, 300);
      const combinedNote = cleanNote ? `${serviceLabel} — ${cleanNote}` : serviceLabel;
      const res = await submitDentistBooking({
        date: selectedDate,
        time: selectedTime,
        name: cleanName,
        phone: phone.trim(),
        dob: dob.trim(),
        note: combinedNote,
      });

      setBookingResult(res);

      if (res.telegramUrl) {
        import("qrcode")
          .then((mod) =>
            (mod.default || mod).toDataURL(res.telegramUrl, {
              margin: 2,
              width: 180,
              color: { dark: "#0088cc", light: "#ffffff" },
            }),
          )
          .then(setBotQr)
          .catch(() => setBotQr(""));
      }

      setIsSuccess(true);
      // Automatically re-fetch availability so the booked time slot is immediately removed
      loadAvailability();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF9D50", "#1DCED8", "#55E07E", "#FFF9D8"],
      });
    } catch (err) {
      if (err?.status === 409) {
        toast.error(t.conflictError);
        loadAvailability();
        return;
      }
      toast.error(err?.message || t.failed);
    } finally {
      submittingLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  if (isSuccess && bookingResult) {
    return (
      <section id="booking" className="py-12 bg-white rounded-3xl border border-amber-200 shadow-luxury p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-black">
          ✓
        </div>
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-200">
            {t.successBadge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-classic">
            {t.successTitle}
          </h3>
          <p className="text-sm text-slate-600">
            {t.successBody}
          </p>
        </div>

        {/* Appointment Summary */}
        <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200 text-left space-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-amber-100 pb-2">
            <span className="text-slate-500">{t.summaryPatient}:</span>
            <span className="font-bold text-slate-900">{name}</span>
          </div>
          <div className="flex justify-between border-b border-amber-100 pb-2">
            <span className="text-slate-500">{t.summaryPhone}:</span>
            <span className="font-bold text-slate-900">{phone}</span>
          </div>
          {dob && (
            <div className="flex justify-between border-b border-amber-100 pb-2">
              <span className="text-slate-500">{t.summaryDob}:</span>
              <span className="font-medium text-slate-700">{dob}</span>
            </div>
          )}
          <div className="flex justify-between border-b border-amber-100 pb-2">
            <span className="text-slate-500">{t.summaryService}:</span>
            <span className="font-bold text-primary">{serviceLabel}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-slate-500">{t.summaryWhen}:</span>
            <span className="font-black text-emerald-700 text-sm sm:text-base">{formatDmy(selectedDate)} — {selectedTime}</span>
          </div>
        </div>

        {/* Telegram Action Card */}
        {bookingResult.telegramUrl && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50/50 border border-emerald-200/80 space-y-4 text-left shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                <span>{t.telegramCardTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {t.telegramCardDesc}
              </p>
            </div>

            {botQr && (
              <div className="flex justify-center pt-1">
                <img src={botQr} alt="Telegram QR" className="w-36 h-36 rounded-xl border border-sky-200 shadow-xs bg-white p-1.5" />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start pt-2">
              <a
                href={bookingResult.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs sm:text-sm font-bold shadow-luxury hover:shadow-luxury-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <IconTelegram className="w-4 h-4 text-white" />
                <span>{t.telegramCardBtn}</span>
              </a>

              <a
                href={DOCTOR_INFO.phoneHref}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <IconPhone className="w-4 h-4 text-primary shrink-0" />
                <span className="whitespace-nowrap">{DOCTOR_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setIsSuccess(false);
            setBookingResult(null);
          }}
          className="text-xs font-bold text-slate-500 hover:text-primary transition-colors cursor-pointer"
        >
          {t.bookAnother}
        </button>
      </section>
    );
  }

  return (
    <section id="booking" className="py-6 sm:py-8 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-6 lg:p-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-classic">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-600">
            {t.sub}
          </p>
        </div>

        {/* Fallback polite banner if online booking paused on relay */}
        {!isRelayEnabled && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300/80 text-xs text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5 text-left">
              <span className="w-8 h-8 rounded-xl bg-amber-100 text-primary flex items-center justify-center shrink-0">
                <IconPhone className="w-4 h-4 text-primary" />
              </span>
              <div>
                <p className="font-extrabold text-slate-900">{lang === "uz" ? "Tezkor Telefon Orqali Yozilish:" : lang === "ru" ? "Быстрая запись по телефону:" : "Direct Phone Reservation:"}</p>
                <p className="text-slate-600 text-[11.5px]">{t.pausedNotice}</p>
              </div>
            </div>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-orange-600 text-white font-bold text-xs shadow-xs transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <IconPhone className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="whitespace-nowrap">{DOCTOR_INFO.phoneDisplay}</span>
            </a>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Anti-Bot Honeypot Trap (invisible to humans and screen-readers) */}
          <div
            aria-hidden="true"
            className="opacity-0 pointer-events-none absolute -left-[9999px] -top-[9999px] w-0 h-0 overflow-hidden"
            tabIndex={-1}
          >
            <label htmlFor="patient_hp_fax">Do not fill this field</label>
            <input
              id="patient_hp_fax"
              type="text"
              name="patient_hp_fax"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* 5 Core Clinical Specialties 3D Cards */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{t.serviceLabel}</span>
              </label>
              <span className="text-[11px] font-bold text-primary bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                {lang === "uz" ? "5 Ta Asosiy Yo'nalish" : lang === "ru" ? "5 Основных Направлений" : "5 Core Specialties"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {CANONICAL_SPECIALTIES.map((s) => {
                const isSelected = service === s.id;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 border relative overflow-hidden group select-none ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-primary/40"
                        : "bg-white hover:bg-stone-50 text-slate-800 border-stone-200/90 shadow-2xs hover:border-stone-300"
                    }`}
                  >
                    {/* Header: Medical Icon + Selection Radio */}
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-white/10 text-white"
                            : "bg-stone-50 border border-stone-200/80 text-primary group-hover:border-primary/40"
                        }`}
                      >
                        {renderSpecialtyIcon(s.id, isSelected)}
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-primary text-white shadow-2xs"
                            : "border border-stone-300 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1">
                      <h4 className={`text-xs sm:text-[13px] font-bold leading-snug ${isSelected ? "text-white" : "text-slate-900"}`}>
                        {s[lang] || s.uz}
                      </h4>
                      <p className={`text-[10.5px] leading-relaxed line-clamp-2 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        {s.desc?.[lang]}
                      </p>
                    </div>

                    {/* Understated Clinical Material Label */}
                    <div className="pt-2 border-t border-stone-100/10">
                      <span
                        className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-md truncate max-w-full ${
                          isSelected
                            ? "bg-white/10 text-slate-200"
                            : "bg-stone-50 text-slate-600 border border-stone-200/70"
                        }`}
                      >
                        {s.materials}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sub-Procedure Specific Chips (Dynamic based on selected specialty) */}
            {serviceObj?.subOptions && (
              <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-stone-200 flex flex-wrap items-center gap-2 text-left">
                <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5 shrink-0">
                  <IconSparkleStar className="w-3.5 h-3.5 text-primary" />
                  <span>{lang === "uz" ? "Aniqroq xizmat turi (ixtiyoriy):" : lang === "ru" ? "Уточните услугу (по желанию):" : "Specific treatment (optional):"}</span>
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {serviceObj.subOptions.map((opt) => {
                    const optText = opt[lang] || opt.uz;
                    const isActive = note.includes(optText);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          setNote((cur) => (cur.includes(optText) ? cur : cur ? `${cur}, ${optText}` : optText));
                        }}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                          isActive
                            ? "bg-primary text-white border-primary shadow-2xs"
                            : "bg-white hover:bg-stone-100 border-stone-200 text-slate-700 shadow-2xs"
                        }`}
                      >
                        {optText}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Step 1: Select Day */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.dayGroupLabel}
              </label>
              <span className="text-[11px] text-slate-500 font-medium">{clinicHours.days} ({clinicHours.hours})</span>
            </div>
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 px-1 -mx-2 sm:mx-0 no-scrollbar scroll-touch">
              {days.map((d) => {
                const isToday = d.date === todayStr;
                const isSelected = selectedDate === d.date;
                const count = d.times?.length || 0;
                const isFull = count === 0;

                return (
                  <button
                    type="button"
                    key={d.date}
                    onClick={() => {
                      setSelectedDate(d.date);
                      if (count > 0 && (!selectedTime || !d.times.includes(selectedTime))) {
                        setSelectedTime(d.times[0]);
                      }
                    }}
                    className={`px-4 py-3 rounded-2xl text-xs font-bold shrink-0 border transition-all cursor-pointer text-left ${
                      isSelected
                        ? "bg-gradient-to-r from-primary via-orange-500 to-primary text-white border-primary shadow-[0_6px_20px_rgba(255,157,80,0.35)] scale-105 ring-2 ring-primary/30"
                        : isFull
                        ? "bg-slate-50/90 text-slate-400 border-slate-200/90 hover:bg-slate-100"
                        : "bg-white/95 text-slate-700 border-amber-200/80 hover:bg-amber-50/80 shadow-2xs hover:scale-102"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{formatDayPill(d.date, lang)}</span>
                      {isToday && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium uppercase tracking-wide border ${
                            isSelected
                              ? "bg-white/20 text-white border-white/30"
                              : isFull
                              ? "bg-slate-200 text-slate-600 border-slate-300"
                              : "bg-slate-100 text-slate-700 border-slate-200"
                          }`}
                        >
                          {lang === "uz" ? "Bugun" : lang === "ru" ? "Сегодня" : "Today"}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] font-normal opacity-90 mt-1">
                      {isFull
                        ? (isToday ? t.slotsFullToday : t.slotsFullOther)
                        : `${count} ${t.slotsLabel}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Time Slot */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.timeGroupLabel}
              </label>
              {selectedDate && selectedTime && activeDay && activeDay.times?.includes(selectedTime) && (
                <span className="inline-flex items-center text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 shadow-2xs">
                  <span>{t.selectedSlotLabel} {formatDmy(selectedDate)} — {selectedTime}</span>
                </span>
              )}
            </div>

            {activeDay && activeDay.times?.length > 0 ? (
              <div className="grid grid-cols-3 2xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-1.5 2xs:gap-2 pt-1">
                {activeDay.times.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedTime === slot
                        ? "bg-gradient-to-r from-primary via-orange-500 to-primary text-white border-primary shadow-xs scale-105 ring-2 ring-primary/30"
                        : "bg-white text-slate-800 border-amber-200/80 hover:bg-amber-50 hover:scale-102 shadow-2xs"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {selectedDate === todayStr ? t.noSlotsTodayMessage : t.slotsFullOther}
                </p>
                {firstDayWithSlots && firstDayWithSlots.date !== selectedDate && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDate(firstDayWithSlots.date);
                      setSelectedTime(firstDayWithSlots.times[0]);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{t.nextAvailableDayBtn}</span>
                    <span className="opacity-80 font-normal">({formatDmy(firstDayWithSlots.date)})</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Step 3: Patient Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-amber-100">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="patient_full_name" className="block text-xs font-bold text-slate-700">
                {t.nameLabel}
              </label>
              <input
                id="patient_full_name"
                type="text"
                required
                aria-required="true"
                maxLength={70}
                autoComplete="name"
                spellCheck={false}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base sm:text-sm font-medium"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="patient_phone" className="block text-xs font-bold text-slate-700">
                {t.phoneLabel}
              </label>
              <input
                id="patient_phone"
                type="tel"
                required
                aria-required="true"
                maxLength={22}
                autoComplete="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base sm:text-sm font-medium"
              />
            </div>

            {/* Date of Birth (dob) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="patient_dob" className="block text-xs font-bold text-slate-700">
                  {t.dobLabel}
                </label>
                <span className="text-[10px] text-slate-400 font-medium">{t.dobFormat}</span>
              </div>
              <input
                id="patient_dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                min="1920-01-01"
                max={todayStr}
                placeholder={t.dobPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base sm:text-sm font-medium"
              />
              <p className="text-[11px] text-slate-500 leading-tight">
                {t.dobHint}
              </p>
            </div>

            {/* Note / Complaint */}
            <div className="space-y-1.5">
              <label htmlFor="patient_note" className="block text-xs font-bold text-slate-700">
                {t.noteLabel}
              </label>
              <input
                id="patient_note"
                type="text"
                maxLength={300}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={t.notePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-[#FFFDF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base sm:text-sm font-medium"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wider shadow-luxury transition-all cursor-pointer hover:shadow-luxury-lg hover:-translate-y-0.5"
          >
            {isSubmitting ? t.submitting : t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default InlineBookingSection;
