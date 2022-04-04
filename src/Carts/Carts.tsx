import CartItem from '../CartItems/CartItem'

import {Wrapper} from './Carts.styles'

//types

import {CartItemType}  from '../App'
import React from 'react'

type Props={
    cartItems:CartItemType[];
    addToCart:(clickedItem:CartItemType ) => void;
    removeFromCart:(id:number) => void
}
const Carts :React.FC< Props>=({cartItems,addToCart,removeFromCart}) =>{
    const CalculateTotal=(items:CartItemType[]) => 
    items.reduce((ack:number,item)=> ack + item.amount * item.price,0);
    return(
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length ===0 ? <p>no items</p> : null}

            {cartItems.map(item=>( 
                 
                <CartItem
              //  key={item.id}
                item  ={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}

                />
            ))}
            <h2>Total:{CalculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Carts;