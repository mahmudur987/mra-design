import { StaticImageData } from "next/image";

export interface IProjects {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  category: string;
  style: string;
  theme: string;
  location: string;
  year: string;
  area: string;
  client: {
    name: string;
    type: string;
  };
  package: {
    name: string;
    duration: string;
    budgetRange: string;
  };
  review: {
    rating: number;
    comment: string;
  };
  tags: string[];
}
