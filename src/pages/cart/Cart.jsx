import React from 'react'

import Header from "../../components/frontend/Header"
import CartItem from "../../components/frontend/CartItem"
import { CartProvider } from 'react-use-cart'

const Cart = () => {

    return (
        <div>
          {/* Cart provaider */}
                <Header />
                <CartItem />
           
        </div>
    )
}

export default Cart