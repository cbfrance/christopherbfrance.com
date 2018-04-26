import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, DateStamp, PostPreview, Tag, Card } from '../styles/shared'

const Grid = styled.div`
  display: grid;
  grid-template: repeat(15, 1fr) / repeat(3, 1fr);
  grid-gap: 1em;
  padding: 1em;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Card>
        <Grid>
          {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
            return (
              <PostPreview key={post.id}>
                <Title>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </Title>
                <DateStamp>{post.frontmatter.created_at}</DateStamp>
                <p>{post.excerpt}</p>
                {post.frontmatter.tags.map(tag => {
                  return <Tag>{tag}</Tag>
                })}
              </PostPreview>
            )
          })}
        </Grid>
      </Card>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created_at] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            created_at(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
