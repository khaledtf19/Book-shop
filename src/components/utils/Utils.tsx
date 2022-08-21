import { FC } from "react";
import { ButtonProps } from "../../interfaces";

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className=" bg-secondary-color p-2 rounded-md"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
