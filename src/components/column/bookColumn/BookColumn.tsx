import { FC } from "react";
import {
  BookImage,
  BookTitle,
} from "../booksColumnComponents/BooksColumnComponents";
import { BookColumnProps } from "./BookColumnInterface";

const BookColumn: FC<BookColumnProps> = ({ book }) => {
  return (
    <div className="flex flex-col align-middle justify-center gap-1 w-full min-w-[30px] md:min-w-[150px] max-w-[150px]">
      <BookImage imgUrl={book.formats["image/jpeg"]} name={book.title} />
      <BookTitle title={book.title} authors={book.authors} />
    </div>
  );
};

export default BookColumn;
