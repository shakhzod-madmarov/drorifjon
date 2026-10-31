import React from "react";
import {
  IconShieldCheck,
  IconSparkleStar,
  IconAward,
  IconCheckCircle,
} from "./MedicalIcons";

/**
 * Bespoke 3D Stickers & Clinical Badges System
 * Custom-crafted for Stomatolog Orifjon (Mansurov Orifjon Alimbekovich)
 * 100% Frosted Glass & Luxury Light Aesthetics (Zero dark/black pills)
 * Palette: Primary Coral (#FF9D50), Cream (#FFF9D8), Cyan (#1DCED8), Emerald (#55E07E)
 */

export function HoloGoldStamp({ text, subtext, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300/90 text-slate-900 font-extrabold text-xs shadow-[0_4px_16px_rgba(245,158,11,0.18)] select-none transform-gpu hover:scale-105 hover:shadow-[0_6px_22px_rgba(245,158,11,0.28)] transition-all duration-300 ${className}`}
    >
      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-xs shrink-0">
        <IconSparkleStar className="w-3 h-3 text-white" />
      </span>
      <div className="flex flex-col leading-tight text-left">
        <span className="tracking-tight text-[11px] font-black text-slate-900">{text}</span>
        {subtext && (
          <span className="text-[9px] font-bold text-amber-700 uppercase tracking-wider">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}

export function DigitalCyanTag({ label, value, tag, subtag, className = "" }) {
  const displayLabel = label || tag || "CAD/CAM";
  const displayValue = value || subtag || "";
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-300 text-cyan-950 text-xs font-bold shadow-[0_4px_16px_rgba(29,206,216,0.18)] select-none hover:shadow-cyan transition-all duration-300 ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
      </span>
      <span className="text-[10.5px] uppercase tracking-wider text-cyan-800 font-extrabold">
        {displayLabel}
      </span>
      {displayValue && (
        <span className="font-extrabold text-slate-800 text-[11px]">
          {displayValue}
        </span>
      )}
    </div>
  );
}

export function BioTitaniumBadge({ system, country = "🇩🇪 & 🇰🇷", origin, guarantee, className = "" }) {
  const displayOrigin = origin || country || "Germaniya & Koreya";
  const displayGuarantee = guarantee || "Biotitan Standarti";
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300/80 text-slate-900 text-xs font-bold shadow-[0_4px_16px_rgba(0,0,0,0.08)] select-none hover:border-primary hover:shadow-orange transition-all duration-300 ${className}`}
    >
      <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center text-xs shrink-0 shadow-2xs">
        🔩
      </span>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[11px] font-black text-slate-900 tracking-tight">
          {system}
        </span>
        <span className="text-[9px] uppercase tracking-wider font-extrabold text-primary mt-0.5">
          {displayOrigin} · {displayGuarantee}
        </span>
      </div>
    </div>
  );
}

export function ZeroPainShield({ label = "100% Og'riqsiz", sublabel = "Orablok & Supercain", className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300/90 text-emerald-950 text-xs font-bold shadow-[0_4px_16px_rgba(16,185,129,0.18)] select-none hover:scale-105 hover:shadow-green transition-all duration-300 ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-xs">
        <IconShieldCheck className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[11px] font-black text-emerald-950 tracking-tight">
          {label}
        </span>
        {sublabel && (
          <span className="text-[8.5px] font-bold text-emerald-700 uppercase tracking-wider mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

export function OriginPill({ flag = "🇩🇪", country = "Germaniya", material = "Charisma", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/80 text-slate-800 text-[10.5px] font-bold shadow-2xs hover:border-primary hover:shadow-xs transition-all select-none ${className}`}
    >
      <span className="text-xs">{flag}</span>
      <span className="text-primary font-black">{material}</span>
      <span className="text-slate-500 font-semibold">({country})</span>
    </span>
  );
}

export function FrostedGuaranteeBadge({ label, icon = "🛡️", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] text-[10.5px] font-black tracking-wide border border-emerald-300/40 select-none ${className}`}
    >
      <IconShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
      <span>{label}</span>
    </span>
  );
}
