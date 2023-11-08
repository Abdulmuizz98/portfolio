import { FC } from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeMain: FC = () => {
  return (
    <div className="main w-full border-l border-gray overflow-hidden">
      <div className="w-full h-8 border-b border-gray flex"></div>
      <ContactMeForm />
    </div>
  );
};

export default ContactMeMain;
