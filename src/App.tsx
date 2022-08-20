import { Route, Routes } from "react-router-dom";

import Navbar from "./components/nav/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="bg-primary md:px-14 lg:px-32  ">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
