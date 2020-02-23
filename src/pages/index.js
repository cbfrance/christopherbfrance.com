import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher2.png'

import { Row, SectionTitle } from 'styles/styles'
import theme from 'theme'

import { Layout } from 'components'

const Content = styled.div``

const ContentInner = styled.div`
  padding: 16px;
  max-width: 912px;
  margin: 4rem auto;
`

const PhotoFeatureStyles = styled(Row)`
  overflow: hidden;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-bottom: 3rem;
`

const PhotoBackground = styled.div`
  background-image: url(${props => props.photo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`

const MainHeadlineSection = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid red;
  h1 {
    font-size: 3rem;
  }
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
  line-height: 1.6;
`

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <Content>
      <MainHeadlineSection>
        <ContentInner>
          <h1>
            Product strategy, design research and rapid prototyping for impact
          </h1>
        </ContentInner>
      </MainHeadlineSection>
      <PhotoFeature photo={christopherImage}>
        <ContentInner>
          <h1>Christopher France</h1>
          <h5>Designer, builder, strategist</h5>
        </ContentInner>
      </PhotoFeature>
      <ContentInner>
        <WelcomeNote>
          <p>
            Hello, I’m Christopher, a design director and entreprenuer based in
            Oakland, California.
          </p>
          <p>
            My practice involves digital strategy with an emphasis on social,
            civic and environmental technology. Lately I've been focused on data
            products, commercial strategy and climate.
          </p>

          <p>
            I often lead a design effort in collaboration with business and
            engineering teams. I am fortunate to often have wonderful
            collaborators and to have helped build several successful companies.
            My process utilizes design research, rapid prototyping and market
            testing.
          </p>

          <p>
            In an Engelbartian sense, I am trying to help expand human capacity
            through sensing and sensemaking. I am optimistic that we can
            meaningfully address major social problems through digital
            communication and collaboration.
          </p>
        </WelcomeNote>

        <SectionTitle>Recent work</SectionTitle>

        <ul>
          <li>
            <a href="https://lightfield.ag">LightField</a> — Co-founder at
            climate data startup
          </li>
          <li>
            <a href="https://thedataguild.com">The Data Guild</a> — Lead member
            at startup studio in San Francisco
          </li>

          <li>
            <a href="https://contain.ag">Contain</a> — Technology lead at
            fintech startup
          </li>
          <li>
            <a href="https://www.litterati.org/">Healthmade</a> — Creative
            technologist at healthcare design firm
          </li>
          <li>
            <a href="https://www.healthmadedesign.com/">Litterati</a> — Data
            strategist at environmental startup
          </li>
        </ul>

        <SectionTitle>Previous</SectionTitle>
        <ul>
          <li>
            <a href="https://meedan.com">Meedan</a> — Design director of
            award-winning technology company
          </li>
          <li>
            <a href="https://boltpeters.com/">Bolt | Peters</a> — Usability
            researcher at user experience consultancy
          </li>
          <li>
            <a href="https://ethn.io/">Ethnio</a> — Rails developer for user
            experience research product
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
            <strong>Nonprofit design</strong> — Founder of design services
            company
          </li>
        </ul>
        <SectionTitle>Talks</SectionTitle>

        <p>
          I’m grateful to have been invited to speak at venues such as
          RightsCon, Global Fact, the Online News Association, DrupalCon, the
          International CrisisMappers Conference, SXSW, the African News
          Innovation Challenge, the Nonprofit Technology Conference, the NYU
          Interactive Telecommunications Program and Stanford University.
        </p>

        <SectionTitle>Consulting</SectionTitle>

        <p>I am not currently available for consulting engagements.</p>

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
    </Content>
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
