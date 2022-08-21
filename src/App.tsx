import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/nav";
import { BookPage, HomePage, SearchPage } from "./pages";

function App() {
  return (
    <div className="bg-primary md:px-14 lg:px-32  ">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
