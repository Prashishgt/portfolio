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
