// box position
interface IBoxPosition {
  id: number;
  className: string;
}

export const boxPositions: IBoxPosition[] = [
  { id: 1, className: " -top-3 -left-3 z-20" },
  { id: 2, className: " -top-3 -right-3 z-20" },
  { id: 3, className: " -bottom-3 -left-3 z-20" },
  { id: 4, className: " -bottom-3 -right-3 z-20" },
];

// nav items
interface INavItem {
  id: number;
  href: string;
  label: string;
  hasBorder: boolean;
}

export const navItems: INavItem[] = [
  {
    id: 1,
    href: "/about",
    label: "About //",
    hasBorder: true,
  },

  {
    id: 2,
    href: "/portfolio",
    label: "Portfolio",
    hasBorder: true,
  },

  {
    id: 3,
    href: "#hireMe",
    label: "Hire Me",
    hasBorder: false,
  },
];

interface IFrontendSkill {
  id: number;
  skill: string;
}

export const frontendSkills: IFrontendSkill[] = [
  // 🔵 Frontend Core & Performance
  { id: 1, skill: "React" },
  { id: 2, skill: "Next.js" },
  { id: 3, skill: "SSR / SSG / ISR" },
  { id: 4, skill: "Lazy Loading / Code Splitting" },
  { id: 5, skill: "TypeScript" },
  { id: 6, skill: "Responsive Design" },
  { id: 7, skill: "Accessibility (a11y, aria)" },
  { id: 8, skill: "Client/Server Components" },

  // 🎨 Styling
  { id: 9, skill: "Tailwind CSS" },
  { id: 10, skill: "MUI / Shadcn" },
  { id: 11, skill: "Styled Components" },
  { id: 12, skill: "Framer Motion" },

  // ⚙️ State Management & Forms
  { id: 13, skill: "Redux / Redux Toolkit" },
  { id: 14, skill: "React Context API" },
  { id: 15, skill: "Zustand / Jotai" },
  { id: 16, skill: "React Hook Form / Formik" },

  // 🌐 APIs & Communication
  { id: 17, skill: "REST API" },
  { id: 20, skill: "gRPC" },
  { id: 21, skill: "WebSockets (Socket.IO)" },
  { id: 22, skill: "SWR / React Query" },

  // 🛡️ Auth & Validation
  { id: 23, skill: "NextAuth / Clerk / Better Auth" },
  { id: 24, skill: "JWT / OAuth" },
  { id: 25, skill: "Zod / Yup" },
  { id: 26, skill: "RBAC / Session Handling" },

  // 🧠 Architecture & Best Practices
  { id: 27, skill: "Component-Driven Design" },
  { id: 28, skill: "Atomic Design" },
  { id: 29, skill: "Clean Code / SOLID Principles" },
  { id: 30, skill: "CI/CD Basics (Vercel, GitHub Actions)" },
  { id: 31, skill: "Monorepo" },

  // 🧩 Fullstack / Backend with JS
  { id: 32, skill: "Node.js" },
  { id: 33, skill: "NestJS/Express" },
  { id: 34, skill: "Microservices" },
  { id: 35, skill: "Prisma / TypeORM" },
  { id: 36, skill: "PostgreSQL / MySQL" },
  { id: 37, skill: "Docker" },
];

interface IFooterLinks {
  id: number;
  icon: React.ReactNode;
  href: string;
}

export const FooterLinksItems: IFooterLinks[] = [
  {
    id: 1,
    icon: "Github",
    href: "https://github.com/Prashishgt",
  },
  {
    id: 2,
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/prashish-g-t-a8930525a/",
  },
];

interface ITestimonialItems {
  id: number;
  name: string;
  image: string;
  company: string;
  testimonial: string;
}

export const testimonials: ITestimonialItems[] = [
  {
    id: 1,
    name: "John Doe",
    image: "john.jpg",
    company: "ABC Corporation",
    testimonial:
      "John is an exceptional frontend developer. He consistently delivered high-quality code and exceeded our expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "jane.jpg",
    company: "XYZ Enterprises",
    testimonial:
      "Jane is a talented frontend developer with excellent problem-solving skills. She played a key role in the success of our projects.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "michael.jpg",
    company: "123 Industries",
    testimonial:
      "Michael is a dedicated frontend developer who consistently delivered innovative solutions. His attention to detail is remarkable.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    image: "michael.jpg",
    company: "123 Industries",
    testimonial:
      "Michael is a dedicated frontend developer who consistently delivered innovative solutions. His attention to detail is remarkable.",
  },
];
