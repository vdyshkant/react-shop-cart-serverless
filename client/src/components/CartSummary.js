import React from 'react'
import { CartIcon } from './Icons'
import { useShoppingCart } from 'use-shopping-cart'

export default function CartSummary() {
  const { formattedTotalPrice, cartCount } = useShoppingCart()

  return (
    <>
      {console.log('01 ', formattedTotalPrice)}
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">
            {formattedTotalPrice} ({cartCount})
          </span>
        </span>
      </nav>
    </>
  )
}
