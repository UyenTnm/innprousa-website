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
    id: "profectin-1-0",
    slug: "profectein-1-0",
    name: "PROFECTEIN™ 1.0",
    protein: "Core Performance Grade",
    source: "Pea Protein",
    description:
      "A versatile, high-functionality pea protein for broad application across food and beverage systems.",
    benefits: [
      { text: "Balanced texture, solubility & nutrition" },
      { text: "Commercial quantities available" },
      { text: "Reliable across standard formulations" },
    ],
    applications: [
      "Ready-to-Drink",
      "Ready-to-Mix",
      "Meal replacements",
      "Protein beverages",
      "Sports nutrition",
      "Non-dairy (milk, yogurt, ice cream)",
    ],
    image: "/images/products/profectein1-0.png",
  },
  {
    id: "profectin-1-5",
    slug: "profectin-1-5",
    name: "PROFECTEIN™ 1.5",
    protein: "Enhanced Nutritional Grade",
    source: "Pea Protein",
    badge: "COMING SOON",
    description:
      "Same clean taste profile as 1.0, with significantly improved protein quality and amino acid composition.",
    benefits: [
      {
        text: "PDCAAS up to 0.95 – 1.0",
        highlight: true,
      },
      { text: "Enhanced digestibility & amino acid profile" },
      {
        text: "Developed using patented processing",
      },
    ],
    applications: [
      "Ready-to-Drink",
      "Ready-to-Mix",
      "Meal replacements",
      "Protein beverages",
      "Sports nutrition",
      "Non-dairy (milk, yogurt, ice cream)",
    ],
    image: "/images/products/profectein1-5.png",
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
      "Ready-To-Drink Beverages",
      "Protein Drinks",
      "Health Bars",
      "Snack Foods",
    ],
    image: "/images/products/riceImage.jpeg",
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
      "Ready-To-Drink Beverages",
      "Oatmilk Beverages",
      "Coffee Creamers",
      "Dry Blended Beverages",
      "Ice Cream & Gelato",
      "Desserts & Yogurt",
    ],
    image: "/images/products/oat-milk-powder.avif",
  },
];
