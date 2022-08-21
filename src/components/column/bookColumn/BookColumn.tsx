import { FC } from "react";
import { BookImageCol, BookTitleCol } from "../";
import { BookColumnProps } from "./BookColumnInterface";

const BookColumn: FC<BookColumnProps> = ({ book }) => {
  return (
    <div className="flex flex-col align-middle justify-center gap-1 w-full min-w-[30px] md:min-w-[150px] max-w-[150px]">
      <BookImageCol imgUrl={book.formats["image/jpeg"]} name={book.title} />
      <BookTitleCol title={book.title} authors={book.authors} id={book.id} />
    </div>
  );
};

export default BookColumn;
