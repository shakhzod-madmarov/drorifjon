import React, { useRef, useState, useCallback } from "react";
import { DOCTOR_INFO } from "../constants/doctor";
import { IconTelegram, IconInstagram, IconPhone, IconShieldCheck, IconSparkleStar } from "./MedicalIcons";
import { HoloGoldStamp, ZeroPainShield } from "./Bespoke3DStickers";

/**
 * Doctor3DCard — Ultra-Luxury Interactive 3D Perspective Showcase
 * Features:
 *  - Hardware-accelerated CSS 3D perspective tilt tracking cursor coordinates
 *  - Dynamic specular light glare reflection layer following the light source
 *  - Multi-plane parallax depth with floating orbital badges
 *  - Smooth spring-like physics reset on cursor leave
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
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    // Maximum tilt angles (+-12 degrees)
    const rotateY = (x - 0.5) * 22;
    const rotateX = (0.5 - y) * 22;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: x * 100,
      y: y * 100,
      opacity: 0.55,
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
      {/* 3D Ambient Breathing Glow Ring behind Card with Brand Colors */}
      <div
        className={`absolute -inset-3 sm:-inset-6 bg-gradient-to-tr from-amber-400/40 via-cyan-400/30 to-emerald-400/30 rounded-[3.5rem] blur-2xl -z-10 transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-105" : "opacity-75 animate-pulse-glow"
        }`}
      />

      {/* Floating 3D Orbital Badge 1 (Top-Right) */}
      <div
        className="absolute -top-4 -right-3 sm:-right-6 z-40 hidden xs:block pointer-events-none animate-float-3d"
        style={{ animationDuration: "6s" }}
      >
        <HoloGoldStamp
          text={lang === "ru" ? "20+ Лет Опыта" : lang === "en" ? "20+ Yrs Practice" : "20+ Yillik Tajriba"}
          subtext="Andijon & O'shDU"
        />
      </div>

      {/* Floating 3D Orbital Badge 2 (Bottom-Left) */}
      <div
        className="absolute -bottom-4 -left-3 sm:-left-6 z-40 hidden xs:block pointer-events-none animate-float-reverse"
        style={{ animationDuration: "7s" }}
      >
        <ZeroPainShield
          label={lang === "ru" ? "100% Без Боли" : lang === "en" ? "100% Pain-Free" : "100% Og'riqsiz"}
          sublabel="Orablok & Supercain"
        />
      </div>

      {/* Main 3D Tilted Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.025, 1.025, 1.025)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.3s ease"
            : "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.65s ease",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[21.5rem] xs:max-w-sm sm:max-w-md rounded-3xl xs:rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-white via-[#FFFDF8] to-[#FFF9D8]/70 border border-amber-200/90 shadow-[0_18px_50px_rgba(20,30,40,0.12)] hover:shadow-[0_24px_65px_rgba(255,157,80,0.22)] hover:border-primary/60 cursor-pointer select-none group"
      >
        {/* Dynamic Specular Reflection / Glare Holographic Layer */}
        <div
          className="absolute inset-0 z-30 pointer-events-none rounded-3xl xs:rounded-[2.5rem] transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.12) 40%, transparent 80%)`,
          }}
        />

        {/* 3D Depth Layer 1: High-Definition Doctor Presentation */}
        <div
          className="relative w-full aspect-[3/3.8] overflow-hidden bg-gradient-to-b from-slate-50/50 via-amber-50/30 to-amber-100/40"
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            transition: "transform 0.4s ease-out",
          }}
        >
          <picture>
            <source srcSet={imageWebp} type="image/webp" />
            <img
              src={imageJpg}
              alt="Stomatolog Orifjon — Mansurov Orifjon Alimbekovich"
              width={896}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top filter transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </picture>

          {/* Soft Bottom Gradient to blend into footer */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

          {/* Top In-Image Frosted Glass Status Strip */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black tracking-wide text-slate-900 border border-white/80 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === "uz" ? "Qabul Ochiq · Andijon" : lang === "ru" ? "Приём открыт · Андижан" : "Accepting Patients"}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10.5px] font-black tracking-wide shadow-md border border-amber-300/40">
              <span>🇩🇪 & 🇰🇷 Standart</span>
            </span>
          </div>

          {/* Bottom Floating Interactive Educational Chips */}
          <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-center gap-1.5 z-20 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-extrabold text-slate-900 border border-white/80 shadow-sm">
              🎓 Andijon Tib. Kolleji (2001–2004)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-extrabold text-slate-900 border border-white/80 shadow-sm">
              🎓 O'shDU (2017–2022)
            </span>
          </div>
        </div>

        {/* 3D Depth Layer 2: Elevated Minimalist Frosted Glass Footer */}
        <div
          className="px-4 xs:px-5 py-3.5 bg-white/95 backdrop-blur-md border-t border-amber-200/70 flex items-center justify-between gap-2.5 relative z-20 shadow-xs"
          style={{
            transform: isHovered ? "translateZ(38px)" : "translateZ(0px)",
            transition: "transform 0.45s ease-out",
          }}
        >
          <div className="min-w-0">
            <p className="font-serif-classic text-base sm:text-lg font-black text-slate-900 tracking-tight truncate flex items-center gap-1">
              <span>Stomatolog</span>
              <span className="text-primary">Orifjon</span>
            </p>
            <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 truncate mt-0.5">
              Mansurov Orifjon Alimbekovich
            </p>
            <p className="text-[10px] font-bold text-emerald-600 truncate">
              {specialtyText}
            </p>
          </div>

          {/* 3D Depth Layer 3: Direct Quick Channel Actions */}
          <div
            className="flex items-center gap-1.5 shrink-0"
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
              transition: "transform 0.5s ease-out",
            }}
          >
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 border border-sky-200/60 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 active:scale-95 shadow-xs"
              title="Telegram: @dr_orifjon_1"
            >
              <IconTelegram className="w-4 h-4 text-sky-500" />
            </a>
            <a
              href={DOCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200/60 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 active:scale-95 shadow-xs"
              title="Instagram: @dr_orifjon"
            >
              <IconInstagram className="w-4 h-4 text-pink-500" />
            </a>
            <a
              href={DOCTOR_INFO.phoneHref}
              aria-label="Phone"
              className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 active:scale-95 shadow-xs"
              title={`Tel: ${DOCTOR_INFO.phoneDisplay}`}
            >
              <IconPhone className="w-4 h-4 text-emerald-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor3DCard;
