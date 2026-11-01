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
    <div className="inline-flex items-center gap-2 2xs:gap-2.5 sm:gap-3 select-none group min-w-0">
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
      </div>

      {/* Brand Name & Subtitle Typography */}
      <div className="flex flex-col leading-none text-left min-w-0">
        <span
          className={`font-serif-classic text-[15px] 2xs:text-[16px] sm:text-[17.5px] font-black tracking-tight truncate flex items-center gap-1 ${
            inverted ? "text-white" : "text-[#141E28]"
          }`}
        >
          <span>{brandTitle.split(" ")[0]}</span>
          <span className="text-primary font-black">{brandTitle.split(" ").slice(1).join(" ")}</span>
        </span>
        <span
          className={`text-[8px] 2xs:text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.14em] 2xs:tracking-[0.16em] truncate mt-1 ${
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
