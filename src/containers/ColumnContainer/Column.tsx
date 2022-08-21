import { FC } from "react";

import BookColumn from "../../components/column/bookColumn/BookColumn";
import { BooksColumnProps } from "./Column.interface";

const BooksColumn: FC<BooksColumnProps> = ({ books, columnName, loading }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="px-3 sm:px-0 flex align-middle justify-between  text-lg sm:text-xl">
        <h2 className="font-bold">{columnName}</h2>
        <h2 className="font-bold text-gray-400">View All</h2>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full grid grid-cols-3 gap-1 justify-center align-middle items-center lg:flex lg:gap-3 lg:justify-start lg:flex-wrap">
          {books.map((book) => (
            <BookColumn book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksColumn;
