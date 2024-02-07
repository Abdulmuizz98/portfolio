import { useAppDispatch } from "../store/hooks";
import { FC } from "react";
import { toggleMenu } from "../store/menuSlice";
import { Link } from "react-router-dom";

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
      <div className=" bg-blue mt-4 md:mt-2">
        <nav className="border-t border-x border-gray rounded-t-lg">
          <ul className="flex h-10 items-center">
            <li className="">
              <p className="px-8  py-auto flex mr-24  h-10  items-center lg:px-5 ">
                abdulmuizz-hamzat
              </p>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/"
                className="px-5 py-auto border-x border-gray flex h-10 items-center"
              >
                _hello
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/about-me"
                className="px-5 py-auto border-r border-gray flex h-10 items-center"
              >
                _about-me
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                to="/projects"
                className="px-5 py-auto border-r border-gray flex h-10 items-center"
              >
                _projects
              </Link>
            </li>
            <li className="ml-auto hidden lg:block">
              <Link
                to="/contact-me"
                className="px-5 py-auto border-l border-gray flex h-10 items-center"
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
        <nav className="ham-menu hidden w-full lg:hidden alt-main-height bg-blue text-white border-x border-b border-gray">
          <ul>
            <li className="">
              <Link
                to="/"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _hello
              </Link>
            </li>
            <li className="">
              <Link
                to="/about-me"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _about-me
              </Link>
            </li>
            <li className="">
              <Link
                to="/projects"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
              >
                _projects
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact-me"
                className="px-5 border-y border-gray flex h-10 w-full items-center"
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
