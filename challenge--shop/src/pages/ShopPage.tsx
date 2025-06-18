import Plant from '../components/Plant';
import plants from '../assets/data.json';

const ShopPage = () => {
    return (
        <>
            <div>
                <h2>Our plants</h2>
                <ul>
                    {plants.map((item) => (
                        <li key={item.id}>
                          <Plant 
                                name={item.name} 
                                price={item.price} 
                                imageUrl={item.imageUrl}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ShopPage;