import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
import { Title, DateStamp, Tag } from '../styles/shared'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="blog-post">
        <Title>{post.frontmatter.title}</Title>
        <DateStamp>{post.frontmatter.created_at}</DateStamp>
        {post.frontmatter.tags.map(tag => {
          return (
            <Tag key={tag}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </Tag>
          )
        })}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        created_at(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
