import { FC } from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeMain: FC = () => {
  return (
    <div className="main w-full lg:border-l border-gray flex flex-col">
      <div className="w-full hidden flex-shrink-0 lg:h-8 border-b border-gray lg:flex">
        <div className="flex border-r border-gray px-5 items-center gap-10">
          contacts
        </div>
      </div>
      <ContactMeForm />
    </div>
  );
};

export default ContactMeMain;
