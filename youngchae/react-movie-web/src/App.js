import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Category from "./routes/Category";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
