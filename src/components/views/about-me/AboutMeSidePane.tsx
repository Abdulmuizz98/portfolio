import { FC } from "react";
import Dropdown from "../Dropdown";
import { ApMail, ApPhone } from "../../../Icon";
import NestedDropdown from "../NestedDropdown";
import { bio, interests, education } from "../../../Data";

const AboutMeSidePane: FC = () => {
  return (
    <div className="side-pane w-4  border-r border-gray">
      <Dropdown
        name="personal-info"
        classes=""
        dropdownBody={
          <div className="flex flex-col gap-2 my-3">
            <NestedDropdown section={bio} iconColor="#E99287" />
            <NestedDropdown section={interests} iconColor="#43D9AD" />
            <NestedDropdown section={education} iconColor="#3A49A4" />
          </div>
        }
      />
      <Dropdown
        name="contacts"
        classes="border-t"
        dropdownBody={
          <div className="form-check flex flex-col px-5 gap-2 my-3 text-11">
            <a
              href="mailto:hamzatabdulmuizz98@gmail.com"
              className="flex items-center gap-3"
            >
              <ApMail /> hamzatabdulmuizz98@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <ApPhone /> +2347034635158
            </p>
          </div>
        }
      />
    </div>
  );
};

export default AboutMeSidePane;
