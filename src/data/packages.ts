export const packages = [
  {
    name: "Basic Interior",
    price: "Starting from $3,500",
    duration: "3–4 Weeks",
    features: [
      "Space planning",
      "Basic material selection",
      "2D layout",
      "Standard finishes",
    ],
  },
  {
    name: "Premium Interior",
    price: "Starting from $6,500",
    duration: "5–6 Weeks",
    features: [
      "Custom design concept",
      "3D visualization",
      "Premium materials",
      "Lighting design",
    ],
    popular: true,
  },
  {
    name: "Luxury Interior",
    price: "Starting from $10,000",
    duration: "8–10 Weeks",
    features: [
      "End-to-end design & execution",
      "High-end materials",
      "Custom furniture",
      "Dedicated project manager",
    ],
  },
];

export type IPackage = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
};
