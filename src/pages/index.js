import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, DateStamp, PostPreview, Tag, Card } from '../styles/shared'

const Grid = styled.div`
  display: grid;
  grid-template: repeat(15, 1fr) / repeat(3, 1fr);
  grid-gap: 1em;
  padding: 1em;
`

export default function Index({ data }) {
  return (
    <div>
      <Card>
        <Grid>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>
            <Link to="blog">Hello</Link>
          </p>
        </Grid>
      </Card>
    </div>
  )
}
