import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 16px;
`

const ContentColumn = styled.div`
  margin: 0 auto 1em;
  max-width: 960px;
  padding: 1em;
`

const Header = () => (
  <ContentColumn>
    <Title>
      <Link to="/">Unthinkingly</Link>
    </Title>
  </ContentColumn>
)

export default Header
