import React from 'react'
import Link from 'next/link'
import { CartItemType } from '@store/Cart'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Button
} from '@chakra-ui/react'

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  loading?: boolean;
};

const CartItemList = ({
  items,
  removeFromCart,
  loading = false
}: CartItemListProps) => {
  if (loading) return <Spinner />

  if (items.length === 0) {
    return (
      <Alert status="warning">
        <AlertTitle>Your cart is empty</AlertTitle>
        <AlertIcon />
        <AlertDescription>
          You will need to add some items to the cart before you can checkout.
        </AlertDescription>
      </Alert>
    )
  }

  // const mapCartItemsToItems = (items: CartItemType[]) =>
  // items.map((cartItem) => {
  // const { id, name, quantity, price, image } = cartItem

  // return {
  // childKey: id,
  // header: (
  // <Item.Header>
  // <Link href={`/product/${id}/`}>
  // <a>{name}</a>
  // </Link>
  // </Item.Header>
  // ),
  // image: (
  // <Item.Image
  // src={image}
  // alt={name}
  // size="small"
  // style={{ background: '#f2f2f2' }}
  /// >
  // ),
  // meta: `${quantity} x ${price}`,
  // description: 'Some more information goes here....',
  // extra: (
  // <Button
  // colorScheme="teal"
  // onClick={() => removeFromCart(cartItem)}
  // ></Button>
  // )
  // }
  // })

  // return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />

  return <h1>No disponible</h1>
}

export default CartItemList
