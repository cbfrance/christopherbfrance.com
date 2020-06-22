import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import { MetaData, NavButton, Title } from 'styles/styles'
import theme from 'theme'
import { Layout, Wrapper, Header, SEO, PrevNext, Byline } from '../components'

const Content = styled.article`
  grid-column: 2;

  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  padding-bottom: 5rem;

  max-width: ${theme.mainColumnWidth};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  p {
    letter-spacing: -0.003em;
    line-height: 1.7;

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
    overflow-x: auto;
  }

  figure {
    margin: 8rem 0 5rem 0;

    @media (min-width: ${theme.breakpoints.tablet}) {
      margin: 8rem -200px 5rem 0;
    }
    padding: 0;
    .gatsby-resp-image-wrapper {
      margin: 0 !important;
    }
    .gatsby-resp-image-figcaption {
      padding-top: 1rem;
      font-size: 0.8rem;
    }
  }
`

const PostContent = styled.div`
  margin-top: 4rem;
`

const Post = ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  const post = postNode.frontmatter

  return (
    <Layout customSEO>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Content>
          <Title>{post.title}</Title>
          <Byline />
          <PrevNext prev={prev} next={next} />
          <PostContent>
            <MDXRenderer>{postNode.code.body}</MDXRenderer>
          </PostContent>
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Post

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`
