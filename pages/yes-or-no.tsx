import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { Button, Flex, Heading } from '@chakra-ui/react'

// import { Header, Button } from 'semantic-ui-react'

type YesOrNoApiResponse = {
  data: 'yes' | 'no';
};

const fetchResult = async () => {
  const res = await fetch('https://ch3ber-avocado-store.vercel.app/api/yes-or-no')
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}

export async function getServerSideProps () {
  const initialResult = await fetchResult()

  return {
    props: {
      initialResult
    }
  }
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  const colorControler = () => {
    if (isLoading) {
      return 'gray.400'
    }

    if (result === 'yes') {
      return 'main.400'
    }

    return 'red.400'
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="center" mt={10} gap={10}>
        <Heading as="h1" size={'4xl'} color={colorControler()}>
          {result.toUpperCase()}
        </Heading>
        <div>
          <p>
            <Button
              onClick={onClick}
              w={44}
              bgColor={colorControler()}
              disabled={isLoading}
            >
              Intentar de nuevo
            </Button>
          </p>
          <p>
            <Link href="/">
              <Button as='a' colorScheme='gray' w={44} mt={5} variant='outline'>
                Volver al inicio
              </Button>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  )
}

export default YesOrNo
