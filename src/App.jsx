import { BrowserRouter, Routes, Route } from "react-router";



import Layout from "./Components/Layout";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Signup from "./Pages/Signup"
import Contact from "./Pages/Contact"
import Shop from "./Pages/Shop"
import Login from "./Pages/Login"
import { ThemeProvider } from "./Components/CartContext";

import AllProduct from "./Components/AllProduct";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/singup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/allproduct" element={<AllProduct/>} />
              <Route path="/allproduct/:id" element={<ProductDetails/> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider> 
  )
}

export default App;
