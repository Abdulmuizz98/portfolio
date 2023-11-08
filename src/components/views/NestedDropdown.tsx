import { FC, useState } from "react";
import { ApCaretDown, ApFolder, ApMd } from "../../Icon";
import { PiFolderFill } from "react-icons/pi";

interface NestedDropdownProp {
  name: string;
  payload: Array;
  classes: string;
  iconColor: string;
}
const NestedDropdown: FC<NestedDropdownProp> = ({
  name,
  payload,
  classes,
  iconColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`dropdown-title flex items-center text-white px-5 gap-3 ${classes}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: `${isOpen ? "rotate(0deg)" : "rotate(-90deg)"}` }}
        >
          <ApCaretDown />
        </button>
        <p className="flex gap-3 items-center">
          {" "}
          <PiFolderFill color={iconColor} /> {name}
        </p>
      </div>
      {isOpen && (
        <div className="dropdown-body px-5 flex flex-col gap-3">
          {payload.map((el) => (
            <a href="" className="flex pl-6 gap-3 items-center">
              {" "}
              <ApMd />
              {el.section}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NestedDropdown;
