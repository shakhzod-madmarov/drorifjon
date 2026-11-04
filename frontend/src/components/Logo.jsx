import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Logo = ({ className = "h-7.5 2xs:h-8.5 sm:h-10", inverted = false }) => {
  const { lang } = useLanguage();

  const titlePrefix =
    lang === "ru"
      ? "Стоматолог"
      : lang === "en"
      ? "Dentist"
      : "Stomatolog";

  const doctorName =
    lang === "ru"
      ? "Орифжон"
      : "Orifjon";

  const altText = `${titlePrefix} ${doctorName} — Andijon`;

  const subText =
    lang === "ru"
      ? "Современная Стоматология · Андижан"
      : lang === "en"
      ? "Modern Dentistry · Andijan"
      : "Zamonaviy Stomatologiya · Andijon";

  return (
    <div className="inline-flex items-center gap-2 sm:gap-2.5 select-none group min-w-0">
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

      {/* Brand Name Typography — STOMATOLOG ORIFJON as PRIMARY NAME */}
      <div className="flex flex-col leading-none text-left min-w-0 justify-center">
        <span
          className={`font-serif-classic text-[16px] 2xs:text-[18px] sm:text-[21px] font-black tracking-tight truncate flex items-center gap-1.5 ${
            inverted ? "text-white" : "text-slate-900"
          }`}
        >
          <span>{titlePrefix}</span>
          <span className="text-primary font-black">{doctorName}</span>
        </span>
        <span
          className={`text-[8.5px] 2xs:text-[9.5px] font-bold uppercase tracking-[0.14em] truncate mt-1 ${
            inverted ? "text-teal-300" : "text-slate-500"
          }`}
        >
          {subText}
        </span>
      </div>
    </div>
  );
};

export default Logo;
