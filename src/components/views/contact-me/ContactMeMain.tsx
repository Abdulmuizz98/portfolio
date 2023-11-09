import { FC } from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeMain: FC = () => {
  return (
    <div className="main w-full border-l border-gray flex flex-col">
      <div className="w-full flex-shrink-0 h-8 border-b border-gray flex">
        {" "}
        <div className="border-r border-gray px-5 flex items-center gap-10">
          contacts
        </div>
      </div>
      <ContactMeForm />
    </div>
  );
};

export default ContactMeMain;
