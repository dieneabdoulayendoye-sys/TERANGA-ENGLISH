import React, { useState } from 'react';
import { Book, Language } from '../types';
import { BOOKS } from '../data/books';
import { BookCard } from './BookCard';
import { Sparkles, ShoppingBag } from 'lucide-react';

interface BookCatalogueProps {
  lang: Language;
  onPreviewBook: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  cartItems: { book: Book; quantity: number }[];
  onOpenMultiOrder: () => void;
}

export const BookCatalogue: React.FC<BookCatalogueProps> = ({
  lang,
  onPreviewBook,
  onAddToCart,
  cartItems,
  onOpenMultiOrder,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'college' | 'lycee' | 'exams'>('all');

  const filteredBooks = BOOKS.filter((book) => {
    if (activeFilter === 'college') return book.cycle === 'college';
    if (activeFilter === 'lycee') return book.cycle === 'lycee';
    if (activeFilter === 'exams') return book.highlight !== undefined;
    return true;
  });

  return (
    <section id="books" className="py-16 sm:py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 bg-emerald-100/80 px-3 py-1 rounded-full">
            <span>🇸🇳 Collection Officielle</span>
            <span aria-hidden="true">·</span>
            <span>7 Manuels de Cours & Exercices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            OUR ENGLISH MANUALS
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600">
            {lang === 'fr'
              ? "Des livrets pédagogiques clairs, méthodiques et conformes aux épreuves nationales. Choisissez votre classe ou commandez le pack complet."
              : "Practical, methodical English manuals aligned with the Senegalese national curriculum. Choose your level or get the complete collection."}
          </p>

          {/* Interactive filter tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-xl shadow-xs border border-stone-200 inline-flex">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {lang === 'fr' ? 'Tous les manuels (7)' : 'All Books (7)'}
            </button>

            <button
              onClick={() => setActiveFilter('college')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'college'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {lang === 'fr' ? 'Collège (6e, 5e, 4e, 3e)' : 'Collège (6e to 3e)'}
            </button>

            <button
              onClick={() => setActiveFilter('lycee')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'lycee'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {lang === 'fr' ? 'Lycée (2nde, 1ère, Tle)' : 'Lycée (2nde, 1ère, Tle)'}
            </button>

            <button
              onClick={() => setActiveFilter('exams')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'exams'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-amber-900 hover:text-amber-950 hover:bg-amber-50'
              }`}
            >
              ★ {lang === 'fr' ? 'Spécial Examens (BFEM & BAC)' : 'Exam Prep (BFEM & BAC)'}
            </button>
          </div>
        </div>

        {/* 7 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredBooks.map((book) => {
            const inCart = cartItems.some((item) => item.book.id === book.id && item.quantity > 0);
            return (
              <BookCard
                key={book.id}
                book={book}
                lang={lang}
                onPreview={onPreviewBook}
                onAddToCart={onAddToCart}
                isInCart={inCart}
              />
            );
          })}
        </div>

        {/* Promo Pack Banner / School & Multi-Book Callout */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Pack Famille & Écoles' : 'Family & School Pack'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display">
              {lang === 'fr'
                ? "Besoin de plusieurs manuels ou d'une commande pour votre école ?"
                : "Need multiple manuals or a batch order for your school?"}
            </h3>
            <p className="text-sm text-emerald-100 max-w-xl">
              {lang === 'fr'
                ? "Commandez la collection intégrale (7 manuels = 7 000 FCFA) ou personnalisez votre sélection avec livraison groupée rapide par Mister Diene."
                : "Order the complete 7-manual bundle (7,000 FCFA) or customize your selection with fast combined delivery."}
            </p>
          </div>

          <button
            onClick={onOpenMultiOrder}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{lang === 'fr' ? 'Commander Plusieurs Manuels' : 'Order Multiple Manuals'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
