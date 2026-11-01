import React from "react";

/**
 * Floating3DShapes — Soft Classic Ambient Background
 * Clean, subtle, peaceful atmosphere with zero distracting floating balls or rotating rings.
 */
export default function Floating3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10" aria-hidden="true">
      {/* Soft warm ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-50/20 rounded-full blur-3xl" />
    </div>
  );
}
