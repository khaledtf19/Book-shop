import { useEffect } from "react";
import { BooksColumn, HomeBanner } from "../../containers";
import { useGetBooks } from "../../hooks/fetch";

const Home = () => {
  const { books, loading } = useGetBooks();

  useEffect(() => {
    console.log(books);
  }, [books]);
  return (
    <div className="flex flex-col gap-5">
      <HomeBanner />
      <BooksColumn
        books={books?.slice(0, 8)}
        columnName="Popular"
        loading={loading}
      />
      <BooksColumn
        books={books?.slice(8, 16)}
        columnName="new"
        loading={loading}
      />
    </div>
  );
};

export default Home;
