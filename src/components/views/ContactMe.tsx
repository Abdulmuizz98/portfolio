import ContactMeMain from "./contact-me/ContactMeMain";
import ContactMeSidePane from "./contact-me/ContactMeSidePane";

const ContactMe: FC = () => {
  return (
    <section className="contact-me flex main-height border-x border-gray w-full border  ">
      <ContactMeSidePane />
      <ContactMeMain />
    </section>
  );
};

export default ContactMe;
