import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher2.png'
import { Row } from 'styles/styles'
import theme from 'theme'

import { Layout, SectionTitle } from 'components'

const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`

const ContentInner = styled.div`
  padding: 3rem 6rem;
`

const PhotoFeatureStyles = styled(Row)`
  border-top-left-radius: 10px;
  overflow: hidden;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-bottom: 3rem;

  @media all and (max-width: ${theme.breakpoints[1]}) {
    padding: 3rem 6rem;
  }
`

const PhotoBackground = styled.div`
  background-image: url(${props => props.photo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 400px;
`

const PhotoFeature = ({ photo, children }) => (
  <PhotoFeatureStyles>
    <Row columnOnMobile>
      <PhotoBackground photo={photo} />
      {children}
    </Row>
  </PhotoFeatureStyles>
)

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    {/* <StyledSurface width={700} height={100}>
      <GradientsLoop />
    </StyledSurface> */}
    <div style={{ marginTop: '3rem' }}>
      <Content>
        <PhotoFeature photo={christopherImage}>
          <div>
            <h1>Christopher France</h1>
            <h4>Designer, builder, strategist</h4>
          </div>
        </PhotoFeature>
        <ContentInner>
          <p>
            I lead teams, build companies and create digital applications. My
            goal is to expand human capacity through sensing and sensemaking. My
            process utilizes design research, rapid prototyping and market
            testing. I've been working for a couple decades in design and
            digital strategy, often with an emphasis on social and civic
            technology. Lately I've been focused on data products, commercial
            strategy and climate.
          </p>

          <SectionTitle>Work</SectionTitle>

          <ul>
            <li>
              <a href="https://lightfield.ag">LightField</a> — Co-founder at
              climate data startup.
            </li>
            <li>
              <a href="https://thedataguild.com">The Data Guild</a> — Lead
              member at startup studio in San Francisco.
            </li>
            <li>
              <a href="https://meedan.com">Meedan</a> — Design director of
              award-winning technology company.
            </li>
            <li>
              <a href="https://contain.ag">Contain</a> — Technology lead at
              fintech startup.
            </li>
            <li>
              <a href="https://www.litterati.org/">Healthmade</a> — Creative
              technologist at healthcare design firm.
            </li>
            <li>
              <a href="https://www.healthmadedesign.com/">Litterati</a> — Data
              strategist at environmental startup.
            </li>
            <li>
              <a href="https://ethn.io/">Ethnio</a> — Rails developer for user
              experience research product.
            </li>
            <li>
              <a href="https://ushahidi.com/">Ushahidi</a> — Design advisor for
              civic media platform.
            </li>
          </ul>
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
    </div>
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
