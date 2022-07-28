import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <GridItem
      key={id}
      p={[4, 8]}
      border="1px"
      borderColor="gray.100"
      boxShadow="lg"
      borderRadius={3}
    >
      <Box>
        <Image src={image} alt={name} width={333} height={333} />

        <Divider bg="gray.400" height="1px" mb={3} />

        <VStack align="stretch" spacing={3}>
          <Box minH={24}>
            <Heading as="h2" size="lg">
              {name}
            </Heading>
            <Text color="gray.600">${price} UDS</Text>
          </Box>

          <Flex justifyContent="flex-end">
            <NextLink href={`/product/${id}`} passHref>
              <Link py={3} px={5} bg="gray.200" borderRadius={3}>
                Ver Producto
              </Link>
            </NextLink>
          </Flex>
        </VStack>
      </Box>
    </GridItem>
  ))

const ProductList = ({ products }: ProductListProps) => {
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)')

  return (
    <Grid
      templateColumns={isLargerThan680 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}
      gap={10}
    >
      {mapProductsToCards(products)}
    </Grid>
  )
}

export default ProductList
