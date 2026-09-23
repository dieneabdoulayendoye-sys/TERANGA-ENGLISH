import React from 'react';
import { X, MessageCircle, BookOpen, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { Book, Language } from '../types';
import { BookCover } from './BookCover';
import { getWhatsAppBuyUrl, SELLER_INFO } from '../data/books';

interface BookPreviewModalProps {
  book: Book | null;
  lang: Language;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export const BookPreviewModal: React.FC<BookPreviewModalProps> = ({
  book,
  lang,
  onClose,
  onAddToCart,
}) => {
  if (!book) return null;

  const whatsAppUrl = getWhatsAppBuyUrl(book, lang);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with tricolor ribbon */}
        <div className="h-1.5 w-full senegal-stripe" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header block with 3D Cover */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-stone-200 pb-6">
            <div className="shrink-0">
              <BookCover book={book} size="md" />
            </div>

            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                <span className="font-bold text-emerald-800 uppercase tracking-wider">
                  {book.cycle === 'college' ? 'Cycle Moyen (Collège)' : 'Second Cycle (Lycée)'}
                </span>
                {book.highlight && (
                  <span className="bg-amber-400 text-stone-950 font-black px-2 py-0.5 rounded text-[10px]">
                    {book.highlight}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                {book.title}
              </h2>

              <p className="text-sm font-semibold text-stone-700">
                {lang === 'fr' ? book.subtitleFr : book.subtitle}
              </p>

              <div className="pt-2 flex items-baseline justify-center sm:justify-start gap-2">
                <span className="text-2xl font-black font-display text-emerald-800 tabular-nums">
                  1 000 FCFA
                </span>
                <span className="text-xs text-stone-500">Prix unique fixé par Mister Diene</span>
              </div>
            </div>
          </div>

          {/* Book Summary */}
          <div className="py-5 border-b border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              {lang === 'fr' ? 'Présentation Pédagogique' : 'Educational Overview'}
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {lang === 'fr' ? book.summaryFr : book.summary}
            </p>
          </div>

          {/* Key chapters / Sample Units */}
          <div className="py-5 border-b border-stone-100">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-emerald-700" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                {lang === 'fr' ? 'Structure & Unités au Programme' : 'Units & Curriculum Topics'}
              </h4>
            </div>

            <div className="space-y-2.5">
              {book.sampleUnits.map((u, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-[11px] shrink-0">
                      {u.unit}
                    </span>
                    <span className="font-semibold text-slate-900">{u.title}</span>
                  </div>
                  <span className="text-stone-500 text-[11px] italic sm:text-right">
                    {u.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics List */}
          <div className="py-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              {lang === 'fr' ? 'Points Clés Développés' : 'Key Skills Covered'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {book.keyTopics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>BUY THIS BOOK (1 000 FCFA)</span>
            </a>

            <button
              onClick={() => {
                onAddToCart(book);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'fr' ? 'Ajouter à la commande multiple' : 'Add to Batch Order'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
