import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;