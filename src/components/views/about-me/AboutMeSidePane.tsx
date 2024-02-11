import { FC } from "react";
import Dropdown from "../../Dropdown";
import { ApLink } from "../../../Icon";
import NestedDropdown from "../../NestedDropdown";
import { bio, education, funFacts } from "../../../Data";

interface AboutMeSidePaneProp {
  currentSection: string;
}

const AboutMeSidePane: FC<AboutMeSidePaneProp> = () => {
  return (
    <div className="side-pane overflow-y-auto">
      <Dropdown
        name="personal-info"
        classes="lg:border-t-0"
        dropdownBody={
          <div className="flex flex-col gap-2 my-3">
            <NestedDropdown section={bio} iconColor="#E99287" />
            <NestedDropdown section={education} iconColor="#43D9AD" />
            <NestedDropdown section={funFacts} iconColor="#3A49A4" />
          </div>
        }
      />
      <Dropdown
        name="my-resume"
        classes="border-t"
        dropdownBody={
          <div className="contacts flex flex-col px-8 lg:px-5 gap-2 my-3 text-11">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1FwFh1bXzytxxEYuwA3gi_qGGpKYWcklL/view?usp=sharing"
              className="flex items-center gap-3"
            >
              <ApLink /> <span>resume</span>
            </a>
          </div>
        }
      />
    </div>
  );
};

export default AboutMeSidePane;
