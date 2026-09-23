import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, HelpCircle, MapPin, Clock } from 'lucide-react';
import { SELLER_INFO, getWhatsAppGeneralContactUrl } from '../data/books';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [userName, setUserName] = useState('');
  const [userLevel, setUserLevel] = useState('3ème');
  const [userCity, setUserCity] = useState('Dakar');
  const [userNote, setUserNote] = useState('');

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour Mister Diene,\nJe m'appelle ${userName || 'un parent/élève'}.\nClasse : ${userLevel}\nVille : ${userCity}\nMessage : ${userNote || 'J\'aimerais avoir des renseignements sur vos manuels TERANGA ENGLISH.'}`;
    const url = `https://wa.me/${SELLER_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            {lang === 'fr' ? 'À Votre Écoute' : 'We are here to help'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            CONTACT MISTER DIENE
          </h2>
          <div className="mt-3 space-y-1 text-base text-stone-700">
            <p className="font-semibold text-slate-800">
              {lang === 'fr' ? 'Vous avez une question sur nos manuels ?' : 'Do you have a question about our manuals?'}
            </p>
            <p className="font-semibold text-slate-800">
              {lang === 'fr' ? 'Besoin d’aide pour choisir le bon livre ?' : 'Need help choosing the right book?'}
            </p>
            <p className="text-stone-600">
              {lang === 'fr' ? 'Contactez Mister Diene directement.' : 'Contact Mister Diene directly.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Channels Cards (WhatsApp & Email) */}
          <div className="lg:col-span-6 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-8 -mt-8 pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Direct WhatsApp
                  </span>
                  <h3 className="text-2xl font-black font-display text-slate-900 mt-0.5 mb-1">
                    {SELLER_INFO.phoneDisplay}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mb-4">
                    {lang === 'fr'
                      ? 'Réponse rapide pour les commandes, la disponibilité et les questions scolaires.'
                      : 'Fast response for manual orders, school bulk inquiries and guidance.'}
                  </p>
                  <a
                    href={getWhatsAppGeneralContactUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Email Officiel
                  </span>
                  <h3 className="text-lg sm:text-xl font-black font-display text-slate-900 mt-0.5 mb-1 break-all">
                    {SELLER_INFO.email}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mb-4">
                    {lang === 'fr'
                      ? 'Pour les partenariats d’établissements scolaires, devis et correspondances formelles.'
                      : 'For school partnerships, formal orders and curriculum inquiries.'}
                  </p>
                  <a
                    href={`mailto:${SELLER_INFO.email}?subject=Question%20sur%20les%20manuels%20TERANGA%20ENGLISH`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>SEND AN EMAIL</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Call option for local parents */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                  <Phone className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Appel Téléphonique Direct</div>
                  <div className="text-stone-500">{SELLER_INFO.phoneDisplay}</div>
                </div>
              </div>
              <a
                href={`tel:${SELLER_INFO.phoneRaw}`}
                className="px-3.5 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
              >
                Appeler
              </a>
            </div>
          </div>

          {/* Right Column: Quick Contact & Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h3 className="text-xl font-black font-display text-slate-900">
                {lang === 'fr' ? 'Poser une question rapide' : 'Ask a quick question'}
              </h3>
            </div>
            <p className="text-xs text-stone-500 mb-5">
              {lang === 'fr'
                ? 'Remplissez ce formulaire pour envoyer directement votre message pré-rempli à Mister Diene sur WhatsApp.'
                : 'Fill in your details to immediately generate a pre-filled WhatsApp message to Mister Diene.'}
            </p>

            <form onSubmit={handleSendCustomWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {lang === 'fr' ? 'Votre Nom (Parent, Élève ou Enseignant)' : 'Your Name'}
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex : Fatou Ndiaye"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {lang === 'fr' ? 'Classe concernée' : 'Target Level'}
                  </label>
                  <select
                    value={userLevel}
                    onChange={(e) => setUserLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="6ème">6ème</option>
                    <option value="5ème">5ème</option>
                    <option value="4ème">4ème</option>
                    <option value="3ème (BFEM)">3ème (BFEM)</option>
                    <option value="2nde">2nde</option>
                    <option value="1ère">1ère</option>
                    <option value="Terminale (BAC)">Terminale (BAC)</option>
                    <option value="Toutes les classes / École">Toutes les classes / École</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {lang === 'fr' ? 'Ville de livraison' : 'Delivery City'}
                  </label>
                  <input
                    type="text"
                    value={userCity}
                    onChange={(e) => setUserCity(e.target.value)}
                    placeholder="Dakar, Thiès, Kaolack..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {lang === 'fr' ? 'Votre question ou commande' : 'Your Question / Order'}
                </label>
                <textarea
                  rows={3}
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Ex : Je souhaite commander 2 manuels de 3ème pour mes enfants et connaître le délai de livraison sur Dakar..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Envoyer directement sur WhatsApp' : 'Send directly via WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
