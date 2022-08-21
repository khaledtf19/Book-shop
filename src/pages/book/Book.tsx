import { useParams } from "react-router-dom";
import { BookContainer } from "../../containers";
import { useGetBookById } from "../../hooks/fetch";

const Book = () => {
  const { id } = useParams();
  const { book, loading } = useGetBookById(id);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full">
      {book.length > 0 ? <BookContainer book={book[0]} /> : <h1>Not Found</h1>}
    </div>
  );
};

export default Book;
