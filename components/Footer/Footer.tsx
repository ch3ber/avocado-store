import React from 'react'
import Link from 'next/link'
import { Container, Grid, GridItem } from '@chakra-ui/react'

const Footer = () => (
  <footer
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2'
    }}
  >
    <Container>
      <Grid></Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            rel="noreferrer"
          >
            Freepik
          </a>
          {' from '}
          <a
            target="_blank"
            href="https://www.flaticon.com/"
            title="Flaticon"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Avocado images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
            rel="noreferrer"
          >
            Avocado 101
          </a>
          {' at '}
          <a
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
            rel="noreferrer"
          >
            California Avocado
          </a>
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer
