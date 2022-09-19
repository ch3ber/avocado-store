import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Link, Container, Box } from '@chakra-ui/react'
import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Box boxShadow="base" w="full">
      <Container maxW="container.md" p={0}>
        <Flex justifyContent="space-between">
          <NextLink href="/" passHref>
            <Link bg={pathname === '/' ? 'blackAlpha.200' : 'transparent'}>
              <Flex alignItems="center" py={4} px={8}>
                <Avocado />
                Avo Store
              </Flex>
            </Link>
          </NextLink>

          <NextLink href="/cart" passHref>
            <Link bg={pathname === 'cart' ? 'blackAlpha.200' : 'transparent'}>
              <Box py={4} px={8}>
                <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
              </Box>
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
