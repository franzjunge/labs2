import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CartContext } from "../cart-context";

const CartList = () => {
    const { itemsInCart } = useContext(CartContext);

    return (
        <>
        <h2>Cart</h2>
        <div className="cart-wrapper">
            {itemsInCart.map((item) => {
                const _id = uuidv4();

                return (
                    <span key={_id}>{item.symbol}</span>
                )
            } )}
        </div>
        </>
    );
}

export default CartList;