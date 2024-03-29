import React from 'react'
import NextLink from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import { Box, Center, Link } from '@chakra-ui/react'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList
    }
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <>
      <KawaiiHeader />
      <Box mb={8}>
        <NextLink href="/yes-or-no" passHref>
          <Center>
            <Link color="blue.500"> ¿Deberia comer un avo hoy? </Link>
          </Center>
        </NextLink>
      </Box>
      <ProductList products={productList} />
    </>
  )
}

export default HomePage
