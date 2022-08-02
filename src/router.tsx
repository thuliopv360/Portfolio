import { Route, Routes } from "react-router-dom";
import About from "./components/Main";
import Projects from "./components/Projects";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="#about" element={<About />} />
    </Routes>
  );
};

export default Router;
