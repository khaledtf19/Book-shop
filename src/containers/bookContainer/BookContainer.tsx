import { FC } from "react";
import {
  BookImage,
  BookTitle,
} from "../../components/bookComponents/BookComponents";
import { BookContainerProps } from "./BookContainer.interface";

const BookContainer: FC<BookContainerProps> = ({ book }) => {
  return (
    <div className="flex flex-col w-full justify-center align-middle gap-4 ">
      <BookImage imgUrl={book.formats["image/jpeg"]} name={book.title} />
      <BookTitle title={book.title} />
    </div>
  );
};

export default BookContainer;
