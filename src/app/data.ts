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
    demoLink: "https://ngerental.vercel.app/",
  },
  {
    id: 2,
    name: "Dev Overflow",
    description: "Stack overflow clone",
    date: "2024-03-27",
    image: "/image/devoverflow.png",
    demoLink: "https://next-js-training-henna.vercel.app/",
  },
  {
    id: 3,
    name: "OpenWChat",
    description: "WhatsApp clone",
    date: "2023-12-30",
    demoLink: "https://github.com/OpenWChat",
    image: "/image/openwchat.png",
  },
  {
    id: 4,
    name: "Shoppe",
    description: "Mern Stack Shop",
    date: "2023-06-12",
    demoLink: "https://github.com/AliSabet81/Shoppe",
    image: "/image/shoppe.png",
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
  { label: "About", link: "/about", icon: "about", newTab: true },
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
