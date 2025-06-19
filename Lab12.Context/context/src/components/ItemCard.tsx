import { useContext, useState } from "react";
import { CartContext } from "../cart-context";

interface ItemCardProps {
    id: number;
    symbol: string;
    name: string;
    price: number
};

const ItemCard = ({id, symbol, name, price}: ItemCardProps) => {
    const {addToCart} = useContext(CartContext);

    function handleAddToCard(): void {
        addToCart(Number(id));
    }

    return (
        <div className="item-card">
            <div className="symbol">{symbol}</div>
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
            <button onClick={handleAddToCard}>Add to cart</button>
        </div>
    );
}


export default ItemCard;