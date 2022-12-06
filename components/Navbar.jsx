import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import Link from "next/link";
import { useStoreContext } from "../context/StoreContext";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStoreContext();
	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Headphone Store</Link>
			</p>
			<button className="cart-icon" onClick={() => setShowCart(true)}>
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>
			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
