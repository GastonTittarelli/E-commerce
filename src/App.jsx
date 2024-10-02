import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import React from "react";
import CartProvider from "./context/CartContext";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="bg-slate-50">
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="category/:category" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Cart />} />
					<Route path="item/:id" element={<ItemDetailContainer />} />
					<Route path="/not-found" element={<NotFound/>} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
				<Footer />
			</CartProvider>
		</div>
	);
}

export default App;
