import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Browse from "./Pages/Browse/Browse";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Layout } from "./components/Layout";
import Cart from "./Pages/Cart/Cart"
import LogIn from "./Pages/LogIn/LogIn"

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/browse" element={<Browse />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/log-in" element={<LogIn />} />
      </Route>
    </Routes>
  </Router>;
}

export default App;
