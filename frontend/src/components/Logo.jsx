import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { getDoctorBrandName } from "../constants/doctor";

const Logo = ({ className = "h-8 sm:h-9", inverted = false }) => {
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

  const words = brandTitle.split(" ");
  const firstWord = words[0];
  const secondWord = words.slice(1).join(" ");

  return (
    <div className="inline-flex items-center gap-1.5 2xs:gap-2 sm:gap-2.5 select-none group min-w-0">
      {/* Pristine Logo Emblem with 0 Background */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/logo_icon.png"
          alt={altText}
          width={36}
          height={36}
          decoding="async"
          className={`${className} w-auto object-contain transition-transform duration-300 group-hover:rotate-3 drop-shadow-sm`}
        />
      </div>

      {/* Brand Name & Subtitle Typography */}
      <div className="flex flex-col leading-none text-left min-w-0 justify-center">
        <span
          className={`font-serif-classic text-[13px] 2xs:text-[14.5px] xs:text-[15.5px] sm:text-[17px] font-black tracking-tight truncate flex items-center gap-1 ${
            inverted ? "text-white" : "text-[#141E28]"
          }`}
        >
          <span>{firstWord}</span>
          <span className="text-primary font-black">{secondWord}</span>
        </span>
        <span
          className={`hidden xs:block text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.14em] truncate mt-1 ${
            inverted ? "text-brandCream" : "text-slate-500"
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;
