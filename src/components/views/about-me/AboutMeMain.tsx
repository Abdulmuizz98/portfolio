import { FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { InfoOrUndf } from "../../types";
import { notFound, showcaseData } from "../../../Data";
import ShowcaseFeed from "./ShowcaseFeed";

interface AboutMeMainProp {
  info: InfoOrUndf;
  currentSection: string;
}

const AboutMeMain: FC<AboutMeMainProp> = ({ info, currentSection }) => {
  useEffect(() => {
    if (window) {
      Prism.highlightAll();
    }
  }, [info]);

  // const params = useParams();
  // const highlight = params["*"];
  // const { info, sectionName } = getInfoSet(highlight);

  return (
    <div className="main w-full lg:border-l border-gray flex flex-col">
      <div className="w-full flex-shrink-0 lg:h-8 lg:border-b border-gray flex">
        <div className="flex w-full flex-wrap lg:flex-nowrap lg:w-auto border-r border-gray px-8 lg:px-5 pt-7 pb-4 lg:py-0 items-center gap-2">
          <span className="text-white font-medium lg:text-gray-light">
            <span className="lg:hidden">//</span> personal_info
          </span>
          {info?.highlight && (
            <>
              {` > `}
              {currentSection}
              {` > `} {info?.highlight}{" "}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-1 w-full overflow-hidden">
        <article className="about-me-ide lg:w-1/2 overflow-y-auto border-r border-gray lg:p-5">
          {info?.highlight ? (
            <>
              <pre className="info-container line-numbers hidden xl:block ">
                <code className="language-js">{info?.contentLgScreen}</code>
              </pre>
              <p className="xl:hidden px-8 leading-loose">
                {info?.contentSmScreen}
              </p>
            </>
          ) : (
            <>
              <pre className="info-container line-numbers hidden xl:block">
                <code className="language-js">{notFound.contentLgScreen}</code>
              </pre>
              <p className="xl:hidden px-8 ">{notFound.contentSmScreen}</p>
            </>
          )}
        </article>
        <div className="flex lg:w-auto border-r border-gray px-8 lg:px-5 lg:hidden pt-7 pb-4 lg:py-0 items-center gap-2">
          <span className="text-white font-medium lg:text-gray-light mb-">
            // Moments showcase:
          </span>
        </div>
        <div className="dev-hero lg:w-1/2 p-10 overflow-y-auto gap-16 ">
          <span className="text-white hidden lg:block font-medium lg:text-gray-light mb-5">
            // Moments showcase:
          </span>
          {showcaseData &&
            showcaseData.map(({ image, alt, comment }, index) => (
              <ShowcaseFeed
                key={index}
                image={image}
                alt={alt}
                comment={comment}
              />
            ))}

          {/* <img className="w-32" src={profilePic} alt="" />
          <img className="w-32" src={botSleep} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMeMain;
