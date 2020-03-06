import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import theme from 'theme'
import { MetaData } from 'styles/styles'
import BackgroundImage from 'gatsby-background-image'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 1rem;

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

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  @media all and (max-width: ${theme.breakpoints.phone}) {
    display: none;
  }
`
const ShadowBox = styled.div`
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.33);
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 30px 90px -10px rgba(0, 0, 0, 0.3),
      0 18px 36px -18px rgba(0, 0, 0, 0.33);
    transition: box-shadow 0.4s;
  }
`
const StyledImage = styled(Img)`
  img {
    object-fit: contain !important;
  }
  @media all and (min-width: ${theme.breakpoints.phone}) {
    display: none;
  }
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
      <ShadowBox>
        {cover && <StyledBackgroundImage fluid={cover.childImageSharp.sizes} />}
        {cover && <StyledImage fluid={cover.childImageSharp.sizes} />}
      </ShadowBox>

      <Title>{title}</Title>
      <Excerpt>
        {excerpt}
        <MetaData>
          {date} &mdash;
          {timeToRead} Min Read &mdash; In{' '}
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
