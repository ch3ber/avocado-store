import { Box, Heading, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
  product: TProduct;
};

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)')

  return (
    <>
      <Stack direction={isLargerThan680 ? 'row' : 'column'} mt={10}>
        <Box>
          <Image src={product.image} alt={product.name} width={333} height={333} />
        </Box>
        <Box>
          <Heading as='h1' size={'md'}>{product.name}</Heading>
          <Text>${product.price} USD</Text>
          <Text fontSize='xs' fontWeight='bold' p={2} w={36} bgColor='gray.100' color={'gray.600'} borderRadius={'md'}>SKU: {product.sku}</Text>
          <AddToCart product={product} />
        </Box>
      </Stack>
      <ProductAttributes {...product.attributes} />
    </>
  )
}

export default ProductSummary
