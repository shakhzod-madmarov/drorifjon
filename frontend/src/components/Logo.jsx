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
      {/* Pristine Logo Emblem with 0 Background */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/logo_icon.png"
          alt={altText}
          width={42}
          height={42}
          decoding="async"
          className={`${className} w-auto object-contain transition-transform duration-300 group-hover:rotate-3 drop-shadow-sm`}
        />
        {/* Subtle glowing active pulse indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#55E07E] opacity-90 animate-pulse" />
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
