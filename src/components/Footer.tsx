import React from 'react';
import { MessageCircle, Mail, Phone, Heart, Share2 } from 'lucide-react';
import { SELLER_INFO, BOOKS, getWhatsAppGeneralContactUrl } from '../data/books';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenShare }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-display font-extrabold text-sm">
                TE
              </span>
              <span className="text-2xl font-black font-display text-white tracking-tight">
                TERANGA ENGLISH
              </span>
            </div>

            <p className="text-sm font-semibold text-amber-400">
              {lang === 'fr'
                ? "TERANGA ENGLISH — L’anglais pour réussir à l’école"
                : "Learn English. Succeed in School."}
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              {lang === 'fr'
                ? "Librairie éducative en ligne dédiée aux élèves du Sénégal. Manuels d'anglais de la 6ème à la Terminale conçus par Mister Diene pour une progression durable et la réussite aux examens nationaux (BFEM & BAC)."
                : "Online educational bookstore dedicated to Senegalese school students. English-language manuals from 6ème to Terminale designed for classroom success."}
            </p>

            <div className="pt-2 text-xs text-emerald-400 font-bold">
              Prix unique : 1 000 FCFA par manuel
            </div>
          </div>

          {/* Quick links to Middle School (Collège) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Collège (Cycle Moyen)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#book-6eme" className="hover:text-amber-400 transition-colors">
                  TERANGA ENGLISH — 6ème
                </a>
              </li>
              <li>
                <a href="#book-5eme" className="hover:text-amber-400 transition-colors">
                  TERANGA ENGLISH — 5ème
                </a>
              </li>
              <li>
                <a href="#book-4eme" className="hover:text-amber-400 transition-colors">
                  TERANGA ENGLISH — 4ème
                </a>
              </li>
              <li>
                <a href="#book-3eme" className="hover:text-amber-400 font-bold text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>TERANGA ENGLISH — 3ème</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">BFEM</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links to High School (Lycée) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Lycée (Secondaire)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#book-2nde" className="hover:text-amber-400 transition-colors">
                  TERANGA ENGLISH — 2nde
                </a>
              </li>
              <li>
                <a href="#book-1ere" className="hover:text-amber-400 transition-colors">
                  TERANGA ENGLISH — 1ère
                </a>
              </li>
              <li>
                <a href="#book-terminale" className="hover:text-amber-400 font-bold text-red-400 transition-colors flex items-center gap-1.5">
                  <span>TERANGA ENGLISH — Terminale</span>
                  <span className="text-[10px] bg-red-400/20 text-red-300 px-1.5 py-0.5 rounded">BAC</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Seller / Direct Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Contact & Vendeur
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="font-bold text-white">MISTER DIENE</div>
              <a
                href={getWhatsAppGeneralContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{SELLER_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SELLER_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{SELLER_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-stone-400">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dakar, Sénégal</span>
              </div>

              {onOpenShare && (
                <div className="pt-2">
                  <button
                    onClick={onOpenShare}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer border border-stone-700"
                  >
                    <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Lien pour TikTok / Réseaux</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tricolor divider */}
        <div className="h-0.5 w-full senegal-stripe my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} TERANGA ENGLISH. Auteur : Mister Diene. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Fait avec passion pour l'éducation au Sénégal</span>
            <span className="text-emerald-500">🇸🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
