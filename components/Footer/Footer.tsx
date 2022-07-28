import React from 'react'
import Link from 'next/link'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Box
        bg="gray.50"
        px={4}
        py={6}
        mt={12}
        borderTop="1px"
        borderColor="gray.100"
      >
        <Container maxW="container.md">
          <Stack spacing={7}>
            <Box>
              <Heading as="h3" size="md">
                Nosotros
              </Heading>
              <Link href="/about">
                <a>Conoce más</a>
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Servicios
              </Heading>
              <Link href="/">
                <a>Todos los productos</a>
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Hecho por
              </Heading>
              <Text>Eber Alejo - Frontend Web Dev</Text>
              <Text>@eber_alejo</Text>
            </Box>
          </Stack>
          <div>
            <p>
              Icons made by{' '}
              <a
                target="_blank"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
                rel="noreferrer"
              >
                Freepik
              </a>
              {' from '}
              <a
                target="_blank"
                href="https://www.flaticon.com/"
                title="Flaticon"
                rel="noreferrer"
              >
                www.flaticon.com
              </a>
            </p>
            <p>
              Avocado images taken from{' '}
              <a
                target="_blank"
                href="https://www.californiaavocado.com/avocado101/avocado-varieties"
                title="California Avocado"
                rel="noreferrer"
              >
                Avocado 101
              </a>
              {' at '}
              <a
                target="_blank"
                href="https://www.californiaavocado.com"
                title="Flaticon"
                rel="noreferrer"
              >
                California Avocado
              </a>
            </p>
          </div>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
