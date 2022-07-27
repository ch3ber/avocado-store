import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Link, Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react'

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <GridItem key={id} p={5} border="1px" borderColor="gray.200">
      <NextLink href={`/product/${id}`} passHref>
        <Link>
          <Box>
            <Image src={image} alt={name} width={333} height={333} />
            <Heading as="h2" size="md" borderTop="3px" borderColor="gray.600">
              {name}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {price}
            </Text>
          </Box>
        </Link>
      </NextLink>
    </GridItem>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    {mapProductsToCards(products)}
  </Grid>
)

export default ProductList
