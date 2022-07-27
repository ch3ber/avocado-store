import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Link, Spacer, Container, Box, chakra } from '@chakra-ui/react'
import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Box boxShadow="base" w="full" mb={4}>
      <Flex justifyContent="space-between">
        <NextLink href="/" passHref>
          <Link bg={pathname === '/' ? 'gray.200' : 'white'}>
            <Flex alignItems="center" py={4} px={8}>
              <Avocado />
              Avo Store
            </Flex>
          </Link>
        </NextLink>

        <NextLink href="/cart" passHref>
          <Link bg={pathname === 'cart' ? 'gray.50' : 'white'}>
            <Box py={4} px={8}>
              <ShoppingCartIcon cartCount={0} name="Canasta" />
            </Box>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  )
}

export default Navbar
