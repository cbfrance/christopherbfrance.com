import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { SmallPrint } from 'cleo'

import {
  Row,
  Column,
  SectionTitle,
  SectionSubTitle,
  MainContent,
} from 'styles/styles'
import theme from 'theme'

import { Layout } from 'components'

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  font-size: 14px;

  &,
  a {
    color: ${theme.colors.primary};
  }
`

const HeadlineContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 12vh 0;
  h1 {
    font-size: 2.8rem;

    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 2rem;
    }
  }
`

const PhotoFeatureStyles = styled(Row)`
  overflow: hidden;
  margin-bottom: 3rem;
  margin-top: -5vh;

  p {
    font-size: 1.1rem;
    font-family: ${theme.fontFamily.sans};
    letter-spacing: 1px;
  }

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  line-height: 1.2;
  h1 {
    font-size: 2rem;
    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`

const PhotoBackground = styled.div`
  background-image: url(${props => props.photo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`

const PhotoFeature = ({ photo, children }) => (
  <PhotoFeatureStyles>
    <Row columnOnMobile>
      <PhotoBackground photo={photo} />
      {children}
    </Row>
  </PhotoFeatureStyles>
)

const WelcomeNote = styled.div`
  font-family: ${theme.fontFamily.sans};
  font-weight: 400;
  line-height: 2;
  font-size: 1.3rem;
`

const WorkList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;

  li {
    padding: 0.8rem 0;
    margin: 0;
    font-weight: 300;

    a,
    strong {
      font-weight: 400;
    }
  }
`

const WorkOverview = styled.div`
  font-family: ${theme.fontFamily.serif};
`

const ContentInner = styled.div`
  padding: 1rem 16px;
  max-width: ${theme.mainColumnWidth};
  margin: 0 auto;
`

const IndexPage = ({ location }) => (
  <Layout location={location} style={{ backgroundColor: theme.colors.cream }}>
    <HeadlineContent>
      <ContentInner>
        <h1>
          Hello.
        </h1>
      </ContentInner>
    </HeadlineContent>
    <MainContent>
      <ContentInner>
        <small-print>This is a custom element.</small-print>
      </ContentInner>
      <ContentInner>
        <WelcomeNote>
          <p>👋 Hi!</p>
        </WelcomeNote>
        <ContentInner>
          <small-print>More small print!</small-print>
        </ContentInner>
        <Footer>
            <p>
              un·think′ing·ly adv. — (from v. <strong>to unthink</strong>)
              proceeding by undoing one’s thinking:{' '}
              <em>to unthink and rethink technological myths</em> (Corlann Gee
              Bush)
            </p>
            <p>
              &copy; 2004 — 2020 <br />
              Christopher Blow France
            </p>
          </Footer>
      </ContentInner>
    </MainContent>
  </Layout>
)

export default IndexPage
