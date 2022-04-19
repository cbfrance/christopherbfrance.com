/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher.jpg'

import { Row, Column, SectionTitle, MainContent } from 'styles/styles'
import theme from 'theme'

import { Layout } from 'components'

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;

  &,
  a {
    color: ${theme.colors.primary};
  }
`

const SectionTitleSecondary = styled(SectionTitle)`
  /* color: ${theme.colors.secondary}; */
`

const HeadlineContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 12vh 0;
  h1 {
    font-size: 2.8em;

    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 2em;
    }
  }
`

const PhotoFeatureStyles = styled(Row)`
  overflow: hidden;
  margin-bottom: 3rem;
  margin-top: -5vh;
  line-height: 1.2;

  p {
    font-size: 1.1em;
    font-family: ${theme.fontFamily.sans};
    letter-spacing: 1px;
  }

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 1.5em;
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
  font-size: 1.5rem;
  padding-bottom: 3rem;
`

const WorkList = styled.ul`
  list-style-type: none;
  padding: 0;

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
  font-size: 1.2rem;
`

const IndexPage = ({ location }) => (
  <Layout location={location} style={{ backgroundColor: theme.colors.cream }}>
    <HeadlineContent>
      <ContentInner>
        <h1>
          Hi! I'm Chris. I make software for startups, nonprofits, science and
          the humanities.
        </h1>
      </ContentInner>
    </HeadlineContent>
    <MainContent>
      <ContentInner>
        <PhotoFeature photo={christopherImage}>
          <Column style={{ justifyContent: 'center' }}>
            <h1>Chris Blow France</h1>
            <p>Designer-builder</p>
          </Column>
        </PhotoFeature>
      </ContentInner>
      <ContentInner>
        <WelcomeNote>
          <p>
            My practice is based in digital product design, qualitative user
            experience research and software engineering. I build software that
            improves human communication and sensing, often starting with
            conceptualization, positioning and prototyping.
          </p>

          <p>
            I have often focused on crowdsourcing and civic tech. Lately I have
            a particular interest in human health and climate.
          </p>

          <p>
            I like working on design systems and developer experience. In
            general I love to have ideas and to help others think bigger, while
            also zooming in to reason about systems at multiple scales.
          </p>

          <SectionTitleSecondary>
            Big questions I often return to
          </SectionTitleSecondary>

          <p>
            How can we expand human capacity to help us deal with critical
            social and environmental problems?
          </p>
          <p>
            How can we manage complexity with ethical responsibility? How can we
            make our approach more inclusive, accountable and humane?
          </p>
          <p>
            How can we visualize our landscape to make better decisions within
            it? What are the missing pieces and overlooked opportunity in
            emerging system?
          </p>

          <SectionTitleSecondary>Let's work together?</SectionTitleSecondary>

          <WorkList>
            <li>⟶ I work with individuals, startups and nonprofits.</li>
            <li>⟶ I often design native, cross-platform apps.</li>
            <li>⟶ I typically lead early stage frontend UI &amp; UX.</li>
          </WorkList>
        </WelcomeNote>
      </ContentInner>
    </MainContent>
    <MainContent style={{ background: 'white' }}>
      <ContentInner>
        <WorkOverview>
          <SectionTitle>EXPERIENCE</SectionTitle>
          <WorkList>
            <li>
              <a href="https://weavegrid.com">WeaveGrid</a> — Software and UX at
              climate tech startup
            </li>
            <li>
              <a href="/light-field">LightField</a> — Co-founder at data startup
              for climate
            </li>
            <li>
              <a href="/the-data-guild">The Data Guild</a> — Designer at startup
              studio for energy and health
            </li>

            <li>
              <a href="/contain">Contain</a> — Tech lead at contained
              agriculture startup
            </li>

            <li>
              <a href="/litterati">Litterati</a> — Data visualizations at
              environmental startup
            </li>

            <li>
              <a href="/meedan">Meedan</a> — Design lead and co-founder at
              social tech organization
            </li>
            <li>
              <a href="https://www.healthmadedesign.com">Healthmade</a> — Health
              data & visualizations healthcare design studio
            </li>
            <li>
              <strong>Bolt | Peters</strong> — Designer and UI researcher at UX
              consultancy
            </li>
            <li>
              <strong>Ethnio</strong> — Rails developer and designer for
              usability research product
            </li>
            <li>
              <strong>Ushahidi</strong> — iOS designer and design advisor for
              civic media platform
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

          <SectionTitle>Talks</SectionTitle>
          <p>
            I’m super grateful to have been invited to speak at venues such as
            RightsCon, Global Fact, the Online News Association, DrupalCon, the
            International CrisisMappers Conference, the AIGA, SXSW, the African
            News Innovation Challenge, the Nonprofit Technology Conference, the
            NYU Interactive Telecommunications Program and Stanford University.
          </p>
          <p>
            I am sometimes available for talks, please{' '}
            <Link to="/contact">get in touch</Link>.
          </p>

          <SectionTitle>Contact</SectionTitle>

          <p>
            <em>
              For more details please reach out via my{' '}
              <a href="https://www.linkedin.com/in/christopher-blow-france/">
                LinkedIn page
              </a>{' '}
              or <Link to="/contact">contact form</Link>. My resume is available{' '}
              <a href="/resume">as HTML</a> or{' '}
              <a href="/Christopher-France-Resume.pdf">as a PDF</a>.
            </em>
          </p>

          <Footer>
            <p>
              un·think′ing·ly adv. — (from v. <strong>to unthink</strong>)
              proceeding by undoing one’s thinking:{' '}
              <em>to unthink and rethink technological myths</em> (Corlann Gee
              Bush)
            </p>
            <p>&copy; {new Date().getFullYear()} Christopher Blow France</p>
          </Footer>
        </WorkOverview>
      </ContentInner>
    </MainContent>
  </Layout>
)

export default IndexPage
