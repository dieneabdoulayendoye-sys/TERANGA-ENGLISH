import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Use the live public URL or window.location.href
  const publicUrl = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://ais-pre-prtlcso7a2shgctmpfpyhs-389940072178.europe-west2.run.app';

  const tiktokBioText = `🇸🇳 TERANGA ENGLISH — Mister Diene
📚 Manuels d’anglais de la 6ème à la Terminale (BFEM & BAC)
💰 1 000 FCFA seulement
📲 Commander : ${publicUrl}
💬 WhatsApp : +221 77 674 25 07`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleCopyBioText = async () => {
    try {
      await navigator.clipboard.writeText(tiktokBioText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const shareOnWhatsApp = () => {
    const text = `Découvrez les manuels d'anglais TERANGA ENGLISH pour le Sénégal (6ème à Terminale) à seulement 1 000 FCFA : ${publicUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full senegal-stripe" />

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black font-display text-slate-900">
                {lang === 'fr' ? 'Lien public du site' : 'Public Website Link'}
              </h3>
              <p className="text-xs text-stone-500">
                {lang === 'fr' ? 'À coller sur TikTok, Facebook, WhatsApp et Instagram' : 'Share on TikTok, WhatsApp and social media'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Public Link Box */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              {lang === 'fr' ? 'Lien direct pour le public' : 'Direct Public URL'}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={publicUrl}
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-mono select-all focus:outline-hidden"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (lang === 'fr' ? 'Copié !' : 'Copied!') : (lang === 'fr' ? 'Copier' : 'Copy')}</span>
              </button>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              {lang === 'fr'
                ? "Ce lien s'ouvre directement sur tous les téléphones et ordinateurs sans mot de passe."
                : "This link opens directly on all devices without requiring login."}
            </p>
          </div>

          {/* Quick share buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={shareOnWhatsApp}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Partager sur WhatsApp</span>
            </button>

            <button
              onClick={handleCopyBioText}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <Copy className="w-4 h-4 text-stone-600" />
              <span>Texte bio TikTok</span>
            </button>
          </div>

          {/* TikTok instructions note */}
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1 text-amber-900">
              <span>💡 Comment le mettre sur TikTok :</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-stone-700 text-[11px]">
              <li>Ouvrez <strong>TikTok</strong> et allez sur votre profil.</li>
              <li>Touchez <strong>Modifier le profil</strong>.</li>
              <li>Collez ce lien dans le champ <strong>Site web</strong> (ou dans la <strong>Bio</strong>).</li>
              <li>Appuyez sur <strong>Enregistrer</strong>.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
