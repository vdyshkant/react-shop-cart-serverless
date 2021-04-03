import React from 'react'
// import { useShoppingCart } from 'use-shopping-cart'
import formatProductPrice from '../utils/formatProductPrice'

export default function CartItem({ cartItem }) {
  // console.log('02 ', cartItem)
  const { name, quantity, image } = cartItem
  const price = formatProductPrice(cartItem)
  // const { addItem, removeItem } = useShoppingCart()

  return (
    <div className="flex w-full">
      <div className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 w-full justify-between">
        <div className="flex">
          <img className="h-16 w-16 rounded-full object-cover mx-1" src={image} alt="avatar" />
          <p className="text-gray-600 text-lg mx-2">
            <span className="font-bold">{name}</span> <br />
            {price} x {quantity}
          </p>
        </div>
        <div>
          <input style={{ width: 50 }} className="border-solid border-2" type="number" value={`${quantity}`} min={0} />
        </div>
      </div>
    </div>
  )
}
