import { FC } from "react";
import Dropdown from "../../Dropdown";
import { ApLink, ApMail, ApPhone } from "../../../Icon";

const ContactMeSidePane: FC = () => {
  return (
    <div className="side-pane overflow-y-auto">
      <Dropdown
        name="contacts"
        classes="border-t-0"
        dropdownBody={
          <div className="form-check flex flex-col px-8 lg:px-5 gap-2 my-3 text-11">
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
      <Dropdown
        name="find-me-also-on"
        classes="border-t border-gray"
        dropdownBody={
          <div className="form-check flex flex-col px-8 lg:px-5 gap-2 my-3 text-11">
            <a
              title="github profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Abdulmuizz98"
              className="flex items-center gap-3"
            >
              <ApLink /> Github
            </a>
            <a
              title="linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abdulmuizzhamz1/"
              className="flex items-center gap-3"
            >
              <ApLink /> LinkedIn
            </a>
            <a
              title="twitter profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AbdulmuizzHamz1"
              className="flex items-center gap-3"
            >
              <ApLink /> Twitter
            </a>
          </div>
        }
      />
    </div>
  );
};

export default ContactMeSidePane;
