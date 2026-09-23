import React, { useState } from 'react';
import { X, MessageCircle, Plus, Minus, Trash2, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import { Book, Language } from '../types';
import { BOOKS, SELLER_INFO, getWhatsAppMultiOrderUrl } from '../data/books';

interface MultiOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  cartItems: { book: Book; quantity: number }[];
  onUpdateQuantity: (bookId: string, delta: number) => void;
  onClearCart: () => void;
  onAddFullBundle: () => void;
}

export const MultiOrderModal: React.FC<MultiOrderModalProps> = ({
  isOpen,
  onClose,
  lang,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onAddFullBundle,
}) => {
  if (!isOpen) return null;

  const [deliveryCity, setDeliveryCity] = useState('Dakar');
  const [parentName, setParentName] = useState('');

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.book.price, 0);

  const handleSendOrder = () => {
    if (totalQuantity === 0) return;
    const url = getWhatsAppMultiOrderUrl(cartItems, `${deliveryCity}${parentName ? ` (Client : ${parentName})` : ''}`);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full senegal-stripe" />

        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display text-slate-900">
                {lang === 'fr' ? 'Commande Multiple / Pack Scolaire' : 'Batch Order / School Pack'}
              </h3>
              <p className="text-xs text-stone-500">
                {lang === 'fr'
                  ? 'Commandez plusieurs niveaux avec livraison groupée'
                  : 'Order multiple grades for combined delivery'}
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

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Quick Bundle Button */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black uppercase text-amber-900">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pack Intégral Sénégal (7 Manuels)</span>
              </div>
              <p className="text-xs text-amber-800 mt-0.5">
                De la 6ème à la Terminale — 7 livres pour 7 000 FCFA
              </p>
            </div>
            <button
              onClick={onAddFullBundle}
              className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              + Ajouter le Pack Complet
            </button>
          </div>

          {/* List of 7 Books with Steppers */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {lang === 'fr' ? 'Sélectionnez les quantités' : 'Select Quantities'}
            </div>

            {BOOKS.map((book) => {
              const currentItem = cartItems.find((item) => item.book.id === book.id);
              const qty = currentItem ? currentItem.quantity : 0;

              return (
                <div
                  key={book.id}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                    qty > 0 ? 'bg-emerald-50/50 border-emerald-300' : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: book.color.primary }}
                      className="w-7 h-7 rounded text-[10px] font-bold text-white flex items-center justify-center shrink-0"
                    >
                      {book.level.slice(0, 3)}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{book.title}</div>
                      <div className="text-xs text-stone-500">{book.price.toLocaleString()} FCFA</div>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(book.id, -1)}
                      disabled={qty === 0}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-200 text-stone-700 flex items-center justify-center hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-7 text-center font-bold text-sm tabular-nums text-slate-900">
                      {qty}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(book.id, 1)}
                      className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery & Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                {lang === 'fr' ? 'Votre Nom / Établissement' : 'Your Name / School'}
              </label>
              <input
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Ex : Famille Diallo"
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                {lang === 'fr' ? 'Ville de livraison' : 'Delivery City'}
              </label>
              <select
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
              >
                <option value="Dakar">Dakar (Plateau, Almadies, Parcelles, Guédiawaye...)</option>
                <option value="Pikine / Guédiawaye / Keur Massar">Pikine / Guédiawaye / Keur Massar</option>
                <option value="Rufisque / Diamniadio">Rufisque / Diamniadio</option>
                <option value="Thiès">Thiès</option>
                <option value="Mbour / Petite Côte">Mbour / Petite Côte</option>
                <option value="Saint-Louis">Saint-Louis</option>
                <option value="Kaolack">Kaolack</option>
                <option value="Ziguinchor">Ziguinchor</option>
                <option value="Touba / Mbacké">Touba / Mbacké</option>
                <option value="Autre région du Sénégal">Autre région du Sénégal</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-stone-50 border-t border-stone-200">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs text-stone-500 font-medium">
                {totalQuantity} {totalQuantity > 1 ? 'manuels sélectionnés' : 'manuel sélectionné'}
              </span>
              {totalQuantity > 0 && (
                <button
                  onClick={onClearCart}
                  className="ml-3 text-xs text-rose-600 hover:text-rose-700 underline font-medium cursor-pointer"
                >
                  {lang === 'fr' ? 'Réinitialiser' : 'Reset'}
                </button>
              )}
            </div>

            <div className="text-right">
              <span className="text-xs text-stone-500 mr-2">Total :</span>
              <span className="text-2xl font-black font-display text-emerald-800 tabular-nums">
                {totalPrice.toLocaleString()} FCFA
              </span>
            </div>
          </div>

          <button
            onClick={handleSendOrder}
            disabled={totalQuantity === 0}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>
              {lang === 'fr'
                ? `Commander ${totalQuantity} manuel(s) sur WhatsApp`
                : `Order ${totalQuantity} Manual(s) via WhatsApp`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
