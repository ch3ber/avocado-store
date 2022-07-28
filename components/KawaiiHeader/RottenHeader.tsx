import React from 'react'
import { Heading, Flex } from '@chakra-ui/react'

import { PosMeMuero } from '@components/SVGIcons'

const RottenHeader = () => (
  <Heading size="lg" as="h1">
    <Flex alignItems="center">
      Platzi
      <PosMeMuero size="58px" />
      Avo
    </Flex>
  </Heading>
)

export default RottenHeader
