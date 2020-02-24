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
  font-size: 12px;

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
                unthinkingly.com v13 <br />
                &copy; 2004 — 2020 <br />
                Christopher Blow France
              </p>
              <br />
              <a href="https://github.com/christopherfrance">
                Gatsby/React theme on Github
              </a>
              <br />
              <span>Last build: {data.site.buildTime}</span>
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
