import HomeBanner from "../../containers/homeBanner/HomeBanner";
import BooksColumn from "../../containers/ColumnContainer/Column";
import { data } from "../../data";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <HomeBanner />
      <BooksColumn books={data.slice(0, 6)} columnName="Popular" />
      <BooksColumn books={data.slice(6, 12)} columnName="new" />
    </div>
  );
};

export default Home;
