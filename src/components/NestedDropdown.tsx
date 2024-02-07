import { FC, useState } from "react";
import { ApCaretDown, ApMd } from "../Icon";
import { PiFolderFill } from "react-icons/pi";
import { NestedDropdownProp } from "./types";

const NestedDropdown: FC<NestedDropdownProp> = ({ section, iconColor }) => {
  const [isOpen, setIsOpen] = useState(true);

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
            <a
              href=""
              className="flex pl-6 gap-3 items-center hover:text-white"
              key={idx}
            >
              <ApMd />
              {info.highlight}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NestedDropdown;
