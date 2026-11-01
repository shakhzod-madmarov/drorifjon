import React, { useRef, useState, useCallback } from "react";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconTelegram, IconInstagram, IconPhone, IconSparkleStar } from "./MedicalIcons";

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
  onOpenBooking,
}) => {
  const cardRef = useRef(null);
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
        className={`absolute -inset-3 bg-gradient-to-tr from-amber-200/20 via-orange-100/15 to-transparent rounded-[2rem] blur-xl -z-10 transition-opacity duration-700 pointer-events-none ${
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
        className="relative w-full max-w-[19.5rem] sm:max-w-[21rem] rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-[0_8px_30px_rgba(20,30,40,0.06)] hover:shadow-[0_16px_40px_rgba(20,30,40,0.1)] hover:border-amber-300/80 transition-all select-none group"
      >
        {/* Crisp Unblemished Portrait Photo */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-stone-100 border-b border-stone-100">
          <picture>
            <source srcSet={imageWebp} type="image/webp" />
            <img
              src={imageJpg}
              alt="Stomatolog Orifjon — Mansurov Orifjon Alimbekovich"
              width={896}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </picture>

          {/* Single Discreet Availability Indicator */}
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-bold text-slate-800 border border-white/90 shadow-2xs">
              <span>{lang === "uz" ? "Andijon sh." : lang === "ru" ? "г. Андижан" : "Andijan"}</span>
            </span>
          </div>
        </div>

        {/* Clean Editorial Bio (Underneath Photo) */}
        <div className="p-4 sm:p-5 bg-white text-left space-y-2.5">
          <div>
            <p className="text-[9.5px] font-black uppercase tracking-[0.16em] text-primary flex items-center gap-1">
              <IconSparkleStar className="w-3 h-3 text-primary" />
              <span>{specialtyText}</span>
            </p>
            <h3 className="font-serif-classic text-xl font-bold tracking-tight text-slate-900 mt-0.5">
              Stomatolog Orifjon
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Mansurov Orifjon Alimbekovich
            </p>
          </div>

          {/* Contact Channels & Direct Booking CTA */}
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100">
            <div className="flex items-center gap-1.5">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-slate-900 border border-amber-200/80 text-xs font-bold transition-colors"
                title={`Tel: ${DOCTOR_INFO.phoneDisplay}`}
              >
                <IconPhone className="w-3 h-3 text-primary" />
                <span>{DOCTOR_INFO.phoneDisplay}</span>
              </a>
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 border border-sky-200/80 flex items-center justify-center transition-colors"
                title="Telegram: @dr_orifjon_1"
              >
                <IconTelegram className="w-3.5 h-3.5 text-sky-500" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200/80 flex items-center justify-center transition-colors"
                title="Instagram: @dr_orifjon"
              >
                <IconInstagram className="w-3.5 h-3.5 text-pink-500" />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-lg bg-primary hover:bg-orange-600 text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer select-none"
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
