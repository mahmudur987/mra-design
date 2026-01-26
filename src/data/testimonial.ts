import img1 from "../assets/images/avater/male (1).jpg";
import img2 from "../assets/images/avater/male (2).jpg";
import img3 from "../assets/images/avater/male (3).jpg";
import img4 from "../assets/images/avater/male (4).jpg";
import femaleImage1 from "../assets/images/avater/female (1).jpg";
import femaleImage2 from "../assets/images/avater/female (2).jpg";
import {
  Bedroom,
  DiningRoom,
  HomeOffice,
  Kitchen,
  LivingRoom,
} from "./gallery";

const testimonials = [
  {
    name: "Ahmed Rahman",
    designation: "Homeowner · Gulshan",
    text: "Professional, creative, and reliable. Our home looks stunning.",
    avatar: img1,
    projectImage: LivingRoom,
  },
  {
    name: "Farzana Islam",
    designation: "Founder · Boutique Studio",
    text: "They understood our vision perfectly and delivered beyond expectations.",
    avatar: femaleImage1,
    projectImage: HomeOffice,
  },
  {
    name: "Tanvir Hossain",
    designation: "Apartment Owner · Dhanmondi",
    text: "Clear communication, premium materials, and flawless execution.",
    avatar: img2,
    projectImage: Kitchen,
  },
  {
    name: "Nusrat Jahan",
    designation: "Entrepreneur",
    text: "The entire experience felt effortless. Truly a high-end service.",
    avatar: femaleImage2,
    projectImage: Bedroom,
  },
  {
    name: "Imran Chowdhury",
    designation: "Managing Director · Tech Firm",
    text: "Attention to detail and professionalism were exceptional.",
    avatar: img3,
    projectImage: DiningRoom,
  },
];

export default testimonials;
