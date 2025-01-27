import { Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";

export const routes = (
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
);
