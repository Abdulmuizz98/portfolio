import { FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";

const AboutMeMain: FC = () => {
  useEffect(() => {
    if (window) {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className="main w-full border-l border-gray overflow-hidden">
      <div className="w-full h-8 border-b border-gray flex">
        {" "}
        <div className="tech-selection border-r border-gray px-5 flex items-center gap-10">
          personal-info
        </div>
      </div>
      <div className="flex  w-full h-full">
        <article className="about-me-ide w-1/2 overflow-scroll border-r border-gray py-20 ">
          <div className="ide-container">
            <pre className="line-numbers">
              <code className="language-js">
                {`const button = document.querySelector('#sendBtn');

const message = {
    name: "",
    email: "",
    message: "",
    date: "",
}

button.addEventListener('click', () => {
  form.send(message);
})`}
              </code>
            </pre>
          </div>
        </article>
        <div className="dev-hero"></div>
      </div>
    </div>
  );
};

export default AboutMeMain;
