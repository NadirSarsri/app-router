import { Routes, Route } from "react-router-dom";
// imports page components
import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
// import navbar component from "./components"
import Navbar from "./components/navbar";
import NotFound from "./pages/notFound";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />

        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
