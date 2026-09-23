import React from 'react';
import { Language } from '../types';
import { GraduationCap, BookOpen, Coins, School, FileCheck, PhoneCall } from 'lucide-react';

interface WhyTerangaProps {
  lang: Language;
}

export const WhyTeranga: React.FC<WhyTerangaProps> = ({ lang }) => {
  const benefits = [
    {
      flag: '🇸🇳',
      icon: GraduationCap,
      title: lang === 'fr' ? 'Conçu pour les Élèves Sénégalais' : 'Made for Senegalese Students',
      desc: lang === 'fr'
        ? "Contenu pédagogique adapté au contexte scolaire et culturel sénégalais (exemples locaux, thématiques du pays)."
        : 'Educational content designed with the Senegalese school context in mind.',
      accent: 'border-emerald-200 bg-emerald-50/50',
    },
    {
      flag: '📚',
      icon: BookOpen,
      title: lang === 'fr' ? 'De la 6ème à la Terminale' : 'From 6ème to Terminale',
      desc: lang === 'fr'
        ? "Une collection complète de 7 manuels couvrant l'intégralité du collège et du lycée."
        : 'A complete collection covering secondary school levels.',
      accent: 'border-blue-200 bg-blue-50/50',
    },
    {
      flag: '💰',
      icon: Coins,
      title: lang === 'fr' ? 'Prix Accessible : 1 000 FCFA' : 'Affordable : 1,000 FCFA',
      desc: lang === 'fr'
        ? "Chaque manuel coûte seulement 1 000 FCFA pour permettre à chaque parent et élève d'accéder au savoir."
        : 'Every manual costs only 1,000 FCFA.',
      accent: 'border-amber-200 bg-amber-50/50',
    },
    {
      flag: '🎓',
      icon: School,
      title: lang === 'fr' ? 'Orienté Vers l’École & Examens' : 'School-Oriented',
      desc: lang === 'fr'
        ? "Contenu rigoureusement aligné sur les exigences des professeurs et des épreuves nationales (BFEM & BAC)."
        : 'Content designed to support English learning at school.',
      accent: 'border-teal-200 bg-teal-50/50',
    },
    {
      flag: '📝',
      icon: FileCheck,
      title: lang === 'fr' ? 'Pratique & Révision Complète' : 'Practice & Revision',
      desc: lang === 'fr'
        ? "Exercices ciblés, lexique indispensable, synthèses de grammaire, fiches de méthode et compréhension de texte."
        : 'Include exercises, vocabulary, grammar, reading and communication activities.',
      accent: 'border-indigo-200 bg-indigo-50/50',
    },
    {
      flag: '📱',
      icon: PhoneCall,
      title: lang === 'fr' ? 'Facile à Commander sur WhatsApp' : 'Easy to Order',
      desc: lang === 'fr'
        ? "Un simple clic prépare votre message sur WhatsApp pour finaliser l'achat directement avec Mister Diene."
        : 'Order directly through WhatsApp.',
      accent: 'border-rose-200 bg-rose-50/50',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            {lang === 'fr' ? 'L’Excellence Accessible à Tous' : 'Accessible Academic Excellence'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            WHY CHOOSE TERANGA ENGLISH?
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {lang === 'fr'
              ? 'Une méthode d’anglais pensée par un enseignant passionné pour faire progresser durablement les élèves du Sénégal.'
              : 'A method crafted by a dedicated educator to help every Senegalese learner make lasting progress.'}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 sm:p-7 border ${benefit.accent} shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl" role="img" aria-label="Benefit icon">
                      {benefit.flag}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black font-display text-slate-900 mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>{lang === 'fr' ? 'Avantage garanti' : 'Core Benefit'}</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
