import { Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layoutClient";
import CartPage from "./pages/clients/cart";
import HomeClient from "./pages/clients/homeClient";
import BlogPage from "./pages/clients/blog";
import CheckoutPage from "./pages/clients/checkout";
import ContactPage from "./pages/clients/contact";
import SingleProductPage from "./pages/clients/singleProduct";
import RegisterPage from "./pages/clients/register"; // Import trang Register
import LoginPage from "./pages/clients/login"; // Import trang Login
import ShopPage from "./pages/clients/shop"; 

function App() {
    return (
        <Routes>
            {/* Layout dành cho client */}
            <Route path="/" element={<LayoutClient />}>
                <Route index element={<HomeClient />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="shop" element={<ShopPage />} />
                {/* Đường dẫn đến trang chi tiết sản phẩm */}
                <Route path="singleProduct" element={<SingleProductPage />} />
                <Route path="about" element={<h1>Giới thiệu</h1>} />
            </Route>

            {/* Đường dẫn tới trang đăng ký và đăng nhập */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
