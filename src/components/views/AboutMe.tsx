import { FC } from "react";
import AboutMeSidePane from "./about-me/AboutMeSidePane";
import AboutMeMain from "./about-me/AboutMeMain";
import { getInfoSet } from "../../utils";
import { useParams } from "react-router-dom";

const AboutMe: FC = () => {
  const params = useParams();
  const { highlight } = params;

  const { info, sectionName } = getInfoSet(highlight!);

  return (
    <section className="about-me page w-full alt-main-height flex flex-col lg:flex-row border border-gray ">
      <h2 className="text-white lg:hidden py-5 px-8 font-medium">_about_me</h2>
      <AboutMeSidePane currentSection={sectionName} />
      <AboutMeMain info={info} currentSection={sectionName} />
    </section>
  );
};

export default AboutMe;
