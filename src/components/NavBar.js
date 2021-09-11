import shrimpLogo from '../images/shrimp-logo-solo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function NavBar(props) {
    const { itemCount } = props;
    return (
        <nav className="nav-bar">
            <img className="product-img" src={shrimpLogo} alt="icon of a happy, standing shrimp with his claws outstretched" />
            <ul className='nav-bar-link-list'>
                <li className='nav-item home-link'><Link to="/">HOME</Link></li>
                <li className='nav-item shop-link'><Link to="/shop">SHOP</Link></li>
                <li className='nav-item shopping-cart'><FontAwesomeIcon icon= {faShoppingCart} /><span className="count">{itemCount}</span></li>
            </ul>
        </nav>
    );
}
export default NavBar;