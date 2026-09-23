import React, { useState } from 'react';
import { MessageCircle, Menu, X, ShoppingBag, Share2 } from 'lucide-react';
import { SELLER_INFO, getWhatsAppGeneralContactUrl } from '../data/books';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenMultiOrder: () => void;
  onOpenShare?: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenMultiOrder,
  onOpenShare,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: currentLang === 'fr' ? 'Accueil' : 'Home', href: '#home' },
    { label: currentLang === 'fr' ? 'Nos Manuels' : 'Our Books', href: '#books' },
    { label: '6ème', href: '#book-6eme' },
    { label: '5ème', href: '#book-5eme' },
    { label: '4ème', href: '#book-4eme' },
    { label: '3ème', href: '#book-3eme' },
    { label: '2nde', href: '#book-2nde' },
    { label: '1ère', href: '#book-1ere' },
    { label: 'Terminale', href: '#book-terminale' },
    { label: currentLang === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar with Senegal tricolor line */}
      <div className="h-1 w-full senegal-stripe" />
      
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Single text element wordmark */}
            <div className="flex items-center gap-3">
              <a href="#home" className="flex items-center gap-2 group">
                <span className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-xs group-hover:bg-emerald-900 transition-colors">
                  TE
                </span>
                <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-950">
                  TERANGA ENGLISH
                </span>
              </a>
            </div>

            {/* Zone 2: Navigation Links (desktop) */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-stone-600">
              <a href="#home" className="hover:text-emerald-700 transition-colors">
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </a>
              <a href="#books" className="hover:text-emerald-700 transition-colors font-semibold text-slate-900">
                {currentLang === 'fr' ? 'Nos Manuels' : 'Our Books'}
              </a>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/80 text-xs font-semibold text-stone-700">
                <span className="text-stone-400 text-[11px] mr-1">Collège:</span>
                <a href="#book-6eme" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white transition-colors">6ème</a>
                <a href="#book-5eme" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white transition-colors">5ème</a>
                <a href="#book-4eme" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white transition-colors">4ème</a>
                <a href="#book-3eme" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white font-bold text-amber-700 transition-colors">3ème (BFEM)</a>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-100/80 text-xs font-semibold text-stone-700">
                <span className="text-stone-400 text-[11px] mr-1">Lycée:</span>
                <a href="#book-2nde" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white transition-colors">2nde</a>
                <a href="#book-1ere" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white transition-colors">1ère</a>
                <a href="#book-terminale" className="hover:text-emerald-700 px-1 py-0.5 rounded hover:bg-white font-bold text-red-700 transition-colors">Terminale (BAC)</a>
              </div>
              <a href="#contact" className="hover:text-emerald-700 transition-colors">
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary Actions (WhatsApp button & controls) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Share / Copy Link button */}
              {onOpenShare && (
                <button
                  onClick={onOpenShare}
                  className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  title={currentLang === 'fr' ? 'Partager le site / Lien TikTok' : 'Share website / TikTok link'}
                >
                  <Share2 className="w-4 h-4 text-emerald-700" />
                  <span className="hidden lg:inline">{currentLang === 'fr' ? 'Partager' : 'Share'}</span>
                </button>
              )}

              {/* Batch Order / Cart Button */}
              <button
                onClick={onOpenMultiOrder}
                className="relative inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                title={currentLang === 'fr' ? 'Commander plusieurs manuels' : 'Order multiple manuals'}
              >
                <ShoppingBag className="w-4 h-4 text-stone-600" />
                <span className="hidden sm:inline">
                  {currentLang === 'fr' ? 'Pack / Commande' : 'Batch Order'}
                </span>
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-emerald-700 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Language toggle */}
              <button
                onClick={onToggleLang}
                className="px-2.5 py-1.5 text-xs font-bold rounded-lg border border-stone-300 text-stone-700 hover:border-emerald-600 hover:text-emerald-700 transition-colors"
                title="Toggle language"
              >
                {currentLang === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Prominent WhatsApp CTA */}
              <a
                href={getWhatsAppGeneralContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span className="hidden md:inline">BUY / CONTACT ON WHATSAPP</span>
                <span className="md:hidden">WHATSAPP</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-400">
                Navigation
              </div>
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-stone-800 hover:bg-stone-100 rounded-md"
              >
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </a>
              <a
                href="#books"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-emerald-800 hover:bg-emerald-50 rounded-md"
              >
                {currentLang === 'fr' ? 'Tous les manuels (6ème à Terminale)' : 'All Manuals (6ème to Terminale)'}
              </a>

              <div className="pt-2 pb-1">
                <div className="px-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                  Collège (Moyen)
                </div>
                <div className="grid grid-cols-2 gap-1 px-2 pt-1">
                  <a
                    href="#book-6eme"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
                  >
                    6ème
                  </a>
                  <a
                    href="#book-5eme"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
                  >
                    5ème
                  </a>
                  <a
                    href="#book-4eme"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
                  >
                    4ème
                  </a>
                  <a
                    href="#book-3eme"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-md"
                  >
                    3ème (BFEM)
                  </a>
                </div>
              </div>

              <div className="pt-2 pb-1">
                <div className="px-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                  Lycée (Secondaire)
                </div>
                <div className="grid grid-cols-3 gap-1 px-2 pt-1">
                  <a
                    href="#book-2nde"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
                  >
                    2nde
                  </a>
                  <a
                    href="#book-1ere"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
                  >
                    1ère
                  </a>
                  <a
                    href="#book-terminale"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-bold text-red-800 bg-red-50 hover:bg-red-100 rounded-md"
                  >
                    Terminale
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-stone-800 hover:bg-stone-100 rounded-md"
              >
                {currentLang === 'fr' ? 'Contacter Mister Diene' : 'Contact Mister Diene'}
              </a>

              {onOpenShare && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShare();
                  }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-base font-semibold text-emerald-800 hover:bg-emerald-50 rounded-md cursor-pointer"
                >
                  <Share2 className="w-5 h-5 text-emerald-700" />
                  <span>{currentLang === 'fr' ? 'Partager le site (Lien TikTok / WhatsApp)' : 'Share site (TikTok / WhatsApp link)'}</span>
                </button>
              )}

              <div className="pt-4 border-t border-stone-200 mt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${SELLER_INFO.phoneRaw}?text=${encodeURIComponent("Bonjour Mister Diene, je souhaite commander un manuel TERANGA ENGLISH.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  BUY / CONTACT ON WHATSAPP
                </a>
                <div className="text-center text-xs text-stone-500 pt-1">
                  {SELLER_INFO.phoneDisplay} · {SELLER_INFO.email}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
