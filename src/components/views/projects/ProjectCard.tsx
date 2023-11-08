import { FC } from "react";
import { ProjectCardProps, Technologies } from "./ProjectTypes";
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
  const green = ["Django", "Vue", "Nodejs"];
  const red = ["JavaScript", "C/C++", "Flask", "CSS"];
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
  return (
    <div className="project-card">
      <h2 className="card-title mb-4">
        <span className="text-cyan">Project {project.id}</span> // _
        {project.name}
      </h2>
      <div className="card-body border border-gray rounded-2xl overflow-hidden w-64">
        <div className="h-24 relative border-b border-gray overflow-hidden">
          <img
            className="w-full h-full"
            src={project.image}
            alt={`The ${project.name} project showcase`}
          />
          {project.techs.length ? (
            <div className="techs-container absolute top-4 right-4 flex flex-col justify-between gap-2">
              {project.techs.map(
                (tech) =>
                  tech in technologies && (
                    <div
                      className="icon-container w-6 h-6 rounded-sm flex items-center justify-center text-black"
                      style={{ backgroundColor: getColor(tech) }}
                    >
                      {technologies[`${tech}`]}
                    </div>
                  )
              )}
            </div>
          ) : null}
        </div>
        <div className="card-details border-t border-gray h-1/2 bg-black p-3">
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
