import { Link } from 'react-router-dom';
import heroLogo from '../assets/shop.jpg'

const HomePage = () => {
    return (
        <>
            <div>
                <h2>Bring your home to life.</h2>
                <p>Elevate your living space with a touch of nature.</p>
                <p>We offer a range of easy-care houseplants.</p>
                <br/>
                <Link to="/shop">Shop</Link>
                <img src={heroLogo} />
            </div>
        </>
    );
}

export default HomePage;