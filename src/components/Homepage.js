import NavBar from './NavBar';
import forrestGumpPic from '../images/forrest.jpg';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div className='homepage'>
            <NavBar />
            <div className='homepage-body'>
                <img className='forrest-pic' src={forrestGumpPic} alt="Forrest Gump's face" />
                <div className='about-buybtn-container'>
                    <p className='about'>"Anyway, like I was sayin', shrimp is the fruit of the sea. 
                    You can barbecue it, boil it, broil it, bake it, saute it.
                    There's uh, shrimp-kabobs, shrimp creole, shrimp gumbo.
                    Pan fried, deep fried, stir-fried. There's pineapple shrimp, 
                    lemon shrimp, coconut shrimp, pepper shrimp, shrimp soup, 
                    shrimp stew, shrimp salad, shrimp and potatoes, shrimp burger, 
                    shrimp sandwich. That- that's about it."</p>
                    <div>
                        <Link className="buy-shrimps-btn" to="/shop">BUY SHRIMPS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;