import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import { font, color, ContentColumn } from '../styles/shared'

require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
  body {
    margin: 0;
    font: ${font.body2};
    background-color: ${color.biancaWhite};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  ::-selection {
    background: yellow;
  }

  ::-moz-selection {
    background: yellow;
  }

  blockquote {
    border-left: 2px solid black;
    padding-left: 1em;
  }

  img {
    display: block;
    margin-bottom: 1em;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Unthinkingly"
      meta={[{ name: 'description', content: 'The blog of Chris Blow' }, { name: 'keywords', content: 'peacenik, interaction, design' }]}
    />
    <Header />
    <ContentColumn>{children()}</ContentColumn>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
