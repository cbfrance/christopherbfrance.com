/* eslint-disable prettier/prettier */
import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import christopherImage from 'assets/christopher.jpg'
import chroma from 'chroma-js'

import {
  Row,
  Column,
  SectionTitle,
  SectionSubTitle,
  MainContent,
} from 'styles/styles'

import { IconArrowRight } from 'components/IconArrowRight'

import theme from 'theme'

import { Layout } from 'components'

import PostCard from 'components/PostCard'

const PostCardGrid = styled.div`
  margin: 2rem;
  max-width: 1200px;
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
      /* By default the height is intrinsic */
      @media all and (min-width: ${theme.breakpoints.phone}) {
        /* on larger screens, crop */
        height: 300px;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }
`

const TagList = styled.ul``
const Tag = styled.li`
  background-color: ${props =>
    chroma(props?.color || theme.colors.blue)
      .darken(0.1)
      .hex()};

  color: ${props =>
    chroma.contrast(props?.color || theme.colors.blue, 'white') > 4.5
      ? 'white'
      : 'black'};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  border: 1px solid black;
`

const Dots = styled.div`
  width: 100%;
  height: 100%
  background-color: ${theme.colors.blacks[1]};
  background-image: radial-gradient(
      ${theme.colors.blacks[2]} 10%,
      transparent 11%
    ),
    radial-gradient(${theme.colors.blacks[2]} 10%, transparent 11%);
  background-size: 24px 24px;
  background-position: 0 0, 24px 24px;
  background-repeat: repeat;
`

// const Canvas = ({ children }) => <Dots>{children}</Dots>

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;

  &,
  a {
    color: ${theme.colors.primary};
  }
`

const SectionTitleSecondary = styled(SectionTitle)`
  color: ${theme.colors.blacks[6]};
  font-size: 1.1rem;
`

const HeadlineContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 12vh 0;
  h1 {
    font-size: 2.8em;
    line-height: 1.3;

    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 2em;
    }
  }
`

const PhotoFeatureStyles = styled(Row)`
  overflow: hidden;
  margin-bottom: 3rem;
  margin-top: -5vh;
  line-height: 1.2;

  p {
    font-size: 1.1em;
    font-family: ${theme.fontFamily.sans};
    letter-spacing: 1px;
  }

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    @media all and (max-width: ${theme.breakpoints.phone}) {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
`

const PhotoBackground = styled.div`
  background-image: url(${props => props.photo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`

const PhotoFeature = ({ photo, children }) => (
  <PhotoFeatureStyles>
    <Row columnOnMobile>
      <PhotoBackground photo={photo} />
      {children}
    </Row>
  </PhotoFeatureStyles>
)

const WelcomeNote = styled.div`
  font-family: ${theme.fontFamily.sans};
  font-weight: 400;
  line-height: 2;
  font-size: 1.5rem;
  padding-bottom: 3rem;
`

const WorkList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 0.8rem 0;
    margin: 0;
    font-weight: 300;

    a,
    strong {
      font-weight: 400;
    }
  }
`

const WorkOverview = styled.div`
  font-family: ${theme.fontFamily.serif};
`

const ContentInner = styled.div`
  padding: 1rem 16px;
  max-width: ${theme.mainColumnWidth};
  margin: 0 auto;
  font-size: 1.2rem;
