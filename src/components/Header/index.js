import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { ContentColumn } from '../../styles/shared.js'

const Title = styled.h1`
  font-size: 16px;
`

const Header = () => (
  <ContentColumn>
    <Title>
      <Link to="/">Unthinkingly</Link>
    </Title>
  </ContentColumn>
)

export default Header
