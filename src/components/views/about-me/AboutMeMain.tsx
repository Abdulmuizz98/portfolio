import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { getInfoSet } from "../../../utils";
import { useParams } from "react-router-dom";
import { ApCaretDown } from "../../../Icon";

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
    <div className="main w-full border-l border-gray overflow-hidden">
      <div className="w-full h-8 border-b border-gray flex">
        <div className="tech-selection border-r border-gray px-5 flex items-center gap-2">
          {sectionName}
          {` ==> `} {highlight}
        </div>
      </div>
      <div className="flex  w-full h-full">
        <article className="about-me-ide w-1/2 overflow-scroll border-r border-gray py-20 ">
          <div className="ide-container">
            <pre className="line-numbers">
              <Routes>
                <Route
                  path=":highlight"
                  element={
                    highlight ? (
                      <code className="language-js">{info.content}</code>
                    ) : null
                  }
                />
                <Route
                  path=""
                  element={
                    <code className="language-js">{`// This is the intro`}</code>
                  }
                />
              </Routes>
            </pre>
          </div>
        </article>
        <div className="dev-hero"></div>
      </div>
    </div>
  );
};

export default AboutMeMain;
