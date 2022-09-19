import { Heading, Divider, Table, Thead, Tr, Th, Td, Tbody, TableContainer } from '@chakra-ui/react'
import React from 'react'

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => (
  <section className="container">
    <Heading as="h3" size='md'>About this avocado</Heading>
    <p>{description}</p>

    <Divider my={5} />

    <TableContainer>
      <Table>
        <Thead bg='gray.100'>
          <Tr>
            <Th>Attributes</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {Object.keys(otherAttributes).map((key) => (
            <Tr key={key}>
              <Td className="attr-name">{key}</Td>
              <Td>
                {otherAttributes[key as keyof typeof otherAttributes]}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    <style jsx>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
)

export default ProductAttributes
