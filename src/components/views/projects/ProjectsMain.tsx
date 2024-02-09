import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsMainProps } from "./projectTypes";
import { ApClose } from "../../../Icon";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { removeAll } from "../../../store/checkedSlice";

const ProjectsMain: FC<ProjectsMainProps> = ({ projects }) => {
  const checkedTech = useAppSelector((state) => state.checked.checkedTech);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    checkedTech.forEach((tech) => {
      const checkbox = document.getElementById(tech) as HTMLInputElement;
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
    <div className="main lg:border-l border-gray flex flex-col">
      <div className="w-full flex-shrink-0 lg:h-8 lg:border-b border-gray flex">
        {checkedTech.length ? (
          <div className="tech-selection lg:border-r border-gray px-8 lg:px-5 flex items-center gap-10  pt-7 pb-4 lg:py-0">
            <p>
              <span className="text-white font-medium lg:text-gray-light">
                <span className="lg:hidden">// </span>projects
              </span>
              {` > `}
              {checkedTech.map((tech) => (
                <>{tech}; </>
              ))}
            </p>
            <button
              type="button"
              className="hidden lg:block"
              onClick={handleClear}
            >
              <ApClose />
              {""}
            </button>
          </div>
        ) : (
          <div className="tech-selection lg:border-r border-gray px-8 lg:px-5 flex items-center gap-10 pt-7 pb-4 lg:py-0 lg:hidden">
            <p>
              <span className="text-white font-medium lg:text-gray-light">
                // projects
              </span>
              {` > `} all
            </p>
          </div>
        )}
      </div>
      <div className="projects px-14 pb-14 lg:py-14 flex flex-wrap justify-center gap-y-10 gap-x-12 overflow-y-auto">
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
