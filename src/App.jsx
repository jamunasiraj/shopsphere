import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import AboutPages from "./pages/AboutPages";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        {/* Public pages */}
        <Route index element={<HomePage />} />
        {/* Shop / Products */}
        <Route path="shop" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        {/* Categories */}
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:category" element={<ProductPage />} />

        {/* Cart & Checkout  */}
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOutPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
