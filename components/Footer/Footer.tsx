import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex
} from '@chakra-ui/react'

import githubIcon from '../../public/images/github-svgrepo-com.svg'
import twitterIcon from '../../public/images/twitter-svgrepo-com.svg'
import webIcon from '../../public/images/global-svgrepo-com.svg'

const Footer = () => {
  const ICONS_SIZE = 15

  return (
    <Box
      bg="gray.50"
      px={6}
      py={12}
      mt={12}
      borderTop="1px"
      borderColor="gray.100"
      as="footer"
    >
      <Center>
        <Container maxW="container.md">
          <Stack direction="column">
            <Stack
              as="section"
              spacing={{
                base: 8,
                md: 20
              }}
              direction={{
                base: 'column',
                md: 'row'
              }}
              mb={12}
            >
              <Box as="article">
                <Heading as="h3" size="sm" mb={3}>
                  Nosotros
                </Heading>
                <NextLink href="/about">
                  <Link color="blue.500">Conoce más</Link>
                </NextLink>
              </Box>
              <Box as="article">
                <Heading as="h3" size="sm" mb={3}>
                  Servicios
                </Heading>
                <NextLink href="/">
                  <Link color="blue.500">Todos los productos</Link>
                </NextLink>
              </Box>
              <Box as="article">
                <Heading as="h3" size="sm" mb={3}>
                  Hecho por
                </Heading>
                <Text mb={4}>Eber Alejo - Frontend Web Dev</Text>

                <Breadcrumb separator="-">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      target="_blank"
                      href="https://github.com/ch3ber"
                      title="Freepik"
                      rel="noreferrer"
                      color="blue.500"
                    >
                      <Flex alignItems="center" gap={1}>
                        <Image
                          src={githubIcon}
                          alt="github logo"
                          width={ICONS_SIZE}
                          height={ICONS_SIZE}
                        />
                        GitHub
                      </Flex>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      target="_blank"
                      href="https://twitter.com/ch3ber_dev"
                      title="Freepik"
                      rel="noreferrer"
                      color="blue.500"
                    >
                      <Flex alignItems="center" gap={1}>
                        <Image
                          src={twitterIcon}
                          alt="twitter logo"
                          width={ICONS_SIZE}
                          height={ICONS_SIZE}
                        />
                        Twitter
                      </Flex>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      target="_blank"
                      href="https://ch3ber.github.io"
                      title="Freepik"
                      rel="noreferrer"
                      color="blue.500"
                    >
                      <Flex alignItems="center" gap={1}>
                        <Image
                          src={webIcon}
                          alt="web link logo"
                          width={ICONS_SIZE}
                          height={ICONS_SIZE}
                        />
                        My Web
                      </Flex>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Box>
            </Stack>

            <Box as="section" textAlign="center">
              <Text fontSize="xs" color="gray.500">
                Icons made by{' '}
                <Link
                  target="_blank"
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                  rel="noreferrer"
                  color="blue.500"
                >
                  Freepik
                </Link>
                {' from '}
                <Link
                  target="_blank"
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  rel="noreferrer"
                  color="blue.500"
                >
                  www.flaticon.com
                </Link>
              </Text>
              <Text fontSize="xs" color="gray.500">
                Avocado images taken from{' '}
                <Link
                  target="_blank"
                  href="https://www.californiaavocado.com/avocado101/avocado-varieties"
                  title="California Avocado"
                  rel="noreferrer"
                  color="blue.500"
                >
                  Avocado 101
                </Link>
                {' at '}
                <Link
                  target="_blank"
                  href="https://www.californiaavocado.com"
                  title="Flaticon"
                  rel="noreferrer"
                  color="blue.500"
                >
                  California Avocado
                </Link>
              </Text>
            </Box>
          </Stack>
        </Container>
      </Center>
    </Box>
  )
}

export default Footer
