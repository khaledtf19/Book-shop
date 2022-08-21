import { FC } from "react";
import { BookImageProps, BookTitleProps } from "./BookComponentsInterfaces";

export const BookImage: FC<BookImageProps> = ({ imgUrl, name }) => {
  return <img src={imgUrl} alt={name} className="w-60 self-center" />;
};

export const BookTitle: FC<BookTitleProps> = ({ title }) => {
  return <h1 className="self-center">{title}</h1>;
};
