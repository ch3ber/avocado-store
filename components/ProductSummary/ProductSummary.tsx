import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
// import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
  product: TProduct;
};

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <HStack mt={10}>
      <Box>
        <Image src={product.image} alt={product.name} width={333} height={333} />
      </Box>
      <Box>
        <Heading as='h1' size={'md'}>{product.name}</Heading>
        <Text>${product.price} USD</Text>
        <Text fontSize='xs' fontWeight='bold' p={2} w={36} bgColor='gray.100' color={'gray.600'} borderRadius={'md'}>SKU: {product.sku}</Text>
        <AddToCart product={product} />
      </Box>
    </HStack>
    <ProductAttributes {...product.attributes} />
  </>
)

// <>
// <Item.Group as="section">
// <Item style={{ alignItems: 'center' }}>
// <Item.Image size="medium">
// <img src={product.image} alt={product.name} />
// </Item.Image>
// <Item.Content>
// <Item.Header as="h1">{product.name}</Item.Header>
// <Item.Description>
// <p>{product.price}</p>
// <Label>{`SKU: ${product.sku}`}</Label>
// </Item.Description>
// <Item.Extra>
// <AddToCart product={product} />
// </Item.Extra>
// </Item.Content>
// </Item>
// </Item.Group>
// <ProductAttributes {...product.attributes} />
// </>

export default ProductSummary
