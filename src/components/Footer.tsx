import { useLocation } from "react-router-dom";
import { ApGithub, ApLinkedIn, ApTwitter } from "../Icon";
import { useAppSelector } from "../store/hooks";

const Footer = () => {
  const { pathname } = useLocation();
  const isOpen = useAppSelector((state) => state.menu.isOpen);

  console.log(pathname);

  return (
    <footer
      className={`footer ${
        pathname === "/" && !isOpen ? "hidden" : ""
      } lg:block`}
    >
      <div className=" h-10 bg-blue mb-4 md:mb-2">
        <ul className="footer-lg hidden lg:flex h-10 items-center border-b border-x border-gray rounded-b-lg">
          <li className="">
            <p className="px-5 py-auto flex h-10 items-center">find me on:</p>
          </li>
          <li className="">
            <a
              title="twitter profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AbdulmuizzHamz1"
              className="px-3 py-auto border-x border-gray flex h-10 items-center hover:border-b-[3px] hover:border-b-orange hover:text-white"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              title="linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abdulmuizzhamz1/"
              className="px-3 py-auto border-r border-gray flex h-10 items-center hover:border-b-[3px] hover:border-b-orange hover:text-white"
            >
              <ApLinkedIn />
            </a>
          </li>

          <li className="ml-auto">
            <a
              title="github profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Abdulmuizz98"
              className="px-5 py-auto border-l border-gray flex h-10 items-center hover:border-b-[3px] hover:border-b-orange hover:text-white"
            >
              <span className="mr-2">@abdulmuizz98 </span> <ApGithub />
            </a>
          </li>
        </ul>
        <ul className="footer-sm flex lg:hidden h-10 w-100 items-center border-b border-x border-gray rounded-b-lg">
          <li className="">
            <p className="px-5 py-auto flex h-10 items-center">find me on:</p>
          </li>
          <li className="ml-auto">
            <a
              title="twitter profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AbdulmuizzHamz1"
              className="px-5 py-auto border-x border-gray flex h-10 items-center"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              title="linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abdulmuizzhamz1/"
              className="px-5 py-auto border-r border-gray flex h-10 items-center"
            >
              <ApLinkedIn />
            </a>
          </li>
          <li className="">
            <a
              title="github profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Abdulmuizz98"
              className="px-5 py-auto border-gray flex h-10 items-center"
            >
              <ApGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
