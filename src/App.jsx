import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
