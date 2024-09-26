import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../../index.css";
import Swal from "sweetalert2";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	const [buyerInfo, setBuyerInfo] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		confirmEmail: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setBuyerInfo({ ...buyerInfo, [name]: value });
	};

	const canSubmit =
		buyerInfo.firstName &&
		buyerInfo.lastName &&
		buyerInfo.phone &&
		buyerInfo.email &&
		buyerInfo.confirmEmail &&
		buyerInfo.email === buyerInfo.confirmEmail;

	const order = {
		buyer: {
			name: buyerInfo.firstName + " " + buyerInfo.lastName,
			email: buyerInfo.email,
			phone: buyerInfo.phone,
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		Swal.fire({
			title: "Order confirmation",
			text: "Would you like to confirm your purchase?",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Buy it!",
		}).then((result) => {
			if (result.isConfirmed) {
				const db = getFirestore();
				const ordersCollection = collection(db, "orders");
				addDoc(ordersCollection, order)
					.then(({ id }) => {
						Swal.fire({
							title: "Successful!",
							text: `Your order has been processed! Order number: ${id}`,
							icon: "success",
							confirmButtonText: "Ok",
						}).then(() => {
							window.location.href = "/";
						});
					})
					.catch((error) => {
						console.error("Error adding document: ", error);
						alert(
							"An error occurred while processing the order. Please try again."
						);
					});
			}
		});
	};

	if (cart.length === 0) {
		return (
			<>
				<p className="text-[2rem] font-['Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif] font-semibold text-black mt-[2rem] mb-[1rem]">Oops! The Cart Is Empty!</p>
				<Link className="bg-[rgb(149,147,10)] text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[rgb(168,166,6)]" to="/">
					Go to store
				</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((item) => (
				<ItemCart key={item.id} item={item} />
			))}
			<p className="text-[1.5rem] font-semibold text-black mb-[1rem] bg-[rgb(217,216,213)]">Total: ${totalPrice().toFixed(2)}</p>

			<form className="flex flex-col items-center justify-center w-[40%] h-auto mx-auto mt-[3rem] pt-[1rem] pb-[1rem] bg-[rgb(205,218,219)] rounded-[10px]">
				<div>
					<label className="label" htmlFor="firstName">
						First Name:
					</label>
					<input
						className="imput"
						type="text"
						id="firstName"
						name="firstName"
						value={buyerInfo.firstName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label className="label" htmlFor="lastName">
						Last Name:
					</label>
					<input
						className="imput"
						type="text"
						id="lastName"
						name="lastName"
						value={buyerInfo.lastName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label className="label" htmlFor="phone">
						Phone:
					</label>
					<input
						className="imput"
						type="text"
						id="phone"
						name="phone"
						value={buyerInfo.phone}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label className="label" htmlFor="email">
						Email:
					</label>
					<input
						className="imput"
						type="email"
						id="email"
						name="email"
						value={buyerInfo.email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label className="label" htmlFor="confirmEmail">
						Confirm Email:
					</label>
					<input
						className="imput"
						type="email"
						id="confirmEmail"
						name="confirmEmail"
						value={buyerInfo.confirmEmail}
						onChange={handleInputChange}
					/>
				</div>
			</form>

			<button
				className="bg-green-500 text-white w-[10%] h-auto border-none rounded-[5px] mt-[1rem] mb-[1.5rem] hover:bg-[#3e8e41]"
				disabled={!canSubmit}
				onClick={handleClick}
			>
				Buy cart
			</button>
		</>
	);
};


export default Cart;
