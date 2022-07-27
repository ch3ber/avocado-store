import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button
} from '@chakra-ui/react'

import { PosMeMuero } from '@components/SVGIcons'

const ModalHeaderContent = ({ handleClose }) => {
  return (
    <ModalContent>
      <ModalHeader>Mataste el aguacate</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <PosMeMuero size="154px" />
        <Text>Lo tocaste tanto que lo mataste.</Text>
        <Text>
          Por otro lado, eres una persona muy curiosa y has descubierto esto. :)
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={handleClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default ModalHeaderContent
