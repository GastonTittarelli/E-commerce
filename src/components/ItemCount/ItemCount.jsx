import React, { useState, useEffect } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="w-full h-[20%] text-center flex items-center justify-center flex-wrap" >
			<button
				className="bg-[#f2f2f2] border border-[#ccc] w-[20%] text-[#555] p-[4px] text-center no-underline inline-block text-[1rem] font-bold cursor-pointer h-[30px]"
				disabled={count <= 1}
				onClick={decrease}
			>
				-
			</button>
			<span className="w-[20%] text-black text-center text-[20px] font-bold">{count}</span>
			<button
				className="bg-[#f2f2f2] border border-[#ccc] w-[20%] text-[#555] p-[4px] text-center no-underline inline-block text-[1rem] font-bold cursor-pointer h-[30px]"
				disabled={count >= stock}
				onClick={increase}
			>
				+
			</button>
			<div className="w-[90%]">
				<button
					className="bg-green-500 text-white w-[80%] h-auto border-none rounded-[5px] p-[5px] m-[5px] hover:bg-[#3e8e41]"
					disabled={stock <= 0}
					onClick={() => onAdd(count)}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
