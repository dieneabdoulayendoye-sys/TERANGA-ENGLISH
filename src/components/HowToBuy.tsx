import React from 'react';
import { BookOpen, MousePointerClick, MessageSquare, CreditCard, Truck, Check } from 'lucide-react';
import { Language } from '../types';

interface HowToBuyProps {
  lang: Language;
}

export const HowToBuy: React.FC<HowToBuyProps> = ({ lang }) => {
  const steps = [
    {
      step: 'STEP 1',
      title: lang === 'fr' ? 'Choisissez votre classe' : 'Choose your level',
      desc: lang === 'fr'
        ? 'Sélectionnez votre manuel de la 6ème à la Terminale selon votre niveau scolaire.'
        : 'Select your manual from 6ème to Terminale.',
      icon: BookOpen,
      iconColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      step: 'STEP 2',
      title: lang === 'fr' ? 'Cliquez sur ACHETER' : 'Click BUY',
      desc: lang === 'fr'
        ? 'Cliquez sur le bouton vert d’achat direct WhatsApp sur le livre de votre choix.'
        : 'Click the WhatsApp purchase button.',
      icon: MousePointerClick,
      iconColor: 'bg-amber-100 text-amber-900',
    },
    {
      step: 'STEP 3',
      title: lang === 'fr' ? 'Contactez Mister Diene' : 'Contact Mister Diene',
      desc: lang === 'fr'
        ? 'Envoyez le message automatique pré-rempli et suivez les instructions simples pour la livraison.'
        : 'Send the automatic WhatsApp message and follow the instructions provided by the seller.',
      icon: MessageSquare,
      iconColor: 'bg-teal-100 text-teal-800',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            {lang === 'fr' ? 'Processus Simple & Rapide' : 'Fast & Simple Process'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            HOW TO BUY
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {lang === 'fr'
              ? 'Achetez vos manuels scolaires en 3 étapes simples directement depuis votre smartphone.'
              : 'Order your English manuals in 3 simple steps directly from your phone.'}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center group"
              >
                {/* Step pill */}
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-4">
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${item.iconColor} flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-black font-display text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Payment & Delivery Trust Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900">Paiement Mobile Facile</div>
              <div className="text-stone-500">Wave, Orange Money ou Espèces</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900">Livraison Dakar & Régions</div>
              <div className="text-stone-500">Envoi rapide par taxi, relais ou poste</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900">Contact Direct Enseignant</div>
              <div className="text-stone-500">Conseils personnalisés de Mister Diene</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
