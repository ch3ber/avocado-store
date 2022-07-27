import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Avocado } from '@components/SVGIcons'

const AnimatedHeader = () => (
  <Box as={motion.div} whileTap={{ scale: 0.8 }}>
    <Heading size="lg" as="h1">
      Platzi
      <Avocado size="58px" />
      Avo
    </Heading>
  </Box>
)

export default AnimatedHeader
