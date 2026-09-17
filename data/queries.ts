// Relevé manuel de recherches réelles pour "Agence Principale" (La Rochelle).
// Chaque requête est marquée OUI/NON selon que l'agence apparaît ou non
// dans les résultats observés. Aucun score, aucune position inventée.

export interface QueryRow {
  id: number;
  query: string;
  visible: boolean; // OUI = Agence Principale apparaît dans les résultats observés
  agencies: string[]; // autres acteurs visibles pour cette requête
}

export const queries: QueryRow[] = [
  {
    id: 1,
    query: "estimation appartement La Rochelle",
    visible: true,
    agencies: ["Nestenn", "Orpi", "Welcome to Immo", "autres acteurs de l'estimation"],
  },
  {
    id: 2,
    query: "estimation immobilière La Rochelle",
    visible: true,
    agencies: ["Nestenn", "Orpi", "Welcome to Immo", "MeilleursAgents"],
  },
  {
    id: 3,
    query: "faire estimer appartement La Rochelle",
    visible: true,
    agencies: ["Nestenn", "Orpi", "Welcome to Immo"],
  },
  {
    id: 4,
    query: "estimation gratuite appartement La Rochelle",
    visible: true,
    agencies: ["Welcome to Immo", "Orpi", "Laforêt", "Century 21"],
  },
  {
    id: 5,
    query: "quelle agence pour vendre mon appartement à La Rochelle",
    visible: true,
    agencies: ["Orpi", "Human Immobilier", "Nestenn", "Laforêt"],
  },
  {
    id: 6,
    query: "quelle agence immobilière choisir pour vendre à La Rochelle",
    visible: false,
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn", "Laforêt"],
  },
  {
    id: 7,
    query: "meilleure agence immobilière pour vendre à La Rochelle",
    visible: false,
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Immob'Iles", "Nestenn"],
  },
  {
    id: 8,
    query: "agence immobilière spécialisée vente appartement La Rochelle",
    visible: true,
    agencies: ["Orpi", "Nestenn", "Human Immobilier"],
  },
  {
    id: 9,
    query: "agence immobilière La Rochelle avis vendeur",
    visible: false,
    agencies: ["Guy Hoquet", "Immob'Iles", "Orpi", "Foncia", "Human Immobilier"],
  },
  {
    id: 10,
    query: "agence immobilière La Rochelle estimation gratuite",
    visible: true,
    agencies: ["Orpi", "Nestenn", "Welcome to Immo", "Laforêt"],
  },
  {
    id: 11,
    query: "vendre rapidement appartement La Rochelle agence",
    visible: false,
    agencies: ["Orpi", "Nestenn", "Human Immobilier", "Guy Hoquet"],
  },
  {
    id: 12,
    query: "vendre appartement La Rochelle",
    visible: true,
    agencies: ["Orpi", "Nestenn", "Human Immobilier", "Laforêt"],
  },
  {
    id: 13,
    query: "vendre maison La Rochelle agence",
    visible: false,
    agencies: ["Orpi", "Human Immobilier", "Nestenn", "Laforêt", "AD Immobilier"],
  },
  {
    id: 14,
    query: "vendre appartement Les Minimes La Rochelle",
    visible: true,
    agencies: ["Orpi", "Foncia", "Human Immobilier"],
  },
  {
    id: 15,
    query: "vendre appartement La Genette La Rochelle",
    visible: true,
    agencies: ["Orpi", "Human Immobilier", "Foncia"],
  },
  {
    id: 16,
    query: "vendre appartement Ville en Bois La Rochelle",
    visible: true,
    agencies: ["Orpi", "Human Immobilier"],
  },
  {
    id: 17,
    query: "vendre appartement centre-ville La Rochelle",
    visible: true,
    agencies: ["Orpi", "Century 21", "Human Immobilier", "Laforêt"],
  },
  {
    id: 18,
    query: "vendre appartement Vieux-Port La Rochelle",
    visible: true,
    agencies: ["Orpi", "Century 21", "Human Immobilier", "Foncia"],
  },
  {
    id: 19,
    query: "quelle agence connaît le mieux le marché immobilier rochelais",
    visible: true,
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn"],
  },
  {
    id: 20,
    query: "5 agences immobilières à contacter pour vendre à La Rochelle",
    visible: false,
    agencies: ["Orpi", "Human Immobilier", "Guy Hoquet", "Nestenn", "Laforêt"],
  },
];
