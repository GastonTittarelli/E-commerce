import { Link } from "react-router-dom";
import "../../index.css";
import CartWidget from "../CartWidget/CartWidget";
import "../../index.css"

const NavBar = () => {
	return (
		<nav className="w-full flex items-center justify-between bg-gradient-to-r from-gray-500  via-gray-300 to-gray-100 h-[13vh] shadow-md px-8">
			<Link to="/" className="h-full">
				<img
					className="h-full p-2 hover:opacity-90 transition-opacity duration-300 ease-in-out"
					src="/img/logo1png.png"
					alt="Glamour Attic logo"
				/>
			</Link>
			
			<div className="flex items-center h-full">
			<div className="flex items-center h-full">
    <h3 className="text-3xl font-normal tracking-wider text-[#333333] hover:text-[#2b6cb0] transition-colors duration-300 ease-in-out text-large">
        <Link to="/" className="h-full flex items-center">Glamour Attic</Link>
    </h3>
</div>
</div>
<div className="flex space-x-10 text-lg text-subtitle-large">
	<Link className="text-[#333333] relative group" to="/category/men's clothing">
		<p className="relative group-hover:text-[#2b6cb0] transition-colors duration-300 ease-in-out mt-1">
			Men's Clothing
			<span className="block w-0 h-1 bg-[#2b6cb0] transition-all duration-500 ease-in-out group-hover:w-full"></span>
		</p>
	</Link>
	<Link className="text-[#333333] relative group" to="/category/jewelery">
		<p className="relative group-hover:text-[#2b6cb0] transition-colors duration-300 ease-in-out mt-1">
			Jewelry
			<span className="block w-0 h-1 bg-[#2b6cb0] transition-all duration-500 ease-in-out group-hover:w-full"></span>
		</p>
	</Link>
	<Link className="text-[#333333] relative group" to="/category/electronics">
		<p className="relative group-hover:text-[#2b6cb0] transition-colors duration-300 ease-in-out mt-1">
			Electronics
			<span className="block w-0 h-1 bg-[#2b6cb0] transition-all duration-500 ease-in-out group-hover:w-full"></span>
		</p>
	</Link>
</div>



			<Link to="/cart">
				<CartWidget className="hover:scale-105 transition-transform duration-300 ease-in-out" />
			</Link>
		</nav>
	);
};

export default NavBar;



// import { Link } from "react-router-dom";
// import "../../index.css";
// import CartWidget from "../CartWidget/CartWidget";

// const NavBar = () => {
// 	return (
// 		<nav className="w-full flex items-center justify-between bg-gradient-to-r from-gray-500  via-gray-300 to-gray-100 h-[13vh] shadow-md px-8">
// 			<Link to="/" className="h-[100%]">
// 				<img
// 					className="h-[100%] p-2 hover:opacity-90 transition-opacity duration-300 ease-in-out"
// 					src="/img/logo1png.png"
// 					alt="Glamour Attic logo"
// 				/>
// 			</Link>
// 			<div className="flex items-center">
// 				<h3 className="text-2xl text-[#222222] font-bold hover:text-[#646cff] transition-colors duration-300 ease-in-out">
// 					<Link to="/">Glamour Attic</Link>
// 				</h3>
// 			</div>
// 			<div className="flex space-x-10 text-lg">
// 				<Link className="text-white relative group" to="/category/men's clothing">
// 					<p className="relative group-hover:text-[#f5a623]">
// 						Men's Clothing
// 						<span className="block w-0 h-1 bg-[#f5a623] transition-all group-hover:w-full"></span>
// 					</p>
// 				</Link>
// 				<Link className="text-white relative group" to="/category/jewelery">
// 					<p className="relative group-hover:text-[#f5a623]">
// 						Jewelry
// 						<span className="block w-0 h-1 bg-[#f5a623] transition-all group-hover:w-full"></span>
// 					</p>
// 				</Link>
// 				<Link className="text-white relative group" to="/category/electronics">
// 					<p className="relative group-hover:text-[#f5a623]">
// 						Electronics
// 						<span className="block w-0 h-1 bg-[#f5a623] transition-all group-hover:w-full"></span>
// 					</p>
// 				</Link>
// 			</div>
// 			<Link to="/cart">
// 				<CartWidget className="hover:scale-105 transition-transform duration-300 ease-in-out" />
// 			</Link>
// 		</nav>
// 	);
// };

// export default NavBar;
