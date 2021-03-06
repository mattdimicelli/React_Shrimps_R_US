import ProductSelection from './ProductSelection';
import NavBar from './NavBar';

function Shop(props) {
    const { itemCount, setItemCount } = props;
    console.log(props);
    return (
        <div className="shop-page">
            <NavBar itemCount={itemCount} />
            <p className='quote'>"Anyway, like I was sayin', shrimp is the fruit of the sea. 
            You can barbecue it, boil it, broil it, bake it, saute it.
            There's uh, shrimp-kabobs, shrimp creole, shrimp gumbo.
            Pan fried, deep fried, stir-fried. There's pineapple shrimp, 
            lemon shrimp, coconut shrimp, pepper shrimp, shrimp soup, 
            shrimp stew, shrimp salad, shrimp and potatoes, shrimp burger, 
            shrimp sandwich. That- that's about it."</p>
            <div className="product-selection-wrapper">
                <ProductSelection setItemCount={setItemCount} />
            </div>
        </div>
    );
}

export default Shop;