// import { a, Nava } from "react-router-dom";

const Header = () => {
  const toggleHamburgerMenu = () => {
    const menuBtn = document.querySelector(".ham-icon");
    const menu = document.querySelector(".ham-menu");
    const footer = document.querySelector(".footer-small");

    menuBtn?.classList.toggle("open");
    menu?.classList.toggle("hidden");
    footer?.classList.toggle("hidden");
    footer?.classList.toggle("flex");
  };

  return (
    <header>
      <div className="container bg-blue  mt-4 md:mt-7 xl:mt-16 mx-auto rounded-t-lg relative ">
        <nav className="border border-gray">
          <ul className="flex h-14 items-center ">
            <li className="">
              <a href="/" className="px-8 py-auto flex h-14 items-center">
                abdulmuizz-hamzat
              </a>
            </li>
            <li className="hidden xl:block">
              <a
                href="/"
                className="px-8 py-auto border-x border-gray flex ml-36 h-14 items-center"
              >
                _hello
              </a>
            </li>
            <li className="hidden xl:block">
              <a
                href="/about-me"
                className="px-8 py-auto border-r border-gray flex h-14 items-center"
              >
                _about-me
              </a>
            </li>
            <li className="hidden xl:block">
              <a
                href="/projects"
                className="px-8 py-auto border-r border-gray flex h-14 items-center"
              >
                _projects
              </a>
            </li>
            <li className="ml-auto hidden xl:block">
              <a
                href="/contact-me"
                className="px-8 py-auto border-l border-gray flex h-14 items-center"
              >
                _contact-me
              </a>
            </li>
            <li className="xl:hidden ml-auto">
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
        <nav className="ham-menu hidden absolute w-full z-10 xl:hidden h-screen bg-blue text-white">
          <ul>
            <li className="">
              <a
                href="/"
                className="px-8 border-y border-gray flex h-14 w-full items-center"
              >
                _hello
              </a>
            </li>
            <li className="">
              <a
                href="/about-me"
                className="px-8 border-y border-gray flex h-14 w-full items-center"
              >
                _about-me
              </a>
            </li>
            <li className="">
              <a
                href="/projects"
                className="px-8 border-y border-gray flex h-14 w-full items-center"
              >
                _projects
              </a>
            </li>
            <li className="">
              <a
                href="/contact-me"
                className="px-8 border-y border-gray flex h-14 w-full items-center"
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
