import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import PostCard from 'components/PostCard'
import {
  Row,
  Column,
  SectionTitle,
  MainContent,
  ContentInner,
  Title,
} from 'styles/styles'
import theme from 'theme'

import { Layout, Byline } from 'components'

const PostCardGrid = styled.div`
  & > a {
    display: block;
    border-bottom-width: 0;
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
    <MainContent>
      <ContentInner>
        <Link to="/">
          <Title>Christopher France</Title>
        </Link>
        <Byline />
        <SectionTitle>My Work</SectionTitle>
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
      </ContentInner>
    </MainContent>
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
