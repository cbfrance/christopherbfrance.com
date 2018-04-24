import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import Header from '../components/Header'

injectGlobal`
  body {
    margin: 0;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CSS Experiments"
      meta={[{ name: 'description', content: 'CSS Grid Experiments' }, { name: 'keywords', content: 'css, grid, art' }]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '62em',
        padding: '0 1em 1em',
        paddingTop: 0,
        border: '1px solid black',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
