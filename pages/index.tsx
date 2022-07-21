import React, { useEffect, useState } from 'react'
import { Navbar } from '@components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return <>{productList.map((product) => product.image)}</>
}

export default HomePage
