export interface Book {
  id: string;
  level: string; // "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"
  title: string;
  subtitle: string;
  subtitleFr: string;
  price: number; // 1000
  currency: string; // "FCFA"
  cycle: 'college' | 'lycee';
  highlight?: string; // e.g. "BFEM PREPARATION"
  badge?: string;
  badgeType?: 'bfem' | 'bac' | 'popular' | 'new';
  color: {
    primary: string;
    secondary: string;
    border: string;
    spine: string;
    accent: string;
  };
  summary: string;
  summaryFr: string;
  keyTopics: string[];
  sampleUnits: {
    unit: string;
    title: string;
    focus: string;
  }[];
}

export type Language = 'en' | 'fr';

export interface OrderItem {
  bookId: string;
  quantity: number;
}
