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
    href: "/hireMe",
    label: "Hire Me",
    hasBorder: false,
  },
];

interface IFrontendSkill {
  id: number;
  skill: string;
}

export const frontendSkills: IFrontendSkill[] = [
  { id: 1, skill: "React" },
  { id: 2, skill: "Next.js" },
  { id: 3, skill: "Redux" },
  { id: 4, skill: "Context" },
  { id: 5, skill: "SSR" },
  { id: 6, skill: "SSG" },
  { id: 8, skill: "Responsive" },
  { id: 9, skill: "API" },
  { id: 10, skill: "Tailwind" },
  { id: 11, skill: "MUI" },
  { id: 12, skill: "Styled" },
  { id: 13, skill: "Lazy" },
  { id: 14, skill: "Components" },
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
