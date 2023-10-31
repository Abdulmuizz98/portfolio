import { ApGithub, ApLinkedIn, ApTwitter } from "../Icon";

const Footer = () => {
  return (
    <footer className="">
      <div className="container bg-blue mb-4 md:mb-7 xl:mb-16 h-14 mx-auto rounded-b-lg ">
        <ul className="hidden xl:flex h-14 items-center border-t border-gray">
          <li className="">
            <p className="px-8 py-auto flex h-14 items-center">find me on:</p>
          </li>
          <li className="">
            <a
              href="/"
              className="px-5 py-auto border-x border-gray flex h-14 items-center"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
              className="px-5 py-auto border-r border-gray flex h-14 items-center"
            >
              <ApLinkedIn />
            </a>
          </li>

          <li className="ml-auto">
            <a
              href="/contact-me"
              className="px-8 py-auto border-l border-gray flex h-14 items-center"
            >
              <span className="mr-2">@abdulmuizz98 </span> <ApGithub />
            </a>
          </li>
        </ul>
        <ul className="footer-small hidden h-14 w-100 items-center border border-gray">
          <li className="">
            <p className="px-8 py-auto flex h-14 items-center">find me on:</p>
          </li>
          <li className="ml-auto">
            <a
              href="/"
              className="px-5 py-auto border-x border-gray flex h-14 items-center"
            >
              <ApTwitter />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
              className="px-5 py-auto border-r border-gray flex h-14 items-center"
            >
              <ApLinkedIn />
            </a>
          </li>
          <li className="">
            <a
              href="/about-me"
              className="px-5 py-auto border-gray flex h-14 items-center"
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
