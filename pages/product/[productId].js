import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const {
    query: { productId }
  } = useRouter()
  const route = useRouter()
  console.log(route.query)
  return <div>Esta pagina es del producto: {productId}</div>
}

export default ProductItem
