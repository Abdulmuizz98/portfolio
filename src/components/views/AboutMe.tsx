import { FC } from "react";
import AboutMeSidePane from "./about-me/AboutMeSidePane";
import AboutMeMain from "./about-me/AboutMeMain";

const AboutMe: FC = () => {
  return (
    <section className="about-me page w-full alt-main-height flex flex-col lg:flex-row border border-gray ">
      <h2 className="text-white lg:hidden py-5 px-8 font-medium">_about_me</h2>
      <AboutMeSidePane />
      <AboutMeMain />
    </section>
  );
};

export default AboutMe;
