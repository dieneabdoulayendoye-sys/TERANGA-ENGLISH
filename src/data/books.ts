import { Book } from '../types';

export const SELLER_INFO = {
  name: 'MISTER DIENE',
  fullName: 'Abdoulaye Ndoye Diene',
  role: 'English Teacher & Educational Author',
  phoneDisplay: '+221 77 674 25 07',
  phoneRaw: '221776742507',
  email: 'dieneabdoulayendoye@gmail.com',
  currency: 'FCFA',
  standardPrice: 1000,
  country: 'Sénégal',
};

export function getWhatsAppBuyUrl(book: Book, lang: 'en' | 'fr' = 'en'): string {
  const message = lang === 'fr'
    ? `Bonjour Mister Diene, je souhaite acheter le manuel TERANGA ENGLISH ${book.level} à 1 000 FCFA.`
    : `Hello Mister Diene, I would like to buy the TERANGA ENGLISH ${book.level} manual for 1,000 FCFA.`;
  return `https://wa.me/${SELLER_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralContactUrl(customMessage?: string): string {
  const msg = customMessage || "Bonjour Mister Diene, j'aimerais avoir plus de renseignements sur les manuels scolaires TERANGA ENGLISH.";
  return `https://wa.me/${SELLER_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
}

export function getWhatsAppMultiOrderUrl(items: { book: Book; quantity: number }[], city: string = 'Dakar'): string {
  const filtered = items.filter(i => i.quantity > 0);
  if (filtered.length === 0) return getWhatsAppGeneralContactUrl();

  const total = filtered.reduce((acc, curr) => acc + (curr.quantity * curr.book.price), 0);
  const lines = filtered.map(item => `- ${item.quantity}x ${item.book.title} (${(item.quantity * item.book.price).toLocaleString()} FCFA)`).join('\n');

  const text = `Bonjour Mister Diene,\n\nJe souhaite commander les manuels TERANGA ENGLISH suivants :\n${lines}\n\nTotal : ${total.toLocaleString()} FCFA\nVille de livraison : ${city}\n\nMerci de m'indiquer la marche à suivre pour la livraison.`;
  return `https://wa.me/${SELLER_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export const BOOKS: Book[] = [
  {
    id: '6eme',
    level: '6ème',
    title: 'TERANGA ENGLISH — 6ème',
    subtitle: 'English Manual for 6ème Students',
    subtitleFr: "Manuel d'anglais pour élèves de 6ème",
    price: 1000,
    currency: 'FCFA',
    cycle: 'college',
    badge: 'DÉBUTANT',
    badgeType: 'new',
    color: {
      primary: '#0F5132', // Senegalese deep green
      secondary: '#14532D',
      border: '#15803D',
      spine: '#052E16',
      accent: '#22C55E',
    },
    summary: 'A complete foundational manual for first-year middle school students in Senegal, focusing on basic English grammar, essential everyday vocabulary, and conversational confidence.',
    summaryFr: 'Un manuel fondamental complet pour débuter l’anglais au collège au Sénégal : alphabet, salutations, vie de classe, structures grammaticales de base et vocabulaire du quotidien.',
    keyTopics: ['Meeting & Greeting', 'School Supplies & Classroom Life', 'Family & Home', 'Numbers & Time', 'Simple Present & Verbs'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'Welcome to English Class', focus: 'Greetings, introductions, Senegalese etiquette in English' },
      { unit: 'Unit 2', title: 'My Classroom and School', focus: 'School objects, classroom rules, questions & answers' },
      { unit: 'Unit 3', title: 'Family and Friends', focus: 'Family members, descriptions, possessive adjectives' },
      { unit: 'Unit 4', title: 'Daily Life & Routines', focus: 'Telling time, morning habits, days of the week' },
      { unit: 'Unit 5', title: 'Revision & Progress Check', focus: 'Graded exercises and grammar diagnostic test' },
    ],
  },
  {
    id: '5eme',
    level: '5ème',
    title: 'TERANGA ENGLISH — 5ème',
    subtitle: 'English Manual for 5ème Students',
    subtitleFr: "Manuel d'anglais pour élèves de 5ème",
    price: 1000,
    currency: 'FCFA',
    cycle: 'college',
    badge: 'PROGRESSION',
    color: {
      primary: '#0D9488', // Deep teal
      secondary: '#115E59',
      border: '#0F766E',
      spine: '#134E4A',
      accent: '#2DD4BF',
    },
    summary: 'Strengthening communication and sentence structure with Senegalese cultural stories, sports, markets, and progressive reading exercises.',
    summaryFr: 'Renforcement des bases grammaticales et de l’expression orale : vie quotidienne, marchés sénégalais, sports traditionnels, récits simples et passé.',
    keyTopics: ['Present Continuous & Past Simple', 'Senegalese Markets & Food', 'Sports & Traditional Wrestling (Laamb)', 'Weather & Seasons', 'Narrative Writing'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'Shopping at Sandaga Market', focus: 'Food items, prices in FCFA, polite dialogue' },
      { unit: 'Unit 2', title: 'Sports & Hobbies in Senegal', focus: 'Football, wrestling, expressing preferences' },
      { unit: 'Unit 3', title: 'Yesterday in Dakar', focus: 'Past simple regular and irregular verbs' },
      { unit: 'Unit 4', title: 'Weather & Seasons in West Africa', focus: 'Rainy season, Harmattan, climate terms' },
      { unit: 'Unit 5', title: 'Reading Comprehension', focus: 'Short cultural stories with guided questions' },
    ],
  },
  {
    id: '4eme',
    level: '4ème',
    title: 'TERANGA ENGLISH — 4ème',
    subtitle: 'English Manual for 4ème Students',
    subtitleFr: "Manuel d'anglais pour élèves de 4ème",
    price: 1000,
    currency: 'FCFA',
    cycle: 'college',
    badge: 'INTERMÉDIAIRE',
    color: {
      primary: '#1D4ED8', // Rich blue
      secondary: '#1E40AF',
      border: '#2563EB',
      spine: '#1E3A8A',
      accent: '#60A5FA',
    },
    summary: 'Pre-exam preparation introducing complex tenses, comparative structures, environmental issues, and Senegalese geography.',
    summaryFr: 'Approfondissement linguistique vers le palier intermédiaire : comparatifs, temps composés, textes descriptifs et thématiques citoyennes.',
    keyTopics: ['Comparatives & Superlatives', 'Senegalese Heritage & Tourism', 'Modern Technology & Mobile', 'Protecting the Environment', 'Reading & Debate'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'Discovering Senegal', focus: 'From Gorée to Casamance, geographical descriptions' },
      { unit: 'Unit 2', title: 'Baobabs & Nature Conservation', focus: 'Ecology, modal verbs (must, should, can)' },
      { unit: 'Unit 3', title: 'Youth & Modern Technology', focus: 'Smartphones, internet, future tense with will/going to' },
      { unit: 'Unit 4', title: 'Expressing Opinions & Feelings', focus: 'Agreement, disagreement, polite conversation' },
      { unit: 'Unit 5', title: 'Mock Exam Training', focus: 'Mini-comprehension and translation exercises' },
    ],
  },
  {
    id: '3eme',
    level: '3ème',
    title: 'TERANGA ENGLISH — 3ème',
    subtitle: 'English Manual for 3ème Students',
    subtitleFr: "Manuel d'anglais pour élèves de 3ème",
    price: 1000,
    currency: 'FCFA',
    cycle: 'college',
    highlight: 'BFEM PREPARATION',
    badge: 'BFEM PREP',
    badgeType: 'bfem',
    color: {
      primary: '#B45309', // Warm amber-gold
      secondary: '#92400E',
      border: '#D97706',
      spine: '#78350F',
      accent: '#FBBF24',
    },
    summary: 'The ultimate BFEM preparation manual. Contains past exam analyses, high-yield grammar points, guided essay writing, and real exam simulations with corrections.',
    summaryFr: 'Le manuel de référence pour réussir l’épreuve d’anglais au BFEM ! Méthodologie complète, sujets types décortiqués, grammaire clé et fiches de révision intensive.',
    keyTopics: ['Official BFEM Exam Format', 'Text Comprehension Strategies', 'Guided Composition & Letters', 'Grammar Mastery (Conditionals, Passive, Reported Speech)', 'Practice Exams with Answer Keys'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'BFEM Methodology & Exam Blueprint', focus: 'How the exam is scored, time management, trap avoidance' },
      { unit: 'Unit 2', title: 'Reading Comprehension Mastery', focus: 'Finding evidence, true/false with justification, synonyms' },
      { unit: 'Unit 3', title: 'High-Yield Linguistic Competence', focus: 'Tense consistency, passive voice, question tags, prepositions' },
      { unit: 'Unit 4', title: 'Essay Writing (Guided Composition)', focus: 'Informal/formal letter templates, paragraph cohesion' },
      { unit: 'Unit 5', title: 'Full BFEM Mock Examination Papers', focus: 'Past years papers with detailed step-by-step corrections' },
    ],
  },
  {
    id: '2nde',
    level: '2nde',
    title: 'TERANGA ENGLISH — 2nde',
    subtitle: 'English Manual for Seconde Students',
    subtitleFr: "Manuel d'anglais pour élèves de Seconde",
    price: 1000,
    currency: 'FCFA',
    cycle: 'lycee',
    badge: 'CYCLE LYCÉE',
    color: {
      primary: '#4338CA', // Indigo
      secondary: '#3730A3',
      border: '#4F46E5',
      spine: '#312E81',
      accent: '#818CF8',
    },
    summary: 'Bridges middle school to high school English with rich contemporary topics, critical analysis, expanded academic vocabulary, and structured writing.',
    summaryFr: 'Transition réussie vers le second cycle : consolidation des compétences académiques, textes littéraires et contemporains, argumentation structurée.',
    keyTopics: ['Transition to High School English', 'Science, Innovation & Youth', 'African & World Literature', 'Complex Sentence Syntax', 'Oral Presentation Skills'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'The High School Challenge', focus: 'Academic vocabulary, self-directed study techniques' },
      { unit: 'Unit 2', title: 'African Innovators & Creators', focus: 'Biographical texts, achievements, past perfect tenses' },
      { unit: 'Unit 3', title: 'Media Literacy & News Analysis', focus: 'Fact vs. opinion, headlines, critical thinking' },
      { unit: 'Unit 4', title: 'Narrative & Descriptive Writing', focus: 'Sensory details, linking words, character sketches' },
      { unit: 'Unit 5', title: 'End-of-Term Diagnostic Test', focus: 'Synthesizing texts and vocabulary review' },
    ],
  },
  {
    id: '1ere',
    level: '1ère',
    title: 'TERANGA ENGLISH — 1ère',
    subtitle: 'English Manual for Première Students',
    subtitleFr: "Manuel d'anglais pour élèves de Première",
    price: 1000,
    currency: 'FCFA',
    cycle: 'lycee',
    badge: 'POPULAIRE',
    badgeType: 'popular',
    color: {
      primary: '#9D174D', // Deep berry rose
      secondary: '#831843',
      border: '#BE185D',
      spine: '#500724',
      accent: '#F472B6',
    },
    summary: 'Tailored for Série L, S, and G curricula. Focuses on argumentative essays, social issues, synthesis of unseen texts, and advanced grammatical accuracy.',
    summaryFr: 'Spécifiquement conçu pour les séries L, S et G : dissertation en anglais, analyse critique, grands débats de société et fiches lexicales thématiques.',
    keyTopics: ['Global Citizenship & Pan-Africanism', 'Argumentative Essay Writing', 'Climate & Sustainable Development', 'Complex Connectors & Conditionals', 'Pre-Bac Examination Drills'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'Global Issues & Pan-African Vision', focus: 'Development, brain drain vs return, advanced rhetoric' },
      { unit: 'Unit 2', title: 'Science, Ethics & Environment', focus: 'Genetics, green energy in Africa, formal argumentation' },
      { unit: 'Unit 3', title: 'The Art of the Argumentative Essay', focus: 'Thesis statement, counter-arguments, concluding remarks' },
      { unit: 'Unit 4', title: 'Advanced Grammar in Context', focus: 'Inversion, cleft sentences, subjunctive, reported speech' },
      { unit: 'Unit 5', title: 'Mock Exam Papers (Series L & S)', focus: 'Timed tests with rubrics matching Senegalese inspectors' },
    ],
  },
  {
    id: 'terminale',
    level: 'Terminale',
    title: 'TERANGA ENGLISH — TERMINALE',
    subtitle: 'English Manual for Terminale Students',
    subtitleFr: "Manuel d'anglais pour élèves de Terminale",
    price: 1000,
    currency: 'FCFA',
    cycle: 'lycee',
    highlight: 'BAC SUCCESS',
    badge: 'BAC PREP',
    badgeType: 'bac',
    color: {
      primary: '#991B1B', // Crimson red
      secondary: '#7F1D1D',
      border: '#B91C1C',
      spine: '#450A0A',
      accent: '#F87171',
    },
    summary: 'The comprehensive Baccalauréat Sénégal English preparation manual for all series (L1, L2, S1, S2, G). Includes 10 full-length exams, translation mastery, and essay secrets.',
    summaryFr: 'Le manuel indispensable pour décrocher la mention au Baccalauréat au Sénégal ! Toutes séries (L1, L2, L’, S1, S2, G) : 10 épreuves complètes corrigées, fiches mémo et méthodologie.',
    keyTopics: ['Baccalauréat Blueprint & Grading Rubrics', 'Text Commentary & Critical Questions', 'Translation (Version & Thème)', 'Full-Length Essays (300+ Words)', '10 Solved Official Past Bac Exams'],
    sampleUnits: [
      { unit: 'Unit 1', title: 'Baccalauréat Exam Blueprint & Secrets', focus: 'Time allocation, examiner expectations, bonus point tips' },
      { unit: 'Unit 2', title: 'Text Commentary & Unseen Passages', focus: 'Tone, irony, stylistic devices, deep comprehension' },
      { unit: 'Unit 3', title: 'Translation Mastery for Senegalese Students', focus: 'French-English nuances, idioms, false friends' },
      { unit: 'Unit 4', title: 'Mastering the 300-Word Essay', focus: 'Templates for socio-political, literary and scientific topics' },
      { unit: 'Unit 5', title: '10 Full-Length Solved Baccalaureate Papers', focus: 'Detailed answer keys with mark breakdowns' },
    ],
  },
];
