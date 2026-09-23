import React from 'react';
import { ArrowDown, MessageCircle, BookOpen, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { SELLER_INFO, getWhatsAppGeneralContactUrl } from '../data/books';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle African geometric pattern SVG background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headings, Value Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National curriculum badge & Slogan */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5 font-bold tracking-wide uppercase text-amber-300">
                🇸🇳 Édition Scolaire Sénégal
              </span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'fr' ? "L’anglais pour réussir à l’école" : "Learn English. Succeed in School."}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/80">Par Mister Diene</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
              TERANGA ENGLISH
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl font-bold text-amber-400 max-w-2xl mx-auto lg:mx-0 leading-snug">
              {lang === 'fr'
                ? "Manuels d'anglais pour les élèves sénégalais — De la 6ème à la Terminale"
                : "English Manuals for Senegalese Students — From 6ème to Terminale"}
            </p>

            {/* Additional Text */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {lang === 'fr'
                ? "Découvrez des manuels d'anglais pratiques conçus pour les apprenants sénégalais et adaptés à leur environnement scolaire. Conformes aux programmes officiels du BFEM et du Baccalauréat."
                : "Discover practical English manuals designed for Senegalese learners and adapted to their school environment."}
            </p>

            {/* VISUALLY PROMINENT PRICE HIGHLIGHT */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 shadow-lg text-center sm:text-left">
              <div className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                Tarif unique pour chaque classe :
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-amber-300 tabular-nums">
                  1 000 FCFA
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white/90">
                  {lang === 'fr' ? "seulement par manuel" : "per manual only"}
                </span>
              </div>
            </div>

            {/* Call-to-actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#books"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5 text-emerald-900" />
                <span>DISCOVER OUR BOOKS</span>
              </a>

              <a
                href={getWhatsAppGeneralContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>BUY ON WHATSAPP</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-emerald-100/80 border-t border-emerald-800/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>6ème à Terminale</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Conforme BFEM & BAC</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Livraison partout au Sénégal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Students & Senegalese Touch */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing & glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/20 via-emerald-500/20 to-rose-500/20 rounded-2xl blur-lg" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-emerald-900">
                <img
                  src="/src/assets/images/hero_senegal_students_1790145092713.jpg"
                  alt="Senegalese students studying English manuals in classroom"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">
                      Apprendre & Réussir
                    </span>
                  </div>
                  <p className="text-sm font-medium text-stone-200">
                    Des élèves motivés à Dakar et dans toutes les régions du Sénégal grâce aux livrets TERANGA ENGLISH.
                  </p>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20 text-xs">
                    <span className="text-stone-300">Auteur : Mister Diene</span>
                    <span className="font-bold text-amber-300">1 000 FCFA / livre</span>
                  </div>
                </div>
              </div>

              {/* Floating mini badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 px-3.5 py-2.5 rounded-xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  7
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-slate-900">7 Niveaux Complets</div>
                  <div className="text-stone-500">De la 6ème au Baccalauréat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
