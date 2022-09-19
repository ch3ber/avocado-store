import React from 'react'
import NextLink from 'next/link'
import { CartItemType } from '@store/Cart'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Button,
  Flex,
  VStack,
  Text,
  Link,
  useMediaQuery
} from '@chakra-ui/react'
import Image from 'next/image'
import { SmallCloseIcon } from '@chakra-ui/icons'

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

  const mapCartItemsToItems = (items: CartItemType[]) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLargerThan680] = useMediaQuery('(min-width: 680px)')

    return items.map((cartItem) => {
      const { id, name, quantity, price, image, attributes } = cartItem

      return (
        <Flex flexDirection={isLargerThan680 ? 'row' : 'column'} alignItems='center' key={id} as='article' p={7} borderRadius='md' border="1px" borderColor="gray.200" boxShadow='sm'>
          <Image src={image} alt={name} width={200} height={200} />
          <Flex ml={5} flexDirection='column' gap={2} w="70%">
            <NextLink href={`/product/${id}/`} passHref>
              <Link color='blue.600' fontSize='xl'>{name}</Link>
            </NextLink>
            <Text fontWeight='bold' color="gray.600">{quantity} x ${price} USD</Text>
            {attributes.description}
            <Button onClick={() => removeFromCart(cartItem)}><SmallCloseIcon /></Button>
          </Flex>
        </Flex>
      )
    })
  }

  return <VStack mt={10} spacing={5}>{mapCartItemsToItems(items)}</VStack>
}

export default CartItemList
