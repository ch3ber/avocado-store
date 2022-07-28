import { AppProps } from 'next/app'
import CartProvider from '@store/Cart'
import Layout from '@components/Layout/Layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    main: {
      200: '#89d47f',
      700: '#153830'
    }
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  )
}

export default MyApp
