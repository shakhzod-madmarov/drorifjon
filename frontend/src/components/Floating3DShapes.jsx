import React from "react";

/**
 * Floating3DShapes:
 * Ambient hardware-accelerated 3D geometric objects
 * with frosted glass reflections and brand glow rings.
 * Palette: #FF9D50, #FFF9D8, #1DCED8, #55E07E
 */
export default function Floating3DShapes({ variant = "hero" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
      {/* 1. Large Radiant Coral Orb */}
      <div
        className="absolute -top-12 -right-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-35 bg-gradient-to-br from-[#FF9D50] via-[#FFE099] to-transparent animate-float-slow"
      />

      {/* 2. Cyan Neon Precision Glow */}
      <div
        className="absolute top-1/3 -left-20 w-72 sm:w-88 h-72 sm:h-88 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#1DCED8] via-[#E3FBFC] to-transparent animate-float-reverse"
      />

      {/* 3. Emerald Mint Health Glow */}
      <div
        className="absolute -bottom-16 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-[#55E07E] via-[#FFF9D8] to-transparent animate-pulse-glow"
      />

      {/* 4. Floating 3D Geometric Glass Sphere 1 */}
      <div
        className="absolute top-12 left-[12%] hidden sm:block w-14 h-14 rounded-full bg-gradient-to-tr from-white/90 via-[#FFF9D8]/70 to-[#FF9D50]/30 border border-white/80 shadow-luxury backdrop-blur-md animate-float-3d"
        style={{ animationDuration: "8s" }}
      >
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/70 blur-2xs" />
      </div>

      {/* 5. Floating 3D Geometric Glass Sphere 2 (Cyan Hue) */}
      <div
        className="absolute bottom-16 left-[22%] hidden md:block w-10 h-10 rounded-full bg-gradient-to-tr from-white/90 via-[#E3FBFC]/80 to-[#1DCED8]/40 border border-white/80 shadow-cyan backdrop-blur-md animate-float-slow"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      >
        <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-white/80 blur-2xs" />
      </div>

      {/* 6. Floating 3D Geometric Torus / Ring */}
      <div
        className="absolute top-28 right-[15%] hidden lg:block w-16 h-16 rounded-full border-4 border-dashed border-[#FF9D50]/40 opacity-60 animate-orbital"
        style={{ animationDuration: "16s" }}
      />

      {/* 7. Floating Medical Plus / Cross Facet */}
      <div
        className="absolute bottom-24 right-[8%] hidden sm:block w-8 h-8 rounded-xl bg-gradient-to-br from-[#55E07E]/20 to-[#1DCED8]/20 border border-[#55E07E]/50 flex items-center justify-center text-[#3BC966] text-xs font-black shadow-green animate-orbital-reverse"
      >
        ✚
      </div>
    </div>
  );
}
