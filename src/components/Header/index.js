import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { ContentColumn, font, TitlePrimary } from '../../styles/shared.js'

const Header = () => (
  <ContentColumn>
    <TitlePrimary>
      <Link to="/">Unthinkingly</Link>
    </TitlePrimary>
  </ContentColumn>
)

export default Header
