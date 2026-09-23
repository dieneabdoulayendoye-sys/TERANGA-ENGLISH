import React from 'react';
import { MessageCircle, Eye, Check, BookOpen } from 'lucide-react';
import { Book, Language } from '../types';
import { BookCover } from './BookCover';
import { getWhatsAppBuyUrl } from '../data/books';

interface BookCardProps {
  book: Book;
  lang: Language;
  onPreview: (book: Book) => void;
  onAddToCart?: (book: Book) => void;
  isInCart?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  lang,
  onPreview,
  onAddToCart,
  isInCart = false,
}) => {
  const whatsAppUrl = getWhatsAppBuyUrl(book, lang);

  return (
    <div
      id={`book-${book.id}`}
      className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Top Banner for highlighted books (BFEM or Terminale) */}
      {book.highlight && (
        <div className="bg-amber-400 text-stone-950 font-extrabold text-xs tracking-wider uppercase py-1 px-3 text-center flex items-center justify-center gap-1.5 shadow-xs">
          <span>★</span>
          <span>{book.highlight}</span>
          <span>★</span>
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-5 sm:p-6 flex flex-col items-center">
        {/* Badge tag if any */}
        <div className="w-full flex items-center justify-between mb-3 text-xs">
          <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">
            {book.cycle === 'college' ? 'Collège' : 'Lycée'}
          </span>
          {book.badge && (
            <span
              className={`font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wide ${
                book.badgeType === 'bfem'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : book.badgeType === 'bac'
                  ? 'bg-red-100 text-red-900 border border-red-300'
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}
            >
              {book.badge}
            </span>
          )}
        </div>

        {/* 3D Book Mockup Display */}
        <div className="my-2 cursor-pointer" onClick={() => onPreview(book)}>
          <BookCover book={book} size="md" />
        </div>

        {/* Level and Title info */}
        <div className="text-center mt-4 w-full">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-1">
            TERANGA ENGLISH
          </div>
          <h3 className="text-2xl font-black font-display text-slate-900 mb-1">
            {book.level}
          </h3>
          <p className="text-sm font-semibold text-stone-700 min-h-[2.5rem] flex items-center justify-center">
            {lang === 'fr' ? book.subtitleFr : book.subtitle}
          </p>

          {/* Short description */}
          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed text-left sm:text-center">
            {lang === 'fr' ? book.summaryFr : book.summary}
          </p>
        </div>

        {/* Key curricular topics bullets */}
        <div className="w-full mt-4 pt-3 border-t border-stone-100 space-y-1 text-xs text-stone-600 text-left">
          {book.keyTopics.slice(0, 3).map((topic, idx) => (
            <div key={idx} className="flex items-start gap-1.5 line-clamp-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Price & BUY THIS BOOK Button */}
      <div className="p-5 sm:p-6 pt-0 bg-stone-50/70 border-t border-stone-100 mt-2">
        <div className="flex items-baseline justify-between mb-3.5 pt-3">
          <span className="text-xs text-stone-500 font-medium">Prix officiel :</span>
          <span className="text-2xl font-black font-display text-emerald-800 tabular-nums">
            {book.price.toLocaleString()} {book.currency}
          </span>
        </div>

        {/* Actions row */}
        <div className="space-y-2">
          {/* Main Primary Buy on WhatsApp Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all group-hover:bg-emerald-700"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>BUY THIS BOOK</span>
          </a>

          {/* Secondary preview & batch order buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onPreview(book)}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'fr' ? 'Aperçu' : 'Preview'}</span>
            </button>

            {onAddToCart && (
              <button
                onClick={() => onAddToCart(book)}
                className={`inline-flex items-center justify-center gap-1 py-2 px-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                  isInCart
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isInCart ? (lang === 'fr' ? 'Ajouté ✓' : 'Added ✓') : (lang === 'fr' ? '+ Panier' : '+ Pack')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
