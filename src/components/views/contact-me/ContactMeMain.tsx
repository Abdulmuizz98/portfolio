import { FC } from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeMain: FC = () => {
  return (
    <div className="main w-full border-l border-gray overflow-hidden">
      <div className="w-full h-8 border-b border-gray flex">
        {" "}
        <div className="tech-selection border-r border-gray px-5 flex items-center gap-10">
          contact-me
        </div>
      </div>
      <ContactMeForm />
    </div>
  );
};

export default ContactMeMain;
