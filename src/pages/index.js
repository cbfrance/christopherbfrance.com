import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher4.png'
import { Row, Column, SectionTitle, MainContent } from 'styles/styles'
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
  font-size: 1.1rem;
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
          A full-spectrum designer and developer building critical data products
          and experiences
        </h1>
      </ContentInner>
    </HeadlineContent>
    <MainContent>
      <ContentInner>
        <PhotoFeature photo={christopherImage}>
          <Column style={{ justifyContent: 'center' }}>
            <h1>Christopher France</h1>
            <p>Builder and strategist</p>
          </Column>
        </PhotoFeature>
      </ContentInner>
      <ContentInner>
        <WelcomeNote>
          <p>
            I'm a designer and developer based in Oakland, California. I focus
            on decision support, collaboration and sensemaking in a commercial
            context.
          </p>

          <p>
            I lead product design process for network-driven companies, usually
            in collaboration with business and engineering teams. I serve as a
            full-spectrum, cross-functional integrator who speaks technical,
            design and business-strategic languages. I also have deep experience
            as a behavioral usability researcher.
          </p>

          <p>
            I have a technical design practice; my perspective is anchored in
            the practical craft of delivering applications, not just imagining
            them. I always have my sketchbook, but I often find inspiration
            while writing APIs or implementing error states.
          </p>
        </WelcomeNote>
        <WorkOverview>
          <SectionTitle>Work</SectionTitle>
          <WorkList>
            <li>
              <a href="https://lightfield.ag">LightField</a> — Co-founder at
              climate data startup
            </li>
            <li>
              <a href="https://thedataguild.com">The Data Guild</a> — Lead
              member at startup studio
            </li>

            <li>
              <a href="https://contain.ag">Contain</a> — Technology lead at
              fintech startup
            </li>
            <li>
              <a href="https://www.litterati.org/">Healthmade</a> — Creative
              technologist at healthcare design studio
            </li>
            <li>
              <a href="https://www.healthmadedesign.com/">Litterati</a> — Data
              strategist at environmental startup
            </li>

            <li>
              <a href="https://meedan.com">Meedan</a> — Design director and
              co-founder of technology company
            </li>
            <li>
              <a href="https://boltpeters.com/">Bolt | Peters</a> — Designer and
              UI researcher at UX consultancy
            </li>
            <li>
              <a href="https://ethn.io/">Ethnio</a> — Rails developer and
              designer for usability research product
            </li>
            <li>
              <a href="https://ushahidi.com/">Ushahidi</a> — iOS designer and
              design advisor for civic media platform
            </li>
            <li>
              <strong>Blast Internet</strong> — Linux systems administrator for
              web services firm
            </li>
            <li>
              <strong>Nonprofit Design</strong> — Founder of design services
              company
            </li>
          </WorkList>

          <SectionTitle>Portfolio</SectionTitle>

          <p>
            I’ve collected <Link to="/work">selections of my work</Link> with
            reflections on my process.
          </p>

          <SectionTitle>Talks</SectionTitle>
          <p>
            I’m grateful to have been invited to speak at venues such as
            RightsCon, Global Fact, the Online News Association, DrupalCon, the
            International CrisisMappers Conference, the AIGA, SXSW, the African
            News Innovation Challenge, the Nonprofit Technology Conference, the
            NYU Interactive Telecommunications Program and Stanford University.
          </p>
          <p>
            I am sometimes available for talks, please{' '}
            <Link to="/contact">get in touch</Link>.
          </p>
          <SectionTitle>Consulting</SectionTitle>
          <p>
            I am not currently available for independent consulting engagements,
            but if your interest involves data for climate or environmental
            science, please reach out to my company{' '}
            <a href="https://lightfield.ag">LightField</a>.
          </p>
          <SectionTitle>Contact</SectionTitle>

          <p>
            <em>
              For more details please reach out via my{' '}
              <a href="https://www.linkedin.com/in/christopher-blow-france-1b7774100/">
                LinkedIn page
              </a>{' '}
              or <Link to="/contact">contact form</Link>. You may also be
              interested in my <a href="/resume">resume</a>.
            </em>
          </p>

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
        </WorkOverview>
      </ContentInner>
    </MainContent>
  </Layout>
)

export default IndexPage
