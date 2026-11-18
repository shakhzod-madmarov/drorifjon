import React, { useState, useRef, useCallback } from "react";

export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = "Muolajadan oldin",
  afterAlt = "Muolajadan keyin",
  beforeLabel = "Oldin",
  afterLabel = "Keyin",
  className = "",
  onZoom,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (!rect.width) return;
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 3) percent = 3;
    if (percent > 97) percent = 97;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture not supported on element
    }
    handleMove(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer release not supported on element
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11] cursor-ew-resize group shadow-lg touch-none ${className}`}
      aria-label="Taqqoslash slayderi"
      role="region"
    >
      {/* After Image (Full background) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Before Image (Clipped with CSS clipPath from 0 to sliderPos%) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      />

      {/* Subtle overlay labels */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-md">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-950/85 backdrop-blur-md text-emerald-300 border border-emerald-400/40 shadow-md">
          {afterLabel}
        </span>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 sm:w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Glowing Center Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-primary shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex items-center justify-center border-2 border-primary group-hover:scale-110 active:scale-95 transition-transform pointer-events-auto cursor-ew-resize">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Zoom / Fullscreen Button on bottom right */}
      {onZoom && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onZoom();
          }}
          type="button"
          aria-label="Rasmni kattalashtirish"
          className="absolute bottom-3 right-3 z-30 w-8 h-8 rounded-xl bg-black/70 backdrop-blur-md text-white hover:bg-primary flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100 shadow-md pointer-events-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
      )}

      {/* Drag Helper Tip (disappears after first interaction) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-md shadow-sm">
          ↔ Slayderni suring
        </span>
      </div>
    </div>
  );
};
