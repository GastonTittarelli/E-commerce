import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import db from "../../../db/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


  

const override = {
	display: "block",
	margin: "auto",
	borderColor: "rgba(80, 77, 233, 1)",
};

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();
	const [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#2b6cb0");
	const itemsRef = collection(db, "items");

	const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

	const getProducts = async () => {
		let q = collection(db, "items");
		if (category) {
			q = query(q, where("category", "==", category));
		}
		const itemsCollection = await getDocs(q);
		const items = itemsCollection.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		setProducts(items);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, [category]);

	return (
		<div className="flex items-center justify-center w-full min-h-[87vh]">
			{loading ? (
				<ClipLoader
					color="blue"
					loading={loading}
					cssOverride={{ borderColor: color }}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			) : (
				
				<div className="w-full min-h-[80%] p-[3vh] pb-[5vh] flex justify-around flex-wrap gap-[1rem]">
					{products.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			)}
			<button
				onClick={scrollToTop}
				className="fixed bottom-5 left-5 bg-blue-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-blue-600 active:bg-blue-800 transition duration-300"
			>
				<FontAwesomeIcon icon={faArrowUp} className="text-xl" />
			</button>
		</div>
	);
};

export default ItemListContainer;
