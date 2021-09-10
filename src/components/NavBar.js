import shrimpLogo from '../images/shrimp-logo-vector.svg';
import { Link } from 'react-router-dom';
function NavBar(props) {
    return (
        <nav>
            <img src={shrimpLogo} alt="icon of a happy, standing shrimp with his claws outstretched" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li></li>
            </ul>

        </nav>
    )
}
export default NavBar;