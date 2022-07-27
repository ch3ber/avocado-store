import React from 'react'
import { Heading } from '@chakra-ui/react'

import { PosMeMuero } from '@components/SVGIcons'

const RottenHeader = () => (
  <Heading size="lg" as="h1">
    Platzi
    <PosMeMuero size="58px" />
    Avo
  </Heading>
)

export default RottenHeader
