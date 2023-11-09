import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsMainProps } from "./projectTypes";
import { ApClose } from "../../../Icon";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeAll } from "../../store/checkedSlice";

const ProjectsMain: FC<ProjectsMainProps> = ({ projects }) => {
  const checkedTech = useAppSelector((state) => state.checked.checkedTech);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    checkedTech.forEach((tech) => {
      const checkbox = document.getElementById(tech);
      checkbox.checked = false;
    });
    dispatch(removeAll());
  };

  const filteredProjects = checkedTech.length
    ? projects.filter((proj) =>
        checkedTech.some((tech) => proj.techs.find((t) => t === tech))
      )
    : projects;

  return (
    <div className="main border-l border-gray flex flex-col">
      <div className="w-full flex-shrink-0 h-8 border-b border-gray flex">
        {checkedTech.length ? (
          <div className="tech-selection border-r border-gray px-5 flex items-center gap-10">
            <p>
              {checkedTech.map((tech) => (
                <>{tech}; </>
              ))}
            </p>
            <button type="button" onClick={handleClear}>
              <ApClose />
            </button>
          </div>
        ) : null}
      </div>
      <div className="projects p-14 flex flex-wrap justify-between gap-y-10 overflow-y-scroll">
        {filteredProjects.length &&
          filteredProjects.map((project, idx) => (
            <ProjectCard
              id={idx + 1}
              name={project.name}
              url={project.url}
              description={project.description}
              github={project.github}
              demo={project.demo}
              image={project.image}
              techs={project.techs}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
