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
        </Wrapper>
    )
}

export default Carts;