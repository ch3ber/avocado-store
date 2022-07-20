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
        <figure>
          <Image
            src={product?.image}
            alt={product?.name}
            width={100}
            height={100}
          />
        </figure>
      </section>
    </>
  )
}

export default ProductPage
