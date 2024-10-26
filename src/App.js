import { Routes, Route } from "react-router-dom";
// importation des composants page

import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import NotFound from "./pages/notFoundPage";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <>
      <Navbar />
      <main className="container pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
