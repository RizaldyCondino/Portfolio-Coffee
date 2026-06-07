// constants/data.ts
export const navLinks = ["Home", "About", "Projects",  "Contact"];

import { 
  SiTailwindcss, 
  SiReact, 
  SiTypescript, 
  SiLaravel, 
  SiVuedotjs, 
  SiMysql, 
  

  SiNextdotjs // Added Next.js icon from Simple Icons
} from "react-icons/si";

export const stacksLinks = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Added Next.js
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  
];

export interface Project {
  id: string;
  client: string;
  year: string;
  title: string;
  description: string;
  image: string;
  video?: string;   // ← add this
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    client: "",
    year: "2026 - PRESENT",
    title: "OzCrtz Ecommerce",
    description: "Developed a full-stack eCommerce application that allows users to browse products, manage favorites, add items to a cart, and securely complete purchases through Stripe. The platform includes product variant selection, inventory tracking, user authentication, and an intuitive admin content management system powered by Sanity CMS.",
    video: "/videos/ozcrtz.mp4",
    image: "/Images/OzCrtz.png",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "STRIPE", "SANITY", "CLERK", "NEON/PRISMA"],
    githubUrl: "https://github.com/RizaldyCondino",
    liveDemoUrl: "https://ozcrtz.vercel.app"
  },
  {
    id: "02",
    client: "",
    year: "2026 - PRESENT",
    title: "ShopCrtz Ecommerce",
    description: "Built a production-ready eCommerce platform using Next.js, React, TypeScript, Stripe, and Sanity CMS. Implemented authentication, product catalog management, shopping cart, wishlist, checkout flow, payment processing, and inventory tracking while focusing on performance, scalability, and user experience.",
    image: "/Images/EcommerceSc.png",
    video: "/videos/ShopCrtz.mp4",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "STRIPE", "SANITY", "CLERK", "NEON/PRISMA"],
    githubUrl: "https://github.com/RizaldyCondino",
    liveDemoUrl: "https://shopcrtz.vercel.app"
  },
  {
    id: "03",
    client: "",
    year: "2026 - PRESENT",
    title: "Ecommerce Laravel",
    description: "Developed a full-stack eCommerce platform using Laravel, Vue.js, Inertia.js, and MySQL. Implemented product management, inventory tracking, shopping cart functionality, user authentication, order processing, and Stripe payment integration. Built responsive user interfaces and optimized database queries to ensure a smooth and scalable shopping experience.",
    image: "/Images/ShopEcommerce_Vue.png",
    tags: ["LARAVEL", "VUEJS", "MYSQL", "STRIPE", "INERTIAJS"],
    githubUrl: "https://github.com/RizaldyCondino",
    liveDemoUrl: "https://www.youtube.com/watch?v=7Sop-O-YO8Q"
  }
];