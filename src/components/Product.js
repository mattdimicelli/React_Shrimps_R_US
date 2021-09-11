import { useState } from 'react';

function Product(props) {
    const { alt, src } = props.img;
    const { setItemCount } = props;
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setItemCount(prevCount => {
            if(!prevCount) return Number(inputValue);
            return prevCount + Number(inputValue);
        });
    }

    function handleOnChange(e) {
        if(e.target.value < 1) return;
        setInputValue(e.target.value);
    }

    return (
        <div className='product'>
            <img src={src} alt={alt} className="shrimp-image" />
            <h2 className="shrimp-type">{alt}</h2>
            <form onSubmit={handleSubmit}>
            <label>How many?
                <input type="number" value={inputValue} onChange={handleOnChange}></input>
            </label>
            <button className="add-to-cart-btn">Add to Cart</button>
            </form>
            
        </div>
    );
}

export default Product;