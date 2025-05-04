import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./assets/Components/Layout";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Singup from "./assets/Pages/Singup";
import Contact from "./assets/Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
