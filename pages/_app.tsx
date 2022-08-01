import { AppProps } from 'next/app'
import CartProvider from '@store/Cart'
import Layout from '@components/Layout/Layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    main: {
      50: '#f3faf2',
      100: '#cfeecb',
      200: '#89d47f',
      300: '#66c759',
      400: '#49b13c',
      500: '#3a8b2f',
      600: '#2a6522',
      700: '#1a3f15'
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
