import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SELLER_INFO, getWhatsAppGeneralContactUrl } from '../data/books';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contact rapide WhatsApp" className="fixed bottom-5 right-5 z-30">
      <a
        href={getWhatsAppGeneralContactUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
        aria-label="Discuter avec Mister Diene sur WhatsApp"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
        </span>
        <span className="text-xs sm:text-sm font-bold pr-1">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
