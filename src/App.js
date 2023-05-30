import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/main/Home";
import "./App.css";
import Post from "./components/full-post/Post";

function App() {
  return (
    <div className="h-screen">
      <nav className="flex h-14 justify-end bg-background-main items-center">
        <div className="mr-4 text-white text-lg font-semibold hover:text-red-main">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      <footer className="bg-background-main"></footer>
    </div>
  );
}

export default App;
