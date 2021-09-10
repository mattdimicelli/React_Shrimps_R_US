import shrimpLogo from '../images/shrimp-logo-solo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function NavBar(props) {
    return (
        <nav className="nav-bar">
            <img className="product-img" src={shrimpLogo} alt="icon of a happy, standing shrimp with his claws outstretched" />
            <ul>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/shop">Shop</Link></li>
                <li className='nav-item'><FontAwesomeIcon icon= {faShoppingCart} /><div className="count"></div></li>
            </ul>
        </nav>
    );
}
export default NavBar;