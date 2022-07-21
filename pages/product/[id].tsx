import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Navbar } from '@components/Navbar/Navbar'

const ProductPage = () => {
  const {
    query: { id }
  } = useRouter()

  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json)
        console.log(json)
      })
  }, [id])

  return (
    <>
      <Navbar />
      <section>
        <h1>{product?.name}</h1>
      </section>
    </>
  )
}

export default ProductPage
