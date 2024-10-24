import { Routes, Route } from "react-router-dom";
// importation des composants page

import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
