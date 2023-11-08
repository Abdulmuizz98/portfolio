import { FC } from "react";
import { ProjectsSidePaneProps } from "./ProjectTypes";
import { useAppDispatch } from "../../store/hooks";
import { addChecked, removeUnchecked } from "../../store/checkedSlice";
import Dropdown from "../Dropdown";

const ProjectsSidePane: FC<ProjectsSidePaneProps> = ({ technologies }) => {
  const dispatch = useAppDispatch();

  const hanleCheckboxChange = (e) => {
    // console.log(e.target.id);
    if (e.target.checked) {
      dispatch(addChecked(e.target.id));
    } else {
      dispatch(removeUnchecked(e.target.id));
    }
  };

  return (
    <div className="side-pane w-4 border-r border-gray">
      <Dropdown
        name="projects"
        dropdownBody={
          <>
            {" "}
            {technologies.length &&
              technologies.map(({ name, icon }) => (
                <div className="form-check flex items-center px-5 gap-3 my-3 text-11">
                  <input
                    type="checkbox"
                    onChange={hanleCheckboxChange}
                    name="projects"
                    id={name}
                  />
                  <label htmlFor={name} className="flex gap-3 items-center">
                    {icon} {name}
                  </label>
                </div>
              ))}
          </>
        }
      />
    </div>
  );
};

export default ProjectsSidePane;
