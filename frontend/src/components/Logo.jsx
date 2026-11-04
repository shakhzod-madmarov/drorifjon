import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Logo = ({ className = "h-7.5 2xs:h-8.5 sm:h-10", inverted = false }) => {
  const { lang } = useLanguage();

  const doctorLabel =
    lang === "ru"
      ? "Стоматолог Орифжон"
      : lang === "en"
      ? "Dentist Orifjon"
      : "Stomatolog Orifjon";

  const altText =
    lang === "ru"
      ? "Eco Denta — Стоматолог Орифжон (Андижан)"
      : lang === "en"
      ? "Eco Denta — Dentist Orifjon (Andijan)"
      : "Eco Denta — Stomatolog Orifjon (Andijon)";

  return (
    <div className="inline-flex items-center gap-1.5 2xs:gap-2 sm:gap-2.5 select-none group min-w-0">
      {/* Pristine Logo Emblem */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/logo_icon.png"
          alt={altText}
          width={40}
          height={40}
          decoding="async"
          className={`${className} w-auto object-contain transition-transform duration-300 group-hover:rotate-2 drop-shadow-xs`}
        />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-none text-left min-w-0 justify-center">
        <span
          className={`font-serif-classic text-[15px] 2xs:text-[17.5px] sm:text-[20px] font-black tracking-tight truncate flex items-center gap-1 ${
            inverted ? "text-white" : "text-slate-900"
          }`}
        >
          <span className="font-extrabold tracking-tight">Eco</span>
          <span className="text-primary font-black">Denta</span>
        </span>
        <span
          className={`text-[8.5px] 2xs:text-[9.5px] font-bold uppercase tracking-[0.14em] truncate mt-0.5 ${
            inverted ? "text-amber-200" : "text-slate-500"
          }`}
        >
          {doctorLabel}
        </span>
      </div>
    </div>
  );
};

export default Logo;
