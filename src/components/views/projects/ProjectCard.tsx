import { FC, useState } from "react";
import { ProjectCardProps, Technologies } from "./projectTypes";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiC,
  SiNodedotjs,
  SiFlask,
  SiReact,
} from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { RiCss3Fill } from "react-icons/ri";

const technologies: Technologies = {
  React: <SiReact />,
  CSS: <RiCss3Fill />,
  Vue: <BiLogoVuejs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  "C/C++": <SiC />,
  Django: <SiDjango />,
  Flask: <SiFlask />,
  Nodejs: <SiNodedotjs />,
};

const getColor = (iconName: string) => {
  const green = ["Django", "Vue", "Nodejs", "JavaScript"];
  const red = ["C/C++", "Flask", "CSS"];
  const blue = ["Python", "React", "TypeScript"];
  let color: string | undefined = "";

  color = green.find((el) => el === iconName);
  if (color) return "#81D4AF";

  color = red.find((el) => el === iconName);
  if (color) return "#E99287";

  color = blue.find((el) => el === iconName);
  if (color) return "#86E1F9";
};

const ProjectCard: FC<ProjectCardProps> = (project) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="project-card">
      <h2 className="card-title mb-4">
        <span className="text-cyan">Project {project.id}</span> // _
        {project.name}
      </h2>
      <div className="card-body border border-gray rounded-2xl bg-black overflow-hidden w-72">
        <div className="h-36 relative border-b border-gray overflow-hidden">
          <img
            className={`bg-contain object-cover w-full h-full ${
              !isLoaded && "hidden"
            }`}
            src={project.image}
            alt={`The ${project.name} project showcase`}
            onLoad={() => setIsLoaded(true)}
          />
          <div
            className={`flex animate-pulse items-center justify-center bg-gray w-full h-full rounded ${
              isLoaded && "hidden"
            } `}
          >
            <svg
              className="w-10 h-10 text-gray-200  dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          {project.techs.length ? (
            <div className="techs-container absolute top-3 right-3 flex flex-col justify-between gap-1">
              {project.techs.map(
                (tech) =>
                  tech in technologies && (
                    <div
                      className="icon-container w-4 h-4 rounded-sm flex items-center justify-center text-black"
                      style={{ backgroundColor: getColor(tech) }}
                    >
                      {technologies[`${tech}`]}
                    </div>
                  )
              )}
            </div>
          ) : null}
        </div>
        <div className="card-details border-t border-gray h-1/2 p-3">
          <p>{project.description}</p>
          <div className="card-actions flex gap-2">
            {project.url && (
              <a href={project.url} className="custom-btn ">
                view-project
              </a>
            )}
            <a href={project.github} className="custom-btn ">
              view-repo
            </a>
            {project.demo && (
              <a href={project.demo} className="custom-btn ">
                demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
