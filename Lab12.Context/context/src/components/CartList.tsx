import { useContext } from "react";
import { CartContext } from "../cart-context";

const CartList = () => {
    const { itemsInCart } = useContext(CartContext);

    return (
        <>
        <h2>Cart</h2>
        <div className="cart-wrapper">
            {itemsInCart.map((item) => (
                <span key="{item.id}">{item.symbol}</span>
            ))}

        </div>
        </>
    );
}

export default CartList;