import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher3-overlay-213768.png'
import { Row, Column, SectionTitle } from 'styles/styles'
import theme from 'theme'

import { Layout } from 'components'

const HeadlineContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 12vh 0;
  h1 {
    font-size: 3rem;

    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 2rem;
    }
  }
`

const MainContent = styled.div``

const ContentInner = styled.div`
  padding: 1rem 16px;
  max-width: 35rem;
  margin: 0 auto;
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
  line-height: 1.75;
  font-size: 1.2rem;
`

const WorkList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;

  li {
    padding: 1rem 0;
    margin: 0;
    font-weight: 300;

    a,
    strong {
      font-weight: 400;
    }
  }
`

const IndexPage = ({
  location,
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout location={location}>
    <HeadlineContent>
      <ContentInner>
        <h1>
          Digital product strategy for critical social and environmental issues
        </h1>
      </ContentInner>
    </HeadlineContent>
    <MainContent>
      <ContentInner>
        <PhotoFeature photo={christopherImage}>
          <Column style={{ justifyContent: 'center' }}>
            <h1>Christopher France</h1>
            <p>Designer, builder, strategist</p>
          </Column>
        </PhotoFeature>
      </ContentInner>
      <ContentInner>
        <WelcomeNote>
          <p>
            I'm a designer, programmer and usability researcher based in
            Oakland, California. I focus on social, civic and environmental
            themes in a commercial context.
          </p>

          <p>
            I lead product design process, usually in collaboration with
            business and engineering teams. I serve as a full-spectrum,
            cross-functional integrator who speaks technical, design and
            business-strategic languages.
          </p>

          <p>
            My perspective is anchored in the practical craft of designing and
            building applications — from writing APIs to creating detailed
            interaction designs and conducting behavioral user research. I find
            great joy in well-crafted user experiences that advance
            higher-order, world-positive objectives.
          </p>
        </WelcomeNote>
        <SectionTitle>Recent work</SectionTitle>
        <WorkList>
          <li>
            <a href="https://lightfield.ag">LightField</a> — Co-founder at
            climate data startup
          </li>
          <li>
            <a href="https://thedataguild.com">The Data Guild</a> — Lead member
            at startup studio
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
        </WorkList>
        <SectionTitle>Previous</SectionTitle>
        <WorkList>
          <li>
            <a href="https://meedan.com">Meedan</a> — Design director and
            co-founder of technology company
          </li>
          <li>
            <a href="https://boltpeters.com/">Bolt | Peters</a> — Interface
            designer and researcher at UX consultancy
          </li>
          <li>
            <a href="https://ethn.io/">Ethnio</a> — Rails developer and designer
            for usability research product
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
            or <Link to="/contact">contact form</Link>. My resume and portfolio
            are available by request.
          </em>
        </p>

        {/* <SectionTitle>Technical writing</SectionTitle>
        {postEdges.map(post => (
          <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          timeToRead={post.node.timeToRead}
          slug={post.node.fields.slug}
          categories={post.node.frontmatter.categories}
          key={post.node.fields.slug}
          />
        ))} */}
      </ContentInner>
    </MainContent>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
