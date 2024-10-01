import React from "react";
import { useCartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return (
		<div className="relative">
    <FaShoppingCart className="text-[2rem] text-[#333333] h-full hover:text-[#2b6cb0] transition-colors duration-300 ease-in-out large-cart" />
    {totalProducts() > 0 && (
        <span className="absolute bottom-0 right-[-3px] bg-[#2b6cb0] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center large-span">
            {totalProducts()}
        </span>
    )}
</div>
	);
};

export default CartWidget;
