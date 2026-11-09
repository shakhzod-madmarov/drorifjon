import React, { useRef, useState, useCallback } from "react";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconTelegram, IconInstagram, IconPhone } from "./MedicalIcons";

/**
 * Doctor3DCard — Compact Classic Medical Portrait Card
 * Clean, restrained, classic elegance for Stomatolog Orifjon (Mansurov Orifjon Alimbekovich).
 * Perfectly proportioned to prevent excessive vertical height and eliminate empty space.
 */
const Doctor3DCard = ({
  lang = "uz",
  imageWebp = "/dr_orifjon_portrait_pro.webp",
  imageJpg = "/dr_orifjon_portrait_pro.jpg",
  className = "",
  titleTag = "h2",
  onOpenBooking,
}) => {
  const cardRef = useRef(null);
  const TitleTag = titleTag;
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Gentle, subtle classic perspective tilt (+-5 degrees)
    const rotateY = (x - 0.5) * 6;
    const rotateX = (0.5 - y) * 6;

    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  }, []);

  const specialtyText =
    lang === "ru"
      ? "Врач-Стоматолог · 20+ Лет Практики"
      : lang === "en"
      ? "Dental Practitioner · 20+ Yrs Practice"
      : "Vrach-Stomatolog · 20+ Yillik Tajriba";

  return (
    <div className={`relative flex justify-center [perspective:1200px] ${className}`}>
      {/* Subtle warm glow behind card */}
      <div
        className={`absolute -inset-3 bg-gradient-to-tr from-teal-200/20 via-orange-100/15 to-transparent rounded-[2rem] blur-xl -z-10 transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* Main Classic Portrait Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-3px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: isHovered
            ? "transform 0.15s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[17.5rem] 2xs:max-w-[19.5rem] sm:max-w-[21rem] rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-[0_8px_30px_rgba(20,30,40,0.06)] hover:shadow-[0_16px_40px_rgba(20,30,40,0.1)] hover:border-teal-300/80 transition-all select-none group"
      >
        {/* Crisp Unblemished Portrait Photo */}
        <div className="relative w-full aspect-square overflow-hidden bg-stone-100 border-b border-stone-100">
          <picture>
            <source srcSet={imageWebp} type="image/webp" />
            <img
              src={imageJpg}
              alt="Stomatolog Orifjon — Mansurov Orifjon Alimbekovich"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </picture>
        </div>

        {/* Clean Editorial Bio (Underneath Photo) */}
        <div className="p-3.5 2xs:p-4 sm:p-5 bg-white text-left space-y-2.5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
              {specialtyText}
            </p>
            <TitleTag className="font-serif-classic text-lg 2xs:text-xl font-bold tracking-tight text-slate-900 mt-0.5">
              {DOCTOR_INFO.names[lang] || DOCTOR_INFO.name}
            </TitleTag>
            <p className="text-xs text-slate-500 font-medium">
              Mansurov Orifjon Alimbekovich
            </p>
          </div>

          {/* Direct Phone Call Buttons (Never Wraps) */}
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-1.5">
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-slate-900 border border-teal-200/90 text-xs font-bold whitespace-nowrap transition-colors shadow-2xs group/phone"
              title={`Asosiy: ${DOCTOR_INFO.phoneDisplay}`}
            >
              <IconPhone className="w-3.5 h-3.5 text-primary shrink-0 group-hover/phone:scale-110 transition-transform" />
              <span className="tracking-tight">{DOCTOR_INFO.phoneDisplay}</span>
            </a>
            <a
              href={DOCTOR_INFO.secondaryPhoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/90 text-[11px] font-semibold whitespace-nowrap transition-colors shadow-2xs group/phone2"
              title={`Qo'shimcha: ${DOCTOR_INFO.secondaryPhoneDisplay}`}
            >
              <IconPhone className="w-3 h-3 text-teal-600 shrink-0 group-hover/phone2:scale-110 transition-transform" />
              <span className="tracking-tight">{DOCTOR_INFO.secondaryPhoneDisplay}</span>
            </a>
          </div>

          {/* Social Channels & Online Booking Button */}
          <div className="flex items-center gap-1.5 2xs:gap-2">
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-1.5 2xs:px-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200/80 text-[11px] font-bold transition-colors"
              title="Telegram: @dr_orifjon_1"
            >
              <IconTelegram className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span className="hidden 2xs:inline text-[11px]">Telegram</span>
              <span className="2xs:hidden text-[11px]">TG</span>
            </a>
            <a
              href={DOCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200/80 flex items-center justify-center transition-colors shrink-0"
              title="Instagram: @dr_orifjon"
            >
              <IconInstagram className="w-3.5 h-3.5 text-pink-500" />
            </a>
            <button
              onClick={onOpenBooking}
              className="flex-1 py-1.5 px-2 2xs:px-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-[11px] 2xs:text-xs font-extrabold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer select-none text-center"
            >
              {lang === "uz" ? "Qabul" : lang === "ru" ? "Запись" : "Book"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor3DCard;
