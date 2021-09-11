import Product from './Product';
import shrimpsImgs from './shrimps';
import uniqid from 'uniqid';



function ProductSelection(props) {
    const shrimpProductCards = shrimpsImgs.map(img => {
        return <Product img={img} key={uniqid()} />
    });
         

    return (
        <div className="shrimp-wrapper">
            {shrimpProductCards}
        </div>
    )
}

export default ProductSelection;