import React from 'react';
import { Book } from '../types';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, size = 'md', className = '' }) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div
      className={`relative select-none transition-transform duration-300 group-hover:-translate-y-1.5 ${
        isSm ? 'w-36 h-48' : isLg ? 'w-64 h-88' : 'w-48 h-64'
      } ${className}`}
    >
      {/* 3D Book Page Edge Depth / Stack effect */}
      <div className="absolute right-0 top-1 bottom-1 w-3 bg-stone-200 rounded-r border-r border-stone-300 shadow-sm" />
      <div className="absolute right-1 top-2 bottom-2 w-2 bg-stone-100 rounded-r" />

      {/* Main Front Cover */}
      <div
        style={{
          backgroundColor: book.color.primary,
          borderColor: book.color.border,
        }}
        className="relative w-[calc(100%-8px)] h-full rounded-r-md rounded-l-xs border-r border-t border-b overflow-hidden book-shadow flex flex-col justify-between text-white p-3.5"
      >
        {/* Spine lighting overlay */}
        <div className="absolute inset-y-0 left-0 w-4 book-spine-gradient pointer-events-none" />

        {/* Top Header Section with Senegalese Flag Ribbon */}
        <div className="relative z-10 pl-2">
          {/* Subtle Senegal Tri-color bar */}
          <div className="h-1.5 w-full senegal-stripe rounded-full mb-2 shadow-xs" />

          <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-emerald-100">
            <span>Senegal School Edition</span>
            {book.highlight && (
              <span className="bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded text-[9px] tracking-normal">
                {book.highlight}
              </span>
            )}
          </div>
        </div>

        {/* Book Centerpiece / Level Emblem */}
        <div className="relative z-10 my-auto text-center pl-2">
          <div className="text-[10px] tracking-widest uppercase font-semibold text-white/80">
            Manual
          </div>
          <div className="text-3xl font-extrabold tracking-tight font-display text-white drop-shadow-sm my-0.5">
            {book.level}
          </div>
          <div className="text-[11px] font-medium tracking-wide text-white/90 uppercase">
            English
          </div>

          {/* Decorative geometric ring with star */}
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 my-1 bg-white/10 backdrop-blur-xs">
            <span className="text-amber-300 text-sm">★</span>
          </div>
        </div>

        {/* Bottom Metadata & Author Credit */}
        <div className="relative z-10 border-t border-white/20 pt-2 pl-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold tracking-wide uppercase">TERANGA ENGLISH</div>
              <div className="text-[9px] text-white/80 font-medium">By Mister Diene</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] uppercase text-white/70">Prix Fixe</div>
              <div className="text-xs font-black text-amber-300 tabular-nums">1 000 F</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
