import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Celebration from "./pages/Celebration";
import GiftPage from "./pages/GiftPage";
import Gallery from "./pages/Gallery";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;