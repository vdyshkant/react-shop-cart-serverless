import React from 'react'
import toast from 'react-hot-toast'
import { useShoppingCart } from 'use-shopping-cart'

export default function AddToCart({ product }) {
  const { addItem } = useShoppingCart() // also: cartCount, cartDetails, totalPrice

  function handleAddItem() {
    addItem(product)
    toast.success(`${product.name} has been added to your cart`)
  }

  return (
    <button
      onClick={handleAddItem}
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
      Add To Cart
    </button>
  )
}
