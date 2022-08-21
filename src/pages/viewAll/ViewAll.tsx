import { useEffect, useState } from "react";
import BooksGrid from "../../containers/booksGrid/BooksGrid";
import { useGetBooksByPageNum } from "../../hooks/fetch";

const ViewAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading } = useGetBooksByPageNum(pageNumber.toString());

  return (
    <div className="flex flex-col justify-center align-middle gap-10">
      <div className="flex justify-center align-middle  gap-5">
        {pageNumber > 1 ? (
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            PrevPage
          </button>
        ) : (
          <p>PrevPage</p>
        )}
        <h1>Page: {pageNumber}</h1>
        <button onClick={() => setPageNumber(pageNumber + 1)}>NextPage</button>
      </div>
      {loading ? <h1>Loading...</h1> : <BooksGrid books={books} />}
    </div>
  );
};

export default ViewAll;
