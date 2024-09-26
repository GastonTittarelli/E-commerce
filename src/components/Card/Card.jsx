import { Link } from "react-router-dom";

const Card = ({ product }) => {
	return (
		<Link to={`/item/${product.id}`} className="flex flex-col justify-around items-center w-[16vw] h-[45vh] bg-white rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out cursor-pointer p-[10px]">
			<h3 className="text-[1rem] text-black">{product.title}</h3>
			<img className="w-[50%] h-[30%]" src={product.image} alt={product.title} />
			<h4 className="text-black">${product.price}</h4>
			<div className="h-[10vh] text-[0.9rem] overflow-auto text-black">
				<p>{product.description}</p>
			</div>
		</Link>
	);
};

export default Card;
