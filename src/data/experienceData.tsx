// Types you can reuse elsewhere

import tcsIcon from "../iconsProj/tcs_icon.png";
import homeAssistantIcon from "../iconsProj/smart-house.png";

// TCS-Paints images
import tcs1 from "../projectPics/TCS-Paints/1.png";
import tcs2 from "../projectPics/TCS-Paints/2.png";
import tcsForm from "../projectPics/TCS-Paints/form.png";

// TCS-Paints videos
import estimateVideo from "../videos/EstimateCalculation.mp4";
import sliderVideo from "../videos/image_slider.mp4";
import navbarVideo from "../videos/navbarAnimation.mp4";
import responsiveVideo from "../videos/responsivness.mp4";
export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  start: string; // "Jun 2024"
  end: string; // "Present" or "Aug 2024"
  location?: string; // "Los Angeles, CA"
  logo: string; // path to logo image
  tech: string[]; // ["React", "TypeScript", "Postgres"]
  bullets: string[]; // quantifiable achievements
  gallery?: MediaItem[]; // optional extra screenshots/videos for the Modal
  link?: string; // company/site link
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TCS Paints",
    role: "Full-Stack Developer",
    start: "Feb 2024",
    end: "Present",
    location: "Los Angeles, CA",
    logo: tcsIcon,
    tech: [
      "React",
      "TypeScript",
      "Three.js",
      "Node.js/Express",
      "ASP.NET 8",
      "Semantic Kernel",
      "PostgreSQL",
      "Supabase",
      "Python",
      "Gemini AI",
      "Docker",
      "Railway",
      "Vercel",
    ],
    bullets: [
      "Architected full-stack AI painting platform with 3 microservices: React frontend, Node.js API, ASP.NET AI agent.",
      "Built AI-powered chat system with Semantic Kernel orchestrating paint estimation and image recoloring tools.",
      "Implemented real-time image processing pipeline: upload → Gemini AI → Supabase storage → chat display.",
      "Deployed containerized services across Railway (Node.js + PostgreSQL) and Render (ASP.NET) with CORS-secured APIs.",
      "Created responsive gallery with before/after cards and lead capture flow; +38% conversion rate.",
      "Integrated email automation with API-based providers to avoid SMTP port blocks in production.",
    ],
    gallery: [
      { type: "video", src: estimateVideo, alt: "Estimate Calculation Demo" },
      { type: "video", src: sliderVideo, alt: "Image Slider Demo" },
      { type: "video", src: navbarVideo, alt: "Navbar Animation Demo" },
      { type: "video", src: responsiveVideo, alt: "Responsive Design Demo" },
      { type: "image", src: tcs1, alt: "TCS Paints Gallery" },
      { type: "image", src: tcs2, alt: "TCS Paints Interface" },
      { type: "image", src: tcsForm, alt: "TCS Paints Contact Form" },
    ],
    link: "https://tcs-paints.vercel.app/",
  },
  // {
  //   id: 2,
  //   company: "Pine Smart Solutions",
  //   role: "Smart Home Developer",
  //   start: "Nov 2023",
  //   end: "Present",
  //   location: "Toronto, ON",
  //   logo: homeAssistantIcon,
  //   tech: ["Home Assistant", "Zigbee/Z-Wave", "Python", "Docker"],
  //   bullets: [
  //     "Deployed YAML-mode dashboards; onboarded 10+ devices (Somfy, DoorBird, Zigbee).",
  //     "Automated scene controls; cut average setup time per home by ~25%.",
  //     "Documented client hand-off playbooks; reduced support tickets by ~30%.",
  //   ],
  //   gallery: [], // No gallery images available
  // },
];
