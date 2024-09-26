import React from "react";
import { useCartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return (
		<>
			<FaShoppingCart className="text-[2.3rem] text-[#4a53f1] h-full hover:text-[rgb(48,48,169)]" />
			<span className="text-[1.1rem] font-extrabold text-[#4a53f1]">{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;
