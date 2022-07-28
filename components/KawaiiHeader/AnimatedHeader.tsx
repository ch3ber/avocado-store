import React from 'react'
import { Heading, Flex } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode;
};

const AnimatedHeader: React.FC<Props> = ({ children }) => (
  <Heading size="lg" as="h1">
    <Flex alignItems="center">
      Platzi
      {children}
      Avo
    </Flex>
  </Heading>
)

export default AnimatedHeader
