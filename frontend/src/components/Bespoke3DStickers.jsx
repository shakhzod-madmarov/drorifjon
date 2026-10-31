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
 * Colors: #FF9D50 (Coral), #FFF9D8 (Cream), #1DCED8 (Cyan), #55E07E (Emerald Green)
 */

export function HoloGoldStamp({ text, subtext, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl holo-sticker-gold text-slate-900 font-extrabold text-xs shadow-md select-none transform-gpu hover:scale-105 transition-transform duration-200 ${className}`}
    >
      <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-900">
        <IconSparkleStar className="w-3.5 h-3.5 text-amber-800" />
      </span>
      <div className="flex flex-col leading-tight text-left">
        <span className="tracking-tight text-[11px] font-black">{text}</span>
        {subtext && <span className="text-[9px] font-bold text-amber-900/80 uppercase tracking-wider">{subtext}</span>}
      </div>
    </div>
  );
}

export function DigitalCyanTag({ label, value, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-cyan-50 via-white to-sky-50 border border-cyan-300 text-cyan-950 text-xs font-bold shadow-cyan select-none hover:shadow-lg transition-all ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
      </span>
      <span className="text-[10px] uppercase tracking-wider text-cyan-700 font-extrabold">{label}</span>
      {value && <span className="font-bold text-slate-900 text-xs">{value}</span>}
    </div>
  );
}

export function BioTitaniumBadge({ system, country = "🇩🇪", guarantee = "Umrbod", className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-300/60 text-white text-xs font-bold shadow-lg select-none hover:border-amber-300 transition-colors ${className}`}
    >
      <span className="text-sm">{country}</span>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[11px] font-black text-amber-200 tracking-tight">{system}</span>
        <span className="text-[8.5px] uppercase tracking-wider text-slate-400 mt-0.5">{guarantee}</span>
      </div>
    </div>
  );
}

export function ZeroPainShield({ label = "100% Og'riqsiz", sublabel = "2 Bosqichli Mikro-Anesteziya", className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-300/90 text-emerald-950 text-xs font-bold shadow-green select-none hover:scale-105 transition-transform ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
        <IconShieldCheck className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[11px] font-black text-emerald-900 tracking-tight">{label}</span>
        {sublabel && <span className="text-[8.5px] font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
}

export function OriginPill({ flag = "🇩🇪", country = "Germaniya", material = "Charisma", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50/90 border border-amber-200 text-slate-800 text-[10.5px] font-bold select-none ${className}`}
    >
      <span className="text-xs">{flag}</span>
      <span className="text-primary font-black">{material}</span>
      <span className="text-slate-400 font-normal">({country})</span>
    </span>
  );
}
