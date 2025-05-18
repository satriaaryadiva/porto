/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #5BBFFE
}

*/

export interface IProjectsData {
  id: number;
  name: string;
  description: string;
  date: string;
  tools: string;
  demoLink: string;
  image : string ;
}

export const projectsData: IProjectsData[] = [
  {
    id: 1,
    name: "Ngerental",
    description: " Car Rental App ",
    date: "2024-04-15",
    image: "/image/Ngerental.jpeg",
    tools: "Next.js, Tailwind CSS , Redux Toolkit",
    demoLink: "https://ngerental.vercel.app/",
  },
  {
    id: 2,
    name: "Lovague",
    description: "e-commerce app",
    date: "2024-05-27",
    image: "/image/lovague.jpg",
    tools: "Next.js, Tailwind CSS , Redux Toolkit",
    demoLink: "https://lovague.vercel.app/",
  },
  {
    id: 3,
    name: "Webziu",
    description: "Company profile website",
    tools: "Next.js, Tailwind CSS",
    date: "2024-12-30",
    demoLink: "https://webziu.vercel.app/",
    image: "/image/webziu.jpg",
  },
  {
    id: 4,
    name: "Wedding Invitation",
    description: "customizable wedding invitation",
    tools: "Next.js, Tailwind CSS",
    date: "2025-05-10",
    demoLink: "https://satriafania.vercel.app/undangan/20%",
    image: "/image/wedding.jpg",
  },
  
];

export interface IBtnList {
  label: string;
  link?: string | any; 
  icon: string;
  newTab: boolean;
}

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "Tentang", link: "/about", icon: "about", newTab: true },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/satriaaryadiva",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/satria-arya-diva-392428219/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram/satriaaryadiva/",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
