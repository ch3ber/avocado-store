import React, { useState, useEffect } from 'react'
import { Flex, Modal, ModalOverlay } from '@chakra-ui/react'

import PuesVivo from './AnimatedHeader'
import PuesMuero from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'
import { WithJelloAnimation } from '@styles/jello'
import { Avocado } from '@components/SVGIcons'

const KawaiiHeader = () => {
  const [meMori, setMeMori] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [count, setCount] = useState(0)

  const closeModal = () => setModalOpen(false)

  useEffect(() => {
    if (count === 4) {
      setMeMori(true)
      setModalOpen(true)
    }
  }, [count])

  return (
    <Flex justifyContent="center" alignItems="center" my={12}>
      {meMori
        ? (
        <PuesMuero />
          )
        : (
        <PuesVivo>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            <WithJelloAnimation>
              <Avocado size="58px" />
            </WithJelloAnimation>
          </button>
        </PuesVivo>
          )}

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalHeaderContent handleClose={closeModal} />
      </Modal>
    </Flex>
  )
}

export default KawaiiHeader
