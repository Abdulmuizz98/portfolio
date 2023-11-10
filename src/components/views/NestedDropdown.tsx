import { FC, useState } from "react";
import { ApCaretDown, ApMd } from "../../Icon";
import { PiFolderFill } from "react-icons/pi";
import { NestedDropdownProp } from "../types";

const NestedDropdown: FC<NestedDropdownProp> = ({ section, iconColor }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={"dropdown-title flex items-center text-white px-5 gap-3"}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: `${isOpen ? "rotate(0deg)" : "rotate(-90deg)"}` }}
        >
          <ApCaretDown />
        </button>
        <p className="flex gap-3 items-center">
          {" "}
          <PiFolderFill color={iconColor} /> {section.name}
        </p>
      </div>
      {isOpen && (
        <div className="dropdown-body px-5 flex flex-col gap-3">
          {section.payload.map((info, idx) => (
            <a href="" className="flex pl-6 gap-3 items-center" key={idx}>
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
