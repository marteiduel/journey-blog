import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/main/Home";
import "./App.css";
import Post from "./components/full-post/Post";

function App() {
  return (
    <div className="h-screen">
      <nav className="flex h-14 justify-center bg-background-main items-center">
        <div className="mr-4 text-white text-lg font-semibold hover:text-red-main">
          <Link to="/">Home</Link>
        </div>
        <div className="mr-4 text-white text-lg font-semibold hover:text-red-main">
          <a href="https://marteiduel.com/" target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
        <div className="mr-4 text-white text-lg font-semibold hover:text-red-main">
          <a
            href="https://www.linkedin.com/in/marteichagoya/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="mr-4 text-white text-lg font-semibold hover:text-red-main">
          <a
            href="https://github.com/marteiduel"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </nav>

      <Routes className="w-full">
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      <footer className="h-auto bg-background-main p-4">
        <div className="flex justify-evenly">
          <p className="text-white text-center text-sm">
            <Link className="text-red-main hover:text-white" to="/">
              Home
            </Link>
          </p>
          <a
            className="text-red-main hover:text-white"
            href="https://marteiduel.com/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
          <a
            className="text-red-main hover:text-white"
            href="https://www.linkedin.com/in/marteichagoya/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-red-main hover:text-white"
            href="https://github.com/marteiduel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
