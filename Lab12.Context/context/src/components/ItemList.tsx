import itemsData from '../itemsData.json';
import ItemCard from './ItemCard';

const ItemList = () => {
    return (
        <div className='items-grid'>
            {itemsData.map((item) => (
                <ItemCard
                    key={item.id}
                    id={item.id}
                    symbol={item.symbol}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
}

export default ItemList;