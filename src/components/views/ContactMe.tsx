import { FC } from "react";
import ContactMeMain from "./contact-me/ContactMeMain";
import ContactMeSidePane from "./contact-me/ContactMeSidePane";

const ContactMe: FC = () => {
  return (
    <section className="contact-me page w-full alt-main-height flex flex-col lg:flex-row border border-gray">
      <h2 className="text-white lg:hidden py-5 px-8 font-medium">
        _contact_me
      </h2>
      <ContactMeSidePane />
      <ContactMeMain />
    </section>
  );
};

export default ContactMe;
