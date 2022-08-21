import { useParams } from "react-router-dom";
import BooksGrid from "../../containers/booksGrid/BooksGrid";
import { useGetBooksBySearch } from "../../hooks/fetch";

const SearchResult = () => {
  const { search } = useParams();

  const { books, loading } = useGetBooksBySearch(search);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h1>Search Result: {search}</h1>
      {<BooksGrid books={books} />}
    </div>
  );
};

export default SearchResult;
