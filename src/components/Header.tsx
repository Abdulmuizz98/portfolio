import { useAppDispatch } from "./store/hooks";
import { FC, useState } from "react";
import { toggleMenu } from "./store/menuSlice";

const Header: FC = () => {
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useAppDispatch();

  const toggleHamburgerMenu = () => {
    const menuBtn = document.querySelector(".ham-icon");
    const menu = document.querySelector(".ham-menu");
    // const footer = document.querySelector("footer");
    const page = document.querySelector(".page");

    menuBtn?.classList.toggle("open");
    dispatch(toggleMenu());

    menu?.classList.toggle("hidden");
    // footer?.classList.toggle("hidden");
    // home?.classList.toggle("rounded-b-lg");
    page?.classList.toggle("hidden");
  };

  return (
    <header>
      <div className="container bg-blue mt-4 md:mt-7 mx-auto ">
        <nav className="border-t border-x border-gray rounded-t-lg">
          <ul className="flex h-10 items-center">
            <li className="">
              <a
                href="/"
                className="px-8  py-auto flex mr-24  h-10  items-center lg:px-5"
              >
                abdulmuizz-hamzat
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="/"
                className="px-5 py-auto border-x border-gray flex h-10 items-center"
              >
                _hello
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="/about-me"
                className="px-5 py-auto border-r border-gray flex h-10 items-center"
              >
                _about-me
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="/projects"
                className="px-5 py-auto border-r border-gray flex h-10 items-center"
              >
                _projects
              </a>
            </li>
            <li className="ml-auto hidden lg:block">
              <a
                href="/contact-me"
                className="px-5 py-auto border-l border-gray flex h-10 items-center"
              >
                _contact-me
              </a>
            </li>
            <li className="lg:hidden ml-auto">
              <button
                onClick={() => toggleHamburgerMenu()}
                className="ham-icon"
              >
                <span className="ham-top ham"></span>
                <span className="ham-middle ham"></span>
                <span className="ham-bottom ham"></span>
              </button>
            </li>
          </ul>
        </nav>
        <nav className="ham-menu hidden w-full lg:hidden alt-main-height bg-blue text-white border-x border-b border-gray">
          <ul>
            <li className="">
              <a
                href="/"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _hello
              </a>
            </li>
            <li className="">
              <a
                href="/about-me"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _about-me
              </a>
            </li>
            <li className="">
              <a
                href="/projects"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _projects
              </a>
            </li>
            <li className="">
              <a
                href="/contact-me"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _contact-me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
