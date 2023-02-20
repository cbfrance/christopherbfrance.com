import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import styled, { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { GlobalStyle } from 'styles/styles'
import SEO from './SEO'

const Layout = ({ children, customSEO, location, style }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "YYYY-MM-DD")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {!customSEO && <SEO buildTime={data.site.buildTime} />}
          <GlobalStyle theme={theme} />
          <div>
            <div style={style}>{children}</div>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
