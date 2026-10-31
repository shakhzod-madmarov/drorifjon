import React, { useRef, useState, useCallback } from "react";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconTelegram, IconInstagram, IconPhone, IconShieldCheck, IconSparkleStar } from "./MedicalIcons";

/**
 * Doctor3DCard — Classic Fine-Art Medical Portrait Card
 * Clean, restrained, classic elegance for Stomatolog Orifjon (Mansurov Orifjon Alimbekovich).
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
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Subtle, gentle classic perspective tilt (+-8 degrees)
    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: x * 100,
      y: y * 100,
      opacity: 0.35,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const specialtyText =
    lang === "ru"
      ? "Врач-Стоматолог · 20+ лет практики"
      : lang === "en"
      ? "Dental Surgeon · 20+ Yrs Practice"
      : "Vrach Stomatolog · 20+ Yillik Tajriba";

  return (
    <div className={`relative flex justify-center [perspective:1200px] ${className}`}>
      {/* Subtle Warm Amber Glow Behind Card */}
      <div
        className={`absolute -inset-4 bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent rounded-[3rem] blur-2xl -z-10 transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-60"
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
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.015, 1.015, 1.015)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.15s ease-out, box-shadow 0.3s ease"
            : "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.65s ease",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[21.5rem] xs:max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-white border border-amber-200/90 shadow-[0_16px_45px_rgba(20,30,40,0.08)] hover:shadow-[0_22px_60px_rgba(255,157,80,0.18)] hover:border-primary/50 cursor-pointer select-none group"
      >
        {/* Subtle Specular Glare */}
        <div
          className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)`,
          }}
        />

        {/* High-Definition Doctor Portrait */}
        <div className="relative w-full aspect-[3/3.7] overflow-hidden bg-slate-50">
          <picture>
            <source srcSet={imageWebp} type="image/webp" />
            <img
              src={imageJpg}
              alt="Stomatolog Orifjon — Mansurov Orifjon Alimbekovich"
              width={896}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </picture>

          {/* Soft Bottom Vignette for Smooth Transition */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top Status Bar: Clean Medical Badge */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 border border-white/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === "uz" ? "Qabul Ochiq · Andijon" : lang === "ru" ? "Приём открыт · Андижан" : "Accepting Patients"}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50/95 backdrop-blur-md text-slate-800 text-[10.5px] font-bold border border-amber-200/80 shadow-sm">
              <span>🇩🇪 & 🇰🇷 Standart</span>
            </span>
          </div>

          {/* Bottom In-Image Classic Credentials Plaque */}
          <div className="absolute bottom-3 inset-x-3.5 z-20 pointer-events-none text-left text-white">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 flex items-center gap-1">
              <IconSparkleStar className="w-3 h-3 text-amber-300" />
              <span>{specialtyText}</span>
            </p>
            <p className="font-serif-classic text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
              Stomatolog Orifjon
            </p>
            <p className="text-[11px] text-white/85 font-medium mt-0.5">
              Mansurov Orifjon Alimbekovich
            </p>
            <div className="flex flex-wrap items-center gap-1.5 pt-1.5 text-[10px] text-white/75 font-normal">
              <span>Andijon Tibbiyot Kolleji (2001–2004)</span>
              <span>•</span>
              <span>O'shDU (2017–2022)</span>
            </div>
          </div>
        </div>

        {/* Minimalist Classic Footer: Channels & Booking */}
        <div className="p-4 bg-white border-t border-amber-100 flex items-center justify-between gap-3 relative z-20">
          <div className="flex items-center gap-2">
            <a
              href={DOCTOR_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-slate-800 border border-amber-200 text-xs font-bold transition-colors"
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
              className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 border border-sky-200 flex items-center justify-center transition-all hover:scale-105"
              title="Telegram: @dr_orifjon_1"
            >
              <IconTelegram className="w-4 h-4 text-sky-500" />
            </a>
            <a
              href={DOCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 flex items-center justify-center transition-all hover:scale-105"
              title="Instagram: @dr_orifjon"
            >
              <IconInstagram className="w-4 h-4 text-pink-500" />
            </a>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-orange-500 text-white text-xs font-extrabold uppercase tracking-wider hover:brightness-110 transition-all shadow-xs cursor-pointer select-none"
          >
            {lang === "uz" ? "Qabul" : lang === "ru" ? "Запись" : "Book"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor3DCard;
