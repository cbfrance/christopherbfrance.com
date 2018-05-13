import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import { font, color, Title, DateStamp, PostPreview, Tag, Card, GridItem, breakpoint } from '../styles/shared'

injectGlobal`
    body {
      background-color: black;
      overflow-x: hidden;
    }
`

const LandingPage = styled.div`
  color: white;
  font: ${font.caption};
  a {
    color: white;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 2fr 1fr 1fr 2fr 1fr 1fr;
  grid-template-areas:
    'A0 A0 A0 A1'
    'A2 A2 A3 A4'
    'A2 A2 A3 A5'
    'A2 A2 A3 A5';

  @media all and (max-width: ${breakpoint.desktop}) {
    grid-template-areas:
      'A0 A0 A0 A1'
      'A2 A2 A2 A2'
      'A2 A2 A2 A2'
      'A2 A2 A2 A2'
      'A3 A3 A3 A3';
  }
`
const TitleLanding = styled.div`
  color: white;
  font: ${font.subheading2};

  padding: 6rem 0;
`

const LeadHeader = styled.h2`
  font-size: 4em;
  line-height: 1.2;
  font-weight: 800;

  word-break: break-word;
  @media all and (max-width: ${breakpoint.desktop}) {
    font: ${font.subheading2};
  }
`

const FeaturedImage = styled.div`
  img {
    margin-bottom: 0;
  }
`

export default function Index({ data }) {
  return (
    <LandingPage>
      <TitleLanding>Unthinkingly</TitleLanding>
      <LeadHeader>
        Hello, I'm Chris Blow. I am a multidisciplinary designer based in the San Francisco Bay Area currently working as the Design Director at{' '}
        <a href="https://meedan.com">Meedan</a>.
      </LeadHeader>
      <Grid>
        <GridItem area="A0" />
        <GridItem area="A1" />
        <GridItem area="A2">
          <img width="100%" src="/static/images/cb-300.png" alt="Chris" />
        </GridItem>
        <GridItem area="A3">
          <p>
            I am a designer, developer, researcher and speaker. I lead user experience research teams and design award-winning products. I do rapid
            prototyping, usability research and interaction design to improve the global web.
          </p>

          <p>
            Find me on <a href="https://twitter.com/unthinkingly">Twitter</a> and <a href="https://github.com/chrisblow">Github</a>.
          </p>
        </GridItem>
      </Grid>
    </LandingPage>
  )
}
