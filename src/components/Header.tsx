import { useAppDispatch } from "../store/hooks";
import { FC } from "react";
import { toggleMenu } from "../store/menuSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const toggleHamburgerMenu = () => {
    const menuBtn = document.querySelector(".ham-icon") as HTMLButtonElement;
    const menu = document.querySelector(".ham-menu");
    const page = document.querySelector(".page");

    menuBtn?.classList.toggle("open");
    dispatch(toggleMenu());

    menu?.classList.toggle("hidden");
    page?.classList.toggle("hidden");
  };

  return (
    <header>
      <div className="container bg-blue mt-4 md:mt-2 mx-auto ">
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
