import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type CartSummaryProps = {
  totalAmount: number;
};

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Flex bg='gray.100' justifyContent='space-between' alignItems='center' borderRadius='md' p={5} w='100%' as="section">
      <Text fontWeight='bold'>Sub total: {` ${totalAmount}`}</Text>
      <Button colorScheme='blue' >
        Check out
      </Button>
    </Flex>
  )
}

export default CartSummary
