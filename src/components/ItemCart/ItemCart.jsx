import React from "react";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({ item }) => {
	const { removeProduct } = useCartContext();
	return (
		<div className="flex border-t border-b border-gray-500 max-w-[90%] my-[1rem] mx-auto items-center justify-center">
			<img src={item.image} alt={item.title} className="w-[200px] h-[200px] mr-[1rem]" />
			<div className="flex justify-between items-center text-center w-[75%]">
				<p className="text-[1.2rem] font-extrabold m-0 w-[40%]">{item.title}</p>
				<p>Quantity: {item.quantity}</p>
				<p>Price: ${item.price}</p>
				<p>Subtotal: ${item.quantity * item.price} </p>
				<button
					className="bg-[#d23404] text-white border-none rounded-[5px] text-[1rem] font-extrabold cursor-pointer hover:bg-[#a60c0c]"
					onClick={() => removeProduct(item.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ItemCart;
