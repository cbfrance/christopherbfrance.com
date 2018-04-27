import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import { font, color, ContentColumn } from '../styles/shared'
require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
  body {
    margin: 0;
    font: ${font.body2};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Unthinkingly"
      meta={[{ name: 'description', content: 'The blog of Chris Blow' }, { name: 'keywords', content: 'peacenik, interaction, design' }]}
    />
    <ContentColumn>{children()}</ContentColumn>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
