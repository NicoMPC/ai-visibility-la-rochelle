// Données saisies manuellement à partir d'un relevé de recherches réelles
// pour "Agence Principale" (La Rochelle). Aucun score, aucune position
// précise inventée : uniquement présence / absence par requête et la
// liste des agences observées dans les résultats.

export type ApStatus = "present" | "unclear" | "absent";

export interface QueryRow {
  id: number;
  query: string;
  apStatus: ApStatus;
  agencies: string[]; // ordre tel que fourni dans le relevé
}

export const queries: QueryRow[] = [
  {
    id: 1,
    query: "estimation appartement La Rochelle",
    apStatus: "present",
    agencies: ["Agence Principale", "Nestenn", "Welcome to Immo", "Century 21", "La Rochelle French Properties"],
  },
  {
    id: 2,
    query: "estimation immobilière La Rochelle",
    apStatus: "present",
    agencies: ["Agence Principale", "Nestenn", "Welcome to Immo", "Century 21", "Sotheby's", "AD Immobilier"],
  },
  {
    id: 3,
    query: "faire estimer appartement La Rochelle",
    apStatus: "present",
    agencies: ["Agence Principale", "Nestenn", "l'Adresse", "Welcome to Immo"],
  },
  {
    id: 4,
    query: "estimation gratuite appartement La Rochelle",
    apStatus: "present",
    agencies: ["Agence Principale", "Welcome to Immo", "Century 21", "l'Adresse", "Laforêt"],
  },
  {
    id: 5,
    query: "quelle agence pour vendre mon appartement à La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Nestenn", "Laforêt", "Agence Principale"],
  },
  {
    id: 6,
    query: "quelle agence immobilière choisir pour vendre à La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn", "Laforêt"],
  },
  {
    id: 7,
    query: "meilleure agence immobilière pour vendre à La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Immob'Iles", "Nestenn"],
  },
  {
    id: 8,
    query: "agence immobilière spécialisée vente appartement La Rochelle",
    apStatus: "unclear",
    agencies: ["Nestenn", "Orpi", "Human Immobilier", "Agence Principale"],
  },
  {
    id: 9,
    query: "agence immobilière La Rochelle avis vendeur",
    apStatus: "unclear",
    agencies: ["Guy Hoquet", "Immob'Iles", "Human Immobilier", "Orpi", "Foncia"],
  },
  {
    id: 10,
    query: "agence immobilière La Rochelle estimation gratuite",
    apStatus: "present",
    agencies: ["Agence Principale", "Nestenn", "Welcome to Immo", "Laforêt", "Century 21"],
  },
  {
    id: 11,
    query: "vendre rapidement appartement La Rochelle agence",
    apStatus: "unclear",
    agencies: ["Nestenn", "Orpi", "Human Immobilier", "Guy Hoquet"],
  },
  {
    id: 12,
    query: "vendre appartement La Rochelle",
    apStatus: "unclear",
    agencies: ["Nestenn", "Orpi", "Human Immobilier", "Laforêt", "Agence Principale"],
  },
  {
    id: 13,
    query: "vendre maison La Rochelle agence",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Nestenn", "Laforêt", "AD Immobilier"],
  },
  {
    id: 14,
    query: "vendre appartement Les Minimes La Rochelle",
    apStatus: "present",
    agencies: ["Orpi", "Foncia", "Agence Principale", "Human Immobilier"],
  },
  {
    id: 15,
    query: "vendre appartement La Genette La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Agence Principale", "Foncia"],
  },
  {
    id: 16,
    query: "vendre appartement Ville en Bois La Rochelle",
    apStatus: "present",
    agencies: ["Agence Principale", "Orpi", "Human Immobilier"],
  },
  {
    id: 17,
    query: "vendre appartement centre-ville La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Century 21", "Human Immobilier", "Laforêt", "Agence Principale"],
  },
  {
    id: 18,
    query: "vendre appartement Vieux-Port La Rochelle",
    apStatus: "unclear",
    agencies: ["Century 21", "Orpi", "Human Immobilier", "Foncia", "Agence Principale"],
  },
  {
    id: 19,
    query: "quelle agence connaît le mieux le marché immobilier rochelais",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn", "Agence Principale"],
  },
  {
    id: 20,
    query: "5 agences immobilières à contacter pour vendre à La Rochelle",
    apStatus: "unclear",
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn", "Laforêt"],
  },
];

export const AGENCE_PRINCIPALE = "Agence Principale";

// Agences retenues pour la heatmap (fréquence >= 4 apparitions sur le relevé)
export const HEATMAP_AGENCIES = [
  "Agence Principale",
  "Orpi",
  "Human Immobilier",
  "Nestenn",
  "Laforêt",
  "Guy Hoquet",
  "Century 21",
  "Foncia",
  "Welcome to Immo",
];
