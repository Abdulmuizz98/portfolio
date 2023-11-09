import { useState } from "react";
import { ApTriangleDown } from "../../Icon";

const Dropdown = ({ name, dropdownBody, classes }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={`dropdown-title h-8 border-b border-gray flex items-center text-white px-5 gap-3 ${classes}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: `${isOpen ? "rotate(0deg)" : "rotate(-90deg)"}` }}
        >
          <ApTriangleDown />
        </button>
        <p>{name}</p>
      </div>
      {isOpen && <div className="dropdown-body">{dropdownBody}</div>}
    </>
  );
};

export default Dropdown;
