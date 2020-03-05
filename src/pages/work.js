import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import PostCard from 'components/PostCard'
import { Row, Column, SectionTitle, MainContent, Title } from 'styles/styles'
import theme from 'theme'

import { Layout, Byline } from 'components'

export const ContentInner = styled.div`
  padding: 1rem 16px;
  margin: 0 auto;
  max-width: ${theme.mainColumnWidth};
`

const PostCardGrid = styled.div`
  margin: 2rem;
  @media all and (min-width: ${theme.maxWidth}) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > a {
      width: 35%;
      margin: 1rem;
      &:nth-of-type(1),
      &:nth-of-type(4),
      &:nth-of-type(5) {
        width: 50%;
      }
    }
  }

  & > a {
    display: block;
    border-bottom-width: 0;

    div {
      height: 500px;
      @media all and (min-width: ${theme.maxWidth}) {
        height: 300px;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }
`

const PortfolioPage = ({
  location,
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout location={location}>
    <>
      <ContentInner>
        <Link to="/">
          <Title>Christopher France</Title>
        </Link>
        <Byline />
      </ContentInner>

      <PostCardGrid>
        {postEdges.map(post => (
          <PostCard
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
            cover={post.node.frontmatter.cover}
          />
        ))}
      </PostCardGrid>
    </>
  </Layout>
)

export default PortfolioPage

export const PortfolioQuery = graphql`
  query PortfolioQuery {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
