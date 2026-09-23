import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookCatalogue } from './components/BookCatalogue';
import { HowToBuy } from './components/HowToBuy';
import { WhyTeranga } from './components/WhyTeranga';
import { AboutTeacher } from './components/AboutTeacher';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookPreviewModal } from './components/BookPreviewModal';
import { MultiOrderModal } from './components/MultiOrderModal';
import { ShareModal } from './components/ShareModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BOOKS } from './data/books';
import { Book, Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [isMultiOrderOpen, setIsMultiOrderOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Cart / Multi-book order state initialized with all 7 books at quantity 0
  const [cartItems, setCartItems] = useState<{ book: Book; quantity: number }[]>(
    BOOKS.map((b) => ({ book: b, quantity: 0 }))
  );

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const handleAddToCart = (book: Book) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.book.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleUpdateQuantity = (bookId: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.book.id === bookId
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems(BOOKS.map((b) => ({ book: b, quantity: 0 })));
  };

  const handleAddFullBundle = () => {
    setCartItems(BOOKS.map((b) => ({ book: b, quantity: 1 })));
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Header */}
      <Header
        currentLang={lang}
        onToggleLang={handleToggleLang}
        onOpenMultiOrder={() => setIsMultiOrderOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Book Catalogue Section with 7 books */}
        <BookCatalogue
          lang={lang}
          onPreviewBook={(book) => setPreviewBook(book)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onOpenMultiOrder={() => setIsMultiOrderOpen(true)}
        />

        {/* How to Buy 3-Step Section */}
        <HowToBuy lang={lang} />

        {/* Why Choose Teranga English 6-Benefits Section */}
        <WhyTeranga lang={lang} />

        {/* Spotlight on Mister Diene */}
        <AboutTeacher lang={lang} />

        {/* Contact Mister Diene Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onOpenShare={() => setIsShareOpen(true)} />

      {/* Interactive Modals */}
      <BookPreviewModal
        book={previewBook}
        lang={lang}
        onClose={() => setPreviewBook(null)}
        onAddToCart={handleAddToCart}
      />

      <MultiOrderModal
        isOpen={isMultiOrderOpen}
        onClose={() => setIsMultiOrderOpen(false)}
        lang={lang}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onAddFullBundle={handleAddFullBundle}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        lang={lang}
      />

      {/* Floating Fast WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
