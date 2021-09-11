import ProductSelection from './ProductSelection';
import NavBar from './NavBar';

function Shop(props) {
    return (
        <div className="shop-page">
            <NavBar />
            <div className="product-selection-wrapper">
                <ProductSelection />
            </div>
        </div>
    );
}

export default Shop;