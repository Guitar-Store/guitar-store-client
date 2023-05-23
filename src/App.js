import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Contexts/Auth0.context";
import { CartProvider } from "./Contexts/Cart.context";
import Header from "./Components/header/Header";
import DropDownButton from "./Components/DropDownMenu/DropDownMenu-container";
import Deals from "./Components/Deals/Deals";
import ProductsList from "./Components/Products/ProductList";
import CartButton from "./Components/cart/CartButton";
import ChatGPT from "./Components/Chat/ChatGPT";
import Sidebar from "./Components/Chat/Sidebar";
import useTitle from "./hooks/useTitle";


function App() {
    useTitle("Guitar Store");

  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <Header />
          <DropDownButton />
          <CartButton />
          <Deals />
          <ProductsList />
          <Sidebar />

          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favourites />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes> */}
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
