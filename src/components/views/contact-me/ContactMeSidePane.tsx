import { FC } from "react";
import Dropdown from "../Dropdown";
import { ApLink, ApMail, ApPhone } from "../../../Icon";

const ContactMeSidePane: FC = () => {
  return (
    <div className="side-pane w-4  border-r border-gray">
      <Dropdown
        name="contacts"
        classes=""
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
      <Dropdown
        name="find-me-also-on"
        classes="border-t border-gray"
        dropdownBody={
          <div className="form-check flex flex-col px-5 gap-2 my-3 text-11">
            <a href="" className="flex items-center gap-3">
              <ApLink /> Github
            </a>
            <a href="" className="flex items-center gap-3">
              <ApLink /> LinkedIn
            </a>
            <a href="" className="flex items-center gap-3">
              <ApLink /> Twitter
            </a>
          </div>
        }
      />
    </div>
  );
};

export default ContactMeSidePane;
