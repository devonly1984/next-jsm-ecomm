import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StoreContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState();
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(0);
	const incQty = () => {
		setQty((prev) => prev + 1);
	};
	const decQty = () => {
		setQty((prev) => {
			if (prev - 1 < 1) return 1;
			else return prev - 1;
		});
	};
	const onAdd = (product, quantity) => {
		const productInCart = cartItems.find((item) => item._id === product._id);
		setTotalPrice((prev) => prev + product.price * quantity);
		setTotalQuantities((prev) => prev + quantity);
		if (productInCart) {
			const updatedCartItems = cartItems.map((cartItem) => {
				if (cartItem._id === product._id) {
					return {
						...cartItem,
						quantity: cartItem.quantity + quantity,
					};
				}
			});
			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;
			setCartItems([...cartItems, { ...product }]);
		}
		toast.success(`${qty} ${product.name} added to the cart`);
	};

	return (
		<Context.Provider
			value={{
				showCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				setShowCart,
				showCart,
				totalQuantities,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStoreContext = () => {
	return useContext(Context);
};
