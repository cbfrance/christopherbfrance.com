import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const DateStamp = styled.div`
  font-size: 12px;
  color: tomato;
  font-weight: 500;
  text-transform: uppercase;
`

const PostList = styled.div`
  background-color: #eaeae2;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <PostList>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="blog-post-preview" key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <DateStamp>{post.frontmatter.created_at}</DateStamp>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </PostList>
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
          }
        }
      }
    }
  }
`
