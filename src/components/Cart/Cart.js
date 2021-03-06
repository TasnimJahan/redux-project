import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
    console.log(props);
    const {cart,removeFromCart} = props;
    return (
        <div>
            <h4>This is cart</h4>
            <ul>
                {
                    cart.map(product=> <li key={product.cartId}>{product.name} <button onClick={()=>removeFromCart(product.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state =>{
    return {
        cart: state.cart,
        // products: state.products
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);