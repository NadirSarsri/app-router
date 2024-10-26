import { Routes, Route, Navigate } from "react-router-dom";
// importation des composants page

import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import NotFound from "./pages/notFoundPage";
import ProductDetails from "./components/productDetails";

import { AuthProvider, useAuth } from "./utils/auth";
import { ProtectedRoute } from "./pages/protectedRoute";

function App() {
  const auth = useAuth();
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="container pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />

            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />

            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AuthProvider>
    </>
  );
}

export default App;
