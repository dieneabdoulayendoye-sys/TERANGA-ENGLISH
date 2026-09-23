import React from 'react';
import { MessageCircle, Mail, Phone, Award, Heart, CheckCircle2 } from 'lucide-react';
import { SELLER_INFO, getWhatsAppGeneralContactUrl } from '../data/books';
import { Language } from '../types';

interface AboutTeacherProps {
  lang: Language;
}

export const AboutTeacher: React.FC<AboutTeacherProps> = ({ lang }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Teacher Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-emerald-900 group">
                <img
                  src="/src/assets/images/mister_diene_teacher_1790145105576.jpg"
                  alt="Mister Diene - Senegalese English Teacher and Author"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
                    Auteur & Enseignant
                  </div>
                  <div className="text-sm font-bold">Mister Diene</div>
                </div>
              </div>

              {/* Quick direct contact links below portrait */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`tel:${SELLER_INFO.phoneRaw}`}
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-emerald-700 hover:border-emerald-500 transition-colors shadow-xs"
                  title="Appeler Mister Diene"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppGeneralContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                  title="Contacter sur WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SELLER_INFO.email}`}
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-emerald-700 hover:border-emerald-500 transition-colors shadow-xs"
                  title="Envoyer un email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Teacher Story & Commitment */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'fr' ? 'À propos de l’auteur' : 'About the Author'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
                MISTER DIENE
              </h2>

              <p className="text-base text-stone-700 leading-relaxed font-normal">
                {lang === 'fr'
                  ? "Passionné par l'enseignement et le progrès des jeunes sénégalais, Mister Diene a conçu les manuels TERANGA ENGLISH pour démystifier la langue anglaise au collège et au lycée. Son approche pratique met l'accent sur la clarté des explications, la confiance à l'oral et la maîtrise des formats d'examen nationaux (BFEM et BAC)."
                  : "Dedicated to the academic success of Senegalese youth, Mister Diene created the TERANGA ENGLISH manuals to make English accessible, engaging, and practical for every middle and high school learner."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Conforme au programme sénégalais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Format accessible à 1 000 FCFA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Soutien direct aux élèves & parents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Disponible à Dakar et en régions</span>
                </div>
              </div>

              {/* Teranga quote */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-xs sm:text-sm italic text-stone-600 flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  « L’esprit de la Teranga, c’est aussi partager le savoir et donner la chance à chaque enfant du Sénégal de s’exprimer en anglais avec fierté et assurance. » — Mister Diene
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
