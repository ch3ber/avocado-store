import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Flex,
  Box,
  useMediaQuery
} from '@chakra-ui/react'

import { PosMeMuero } from '@components/SVGIcons'

type Props = {
  handleClose: () => void;
};

const ModalHeaderContent: React.FC<Props> = ({ handleClose }) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 680px)')

  return (
    <ModalContent p={6} maxW="90%" w="auto">
      <ModalCloseButton />
      <Flex
        alignItems="center"
        flexDirection={isLargerThan1280 ? 'row' : 'column'}
      >
        <Box>
          <PosMeMuero size="150px" />
        </Box>
        <Box>
          <ModalHeader>Mataste el aguacate</ModalHeader>
          <ModalBody>
            <Text>Lo tocaste tanto que lo mataste.</Text>
            <Text>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={handleClose}>
              Ay, lo siento
            </Button>
            <Button colorScheme="green" mr={3} onClick={handleClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </Box>
      </Flex>
    </ModalContent>
  )
}

export default ModalHeaderContent
