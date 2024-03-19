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

interface FrontendSkill {
  id: number;
  skill: string;
}

export const frontendSkills: FrontendSkill[] = [
  { id: 1, skill: "React" },
  { id: 2, skill: "Next.js" },
  { id: 3, skill: "Redux" },
  { id: 4, skill: "Context" },
  { id: 5, skill: "SSR" },
  { id: 6, skill: "SSG" },
  { id: 7, skill: "Routing" },
  { id: 8, skill: "Responsive" },
  { id: 9, skill: "API" },
  { id: 10, skill: "Styling" },
  { id: 11, skill: "Lazy" },
  { id: 12, skill: "Components" },
];
