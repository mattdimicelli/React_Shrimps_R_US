import Product from './Product';
import shrimpsImgs from './shrimps';
import uniqid from 'uniqid';



function ProductSelection(props) {
    const { setItemCount } = props;
    const shrimpProductCards = shrimpsImgs.map(img => {
        return <Product img={img} key={uniqid()} setItemCount={setItemCount} />
    });
         

    return (
        <div className="shrimp-wrapper">
            {shrimpProductCards}
        </div>
    )
}

export default ProductSelection;