import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function AddToCart({ product }) {
  const { addItem } = useShoppingCart() // also: cartCount, cartDetails, totalPrice

  return (
    <button
      onClick={() => addItem(product)}
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
      Add To Cart
    </button>
  )
}
