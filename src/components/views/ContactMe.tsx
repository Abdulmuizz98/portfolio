import ContactMeMain from "./contact-me/ContactMeMain";
import ContactMeSidePane from "./contact-me/ContactMeSidePane";

const ContactMe: FC = () => {
  return (
    <section className="contact-me w-full main-height flex border border-gray">
      <ContactMeSidePane />
      <ContactMeMain />
    </section>
  );
};

export default ContactMe;
