import { IGalleryData } from "@/interfaces/galary";
import img1 from "../assets/images/projects/living-room.jpg";
export const galleryData: IGalleryData[] = [
  {
    id: "living-modern-minimal",
    title: "Modern Minimal Living Room",
    description:
      "A concept living room design that emphasizes simplicity, openness, and functionality. Clean lines, neutral colors, and thoughtfully selected furniture create a calm and refined living experience.",
    image: img1,

    // Design Info
    category: "Living Room",
    style: "Modern Minimal",
    theme: "Neutral & Natural",
    colorPalette: ["Beige", "Warm White", "Light Oak"],
    materials: ["Natural Wood", "Linen Fabric", "Matte Finish"],

    // Concept Details
    lightingConcept:
      "Layered lighting with concealed LED strips and soft ambient floor lamps.",
    furnitureStyle: "Low-profile modular furniture with clean silhouettes",
    spaceFeel: "Open, calm, and clutter-free",

    // Intended Use
    idealFor: [
      "Apartments",
      "Modern family homes",
      "Small to medium living spaces",
    ],

    tags: ["Concept", "Minimal", "Modern", "Living Room"],
  },

  {
    id: "kitchen-luxury-modern",
    title: "Luxury Kitchen Concept",
    description:
      "A luxury kitchen concept combining premium materials with a sleek modern layout. Designed for both elegance and efficiency, the space balances aesthetics with practical storage solutions.",
    image: img1,

    category: "Kitchen",
    style: "Luxury Modern",
    theme: "Black, Marble & Gold",
    colorPalette: ["Matte Black", "White Marble", "Gold Accents"],
    materials: ["Marble Countertop", "High-gloss Cabinets", "Brushed Metal"],

    lightingConcept:
      "Integrated under-cabinet lighting with warm accent pendant lights.",
    furnitureStyle:
      "Handle-less cabinetry with built-in appliances and soft-close systems",
    spaceFeel: "Premium, bold, and sophisticated",

    idealFor: ["Luxury apartments", "Villas", "High-end residential kitchens"],

    tags: ["Concept", "Luxury", "Modern", "Kitchen"],
  },

  {
    id: "bedroom-modern-cozy",
    title: "Cozy Bedroom Inspiration",
    description:
      "A bedroom inspiration concept designed to create a warm, restful, and intimate atmosphere. Soft textures and earth-toned colors promote relaxation and comfort.",
    image: img1,

    category: "Bedroom",
    style: "Modern Cozy",
    theme: "Earth Tones",
    colorPalette: ["Warm Brown", "Soft Beige", "Muted Green"],
    materials: ["Textured Fabric", "Wood Veneer", "Soft Upholstery"],

    lightingConcept:
      "Warm bedside lighting with indirect ceiling lights for a cozy ambiance.",
    furnitureStyle:
      "Upholstered bed with minimalist side tables and integrated storage",
    spaceFeel: "Warm, relaxing, and inviting",

    idealFor: ["Master bedrooms", "Guest bedrooms", "Apartment bedrooms"],

    tags: ["Concept", "Bedroom", "Cozy", "Modern"],
  },
];