`

const IndexPage = ({
  location,
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout location={location} style={{ backgroundColor: theme.colors.cream }}>
    <HeadlineContent>
      <ContentInner>
        <h1>
          Let’s use computers to address important social problems with urgency,
          clarity and <em>creativity</em>.
        </h1>
      </ContentInner>
    </HeadlineContent>
    <MainContent>
      <ContentInner>
        <PhotoFeature photo={christopherImage}>
          <Column style={{ justifyContent: 'center' }}>
            <h1>Chris Blow France</h1>
            <p>Design and strategy</p>
          </Column>
        </PhotoFeature>
      </ContentInner>
      <ContentInner>
        <WelcomeNote>
          <p>
            I design and build data products to improve human sensemaking. My
            focus is conceptualization, positioning and prototyping products
            using applied machine learning, data visualization and large
            datasets.
          </p>

          <SectionTitleSecondary>Big questions</SectionTitleSecondary>

          <p>
            How can we expand human capacity to better cope with critical social
            and environmental problems?
          </p>
          <p></p>
          <p>
            How can we visualize data to make better decisions within it and
            recognize opportunity?
          </p>
          <p>
            How can we manage complexity with ethical responsibility to make
            powerful digital systems inclusive and accountable?
          </p>

          <SectionTitleSecondary>Working together</SectionTitleSecondary>

          <WorkList>
            <li>
              <Row>
                <IconArrowRight />I work with scientists, startups and
                nonprofits.
              </Row>
            </li>
            <li>
              <Row>
                <IconArrowRight /> I design and build native, cross-platform
                apps.
              </Row>
            </li>
            <li>
              <Row>
                <IconArrowRight /> I help build business models in complex
                domains.
              </Row>
            </li>
          </WorkList>
        </WelcomeNote>
      </ContentInner>
    </MainContent>
    <MainContent style={{ background: 'white' }}>
      <ContentInner>
        <WorkOverview>
          <SectionTitle>Experience</SectionTitle>
          <SectionSubTitle>
            Product leadership and platform design
          </SectionSubTitle>
          <WorkList>
            <li>
              <em>Meedan</em> — Design lead for media and translation startup
            </li>
            <li>
              <em>The Data Guild</em> —  Lead member at data product studio
            </li>
            <li>
              <em>LightField</em> — Design for agriculture and climate
            </li>
          </WorkList>
          <WorkList>
            <SectionSubTitle>Software development</SectionSubTitle>
            <li>
              <em>WeaveGrid</em> — Frontend/UX lead for climate tech startup
            </li>
            <li>
              <em>Contain</em> — Techology lead for fintech agriculture startup
            </li>
            <li>
              <em>Cypress</em> — Design and code for automation platform
            </li>
          </WorkList>
          <WorkList>
            <SectionSubTitle>
              Usability, graphics, UI, visualizations
            </SectionSubTitle>
            <li>
              <em>Litterati</em> — Design consultant for data prep and computer
              vision.
            </li>
            <li>
              <em>Healthmade</em> — Data visualizations for chronic health.
            </li>
            <li>
              <em>Ethnio</em> — UI development for usability research products
            </li>
            <li>
              <em>Bolt | Peters</em> — Design and UI research consulting
            </li>
            <li>
              <em>Ushahidi</em> — Design for civic media platform
            </li>
            <li>
              <em>Nonprofit Design</em> — Founder of design services company
            </li>
          </WorkList>
        </WorkOverview>
      </ContentInner>

      <PostCardGrid>
        {postEdges.map(post => (
          <PostCard
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            key={post.node.fields.slug}
            cover={post.node.frontmatter.cover}
          />
        ))}
      </PostCardGrid>

      <ContentInner>
        <SectionTitle>Contact</SectionTitle>
        <p>
          <em>
            For more details please reach out via my{' '}
            <Link to="/contact">contact form</Link>. My resume is available{' '}
            <a href="/resume">as HTML</a> or{' '}
            <a href="/Christopher-France-Resume.pdf">as a PDF</a>.
          </em>
        </p>
        <Footer>
          <p>
            un·think′ing·ly adv. — (from v. <strong>to unthink</strong>)
            proceeding by undoing one’s thinking:{' '}
            <em>to unthink and rethink technological myths</em> (Corlann Gee
            Bush)
          </p>
          <p>&copy; {new Date().getFullYear()} Christopher Blow France</p>
        </Footer>
      </ContentInner>
    </MainContent>
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY")
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
