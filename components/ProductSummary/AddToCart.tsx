import React, { useState } from 'react'
import { useCartMutations } from '@store/Cart'
import { Button, HStack, Text, ScaleFade, Box, Input } from '@chakra-ui/react'
import { CheckIcon, WarningTwoIcon } from '@chakra-ui/icons'

type AddToCartProps = {
  product: TProduct;
};

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(target.value, 10))
  }

  return (
    <>
    <HStack mt={3}>
      <Input type='number' min={1} onChange={handleChange} value={quantity} />
      <Button colorScheme={'main'} onClick={handleSubmit} py={4} px={8} isLoading={loading} disabled={loading}>Add to Cart</Button>
    </HStack>
    <Box>
      {error && (<Text color='red.500'><WarningTwoIcon /> {error}</Text>)}
      <ScaleFade initialScale={0.5} in={visible}>
        <Text color='green.300'> <CheckIcon /> Added to cart</Text>
      </ScaleFade>
    </Box>
    </>
  )
}

export default AddToCart
