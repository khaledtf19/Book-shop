import { useState } from "react";
import { Button } from "../../components/utils/Utils";
import BooksGrid from "../../containers/booksGrid/BooksGrid";
import { useGetBooksByPageNum } from "../../hooks/fetch";

const ViewAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading } = useGetBooksByPageNum(pageNumber.toString());

  return (
    <div className="flex flex-col justify-center align-middle gap-10">
      <div className="flex justify-center align-middle  gap-5">
        <Button
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
          }}
        >
          PrevPage
        </Button>
        <h1>Page: {pageNumber}</h1>
        <Button onClick={() => setPageNumber(pageNumber + 1)}>NextPage</Button>
      </div>
      {loading ? <h1>Loading...</h1> : <BooksGrid books={books} />}
    </div>
  );
};

export default ViewAll;
