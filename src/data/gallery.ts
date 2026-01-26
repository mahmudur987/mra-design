import { IGalleryData } from "@/interfaces/gallery";
import livingRoom from "../assets/images/gallery/living-room.jpg";
import bathroom from "../assets/images/gallery/bathroom.jpg";
import bedroom from "../assets/images/gallery/bed-room.jpg";
import dining from "../assets/images/gallery/dining-room.jpg";
import homeOffice from "../assets/images/gallery/home-office.jpg";
import kitchen from "../assets/images/gallery/kitchen.jpg";

export const LivingRoom = livingRoom;
export const Bathroom = bathroom;
export const Bedroom = bedroom;
export const DiningRoom = dining;
export const HomeOffice = homeOffice;
export const Kitchen = kitchen;

export const galleryData: IGalleryData[] = [
  {
    id: "living-modern-minimal",
    title: "Modern Minimal Living Room",
    description:
      "A concept living room design that emphasizes simplicity, openness, and functionality. Clean lines, neutral colors, and thoughtfully selected furniture create a calm and refined living experience.",
    image: livingRoom,

    category: "Living Room",
    style: "Modern Minimal",
    theme: "Neutral & Natural",
    colorPalette: ["Beige", "Warm White", "Light Oak"],
    materials: ["Natural Wood", "Linen Fabric", "Matte Finish"],

    lightingConcept:
      "Layered lighting with concealed LED strips and soft ambient floor lamps.",
    furnitureStyle: "Low-profile modular furniture with clean silhouettes",
    spaceFeel: "Open, calm, and clutter-free",

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
    image: kitchen,

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
    image: bedroom,

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

  // ➕ NEW DATA BELOW

  {
    id: "dining-elegant-modern",
    title: "Elegant Modern Dining Area",
    description:
      "An elegant dining area concept focused on refined materials and balanced proportions. The space is designed to feel welcoming while maintaining a sophisticated modern character.",
    image: dining,

    category: "Dining Room",
    style: "Elegant Modern",
    theme: "Warm Neutrals & Accents",
    colorPalette: ["Ivory", "Walnut Brown", "Soft Black"],
    materials: ["Solid Wood", "Leather Upholstery", "Stone Surface"],

    lightingConcept:
      "Statement pendant lighting above the dining table with soft ambient wall lights.",
    furnitureStyle:
      "Slim-profile dining table with upholstered chairs and minimal detailing",
    spaceFeel: "Elegant, warm, and balanced",

    idealFor: ["Apartments", "Family homes", "Formal dining spaces"],

    tags: ["Concept", "Dining", "Elegant", "Modern"],
  },

  {
    id: "home-office-modern-functional",
    title: "Modern Functional Home Office",
    description:
      "A modern home office concept designed for productivity and focus. Clean layouts, ergonomic furniture, and controlled lighting create an efficient and distraction-free workspace.",
    image: homeOffice,

    category: "Home Office",
    style: "Modern Functional",
    theme: "Muted & Professional",
    colorPalette: ["Cool Gray", "White", "Natural Oak"],
    materials: ["Engineered Wood", "Metal Frame", "Fabric Panels"],

    lightingConcept:
      "Task-focused desk lighting combined with soft overhead ambient lights.",
    furnitureStyle:
      "Minimal work desk with ergonomic seating and integrated storage units",
    spaceFeel: "Focused, organized, and professional",

    idealFor: ["Remote workers", "Freelancers", "Study rooms"],

    tags: ["Concept", "Office", "Modern", "Functional"],
  },

  {
    id: "bathroom-spa-modern",
    title: "Modern Spa Bathroom",
    description:
      "A spa-inspired modern bathroom concept that prioritizes relaxation and luxury. Natural textures and soft lighting transform the bathroom into a personal retreat.",
    image: bathroom,

    category: "Bathroom",
    style: "Modern Spa",
    theme: "Natural Stone & Soft Light",
    colorPalette: ["Stone Gray", "Warm White", "Soft Taupe"],
    materials: ["Natural Stone", "Matte Ceramic", "Glass Panels"],

    lightingConcept:
      "Indirect LED lighting with warm tones and focused mirror illumination.",
    furnitureStyle:
      "Floating vanity units with integrated storage and seamless finishes",
    spaceFeel: "Calm, refreshing, and luxurious",

    idealFor: ["Luxury homes", "Apartments", "Master bathrooms"],

    tags: ["Concept", "Bathroom", "Spa", "Modern"],
  },
];
