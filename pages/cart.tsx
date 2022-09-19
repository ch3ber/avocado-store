import React from 'react'
import { Divider } from '@chakra-ui/react'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider my={10} />
      <CartSummary totalAmount={count} />
    </>
  )
}

export default CartPage
