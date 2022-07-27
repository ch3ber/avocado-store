import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import Footer from '@components/Footer/Footer'
import { Container } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md">
        {children}
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default Layout
