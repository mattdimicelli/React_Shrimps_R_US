function Product(props) {
    const { alt, src } = props.img;

    return (
        <div className='product'>
            <img src={src} alt={alt} className="shrimp-image" />
            <h2 className="shrimp-type">{alt}</h2>
            <label>How many?
                <input type="number"></input>
            </label>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

export default Product;