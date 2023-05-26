import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/main/Home";
import "./App.css";

function App() {
  return (
    <>
      <nav className="flex">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/books">ReactJS</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
