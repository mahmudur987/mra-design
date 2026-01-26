import { StaticImageData } from "next/image";

export interface IGalleryData {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  category: string;
  style: string;
  theme: string;
  colorPalette: string[];
  materials: string[];
  lightingConcept: string;
  furnitureStyle: string;
  spaceFeel: string;
  idealFor: string[];
  tags: string[];
}
