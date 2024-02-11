import { useAppDispatch } from "../store/hooks";
import { FC } from "react";
import { toggleMenu } from "../store/menuSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;
  // console.log("location: ", location);

  const toggleHamburgerMenu = () => {
    const menuBtn = document.querySelector(".ham-icon") as HTMLButtonElement;
    const menu = document.querySelector(".ham-menu");
    const page = document.querySelector("main");

    menuBtn?.classList.toggle("open");
    dispatch(toggleMenu());

    menu?.classList.toggle("hidden");
    page?.classList.toggle("hidden");
  };

  return (
    <header>
      <div className="mt-4 md:mt-2">
        <nav className="desktop-menu border-t border-x border-gray rounded-t-lg">
          <ul className="flex h-10 items-center">
            <li className="">
              <p className="px-8  py-auto flex mr-24  h-10  items-center lg:px-5 ">
                abdulmuizz-hamzat
              </p>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/"
                className={`px-5 py-auto border-x border-gray flex h-10 items-center ${
                  location === "/" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
              >
                _hello
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/about-me/about"
                className={`px-5 py-auto border-r border-gray flex h-10 items-center ${
                  location.match(/^\/about-me\//) &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
              >
                _about-me
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/projects"
                className={`px-5 py-auto border-r border-gray flex h-10 items-center ${
                  location === "/projects" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
              >
                _projects
              </Link>
            </li>
            <li className="ml-auto hidden lg:block">
              <Link
                to="/contact-me"
                className={`px-5 py-auto border-l border-gray flex h-10 items-center ${
                  location === "/contact-me" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
              >
                _contact-me
              </Link>
            </li>
            <li className="lg:hidden ml-auto">
              <button
                type="button"
                onClick={() => toggleHamburgerMenu()}
                className="ham-icon"
              >
                <span className="ham-top ham">{""}</span>
                <span className="ham-middle ham"></span>
                <span className="ham-bottom ham"></span>
              </button>
            </li>
          </ul>
        </nav>
        <nav className="ham-menu hidden w-full lg:hidden alt-main-height text-white border-x border-b border-gray">
          <ul>
            <li className="">
              <Link
                to="/"
                className={`px-5 border-y border-gray flex h-10 w-full items-center ${
                  location === "/" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
                onClick={() => toggleHamburgerMenu()}
              >
                _hello
              </Link>
            </li>
            <li className="">
              <Link
                to="/about-me/about"
                className={`px-5 border-y border-gray flex h-10 w-full items-center ${
                  location.match(/^\/about-me\//) &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
                onClick={() => toggleHamburgerMenu()}
              >
                _about-me
              </Link>
            </li>
            <li className="">
              <Link
                to="/projects"
                className={`px-5 border-y border-gray flex h-10 w-full items-center ${
                  location === "/projects" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
                onClick={() => toggleHamburgerMenu()}
              >
                _projects
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact-me"
                className={`px-5 border-y border-gray flex h-10 w-full items-center ${
                  location === "/contact-me" &&
                  "text-white border-b-[3px] border-b-orange"
                }`}
                onClick={() => toggleHamburgerMenu()}
              >
                _contact-me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
