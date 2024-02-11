import { FC, useState } from "react";
import { ApCaretDown, ApMd } from "../Icon";
import { PiFolderFill } from "react-icons/pi";
import { NestedDropdownProp } from "./types";
import { Link, useParams } from "react-router-dom";

const NestedDropdown: FC<NestedDropdownProp> = ({ section, iconColor }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { highlight } = useParams();

  return (
    <>
      <button
        className={
          "dropdown-title flex items-center text-white px-8 lg:px-5 gap-3"
        }
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          style={{ transform: `${isOpen ? "rotate(0deg)" : "rotate(-90deg)"}` }}
        >
          <ApCaretDown />
        </span>
        <p className="flex gap-3 items-center">
          <PiFolderFill color={iconColor} /> {section.name}
        </p>
      </button>

      {isOpen && (
        <div className="dropdown-body px-8 lg:px-5 flex flex-col gap-3">
          {section.payload.map((info, idx) => (
            <Link
              to={`/about-me/${info.highlight}`}
              className="flex pl-6 gap-3 items-center"
              key={idx}
            >
              <ApMd
                color={`${highlight === info.highlight ? "#e5e9f0" : ""}`}
              />
              <span
                className={`${
                  highlight === info.highlight && "underline text-white"
                }`}
              >
                {info.highlight}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NestedDropdown;
