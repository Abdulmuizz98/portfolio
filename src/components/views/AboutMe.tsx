// import AboutMeMain from "./about-me/AboutMeMain";
import AboutMeSidePane from "./about-me/AboutMeSidePane";
import AboutMeMain from "./about-me/AboutMeMain";

const AboutMe: FC = () => {
  return (
    <section className="contact-me flex main-height border-x border-gray w-full border  ">
      <AboutMeSidePane />
      <AboutMeMain />
    </section>
  );
};

export default AboutMe;
