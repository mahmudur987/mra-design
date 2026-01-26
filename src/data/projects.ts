import livingRoom from "../assets/images/projects/living-room.jpg";
import kitchen from "../assets/images/projects/kitchen.jpg";
import office from "../assets/images/projects/office..jpg";
import bedroom from "../assets/images/projects/bedroom.jpg";
import dining from "../assets/images/projects/dining.jpg";
import bathroom from "../assets/images/projects/bathroom.jpg";
import { IProjects } from "@/interfaces/projects";

export const projects: IProjects[] = [
  {
    title: "Modern Living Room",
    subtitle: "Residential Interior",
    description:
      "A contemporary living room designed to maximize natural light, featuring clean lines, neutral tones, and custom furniture for a calm yet elegant atmosphere.",
    image: livingRoom,

    // Project Meta
    category: "Residential",
    style: "Modern Contemporary",
    theme: "Neutral Luxury",
    location: "Dhaka, Bangladesh",
    year: "2024",
    area: "420 sq ft",

    // Client Info
    client: {
      name: "Mr. Ahmed Rahman",
      type: "Private Residence",
    },

    // Package Info
    package: {
      name: "Premium Interior Package",
      duration: "6 Weeks",
      budgetRange: "$8,000 – $10,000",
    },

    // Client Review
    review: {
      rating: 5,
      comment:
        "The team perfectly captured our vision. The space feels open, elegant, and incredibly comfortable. Exceptional attention to detail.",
    },

    tags: ["Living Room", "Modern", "Minimal", "Natural Light"],
  },

  {
    title: "Luxury Kitchen Design",
    subtitle: "Modular Kitchen",
    description:
      "A high-end modular kitchen combining functionality with luxury finishes, premium cabinetry, and optimized storage for everyday efficiency.",
    image: kitchen,

    category: "Residential",
    style: "Luxury Minimal",
    theme: "Matte Black & Wood",
    location: "Gulshan, Dhaka",
    year: "2024",
    area: "280 sq ft",

    client: {
      name: "Ms. Farzana Islam",
      type: "Apartment Owner",
    },

    package: {
      name: "Luxury Kitchen Package",
      duration: "4 Weeks",
      budgetRange: "$6,000 – $8,000",
    },

    review: {
      rating: 4.8,
      comment:
        "Beautiful design and excellent craftsmanship. The kitchen is both stylish and extremely functional.",
    },

    tags: ["Kitchen", "Luxury", "Minimal", "Storage"],
  },

  {
    title: "Corporate Office Workspace",
    subtitle: "Commercial Interior",
    description:
      "A modern office workspace designed to boost productivity, featuring ergonomic layouts, collaborative zones, and a refined professional aesthetic.",
    image: office,

    category: "Commercial",
    style: "Modern Corporate",
    theme: "Minimal Grey & Blue",
    location: "Banani, Dhaka",
    year: "2023",
    area: "1,200 sq ft",

    client: {
      name: "NovaTech Solutions Ltd.",
      type: "Corporate Office",
    },

    package: {
      name: "Commercial Fit-Out Package",
      duration: "10 Weeks",
      budgetRange: "$20,000 – $25,000",
    },

    review: {
      rating: 5,
      comment:
        "Professional execution from start to finish. Our workspace now truly reflects our brand and culture.",
    },

    tags: ["Office", "Corporate", "Workspace", "Productivity"],
  },

  {
    title: "Bedroom Retreat",
    subtitle: "Residential Interior",
    description:
      "A warm and relaxing bedroom design with soft textures, ambient lighting, and a soothing color palette for a peaceful retreat.",
    image: bedroom,

    category: "Residential",
    style: "Modern Cozy",
    theme: "Warm Earth Tones",
    location: "Uttara, Dhaka",
    year: "2023",
    area: "350 sq ft",

    client: {
      name: "Mr. & Mrs. Hossain",
      type: "Private Residence",
    },

    package: {
      name: "Standard Interior Package",
      duration: "5 Weeks",
      budgetRange: "$5,000 – $6,500",
    },

    review: {
      rating: 4.9,
      comment:
        "The bedroom feels calm and luxurious. Every detail was thoughtfully designed. Highly recommended.",
    },

    tags: ["Bedroom", "Cozy", "Lighting", "Relaxation"],
  },

  {
    title: "Elegant Dining Area",
    subtitle: "Residential Interior",
    description:
      "An elegant dining space crafted with balanced proportions, refined finishes, and ambient lighting to enhance the dining experience.",
    image: dining,

    category: "Residential",
    style: "Contemporary Elegant",
    theme: "Soft Gold Accents",
    location: "Dhanmondi, Dhaka",
    year: "2024",
    area: "300 sq ft",

    client: {
      name: "Khan Family",
      type: "Private Residence",
    },

    package: {
      name: "Premium Interior Package",
      duration: "4 Weeks",
      budgetRange: "$6,500 – $8,000",
    },

    review: {
      rating: 5,
      comment:
        "An absolutely stunning dining space. The lighting and materials elevate the entire home.",
    },

    tags: ["Dining", "Elegant", "Lighting", "Contemporary"],
  },

  {
    title: "Spa-Inspired Bathroom",
    subtitle: "Luxury Bathroom",
    description:
      "A spa-inspired bathroom featuring modern fixtures, natural textures, and a calming color palette to create a luxurious everyday experience.",
    image: bathroom,

    category: "Residential",
    style: "Modern Spa",
    theme: "Stone & Wood",
    location: "Bashundhara, Dhaka",
    year: "2023",
    area: "180 sq ft",

    client: {
      name: "Ms. Nusrat Jahan",
      type: "Apartment Owner",
    },

    package: {
      name: "Luxury Bathroom Package",
      duration: "3 Weeks",
      budgetRange: "$4,000 – $5,500",
    },

    review: {
      rating: 4.7,
      comment:
        "The bathroom feels like a personal spa. Clean execution and premium finishes throughout.",
    },

    tags: ["Bathroom", "Spa", "Luxury", "Modern"],
  },
];
