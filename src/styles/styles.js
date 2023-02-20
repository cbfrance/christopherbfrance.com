import styled, { createGlobalStyle } from 'styled-components'
import 'typeface-spectral'

import theme from 'theme'

import { Link } from 'gatsby' // eslint-disable-line

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-weight: 600;
  color: black;
  font-size: 3.2rem;
  margin-top: 2rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${props =>
    typeof props.flexWrap !== 'undefined' ? props.flexWrap : 'nowrap'};

  & > * {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }

  ${props =>
    props.columnOnMobile &&
    `@media all and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      width: 100%;
    }
  }

  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const FinePrint = styled.div`
  font-size: 0.8em;
  color: ${props => (props.color ? props.color : theme.colors.blacks[8])};
`

export const SectionTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  margin: 6rem 0 2rem;
  em {
    color: ${theme.colors.blacks[5]};
    font-size: 1.1rem;
  }
`

export const SectionSubTitle = styled(SectionTitle)`
  font-weight: 400;
  font-size: 1rem;
`

export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  ul li {
    line-height: 2;
  }


  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }

  h1 {
    font-family: ${theme.fontFamily.serif};
    font-size: 2rem;
    font-weight: 300;
  }
  h2 {
    font-size: 2.441rem;
  }
  h3 {
    font-size: 1.953rem;
  }
  h4 {
    font-size: 1.563rem;
  }
  h5 {
    font-size: 1.25rem;
  }

  @media (max-width: ${theme.breakpoints.phone}) {
    font-size: 16px;
    h1 {
      font-size: 2.488rem;
    }
    h2 {
      font-size: 2.074rem;
    }
    h3 {
      font-size: 1.728rem;
    }
    h4 {
      font-size: 1.444rem;
    }
    h5 {
      font-size: 1.2rem;
    }
  }

  body {
    background-color: ${theme.colors.bg};
    color: ${theme.colors.blacks[9]};
    font-family: ${theme.fontFamily.sans};
  }

  a {
    color: ${theme.colors.primary};
    transition: all ${theme.transitions.normal};
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.blacks[4]};
  }

  a:hover {
    text-decoration: none;
    background-color: ${theme.colors.primaryLight};
  }  

  @media print {
    body {
      background-color: transparent!important;
    }
  }

  aside {
    position: relative;
    line-height: 1.8;
    color: ${theme.colors.blacks[7]};
    max-width: 600px;
    border-left: 1px solid ${theme.colors.blacks[3]};
    padding-left: 2rem;
    
    .content {
      font-size: 0.8rem;
      margin-bottom: 2rem;
      @media all and (min-width: ${theme.breakpoints.tablet}) {
        width: 230px;
        border-width: 0;
        position: absolute;
        right: -280px;
        top: -300px;

      }
      h4 {
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
  }
`

export const MainContent = styled.div``

export const MetaData = styled.p`
  font-size: 1rem;
  color: ${theme.colors.blacks[5]};
  a {
    color: ${theme.colors.blacks[5]};
    border-bottom-width: 0;
  }
`

export const NavButton = styled(Link)`
  padding: 1rem;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.blacks[1]};
  border-radius: 4px;
  transition: 0.3s;
  align-items: center;
  border-bottom-width: 0;
  font-weight: bold;
  &:hover {
    transition: 0.3s;
    background-color: ${theme.colors.blacks[2]};
  }
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${theme.colors.blacks[5]};
  }
`

export const Navigation = styled.div`
  display: flex;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  justify-content: flex-end;

  @media all and (min-width: ${theme.breakpoints.phone}) {
    font-size: 1rem;
  }

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
