import "./App.css";
import { mems } from "./components/MemArray";
import { MemNewComponent } from "./components/MemsLogic";
import { MemsLogic } from "./components/MemsLogic";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { RegularMems } from "./pages/RegularMems";
import { HotMems } from "./pages/HotMems";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigation">
          <h1>Kocie Memy</h1>
          <button className="regularButton">
            <Link to="/">Regular</Link>
          </button>
          <button className="hotButton">
            <Link to="/hot">Hot</Link>
          </button>
        </nav>
        <div className="buttonAppContainer">
          <Routes>
            <Route path="/" element={<RegularMems />}></Route>
            <Route path="/hot" element={<HotMems />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
