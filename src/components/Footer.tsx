import { ApGithub, ApLinkedIn, ApTwitter } from "../Icon";

const Footer = () => {
  return (
    <footer className="footer hidden lg:block">
      <div className="container h-10 bg-blue mb-4 md:mb-7 mx-auto  ">
        <ul className="footer-lg hidden lg:flex h-10 items-center border border-gray rounded-b-lg">
          <li className="">
            <p className="px-5 py-auto flex h-10 items-center">find me on:</p>
          </li>
          <li className="">
            <a
              href="/"
              className="px-3 py-auto border-x border-gray flex h-10 items-center"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
              className="px-3 py-auto border-r border-gray flex h-10 items-center"
            >
              <ApLinkedIn />
            </a>
          </li>

          <li className="ml-auto">
            <a
              href="/contact-me"
              className="px-5 py-auto border-l border-gray flex h-10 items-center"
            >
              <span className="mr-2">@abdulmuizz98 </span> <ApGithub />
            </a>
          </li>
        </ul>
        <ul className="footer-sm flex lg:hidden h-10 w-100 items-center border border-gray rounded-b-lg">
          <li className="">
            <p className="px-5 py-auto flex h-10 items-center">find me on:</p>
          </li>
          <li className="ml-auto">
            <a
              href="/"
              className="px-5 py-auto border-x border-gray flex h-10 items-center"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
              className="px-5 py-auto border-r border-gray flex h-10 items-center"
            >
              <ApLinkedIn />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
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
