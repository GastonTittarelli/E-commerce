import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const override = {
	display: "block",
	margin: "auto",
	borderColor: "rgba(80, 77, 233, 1)",
};

export const ItemDetailContainer = ({ data }) => {
	const [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#ffffff");
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const [selectedProduct, setSelectedProduct] = useState({});

	const [goToCart, setGotoCart] = useState(false);
	const { addProduct } = useCartContext();

	useEffect(() => {
		const queryDb = getFirestore();
		const queryDoc = doc(queryDb, "items", id);
		getDoc(queryDoc)
			.then((res) => setProduct({ id: res.id, ...res.data() }))
			.then(() => setLoading(false));
	}, []);

	const onAdd = (quantity) => {
		setGotoCart(true);
		addProduct(product, quantity);
	};

	return (
		<div>
			{loading ? (
				<ClipLoader
					color={color}
					loading={loading}
					cssOverride={override}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			) : (
				<div className="w-full h-[80vh] flex justify-center items-center">
					<div className="flex flex-col justify-around items-center w-[16vw] h-[45vh] bg-white rounded-[10px] shadow-md transition-all duration-300 ease-in-out cursor-pointer p-[10px]">
						<h3 className="text-[1rem] text-black">{product.title}</h3>
						<img
							className="w-[50%] h-[30%]"
							src={product.image}
							alt={product.title}
						/>
						<h4 className="text-black">${product.price}</h4>
						<div className="h-[10vh] text-[0.9rem] overflow-auto text-black">
							<p>{product.description}</p>
						</div>
						{goToCart ? (
							<>
								<Link to="/cart" className="w-[80%]">
									<button className="bg-green-500 text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[#3e8e41]">Go to Cart</button>
								</Link>
								<Link to="/" className="w-[80%]">
									<button className="bg-[rgb(149,147,10)] text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[rgb(168,166,6)]">
										Continue Shopping
									</button>
								</Link>
							</>
						) : (
							<ItemCount initial={1} stock={7} onAdd={onAdd} />
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ItemDetailContainer;
