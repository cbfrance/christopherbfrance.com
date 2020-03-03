import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'

import Subline from './Subline'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Article = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  categories,
  cover,
}) => (
  <Post>
    <Title>
      <Link to={slug}>{title}</Link>
    </Title>
    <Subline>
      {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          {!!i && ', '}
          <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
        </React.Fragment>
      ))}
    </Subline>

    {cover && <Img sizes={cover.childImageSharp.sizes} />}

    <Excerpt>{excerpt}</Excerpt>
  </Post>
)

export default Article
