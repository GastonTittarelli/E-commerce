import { Link } from "react-router-dom";
import "../../index.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
	return (
		<nav className="w-full flex items-center justify-around bg-[#cddadb] h-[13vh]">
			<Link to="/">
				<img
					className="h-28 p-6 justify-between hover:filter hover:drop-shadow-[0_0_10px_rgba(85,85,196)] transition-all duration-300 ease-linear" 
					href=""
					src="/img/logo1png.png"
					alt="Glamour Attic logo"
				/>
			</Link>
			<Link to="/">
				<h3 className="flex items-center text-2xl m-0 h-1/2 text-[#646cff] no-underline font-[600] font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans',Arial,sans-serif]">Glamour Attic</h3>
			</Link>
			<div className="w-2/5 flex justify-around items-center">
				<Link to="/category/men's clothing">
					<p className="anchors" href="">
						Men's Clothing
					</p>
				</Link>
				<Link to="/category/jewelery">
					<p className="anchors">Jewelry</p>
				</Link>
				<Link to="/category/electronics">
					<p className="anchors">Electronics</p>
				</Link>
			</div>
			<Link to="/cart">
				<CartWidget />
			</Link>
		</nav>
	);
};

export default NavBar;
