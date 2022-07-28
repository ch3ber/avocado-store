import React from 'react'
// import { Segment, Button } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number;
};

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return <h1>No disponible</h1>
  // return (
  // <Segment clearing size="large" as="section">
  // <span>
  // <strong>Sub total:</strong>
  // {` ${totalAmount}`}
  // </span>
  // <Button color="black" floated="right">
  // Check out
  // </Button>
  // </Segment>
  // )
}

export default CartSummary
