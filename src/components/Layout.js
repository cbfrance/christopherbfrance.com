import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import styled, { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { GlobalStyle } from 'styles/styles'
import SEO from './SEO'

const Navigation = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: flex-end;
  a {
    display: inline-block;
    background: ${theme.colors.blacks[2]};
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    border-bottom-width: 0;
    &.active {
      font-weight: 700;
    }
  }
`

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
            <Navigation>
              <Link activeClassName="active" to="/">
                Overview
              </Link>{' '}
              <Link activeClassName="active" to="/work">
                My work
              </Link>{' '}
              <Link activeClassName="active" to="/contact">
                Contact
              </Link>
            </Navigation>
            <div style={style}>{children}</div>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
