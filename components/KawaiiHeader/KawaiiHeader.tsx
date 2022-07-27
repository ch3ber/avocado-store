import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalOverlay } from '@chakra-ui/react'

import PuesVivo from './AnimatedHeader'
import PuesMuero from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'

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
    <div className="container">
      {meMori
        ? (
        <PuesMuero />
          )
        : (
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          <PuesVivo />
        </Button>
          )}

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalHeaderContent handleClose={closeModal} />
      </Modal>
    </div>
  )
}

export default KawaiiHeader
