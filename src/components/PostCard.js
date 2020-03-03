import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import theme from 'theme'
import { MetaData } from 'styles/styles'

const Card = styled.article`
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
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 1.5rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    border-bottom-width: 0;
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: ${theme.fontFamily.sans};
  color: ${theme.colors.blacks[7]};
`

const ImgStyles = styled.div`
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3),
    0 18px 36px -18px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
`

const PostCard = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  categories,
  cover,
}) => (
  <Link to={slug}>
    <Card>
      {cover && (
        <ImgStyles>
          <Img sizes={cover.childImageSharp.sizes} />
        </ImgStyles>
      )}

      <Title>{title}</Title>
      <Excerpt>
        {excerpt}
        <MetaData>
          {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
          {categories.map((cat, i) => (
            <React.Fragment key={cat}>
              {!!i && ', '}
              <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
            </React.Fragment>
          ))}
        </MetaData>
      </Excerpt>
    </Card>
  </Link>
)

export default PostCard
