import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { getDoctorBrandName } from "../constants/doctor";

const Logo = ({ className = "h-9 sm:h-10", inverted = false }) => {
  const { lang } = useLanguage();
  const brandTitle = getDoctorBrandName(lang);

  const subtitle =
    lang === "ru"
      ? "Современная Стоматология"
      : lang === "en"
      ? "Modern Dental Practice"
      : "Zamonaviy Stomatologiya";

  const altText =
    lang === "ru"
      ? "Стоматолог Орифжон — Врач-Стоматолог"
      : lang === "en"
      ? "Dentist Orifjon — Dental Surgeon"
      : "Stomatolog Orifjon — Vrach Stomatolog";

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 select-none group">
      {/* 3D Embellished Logo Emblem Container */}
      <div className={`relative p-1 sm:p-1.5 rounded-2xl transition-all duration-300 group-hover:scale-105 shrink-0 ${
        inverted
          ? "bg-white/10 border border-white/20 shadow-inner"
          : "bg-gradient-to-br from-white via-amber-50/60 to-cyan-50/40 border border-amber-200/80 shadow-[0_4px_16px_rgba(255,157,80,0.14)] group-hover:border-primary/60 group-hover:shadow-[0_6px_22px_rgba(255,157,80,0.25)]"
      }`}>
        <img
          src="/logo_icon.png"
          alt={altText}
          width={40}
          height={40}
          decoding="async"
          className={`${className} w-auto object-contain transition-transform duration-300 group-hover:rotate-3`}
        />
        {/* Subtle holographic corner sparkle */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#55E07E] opacity-90 animate-pulse" />
      </div>

      {/* Brand Name & Subtitle Typography */}
      <div className="flex flex-col leading-none text-left min-w-0">
        <span
          className={`font-serif-classic text-[16px] sm:text-[17.5px] font-black tracking-tight truncate flex items-center gap-1 ${
            inverted ? "text-white" : "text-[#141E28]"
          }`}
        >
          <span>{brandTitle.split(" ")[0]}</span>
          <span className="text-primary font-black">{brandTitle.split(" ").slice(1).join(" ")}</span>
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] truncate mt-1 flex items-center gap-1 ${
            inverted ? "text-brandCream" : "text-slate-500"
          }`}
        >
          <span>{subtitle}</span>
          <span className="inline-block w-1 h-1 rounded-full bg-emerald-500" />
        </span>
      </div>
    </div>
  );
};

export default Logo;
