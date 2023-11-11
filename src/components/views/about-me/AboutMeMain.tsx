import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { getInfoSet } from "../../../utils";
import { useParams } from "react-router-dom";
import profilePic from "../../../assets/profile_pic.svg";
import botSleep from "../../../assets/bot_sleeping.png";

const AboutMeMain: FC = () => {
  useEffect(() => {
    if (window) {
      Prism.highlightAll();
    }
  }, []);

  const params = useParams();
  const highlight = params["*"];
  const { info, sectionName } = getInfoSet(highlight);

  return (
    <div className="main w-full lg:border-l border-gray flex flex-col">
      <div className="w-full flex-shrink-0 lg:h-8 lg:border-b border-gray flex">
        <div className="tech-selection flex w-full lg:w-auto border-r border-gray px-8 lg:px-5 pt-7 pb-4 lg:py-0 items-center gap-2">
          <span className="text-white font-medium lg:text-gray-light">
            <span className="lg:hidden">//</span> personal_info
          </span>{" "}
          {` > `}
          {sectionName}
          {` > `} {highlight}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-1 w-full overflow-hidden">
        <article className="about-me-ide lg:w-2/3 overflow-y-scroll border-r border-gray lg:p-5 xl:pr-16">
          {/* <div className=""> */}
          <Routes>
            <Route
              path=":highlight"
              element={
                highlight ? (
                  <>
                    <pre className="info-container line-numbers hidden xl:block ">
                      <code className="language-js">
                        {info.contentLgScreen}
                      </code>
                    </pre>
                    <p className="xl:hidden px-8 leading-loose">
                      {info.contentSmScreen}
                    </p>
                  </>
                ) : null
              }
            />
            <Route
              path=""
              element={
                <>
                  <pre className="info-container line-numbers hidden xl:block">
                    <code className="language-js">{`// This is the intro`}</code>
                  </pre>
                  <p className="xl:hidden px-8 ">{`// This is the intro`}</p>
                </>
              }
            />
          </Routes>
          {/* </div> */}
        </article>
        <div className="flex lg:w-auto border-r border-gray px-8 lg:px-5 lg:hidden pt-7 pb-4 lg:py-0 items-center gap-2">
          <span className="text-white font-medium lg:text-gray-light">
            // showcase:
          </span>
        </div>
        <div className="dev-hero lg:w-1/3 py-20 overflow-y-scroll flex flex-col gap-16 items-center ">
          <img className="w-32" src={profilePic} alt="" />
          <img className="w-32" src={botSleep} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMeMain;
