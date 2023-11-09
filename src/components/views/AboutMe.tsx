// import AboutMeMain from "./about-me/AboutMeMain";
import AboutMeSidePane from "./about-me/AboutMeSidePane";
import AboutMeMain from "./about-me/AboutMeMain";

const AboutMe: FC = () => {
  return (
    <section className="about-me w-full main-height flex border border-gray ">
      <AboutMeSidePane />
      <AboutMeMain />
    </section>
  );
};

export default AboutMe;
