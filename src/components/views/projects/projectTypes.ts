import { ReactNode } from "react";

export interface ProjectsSidePaneProps {
  technologies: Array<{ name: string; icon: ReactNode }>;
}

export interface ProjectCardProps {
  id: number;
  name: string;
  url: string;
  github: string;
  demo: string;
  description: string;
  image: string;
  techs: Array<string>;
}

export interface Technologies {
  [key: string]: ReactNode;
}
export interface ProjectsMainProps {
  projects: Array<{
    name: string;
    url: string;
    github: string;
    demo: string;
    description: string;
    image: string;
    techs: Array<string>;
  }>;
}
