import {
  PhoneCall,
  Lightbulb,
  Layers3,
  Hammer,
  CheckCircle,
} from "lucide-react";

export const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We understand your requirements, lifestyle, budget, and timeline through a detailed discussion.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Concept & Space Planning",
    description:
      "Our designers create layout plans and concepts that align with your vision and functional needs.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "3D Design & Visualization",
    description:
      "Photorealistic 3D designs help you visualize materials, lighting, and finishes before execution.",
    icon: Layers3,
  },
  {
    step: "04",
    title: "Execution & Supervision",
    description:
      "We manage on-site execution, vendors, and quality checks to ensure flawless implementation.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Final Handover",
    description:
      "After final inspection, we hand over your completed space, ready to live or work in.",
    icon: CheckCircle,
  },
];
