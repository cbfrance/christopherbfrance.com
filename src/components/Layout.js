import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { GlobalStyle } from 'styles/styles'
import SEO from './SEO'

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  font-size: 14px;

  &,
  a {
    color: ${theme.colors.primary};
  }
`

const Layout = ({ children, customSEO, location }) => (
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
          {children}
          {location && location.pathname === '/' && (
            <Footer>
              <p>
                un·think′ing·ly adv. — Proceeding by undoing one's thinking. As
                in Corlann Gee Bush,{' '}
                <em>"to unthink and rethink technological myths</em>
                ."
              </p>
              <p>
                &copy; 2004 — 2020 <br />
                Christopher Blow France
              </p>
            </Footer>
          )}
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
