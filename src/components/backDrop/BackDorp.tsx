import { FC } from "react";
import { BackDropProps } from "../../interfaces";

const BackDorp: FC<BackDropProps> = ({ children, handleClick }) => {
  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </div>
  );
};

export default BackDorp;
