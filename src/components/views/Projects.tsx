import { FC } from "react";
import { ApReact, ApCss, ApVue } from "../../Icon";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiC,
  SiNodedotjs,
  SiFlask,
} from "react-icons/si";
import ProjectsSidePane from "./projects/ProjectsSidePane";
import ProjectsMain from "./projects/ProjectsMain";

// const tech = {
//   React: [<ApReact />, <ApReact />],
//   HTML: [<ApReact />, <ApReact />],
//   CSS: [<ApReact />, <ApReact />],
//   Vue: [<ApReact />, <ApReact />],
//   TypeScript: [<ApReact />, <ApReact />],
//   JavaScript: [<ApReact />, <ApReact />],
//   Python: [<ApReact />, <ApReact />],
//   "C/C++": [<ApReact />, <ApReact />],
//   Django: [<ApReact />, <ApReact />],
//   Flask: [<ApReact />, <ApReact />],
//   Node: [<ApReact />, <ApReact />],
// };

const technologies = [
  {
    name: "React",
    icon: <ApReact />,
  },

  {
    name: "CSS",
    icon: <ApCss />,
  },
  {
    name: "Vue",
    icon: <ApVue />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="20px" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size="20px" />,
  },
  {
    name: "Python",
    icon: <SiPython size="20px" />,
  },
  {
    name: "Django",
    icon: <SiDjango size="20px" />,
  },
  {
    name: "C/C++",
    icon: <SiC size="20px" />,
  },
  {
    name: "Flask",
    icon: <SiFlask size="20px" />,
  },
  {
    name: "Nodejs",
    icon: <SiNodedotjs size="20px" />,
  },
];

const projects = [
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: ["React", "Flask", "Nodejs"],
  },
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: ["Nodejs", "C/C++"],
  },
  {
    name: "ui-animations",
    url: "",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: ["TypeScript", "Python"],
  },
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: ["JavaScript", "Vue"],
  },
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: ["CSS", "React"],
  },
  {
    name: "ui-animations",
    url: "",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: [],
  },
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: [],
  },
  {
    name: "ui-animations",
    url: "test",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: [],
  },
  {
    name: "ui-animations",
    url: "",
    github: "",
    demo: "test",
    description: "Lorem ipsum doloe emit ati awon ti o ti lor where are thou",
    image: "https://source.unsplash.com/1000x500/?category=project&unique=1",
    techs: [],
  },
];

const Projects: FC = () => {
  return (
    <section className="projects page w-full alt-main-height flex flex-col lg:flex-row border border-gray">
      <h2 className="text-white lg:hidden py-5 px-8 font-medium">_projects</h2>
      <ProjectsSidePane technologies={technologies} />
      <ProjectsMain projects={projects} />
    </section>
  );
};

export default Projects;
