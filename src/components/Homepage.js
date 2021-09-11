import NavBar from './NavBar';
import forrestGumpPic from '../images/forrest.jpg';
import { Link } from 'react-router-dom';

function Homepage(props) {
    const { itemCount } = props;
    return (
        <div className='homepage'>
            <NavBar itemCount={itemCount} />
            <div className='homepage-body'>
                <img className='forrest-pic' src={forrestGumpPic} alt="Forrest Gump's face" />
                <div className='about-buybtn-container'>
                    <p className='about'>"Mama always said you are what you eat.  That's why I named
                    my business Shrimps R Us.  Because we eat a lot of shrimp."</p>
                    <p className='about'>"Actually, I used to have another shrimp business called 
                    Bubba Gump Shrimp Co.  But then Paramount Pictures stole it 
                    from me and sold it to a Rusty Pelican or something.  That 
                    wasn't very nice.  But now thanks to Matt and The Odin
                    Project I've gone digital, as they say these days.  That's 
                    all I have to say about that."</p>
                    <div>
                        <Link className="buy-shrimps-btn" to="/shop">BUY SHRIMPS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;