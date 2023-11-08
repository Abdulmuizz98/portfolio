import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsMainProps } from "./ProjectTypes";
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
    <div className="main border-l border-gray overflow-hidden">
      <div className="w-full h-8 border-b border-gray flex">
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
      <div className="projects flex flex-wrap p-14 justify-between gap-y-10 overflow-scroll main-height">
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
