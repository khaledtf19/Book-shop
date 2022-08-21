import { FC } from "react";
import { BookColumn } from "../../components/column";
import { BooksGridProps } from "../../interfaces";

const BooksGrid: FC<BooksGridProps> = ({ books }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center align-middle ">
      {books.map((book) => (
        <BookColumn book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BooksGrid;
