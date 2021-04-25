import React from 'react';

const Product = (props) => {
    // console.log(props)
    const {addToCart,product}= props;
    return (
        <div style={{border:'1px solid tomato' ,margin:'2%' ,padding:'3%'}}>
            <h5>{product.name}</h5>
            <button onClick={()=>addToCart(product.id,product.name)}>Add to  cart</button>
        </div>
    );
};

export default Product;