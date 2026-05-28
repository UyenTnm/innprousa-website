type Benefits = {
  text: string;
  highlight?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  protein: string;
  source: string;
  description: string;
  benefits: Benefits[];
  applications: string[];
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "profectein-1-0",
    slug: "profectein-1-0",
    name: "PROFECTEIN™ 1.0",
    protein: "Core Performance Grade",
    source: "Pea Protein",
    description:
      "A highly versatile functional pea protein for broad applications across food and beverage systems, providing a one-to-one replacement for whey protein and dairy protein.",
    benefits: [
      { text: "Balanced texture, solubility, and nutritional functionality" },
      { text: "One-to-one whey protein replacement" },
      { text: "Reliable across standard formulations" },
    ],
    applications: [
      "Extrusion",
      "Whey protein replacement",

      "Dairy protein replacement",

      "Meal replacements",
      "Ready-to-Drink",
      "Ready-to-Mix",
      "Protein beverages",
      "Sports nutrition",
      "Non-dairy (milk, yogurt, ice cream)",
    ],
    image: "/images/products/profectein1-0.webp",
  },
  {
    id: "profectein-1-5",
    slug: "profectin-1-5",
    name: "PROFECTEIN™ 1.5",
    protein: "Enhanced Nutritional Grade",
    source: "Pea Protein",
    badge: "COMING SOON",
    description:
      "Enhanced nutritional pea protein engineered for improved amino acid composition, digestibility, and advanced functional performance.",
    benefits: [
      {
        text: "PDCAAS up to 0.95 – 1.0",
        highlight: true,
      },
      { text: "Enhanced digestibility & amino acid profile" },
      {
        text: "Produced using patented processing",
      },
    ],
    applications: [
      "Extrusion",
      "Whey protein replacement",

      "Dairy protein replacement",

      "Meal replacements",
      "Ready-to-Drink",
      "Ready-to-Mix",
      "Protein beverages",
      "Sports nutrition",
      "Non-dairy (milk, yogurt, ice cream)",
    ],
    image: "/images/products/profectein1-5.webp",
  },
  {
    id: "rice-protein-sg2",
    slug: "rice-protein-sg2",
    name: "Rice Protein SG-II",
    protein: "Specialty Rice Protein",
    source: "Rice",
    description:
      "Specialty rice protein engineered for suspension, solubility, improved texture, and enhanced drinkability.",
    benefits: [
      { text: "Designed for beverage systems and nutrition bars" },
      { text: "Suitable for allergen-sensitive formulations" },
    ],
    applications: [
      "Extrusion",

      "Ready-To-Mix",

      "Ready-To-Drink Beverages",
      "Protein Drinks",
      "Health Bars",
      "Snack Foods",
      "Beverages",
    ],
    image: "/images/products/riceImage.webp",
  },
  {
    id: "oatmilk",
    slug: "oatmilk",
    name: "Oat Milk Powder",
    protein: "Non-Dairy Oat Base",
    source: "Oat",
    description:
      "Non-dairy oat powders produced through enzymatic processing to preserve nutritional integrity and functional performance.",
    benefits: [
      { text: "Organic & gluten-free" },
      { text: "Adjustable sugar (<3% to >20%)" },
      { text: "High solubility & stability" },
    ],
    applications: [
      "Ready-To-Drink",
      "Ready-To-Mix",
      "Oatmilk Beverages",
      "Coffee",
      "Extrusion",
      "Dry Blended Beverages",
      "Ice Cream & Gelato",
      "Desserts & Yogurt",
    ],
    image: "/images/products/oat-milk-powder.webp",
  },
];
