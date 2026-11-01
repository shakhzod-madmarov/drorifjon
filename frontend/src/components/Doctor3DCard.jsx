import React, { useRef, useState, useCallback } from "react";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconTelegram, IconInstagram, IconPhone, IconSparkleStar } from "./MedicalIcons";

/**
 * Doctor3DCard — Classic Fine-Art Medical Portrait Card
 * Clean, restrained, classic elegance for Stomatolog Orifjon (Mansurov Orifjon Alimbekovich).
 * The portrait sits unblemished in a museum-grade frame; typography is placed cleanly below.
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

    // Gentle, subtle classic perspective tilt (+-6 degrees)
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

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
        className={`absolute -inset-4 bg-gradient-to-tr from-amber-200/20 via-orange-100/15 to-transparent rounded-[2.5rem] blur-2xl -z-10 transition-opacity duration-700 pointer-events-none ${
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
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: isHovered
            ? "transform 0.15s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[21.5rem] xs:max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(20,30,40,0.06)] hover:shadow-[0_20px_50px_rgba(20,30,40,0.12)] hover:border-amber-300/80 transition-all select-none group"
      >
        {/* Crisp Unblemished Portrait Photo */}
        <div className="relative w-full aspect-[3/3.8] overflow-hidden bg-stone-100 border-b border-stone-100">
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
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 border border-white/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === "uz" ? "Andijon sh." : lang === "ru" ? "г. Андижан" : "Andijan"}</span>
            </span>
          </div>
        </div>

        {/* Clean Editorial Bio & Credentials (Underneath Photo) */}
        <div className="p-5 sm:p-6 bg-white text-left space-y-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary flex items-center gap-1">
              <IconSparkleStar className="w-3 h-3 text-primary" />
              <span>{specialtyText}</span>
            </p>
            <h3 className="font-serif-classic text-2xl font-bold tracking-tight text-slate-900 mt-1">
              Stomatolog Orifjon
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Mansurov Orifjon Alimbekovich
            </p>
          </div>

          <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px] text-slate-600 space-y-1">
            <p className="font-medium">
              🎓 <span className="font-bold text-slate-800">Andijon Tibbiyot Kolleji</span> (2001–2004)
            </p>
            <p className="font-medium">
              🏛️ <span className="font-bold text-slate-800">O'sh Davlat Universiteti</span> (2017–2022)
            </p>
          </div>

          {/* Contact Channels & Direct Booking CTA */}
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-slate-900 border border-amber-200/80 text-xs font-bold transition-colors"
                title={`Tel: ${DOCTOR_INFO.phoneDisplay}`}
              >
                <IconPhone className="w-3.5 h-3.5 text-primary" />
                <span>{DOCTOR_INFO.phoneDisplay}</span>
              </a>
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 border border-sky-200/80 flex items-center justify-center transition-colors"
                title="Telegram: @dr_orifjon_1"
              >
                <IconTelegram className="w-4 h-4 text-sky-500" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200/80 flex items-center justify-center transition-colors"
                title="Instagram: @dr_orifjon"
              >
                <IconInstagram className="w-4 h-4 text-pink-500" />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-orange-600 text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs cursor-pointer select-none"
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
