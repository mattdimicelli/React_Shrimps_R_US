function Product(props) {
    const { alt, src } = props.img;

    return (
        <div className='product'>
            <img src={src} alt={alt} />
            <h2>{alt}</h2>
            <label>How many?
                <input type="number"></input>
            </label>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;