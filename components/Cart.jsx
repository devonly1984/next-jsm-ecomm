import {
	AiOutlineLeft,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShopping,
} from "react-icons/ai";

import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { urlFor } from "../lib/client";
import { useRef } from "react";
import { useStoreContext } from "../context/StoreContext";

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart } =
		useStoreContext();
	return (
		<div className="cart-wrapper" ref={cartRef}>
			<div className="cart-container">
				<button className="cart-heading" onClick={() => setShowCart(false)}>
					<AiOutlineLeft />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities} items)</span>
				</button>
				{cartItems.length < 1 && (
					<div className="empty-cart">
						<AiOutlineShopping size={150} />
						<h3>Your Shopping Cart is Empty</h3>
						<Link href="/">
							<button onClick={() => setShowCart(false)} className="btn">
								Continue Shopping
							</button>
						</Link>
					</div>
				)}
				<div className="product-container">
					{cartItems.length >= 1 &&
						cartItems.map((item, i) => (
							<div className="product" key={item._id}>
								<img
									src={urlFor(item?.image[0])}
									className="cart-product-image"
								/>
								<div className="item-desc">
									<div className="flex top">
										<h5>{item.name}</h5>
										<h4>${item.price}</h4>
									</div>
									<div className="flex bottom">
										<div className="">
											<p className="quantity-desc">
												<span className="minus" onClick={() => {}}>
													<AiOutlineMinus />
												</span>
												<span className="num">0 </span>
												<span className="plus" onClick={() => {}}>
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button className="remove-item" onClick={() => {}}>
											<TiDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
