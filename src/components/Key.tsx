import { FC } from "react";
// import { ApTriangleDown } from "../Icon";
import {
  RxTriangleDown,
  RxTriangleLeft,
  RxTriangleRight,
  RxTriangleUp,
} from "react-icons/rx";

interface KeyProp {
  position: string;
}
const Key: FC<KeyProp> = ({ position }) => {
  return (
    <div className="key bg-dark w-9 h-5 flex items-center justify-center rounded-md border border-gray ">
      {position === "up" && <RxTriangleUp size="15px" />}
      {position === "down" && <RxTriangleDown size="15px" />}
      {position === "right" && <RxTriangleRight size="15px" />}
      {position === "left" && <RxTriangleLeft size="15px" />}
    </div>
  );
};
export default Key;
