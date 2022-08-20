import { FC } from "react";
import {
  BookImageProps,
  BookTitleProps,
} from "./BookColumnComponentsInterfaces";

export const BookImage: FC<BookImageProps> = ({ imgUrl, name }) => {
  return (
    <div className="w-full h-full  flex align-middle justify-center min-w-[100px] ">
      <img
        src={imgUrl}
        alt={name}
        className="w-full max-w-[100px] min-h-[150px]"
      />
    </div>
  );
};

export const BookTitle: FC<BookTitleProps> = ({ title, authors }) => {
  return (
    <div className="flex flex-col align-middle justify-center  min-h-[60px]">
      <h3 className=" text-xs text-center font-bold">
        {title.length > 30 ? title.substring(0, 30) + "..." : title}
      </h3>
      <p className=" text-gray-400 text-center text-xs">{authors[0].name}</p>
    </div>
  );
};
