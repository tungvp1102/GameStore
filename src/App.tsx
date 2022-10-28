import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Browse from "./Pages/Browse/Browse";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Layout } from "./components/Layout/Layout";
import Cart from "./Pages/Cart/Cart";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Game from "./components/Layout/Game/Game";
import Store from "./Pages/Store/Store";
import CartProvider from "./context/CartContext";
import { PrivateRoutes } from "./components/PrivateRouter";
import { Outlet } from "./components/Layout/Outlet/Outlet";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="/browse" element={<Browse />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/store" element={<Store />}>
                  <Route path="/store" element={<Outlet />} />
                </Route>
                
                <Route path="/store/:productID" element={<Game />} />
                
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/404" element={<ErrorPage />} />
            </Route>
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
